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

export const CONTACT = {
  email: "media360concept@gmail.com",
  phone: "+919061460360",
  phoneDisplay: "+91 9061 460 360",
  whatsapp:
    "https://wa.me/919061460360?text=Hi%20Media%20360%20Concept%2C%20I%27d%20like%20to%20talk%20about%20branding%20for%20my%20business.",
  site: "https://www.360mediaconcepts.com",
  siteDisplay: "www.360mediaconcepts.com",
  city: "Kochi",
  region: "Kerala, India",
};

export const CLIENTS = [
  "BRANDING", "ADVERTISING", "PACKAGING", "SIGNAGE", "PRINT", "DIGITAL",
  "KOCHI", "KERALA", "INDIA", "KSA", "UAE", "USA",
];

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
      "Logo design, visual identity, and complete brand guidelines for businesses across Kerala and beyond. We build identity systems that make a restaurant in Kochi, a hospital in Thrissur, or a startup in Riyadh instantly recognisable — and impossible to confuse with anyone else.",
    tags: ["Logo Design", "Brand Identity", "Brand Guidelines", "Rebranding"],
    gradient: "from-blue/30 to-violet/10",
  },
  {
    index: "02",
    title: "Brand Strategy & Research",
    description:
      "Before we design anything, we study your market, your competitors, and your customers. Positioning, naming, messaging, and go-to-market planning — the strategic groundwork that separates brands that last from logos that get replaced in two years.",
    tags: ["Market Research", "Positioning", "Competitor Analysis", "Naming"],
    gradient: "from-violet/30 to-cyan/10",
  },
  {
    index: "03",
    title: "Advertising & Media Buying",
    description:
      "Campaign planning and media placement across outdoor, print, broadcast, and digital channels in Kerala, wider India, and the Gulf. We negotiate, place, and monitor every rupee of ad spend so your message lands where your customers actually look.",
    tags: ["Ad Campaigns", "Media Planning", "Outdoor Advertising", "Media Buying"],
    gradient: "from-cyan/30 to-blue/10",
  },
  {
    index: "04",
    title: "Media Production",
    description:
      "Video production, motion graphics, and 3D visualisation from script to final cut. Brand films, product videos, and social content produced with cinematic care — because in a feed full of noise, production quality is what earns the pause.",
    tags: ["Video Production", "Motion Graphics", "3D Design", "Brand Films"],
    gradient: "from-blue/30 to-cyan/10",
  },
  {
    index: "05",
    title: "Digital Marketing",
    description:
      "SEO, social media management, and performance marketing that turn attention into enquiries. Full-funnel campaigns for Kerala businesses that want to be found on Google, remembered on Instagram, and chosen when it's time to buy.",
    tags: ["SEO", "Social Media", "Performance Marketing", "Google Ads"],
    gradient: "from-violet/30 to-blue/10",
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
  },
  {
    index: "08",
    title: "App Development",
    description:
      "Mobile and web applications built for engagement and growth — from UI/UX prototypes to production-ready iOS, Android, and cross-platform builds. Designed around your users, engineered to scale with your business.",
    tags: ["Mobile Apps", "Web Apps", "React Native", "Flutter"],
    gradient: "from-violet/30 to-cyan/10",
  },
  {
    index: "09",
    title: "UI/UX & Figma Design",
    description:
      "Research-driven interface design for websites, apps, and products. Wireframes, prototypes, and pixel-perfect Figma systems with components and dev-ready specs — so what gets designed is exactly what gets built.",
    tags: ["UI/UX Design", "Figma Design", "Prototyping", "Design Systems"],
    gradient: "from-cyan/30 to-blue/10",
  },
  {
    index: "10",
    title: "AI & Automation",
    description:
      "AI copilots, WhatsApp automation, chatbots, and workflow systems wired into your business. Faster customer responses, smarter operations, and measurable efficiency — intelligent systems that keep working after your team goes home.",
    tags: ["AI Automation", "WhatsApp Automation", "Chatbots", "Workflows"],
    gradient: "from-violet/30 to-blue/10",
  },
  {
    index: "11",
    title: "Systems & Cloud",
    description:
      "CRM and ERP platforms, cloud infrastructure, and technology consulting — the operational backbone behind growing brands. Integrated, secure, and built so your systems scale as smoothly as your marketing.",
    tags: ["CRM Systems", "ERP Systems", "Cloud Solutions", "Consulting"],
    gradient: "from-cyan/30 to-violet/10",
  },
];

export const PROJECTS: Project[] = [
  {
    slug: "branding",
    title: "Brand Identity",
    category: "Branding",
    year: "2026",
    description: "Complete brand identity systems — logo, colour, type, and guidelines — that turn businesses into brands people remember.",
    challenge: "Standing out in a crowded market with a forgettable visual presence.",
    solution: "Strategy-first identity design: research, positioning, then a visual system built to carry the brand for years.",
    tech: ["Brand Strategy", "Visual Identity", "Logo Design", "Guidelines"],
    results: [
      { label: "Brand recall", value: "Strong" },
      { label: "Market presence", value: "Elevated" },
      { label: "Consistency", value: "System-wide" },
    ],
    image: unsplash("1561070791-252531d8b73e"),
    accent: "text-cyan",
  },
  {
    slug: "package-design",
    title: "Package Design",
    category: "Packaging",
    year: "2026",
    description: "Packaging design that earns the three seconds on shelf — structure, print, and story working together.",
    challenge: "Quality products losing shelf battles to competitors with stronger packaging.",
    solution: "Bold, print-ready packaging built on brand strategy — tested as 3D mockups before a single unit is produced.",
    tech: ["Structural Design", "Print Ready", "3D Mockups", "Labelling"],
    results: [
      { label: "Shelf impact", value: "High" },
      { label: "Brand alignment", value: "100%" },
      { label: "Turnaround", value: "Fast" },
    ],
    image: unsplash("1582719478250-c89cae4dc85b"),
    accent: "text-blue",
  },
  {
    slug: "creative-campaigns",
    title: "Creative Campaigns",
    category: "Advertising",
    year: "2026",
    description: "Multi-channel advertising campaigns with one big idea at the centre — concept, art direction, and copy that move people.",
    challenge: "Campaigns that got seen but not remembered, and never traced back to sales.",
    solution: "A single sharp concept executed across outdoor, print, digital, and social — with measurement built in from day one.",
    tech: ["Concept Development", "Art Direction", "Copywriting", "Multi-channel"],
    results: [
      { label: "Engagement", value: "High" },
      { label: "Brand lift", value: "Measurable" },
      { label: "Reach", value: "Expanded" },
    ],
    image: unsplash("1557804506-669a67965ba0"),
    accent: "text-violet",
  },
  {
    slug: "digital-marketing",
    title: "Digital Marketing",
    category: "Digital",
    year: "2026",
    description: "SEO, social, and performance campaigns that make brands findable on Google and unmissable on social.",
    challenge: "Digital spend scattered across channels with no strategy and no way to measure return.",
    solution: "Full-funnel digital marketing — search visibility, content, and paid campaigns tracked from first click to enquiry.",
    tech: ["SEO", "Social Media", "Performance Ads", "Analytics"],
    results: [
      { label: "Online visibility", value: "Growing" },
      { label: "Lead generation", value: "Optimised" },
      { label: "ROI tracking", value: "Full" },
    ],
    image: unsplash("1460925895917-afdab827c52f"),
    accent: "text-cyan",
  },
  {
    slug: "video-production",
    title: "Video Production",
    category: "Production",
    year: "2025",
    description: "Brand films and product videos produced end to end — scripting, filming, edit, and motion.",
    challenge: "Static brand messaging that couldn't hold attention in video-first feeds.",
    solution: "Cinematic video production from concept through final delivery, cut for every platform it will live on.",
    tech: ["Scripting", "Filming", "Editing", "Motion"],
    results: [
      { label: "Story impact", value: "High" },
      { label: "Production quality", value: "Premium" },
      { label: "Delivery speed", value: "Fast" },
    ],
    image: unsplash("1492691527719-9d1e07e534b4"),
    accent: "text-blue",
  },
  {
    slug: "3d-design",
    title: "3D Design",
    category: "3D & Motion",
    year: "2025",
    description: "Photorealistic 3D product visualisation and renders that show quality before the product exists.",
    challenge: "Flat visuals that couldn't communicate a premium product's build and finish.",
    solution: "3D modelling and rendering that lets customers see — and want — the product from every angle.",
    tech: ["3D Modelling", "Rendering", "Product Viz", "Animation"],
    results: [
      { label: "Visual depth", value: "Immersive" },
      { label: "Product showcase", value: "Premium" },
      { label: "Approval speed", value: "Fast" },
    ],
    image: unsplash("1618005182384-a83a8bd57fbe", 900),
    accent: "text-violet",
  },
  {
    slug: "motion-graphics",
    title: "Motion Graphics",
    category: "3D & Motion",
    year: "2025",
    description: "Animated brand assets — logo stings, explainers, and social motion that give identities energy.",
    challenge: "Static brand assets that felt lifeless next to competitors' animated content.",
    solution: "Motion systems that translate the visual identity into movement — consistent, reusable, unmistakable.",
    tech: ["After Effects", "Animation", "Kinetic Type", "Brand Motion"],
    results: [
      { label: "Engagement", value: "Elevated" },
      { label: "Brand energy", value: "Dynamic" },
      { label: "Versatility", value: "Multi-use" },
    ],
    image: unsplash("1626785774573-4b799315345d"),
    accent: "text-cyan",
  },
  {
    slug: "brochure-design",
    title: "Brochure Design",
    category: "Print Design",
    year: "2025",
    description: "Editorial brochure design that tells a brand story page by page — clean layout, sharp copy, print-perfect finish.",
    challenge: "Marketing collateral that looked generic and undersold the business behind it.",
    solution: "Editorial design with real hierarchy: every spread built to be read, kept, and passed along.",
    tech: ["Layout", "Typography", "Print Ready", "Brand Systems"],
    results: [
      { label: "Brand consistency", value: "100%" },
      { label: "Print quality", value: "Premium" },
      { label: "Turnaround", value: "Fast" },
    ],
    image: unsplash("1586281380349-632531db7ed4"),
    accent: "text-blue",
  },
  {
    slug: "business-cards",
    title: "Business Cards",
    category: "Print Design",
    year: "2025",
    description: "Business cards engineered for the first ten seconds of a relationship — premium stock, finishes, and restraint.",
    challenge: "Forgettable cards that contradicted the quality of the businesses handing them out.",
    solution: "Considered card design: one idea, premium materials, perfect alignment with the wider identity.",
    tech: ["Print Design", "Finishing", "Brand Identity", "Premium Stock"],
    results: [
      { label: "First impression", value: "Strong" },
      { label: "Brand alignment", value: "Perfect" },
      { label: "Uniqueness", value: "Custom" },
    ],
    image: unsplash("1586953208448-b61a7d0d9d1b"),
    accent: "text-violet",
  },
  {
    slug: "signages",
    title: "Signage",
    category: "Environmental",
    year: "2024",
    description: "Shopfront, wayfinding, and large-format signage that makes premises across Kerala impossible to miss.",
    challenge: "Inconsistent signage that weakened brand visibility at the exact point customers decide to walk in.",
    solution: "Signage systems designed as part of the brand — specified, produced, and installed to last.",
    tech: ["Wayfinding", "Shopfront Signage", "Large Format", "Installation"],
    results: [
      { label: "Visibility", value: "High" },
      { label: "Brand consistency", value: "Unified" },
      { label: "Durability", value: "Premium" },
    ],
    image: unsplash("1486406146926-c627a92ad1ab"),
    accent: "text-cyan",
  },
  {
    slug: "menu-design",
    title: "Menu Design",
    category: "Restaurant Branding",
    year: "2024",
    description: "Menus for restaurants and cafés that sell the dish before it reaches the table.",
    challenge: "Menus that looked dated and undersold kitchens that deserved better.",
    solution: "Menu design treated as brand design — layout, photography, and typography that match the food's ambition.",
    tech: ["Layout", "Typography", "Food Photography", "Print"],
    results: [
      { label: "Guest experience", value: "Enhanced" },
      { label: "Brand feel", value: "Premium" },
      { label: "Readability", value: "Clear" },
    ],
    image: unsplash("1414235077428-338989a2e8c0"),
    accent: "text-blue",
  },
  {
    slug: "web-development",
    title: "Web Development",
    category: "Web & Apps",
    year: "2026",
    description: "Custom websites built for speed, search, and conversion — not templates.",
    challenge: "Outdated websites that loaded slowly, ranked nowhere, and converted no one.",
    solution: "Modern, scalable web builds designed in Figma and engineered for performance and SEO from the first commit.",
    tech: ["Next.js", "React", "Custom Web", "CMS Integration"],
    results: [
      { label: "Performance", value: "Fast" },
      { label: "Scalability", value: "High" },
      { label: "Uptime", value: "Reliable" },
    ],
    image: unsplash("1467232004584-a241de8bcf5d"),
    accent: "text-cyan",
  },
  {
    slug: "app-development",
    title: "App Development",
    category: "Web & Apps",
    year: "2026",
    description: "Mobile and web applications designed and built for engagement, usability, and long-term growth.",
    challenge: "Businesses needing apps that work flawlessly across devices and scale with demand.",
    solution: "End-to-end app development — UI/UX and Figma prototypes through production-ready cross-platform builds.",
    tech: ["React Native", "Flutter", "Web Apps", "API Integration"],
    results: [
      { label: "Cross-platform", value: "Yes" },
      { label: "User experience", value: "Smooth" },
      { label: "Scalability", value: "Built-in" },
    ],
    image: unsplash("1512941937669-90a1b58e7e9c"),
    accent: "text-blue",
  },
  {
    slug: "custom-web",
    title: "Custom Web Platforms",
    category: "Web & Apps",
    year: "2026",
    description: "Bespoke web platforms engineered around your workflow — fully custom, fully yours.",
    challenge: "Off-the-shelf platforms that couldn't match unique business requirements or brand standards.",
    solution: "Custom architecture designed in Figma, developed clean, and built to scale without rewrites.",
    tech: ["Custom Build", "Scalable Stack", "Cloud Ready", "Secure"],
    results: [
      { label: "Custom fit", value: "100%" },
      { label: "Scalability", value: "High" },
      { label: "Maintainability", value: "Clean" },
    ],
    image: unsplash("1555066931-4365d14bab8c"),
    accent: "text-violet",
  },
  {
    slug: "ui-ux-design",
    title: "UI/UX Design",
    category: "Digital Design",
    year: "2025",
    description: "User-centred interface design that makes websites and apps intuitive, engaging, and conversion-focused.",
    challenge: "Digital products with confusing flows, poor usability, and high drop-off.",
    solution: "Research-driven UI/UX: wireframes, prototypes, and polished interface systems tested with real users.",
    tech: ["User Research", "Wireframes", "Prototyping", "Design Systems"],
    results: [
      { label: "Usability", value: "Improved" },
      { label: "Engagement", value: "Higher" },
      { label: "Conversions", value: "Optimised" },
    ],
    image: unsplash("1587440871875-191322ee64b0"),
    accent: "text-cyan",
  },
  {
    slug: "figma-design",
    title: "Figma Design",
    category: "Digital Design",
    year: "2025",
    description: "Pixel-perfect Figma systems for websites, apps, and brands — ready for development handoff.",
    challenge: "Designs that looked great in concept but fell apart during development.",
    solution: "Structured Figma files with components, variants, and dev-ready specs for seamless builds.",
    tech: ["Figma", "Components", "Prototypes", "Dev Handoff"],
    results: [
      { label: "Design fidelity", value: "Pixel-perfect" },
      { label: "Handoff speed", value: "Fast" },
      { label: "Consistency", value: "Unified" },
    ],
    image: unsplash("1618005182384-a83a8bd57fbe", 900),
    accent: "text-blue",
  },
  {
    slug: "booklets",
    title: "Booklets",
    category: "Print Design",
    year: "2024",
    description: "Booklets and company profiles that tell brand stories with editorial precision.",
    challenge: "Long-form content that lacked visual structure and brand cohesion.",
    solution: "Editorial booklet design that turns information into a narrative worth keeping.",
    tech: ["Editorial", "Layout", "Print Production", "Brand Story"],
    results: [
      { label: "Story clarity", value: "Strong" },
      { label: "Print quality", value: "Premium" },
      { label: "Brand voice", value: "Consistent" },
    ],
    image: unsplash("1456513080510-7bf3a84b82f8"),
    accent: "text-violet",
  },
  {
    slug: "labels",
    title: "Label Design",
    category: "Packaging",
    year: "2024",
    description: "Product labels designed for clarity, compliance, and shelf appeal.",
    challenge: "Labels that met regulations but failed to attract or communicate value.",
    solution: "Label design that balances compliance requirements with creative brand expression.",
    tech: ["Label Design", "Compliance", "Print Ready", "Brand Identity"],
    results: [
      { label: "Shelf appeal", value: "High" },
      { label: "Compliance", value: "Met" },
      { label: "Brand fit", value: "Seamless" },
    ],
    image: unsplash("1607083206869-4c7672f72a96"),
    accent: "text-cyan",
  },
  {
    slug: "stickers",
    title: "Stickers & Decals",
    category: "Print Design",
    year: "2024",
    description: "Custom stickers, decals, and vehicle graphics that carry the brand out into the world.",
    challenge: "Promotional materials that lacked creativity and brand consistency.",
    solution: "Bold die-cut designs with fast turnaround — from laptop stickers to full vehicle branding.",
    tech: ["Die Cut", "Vinyl", "Vehicle Branding", "Promotional"],
    results: [
      { label: "Brand reach", value: "Extended" },
      { label: "Creativity", value: "Unique" },
      { label: "Turnaround", value: "Fast" },
    ],
    image: unsplash("1558618666-fcd25c85cd64"),
    accent: "text-blue",
  },
  {
    slug: "catalogue-design",
    title: "Catalogue Design",
    category: "Print Design",
    year: "2024",
    description: "Product catalogues that make browsing effortless and buying obvious.",
    challenge: "Catalogues that overwhelmed readers with cluttered, uninspired layouts.",
    solution: "Structured catalogue systems — clear hierarchy, consistent photography, easy navigation.",
    tech: ["Catalogue Layout", "Photography", "Print", "Brand Systems"],
    results: [
      { label: "Product showcase", value: "Clear" },
      { label: "Brand feel", value: "Premium" },
      { label: "Sales support", value: "Strong" },
    ],
    image: unsplash("1544716275-e513f4b265f5"),
    accent: "text-violet",
  },
  {
    slug: "flyers",
    title: "Flyer Design",
    category: "Print Design",
    year: "2024",
    description: "Flyers and posters with one job: stop the scroll of the street and drive action.",
    challenge: "Promotional flyers that blended in and generated no response.",
    solution: "Bold flyer design with a single clear message and strong visual hierarchy.",
    tech: ["Print Design", "Promotional", "Layout", "Brand Messaging"],
    results: [
      { label: "Visual impact", value: "High" },
      { label: "Message clarity", value: "Clear" },
      { label: "Response rate", value: "Improved" },
    ],
    image: unsplash("1586281380349-632531db7ed4"),
    accent: "text-cyan",
  },
];

export const CAPABILITIES = [
  "Branding", "Logo Design", "Packaging Design", "Print Design",
  "Signage", "Vehicle Branding", "Digital Marketing", "SEO",
  "Video Production", "Web Development", "App Development", "UI/UX Design",
];

export const INDUSTRIES = [
  "Restaurants", "Healthcare", "Education", "Real Estate",
  "Retail", "Hospitality", "Startups", "Construction",
  "Manufacturing", "Luxury Brands", "Travel", "Corporate",
];

export const TECH_ORBITS: string[][] = [
  ["Branding", "Logo Design", "Packaging", "Signage", "Print"],
  ["Digital Marketing", "SEO", "Social Media", "Video Production", "Motion Graphics", "3D Design", "Events"],
  ["Web Development", "App Development", "UI/UX Design", "Figma", "AI Automation", "CRM Systems", "Cloud Solutions", "WhatsApp Automation"],
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

export const TEAM: TeamMember[] = [
  { name: "Creative Lead", role: "Brand Strategy", image: unsplash("1560250097-0b93528c311a", 800) },
  { name: "Design Director", role: "UI/UX & Figma Design", image: unsplash("1573496359142-b8d87734a5a2", 800) },
  { name: "Art Director", role: "Creative Design", image: unsplash("1494790108377-be9c29b29330", 800) },
  { name: "Engineering Lead", role: "Web & App Development", image: unsplash("1507003211169-0a1dd7228f2d", 800) },
  { name: "Production Head", role: "Video & Motion", image: unsplash("1500648767791-00dcc994a43e", 800) },
  { name: "AI Specialist", role: "AI & Automation", image: unsplash("1438761681033-6461ffad8d80", 800) },
  { name: "Motion Designer", role: "Motion Graphics", image: unsplash("1472099645785-5658abf4ff4e", 800) },
  { name: "Systems Architect", role: "CRM, ERP & Cloud", image: unsplash("1544005313-94ddf0286df2", 800) },
  { name: "Brand Manager", role: "Client Partnerships", image: unsplash("1506794778202-cad84cf45f1d", 800) },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      "Seventeen years in Saudi Arabia taught us discipline. Twelve years in India taught us range. Kerala is where we put both to work for you.",
    name: "Our Experience",
    role: "Three Markets, One Standard",
    company: "Media 360 Concept",
    rating: 5,
    image: unsplash("1580489944761-15a19d654956", 200),
  },
  {
    quote:
      "Every project is crafted from concept to final delivery by the same team that scoped it — no handoffs, no dilution, no surprises.",
    name: "Our Craft",
    role: "Quality Commitment",
    company: "Media 360 Concept",
    rating: 5,
    image: unsplash("1544005313-94ddf0286df2", 200),
  },
  {
    quote:
      "Beautiful isn't the goal. Beautiful, purposeful, and result-driven is the goal — design that earns its budget back.",
    name: "Our Belief",
    role: "Design Standard",
    company: "Media 360 Concept",
    rating: 5,
    image: unsplash("1506794778202-cad84cf45f1d", 200),
  },
  {
    quote:
      "Fast turnaround, unique concepts, and a client-first approach — from the first call to the final file, you always know where your project stands.",
    name: "Our Promise",
    role: "Client Experience",
    company: "Media 360 Concept",
    rating: 5,
    image: unsplash("1633332755192-727a05c4013d", 200),
  },
  {
    quote:
      "We answer WhatsApp messages, meet deadlines, and say no to work we can't do brilliantly. In this industry, that's rarer than it should be.",
    name: "Our Standard",
    role: "How We Work",
    company: "Media 360 Concept",
    rating: 5,
    image: unsplash("1573496359142-b8d87734a5a2", 200),
  },
  {
    quote:
      "Shape brands that stand out. Make creativity simple, bold, and timeless. Build things Kerala is proud to show the world.",
    name: "Our Mission",
    role: "Brand Building",
    company: "Media 360 Concept",
    rating: 5,
    image: unsplash("1560250097-0b93528c311a", 200),
  },
];

export const AWARDS = [
  { year: "Vision", title: "Designing Brands. Connecting Worlds.", org: "Future Vision" },
  { year: "Kerala", title: "The Creative Standard for God's Own Country", org: "Local Roots" },
  { year: "Global", title: "Kerala Craft, Gulf Discipline, Global Reach", org: "Three Markets" },
  { year: "Creativity", title: "Meaningful & Memorable Brands", org: "Innovation" },
  { year: "Mission", title: "Crafting Visuals That Drive Growth", org: "Our Mission" },
  { year: "Focus", title: "Innovating the Design World Ahead", org: "Future Focus" },
];

export const MILESTONES = [
  { year: "Kerala", text: "Headquartered in Kochi — the home base where strategy, design, and production come together for businesses across Kerala." },
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
    a: "Media 360 Concept is a full-service branding and creative agency headquartered in Kochi, Kerala. We combine 17+ years of experience in Saudi Arabia, 12+ years in India, and 8+ years in the USA to deliver branding, advertising, design, digital marketing, and media production for businesses of every size.",
  },
  {
    q: "What services does Media 360 Concept offer?",
    a: "We offer branding and identity design, brand strategy and market research, advertising and media buying, media production, digital marketing, event management, web development, app development, UI/UX and Figma design, AI automation, and CRM, ERP and cloud systems — every stage from research and planning through execution, monitoring, and evaluation.",
  },
  {
    q: "How much does branding cost in Kerala?",
    a: "Branding costs in Kerala depend on scope: a logo and basic identity costs far less than a complete brand system with packaging, signage, website, and campaign rollout. Media 360 Concept scopes every project individually so you pay for exactly what your business needs — contact us for a free consultation and a clear, itemised quote.",
  },
  {
    q: "How long does a branding project take?",
    a: "A focused logo and identity project typically takes a few weeks; a complete brand identity system with guidelines, collateral, and website usually runs six to ten weeks depending on feedback rounds and production requirements. We agree on the timeline before we start — and we keep it.",
  },
  {
    q: "What deliverables can you create for my brand?",
    a: "Logos, brand guidelines, packaging, labels, brochures, catalogues, booklets, flyers, business cards, menus, signage, vehicle branding, banners, stickers, T-shirt and mug printing, custom wallpapers — plus websites, apps, UI/UX design, video production, 3D design, motion graphics, and full digital marketing campaigns.",
  },
  {
    q: "Do you work with restaurants, hospitals, and schools?",
    a: "Yes — restaurant branding, hospital branding, and school branding are core strengths, alongside real estate, retail, hospitality, construction, manufacturing, luxury brands, travel, and startups. Each industry gets strategy and design tailored to how its customers actually decide.",
  },
  {
    q: "Where is Media 360 Concept located?",
    a: "Our headquarters is in Kochi, Kerala, India. We serve clients across Kerala and the rest of India, and internationally in Saudi Arabia (KSA), the UAE, and the United States — with 17+ years of on-ground experience in the Saudi market.",
  },
  {
    q: "Can you handle printing, signage, and vehicle branding?",
    a: "Yes. We design and manage production for signage, shopfront boards, vehicle branding, and every category of print — brochures, catalogues, packaging, labels, and promotional material — so the colours and quality that were approved on screen are exactly what gets delivered.",
  },
  {
    q: "Why should I choose Media 360 Concept over other agencies in Kerala?",
    a: "Because we combine international experience with local understanding: the discipline of 17+ years serving Saudi Arabian brands, the craft of 12+ years across India, and a Kochi-based team that answers fast, meets deadlines, and manages everything — strategy, design, production, and marketing — under one roof.",
  },
  {
    q: "How do I get started?",
    a: "Message us on WhatsApp at +91 9061 460 360, email media360concept@gmail.com, or use the contact form below. Tell us what you're building — a new launch, a rebrand, or your next campaign — and we'll reply within 24 hours with next steps and a free consultation.",
  },
];

export const POSTS = [
  {
    title: "How Much Does Branding Cost in Kerala? An Honest Guide",
    category: "Pricing",
    date: "2026",
    read: "8 min",
    image: unsplash("1618005182384-a83a8bd57fbe", 900),
  },
  {
    title: "Restaurant Branding in Kerala: From Menu to Memorable",
    category: "Restaurants",
    date: "2026",
    read: "7 min",
    image: unsplash("1414235077428-338989a2e8c0", 900),
  },
  {
    title: "The Brand Identity Checklist Every Kerala Startup Needs",
    category: "Startups",
    date: "2026",
    read: "6 min",
    image: unsplash("1561070791-252531d8b73e", 900),
  },
  {
    title: "Why Kerala Businesses Rebrand — and When You Should Too",
    category: "Strategy",
    date: "2026",
    read: "6 min",
    image: unsplash("1557804506-669a67965ba0", 900),
  },
];

export const OFFICES = [
  { city: "Kochi", country: "Kerala, India — HQ", line: "Strategy, design & production home base", tz: "GMT+5:30" },
  { city: "Saudi Arabia", country: "KSA", line: "17+ years of brand-building experience", tz: "GMT+3" },
  { city: "United States", country: "USA", line: "8+ years serving American clients", tz: "GMT-5" },
];

export const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Work", href: "#work" },
  { label: "Process", href: "#process" },
  { label: "Pricing", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

export const IMAGES = {
  aboutMain: unsplash("1522071820081-009f0129c71c"),
  aboutSecondary: unsplash("1531482615713-2afd69097998", 900),
};
