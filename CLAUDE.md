# Media 360 Concept site (Astro, static)

- Business: Media 360 Concept, HiLITE Business Park, Kozhikode (Calicut). Primary market is Kozhikode/Kerala — do not add location pages for cities without a real office or real clients.
- Never invent facts, clients, stats, reviews, ratings or prices. Unknowns are `TODO(owner)` in `src/lib/data.ts`.
- One primary keyword per page; titles ≤60 chars (brand appended by Base.astro when it fits), descriptions ≤158.
- No heavy JS/animation libraries — performance and SEO come first. Public content must be static HTML.
- After changes: `npm run build && npm run seo:verify` must report 0 errors.
- URLs have no trailing slash (Vercel cleanUrls); keep existing slugs stable or add 301s in vercel.json.
