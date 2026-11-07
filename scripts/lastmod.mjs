// Runs after `astro build` (npm postbuild). Replaces the sitemap's build-date <lastmod> with the
// date each page's visible <main> text really changed, so Google can trust the signal.
// seo/lastmod.json stores { path: { hash, date } }: commit it whenever it changes.
import { createHash } from "node:crypto";
import { existsSync, readFileSync, writeFileSync } from "node:fs";

const SITEMAP = "dist/sitemap.xml";
const STORE = "seo/lastmod.json";
const today = process.env.LASTMOD_DEFAULT ?? new Date().toISOString().slice(0, 10);
const store = existsSync(STORE) ? JSON.parse(readFileSync(STORE, "utf8")) : {};

const pageText = (path) => {
  const file = path === "/" ? "dist/index.html" : `dist${path}.html`;
  if (!existsSync(file)) return null;
  const main = readFileSync(file, "utf8").match(/<main[\s\S]*<\/main>/)?.[0] ?? "";
  return main
    .replace(/<(script|style)[\s\S]*?<\/\1>/g, " ")
    .replace(/<[^>]+>/g, " ")
    .replace(/&#0?39;|&#x27;|&apos;/gi, "'") // same text, different escaping: not a content change
    .replace(/&quot;|&#34;/g, '"')
    .replace(/\s+/g, " ")
    .trim();
};

const next = {};
const xml = readFileSync(SITEMAP, "utf8").replace(/<url>[\s\S]*?<\/url>/g, (block) => {
  const path = new URL(block.match(/<loc>([^<]+)<\/loc>/)[1]).pathname;
  const text = pageText(path);
  if (text === null) throw new Error(`Sitemap URL has no built page: ${path}`);
  const hash = createHash("sha256").update(text).digest("hex").slice(0, 16);
  const date = store[path]?.hash === hash ? store[path].date : today;
  next[path] = { hash, date };
  return block.replace(/<lastmod>[^<]*<\/lastmod>/, `<lastmod>${date}</lastmod>`);
});

writeFileSync(SITEMAP, xml);
const sorted = Object.fromEntries(Object.entries(next).sort(([a], [b]) => a.localeCompare(b)));
writeFileSync(STORE, JSON.stringify(sorted, null, 2) + "\n");
console.log(`lastmod: ${Object.keys(next).length} URLs`);
