export type Service = {
  index: string;
  title: string;
  description: string;
  tags: string[];
  gradient: string;
};

export type Project = {
  slug: string;
  title: string;
  category: string;
  year: string;
  description: string;
  challenge: string;
  solution: string;
  tech: string[];
  results: { label: string; value: string }[];
  image: string;
  accent: string;
};

export type TeamMember = {
  name: string;
  role: string;
  image: string;
};

export type Testimonial = {
  quote: string;
  name: string;
  role: string;
  company: string;
  rating: number;
  image: string;
};

const unsplash = (id: string, w = 1600) =>
  `https://images.unsplash.com/photo-${id}?q=80&w=${w}&auto=format&fit=crop`;

export const CLIENTS = [
  "NOVA", "HELIX", "ORBIT", "PULSE", "VERTEX",
  "LUMEN", "ATLAS", "QUANTA", "EMBER", "ZENITH",
];

export const STATS = [
  { value: 300, suffix: "+", label: "Projects Delivered" },
  { value: 80, suffix: "+", label: "Brands Built" },
  { value: 20, suffix: "+", label: "Countries Served" },
  { value: 15, suffix: "+", label: "In-house Experts" },
  { value: 10, suffix: "+", label: "Years of Craft" },
];

export const SERVICES: Service[] = [
  {
    index: "01",
    title: "Branding & Identity",
    description:
      "Strategy-first identities that give ambitious companies a face worth remembering — from naming and voice to full visual systems.",
    tags: ["Branding", "Product Design", "Content Creation", "Photography"],
    gradient: "from-blue/30 to-violet/10",
  },
  {
    index: "02",
    title: "Digital Marketing",
    description:
      "Full-funnel growth engines. We plan, launch and optimise campaigns that compound — measured in revenue, not impressions.",
    tags: ["Performance Marketing", "SEO", "Social Media", "Digital Strategy"],
    gradient: "from-violet/30 to-cyan/10",
  },
  {
    index: "03",
    title: "Design & Experience",
    description:
      "Interfaces people feel. Editorial web design, product UX and motion that turn first impressions into lasting relationships.",
    tags: ["Web Design", "UI/UX Design", "Motion Graphics", "Video Editing"],
    gradient: "from-cyan/30 to-blue/10",
  },
  {
    index: "04",
    title: "Engineering",
    description:
      "Production-grade software, built to scale. Custom platforms, SaaS products and mobile apps engineered with clean architecture.",
    tags: ["Custom Web Development", "SaaS Development", "Enterprise Software", "Mobile Apps"],
    gradient: "from-blue/30 to-cyan/10",
  },
  {
    index: "05",
    title: "AI & Automation",
    description:
      "Intelligent systems that work while you sleep — AI copilots, WhatsApp automation and workflows wired into your business.",
    tags: ["AI Automation", "WhatsApp Automation", "AI Chatbots", "LLM Integration"],
    gradient: "from-violet/30 to-blue/10",
  },
  {
    index: "06",
    title: "Systems & Cloud",
    description:
      "The operational backbone: CRM and ERP platforms, cloud infrastructure and consulting that keeps everything running at speed.",
    tags: ["CRM Systems", "ERP Systems", "Cloud Solutions", "Consulting"],
    gradient: "from-cyan/30 to-violet/10",
  },
];

export const PROJECTS: Project[] = [
  {
    slug: "orbit-food",
    title: "Orbit Eats",
    category: "Food Delivery App",
    year: "2026",
    description:
      "A hyper-local food delivery platform serving 40+ neighbourhoods with live courier tracking.",
    challenge:
      "Legacy ordering flows lost 60% of users before checkout, and couriers had no live routing.",
    solution:
      "Rebuilt as a Flutter app with a Go dispatch engine, real-time sockets and a 3-tap checkout.",
    tech: ["Flutter", "Go", "PostgreSQL", "Redis", "Google Maps"],
    results: [
      { label: "Checkout conversion", value: "+118%" },
      { label: "Avg. delivery time", value: "-22 min" },
      { label: "Monthly orders", value: "250K" },
    ],
    image: unsplash("1504674900247-0877df9cc836"),
    accent: "text-cyan",
  },
  {
    slug: "medicore-erp",
    title: "MediCore",
    category: "Hospital ERP",
    year: "2025",
    description:
      "An end-to-end hospital operating system: OPD, pharmacy, labs, billing and bed management.",
    challenge:
      "Seven disconnected legacy tools forced staff to re-enter patient data up to five times.",
    solution:
      "A unified ERP with role-based dashboards, HL7 integrations and offline-first wards.",
    tech: ["React", "Node.js", "PostgreSQL", "Docker", "Kubernetes"],
    results: [
      { label: "Admin hours saved", value: "1.2K/mo" },
      { label: "Billing errors", value: "-94%" },
      { label: "Hospitals live", value: "12" },
    ],
    image: unsplash("1551190822-a9333d879b1f"),
    accent: "text-blue",
  },
  {
    slug: "saffron-house",
    title: "Saffron House",
    category: "Restaurant Website",
    year: "2026",
    description:
      "A cinematic web experience for a Michelin-listed restaurant, with table booking built in.",
    challenge:
      "The brand's digital presence didn't match a tasting menu priced at $180 a seat.",
    solution:
      "Editorial storytelling, WebGL menu reveals and a custom reservation flow tied to their POS.",
    tech: ["Next.js", "GSAP", "Three.js", "Sanity", "Stripe"],
    results: [
      { label: "Direct bookings", value: "+210%" },
      { label: "Time on site", value: "4m 40s" },
      { label: "Awwwards", value: "Honors" },
    ],
    image: unsplash("1517248135467-4c7edcad34c4"),
    accent: "text-violet",
  },
  {
    slug: "pulse-ai",
    title: "PulseBoard",
    category: "AI SaaS Dashboard",
    year: "2026",
    description:
      "An AI analytics copilot that turns raw product data into narrated, decision-ready insight.",
    challenge:
      "Teams drowned in dashboards nobody read; insight surfaced days after it mattered.",
    solution:
      "LLM-generated daily briefs, anomaly alerts and natural-language querying over warehouses.",
    tech: ["Next.js", "TypeScript", "OpenAI", "LangChain", "ClickHouse"],
    results: [
      { label: "ARR in year one", value: "$2.4M" },
      { label: "Weekly active teams", value: "1.8K" },
      { label: "Insight latency", value: "-96%" },
    ],
    image: unsplash("1551288049-bebda4e38f71"),
    accent: "text-cyan",
  },
  {
    slug: "maison-noir",
    title: "Maison Noir",
    category: "Luxury Fashion Brand",
    year: "2025",
    description:
      "Full brand build and e-commerce flagship for a couture label launching in Paris and Dubai.",
    challenge:
      "Launching into a saturated luxury market with zero brand recognition and a 9-week runway.",
    solution:
      "Identity, art direction, campaign photography and a headless storefront — shipped in eight weeks.",
    tech: ["Shopify Hydrogen", "React", "GSAP", "Klaviyo"],
    results: [
      { label: "Launch-week revenue", value: "$480K" },
      { label: "Press features", value: "23" },
      { label: "Return rate", value: "3.1%" },
    ],
    image: unsplash("1483985988355-763728e1935b"),
    accent: "text-violet",
  },
  {
    slug: "forge-fit",
    title: "ForgeFit",
    category: "Fitness Mobile App",
    year: "2025",
    description:
      "An adaptive training app that builds programs around your recovery, equipment and time.",
    challenge:
      "Generic workout plans caused 80% of users to churn within three weeks.",
    solution:
      "A React Native app with an on-device adaptation engine and social accountability loops.",
    tech: ["React Native", "TypeScript", "Supabase", "TensorFlow Lite"],
    results: [
      { label: "90-day retention", value: "3.4×" },
      { label: "App Store rating", value: "4.8" },
      { label: "Downloads", value: "600K" },
    ],
    image: unsplash("1571019613454-1cb2f99b2d8b"),
    accent: "text-blue",
  },
  {
    slug: "scholar-os",
    title: "ScholarOS",
    category: "School ERP",
    year: "2024",
    description:
      "A multi-campus school management platform: admissions, fees, timetables and parent comms.",
    challenge:
      "A 14-school network ran on spreadsheets; fee reconciliation alone took nine days a month.",
    solution:
      "Centralised ERP with automated fee collection, WhatsApp notices and offline attendance.",
    tech: ["React", "Node.js", "MongoDB", "WhatsApp API", "AWS"],
    results: [
      { label: "Fee recovery", value: "+31%" },
      { label: "Reconciliation", value: "9d → 2h" },
      { label: "Students managed", value: "38K" },
    ],
    image: unsplash("1580582932707-520aed937b7b"),
    accent: "text-cyan",
  },
  {
    slug: "keystone-crm",
    title: "Keystone",
    category: "Real Estate CRM",
    year: "2025",
    description:
      "A pipeline CRM purpose-built for off-plan property sales teams across the Gulf.",
    challenge:
      "Leads from 12 portals landed in one inbox; agents responded in hours, not minutes.",
    solution:
      "Unified lead routing with AI scoring, WhatsApp-first follow-ups and developer inventory sync.",
    tech: ["Next.js", "Node.js", "PostgreSQL", "OpenAI", "Twilio"],
    results: [
      { label: "Speed to lead", value: "94s" },
      { label: "Conversion", value: "+47%" },
      { label: "Deals tracked", value: "$1.1B" },
    ],
    image: unsplash("1560518883-ce09059eeffa"),
    accent: "text-blue",
  },
  {
    slug: "atlas-build",
    title: "Atlas Build",
    category: "Construction Website",
    year: "2024",
    description:
      "Corporate platform and project showcase for a tier-one infrastructure contractor.",
    challenge:
      "A $2B portfolio presented through a decade-old template site was costing enterprise bids.",
    solution:
      "An editorial project archive with 3D site flyovers, careers hub and bilingual CMS.",
    tech: ["Next.js", "Three.js", "Sanity", "Cloudflare"],
    results: [
      { label: "Bid shortlists", value: "+38%" },
      { label: "Engineer applications", value: "5×" },
      { label: "Load time", value: "0.9s" },
    ],
    image: unsplash("1541888946425-d81bb19240f5"),
    accent: "text-violet",
  },
  {
    slug: "vita-health",
    title: "Vita",
    category: "Healthcare App",
    year: "2026",
    description:
      "A telehealth companion connecting chronic-care patients with clinicians between visits.",
    challenge:
      "Patients logged vitals on paper; doctors saw deterioration only at quarterly check-ups.",
    solution:
      "Device-synced vitals, medication nudges and clinician alerts with strict data privacy.",
    tech: ["Flutter", "Node.js", "PostgreSQL", "HealthKit", "FHIR"],
    results: [
      { label: "Readmissions", value: "-28%" },
      { label: "Daily adherence", value: "87%" },
      { label: "Clinics onboard", value: "40" },
    ],
    image: unsplash("1505751172876-fa1923c5c528"),
    accent: "text-cyan",
  },
  {
    slug: "wander",
    title: "Wander",
    category: "Travel Booking Platform",
    year: "2025",
    description:
      "A curated travel marketplace bundling flights, boutique stays and local experiences.",
    challenge:
      "OTA giants own generic travel; Wander needed to win on curation and story, not price.",
    solution:
      "Editorial destination guides fused with a real-time booking engine and dynamic packaging.",
    tech: ["Next.js", "Go", "Redis", "Amadeus API", "Stripe"],
    results: [
      { label: "Avg. basket", value: "$1,840" },
      { label: "Repeat bookings", value: "41%" },
      { label: "NPS", value: "72" },
    ],
    image: unsplash("1488646953014-85cb44e25828"),
    accent: "text-blue",
  },
  {
    slug: "mentora",
    title: "Mentora",
    category: "Education Platform",
    year: "2024",
    description:
      "A cohort-based learning platform with live classrooms, labs and AI study companions.",
    challenge:
      "Completion rates across recorded-video courses sat below 8%.",
    solution:
      "Live cohorts, gamified streaks and an AI tutor grounded in each course's material.",
    tech: ["React", "Node.js", "WebRTC", "OpenAI", "MongoDB"],
    results: [
      { label: "Course completion", value: "71%" },
      { label: "Learners", value: "120K" },
      { label: "Tutor sessions/day", value: "9K" },
    ],
    image: unsplash("1509062522246-3755977927d7"),
    accent: "text-violet",
  },
  {
    slug: "ledgerline",
    title: "LedgerLine",
    category: "FinTech Dashboard",
    year: "2026",
    description:
      "A real-time treasury dashboard for startups managing cash across 30+ bank accounts.",
    challenge:
      "Finance teams stitched CSV exports every Monday to answer 'how much runway do we have?'",
    solution:
      "Bank-API aggregation with live runway modelling, alerts and board-ready reporting.",
    tech: ["Next.js", "TypeScript", "Plaid", "PostgreSQL", "Docker"],
    results: [
      { label: "Companies onboard", value: "900+" },
      { label: "Cash tracked", value: "$4.2B" },
      { label: "Reporting time", value: "-92%" },
    ],
    image: unsplash("1611974789855-9c2a0a7236a3"),
    accent: "text-cyan",
  },
  {
    slug: "arcade-commerce",
    title: "Arcade",
    category: "Ecommerce Platform",
    year: "2025",
    description:
      "A headless commerce build for a consumer-electronics brand selling in 14 markets.",
    challenge:
      "Their monolith buckled every product drop — 11s loads and abandoned carts at peak.",
    solution:
      "Headless storefront with edge rendering, one-page checkout and localised catalogues.",
    tech: ["Next.js", "Shopify Plus", "Cloudflare", "Algolia"],
    results: [
      { label: "Largest drop", value: "$1.9M/day" },
      { label: "LCP at peak", value: "1.1s" },
      { label: "Cart abandonment", value: "-34%" },
    ],
    image: unsplash("1556742049-0cfed4f6a45d"),
    accent: "text-blue",
  },
  {
    slug: "echo-ai",
    title: "Echo",
    category: "AI Chatbot",
    year: "2026",
    description:
      "A multilingual support agent resolving 70% of tickets for a telecom's 4M subscribers.",
    challenge:
      "Support costs grew linearly with subscribers; wait times averaged 26 minutes.",
    solution:
      "A RAG-grounded agent across WhatsApp and web, with human handoff and full audit trails.",
    tech: ["Claude", "LangChain", "Node.js", "Redis", "WhatsApp API"],
    results: [
      { label: "Tickets auto-resolved", value: "70%" },
      { label: "First response", value: "3s" },
      { label: "Support cost", value: "-58%" },
    ],
    image: unsplash("1677442136019-21780ecad995"),
    accent: "text-violet",
  },
  {
    slug: "atelier-folio",
    title: "Atelier",
    category: "Portfolio Website",
    year: "2024",
    description:
      "An award-winning portfolio for an architecture studio, told through light and shadow.",
    challenge:
      "Translating spatial, physical work into a digital medium without flattening it.",
    solution:
      "Scroll-driven walkthroughs, WebGL depth-of-field imagery and a print-inspired grid.",
    tech: ["Next.js", "Three.js", "GSAP", "Lenis"],
    results: [
      { label: "FWA", value: "Site of the Day" },
      { label: "Inbound leads", value: "+160%" },
      { label: "Bounce rate", value: "12%" },
    ],
    image: unsplash("1467232004584-a241de8bcf5d"),
    accent: "text-cyan",
  },
];

export const INDUSTRIES = [
  "Healthcare", "Education", "Finance", "Construction",
  "Hospitality", "Retail", "Startups", "Government",
  "Real Estate", "Manufacturing", "Logistics", "Travel",
];

export const TECH_ORBITS: string[][] = [
  ["React", "Next.js", "TypeScript", "Node.js", "Go"],
  ["Flutter", "React Native", "MongoDB", "PostgreSQL", "Redis", "Docker", "Kubernetes"],
  ["AWS", "Cloudflare", "OpenAI", "Claude", "Gemini", "LangChain", "Supabase", "Firebase"],
];

export const PROCESS = [
  { step: "01", title: "Discover", text: "Deep-dive workshops to understand your market, users and unfair advantage." },
  { step: "02", title: "Research", text: "Competitor teardowns, user interviews and data audits that ground every decision." },
  { step: "03", title: "Strategy", text: "A sharp definition of positioning, roadmap and the metrics that will prove success." },
  { step: "04", title: "Design", text: "Identity, interface and motion crafted as one system — reviewed with you weekly." },
  { step: "05", title: "Prototype", text: "Clickable, testable prototypes that de-risk the build before a line of code ships." },
  { step: "06", title: "Develop", text: "Clean-architecture engineering in TypeScript, with CI/CD from the first commit." },
  { step: "07", title: "Testing", text: "Automated suites, accessibility audits and real-device QA across the matrix." },
  { step: "08", title: "Deployment", text: "Zero-downtime launches on hardened cloud infrastructure, monitored end to end." },
  { step: "09", title: "Growth", text: "Post-launch experimentation, SEO and performance marketing that compound results." },
];

export const TEAM: TeamMember[] = [
  { name: "Adrian Vale", role: "CEO & Founder", image: unsplash("1560250097-0b93528c311a", 800) },
  { name: "Mara Chen", role: "Creative Director", image: unsplash("1573496359142-b8d87734a5a2", 800) },
  { name: "Sofia Reyes", role: "Lead Designer", image: unsplash("1494790108377-be9c29b29330", 800) },
  { name: "Dev Anand", role: "Frontend Engineer", image: unsplash("1507003211169-0a1dd7228f2d", 800) },
  { name: "Lukas Meyer", role: "Backend Engineer", image: unsplash("1500648767791-00dcc994a43e", 800) },
  { name: "Aisha Rahman", role: "AI Engineer", image: unsplash("1438761681033-6461ffad8d80", 800) },
  { name: "Theo Marchetti", role: "Motion Designer", image: unsplash("1472099645785-5658abf4ff4e", 800) },
  { name: "Elena Petrova", role: "Marketing Lead", image: unsplash("1544005313-94ddf0286df2", 800) },
  { name: "Omar Farouk", role: "Content Strategist", image: unsplash("1506794778202-cad84cf45f1d", 800) },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      "ROOT didn't redesign our product — they redesigned how our company thinks about product. Revenue followed.",
    name: "Hannah Cole",
    role: "CEO",
    company: "PulseBoard",
    rating: 5,
    image: unsplash("1580489944761-15a19d654956", 200),
  },
  {
    quote:
      "Eight weeks from nothing to a luxury brand that press wrote about unprompted. I still don't know how they did it.",
    name: "Isabelle Laurent",
    role: "Founder",
    company: "Maison Noir",
    rating: 5,
    image: unsplash("1544005313-94ddf0286df2", 200),
  },
  {
    quote:
      "The ERP replaced seven systems on day one. Our nurses actually thanked the software team. That never happens.",
    name: "Dr. Samir Qureshi",
    role: "Medical Director",
    company: "MediCore Network",
    rating: 5,
    image: unsplash("1506794778202-cad84cf45f1d", 200),
  },
  {
    quote:
      "Their AI agent resolves more tickets than our old support floor — politely, in four languages, at 3am.",
    name: "Marcus Webb",
    role: "COO",
    company: "Echo Telecom",
    rating: 5,
    image: unsplash("1633332755192-727a05c4013d", 200),
  },
  {
    quote:
      "Every agency promises 'partnership'. ROOT shipped weekly, argued with us when it mattered, and hit the date.",
    name: "Priya Nair",
    role: "VP Product",
    company: "LedgerLine",
    rating: 5,
    image: unsplash("1573496359142-b8d87734a5a2", 200),
  },
  {
    quote:
      "Our site went from a brochure to our best salesperson. Bid shortlists are up 38% and counting.",
    name: "James Okafor",
    role: "Commercial Director",
    company: "Atlas Build",
    rating: 5,
    image: unsplash("1560250097-0b93528c311a", 200),
  },
];

export const AWARDS = [
  { year: "2026", title: "Site of the Day ×3", org: "Awwwards" },
  { year: "2026", title: "Site of the Day ×2", org: "FWA" },
  { year: "2025", title: "Website of the Day ×4", org: "CSS Design Awards" },
  { year: "2025", title: "Best UI / UX — Agency", org: "CSSDA Annual" },
  { year: "2024", title: "Top B2B Company — MENA", org: "Clutch" },
  { year: "2024", title: "Featured Studio ×8", org: "Behance" },
];

export const MILESTONES = [
  { year: "2016", text: "ROOT DIGITAL founded as a two-person design studio." },
  { year: "2018", text: "First SaaS product shipped; engineering practice born." },
  { year: "2020", text: "Went fully remote — clients across 12 countries." },
  { year: "2022", text: "AI & automation practice launched." },
  { year: "2026", text: "80+ brands built. 300+ projects. Still hungry." },
];

export const PRICING = [
  {
    name: "Starter",
    price: "$4,900",
    per: "from / project",
    blurb: "For founders who need a sharp brand and site, fast.",
    features: [
      "Brand identity & guidelines",
      "5-page marketing website",
      "CMS & analytics setup",
      "SEO foundations",
      "2 weeks post-launch support",
    ],
    featured: false,
  },
  {
    name: "Business",
    price: "$14,900",
    per: "from / project",
    blurb: "For companies ready to become a category leader.",
    features: [
      "Everything in Starter",
      "Custom web application or e-commerce",
      "Motion design & 3D interactions",
      "Marketing automation & CRM",
      "Performance marketing launch",
      "90-day growth partnership",
    ],
    featured: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    per: "retainer / build",
    blurb: "For organisations building serious software.",
    features: [
      "Dedicated product team",
      "SaaS / ERP / mobile engineering",
      "AI & automation integration",
      "Cloud architecture & DevOps",
      "SLA-backed support",
      "Quarterly strategy reviews",
    ],
    featured: false,
  },
];

export const FAQS = [
  {
    q: "How long does a typical project take?",
    a: "A brand and website engagement runs 4–8 weeks. Product builds (SaaS, mobile, ERP) typically ship a v1 in 10–16 weeks, then evolve in sprints. We commit to dates in week one and hit them.",
  },
  {
    q: "What does your process look like week to week?",
    a: "One dedicated team, one weekly demo. You see real progress every Friday — designs in the browser, features on staging — and every decision is documented so nothing lives in someone's head.",
  },
  {
    q: "Do you work with early-stage startups?",
    a: "Yes — about a third of our work is zero-to-one. The Starter tier exists precisely for founders, and we occasionally take equity-plus-cash arrangements for products we deeply believe in.",
  },
  {
    q: "Who owns the code and design files?",
    a: "You do, fully. Source code, design systems, brand assets and infrastructure live in accounts you control from day one. No lock-in, ever.",
  },
  {
    q: "Can you take over an existing product or codebase?",
    a: "Often. We start with a paid technical and UX audit (1–2 weeks), give you an honest report of what's salvageable, and only then propose a plan. Sometimes the answer is 'keep it'.",
  },
  {
    q: "How do you price AI and automation work?",
    a: "Fixed-price for well-defined automations (a WhatsApp flow, a support agent), retainer for evolving AI products. Every engagement includes evaluation pipelines so quality is measured, not vibes.",
  },
  {
    q: "What happens after launch?",
    a: "Every project includes a support window, and most clients move to a growth retainer — experimentation, SEO, performance marketing and continuous shipping. We win when your numbers move.",
  },
];

export const POSTS = [
  {
    title: "Designing for the post-chat era of AI products",
    category: "AI",
    date: "Jun 2026",
    read: "8 min",
    image: unsplash("1620712943543-bcc4688e7485", 900),
  },
  {
    title: "Why every luxury brand needs an editorial website",
    category: "Design",
    date: "May 2026",
    read: "6 min",
    image: unsplash("1618005182384-a83a8bd57fbe", 900),
  },
  {
    title: "Clean architecture in Next.js: a field guide",
    category: "Development",
    date: "Apr 2026",
    read: "12 min",
    image: unsplash("1587440871875-191322ee64b0", 900),
  },
  {
    title: "The performance marketing playbook we run for SaaS",
    category: "Marketing",
    date: "Mar 2026",
    read: "9 min",
    image: unsplash("1620641788421-7a1c342ea42e", 900),
  },
];

export const OFFICES = [
  { city: "Dubai", country: "UAE", line: "Downtown, Boulevard Plaza T2", tz: "GMT+4" },
  { city: "London", country: "UK", line: "Shoreditch, 81 Curtain Road", tz: "GMT+1" },
  { city: "Remote", country: "Worldwide", line: "15 experts, 9 time zones", tz: "Always on" },
];

export const NAV_LINKS = [
  { label: "Studio", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Work", href: "#work" },
  { label: "Process", href: "#process" },
  { label: "Pricing", href: "#pricing" },
  { label: "Contact", href: "#contact" },
];

export const IMAGES = {
  aboutMain: unsplash("1522071820081-009f0129c71c"),
  aboutSecondary: unsplash("1531482615713-2afd69097998", 900),
};
