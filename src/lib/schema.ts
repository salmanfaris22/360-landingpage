import { CONTACT, SERVICES, FAQS } from "./data";

/**
 * Single source of truth for every JSON-LD graph on the site.
 * Each page embeds a full graph (org + website + page-specific nodes) so
 * Google gets the complete entity picture no matter which URL it crawls.
 *
 * Deliberately absent — do not add without real data:
 * - Review/AggregateRating: self-serving review markup is against Google's
 *   structured-data policies; add only when real third-party reviews exist.
 * - sameAs social profiles: add when the profiles are live.
 * - openingHoursSpecification & street address: add the moment the office
 *   address is published on the page (NAP must match Google Business Profile).
 */

export const SITE_URL = CONTACT.site;

const ORG_ID = `${SITE_URL}/#organization`;
const WEBSITE_ID = `${SITE_URL}/#website`;
const LOGO_ID = `${SITE_URL}/#logo`;

export type Faq = { q: string; a: string };

const logoNode = {
  "@type": "ImageObject",
  "@id": LOGO_ID,
  url: `${SITE_URL}/opengraph-image`,
  contentUrl: `${SITE_URL}/opengraph-image`,
  width: 1200,
  height: 630,
  caption: "Media 360 Concept — Branding & Creative Agency in Kozhikode, Kerala",
};

const organizationNode = {
  "@type": ["ProfessionalService", "Organization"],
  "@id": ORG_ID,
  name: "Media 360 Concept",
  alternateName: ["Media360 Concept", "Media 360 Concept Kerala"],
  description:
    "Media 360 Concept is a premium branding, advertising, and creative agency headquartered at Business Park, Calicut (Kozhikode), Kerala — delivering brand identity, logo design, packaging, digital marketing, media production, web and app development for clients across Kerala, India, Saudi Arabia, the UAE, and the USA.",
  url: SITE_URL,
  email: CONTACT.email,
  telephone: CONTACT.phone,
  foundingDate: "2009",
  slogan: "Designing Brands. Connecting Worlds.",
  priceRange: "₹₹",
  logo: { "@id": LOGO_ID },
  image: { "@id": LOGO_ID },
  address: {
    "@type": "PostalAddress",
    addressLocality: "Kozhikode",
    addressRegion: "Kerala",
    addressCountry: "IN",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 11.2588,
    longitude: 75.7804,
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
    { "@type": "City", name: "Kozhikode" },
    { "@type": "State", name: "Kerala" },
    { "@type": "Country", name: "India" },
    { "@type": "Country", name: "Saudi Arabia" },
    { "@type": "Country", name: "United Arab Emirates" },
    { "@type": "Country", name: "United States" },
  ],
  knowsAbout: [
    "Branding",
    "Brand Strategy",
    "Brand Identity Design",
    "Logo Design",
    "Graphic Design",
    "Advertising",
    "Packaging Design",
    "Label Design",
    "Print Design",
    "Signage",
    "Vehicle Branding",
    "Digital Marketing",
    "Search Engine Optimization",
    "Social Media Marketing",
    "Video Production",
    "Motion Graphics",
    "3D Design",
    "Web Design",
    "Web Development",
    "App Development",
    "UI/UX Design",
    "AI Automation",
    "CRM Systems",
    "ERP Systems",
    "Cloud Solutions",
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Branding & Creative Services",
    itemListElement: SERVICES.map((s) => ({
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: s.title,
        description: s.description,
        areaServed: "Kerala, India",
        provider: { "@id": ORG_ID },
      },
    })),
  },
};

const websiteNode = {
  "@type": "WebSite",
  "@id": WEBSITE_ID,
  url: SITE_URL,
  name: "Media 360 Concept",
  inLanguage: "en-IN",
  publisher: { "@id": ORG_ID },
};

function breadcrumbNode(
  path: string,
  items: { name: string; path: string }[]
) {
  return {
    "@type": "BreadcrumbList",
    "@id": `${SITE_URL}${path}#breadcrumb`,
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: `${SITE_URL}${item.path}`,
    })),
  };
}

function faqNode(path: string, faqs: Faq[]) {
  return {
    "@type": "FAQPage",
    "@id": `${SITE_URL}${path}#faq`,
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: { "@type": "Answer", text: faq.a },
    })),
  };
}

/** Full graph for the homepage. */
export function homeGraph() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      organizationNode,
      websiteNode,
      logoNode,
      {
        "@type": "WebPage",
        "@id": `${SITE_URL}/#webpage`,
        url: SITE_URL,
        name: "Media 360 Concept | Branding & Creative Agency in Kozhikode, Kerala",
        isPartOf: { "@id": WEBSITE_ID },
        about: { "@id": ORG_ID },
        primaryImageOfPage: { "@id": LOGO_ID },
        inLanguage: "en-IN",
      },
      breadcrumbNode("/", [{ name: "Home", path: "/" }]),
      faqNode("/", FAQS),
    ],
  };
}

/** Full graph for a service landing page. */
export function servicePageGraph(page: {
  slug: string;
  title: string;
  description: string;
  h1: string;
  serviceName: string;
  serviceDescription: string;
  faqs: Faq[];
}) {
  const path = `/${page.slug}`;
  const url = `${SITE_URL}${path}`;
  return {
    "@context": "https://schema.org",
    "@graph": [
      organizationNode,
      websiteNode,
      logoNode,
      {
        "@type": "Service",
        "@id": `${url}#service`,
        name: page.serviceName,
        description: page.serviceDescription,
        serviceType: page.serviceName,
        url,
        provider: { "@id": ORG_ID },
        areaServed: [
          { "@type": "City", name: "Kozhikode" },
          { "@type": "State", name: "Kerala" },
          { "@type": "Country", name: "India" },
        ],
      },
      {
        "@type": "WebPage",
        "@id": `${url}#webpage`,
        url,
        name: page.title,
        description: page.description,
        headline: page.h1,
        isPartOf: { "@id": WEBSITE_ID },
        about: { "@id": `${url}#service` },
        breadcrumb: { "@id": `${url}#breadcrumb` },
        primaryImageOfPage: { "@id": LOGO_ID },
        inLanguage: "en-IN",
      },
      breadcrumbNode(path, [
        { name: "Home", path: "/" },
        { name: page.serviceName, path },
      ]),
      faqNode(path, page.faqs),
    ],
  };
}
