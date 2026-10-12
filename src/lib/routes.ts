import { SEO_PAGES } from "./seo-pages";

/** Every indexable URL with the text used for its social preview image. */
export type RouteInfo = { path: string; og: string; heading: string; eyebrow: string; priority: number };

export const STATIC_ROUTES: RouteInfo[] = [
  { path: "/", og: "home", heading: "Digital Marketing, Web, Software & Branding Agency", eyebrow: "HiLITE Business Park · Calicut, Kerala", priority: 1 },
  { path: "/services", og: "services", heading: "Marketing, Web, Software, AI & Branding Services", eyebrow: "All services", priority: 0.9 },
  { path: "/about", og: "about", heading: "About Media 360 Concept", eyebrow: "Facts · Team · Approach", priority: 0.7 },
  { path: "/contact", og: "contact", heading: "Talk to Media 360 Concept", eyebrow: "WhatsApp +91 9061 460 360", priority: 0.7 },
  { path: "/privacy-policy", og: "", heading: "", eyebrow: "", priority: 0.2 },
  { path: "/terms", og: "", heading: "", eyebrow: "", priority: 0.2 },
];

export const ALL_ROUTES: RouteInfo[] = [
  ...STATIC_ROUTES,
  ...SEO_PAGES.map((p) => ({ path: `/${p.slug}`, og: p.slug, heading: p.h1, eyebrow: p.eyebrow, priority: 0.8 })),
];
