#!/usr/bin/env python3
"""Static SEO checker for a built site directory (Astro dist/, Next out/, etc.).

Usage: python3 verify_seo.py <build-dir> [--site https://example.com] [--json]

Checks every *.html: title, meta description, robots, canonical, h1, lang,
OG image, JSON-LD validity, image alt/dimensions, duplicate titles/descriptions,
internal links to missing pages; plus robots.txt and sitemap.xml consistency.
Stdlib only. Exit code 1 if any ERROR.
"""
import json
import os
import re
import sys
from html.parser import HTMLParser
from urllib.parse import urlparse


class PageParser(HTMLParser):
    def __init__(self):
        super().__init__(convert_charrefs=True)
        self.title = None
        self._in = None
        self._buf = []
        self.metas = {}
        self.links = []
        self.canonical = None
        self.h1 = []
        self.lang = None
        self.jsonld = []
        self.imgs = []
        self.anchors = []
        self.text_len = 0
        self._skip = 0

    def handle_starttag(self, tag, attrs):
        a = dict(attrs)
        if tag == "html":
            self.lang = a.get("lang")
        elif tag == "title":
            self._in, self._buf = "title", []
        elif tag == "h1":
            self._in, self._buf = "h1", []
        elif tag == "meta":
            k = a.get("name") or a.get("property")
            if k:
                self.metas[k.lower()] = a.get("content", "")
        elif tag == "link" and (a.get("rel") or "").lower() == "canonical":
            self.canonical = a.get("href")
        elif tag == "script":
            if (a.get("type") or "").lower() == "application/ld+json":
                self._in, self._buf = "jsonld", []
            else:
                self._skip += 1
        elif tag == "style":
            self._skip += 1
        elif tag == "img":
            self.imgs.append(a)
        elif tag == "a" and a.get("href"):
            self.anchors.append(a.get("href"))

    def handle_endtag(self, tag):
        if tag in ("script", "style") and self._in != "jsonld":
            self._skip = max(0, self._skip - 1)
            return
        if self._in and tag in ("title", "h1", "script"):
            text = "".join(self._buf).strip()
            if self._in == "title":
                self.title = re.sub(r"\s+", " ", text)
            elif self._in == "h1":
                self.h1.append(re.sub(r"\s+", " ", text))
            elif self._in == "jsonld":
                self.jsonld.append(text)
            self._in = None

    def handle_data(self, data):
        if self._in:
            self._buf.append(data)
        elif not self._skip:
            self.text_len += len(data.split())


def route_for(root, path):
    rel = os.path.relpath(path, root).replace(os.sep, "/")
    if rel == "index.html":
        return "/"
    if rel.endswith("/index.html"):
        return "/" + rel[: -len("index.html")]
    return "/" + rel[:-5] if rel.endswith(".html") else "/" + rel


def main():
    args = sys.argv[1:]
    if not args:
        print(__doc__)
        sys.exit(2)
    root = os.path.abspath(args[0])
    site = None
    if "--site" in args:
        site = args[args.index("--site") + 1].rstrip("/")
    as_json = "--json" in args

    pages = {}
    for dp, _, files in os.walk(root):
        for f in files:
            # Skip search-console verification stubs (google<hash>.html, BingSiteAuth etc.)
            if f.endswith(".html") and not re.match(r"^(google[0-9a-f]+|yandex_[0-9a-f]+)\.html$", f):
                p = os.path.join(dp, f)
                parser = PageParser()
                with open(p, encoding="utf-8", errors="replace") as fh:
                    parser.feed(fh.read())
                pages[route_for(root, p)] = parser

    issues = []  # (level, route, msg)

    def add(level, route, msg):
        issues.append((level, route, msg))

    titles, descs = {}, {}
    routes = set(pages)
    indexable = []
    for route, pg in sorted(pages.items()):
        robots = pg.metas.get("robots", "").lower()
        noindex = "noindex" in robots
        is404 = route.startswith("/404")
        if not noindex and not is404:
            indexable.append(route)
        if not pg.title:
            add("ERROR", route, "missing <title>")
        elif not noindex:
            titles.setdefault(pg.title, []).append(route)
            if len(pg.title) > 65:
                add("WARN", route, f"title {len(pg.title)} chars (>65): {pg.title!r}")
            elif len(pg.title) < 25:
                add("WARN", route, f"title short ({len(pg.title)} chars)")
        d = pg.metas.get("description")
        if noindex or is404:
            pass
        elif not d:
            add("ERROR", route, "missing meta description")
        else:
            descs.setdefault(d, []).append(route)
            if len(d) > 160:
                add("WARN", route, f"meta description {len(d)} chars (>160, may truncate)")
            elif len(d) < 70:
                add("WARN", route, f"meta description short ({len(d)} chars)")
        if not pg.lang:
            add("WARN", route, "<html> missing lang")
        if not noindex and not is404:
            if len(pg.h1) != 1:
                add("ERROR", route, f"{len(pg.h1)} <h1> tags (need exactly 1)")
            if not pg.canonical:
                add("ERROR", route, "missing canonical")
            elif site and not pg.canonical.startswith(site):
                add("WARN", route, f"canonical not on --site: {pg.canonical}")
            elif site:
                cpath = urlparse(pg.canonical).path or "/"
                if cpath.rstrip("/") != route.rstrip("/"):
                    add("WARN", route, f"canonical points elsewhere: {pg.canonical}")
            if pg.text_len < 150:
                add("WARN", route, f"thin or JS-only body ({pg.text_len} words in raw HTML)")
            og = pg.metas.get("og:image", "")
            if not og:
                add("WARN", route, "missing og:image")
            elif og.lower().split("?")[0].endswith(".svg"):
                add("WARN", route, "og:image is SVG (use 1200x630 PNG/JPG)")
            if not pg.jsonld:
                add("WARN", route, "no JSON-LD")
        for raw in pg.jsonld:
            try:
                data = json.loads(raw)
                blob = json.dumps(data)
                if re.search(r'"@type":\s*(\[[^\]]*)?"(AggregateRating|Review)"', blob):
                    add("INFO", route, "Review/AggregateRating present: confirm real reviews are visible on the page")
            except json.JSONDecodeError as e:
                add("ERROR", route, f"invalid JSON-LD: {e}")
        for img in pg.imgs:
            src = img.get("src", "?")
            if "alt" not in img:
                add("WARN", route, f"img missing alt: {src}")
            if not (img.get("width") and img.get("height")):
                add("INFO", route, f"img without width/height (CLS risk): {src}")
        for href in pg.anchors:
            u = urlparse(href)
            if u.scheme or u.netloc or href.startswith(("#", "mailto:", "tel:", "javascript:")):
                if site and href.startswith(site):
                    href = href[len(site):] or "/"
                else:
                    continue
            path = urlparse(href).path
            if not path or path.startswith(("/_astro/", "/api/", "/uploads/")) or "." in path.rsplit("/", 1)[-1]:
                continue
            cand = {path, path.rstrip("/") + "/", path.rstrip("/") or "/"}
            if not cand & routes:
                add("WARN", route, f"internal link to missing page: {href}")

    for t, rs in titles.items():
        if len(rs) > 1:
            add("ERROR", ",".join(rs), f"duplicate title: {t!r}")
    for d, rs in descs.items():
        if len(rs) > 1:
            add("WARN", ",".join(rs), "duplicate meta description")

    robots_path = os.path.join(root, "robots.txt")
    if not os.path.exists(robots_path):
        add("ERROR", "/robots.txt", "missing")
    else:
        rt = open(robots_path, encoding="utf-8").read()
        if re.search(r"(?im)^user-agent:\s*\*\s*$[\s\S]*?^disallow:\s*/\s*$", rt):
            add("ERROR", "/robots.txt", "'Disallow: /' for all bots — site blocked")
        if "sitemap:" not in rt.lower():
            add("WARN", "/robots.txt", "no Sitemap: line")
        for bot in ["GPTBot", "OAI-SearchBot", "ClaudeBot", "PerplexityBot", "Google-Extended"]:
            m = re.search(rf"(?ims)^user-agent:\s*{bot}\s*$(.*?)(?=^user-agent:|\Z)", rt)
            if m and re.search(r"(?im)^disallow:\s*/\s*$", m.group(1)):
                add("INFO", "/robots.txt", f"{bot} blocked (intended?)")

    sm_path = os.path.join(root, "sitemap.xml")
    if not os.path.exists(sm_path):
        idx = os.path.join(root, "sitemap-index.xml")
        add("WARN" if os.path.exists(idx) else "ERROR", "/sitemap.xml", "missing" + (" (sitemap-index.xml exists)" if os.path.exists(idx) else ""))
    else:
        locs = re.findall(r"<loc>\s*([^<]+?)\s*</loc>", open(sm_path, encoding="utf-8").read())
        sm_paths = {(urlparse(u).path or "/") for u in locs}
        norm = lambda p: p.rstrip("/") or "/"
        sm_norm = {norm(p) for p in sm_paths}
        for p in sm_paths:
            pg = pages.get(p) or pages.get(p.rstrip("/") + "/") or pages.get(norm(p))
            if not pg:
                add("ERROR", "/sitemap.xml", f"lists missing page {p}")
            elif "noindex" in pg.metas.get("robots", "").lower():
                add("ERROR", "/sitemap.xml", f"lists noindex page {p}")
        for r in indexable:
            if norm(r) not in sm_norm:
                add("WARN", "/sitemap.xml", f"indexable page not in sitemap: {r}")

    if as_json:
        print(json.dumps([{"level": l, "route": r, "msg": m} for l, r, m in issues], indent=2))
    else:
        order = {"ERROR": 0, "WARN": 1, "INFO": 2}
        for l, r, m in sorted(issues, key=lambda x: (order[x[0]], x[1])):
            print(f"{l:5} {r}  {m}")
        n = {k: sum(1 for i in issues if i[0] == k) for k in order}
        print(f"\n{len(pages)} pages ({len(indexable)} indexable) · {n['ERROR']} errors · {n['WARN']} warnings · {n['INFO']} info")
    sys.exit(1 if any(i[0] == "ERROR" for i in issues) else 0)


if __name__ == "__main__":
    main()
