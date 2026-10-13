import { SEO_PAGES } from "./seo-pages";
import { COURSES } from "./academy";

/** Every indexable URL with the text used for its social preview image. */
export type RouteInfo = { path: string; og: string; heading: string; eyebrow: string; priority: number; chips?: string[]; theme?: string };

export const STATIC_ROUTES: RouteInfo[] = [
  { path: "/", og: "home", heading: "Media 360 — Digital Agency & AI Academy", eyebrow: "HiLITE Business Park · Calicut, Kerala", priority: 1, chips: ["Agency", "Academy", "Digital Marketing", "AI", "Courses", "Video"] },
  { path: "/agency", og: "agency", heading: "Digital Marketing, Web, Software & Branding Agency", eyebrow: "Media 360 Agency · HiLITE Business Park, Calicut", priority: 0.95, chips: ["Digital Marketing", "SEO", "Websites", "Software", "AI Automation", "Branding"] },
  { path: "/services", og: "services", heading: "Marketing, Web, Software, AI & Branding Services", eyebrow: "All services", priority: 0.9, chips: ["Marketing", "Web", "Software & Apps", "AI", "Branding", "Video"] },
  { path: "/about", og: "about", heading: "About Media 360 Concept", eyebrow: "Facts · Team · Approach", priority: 0.7, chips: ["Kozhikode", "Saudi Arabia", "India", "USA", "One team"] },
  { path: "/contact", og: "contact", heading: "Talk to Media 360 Concept", eyebrow: "WhatsApp +91 9061 460 360", priority: 0.7, chips: ["WhatsApp", "Call", "Email", "Visit HiLITE"] },
  { path: "/faq", og: "faq", heading: "Questions About Media 360 Concept", eyebrow: "FAQ · HiLITE Business Park, Calicut", priority: 0.7, chips: ["Services", "Pricing", "Timelines", "Location", "AI & SEO"] },
  { path: "/academy", og: "academy", heading: "Media 360 Academy — AI-First Tech & Creative Courses", eyebrow: "Academy · HiLITE Business Park, Calicut", priority: 0.9, chips: ["MERN Stack", "Python Full Stack", "Golang", "AI Developer", "Vibe Coding", "AI Video Editing"], theme: "academy" },
  { path: "/privacy-policy", og: "", heading: "", eyebrow: "", priority: 0.2 },
  { path: "/terms", og: "", heading: "", eyebrow: "", priority: 0.2 },
];

export const ALL_ROUTES: RouteInfo[] = [
  ...STATIC_ROUTES,
  ...SEO_PAGES.map((p) => ({ path: `/${p.slug}`, og: p.slug, heading: p.h1, eyebrow: p.eyebrow, priority: p.cluster === "local" ? 0.9 : 0.8, chips: p.deliverables, theme: p.cluster ?? "branding" })),
  ...COURSES.map((c) => ({ path: `/academy/${c.slug}`, og: `academy-${c.slug}`, heading: c.h1, eyebrow: `Media 360 Academy · ${c.track}`, priority: 0.8, chips: c.tools, theme: "academy" })),
];

/** Slug used for per-page assets (/og/<slug>.png, /images/<slug>.webp). */
export const assetSlug = (path: string) => (path === "/" ? "home" : path.slice(1).replace(/\//g, "-"));
