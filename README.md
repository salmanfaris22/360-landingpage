# ROOT DIGITAL — Creative Technology Studio

An immersive, Awwwards-style single-page experience: R3F galaxy hero, Lenis
smooth scroll, GSAP ScrollTrigger choreography, and 17 handcrafted sections.

## Run it

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # production build
npm start          # serve the production build
```

## Stack

| Layer | Tech |
|---|---|
| Framework | Next.js 16 (App Router) + TypeScript |
| Styling | Tailwind CSS v4 (design tokens in `globals.css`) |
| Scroll | Lenis, driven by GSAP's ticker |
| Animation | GSAP + ScrollTrigger (`@gsap/react` for cleanup) |
| 3D | three.js via React Three Fiber (galaxy point cloud) |
| Type | Space Grotesk (display) · Inter (body) · JetBrains Mono (labels) |

## Architecture

```
src/
├─ app/            layout (fonts, metadata), page (section composition), globals.css (tokens)
├─ lib/
│  ├─ data.ts      all content: services, 16 case studies, team, pricing, FAQ…
│  ├─ gsap.ts      single GSAP registration + reduced-motion/pointer helpers
│  └─ scroll.ts    shared Lenis instance (anchor glide, modal scroll lock)
└─ components/
   ├─ providers/   SmoothScroll (Lenis ↔ ScrollTrigger sync)
   ├─ effects/     Cursor (glow + ring follower)
   ├─ three/       GalaxyScene (client-only, lazy, mobile-degraded)
   ├─ ui/          Reveal/WordReveal, Magnetic, Button, Counter, Marquee, Tilt, Icons, SectionHead
   ├─ layout/      Navbar (hide-on-scroll, fullscreen menu), Footer
   └─ sections/    Hero, TrustedBy, About, Stats, Services, Work (+ WorkModal),
                   Industries, TechStack, Process, Team, Testimonials,
                   Achievements, Pricing, Faq, Blog, Contact
```

## Conventions

- Every animation respects `prefers-reduced-motion`; heavy effects are gated
  to `(pointer: fine)`.
- The horizontal Work gallery pins with GSAP on desktop and falls back to
  native snap scrolling on touch.
- All imagery is Unsplash via `next/image` (`images.unsplash.com` allowed in
  `next.config.ts`); swap `src/lib/data.ts` URLs for real project assets.
- The contact form simulates submission — wire `onSubmit` in
  `components/sections/Contact.tsx` to a route handler or CRM.
