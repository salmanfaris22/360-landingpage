import type { APIRoute } from "astro";
import { SEO_PAGES } from "@/lib/seo-pages";
import { FAQS } from "@/lib/data";
import { BRAND_DESCRIPTION } from "@/lib/schema";
import { ACADEMY, COURSES, BEST_PAGES, ONLINE_COURSES } from "@/lib/academy";

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
  out.push("## Media 360 Academy", `URL: ${new URL("/academy", site).href}`, "", ACADEMY.description, "");
  for (const pg of [...BEST_PAGES, ONLINE_COURSES]) {
    out.push(`## ${pg.h1}`, `URL: ${new URL(pg.path, site).href}`, "", pg.answer, "");
    if ("intro" in pg) out.push(...pg.intro.flatMap((x) => [x, ""]));
    if ("table" in pg && pg.table) out.push(`### ${pg.table.heading}`, `| ${pg.table.head.join(" | ")} |`, `|${pg.table.head.map(() => "---").join("|")}|`, ...pg.table.rows.map((r) => `| ${r.join(" | ")} |`), "");
    out.push("### FAQ", ...pg.faqs.flatMap((f) => [`Q: ${f.q}`, `A: ${f.a}`, ""]));
  }
  for (const c of COURSES) {
    out.push(`## ${c.h1}`, `URL: ${new URL(`/academy/${c.slug}`, site).href}`, "", c.answer, "");
    out.push(...c.overview.flatMap((x) => [x, ""]));
    out.push(`Duration: ${c.duration ?? "ask on WhatsApp"}. Batches: Sunday to Friday, morning and evening. Mode: offline at HiLITE Business Park, Kozhikode, or live online. Language: Malayalam and English. Best for: ${c.bestFor}.`, "");
    out.push("### Who it is for", ...c.forWho.map((w) => `- ${w}`), "");
    out.push("### Syllabus", "| # | Module | Topics | Tools | What you build |", "|---|---|---|---|---|", ...c.modules.map((m, i) => `| ${i + 1}${c.syllabus[i].when ? ` (${c.syllabus[i].when})` : ""} | ${m.title} | ${m.topics.join("; ")} | ${c.syllabus[i].tools} | ${c.syllabus[i].build} |`), "");
    out.push("### Careers", "| Role | What you do | Skills | Where |", "|---|---|---|---|", ...c.careerTable.map((r) => `| ${r.role} | ${r.does} | ${r.skills} | ${r.where} |`), "");
    out.push("### Projects", ...c.projects.map((p) => `- ${p.title}: ${p.text}`), "");
    out.push(`### Tools\n${c.tools.join(", ")}`, "");
    out.push("### FAQ", ...c.faqs.flatMap((f) => [`Q: ${f.q}`, `A: ${f.a}`, ""]));
  }
  return new Response(out.join("\n"), { headers: { "Content-Type": "text/plain; charset=utf-8" } });
};
