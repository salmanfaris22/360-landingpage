import { CONTACT, SERVICES } from "./data";
import { ALL_ROUTES, assetSlug } from "./routes";

/**
 * Single source of truth for every JSON-LD graph on the site.
 * Every page embeds the org + website nodes plus its own nodes, all linked
 * by stable @ids, so any crawled URL carries the full entity picture.
 *
 * Deliberately absent — do not add without real data:
 * - Review / AggregateRating: only with genuine third-party reviews shown on the page.
 * - sameAs: filled from CONTACT.sameAs once real profiles are live.
 */

export const SITE_URL = CONTACT.site;
export const ORG_ID = `${SITE_URL}/#organization`;
const WEBSITE_ID = `${SITE_URL}/#website`;
const LOGO_ID = `${SITE_URL}/#logo`;

export type Faq = { q: string; a: string };
export type Crumb = { name: string; path: string };
type Node = Record<string, unknown>;

export const BRAND_DESCRIPTION =
  "Media 360 Concept is a digital marketing, web development, software, AI automation and branding agency at HiLITE Business Park, Kozhikode (Calicut), Kerala. It serves businesses across Kerala, India, Saudi Arabia, the UAE and the USA, combining strategy, design, technology and marketing under one roof.";

const url = (path: string) => (path === "/" ? `${SITE_URL}/` : `${SITE_URL}${path}`);

const logoNode: Node = {
  "@type": "ImageObject",
  "@id": LOGO_ID,
  url: `${SITE_URL}/logo.png`,
  contentUrl: `${SITE_URL}/logo.png`,
  width: 512,
  height: 512,
  caption: "Media 360 Concept logo",
};

const organizationNode: Node = {
  "@type": ["ProfessionalService", "Organization"],
  "@id": ORG_ID,
  name: "Media 360 Concept",
  alternateName: ["Media360 Concept", "Media 360"],
  description: BRAND_DESCRIPTION,
  url: `${SITE_URL}/`,
  email: CONTACT.email,
  telephone: CONTACT.phone,
  slogan: "Designing Brands. Connecting Worlds.",
  priceRange: "₹₹",
  logo: { "@id": LOGO_ID },
  image: `${SITE_URL}/og/home.png`,
  address: {
    "@type": "PostalAddress",
    streetAddress: CONTACT.postal.street,
    addressLocality: CONTACT.postal.locality,
    addressRegion: CONTACT.postal.region,
    postalCode: CONTACT.postal.postalCode,
    addressCountry: CONTACT.postal.country,
  },
  geo: { "@type": "GeoCoordinates", latitude: CONTACT.geo.lat, longitude: CONTACT.geo.lng },
  location: {
    "@type": "Place",
    name: "HiLITE Business Park",
    address: {
      "@type": "PostalAddress",
      streetAddress: CONTACT.postal.street,
      addressLocality: CONTACT.postal.locality,
      addressRegion: CONTACT.postal.region,
      postalCode: CONTACT.postal.postalCode,
      addressCountry: CONTACT.postal.country,
    },
    containedInPlace: { "@type": "Place", name: "HiLITE City, Kozhikode (Calicut)" },
  },
  hasMap: CONTACT.mapUrl,
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
    opens: "09:30",
    closes: "18:30",
  },
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "sales",
    telephone: CONTACT.phone,
    email: CONTACT.email,
    availableLanguage: ["English", "Malayalam"],
    areaServed: ["IN", "SA", "AE", "US"],
  },
  areaServed: [
    { "@type": "City", name: "Kozhikode", alternateName: "Calicut" },
    { "@type": "State", name: "Kerala" },
    { "@type": "Country", name: "India" },
    { "@type": "Country", name: "Saudi Arabia" },
    { "@type": "Country", name: "United Arab Emirates" },
    { "@type": "Country", name: "United States" },
  ],
  knowsAbout: [
    "Digital Marketing", "Search Engine Optimization", "Local SEO", "Social Media Marketing",
    "Google Ads", "Meta Ads", "Web Development", "Next.js", "React", "E-commerce Development",
    "Custom Software Development", "CRM Development", "ERP Development", "Mobile App Development",
    "SaaS Development", "AI Automation", "AI Chatbots", "Branding", "Logo Design",
    "Packaging Design", "UI/UX Design", "Video Production", "Motion Graphics", "Advertising",
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Media 360 Concept services",
    itemListElement: SERVICES.map((s) => ({
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: s.title,
        description: s.description,
        ...(s.href ? { url: url(s.href) } : {}),
        provider: { "@id": ORG_ID },
      },
    })),
  },
  ...(CONTACT.sameAs.length ? { sameAs: CONTACT.sameAs } : {}),
};

const websiteNode: Node = {
  "@type": "WebSite",
  "@id": WEBSITE_ID,
  url: `${SITE_URL}/`,
  name: "Media 360 Concept",
  inLanguage: "en-IN",
  publisher: { "@id": ORG_ID },
};

function breadcrumbNode(path: string, items: Crumb[]): Node {
  return {
    "@type": "BreadcrumbList",
    "@id": `${url(path)}#breadcrumb`,
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: url(item.path),
    })),
  };
}

function faqNode(path: string, faqs: Faq[]): Node {
  return {
    "@type": "FAQPage",
    "@id": `${url(path)}#faq`,
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: { "@type": "Answer", text: faq.a },
    })),
  };
}

function webPageNode(opts: {
  path: string;
  title: string;
  description: string;
  type?: string;
  about?: string;
  hasBreadcrumb: boolean;
}): Node {
  const u = url(opts.path);
  const own = assetSlug(opts.path);
  // Pages without their own artwork (legal pages) fall back to the homepage image.
  const slug = ALL_ROUTES.some((r) => r.og && assetSlug(r.path) === own) ? own : "home";
  return {
    "@type": opts.type ?? "WebPage",
    "@id": `${u}#webpage`,
    url: u,
    name: opts.title,
    description: opts.description,
    isPartOf: { "@id": WEBSITE_ID },
    about: { "@id": opts.about ?? ORG_ID },
    primaryImageOfPage: {
      "@type": "ImageObject",
      "@id": `${u}#primaryimage`,
      url: `${SITE_URL}/images/${slug}.webp`,
      contentUrl: `${SITE_URL}/images/${slug}.webp`,
      width: 1600,
      height: 900,
      caption: `${opts.title} — Media 360 Concept, HiLITE Business Park, Kozhikode`,
    },
    image: [`${SITE_URL}/images/${slug}.webp`, `${SITE_URL}/og/${slug}.png`],
    ...(opts.hasBreadcrumb ? { breadcrumb: { "@id": `${u}#breadcrumb` } } : {}),
    inLanguage: "en-IN",
  };
}

const graph = (nodes: Node[]) => ({ "@context": "https://schema.org", "@graph": nodes });

/** Homepage graph. */
export function homeGraph(title: string, description: string, faqs: Faq[]) {
  return graph([
    organizationNode,
    websiteNode,
    logoNode,
    webPageNode({ path: "/", title, description, hasBreadcrumb: false }),
    faqNode("/", faqs),
  ]);
}

/** Generic page graph (about, contact, services hub, legal). */
export function pageGraph(opts: {
  path: string;
  title: string;
  description: string;
  crumbs: Crumb[];
  type?: "WebPage" | "AboutPage" | "ContactPage" | "CollectionPage";
  faqs?: Faq[];
}) {
  return graph([
    organizationNode,
    websiteNode,
    logoNode,
    webPageNode({ ...opts, hasBreadcrumb: true }),
    breadcrumbNode(opts.path, opts.crumbs),
    ...(opts.faqs?.length ? [faqNode(opts.path, opts.faqs)] : []),
  ]);
}

/** Service landing page graph. */
export function servicePageGraph(page: {
  slug: string;
  title: string;
  description: string;
  serviceName: string;
  serviceDescription: string;
  faqs: Faq[];
  steps?: { title: string; text: string }[];
  crumbs: Crumb[];
  image?: string;
}) {
  const path = `/${page.slug}`;
  const u = url(path);
  const nodes: Node[] = [
    organizationNode,
    websiteNode,
    logoNode,
    {
      "@type": "Service",
      "@id": `${u}#service`,
      name: page.serviceName,
      description: page.serviceDescription,
      serviceType: page.serviceName,
      url: u,
      provider: { "@id": ORG_ID },
      areaServed: [
        { "@type": "City", name: "Kozhikode" },
        { "@type": "State", name: "Kerala" },
        { "@type": "Country", name: "India" },
      ],
    },
    webPageNode({
      path,
      title: page.title,
      description: page.description,
      about: `${u}#service`,
      hasBreadcrumb: true,
    }),
    breadcrumbNode(path, page.crumbs),
    faqNode(path, page.faqs),
  ];
  if (page.steps?.length) {
    nodes.push({
      "@type": "HowTo",
      "@id": `${u}#process`,
      name: `How the ${page.serviceName} process works`,
      step: page.steps.map((s, i) => ({
        "@type": "HowToStep",
        position: i + 1,
        name: s.title,
        text: s.text,
      })),
    });
  }
  return graph(nodes);
}

/** Serialise JSON-LD safely: `<` escaped so copy can never close the script tag. */
export const jsonLd = (data: object) => JSON.stringify(data).replace(/</g, "\\u003c");
