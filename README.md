# Media 360 Concept — website (Astro)

Static, SEO-first site for Media 360 Concept (HiLITE Business Park, Kozhikode/Calicut).
Every page is pre-rendered HTML with no framework JavaScript, so Google, Bing and AI
crawlers read the full content without running scripts.

## Run

```bash
npm install
npm run dev          # http://localhost:4321
npm run build        # → dist/
npm run seo:verify   # static SEO checks on dist/ (titles, metas, H1, canonicals, JSON-LD, sitemap, links)
npm run check        # TypeScript / Astro diagnostics
```

Optional env (build time): `PUBLIC_GA4_ID`, `PUBLIC_CLARITY_ID` — analytics load only when set.

## Where things live

| What | File |
|---|---|
| Business facts (NAP, hours, profiles) | `src/lib/data.ts` → `CONTACT` (fill the `TODO(owner)` fields) |
| Homepage content | `src/lib/data.ts` + `src/pages/index.astro` |
| Service pages (one primary keyword each) | `src/lib/seo-pages.ts` (branding) and `src/lib/pages/*.ts` (marketing, web, software, local) |
| Page template | `src/pages/[slug].astro` |
| JSON-LD | `src/lib/schema.ts` |
| Head / canonical / OG | `src/layouts/Base.astro` |
| robots, sitemap, llms.txt, OG images | `src/pages/robots.txt.ts`, `sitemap.xml.ts`, `llms.txt.ts`, `llms-full.txt.ts`, `og/[slug].png.ts` |
| Redirects + headers (Vercel) | `vercel.json` |

## Adding a service page

Add an object to the right file in `src/lib/pages/`, with a unique `slug`, `title` (≤60 chars),
`description` (≤158), one `h1`, an `answer` (40–60 words), real FAQs, and `related` slugs.
The route, sitemap, OG image, footer link, llms.txt entry and schema are generated automatically.
Never add invented clients, numbers, reviews or prices.
