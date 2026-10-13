import type { APIRoute } from "astro";
import { ALL_ROUTES, assetSlug } from "@/lib/routes";

const esc = (s: string) => s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

// Only canonical, indexable 200 URLs. lastmod is the build date, which matches
// when content last changed since the site is fully static. Each page lists
// its hero image (Google image sitemap extension).
export const GET: APIRoute = ({ site }) => {
  const lastmod = new Date().toISOString().slice(0, 10);
  const urls = ALL_ROUTES.map((r) => {
    const loc = new URL(r.path, site).href;
    const img = r.og
      ? `\n    <image:image><image:loc>${new URL(`/images/${assetSlug(r.path)}.webp`, site).href}</image:loc></image:image>`
      : "";
    return `  <url>\n    <loc>${esc(loc)}</loc>\n    <lastmod>${lastmod}</lastmod>\n    <priority>${r.priority.toFixed(1)}</priority>${img}\n  </url>`;
  }).join("\n");
  return new Response(
    `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">\n${urls}\n</urlset>\n`,
    { headers: { "Content-Type": "application/xml; charset=utf-8" } },
  );
};
