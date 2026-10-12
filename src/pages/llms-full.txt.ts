import type { APIRoute } from "astro";
import { SEO_PAGES } from "@/lib/seo-pages";
import { FAQS } from "@/lib/data";
import { BRAND_DESCRIPTION } from "@/lib/schema";

// Plain-text mirror of the service pages (identical to what visitors see).
export const GET: APIRoute = ({ site }) => {
  const out: string[] = ["# Media 360 Concept — full service reference", "", `> ${BRAND_DESCRIPTION}`, "", "## General questions", ""];
  for (const f of FAQS) out.push(`### ${f.q}`, f.a, "");
  for (const p of SEO_PAGES) {
    out.push(`## ${p.h1}`, `URL: ${new URL(`/${p.slug}`, site).href}`, "");
    if (p.answer) out.push(p.answer, "");
    out.push(...p.intro.flatMap((x) => [x, ""]));
    for (const s of p.sections) {
      out.push(`### ${s.heading}`, ...s.body.flatMap((x) => [x, ""]));
      if (s.bullets) out.push(...s.bullets.map((b) => `- ${b.title}: ${b.text}`), "");
    }
    if (p.steps) out.push("### Process", ...p.steps.map((s, i) => `${i + 1}. ${s.title}: ${s.text}`), "");
    if (p.table) out.push(`### ${p.table.caption}`, `| ${p.table.head.join(" | ")} |`, `|${p.table.head.map(() => "---").join("|")}|`, ...p.table.rows.map((r) => `| ${r.join(" | ")} |`), "");
    out.push("### FAQ", ...p.faqs.flatMap((f) => [`Q: ${f.q}`, `A: ${f.a}`, ""]));
  }
  return new Response(out.join("\n"), { headers: { "Content-Type": "text/plain; charset=utf-8" } });
};
