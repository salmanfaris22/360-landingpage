# Media 360 Concept — SEO Transformation Report

## Phase 3 addendum — Core Web Vitals + accessibility (13 July 2026)

Lighthouse (mobile, slow-4G simulation): **Accessibility 87 → 100 · Performance → 85** · FCP 2.1s → 1.5s · LCP 5.1s → 4.2s · TBT 330ms → 120ms · Speed Index 5.4s → 2.3s · CLS 0.

| Fix | Why |
|---|---|
| Hero entrance moved from GSAP to pure CSS keyframes | GSAP re-hid the H1 until JS hydrated (~5s on slow 4G), destroying LCP; CSS animates at first paint |
| H1 reveal = fade-up, not clip-mask | Clip-masked text never registers an LCP paint; opacity-based reveals do |
| Space Grotesk `display: "optional"` | Late font swap was re-triggering LCP at ~4.5s; optional never swaps late |
| JetBrains Mono 500 weight dropped | 22KB render-blocking preload used on one 10px badge |
| GalaxyScene (three.js) idle-mounted, ≥1024px only | The 3D sky no longer costs phones any JS; desktop loads it after idle |
| `browserslist` modern targets | Removes legacy polyfill JS |
| Stats `<dl>` → `<ul>`; star ratings `role="img"`; removed `aria-label` from elements whose role prohibits naming; marquee contrast raised to ≥3:1 (`text-stroke` 45%, wordmarks `white/50`) | All four failing Lighthouse a11y audits |
| `public/google4197dc36318ff733.html` | HTML-file GSC verification, alongside the meta tag |

Remaining lab LCP (~4.2s simulated slow-4G) is the render-blocking CSS+font chain — the realistic floor while keeping the brand fonts; field data (CrUX) on real connections will be substantially better.

## Phase 2 addendum — multi-page architecture (13 July 2026)

The single-page ceiling described in §1/§6 below is now removed. This phase shipped:

### Implemented in this pass

| Item | Where |
|---|---|
| **Google Search Console verification** meta tag | `layout.tsx` → `verification.google` (renders `<meta name="google-site-verification" …>`) |
| **9 keyword landing pages** (SSG, zero client JS in content) | `/branding-agency-kochi` · `/advertising-agency-kerala` · `/logo-design-kochi` · `/packaging-design-kerala` · `/digital-marketing-kochi` · `/web-development-kochi` · `/brand-strategy-kerala` · `/ui-ux-design-kochi` · `/graphic-design-kochi` — content in `src/lib/seo-pages.ts`, template `src/components/seo/LandingPage.tsx`, route `src/app/[slug]/page.tsx` |
| **Per-page metadata** | Unique title/description/canonical/hreflang per page via `generateMetadata` |
| **Dynamic OG images** | `app/opengraph-image.tsx` (site-wide) + `app/[slug]/opengraph-image.tsx` (per-page, branded 1200×630) — WhatsApp/social previews now branded everywhere |
| **Schema graph centralised** | `src/lib/schema.ts` — Organization/ProfessionalService (+geo, contactPoint, priceRange), WebSite, ImageObject (logo), WebPage, BreadcrumbList, Service, FAQPage per page; XSS-safe injection via `JsonLd` |
| **Sitemap** | All 10 URLs, priorities 1.0 / 0.9 |
| **Web app manifest** | `app/manifest.ts` |
| **Internal-link mesh** | Footer "Services" column (site-wide, keyword anchors) · homepage service rows link to matching pages · every landing page links 4 related pages + homepage |
| **Accessibility** | Skip-to-content link; landing FAQs use native `<details>`; visible breadcrumb nav with `aria-label` |
| **llms.txt** | Service-page URLs listed for AI crawlers |

### Deliberately NOT added (don't add without real data)

- **Review/AggregateRating schema** — current testimonials are self-descriptions; self-serving review markup violates Google's structured-data policy and risks a manual action. Add only with genuine third-party reviews (Google reviews via GBP are the priority anyway).
- **SearchAction/Sitelinks-searchbox** — the site has no search page, and Google retired the sitelinks search box in 2024. Marking up a nonexistent search endpoint is invalid.
- **Opening hours, street address, sameAs socials** — unknown/not live yet. Fabricated NAP data does more local-SEO damage than missing data. Add to `src/lib/schema.ts` the day they're real, matching GBP exactly.

### Do these next (owner actions, in order)

1. **Google Search Console**: the verification tag is live in the site head — deploy, then in GSC choose "URL prefix" → `https://www.360mediaconcepts.com` → verify via HTML tag. Immediately submit `https://www.360mediaconcepts.com/sitemap.xml` and request indexing for the homepage + all 9 landing pages.
2. **Google Business Profile** (highest-impact single action, unchanged from §3): create/claim "Media 360 Concept", category *Advertising agency* (secondary: Graphic designer, Website designer, Marketing agency). Use exactly the NAP on the site: Media 360 Concept · Kochi, Kerala · +91 9061 460 360 · media360concept@gmail.com. Add the street address to GBP **and** to `schema.ts`/Contact section the same day. Upload real work photos, list the 9 services using the same names as the landing pages, and post monthly.
3. **Reviews engine**: after every delivered project, send the GBP review link on WhatsApp. 10+ reviews unlocks meaningful Map Pack movement; once real reviews exist, revisit review schema.
4. **Citations / NAP consistency** (same NAP string everywhere): JustDial, Sulekha, IndiaMART, Clutch, DesignRush, GoodFirms, Behance/Dribbble portfolio profiles, LinkedIn company page, Instagram business profile. Add every live profile URL to `sameAs` in `schema.ts`.
5. **Backlink starters**: "Branding by Media 360 Concept" footer credits on client sites; Kerala business media (Dhanam, Manorama business desk); Kerala Startup Mission ecosystem listings.

### Anchor-text strategy (already wired into the site)

- Footer + service rows use **exact keyword anchors** ("Branding Agency Kochi", "Logo Design Kochi") — safe because they're navigation, sitewide, and match page titles.
- In-content related-service links use natural phrases ("Logo Design in Kochi").
- For **external** links (citations, guest posts, PR), vary: ~50% brand ("Media 360 Concept"), ~30% brand+keyword, ~20% naked URL — never sitewide exact-match anchors from third parties.

### Remaining gaps (unchanged from §3)

Real testimonials/team photos, wired contact form backend, live social profiles, street address, and the blog build-out (§7 topics; the 4 teased posts are still promises).

---

**Date:** July 2026 · **Scope:** Full homepage audit + rewrite for Kerala-first positioning
**Method:** `seo-audit` + `ai-seo` skills (installed in `.claude/skills/`) — crawlability → technical → on-page → content quality → authority.

---

## 1. Scores

| Area | Before | After | Path to 100 |
|---|---|---|---|
| **Overall SEO** | 38/100 | **78/100** | Multi-page architecture + GBP + backlinks |
| Technical SEO | 45 | **92** | OG image, real social profiles |
| Content | 40 | **80** | Real case studies with numbers, real testimonials |
| Local SEO | 5 | **72** | Google Business Profile, street address (NAP), location pages |
| EEAT | 25 | **55** | Real team names/photos, client logos, founder story |
| AI Search readiness | 20 | **85** | Third-party presence (directories, press) |
| Conversion | 50 | **85** | Wire the contact form to a real backend |
| Mobile UX / CWV | 80 | **80** | Audit galaxy scene JS cost on low-end phones |

**Why not higher:** a single-page site has a hard ceiling. One URL can only rank for one primary intent cluster. The biggest remaining lever is architecture (see §6).

---

## 2. What was changed and why

### Technical (was broken, now fixed)
| Fix | Why it matters |
|---|---|
| `metadataBase` was `http://` → now `https://` | Canonical signals pointed at the wrong protocol — classic duplicate-content trap |
| Added canonical URL, robots meta, `max-image-preview:large` | Google had no canonical or snippet directives at all |
| Added `robots.ts` explicitly allowing GPTBot, PerplexityBot, ClaudeBot, Google-Extended | AI engines can't cite a site they can't crawl (ai-seo skill, Pillar 3) |
| Added `sitemap.ts` referenced from robots.txt | Was completely missing |
| Added `public/llms.txt` | Machine-readable agency summary for AI assistants (llmstxt.org) |
| Twitter card, `og:locale=en_IN`, geo.region `IN-KL`, geo.placename Kochi | Zero social/geo signals before |

### Structured data (was 1 thin Organization, now a full @graph)
- **ProfessionalService + Organization** with Kochi/Kerala `PostalAddress`, `areaServed` (Kerala, India, KSA, UAE, USA), `knowsAbout` entities, slogan.
- **OfferCatalog** — all 11 services as schema.org Services, generated from `SERVICES` so it can never drift from the page.
- **FAQPage** — all 10 FAQs, generated from `FAQS`. Eligible for FAQ rich results and AI answer extraction.
- **WebSite + WebPage** nodes with `@id` cross-references (entity graph for Knowledge Panel eligibility).

### On-page
- **Title:** `Media 360 Concept | Branding & Creative Agency in Kochi, Kerala` (61 chars, keyword-first-ish, brand-led).
- **Description:** 178→ trimmed to value + proof + CTA with "branding agency in Kochi, Kerala" up front.
- **H1:** "BRANDING ISN'T AN EXPENSE…" → **"WE BUILD BRANDS KERALA CAN'T FORGET."** Emotional + contains the two entities that matter (brands, Kerala). The exact-match phrase "Branding Agency in Kochi, Kerala" sits in the hero eyebrow directly above it.
- **H2s de-duplicated and made semantic.** Before: "We Are Deep-Rooted." appeared twice (Team + Testimonials), "Your Ideas Deserve to Shine." twice (Pricing + Contact). Every section now has a unique, meaningful heading.
- **Alt text** upgraded to descriptive + entity-bearing (e.g. "Media 360 Concept branding agency team collaborating at the Kochi, Kerala studio").
- **Nav** gained a FAQ link (Google follows in-page anchors for sitelinks).

### Content (every string in `src/lib/data.ts` rewritten)
- **Services** reordered branding-first, each description rewritten with natural local intent ("a restaurant in Kochi, a hospital in Thrissur, a startup in Riyadh") — no keyword stuffing (Princeton GEO study: stuffing *reduces* AI visibility by 10%).
- **Process** was 9 vague slogans → now a real 9-step methodology (Listen → Research → Strategy → Concept → Design → Refine → Produce → Launch → Grow). This is E-E-A-T "demonstrated expertise" and a featured-snippet target for "branding process".
- **FAQs** rewritten as People-Also-Ask targets with 40–60-word extractable answers: *"How much does branding cost in Kerala?"*, *"How long does a branding project take?"*, *"Do you work with restaurants, hospitals, and schools?"*, *"Why choose Media 360 Concept over other agencies in Kerala?"*
- **Milestones** now lead with Kochi HQ; offices card shows Kochi first.
- **Blog teasers** replaced vision fluff with 4 real search-intent titles (cost guide, restaurant branding, startup checklist, rebranding).

### Conversion
- **WhatsApp deep link** (`wa.me/919061460360` with pre-filled message) in Contact and Footer — the #1 enquiry channel for Kerala SMBs.
- Budget selector **USD → INR** (Under ₹1L / ₹1–5L / ₹5L+).
- Placeholders localized ("Priya Menon", "We're opening a new restaurant in Kochi…").
- Hero CTA: "Let's Create Together" → **"Get a Free Brand Consultation"** (specific value beats vague poetry).
- NAP surfaced: "Kochi, Kerala, India" in Contact and Footer.

---

## 3. Critical gaps only you can close (do these first)

1. **Google Business Profile** for "Media 360 Concept" in Kochi, category *Advertising agency / Graphic designer*. Without GBP you cannot appear in the Map Pack, which is where most "branding agency kochi" clicks go. **Impact: highest of any single action.**
2. **Street address.** Schema currently has city-level only. Add the full address to the site + schema + GBP (consistent NAP everywhere).
3. **Real proof.** Current "testimonials" are self-descriptions (honestly labeled, but weak). Get 5–10 real client quotes with names/companies, and swap the stock-photo "team" for real people. Stock faces presented as team members is an EEAT liability Google's quality raters specifically look for.
4. **Wire the contact form** — it currently simulates submission (`Contact.tsx` `onSubmit`). Every enquiry is being lost.
5. **Social profiles.** Footer/contact icons link to `#`. Create/link Instagram + LinkedIn (minimum for a Kerala agency) and add them to `sameAs` in the schema.
6. **OG image.** Add a 1200×630 branded image (`app/opengraph-image.png`) — WhatsApp link previews matter enormously in this market.
7. **Domain protocol.** Ensure the live host 301s http→https and non-www→www to match the canonical.

## 4. Missing landing pages (the 90-day architecture)

Single page = one ranking shot. Build these as real routes:

| Page | Target keyword cluster |
|---|---|
| `/branding-agency-kochi` | branding agency Kochi/Kerala, brand consultants |
| `/logo-design-kerala` | logo design Kerala, logo design company Kochi |
| `/packaging-design-kerala` | package design, label design Kerala |
| `/restaurant-branding-kerala` | restaurant branding, menu design |
| `/hospital-branding-kerala` | healthcare branding Kerala |
| `/school-branding-kerala` | school/education branding |
| `/signage-vehicle-branding-kerala` | signage company, vehicle branding Kerala |
| `/digital-marketing-kerala` | digital marketing agency Kerala/Kochi |
| `/video-production-kerala` | video production, motion graphics Kerala |
| `/branding-agency-saudi-arabia` | KSA market (17 years of proof is a moat) |
| `/work/[slug]` case studies | long-tail + proof for every service page |
| `/blog/*` | the 100 topics below |

Each needs: unique title/H1, 800+ words of genuinely local content, its own FAQ block + schema, internal links from the homepage service rows (turn each service row into a link), and BreadcrumbList schema.

## 5. Competitive reality check

Kerala competitors (Stark Communications, Cutting Edge, Organic BPS, 9&Co, mid-size Kochi studios) that outrank a single-pager do it with: service pages per keyword, real client logos and case studies with numbers, GBP with 50+ reviews, listings in local directories (JustDial, Sulekha, Clutch, DesignRush), and steady blogs. None of them have 17 years of KSA experience or a modern AI/automation offering — **that pairing ("Kerala craft + Gulf discipline", NRI-businessman appeal) is the positioning wedge this rewrite leans into.**

## 6. Roadmap

- **Now (done):** technical foundation, schema graph, content rewrite, conversion fixes, AI-crawler access, llms.txt.
- **30 days:** GBP + reviews engine (WhatsApp follow-up asking for Google review), real testimonials/team, form backend, OG image, socials, directory listings, first 4 blog posts (the ones teased on the homepage — they're promises now).
- **90 days:** the 12 landing pages above, case studies with metrics, internal-link mesh, Search Console + GA4 baselines.
- **6–12 months:** topical authority via the blog clusters below, PR in Kerala business media (Dhanam, Manorama business desk), backlinks from client sites ("Branding by Media 360 Concept" footer credits), Malayalam-language variants for high-intent pages (with proper hreflang).

## 7. 100 blog topics (clustered, real search intent)

**Cost & decision (highest commercial intent)**
1. How much does branding cost in Kerala? · 2. Logo design price guide India 2026 · 3. How much does a website cost in Kochi? · 4. Digital marketing retainer costs in Kerala · 5. Packaging design cost per SKU · 6. What a ₹1 lakh branding budget actually buys · 7. Agency vs freelancer in Kerala · 8. How to choose a branding agency in Kochi (checklist) · 9. Questions to ask before hiring a creative agency · 10. Why cheap logos cost more in the end

**Restaurant & hospitality (Kochi goldmine)**
11. Restaurant branding guide Kerala · 12. Menu design psychology · 13. Naming a restaurant in Kerala · 14. Café branding on a budget · 15. Cloud kitchen branding · 16. Food photography for menus · 17. Zomato/Swiggy listing optimization · 18. Resort branding in Kerala tourism · 19. Houseboat brand experiences · 20. Bakery packaging that sells

**Healthcare & education**
21. Hospital branding guide Kerala · 22. Clinic identity essentials · 23. Ayurveda brand building (Kerala's export) · 24. Dental clinic marketing · 25. Pharmacy branding · 26. School branding guide · 27. College admission-season campaigns · 28. Ed-tech branding in Kerala · 29. Nursery/preschool identity · 30. Hospital wayfinding signage

**Retail, real estate & industry**
31. Retail store branding Kochi · 32. Supermarket private-label packaging · 33. Jewellery brand identity (Thrissur cluster) · 34. Textile shop rebranding · 35. Real estate project branding · 36. Builder brochure design · 37. Construction company identity · 38. Manufacturing B2B branding · 39. Spices export packaging · 40. Seafood export branding

**Identity & design craft**
41. Brand identity checklist · 42. Logo design trends 2026 · 43. Color psychology for Indian markets · 44. Typography for bilingual (Malayalam/English) brands · 45. Brand guidelines: what's inside · 46. Rebranding: when and how · 47. Brand naming methods · 48. Tagline writing · 49. Mascot design · 50. Packaging dieline basics

**Local & practical**
51. Vehicle branding ideas Kerala · 52. Signage rules in Kochi corporation limits · 53. Flex vs ACP vs LED signage · 54. T-shirt printing for events · 55. Wedding brand styling (huge Kerala market) · 56. Festival campaign ideas (Onam/Vishu marketing) · 57. Exhibition stall design Cochin · 58. Corporate gifting design · 59. Brochure printing guide · 60. Business card finishes compared

**Digital marketing**
61. SEO for Kerala businesses · 62. Google Business Profile guide · 63. Instagram for Kochi brands · 64. WhatsApp Business automation · 65. Malayalam content marketing · 66. Google Ads for local services · 67. Influencer marketing in Kerala · 68. Reels strategy for restaurants · 69. Landing pages that convert · 70. Email marketing for retail

**Video & production**
71. Brand film guide · 72. Product video on a budget · 73. Motion graphics vs live action · 74. 3D product rendering for e-commerce · 75. Corporate video scripts · 76. Drone videography rules India · 77. Testimonial video formats · 78. Ad film production process · 79. YouTube for B2B · 80. Animation styles compared

**Strategy & growth**
81. Startup branding guide Kerala · 82. Kerala Startup Mission branding tips · 83. Personal branding for founders · 84. Employer branding for IT companies (Infopark/Technopark) · 85. Franchise brand consistency · 86. Brand architecture for family businesses · 87. NRI business branding (Gulf connection) · 88. Export brand building from India · 89. D2C brand launch playbook · 90. Luxury branding principles

**Authority & AI-era**
91. How AI is changing branding · 92. Getting your brand cited by ChatGPT/Perplexity · 93. Brand consistency audits · 94. Marketing mistakes Kerala SMBs make · 95. Case study: rebrand anatomy (when real ones exist) · 96. Brand ROI measurement · 97. Trademark basics India · 98. Print vs digital budget split · 99. Agency process behind the scenes · 100. Annual branding trends report (evergreen, updated yearly)

Publish 2–4/month, each with FAQ schema, a Kerala angle, internal links to the matching service page, and an author byline with a real person.
