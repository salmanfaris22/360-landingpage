import type { Faq } from "./schema";
import { BRANDS, type BrandKey } from "./brands";
import { DETAILS, type CourseDetails } from "./academy-details";

/**
 * Media 360 Academy — the learning side of Media 360 Concept.
 * Every course is taught AI-first: students use AI assistants on every
 * project, then learn to check, debug and own what the AI produced.
 *
 * Copy rules match the agency pages: no invented placement numbers,
 * salaries, fees, batch dates or student testimonials.
 * Owner-confirmed (2026-10-13): batches run Sunday to Friday, morning and
 * evening; classes are taught in Malayalam and English; every course is also
 * live online; fees are not published. The AI Digital Master Program is 3 months.
 * TODO(owner): confirm the other courses' durations, certificate wording and
 * instructor names (an instructor block is not rendered until they are given).
 */

/** Glossy 3D tile drawn in CSS/SVG by Icon3D.astro. */
export type IconKind = "stack" | "python" | "server" | "browser" | "globe" | "spark" | "rocket" | "play" | "film" | "motion" | "wheel" | "wand" | "megaphone" | "code" | "pen" | "chart";
/** Light tones for the academy; blue/violet/cyan/magenta read best on the dark agency side. */
export type IconTone = "tangerine" | "yellow" | "sky" | "lilac" | "mint" | "pink" | "blue" | "violet" | "cyan" | "magenta";
export type Level = "Beginner" | "Intermediate" | "Advanced";

type CourseBase = {
  slug: string;
  /** Primary keyword — used as internal anchor text. */
  keyword: string;
  name: string;
  short: string;
  track: "Development" | "AI" | "Creative";
  /** Starting level, from each course's "who it's for" copy. */
  level: Level;
  /** A real product logo (`brand`) or, where none fits, a symbol (`kind` + `tone`). */
  icon: { brand?: BrandKey; kind?: IconKind; tone?: IconTone };
  title: string;
  description: string;
  h1: string;
  answer: string;
  forWho: string[];
  tools: string[];
  modules: { title: string; topics: string[] }[];
  projects: { title: string; text: string }[];
  careers: string[];
  faqs: Faq[];
  related: string[];
  /** e.g. "3 months" — leave empty until confirmed by the owner. */
  duration?: string;
  /** ISO 8601 form of `duration` for schema, e.g. "P3M". */
  durationIso?: string;
  /** Flagship multi-skill program: shown first and highlighted. */
  featured?: boolean;
};
export type Course = CourseBase & CourseDetails;

export const ACADEMY = {
  name: "Media 360 Academy",
  path: "/academy",
  tagline: "Learn to build with AI — from the people who build for clients.",
  description:
    "Media 360 Academy is the AI-first training arm of Media 360 Concept at HiLITE Business Park, Kozhikode (Calicut). It runs a 3-month AI Digital Master Program (digital marketing, AI web development, video editing and PR) and teaches MERN stack, Python full stack, Golang, frontend, AI development, vibe coding, forward deployed engineering, generative AI, AI video editing, Premiere Pro, After Effects and DaVinci Resolve through real client-style projects, offline in Calicut and live online, in Malayalam and English.",
};

const AI_FAQ_CREATIVE: Faq = {
  q: "Is AI really used in every module?",
  a: "Yes. You use AI tools from the first week — for captions, clean-up, assets and first drafts — and you are judged on taste and finish: whether the final piece is on-brief, on-brand and properly licensed.",
};

const AI_FAQ: Faq = {
  q: "Is AI really used in every module?",
  a: "Yes. You use AI assistants from the first week — to generate, explain, refactor and test — and you are graded on whether you can read, debug and defend what the AI produced. The goal is a developer or editor who is faster with AI, not dependent on it.",
};

const BASE: CourseBase[] = [
  {
    slug: "digital-marketing-ai-master-program-kozhikode",
    featured: true,
    duration: "3 months",
    durationIso: "P3M",
    level: "Beginner",
    icon: { kind: "megaphone", tone: "yellow" },
    keyword: "Digital Marketing & AI Course in Kozhikode",
    name: "AI Digital Master Program",
    short: "3 months: digital marketing, AI web development, Premiere Pro video editing and PR — one program, four job skills.",
    track: "AI",
    title: "Digital Marketing & AI Master Program, HiLITE Calicut",
    description:
      "3-month AI Digital Master Program at HiLITE Business Park, Calicut: digital marketing, AI web development, Premiere Pro video and PR. Offline + online.",
    h1: "Digital Marketing & AI Master Program in HiLITE Business Park, Kozhikode",
    answer:
      "The AI Digital Master Program is Media 360 Academy's 3-month course in digital marketing, AI web development, video editing with Premiere Pro, and PR and personal branding. It runs at HiLITE Business Park, Kozhikode (Calicut) and live online, Sunday to Friday, and ends with a full launch campaign you plan, build and run for one brand.",
    forWho: ["Graduates who want a marketing job in 3 months", "Business owners who want to run their own marketing", "Freelancers who want to sell websites, ads, video and PR together"],
    tools: ["ChatGPT & Claude", "Google Business Profile", "Google Ads", "Meta Ads", "GA4", "Next.js / WordPress", "Adobe Premiere Pro", "AI video tools", "LinkedIn"],
    modules: [
      { title: "Digital marketing & SEO", topics: ["Funnels and customer research", "SEO and Google Business Profile", "Content and copy with AI"] },
      { title: "Social media & paid ads", topics: ["Meta Ads and Instagram growth", "Google Ads search and Performance Max", "GA4, pixels and conversion tracking"] },
      { title: "AI web development", topics: ["Landing pages and websites built with AI", "Forms, WhatsApp and integrations", "Technical SEO, schema and AI search (GEO)"] },
      { title: "Video for marketing", topics: ["Premiere Pro editing for reels and ads", "Hooks, captions and retention", "AI video, voice and visuals"] },
      { title: "PR & personal branding", topics: ["Press releases and media outreach", "LinkedIn and personal brand", "Reviews, reputation and crisis replies"] },
      { title: "Capstone launch", topics: ["One brand: website, ads, video and PR", "Reporting dashboards", "Portfolio, freelancing and interviews"] },
    ],
    projects: [
      { title: "Local business growth plan", text: "SEO audit, Google Business Profile and an ads plan for a real Kozhikode business." },
      { title: "AI-built landing page + reels", text: "A live landing page and a reel series that drive enquiries to it." },
      { title: "Brand launch campaign", text: "Website, ads, video and a press kit for one brand, with a results report." },
    ],
    careers: ["Digital Marketing Executive", "Performance Marketer", "Social Media & Video Marketer", "PR & Content Executive", "Freelance Digital Marketer"],
    faqs: [],
    related: ["ai-web-development-course-kozhikode", "premiere-pro-course-kozhikode", "generative-ai-video-design-course-kozhikode"],
  },
  {
    slug: "mern-stack-course-kozhikode",
    level: "Beginner",
    icon: { brand: "mongodb" },
    keyword: "MERN Stack Course in Kozhikode",
    name: "MERN Stack Development",
    short: "MongoDB, Express, React, Node — full stack JavaScript with AI pair-programming.",
    track: "Development",
    title: "MERN Stack Course in HiLITE Business Park, Calicut",
    description:
      "AI-first MERN stack course in Kozhikode (Calicut): MongoDB, Express, React, Node.js and TypeScript, with real projects and career support. Offline and online.",
    h1: "MERN Stack Course in HiLITE Business Park, Kozhikode",
    answer:
      "The Media 360 Academy MERN stack course teaches full stack JavaScript — MongoDB, Express, React and Node.js, with TypeScript — at HiLITE Business Park, Calicut and online. You build and deploy production-style apps using AI pair-programming, with code reviews from working developers.",
    forWho: ["Graduates and final-year students starting a developer career", "Non-IT professionals switching into software", "Frontend developers who want to own the backend too"],
    tools: ["JavaScript", "TypeScript", "React", "Node.js", "Express", "MongoDB", "Git & GitHub", "Docker", "AI coding assistants"],
    modules: [
      { title: "Web & JavaScript foundations", topics: ["HTML, CSS and responsive layout", "Modern JavaScript and TypeScript", "Git, GitHub and code review"] },
      { title: "React front end", topics: ["Components, hooks and state", "Routing, forms and data fetching", "Tailwind CSS and accessible UI"] },
      { title: "Node.js & Express APIs", topics: ["REST API design", "Authentication with JWT and sessions", "Validation, errors and logging"] },
      { title: "MongoDB & data", topics: ["Schema design with Mongoose", "Aggregations and indexes", "File uploads and payments"] },
      { title: "AI in the stack", topics: ["Pair-programming with AI assistants", "Adding LLM features to an app", "Testing and reviewing AI-written code"] },
      { title: "Ship it", topics: ["Docker and cloud deployment", "CI/CD basics", "Performance and security checks"] },
    ],
    projects: [
      { title: "E-commerce store", text: "Catalogue, cart, payments and an admin panel — the kind of build our agency ships for clients." },
      { title: "Booking & CRM app", text: "Appointments, roles, notifications and dashboards for a clinic or salon." },
      { title: "AI-powered SaaS", text: "A full stack product with an LLM feature, usage limits and a deployed landing page." },
    ],
    careers: ["MERN Stack Developer", "Full Stack Developer", "React Developer", "Node.js Backend Developer"],
    faqs: [
      { q: "Do I need coding experience to join the MERN stack course?", a: "No. The course starts from web and JavaScript fundamentals. You need a laptop, basic computer skills and time to practise every day." },
      AI_FAQ,
    ],
    related: ["python-full-stack-course-kozhikode", "frontend-development-course-kozhikode", "ai-web-development-course-kozhikode"],
  },
  {
    slug: "python-full-stack-course-kozhikode",
    level: "Beginner",
    icon: { brand: "python" },
    keyword: "Python Full Stack Course in Kozhikode",
    name: "Python Full Stack Development",
    short: "Python, Django, FastAPI and React — plus the AI and data skills Python is known for.",
    track: "Development",
    title: "Python Full Stack Course in HiLITE Business Park, Calicut",
    description:
      "Python full stack course in Calicut: Python, Django, FastAPI, PostgreSQL and React, with AI and LLM integration and real projects. Offline at HiLITE + online.",
    h1: "Python Full Stack Course in HiLITE Business Park, Kozhikode",
    answer:
      "The Python full stack course at Media 360 Academy covers Python, Django, FastAPI, PostgreSQL and React, then adds LLM APIs and automation — the reason most companies hire Python developers now. Classes run at HiLITE Business Park, Calicut and online.",
    forWho: ["Freshers who want a versatile first language", "Engineers moving toward AI and data work", "Working professionals automating their own jobs"],
    tools: ["Python", "Django", "FastAPI", "PostgreSQL", "React", "Celery", "Docker", "LLM APIs"],
    modules: [
      { title: "Python properly", topics: ["Core Python and OOP", "Typing, testing with pytest", "Scripts and automation"] },
      { title: "Django web apps", topics: ["Models, views and templates", "Django REST Framework", "Auth, permissions and admin"] },
      { title: "FastAPI services", topics: ["Async APIs", "Pydantic validation", "Background jobs"] },
      { title: "Databases", topics: ["PostgreSQL and SQL", "ORM performance", "Redis caching"] },
      { title: "React front end", topics: ["Components and state", "Consuming APIs", "Deploying a full stack app"] },
      { title: "Python for AI", topics: ["Calling LLM APIs", "RAG over your own documents", "AI agents and tool use"] },
    ],
    projects: [
      { title: "Learning management system", text: "Courses, roles, progress tracking and payments built with Django and React." },
      { title: "AI document assistant", text: "Upload PDFs and ask questions — retrieval, embeddings and an LLM behind a FastAPI service." },
      { title: "Business automation", text: "A scheduled pipeline that pulls data, generates reports and sends them over WhatsApp or email." },
    ],
    careers: ["Python Full Stack Developer", "Django Developer", "Backend Engineer", "AI Application Developer"],
    faqs: [
      { q: "Python full stack or MERN — which should I choose?", a: "Choose Python if you are drawn to AI, data and automation; choose MERN if you want one language across front end and back end. Both lead to full stack roles, and we help you decide in a free counselling session." },
      { q: "Will I learn AI in the Python course?", a: "Yes. The final module covers LLM APIs, retrieval-augmented generation and AI agents, and the capstone project includes an AI feature." },
      AI_FAQ,
    ],
    related: ["mern-stack-course-kozhikode", "ai-developer-vibe-coding-course-kozhikode", "golang-backend-course-kozhikode"],
  },
  {
    slug: "golang-backend-course-kozhikode",
    level: "Advanced",
    icon: { brand: "go" },
    keyword: "Golang Course in Kozhikode",
    name: "Golang Backend Development",
    short: "Go, microservices, PostgreSQL, gRPC and cloud — backend engineering that scales.",
    track: "Development",
    title: "Golang Course in HiLITE Business Park, Calicut",
    description:
      "Golang backend course in Kozhikode: Go, REST and gRPC microservices, PostgreSQL, Redis, Docker and Kubernetes, with AI-assisted coding. Calicut + online.",
    h1: "Golang Backend Course in HiLITE Business Park, Kozhikode",
    answer:
      "Media 360 Academy's Golang course trains backend engineers in Go — APIs, concurrency, microservices, PostgreSQL, Redis, Docker and cloud deployment — using AI assistants for speed and code review for quality. Offline at HiLITE Business Park, Calicut, or online.",
    forWho: ["Developers who know one language and want backend depth", "MERN or Python developers moving to high-performance systems", "CS graduates aiming for product companies"],
    tools: ["Go", "Gin / Fiber", "PostgreSQL", "Redis", "gRPC", "Docker", "Kubernetes basics", "AI coding assistants"],
    modules: [
      { title: "Go fundamentals", topics: ["Types, structs and interfaces", "Error handling", "Testing and benchmarks"] },
      { title: "Concurrency", topics: ["Goroutines and channels", "Context and cancellation", "Worker pools"] },
      { title: "APIs", topics: ["REST with Gin or Fiber", "gRPC and protobuf", "Auth and middleware"] },
      { title: "Data", topics: ["PostgreSQL with sqlc / GORM", "Redis caching and queues", "Migrations"] },
      { title: "Microservices", topics: ["Service boundaries", "Messaging", "Observability"] },
      { title: "Cloud", topics: ["Docker images", "Kubernetes basics", "CI/CD pipelines"] },
    ],
    projects: [
      { title: "Payments-style API", text: "Idempotent transactions, rate limiting and audit logs in Go and PostgreSQL." },
      { title: "Real-time chat service", text: "WebSockets, Redis pub/sub and horizontal scaling." },
      { title: "Microservice system", text: "Three services talking over gRPC, deployed with Docker and monitored." },
    ],
    careers: ["Golang Developer", "Backend Engineer", "Platform Engineer", "Cloud / DevOps Engineer"],
    faqs: [
      { q: "Can a beginner learn Golang?", a: "Go is simple to read, but this course assumes you can already write basic programs in any language. Complete beginners should start with MERN or Python full stack." },
      { q: "Is there demand for Go developers?", a: "Go is widely used for cloud, fintech and infrastructure back ends because it is fast and easy to deploy. It is a smaller but less crowded market than JavaScript." },
      AI_FAQ,
    ],
    related: ["python-full-stack-course-kozhikode", "mern-stack-course-kozhikode", "forward-deployed-engineer-course-kerala"],
  },
  {
    slug: "frontend-development-course-kozhikode",
    level: "Beginner",
    icon: { brand: "react" },
    keyword: "Frontend Development Course in Kozhikode",
    name: "Frontend Development",
    short: "React, Next.js, TypeScript and Figma-to-code — interfaces that are fast and found on Google.",
    track: "Development",
    title: "Frontend Course in HiLITE Business Park, Calicut",
    description:
      "Frontend course in Kozhikode: HTML, CSS, JavaScript, TypeScript, React, Next.js, Tailwind and Figma-to-code, with SEO and AI tools. Calicut + online.",
    h1: "Frontend Development Course in HiLITE Business Park, Kozhikode",
    answer:
      "The frontend development course at Media 360 Academy teaches HTML, CSS, JavaScript, TypeScript, React and Next.js, plus Figma-to-code, accessibility, SEO and Core Web Vitals. You learn from the team that designs and ships client websites at HiLITE Business Park, Calicut.",
    forWho: ["Beginners who like visual, design-led work", "Designers who want to code their own designs", "Developers who want stronger UI skills"],
    tools: ["HTML & CSS", "JavaScript", "TypeScript", "React", "Next.js", "Tailwind CSS", "Figma", "AI UI tools"],
    modules: [
      { title: "HTML & CSS", topics: ["Semantic HTML and accessibility", "Flexbox, grid and responsive design", "Tailwind CSS"] },
      { title: "JavaScript & TypeScript", topics: ["DOM and events", "Async and APIs", "TypeScript for React"] },
      { title: "React", topics: ["Components and hooks", "State management", "Forms and validation"] },
      { title: "Next.js", topics: ["Routing and rendering modes", "SEO metadata and schema", "Image and font performance"] },
      { title: "Design to code", topics: ["Reading Figma files", "Design systems", "Animation with restraint"] },
      { title: "AI for frontend", topics: ["Generating UI with AI, then fixing it", "Testing components", "Lighthouse and Core Web Vitals"] },
    ],
    projects: [
      { title: "Agency-grade landing page", text: "From a real Figma file to a 95+ Lighthouse page with schema and analytics." },
      { title: "Dashboard UI", text: "Charts, tables, filters and dark mode in React and TypeScript." },
      { title: "Next.js content site", text: "A multi-page site with SEO metadata, sitemap and a headless CMS." },
    ],
    careers: ["Frontend Developer", "React Developer", "Next.js Developer", "UI Engineer"],
    faqs: [
      { q: "Is frontend development still worth learning with AI tools?", a: "Yes — AI can draft UI, but companies need people who can make it accessible, fast, on-brand and correct. That judgement is what this course trains." },
      { q: "Do I need design skills?", a: "No. You learn to read Figma files and design systems; drawing skills are not required." },
      AI_FAQ,
    ],
    related: ["mern-stack-course-kozhikode", "ai-web-development-course-kozhikode", "ai-developer-vibe-coding-course-kozhikode"],
  },
  {
    slug: "ai-web-development-course-kozhikode",
    level: "Beginner",
    icon: { brand: "nextjs" },
    keyword: "AI Web Development Course in Kozhikode",
    name: "AI Web Development",
    short: "Build and launch websites and web apps with AI — prompts, Next.js, CMS, SEO and deployment.",
    track: "AI",
    title: "AI Web Development Course in HiLITE Business Park",
    description:
      "AI web development course in Calicut: build, launch and rank websites and web apps with AI tools, Next.js, a headless CMS and SEO. Offline and online.",
    h1: "AI Web Development Course in HiLITE Business Park, Kozhikode",
    answer:
      "Media 360 Academy's AI web development course teaches you to plan, build, launch and rank websites and web apps with AI — prompt-driven development, Next.js, a headless CMS, technical SEO and deployment — so you can deliver client websites in days, not months.",
    forWho: ["Freelancers who want to sell websites", "Marketers and business owners building their own sites", "Students who want a fast route to paid projects"],
    tools: ["AI coding assistants", "AI app builders", "Next.js", "Tailwind CSS", "Headless CMS", "Vercel", "Google Search Console", "Analytics"],
    modules: [
      { title: "How the web works", topics: ["Domains, hosting and DNS", "HTML, CSS and JS essentials", "Reading and editing AI output"] },
      { title: "Prompt-driven building", topics: ["Specs and prompts that produce good code", "Iterating with AI assistants", "Version control"] },
      { title: "Next.js sites", topics: ["Pages, layouts and components", "Forms and integrations", "Headless CMS"] },
      { title: "SEO & AI search", topics: ["Technical SEO and schema", "Content for Google and AI answers", "Search Console"] },
      { title: "Web apps with AI", topics: ["Auth and databases", "Adding chatbots and AI features", "Payments"] },
      { title: "Freelance & launch", topics: ["Scoping and pricing projects", "Deployment and handover", "Maintenance plans"] },
    ],
    projects: [
      { title: "Local business website", text: "A fast, SEO-ready site for a real local business, live on its own domain." },
      { title: "AI chatbot site", text: "A site with an AI assistant trained on the business's own FAQs." },
      { title: "Portfolio + client pitch", text: "Your own portfolio and a proposal template to win your first paid project." },
    ],
    careers: ["Web Developer", "Freelance Web Designer", "WordPress / Next.js Developer", "Website & SEO Executive"],
    faqs: [
      { q: "Can I build websites with AI without learning to code?", a: "You can produce something, but you cannot fix, secure or rank it. This course teaches enough code to understand and correct what AI generates, which is what clients pay for." },
      { q: "Will this course help me freelance?", a: "Yes. The last module covers scoping, pricing, handover and maintenance plans, and you leave with a portfolio and a proposal template." },
      AI_FAQ,
    ],
    related: ["frontend-development-course-kozhikode", "ai-developer-vibe-coding-course-kozhikode", "ai-video-editing-course-kozhikode"],
  },
  {
    slug: "ai-developer-vibe-coding-course-kozhikode",
    level: "Intermediate",
    icon: { brand: "claude" },
    keyword: "AI Developer & Vibe Coding Course",
    name: "AI Developer & Vibe Coding",
    short: "LLMs, agents, RAG and vibe coding — ship AI products fast, then make them reliable.",
    track: "AI",
    title: "AI Developer & Vibe Coding Course in HiLITE, Calicut",
    description:
      "AI developer and vibe coding course in Calicut: LLM APIs, prompt engineering, RAG, AI agents, MCP and AI coding tools — build and ship real AI products.",
    h1: "AI Developer & Vibe Coding Course in HiLITE Business Park, Kozhikode",
    answer:
      "The AI developer and vibe coding course at Media 360 Academy teaches you to build products with large language models — prompt engineering, RAG, AI agents, tool use and MCP — and to vibe code with AI assistants while keeping the code tested, secure and maintainable.",
    forWho: ["Developers who want to move into AI engineering", "Founders prototyping AI products", "Python or JavaScript learners who want the newest skill set"],
    tools: ["LLM APIs", "AI coding agents", "Python", "TypeScript", "Vector databases", "MCP", "LangGraph-style agents", "Evals"],
    modules: [
      { title: "LLM fundamentals", topics: ["How models work, tokens and context", "Prompt engineering", "Choosing models and cost"] },
      { title: "Vibe coding, done right", topics: ["Working with AI coding agents", "Specs, tests and guardrails", "Reviewing and refactoring AI code"] },
      { title: "RAG", topics: ["Embeddings and vector search", "Chunking and retrieval quality", "Citations"] },
      { title: "Agents & tools", topics: ["Tool calling", "Model Context Protocol (MCP)", "Multi-step agents"] },
      { title: "Shipping AI products", topics: ["Streaming UIs", "Auth, billing and rate limits", "Deployment"] },
      { title: "Quality & safety", topics: ["Evals and monitoring", "Prompt injection and data safety", "Cost control"] },
    ],
    projects: [
      { title: "Company knowledge assistant", text: "A RAG chatbot over real documents with citations and an admin panel." },
      { title: "WhatsApp AI agent", text: "An agent that answers customers and books appointments using tools." },
      { title: "Vibe-coded SaaS MVP", text: "An idea to a deployed, tested product in two weeks with AI coding agents." },
    ],
    careers: ["AI Engineer", "LLM Application Developer", "AI Automation Specialist", "Full Stack AI Developer"],
    faqs: [
      { q: "What is vibe coding?", a: "Vibe coding means describing what you want and letting AI coding agents write most of the code. It is fast for prototypes; this course adds the specs, tests and reviews that make vibe-coded software safe to ship." },
      { q: "Do I need to know programming for the AI developer course?", a: "Basic Python or JavaScript helps. If you are new to code, start with a full stack course or ask about our bridge sessions during counselling." },
      AI_FAQ,
    ],
    related: ["forward-deployed-engineer-course-kerala", "python-full-stack-course-kozhikode", "ai-web-development-course-kozhikode"],
  },
  {
    slug: "forward-deployed-engineer-course-kerala",
    level: "Advanced",
    icon: { brand: "postgresql" },
    keyword: "Forward Deployed Engineer Course",
    name: "Forward Deployed Engineer (AI)",
    short: "Engineer + consultant: deploy AI systems inside real businesses and make them work.",
    track: "AI",
    title: "Forward Deployed Engineer Course, HiLITE Calicut",
    description:
      "Forward deployed engineer course in Kerala: deploy AI and software inside real businesses — integrations, data, agents, client skills. Calicut + online.",
    h1: "Forward Deployed Engineer Course in HiLITE Business Park, Kozhikode",
    answer:
      "A forward deployed engineer (FDE) works with customers to deploy software and AI inside their business. Media 360 Academy's FDE course trains you in integrations, data pipelines, AI agents and client communication by placing you on live, agency-style deployments run from HiLITE Business Park, Calicut.",
    forWho: ["Developers who enjoy talking to customers", "Engineers aiming for AI startups and product companies", "Consultants who want hands-on technical depth"],
    tools: ["Python", "TypeScript", "SQL", "APIs & webhooks", "LLM APIs", "AI agents", "Cloud", "Documentation"],
    modules: [
      { title: "The FDE role", topics: ["What forward deployed engineers do", "Discovery calls and requirements", "Scoping and estimates"] },
      { title: "Integration engineering", topics: ["REST, webhooks and auth", "CRMs, ERPs and spreadsheets", "Data cleaning with SQL and Python"] },
      { title: "AI deployment", topics: ["RAG and agents for business workflows", "Evals on customer data", "Human-in-the-loop design"] },
      { title: "Production", topics: ["Cloud deployment", "Monitoring and incidents", "Security and access"] },
      { title: "Client skills", topics: ["Demos and presentations", "Writing clear docs", "Handling change requests"] },
    ],
    projects: [
      { title: "CRM + AI integration", text: "Connect a CRM to an AI agent that drafts replies and updates records." },
      { title: "Operations automation", text: "Replace a manual spreadsheet process with a monitored pipeline." },
      { title: "Client deployment simulation", text: "Run a project end to end: discovery, build, demo, handover." },
    ],
    careers: ["Forward Deployed Engineer", "Solutions Engineer", "AI Implementation Engineer", "Technical Consultant"],
    faqs: [
      { q: "What is a forward deployed engineer?", a: "An engineer who works directly with customers to deploy, integrate and adapt a product — part developer, part consultant. The role is common in AI companies because every customer's data and workflows are different." },
      { q: "Who should take the FDE course?", a: "People who already code in Python or JavaScript and enjoy solving business problems with customers. It is an advanced course, not a beginner one." },
      AI_FAQ,
    ],
    related: ["ai-developer-vibe-coding-course-kozhikode", "golang-backend-course-kozhikode", "python-full-stack-course-kozhikode"],
  },
  {
    slug: "ai-video-editing-course-kozhikode",
    level: "Beginner",
    icon: { kind: "play", tone: "tangerine" },
    keyword: "AI Video Editing Course in Kozhikode",
    name: "AI Video Editing",
    short: "Premiere Pro, After Effects, DaVinci Resolve and AI video tools — edit like a studio.",
    track: "Creative",
    title: "AI Video Editing Course in HiLITE Business Park, Calicut",
    description:
      "AI video editing course in Kozhikode: Premiere Pro, After Effects, DaVinci Resolve, colour, motion graphics and AI video tools for reels, ads and YouTube.",
    h1: "AI Video Editing Course in HiLITE Business Park, Kozhikode",
    answer:
      "Media 360 Academy's AI video editing course teaches Adobe Premiere Pro, After Effects and DaVinci Resolve together with AI tools for captions, voice, generative video and clean-up. You edit reels, ads and brand films alongside the agency's production team in Calicut.",
    forWho: ["Content creators and YouTubers", "Students aiming for media and agency jobs", "Marketers who want to produce their own videos"],
    tools: ["Adobe Premiere Pro", "Adobe After Effects", "DaVinci Resolve", "CapCut", "AI captioning", "AI voice tools", "Generative video tools"],
    modules: [
      { title: "Editing fundamentals", topics: ["Story, pacing and cuts", "Premiere Pro workflow", "Audio clean-up"] },
      { title: "Short-form & reels", topics: ["Hooks and retention editing", "Captions and templates", "Platform formats"] },
      { title: "Motion graphics", topics: ["After Effects essentials", "Kinetic typography", "Logo animation"] },
      { title: "Colour", topics: ["DaVinci Resolve colour grading", "Matching shots", "LUTs and looks"] },
      { title: "AI video tools", topics: ["AI captions, voice and translation", "Generative b-roll and clean-up", "Ethics and rights"] },
      { title: "Client work", topics: ["Briefs and revisions", "Delivery specs", "Building a showreel"] },
    ],
    projects: [
      { title: "Reel series", text: "A set of short-form videos for a real brand, cut for retention." },
      { title: "Product ad", text: "A 30-second ad with motion graphics, colour grade and sound design." },
      { title: "Showreel", text: "Your best work cut into a reel you can send to studios and clients." },
    ],
    careers: ["Video Editor", "Motion Graphics Artist", "Colourist", "Content Creator / Social Video Producer"],
    faqs: [
      { q: "Which software is taught in the video editing course?", a: "Adobe Premiere Pro, After Effects and DaVinci Resolve, plus CapCut and current AI tools for captions, voice and generative footage." },
      { q: "Do I need my own camera or a powerful laptop?", a: "A camera is not required; a phone is enough for practice footage. Editing needs a reasonably capable laptop, and we advise on specifications during counselling." },
      AI_FAQ_CREATIVE,
    ],
    related: ["premiere-pro-course-kozhikode", "after-effects-course-kozhikode", "davinci-resolve-course-kozhikode"],
  },
  {
    slug: "premiere-pro-course-kozhikode",
    level: "Beginner",
    icon: { brand: "premiere" },
    keyword: "Premiere Pro Course in Kozhikode",
    name: "Premiere Pro Video Editing",
    short: "Edit reels, ads and YouTube videos in Adobe Premiere Pro — with AI for captions, clean-up and speed.",
    track: "Creative",
    title: "Premiere Pro Course in HiLITE Business Park, Calicut",
    description:
      "Adobe Premiere Pro course in Kozhikode (Calicut): editing, audio, colour, captions and AI tools for reels, ads and YouTube. Offline at HiLITE + online.",
    h1: "Premiere Pro Course in HiLITE Business Park, Kozhikode",
    answer:
      "Media 360 Academy's Premiere Pro course teaches professional video editing in Adobe Premiere Pro — cutting, audio, colour, titles and export — plus the AI features that speed up captions, clean-up and rough cuts. Classes run at HiLITE Business Park, Calicut and online.",
    forWho: ["Beginners who want a first editing job or freelance work", "YouTubers and content creators", "Marketing teams producing their own video"],
    tools: ["Adobe Premiere Pro", "Speech to Text", "Enhance Speech", "Lumetri Color", "Essential Graphics", "AI captioning"],
    modules: [
      { title: "Premiere Pro foundations", topics: ["Workspace, projects and media management", "Cutting, trimming and the timeline", "Keyboard-first editing"] },
      { title: "Story & pacing", topics: ["Building a narrative", "J-cuts, L-cuts and rhythm", "Editing interviews and talking heads"] },
      { title: "Audio", topics: ["Cleaning dialogue with Enhance Speech", "Music, sound effects and mixing", "Loudness for social and YouTube"] },
      { title: "Colour & titles", topics: ["Lumetri colour correction", "Titles, lower thirds and captions", "Essential Graphics templates"] },
      { title: "AI-assisted editing", topics: ["Speech to Text and text-based editing", "AI captions, translation and voice", "Generative tools and rights"] },
      { title: "Delivery", topics: ["Export settings per platform", "Client review and revisions", "Building a showreel"] },
    ],
    projects: [
      { title: "Reel series", text: "A set of vertical videos cut for hooks and retention." },
      { title: "YouTube episode", text: "A long-form video with chapters, captions and clean audio." },
      { title: "Brand ad", text: "A 30-second ad edited to a client-style brief." },
    ],
    careers: ["Video Editor", "YouTube Editor", "Social Media Video Editor", "Post-Production Assistant"],
    faqs: [
      { q: "Do I need a powerful laptop for Premiere Pro?", a: "Premiere Pro runs best on a recent laptop with a dedicated graphics card and 16 GB of memory or more. We advise on specifications during counselling." },
      { q: "Premiere Pro or DaVinci Resolve — which should I learn?", a: "Premiere Pro is the most common editor in agencies and media teams and works closely with After Effects. DaVinci Resolve has a free version and is the industry standard for colour. Many editors learn Premiere first and add Resolve later; we help you choose." },
      AI_FAQ_CREATIVE,
    ],
    related: ["after-effects-course-kozhikode", "davinci-resolve-course-kozhikode", "ai-video-editing-course-kozhikode"],
  },
  {
    slug: "after-effects-course-kozhikode",
    level: "Intermediate",
    icon: { brand: "aftereffects" },
    keyword: "After Effects Course in Kozhikode",
    name: "After Effects & Motion Graphics",
    short: "Motion graphics, kinetic type, logo animation and VFX basics in Adobe After Effects — sped up with AI.",
    track: "Creative",
    title: "After Effects Course in HiLITE Business Park, Calicut",
    description:
      "Adobe After Effects course in Calicut: motion graphics, kinetic typography, logo animation, VFX basics and AI tools. Offline at HiLITE Business Park + online.",
    h1: "After Effects Course in HiLITE Business Park, Kozhikode",
    answer:
      "The After Effects course at Media 360 Academy teaches motion graphics in Adobe After Effects — keyframes, kinetic typography, shape animation, logo reveals, tracking and compositing — with AI tools for rotoscoping, clean-up and generating assets. Learn offline at HiLITE Business Park, Calicut, or online.",
    forWho: ["Video editors who want to add motion graphics", "Graphic designers moving into animation", "Content creators who want branded, animated videos"],
    tools: ["Adobe After Effects", "Adobe Illustrator", "Roto Brush", "Motion tracking", "Expressions", "AI asset tools"],
    modules: [
      { title: "Animation fundamentals", topics: ["Keyframes, easing and the graph editor", "Timing and spacing", "Pre-compositions"] },
      { title: "Kinetic typography", topics: ["Text animators", "Lyric and quote videos", "Captions with style"] },
      { title: "Shape & logo animation", topics: ["Shape layers and paths", "Animating Illustrator files", "Logo reveals"] },
      { title: "Compositing & VFX basics", topics: ["Masks, mattes and blending", "Motion tracking", "Roto Brush and clean-up"] },
      { title: "AI in motion design", topics: ["AI-generated textures and backgrounds", "AI rotoscoping and object removal", "Using AI responsibly with client assets"] },
      { title: "Production", topics: ["Templates and Essential Graphics", "Rendering and delivery", "Motion showreel"] },
    ],
    projects: [
      { title: "Logo animation", text: "A brand logo reveal with sound design." },
      { title: "Animated explainer", text: "A 30-second explainer with kinetic type and shape animation." },
      { title: "Motion showreel", text: "Your best motion work cut into a reel for studios and clients." },
    ],
    careers: ["Motion Graphics Designer", "After Effects Animator", "Video Editor & Motion Designer", "Social Media Content Designer"],
    faqs: [
      { q: "Do I need to know video editing before After Effects?", a: "It helps but is not required. If you are new to video, the Premiere Pro course is a good first step, and many students take both." },
      { q: "Is After Effects used for VFX?", a: "After Effects handles motion graphics, compositing and lighter visual effects. Heavy 3D and film VFX use other tools, but After Effects is the standard for motion design in agencies and social media." },
      AI_FAQ_CREATIVE,
    ],
    related: ["premiere-pro-course-kozhikode", "generative-ai-video-design-course-kozhikode", "ai-video-editing-course-kozhikode"],
  },
  {
    slug: "davinci-resolve-course-kozhikode",
    level: "Beginner",
    icon: { brand: "davinci" },
    keyword: "DaVinci Resolve Course in Kozhikode",
    name: "DaVinci Resolve Editing & Colour",
    short: "Edit, colour grade and finish in DaVinci Resolve — the studio-grade editor with a free version and AI tools.",
    track: "Creative",
    title: "DaVinci Resolve Course in HiLITE Business Park, Calicut",
    description:
      "DaVinci Resolve course in Kozhikode: editing, colour grading, Fairlight audio and AI-powered Neural Engine tools. Offline at HiLITE Business Park + online.",
    h1: "DaVinci Resolve Course in HiLITE Business Park, Kozhikode",
    answer:
      "Media 360 Academy's DaVinci Resolve course covers editing, colour correction and grading, Fairlight audio and delivery in DaVinci Resolve, including its AI-powered Neural Engine tools such as Magic Mask and voice isolation. Classes run at HiLITE Business Park, Calicut and online.",
    forWho: ["Editors who want professional colour skills", "Filmmakers and wedding videographers", "Beginners who want a free, professional editor"],
    tools: ["DaVinci Resolve", "Color page & nodes", "Fairlight audio", "Magic Mask", "Voice isolation", "LUTs"],
    modules: [
      { title: "Resolve basics", topics: ["Media, cut and edit pages", "Timelines and trimming", "Project management"] },
      { title: "Colour correction", topics: ["Scopes and exposure", "White balance and skin tones", "Matching shots"] },
      { title: "Colour grading", topics: ["Node-based grading", "Looks, LUTs and film emulation", "Power windows and tracking"] },
      { title: "Audio with Fairlight", topics: ["Dialogue clean-up", "Voice isolation", "Mixing and loudness"] },
      { title: "AI tools", topics: ["Magic Mask and object isolation", "Speed Warp and Smart Reframe", "AI-assisted workflows"] },
      { title: "Delivery", topics: ["Render settings", "Client review", "Grading showreel"] },
    ],
    projects: [
      { title: "Short film grade", text: "Correct and grade a short film to one consistent look." },
      { title: "Event highlight film", text: "Edit and colour a wedding or event highlight with clean audio." },
      { title: "Before/after reel", text: "A colour showreel that shows your grading range." },
    ],
    careers: ["Colourist", "Video Editor", "Post-Production Editor", "Wedding & Event Filmmaker"],
    faqs: [
      { q: "Is DaVinci Resolve really free?", a: "Yes, DaVinci Resolve has a free version that covers most editing and colour work. Some AI and advanced features need the paid Studio version; we cover both and tell you when Studio is required." },
      { q: "Do I need Premiere Pro as well?", a: "No. Resolve is a complete editor on its own. Many agencies use Premiere Pro, so some students learn both — we help you decide during counselling." },
      AI_FAQ_CREATIVE,
    ],
    related: ["premiere-pro-course-kozhikode", "ai-video-editing-course-kozhikode", "after-effects-course-kozhikode"],
  },
  {
    slug: "generative-ai-video-design-course-kozhikode",
    level: "Beginner",
    icon: { brand: "openai" },
    keyword: "Generative AI Course in Kozhikode",
    name: "Generative AI for Video & Design",
    short: "Create images, video, voice and ads with generative AI — then finish them like a professional.",
    track: "AI",
    title: "Generative AI Course in HiLITE Business Park, Calicut",
    description:
      "Generative AI course in Calicut: create images, video, voice and ads with AI tools, then edit and finish them professionally. Offline at HiLITE + online.",
    h1: "Generative AI Course in HiLITE Business Park, Kozhikode",
    answer:
      "The generative AI course at Media 360 Academy teaches you to create images, video, voice and ad creatives with current AI tools — prompting, consistency, editing and rights — and to finish the results in professional software so they are ready for clients and social media.",
    forWho: ["Content creators and social media managers", "Designers and editors adding AI to their work", "Marketers who want to produce creatives in-house"],
    tools: ["AI image generators", "AI video generators", "AI voice & music", "Adobe Firefly", "Photoshop", "Premiere Pro"],
    modules: [
      { title: "How generative AI works", topics: ["Models, prompts and limits", "Choosing tools for each job", "Costs and workflows"] },
      { title: "AI images", topics: ["Prompting for style and consistency", "Editing and upscaling", "Brand-safe visuals"] },
      { title: "AI video", topics: ["Text- and image-to-video", "Shot planning for AI video", "Consistency across scenes"] },
      { title: "Voice & sound", topics: ["AI voiceover and dubbing", "Music and sound design", "Lip-sync basics"] },
      { title: "Finishing", topics: ["Editing AI footage in Premiere Pro", "Photoshop clean-up", "Captions and formats"] },
      { title: "Ethics & rights", topics: ["Copyright and licences", "Disclosure and platform rules", "Client approvals"] },
    ],
    projects: [
      { title: "AI ad campaign", text: "AI-generated product visuals and a short video ad for one brand." },
      { title: "AI explainer", text: "A narrated explainer built from AI images, video and voice." },
      { title: "Brand content kit", text: "A month of social posts produced with AI and finished by hand." },
    ],
    careers: ["AI Content Creator", "Generative AI Designer", "Social Media Creative", "AI Video Producer"],
    faqs: [
      { q: "Do I need design or editing experience for the generative AI course?", a: "No. The course starts with the basics of each tool. Experience in design or editing helps you finish the results faster." },
      { q: "Is AI-generated content safe to use for clients?", a: "It can be, if you follow licences, platform rules and client approvals. A full module covers copyright, disclosure and brand safety." },
      AI_FAQ_CREATIVE,
    ],
    related: ["after-effects-course-kozhikode", "ai-video-editing-course-kozhikode", "ai-developer-vibe-coding-course-kozhikode"],
  },
];

/** FAQs every course page answers (owner-confirmed facts only). */
const commonFaqs = (c: CourseBase): Faq[] => [
  { q: `Can I take the ${c.name} course online?`, a: `Yes. ${c.name} runs offline at HiLITE Business Park, Kozhikode and live online, with the same syllabus, projects and reviews. Online students join live classes, get help on screen share and submit work for the same feedback as classroom students.` },
  { q: "Are classes taught in Malayalam or English?", a: "Both. Concepts are explained in Malayalam and English, while technical terms, notes, code and project briefs are in English, so you are ready for interviews and client work in either language." },
  { q: "What are the batch timings?", a: "Batches run Sunday to Friday, with morning and evening batches so students and working professionals can both attend. Message us on WhatsApp for the next start date." },
  // TODO(owner): confirm certificate wording.
  { q: "Do I get a certificate?", a: `Yes, you receive a Media 360 Academy certificate for ${c.name}. Your portfolio of finished projects is what employers and clients will look at most.` },
];

export const COURSES: Course[] = BASE.map((c) => {
  const d = DETAILS[c.slug];
  if (!d) throw new Error(`academy-details.ts is missing ${c.slug}`);
  if (d.syllabus.length !== c.modules.length) throw new Error(`${c.slug}: syllabus rows must match modules`);
  return { ...c, ...d, faqs: [...(d.extraFaqs ?? []), ...c.faqs, ...commonFaqs(c)] };
});

const TONE_TINT: Record<IconTone, string> = {
  tangerine: "rgb(255 122 69 / 22%)", yellow: "rgb(255 210 63 / 34%)", sky: "rgb(90 169 255 / 22%)", lilac: "rgb(161 127 240 / 22%)",
  mint: "rgb(52 201 142 / 22%)", pink: "rgb(244 114 182 / 22%)", blue: "rgb(77 124 255 / 22%)", violet: "rgb(139 92 246 / 22%)",
  cyan: "rgb(34 211 238 / 22%)", magenta: "rgb(236 72 153 / 22%)",
};
/** Soft card/glow tint that matches a course's tile. */
export const tintOf = (icon: Course["icon"]) => (icon.brand ? BRANDS[icon.brand].tint : TONE_TINT[icon.tone ?? "violet"]);

export const getCourse = (slug: string) => COURSES.find((c) => c.slug === slug);

export const TRACKS = ["Development", "AI", "Creative"] as const;
export const LEVELS: Level[] = ["Beginner", "Intermediate", "Advanced"];

/** How the academy teaches — statements about method, not outcomes. */
export const ACADEMY_METHOD = [
  { title: "AI in every class", text: "You build with AI assistants from week one, then learn to review, test and own what they produce." },
  { title: "Agency projects, not toy apps", text: "Briefs come from the kind of work Media 360 Concept ships for clients: stores, CRMs, AI agents, ads." },
  { title: "Code review by working developers", text: "Your pull requests are reviewed by people who build software for a living." },
  { title: "Offline in Calicut or online", text: "Learn at HiLITE Business Park, Kozhikode, or join the same live course online — Sunday to Friday, morning or evening." },
];

/** Career support offered. TODO(owner): confirm each item before launch. */
export const CAREER_SUPPORT = [
  "Portfolio and GitHub review",
  "Resume and LinkedIn rewrite",
  "Mock technical and HR interviews",
  "Freelance pricing and proposal templates",
  "Job-application guidance",
];

export const ACADEMY_FAQS: Faq[] = [
  { q: "What is Media 360 Academy?", a: ACADEMY.description },
  { q: "Where are classes held?", a: "Offline classes are at HiLITE Business Park, HiLITE City, Thondayad Bypass, Kozhikode (Calicut), Kerala 673014. Every course is also available online with live sessions." },
  { q: "Which is the best course in HiLITE Business Park?", a: "Media 360 Academy runs a 3-month AI Digital Master Program and twelve AI-first coding and video editing courses inside HiLITE Business Park, Calicut. The best one depends on your goal: the AI Digital Master Program for digital marketing, websites, video and PR together, MERN stack or Python full stack for a developer career, AI developer & vibe coding for AI engineering, and AI video editing or Premiere Pro for video. See the full comparison on the best courses in HiLITE Business Park page." },
  { q: "Which course should I choose?", a: "If you want digital marketing, AI web development, video and PR in one go, take the 3-month AI Digital Master Program. Beginners in coding usually start with MERN stack, Python full stack or frontend. Developers who already code move to Golang, AI developer & vibe coding or forward deployed engineering. Creatives take AI video editing, Premiere Pro, After Effects, DaVinci Resolve or generative AI. Book a free counselling session and we will recommend one." },
  { q: "What are the batch timings and duration?", a: "Batches run Sunday to Friday, with morning and evening batches. The AI Digital Master Program takes 3 months; other courses vary. Message us on WhatsApp for the next start date and fees — we reply within 24 hours." },
  { q: "Are the courses available online?", a: "Yes. Every course runs offline at HiLITE Business Park, Kozhikode and live online, with the same syllabus, projects and reviews, so you can join from anywhere in Kerala, India or the Gulf." },
  { q: "Are classes in Malayalam or English?", a: "Both. Concepts are explained in Malayalam and English; notes, code and briefs are in English." },
  // TODO(owner): confirm certificate wording.
  { q: "Do I get a certificate?", a: "Yes, you receive a Media 360 Academy course certificate, but your portfolio of deployed projects is what employers and clients will look at." },
];

export const ACADEMY_NAV = [
  { label: "Courses", href: "/academy#courses" },
  { label: "3-Month Program", href: "/academy/digital-marketing-ai-master-program-kozhikode" },
  { label: "MERN Stack", href: "/academy/mern-stack-course-kozhikode" },
  { label: "Python Full Stack", href: "/academy/python-full-stack-course-kozhikode" },
  { label: "AI Developer", href: "/academy/ai-developer-vibe-coding-course-kozhikode" },
  { label: "Online", href: "/academy/online-courses" },
];

/**
 * "Best courses in HiLITE Business Park" — the academy's local landing page.
 * Like the agency's HiLITE pages, "best" is never self-awarded with invented
 * proof: the page gives the criteria to judge any institute, then shows how
 * the academy works against them and which course fits which student.
 */
export const BEST_COURSES = {
  slug: "best-courses-in-hilite-business-park",
  path: "/academy/best-courses-in-hilite-business-park",
  name: "Best Courses in HiLITE Business Park",
  title: "Best Courses in HiLITE Business Park, Calicut",
  description:
    "Best courses in HiLITE Business Park, Calicut: AI-first MERN, Python, Golang, AI developer, video editing and generative AI courses. Offline + online.",
  h1: "Best Courses in HiLITE Business Park, Calicut",
  answer:
    "Media 360 Academy runs AI-first coding and video editing courses inside HiLITE Business Park, HiLITE City, Thondayad Bypass, Kozhikode (Calicut). A 3-month AI Digital Master Program covers digital marketing, AI web development, video editing and PR, and twelve specialist courses cover MERN stack, Python full stack, Golang, frontend, AI web development, AI developer & vibe coding, forward deployed engineering, AI video editing, Premiere Pro, After Effects, DaVinci Resolve and generative AI, taught on real agency projects, offline at HiLITE and live online, Sunday to Friday.",
  intro: [
    "Students searching for the best course in HiLITE Business Park usually want three things: skills a company will actually hire for, a place they can reach every day, and teachers who do the work themselves. A certificate on its own rarely gets anyone hired.",
    "Media 360 Academy is the training side of Media 360 Concept, the agency in the same complex that builds websites, software, AI tools and video for clients. Course briefs come from that client work, and your projects are reviewed by the people who ship it.",
  ],
  criteria: [
    { title: "Real projects, deployed", text: "You should leave with live apps, edits and reels in a portfolio, not only class notes." },
    { title: "AI in every module", text: "Employers now expect AI-assisted work. Look for a course that teaches you to use AI and to check what it produces." },
    { title: "Teachers who practise", text: "Ask who reviews your work. Here it is developers and editors who deliver client projects every week." },
    { title: "Clear syllabus up front", text: "Every module, tool and project should be listed before you pay. Ours is on each course page." },
    { title: "Offline and online", text: "Classes at HiLITE Business Park, Calicut, with the same live course available online." },
    { title: "Honest career support", text: "Portfolio, resume and interview preparation, without invented placement percentages or salary claims." },
  ],
  picks: [
    { who: "Wants one 3-month program covering marketing, websites, video and PR", slug: "digital-marketing-ai-master-program-kozhikode" },
    { who: "Complete beginner who wants a developer job", slug: "mern-stack-course-kozhikode" },
    { who: "Beginner who prefers Python, data or AI", slug: "python-full-stack-course-kozhikode" },
    { who: "Wants to design and build websites", slug: "frontend-development-course-kozhikode" },
    { who: "Business owner or marketer building sites with AI", slug: "ai-web-development-course-kozhikode" },
    { who: "Developer moving into AI engineering", slug: "ai-developer-vibe-coding-course-kozhikode" },
    { who: "Backend developer aiming for scale", slug: "golang-backend-course-kozhikode" },
    { who: "Engineer who wants client-facing AI work", slug: "forward-deployed-engineer-course-kerala" },
    { who: "Creator who wants to edit reels, ads and YouTube", slug: "ai-video-editing-course-kozhikode" },
    { who: "Editor focused on Adobe Premiere Pro", slug: "premiere-pro-course-kozhikode" },
    { who: "Designer moving into motion graphics", slug: "after-effects-course-kozhikode" },
    { who: "Editor who wants colour grading skills", slug: "davinci-resolve-course-kozhikode" },
    { who: "Marketer making images, video and ads with AI", slug: "generative-ai-video-design-course-kozhikode" },
  ],
  faqs: [
    { q: "Which is the best course in HiLITE Business Park?", a: "It depends on your goal. For digital marketing, websites, video and PR together, take the 3-month AI Digital Master Program. For a developer career, start with the MERN stack or Python full stack course. For AI engineering, take AI developer & vibe coding. For video, take AI video editing or Premiere Pro. Media 360 Academy offers all of them at HiLITE Business Park, Calicut, and free counselling helps you choose." },
    { q: "Where exactly are the classes in HiLITE Business Park?", a: "Classes are held at Media 360 Concept, HiLITE Business Park, HiLITE City, Thondayad Bypass, Kozhikode (Calicut), Kerala 673014. Message us on WhatsApp before visiting so we can meet you." },
    { q: "Are the courses available online as well?", a: "Yes. Every course runs offline at HiLITE Business Park and online with live sessions, code reviews and the same projects." },
    { q: "Can I join without an IT background?", a: "Yes. The MERN stack, Python full stack, frontend, AI web development, AI video editing and Premiere Pro courses start from the basics. Advanced courses such as Golang and forward deployed engineering expect some coding experience." },
    { q: "What are the batch timings?", a: "Batches run Sunday to Friday, with morning and evening batches. The AI Digital Master Program takes 3 months. Message us on WhatsApp for the next start date and fees — we reply within 24 hours." },
    { q: "Which course near HiLITE Mall is best for digital marketing?", a: "Media 360 Academy's AI Digital Master Program is taught inside HiLITE Business Park, next to HiLITE Mall on Thondayad Bypass, Kozhikode. It covers SEO, Google Business Profile, Meta and Google Ads, AI web development, Premiere Pro video and PR in 3 months." },
  ] as Faq[],
};

/**
 * Online courses hub. Every course already runs live online; this page is the
 * single place that answers "online course" searches without city doorway pages.
 */
export const ONLINE_COURSES = {
  slug: "online-courses",
  path: "/academy/online-courses",
  name: "Online Courses",
  title: "Live Online AI, Coding & Video Editing Courses, Kerala",
  description:
    "Live online courses from Media 360 Academy, HiLITE Calicut: digital marketing, MERN, Python, AI developer, Premiere Pro and more. Malayalam + English.",
  h1: "Live Online Courses from HiLITE Business Park, Calicut",
  answer:
    "Every Media 360 Academy course runs live online as well as in the classroom at HiLITE Business Park, Kozhikode. Online students join the same live classes, follow the same syllabus, build the same projects and get the same reviews, Sunday to Friday in morning or evening batches, taught in Malayalam and English.",
  how: [
    { title: "Live, not recorded", text: "You attend real classes with a teacher who can see your screen and answer questions as you work." },
    { title: "Same projects and reviews", text: "Online students build the same portfolio projects and get the same code, edit and campaign reviews." },
    { title: "Malayalam and English", text: "Concepts explained in both; notes, code and briefs in English." },
    { title: "Morning or evening batches", text: "Sunday to Friday, so students, working professionals and Gulf learners can fit it in." },
    { title: "Visit any time", text: "Online students are welcome at HiLITE Business Park, Kozhikode for help sessions and events." },
  ],
  faqs: [
    { q: "Are Media 360 Academy courses available online?", a: "Yes. All courses, including the 3-month AI Digital Master Program, run live online with the same syllabus, projects and reviews as the classroom at HiLITE Business Park, Kozhikode." },
    { q: "Can I join from the Gulf or another state?", a: "Yes. Classes are live online, Sunday to Friday, with morning and evening batches. Message us on WhatsApp and we will suggest the batch that fits your time zone." },
    { q: "Are online classes recorded?", a: "Classes are live so you can ask questions and get help on your own screen. Ask during counselling how missed classes are covered for your batch." },
    // TODO(owner): confirm certificate wording.
    { q: "Is the online certificate the same?", a: "Yes. Online and classroom students receive the same Media 360 Academy course certificate." },
  ] as Faq[],
};
