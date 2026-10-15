export type Service = {
  index: string;
  title: string;
  description: string;
  tags: string[];
  gradient: string;
  /** Route of the matching keyword landing page, when one exists. */
  href?: string;
};

export const CONTACT = {
  email: "media360concept@gmail.com",
  phone: "+918157874951",
  phoneDisplay: "+91 81578 74951",
  whatsapp:
    "https://wa.me/918157874951?text=Hi%20Media%20360%20Concept%2C%20I%27d%20like%20to%20talk%20about%20branding%20for%20my%20business.",
  whatsappAcademy:
    "https://wa.me/918157874951?text=Hi%20Media%20360%20Academy%2C%20I%27d%20like%20free%20course%20counselling.",
  site: "https://www.media360concept.com",
  siteDisplay: "www.media360concept.com",
  city: "Kozhikode (Calicut)",
  region: "Kerala, India",
  address: "HiLITE Business Park, Calicut",
  /** Postal address — must match Google Business Profile character for character. */
  postal: {
    // TODO(owner): add office/floor number, e.g. "Office 7xx, 7th Floor, "
    street: "HiLITE Business Park, HiLITE City, Thondayad Bypass",
    locality: "Kozhikode",
    region: "Kerala",
    postalCode: "673014",
    country: "IN",
  },
  // TODO(owner): replace with the exact pin from Google Maps (right-click the office → copy coordinates).
  geo: { lat: 11.2487, lng: 75.8337 },
  mapUrl: "https://www.google.com/maps/search/?api=1&query=HiLITE+Business+Park+Kozhikode",
  /**
   * TODO(owner): confirm real opening hours, then fill this in, e.g.
   * { label: "Mon–Sat, 9:30 AM – 6:30 PM IST", days: ["Monday", …, "Saturday"], opens: "09:30", closes: "18:30" }.
   * Empty on purpose: unconfirmed hours are neither shown on /contact nor published in schema.
   */
  hours: undefined as undefined | { label: string; days: string[]; opens: string; closes: string },
  /** Official profiles only — every URL here goes into schema sameAs. TODO(owner): add live profile URLs. */
  sameAs: [] as string[],
};

export const STATS = [
  { value: 17, suffix: "+", label: "Years in Saudi Arabia" },
  { value: 12, suffix: "+", label: "Years across India" },
  { value: 8, suffix: "+", label: "Years in the USA" },
  { value: 11, suffix: "", label: "Services under one roof" },
  { value: 30, suffix: "+", label: "Brand deliverables" },
];

export const SERVICES: Service[] = [
  {
    index: "01",
    title: "Branding & Identity Design",
    description:
      "Logo design, visual identity, and complete brand guidelines for businesses across Kerala and beyond. We build identity systems that make a restaurant in Kozhikode, a hospital in Thrissur, or a startup in Riyadh instantly recognisable — and impossible to confuse with anyone else.",
    tags: ["Logo Design", "Graphic Design", "Brand Identity", "Brand Guidelines"],
    gradient: "from-blue/30 to-violet/10",
    href: "/branding-agency-kozhikode",
  },
  {
    index: "02",
    title: "Brand Strategy & Research",
    description:
      "Before we design anything, we study your market, your competitors, and your customers. Positioning, naming, messaging, and go-to-market planning — the strategic groundwork that separates brands that last from logos that get replaced in two years.",
    tags: ["Market Research", "Positioning", "Competitor Analysis", "Naming"],
    gradient: "from-violet/30 to-cyan/10",
    href: "/brand-strategy-kerala",
  },
  {
    index: "03",
    title: "Advertising & Media Buying",
    description:
      "Campaign planning and media placement across outdoor, print, broadcast, and digital channels in Kerala, wider India, and the Gulf. We negotiate, place, and monitor every rupee of ad spend so your message lands where your customers actually look.",
    tags: ["Ad Campaigns", "Media Planning", "Outdoor Advertising", "Media Buying"],
    gradient: "from-cyan/30 to-blue/10",
    href: "/advertising-agency-kerala",
  },
  {
    index: "04",
    title: "Video Production & Editing",
    description:
      "Video production, motion graphics, and 3D visualisation from script to final cut. Brand films, product videos, and social content produced with cinematic care — because in a feed full of noise, production quality is what earns the pause.",
    tags: ["Video Production", "Video Editing", "Motion Graphics", "Brand Films"],
    gradient: "from-blue/30 to-cyan/10",
    href: "/video-production-kozhikode",
  },
  {
    index: "05",
    title: "Digital Marketing",
    description:
      "SEO, social media management, and performance marketing that turn attention into enquiries. Full-funnel campaigns for Kerala businesses that want to be found on Google, remembered on Instagram, and chosen when it's time to buy.",
    tags: ["SEO", "Social Media", "Performance Marketing", "Google Ads"],
    gradient: "from-violet/30 to-blue/10",
    href: "/digital-marketing-kozhikode",
  },
  {
    index: "06",
    title: "Events & Brand Activation",
    description:
      "Launches, exhibitions, and on-ground brand experiences managed end to end — concept, production, staging, and follow-through. We handle every detail under one roof so your brand shows up flawlessly when it matters most.",
    tags: ["Event Management", "Brand Activation", "Exhibitions", "Launches"],
    gradient: "from-cyan/30 to-violet/10",
  },
  {
    index: "07",
    title: "Web Development",
    description:
      "Fast, search-optimised websites and landing pages built on modern architecture. Every site we ship is designed in Figma, engineered for Core Web Vitals, and structured so Google — and your customers — understand exactly what you offer.",
    tags: ["Website Design", "Landing Pages", "Custom Web", "CMS"],
    gradient: "from-blue/30 to-violet/10",
    href: "/web-development-kozhikode",
  },
  {
    index: "08",
    title: "App Development",
    description:
      "Mobile and web applications built for engagement and growth — from UI/UX prototypes to production-ready iOS, Android, and cross-platform builds. Designed around your users, engineered to scale with your business.",
    tags: ["Mobile Apps", "Web Apps", "React Native", "Flutter"],
    gradient: "from-violet/30 to-cyan/10",
    href: "/app-development-company-kozhikode",
  },
  {
    index: "09",
    title: "UI/UX & Figma Design",
    description:
      "Research-driven interface design for websites, apps, and products. Wireframes, prototypes, and pixel-perfect Figma systems with components and dev-ready specs — so what gets designed is exactly what gets built.",
    tags: ["UI/UX Design", "Figma Design", "Prototyping", "Design Systems"],
    gradient: "from-cyan/30 to-blue/10",
    href: "/ui-ux-design-kozhikode",
  },
  {
    index: "10",
    title: "AI & Automation",
    description:
      "AI copilots, WhatsApp automation, chatbots, and workflow systems wired into your business. Faster customer responses, smarter operations, and measurable efficiency — intelligent systems that keep working after your team goes home.",
    tags: ["AI Automation", "WhatsApp Automation", "Chatbots", "Workflows"],
    gradient: "from-violet/30 to-blue/10",
    href: "/ai-automation-agency-kerala",
  },
  {
    index: "11",
    title: "Software, CRM & Cloud",
    description:
      "Custom software, CRM and ERP platforms, admin dashboards, cloud infrastructure, and technology consulting — the operational backbone behind growing brands. Integrated, secure, and built so your systems scale as smoothly as your marketing.",
    tags: ["CRM Systems", "ERP Systems", "Cloud Solutions", "Consulting"],
    gradient: "from-cyan/30 to-violet/10",
    href: "/crm-erp-development-kerala",
  },
];

export const CAPABILITIES = [
  "Branding", "Logo Design", "Graphic Design", "Packaging Design", "Print Design",
  "Signage", "Vehicle Branding", "Digital Marketing", "SEO",
  "Video Production", "Video Editing", "AI Automation", "Web Development", "App Development", "UI/UX Design",
];

export const INDUSTRIES = [
  "Restaurants", "Healthcare", "Education", "Real Estate",
  "Retail", "Hospitality", "Startups", "Construction",
  "Manufacturing", "Luxury Brands", "Travel", "Corporate",
];

export const PROCESS = [
  { step: "01", title: "Listen", text: "Every project starts with your story — the business, the goals, the audience, and what winning looks like for you." },
  { step: "02", title: "Research", text: "We study your market, your competitors, and your customers so every creative decision stands on evidence, not guesswork." },
  { step: "03", title: "Strategy", text: "Positioning, messaging, and naming — the strategic foundation that tells your brand exactly what to say and to whom." },
  { step: "04", title: "Concept", text: "Creative directions and moodboards that translate strategy into ideas you can see, react to, and choose between." },
  { step: "05", title: "Design", text: "Identity, packaging, collateral, and digital — crafted with the obsessive detail that separates premium from average." },
  { step: "06", title: "Refine", text: "Structured feedback rounds sharpen the work until it's right, then brand guidelines lock in consistency for the future." },
  { step: "07", title: "Produce", text: "Print, signage, video, web — we manage production end to end so what launches matches what was approved." },
  { step: "08", title: "Launch", text: "Campaign rollout across the right channels — media buying, digital marketing, and activation timed for maximum impact." },
  { step: "09", title: "Grow", text: "We stay with you after launch — measuring, optimising, and supporting the brand as your business scales." },
];

/** Roles on the team. TODO(owner): add real names, photos and LinkedIn URLs — stock faces were removed. */
export const TEAM = [
  { role: "Brand Strategy", title: "Creative Lead" },
  { role: "UI/UX & Figma Design", title: "Design Director" },
  { role: "Creative Design", title: "Art Director" },
  { role: "Web & App Development", title: "Engineering Lead" },
  { role: "Video & Motion", title: "Production Head" },
  { role: "AI & Automation", title: "AI Specialist" },
  { role: "CRM, ERP & Cloud", title: "Systems Architect" },
  { role: "Client Partnerships", title: "Brand Manager" },
];

/** How we work — first-party statements, not client testimonials. */
export const PRINCIPLES = [
  { title: "Our Experience", label: "Three Markets, One Standard", text: "Seventeen years in Saudi Arabia taught us discipline. Twelve years in India taught us range. Kerala is where we put both to work for you." },
  { title: "Our Craft", label: "Quality Commitment", text: "Every project is crafted from concept to final delivery by the same team that scoped it — no handoffs, no dilution, no surprises." },
  { title: "Our Belief", label: "Design Standard", text: "Beautiful isn't the goal. Beautiful, purposeful, and result-driven is the goal — design that earns its budget back." },
  { title: "Our Promise", label: "Client Experience", text: "Fast turnaround, unique concepts, and a client-first approach — from the first call to the final file, you always know where your project stands." },
  { title: "Our Standard", label: "How We Work", text: "We answer WhatsApp messages, meet deadlines, and say no to work we can't do brilliantly. In this industry, that's rarer than it should be." },
  { title: "Our Mission", label: "Brand Building", text: "Shape brands that stand out. Make creativity simple, bold, and timeless. Build things Kerala is proud to show the world." },
];

export const MILESTONES = [
  { year: "Kerala", text: "Headquartered at HiLITE Business Park, Calicut — the home base where strategy, design, and production come together for businesses across Kerala." },
  { year: "KSA", text: "Over 17 years of brand activation, branding, advertising, and creative design experience across Saudi Arabia." },
  { year: "India", text: "12+ years crafting brand identities and creative strategies for businesses across India." },
  { year: "USA", text: "8+ years helping US businesses connect with their audiences and leave a lasting impression." },
];

export const PRICING = [
  {
    name: "Brand Launch",
    price: "Custom",
    per: "scoped to your project",
    blurb: "For new businesses in Kerala ready to launch with a brand that looks established from day one.",
    features: [
      "Brand strategy & positioning",
      "Logo & complete visual identity",
      "Brand guidelines document",
      "Stationery & launch collateral",
      "Website design & launch",
    ],
    featured: false,
  },
  {
    name: "Brand Refresh",
    price: "Custom",
    per: "scoped to your project",
    blurb: "For established businesses whose brand no longer matches the quality of what they actually do.",
    features: [
      "Brand audit & competitor research",
      "Visual identity refresh",
      "Packaging & collateral redesign",
      "Website redesign & SEO",
      "Relaunch campaign",
      "Ongoing brand support",
    ],
    featured: true,
  },
  {
    name: "Full Campaign",
    price: "Custom",
    per: "retainer / build",
    blurb: "For organisations that want branding, marketing, production, and technology handled under one roof.",
    features: [
      "Market research & planning",
      "Advertising & media buying",
      "Video production & 3D",
      "Web & app development",
      "AI automation & WhatsApp flows",
      "End-to-end campaign evaluation",
    ],
    featured: false,
  },
];

export const FAQS = [
  {
    q: "What is Media 360 Concept?",
    a: "Media 360 Concept is a digital marketing, web development, software, AI automation and branding agency at HiLITE Business Park, Kozhikode (Calicut), Kerala. The team brings 17+ years of experience in Saudi Arabia, 12+ years in India and 8+ years with US clients, and handles strategy, design, technology and marketing under one roof.",
  },
  {
    q: "What services does Media 360 Concept offer?",
    a: "Digital marketing (SEO, social media, Google Ads and Meta Ads), website and e-commerce development, Next.js and React development, custom software, CRM and ERP systems, mobile apps, AI automation and chatbots, plus branding, logo, packaging, print, signage, UI/UX design, video production and advertising.",
  },
  {
    q: "Where is Media 360 Concept located?",
    a: "Our office is at HiLITE Business Park, HiLITE City, Thondayad Bypass, Kozhikode (Calicut), Kerala 673014. We meet clients there by appointment and work remotely with businesses across Kerala, the rest of India, Saudi Arabia, the UAE and the United States.",
  },
  {
    q: "How much does a website or digital marketing cost in Calicut?",
    a: "It depends on scope. A landing page costs far less than an e-commerce store or custom web application, and an SEO-only retainer less than a full programme with content and ads. We scope every project individually and send a clear, itemised quote after a free consultation.",
  },
  {
    q: "Why choose one agency for branding, website and marketing?",
    a: "Because the hand-offs are where projects usually go wrong. When the same team builds your brand, website, software and campaigns, the message stays consistent, tracking is set up correctly from day one, and one team is accountable for the result.",
  },
  {
    q: "How long does a typical project take?",
    a: "A landing page takes one to two weeks, a business website three to six, a brand identity six to ten, and custom software or apps usually two to four months for a first version. SEO is ongoing, with meaningful results typically in three to six months. We agree timelines in writing before starting.",
  },
  {
    q: "Do you work with restaurants, hospitals and schools?",
    a: "Yes. Restaurants, healthcare, education, real estate, retail, hospitality, construction, manufacturing and startups are all core sectors. For hospitals and clinics we also build management software; for retailers, e-commerce stores; for schools, admission campaigns.",
  },
  {
    q: "How do I get started?",
    a: "Message us on WhatsApp at +91 81578 74951, email media360concept@gmail.com, or use the contact form. Tell us what you are building and we will reply within 24 hours with next steps and a free consultation.",
  },
];

export const OFFICES = [
  { city: "Kozhikode (Calicut)", country: "Kerala, India — HQ", line: "HiLITE Business Park, Calicut — Strategy, design & production home base", tz: "GMT+5:30" },
  { city: "Saudi Arabia", country: "KSA", line: "17+ years of brand-building experience", tz: "GMT+3" },
  { city: "United States", country: "USA", line: "8+ years serving American clients", tz: "GMT-5" },
];

export const NAV_LINKS = [
  { label: "Services", href: "/services" },
  { label: "Digital Marketing", href: "/digital-marketing-kozhikode" },
  { label: "Web Development", href: "/web-development-kozhikode" },
  { label: "Software & AI", href: "/software-development-company-kozhikode" },
  { label: "About", href: "/about" },
];

