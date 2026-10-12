import type { APIRoute } from "astro";
import { ALL_ROUTES } from "@/lib/routes";

// Only canonical, indexable 200 URLs. lastmod is the build date, which matches
// when content last changed since the site is fully static.
export const GET: APIRoute = ({ site }) => {
  const lastmod = new Date().toISOString().slice(0, 10);
  const urls = ALL_ROUTES.map((r) => {
    const loc = r.path === "/" ? new URL("/", site).href : new URL(r.path, site).href;
    return `  <url><loc>${loc}</loc><lastmod>${lastmod}</lastmod><priority>${r.priority.toFixed(1)}</priority></url>`;
  }).join("\n");
  return new Response(
    `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`,
    { headers: { "Content-Type": "application/xml; charset=utf-8" } },
  );
};
