import type { Faq } from "./schema";

/**
 * Long-form, per-course content for the course pages: an overview, a syllabus
 * table (aligned 1:1 with each course's `modules`), a career table and any
 * extra course-specific FAQs. Merged into COURSES in academy.ts.
 *
 * Same copy rules as academy.ts: no salaries, placement rates, fees or
 * invented testimonials. "Where you'd work" names kinds of employers only.
 */
export type SyllabusRow = { tools: string; build: string; when?: string };
export type CareerRow = { role: string; does: string; skills: string; where: string };
export type CourseDetails = {
  /** One line: who should pick this course (comparison tables + best-courses page). */
  bestFor: string;
  overview: string[];
  syllabus: SyllabusRow[];
  careerTable: CareerRow[];
  extraFaqs?: Faq[];
};

export const DETAILS: Record<string, CourseDetails> = {
  "digital-marketing-ai-master-program-kozhikode": {
    bestFor: "Wants one 3-month program covering marketing, websites, video and PR",
    overview: [
      "Most businesses in Kozhikode do not hire a separate SEO expert, ads specialist, web developer, video editor and PR person. They hire one or two people who can do a bit of everything and use AI to move fast. The AI Digital Master Program is built for that job: in three months you learn digital marketing, AI web development, video editing in Premiere Pro, and PR and personal branding, and you practise them together on one brand.",
      "The program is run by Media 360 Concept, the agency at HiLITE Business Park that does this work for clients every week. You work from real briefs: set up a Google Business Profile, plan and launch ads, build a landing page with AI, cut reels that hold attention, write a press release and pitch it, then report results the way an agency reports to a client.",
      "AI is part of every week. You use ChatGPT, Claude and other AI tools for research, copy, code, captions and video drafts, and you learn when the AI is wrong, off-brand or unsafe to publish. You finish with a portfolio that shows a complete campaign rather than a stack of separate exercises.",
      "Classes run Sunday to Friday at HiLITE Business Park, Kozhikode, with morning and evening batches, and the same program is available live online for students anywhere in Kerala, India or the Gulf.",
    ],
    syllabus: [
      { when: "Weeks 1–2", tools: "Google Search Console, Google Business Profile, ChatGPT, Claude", build: "SEO audit and Google Business Profile setup for a local business" },
      { when: "Weeks 3–4", tools: "Meta Ads Manager, Google Ads, GA4, Google Tag Manager", build: "A campaign plan with conversion tracking working end to end" },
      { when: "Weeks 5–6", tools: "AI coding assistants, Next.js or WordPress, Vercel, schema markup", build: "A fast landing page live on its own domain" },
      { when: "Weeks 7–8", tools: "Adobe Premiere Pro, CapCut, AI caption and voice tools", build: "A reel series and a 30-second ad" },
      { when: "Weeks 9–10", tools: "Press release templates, LinkedIn, Google reviews, AI writing tools", build: "A press kit and a 30-day personal brand plan" },
      { when: "Weeks 11–12", tools: "Looker Studio, GA4 and everything above", build: "A complete launch campaign and your portfolio" },
    ],
    careerTable: [
      { role: "Digital Marketing Executive", does: "Runs SEO, social media and ads for a business or agency clients", skills: "SEO, Meta and Google Ads, GA4, content", where: "Agencies, retail and healthcare brands, startups" },
      { role: "Performance Marketer", does: "Plans, launches and optimises paid campaigns against leads and sales", skills: "Google Ads, Meta Ads, tracking, landing pages", where: "Agencies, e-commerce, education and real estate firms" },
      { role: "Social Media & Video Marketer", does: "Plans content and edits reels and ads that bring enquiries", skills: "Premiere Pro, AI video, copywriting, analytics", where: "Brands, creators, media houses, agencies" },
      { role: "PR & Content Executive", does: "Writes press releases, handles media outreach, reviews and brand voice", skills: "PR writing, LinkedIn, reputation management, AI writing", where: "Agencies, hospitals, colleges, corporate teams" },
      { role: "Freelance Digital Marketer", does: "Sells websites, ads and content to local businesses and Gulf clients", skills: "All four tracks plus proposals and reporting", where: "Self-employed or remote, India and the Gulf" },
    ],
    extraFaqs: [
      { q: "What does the AI Digital Master Program cover?", a: "Four skills in one 3-month program: digital marketing (SEO, Google Business Profile, Meta and Google Ads, analytics), AI web development (landing pages and websites built with AI), video editing in Premiere Pro with AI tools, and PR and personal branding. The final two weeks combine all four into one launch campaign." },
      { q: "How long is the program?", a: "Three months, run as twelve weeks. Classes are Sunday to Friday with morning and evening batches, offline at HiLITE Business Park, Kozhikode or live online." },
      { q: "Is this program right for a complete beginner?", a: "Yes. It starts from the basics of each skill and needs no coding or design experience. Students who want to go deeper into one area can move on to a specialist course such as AI web development or Premiere Pro afterwards." },
    ],
  },

  "mern-stack-course-kozhikode": {
    bestFor: "Complete beginner who wants a developer job",
    overview: [
      "MERN stands for MongoDB, Express, React and Node.js. All four run on JavaScript, so you learn one language and use it for the database queries, the server and the user interface. That is why MERN is a common first stack for people starting a developer career in Kerala, and why so many startups and agencies hire for it.",
      "This course takes you from HTML and JavaScript basics to deploying full stack apps. You write TypeScript from the start, keep your code on GitHub, and get pull-request reviews from developers at Media 360 Concept who build e-commerce stores, CRMs and dashboards for clients from HiLITE Business Park.",
      "AI assistants are part of the workflow from week one. You use them to scaffold components, explain errors and write tests, and you are marked on whether you can read, debug and defend the code they produce. By the end you should be able to take a client-style brief, plan the data model and API, build the React front end and put the whole thing online.",
    ],
    syllabus: [
      { tools: "HTML, CSS, JavaScript, TypeScript, Git", build: "A responsive portfolio page under version control" },
      { tools: "React, React Router, Tailwind CSS", build: "A product catalogue UI with search and filters" },
      { tools: "Node.js, Express, JWT", build: "A REST API with login, roles and validation" },
      { tools: "MongoDB, Mongoose, payment gateway", build: "Cart, orders and file uploads backed by MongoDB" },
      { tools: "AI coding assistants, LLM APIs", build: "An AI feature added to your app, with tests" },
      { tools: "Docker, GitHub Actions, cloud hosting", build: "Your full stack app deployed with CI" },
    ],
    careerTable: [
      { role: "MERN Stack Developer", does: "Builds and maintains full stack JavaScript apps", skills: "React, Node.js, Express, MongoDB", where: "Startups, IT service companies, agencies" },
      { role: "Full Stack Developer", does: "Owns features from database to UI", skills: "TypeScript, REST APIs, deployment", where: "Product companies, remote teams, Gulf firms" },
      { role: "React Developer", does: "Builds interactive front ends from designs", skills: "React, state management, Tailwind", where: "Agencies, SaaS companies" },
      { role: "Node.js Backend Developer", does: "Designs APIs, auth and integrations", skills: "Node.js, Express, MongoDB, security", where: "Product startups, fintech and e-commerce teams" },
    ],
  },

  "python-full-stack-course-kozhikode": {
    bestFor: "Beginner who prefers Python, data or AI",
    overview: [
      "Python is the language behind most AI, data and automation work, and it is also a solid choice for web back ends through Django and FastAPI. A Python full stack developer can build the web app, the API and the AI feature inside it, which is a combination more companies now ask for.",
      "The course starts with Python itself — clean code, object-oriented design and testing — before moving to Django for full web apps and FastAPI for fast, typed services. You learn PostgreSQL properly, add a React front end, and deploy everything with Docker.",
      "The last module is Python for AI: calling LLM APIs, building retrieval-augmented generation over your own documents, and writing simple agents that use tools. Projects mirror work Media 360 Concept builds for clients at HiLITE Business Park, such as learning platforms, document assistants and reporting automations, so your portfolio shows business problems solved, not tutorial clones.",
    ],
    syllabus: [
      { tools: "Python, pytest, VS Code", build: "Automation scripts with tests" },
      { tools: "Django, Django REST Framework", build: "A course-and-student web app with an admin panel" },
      { tools: "FastAPI, Pydantic, Celery", build: "An async API with background jobs" },
      { tools: "PostgreSQL, SQL, Redis", build: "A tuned schema with caching for reports" },
      { tools: "React, Docker", build: "A React front end connected and deployed" },
      { tools: "LLM APIs, embeddings, vector search", build: "A PDF question-answering assistant" },
    ],
    careerTable: [
      { role: "Python Full Stack Developer", does: "Builds web apps and APIs end to end", skills: "Python, Django, React, PostgreSQL", where: "IT service companies, startups" },
      { role: "Django Developer", does: "Develops and maintains Django products", skills: "Django, DRF, SQL", where: "SaaS, edtech and healthtech firms" },
      { role: "Backend Engineer", does: "Designs services, data models and integrations", skills: "FastAPI, PostgreSQL, Redis, Docker", where: "Product companies, remote teams" },
      { role: "AI Application Developer", does: "Adds LLM features and automations to products", skills: "LLM APIs, RAG, Python", where: "AI startups, agencies, Gulf enterprises" },
    ],
  },

  "golang-backend-course-kozhikode": {
    bestFor: "Backend developer aiming for scale",
    overview: [
      "Go was designed at Google for software that has to be fast, simple to deploy and easy for teams to maintain. It now powers much of the cloud — Docker and Kubernetes are written in Go — and it is a common choice for payment systems, real-time services and APIs that handle heavy traffic.",
      "This is an advanced course for people who can already program. You learn idiomatic Go, then concurrency with goroutines and channels, REST and gRPC APIs, PostgreSQL and Redis, and how to split a system into services you can monitor and deploy. Every project is reviewed for correctness under load, not just whether it runs.",
      "AI coding assistants help you move faster through boilerplate and tests, and code review by working engineers at Media 360 Concept keeps the design honest. You finish with a small production-style system — APIs, a real-time service and a deployed microservice setup — that shows backend depth to product companies and platform teams.",
    ],
    syllabus: [
      { tools: "Go, go test, benchmarks", build: "A CLI tool with full test coverage" },
      { tools: "Goroutines, channels, context", build: "A concurrent worker pool for jobs" },
      { tools: "Gin or Fiber, gRPC, protobuf", build: "A REST and gRPC API with auth middleware" },
      { tools: "PostgreSQL, sqlc or GORM, Redis", build: "A payments-style ledger with caching" },
      { tools: "Message queues, OpenTelemetry", build: "Services that talk and can be traced" },
      { tools: "Docker, Kubernetes basics, CI/CD", build: "A deployed, monitored microservice system" },
    ],
    careerTable: [
      { role: "Golang Developer", does: "Writes high-performance APIs and services in Go", skills: "Go, gRPC, PostgreSQL", where: "Fintech, product companies, remote teams" },
      { role: "Backend Engineer", does: "Designs scalable back ends and data models", skills: "Go, Redis, queues, testing", where: "SaaS and e-commerce companies" },
      { role: "Platform Engineer", does: "Builds internal tools, pipelines and infrastructure", skills: "Go, Docker, Kubernetes, CI/CD", where: "Larger engineering teams, cloud companies" },
      { role: "Cloud / DevOps Engineer", does: "Deploys, monitors and scales services", skills: "Containers, observability, cloud", where: "IT service firms, Gulf enterprises" },
    ],
  },

  "frontend-development-course-kozhikode": {
    bestFor: "Wants to design and build websites",
    overview: [
      "Frontend developers build everything a visitor sees and touches: layouts, forms, dashboards and the speed at which a page loads. Good frontend work decides whether a site ranks on Google, converts visitors and works for people using phones, screen readers or slow connections.",
      "This course covers semantic HTML, modern CSS and Tailwind, JavaScript and TypeScript, then React and Next.js. You learn to read a Figma file and turn it into a component system, add SEO metadata and schema, and measure Core Web Vitals with Lighthouse — the same checks Media 360 Concept runs on client websites built at HiLITE Business Park.",
      "AI tools can now draft a UI in seconds. The course uses them, then teaches the part they get wrong: accessibility, responsiveness, performance and matching the design exactly. You leave with a landing page, a dashboard and a multi-page Next.js site that you can show to agencies and product teams.",
    ],
    syllabus: [
      { tools: "HTML, CSS, Flexbox, Grid, Tailwind CSS", build: "An accessible, responsive landing page" },
      { tools: "JavaScript, TypeScript, Fetch API", build: "An interactive widget that calls a live API" },
      { tools: "React, hooks, form libraries", build: "A multi-step form with validation" },
      { tools: "Next.js, metadata API, schema", build: "An SEO-ready multi-page site" },
      { tools: "Figma, design tokens", build: "A component library from a real Figma file" },
      { tools: "AI UI tools, Lighthouse, testing library", build: "A 95+ Lighthouse page with tested components" },
    ],
    careerTable: [
      { role: "Frontend Developer", does: "Turns designs into fast, accessible interfaces", skills: "HTML, CSS, JavaScript, React", where: "Agencies, IT service companies" },
      { role: "React Developer", does: "Builds app interfaces and component libraries", skills: "React, TypeScript, state management", where: "SaaS and product startups" },
      { role: "Next.js Developer", does: "Builds SEO-ready marketing and content sites", skills: "Next.js, SEO, performance", where: "Agencies, media and e-commerce brands" },
      { role: "UI Engineer", does: "Owns design systems and UI quality", skills: "Figma-to-code, accessibility, testing", where: "Product companies, remote teams" },
    ],
  },

  "ai-web-development-course-kozhikode": {
    bestFor: "Business owner or marketer building sites with AI",
    overview: [
      "AI web development means using AI coding assistants and AI app builders to plan, write and launch websites and web apps much faster than hand-coding everything. It is the quickest route from no experience to a paid website project, as long as you can check and fix what the AI produces.",
      "You learn how domains, hosting and DNS work, how to write specs and prompts that produce good code, and how to build with Next.js, a headless CMS and Tailwind. A full module covers technical SEO, schema and writing for AI answers in ChatGPT, Claude, Perplexity and Google's AI Overviews, because a website nobody finds earns nothing.",
      "Media 360 Concept builds client websites from HiLITE Business Park, and the last module teaches the business side of that work: scoping, pricing, handover and maintenance plans. You leave with a live site for a real local business, an AI chatbot site, and a portfolio with a proposal template to win your first paid project.",
    ],
    syllabus: [
      { tools: "DNS, hosting, browser dev tools", build: "Your own domain connected and live" },
      { tools: "AI coding assistants, Git", build: "A site built from a written spec and prompts" },
      { tools: "Next.js, Tailwind CSS, headless CMS", build: "A client-editable business website" },
      { tools: "Search Console, schema markup, llms.txt", build: "An SEO and AI-search checklist applied to your site" },
      { tools: "Auth, database, AI chatbot APIs", build: "A web app with login and an AI assistant" },
      { tools: "Proposal templates, Vercel, analytics", build: "A priced proposal and handover pack" },
    ],
    careerTable: [
      { role: "Web Developer", does: "Builds and maintains business websites", skills: "Next.js, AI coding tools, CMS", where: "Agencies, small businesses" },
      { role: "Freelance Web Designer", does: "Sells, builds and maintains sites for clients", skills: "AI builders, SEO, proposals", where: "Self-employed, India and Gulf clients" },
      { role: "WordPress / Next.js Developer", does: "Delivers CMS-driven sites and landing pages", skills: "CMS, performance, integrations", where: "Marketing agencies, media firms" },
      { role: "Website & SEO Executive", does: "Keeps a company's site fast, updated and ranking", skills: "Technical SEO, analytics, content", where: "In-house marketing teams" },
    ],
  },

  "ai-developer-vibe-coding-course-kozhikode": {
    bestFor: "Developer moving into AI engineering",
    overview: [
      "An AI developer builds software on top of large language models such as Claude and GPT: chatbots that answer from company documents, agents that call tools and APIs, and features that summarise, classify or draft. Vibe coding is the newer habit of describing what you want and letting AI coding agents write most of the code.",
      "This course teaches both, with the engineering that makes them safe to ship. You learn how models work, prompt design, retrieval-augmented generation, tool calling and the Model Context Protocol, then build streaming interfaces with auth, billing and rate limits. A full module covers evals, prompt injection and cost control.",
      "Projects come from the kind of AI work Media 360 Concept delivers at HiLITE Business Park — knowledge assistants, WhatsApp agents and SaaS MVPs. You vibe code each one quickly, then add specs, tests and reviews so the result can survive real users. It suits developers who already know basic Python or JavaScript.",
    ],
    syllabus: [
      { tools: "Claude and GPT APIs, tokenizers", build: "A prompt playground with cost tracking" },
      { tools: "AI coding agents, test runners", build: "A feature vibe-coded, then tested and refactored" },
      { tools: "Embeddings, vector database", build: "A document chatbot that cites its sources" },
      { tools: "Tool calling, MCP servers", build: "An agent that books appointments through tools" },
      { tools: "Streaming UI, auth, billing", build: "A deployed AI SaaS MVP" },
      { tools: "Eval harness, monitoring", build: "An eval suite and safety review for your app" },
    ],
    careerTable: [
      { role: "AI Engineer", does: "Designs and ships LLM-powered features", skills: "LLM APIs, RAG, evals", where: "AI startups, product companies" },
      { role: "LLM Application Developer", does: "Builds chatbots, assistants and agents", skills: "Prompting, tool calling, MCP", where: "Agencies, SaaS firms, remote teams" },
      { role: "AI Automation Specialist", does: "Automates business workflows with AI agents", skills: "Agents, integrations, WhatsApp APIs", where: "SMEs, Gulf enterprises, consultancies" },
      { role: "Full Stack AI Developer", does: "Owns an AI product from UI to model calls", skills: "TypeScript or Python, streaming, auth", where: "Startups, founders' teams" },
    ],
  },

  "forward-deployed-engineer-course-kerala": {
    bestFor: "Engineer who wants client-facing AI work",
    overview: [
      "Forward deployed engineers sit between a product and its customers. They join customer teams, learn how the business really works, connect the product to its data and systems, and adapt it until it delivers. AI companies hire for the role because every customer's data, tools and workflows are different.",
      "The course is part engineering, part consulting. You practise discovery calls and scoping, then integration work — REST, webhooks, CRMs, ERPs and messy spreadsheets — followed by deploying RAG and agents on business data with human review built in. Production skills such as monitoring, incidents and access control are covered too.",
      "Media 360 Concept runs client deployments from HiLITE Business Park, and the course uses that work as its model: you run a project end to end from discovery to demo and handover. It is an advanced course for people who already code in Python or JavaScript and enjoy solving business problems with customers.",
    ],
    syllabus: [
      { tools: "Discovery templates, estimation sheets", build: "A scoped proposal from a mock discovery call" },
      { tools: "REST, webhooks, SQL, Python", build: "A CRM-to-spreadsheet sync with data cleaning" },
      { tools: "RAG, agents, eval sets", build: "An AI workflow with human-in-the-loop approval" },
      { tools: "Cloud hosting, logging, access control", build: "A monitored production deployment" },
      { tools: "Slides, docs, change logs", build: "A client demo and handover document" },
    ],
    careerTable: [
      { role: "Forward Deployed Engineer", does: "Deploys and adapts a product inside customer teams", skills: "Integrations, AI deployment, communication", where: "AI and SaaS companies" },
      { role: "Solutions Engineer", does: "Designs technical solutions during sales and onboarding", skills: "Demos, APIs, scoping", where: "Software vendors, startups" },
      { role: "AI Implementation Engineer", does: "Rolls out AI agents and RAG for businesses", skills: "LLMs, data pipelines, evals", where: "Consultancies, agencies, Gulf enterprises" },
      { role: "Technical Consultant", does: "Advises and delivers software projects for clients", skills: "Requirements, architecture, delivery", where: "IT service and consulting firms" },
    ],
  },

  "ai-video-editing-course-kozhikode": {
    bestFor: "Creator who wants to edit reels, ads and YouTube",
    overview: [
      "Brands in Kerala now publish more video than ever — reels, shorts, YouTube episodes and ads — and most of it needs fast, clean editing. AI video editing combines the professional editors studios use with AI tools that handle captions, voice, translation, clean-up and generated b-roll in minutes.",
      "This course covers the three main professional tools: Premiere Pro for editing, After Effects for motion graphics and DaVinci Resolve for colour. You learn story and pacing first, then short-form retention editing, motion graphics, colour grading and the AI tools that speed each step up.",
      "You edit alongside Media 360 Concept's production team at HiLITE Business Park, working from client-style briefs with revisions and delivery specs. By the end you have a reel series, a product ad and a showreel to send to studios, agencies and brands.",
    ],
    syllabus: [
      { tools: "Premiere Pro, audio clean-up", build: "A short story edit with clean dialogue" },
      { tools: "Premiere Pro, CapCut, caption templates", build: "Three reels cut for hooks and retention" },
      { tools: "After Effects", build: "Animated titles and a logo sting" },
      { tools: "DaVinci Resolve", build: "A colour-matched, graded sequence" },
      { tools: "AI captions, voice, generative video", build: "A translated, voiced version of one edit" },
      { tools: "Review tools, export presets", build: "A delivered client edit and your showreel" },
    ],
    careerTable: [
      { role: "Video Editor", does: "Edits reels, ads and long-form video", skills: "Premiere Pro, pacing, audio", where: "Agencies, media houses, brands" },
      { role: "Motion Graphics Artist", does: "Animates titles, logos and explainers", skills: "After Effects, typography", where: "Studios, agencies" },
      { role: "Colourist", does: "Corrects and grades footage to a look", skills: "DaVinci Resolve, colour theory", where: "Production houses, wedding studios" },
      { role: "Social Video Producer", does: "Plans and produces social video content", skills: "Short-form editing, AI tools, trends", where: "Brands, creators, remote clients" },
    ],
  },

  "premiere-pro-course-kozhikode": {
    bestFor: "Editor focused on Adobe Premiere Pro",
    overview: [
      "Adobe Premiere Pro is the editor most agencies, news teams and YouTube channels use. It works with After Effects and Photoshop, and recent versions add AI features such as Speech to Text, text-based editing and Enhance Speech that cut hours from every project.",
      "This course goes deep on Premiere Pro alone. You learn a fast, keyboard-first workflow, how to build a story from raw footage, how to clean and mix audio, colour correct with Lumetri, design titles and captions, and export correctly for each platform.",
      "Every assignment is a client-style brief from Media 360 Concept's video work at HiLITE Business Park, with review rounds and delivery specs. You finish with a reel series, a YouTube episode and a brand ad — a portfolio that shows you can work to a brief, not just apply effects.",
    ],
    syllabus: [
      { tools: "Premiere Pro, project panels, shortcuts", build: "An organised project and first rough cut" },
      { tools: "Premiere Pro timeline, J/L cuts", build: "An interview edited into a clear story" },
      { tools: "Enhance Speech, Essential Sound", build: "A clean, mixed dialogue track" },
      { tools: "Lumetri Color, Essential Graphics", build: "A colour-corrected edit with titles" },
      { tools: "Speech to Text, AI captions and voice", build: "A text-based edit with translated captions" },
      { tools: "Export presets, review links", build: "A delivered brand ad and showreel" },
    ],
    careerTable: [
      { role: "Video Editor", does: "Edits client videos from rough cut to delivery", skills: "Premiere Pro, story, audio", where: "Agencies, production houses" },
      { role: "YouTube Editor", does: "Edits long-form episodes with chapters and captions", skills: "Pacing, captions, thumbnails brief", where: "Creators, media channels, remote" },
      { role: "Social Media Video Editor", does: "Cuts reels and shorts for brands", skills: "Short-form editing, trends", where: "Brands, agencies" },
      { role: "Post-Production Assistant", does: "Organises media, syncs and prepares edits", skills: "Media management, Premiere Pro", where: "Studios, TV and film teams" },
    ],
  },

  "after-effects-course-kozhikode": {
    bestFor: "Designer moving into motion graphics",
    overview: [
      "Adobe After Effects is the standard tool for motion graphics: animated logos, kinetic typography, explainers, lower thirds and the small animated touches that make social video look professional. Agencies and brands look for editors who can add motion, and designers who can make their work move.",
      "The course starts with the basics of animation — keyframes, easing, timing and the graph editor — then moves to text animators, shape layers, animating Illustrator artwork, masks, tracking and compositing. AI tools for rotoscoping, object removal and generated textures are taught alongside, with care for client rights.",
      "Briefs come from Media 360 Concept's creative work at HiLITE Business Park. You produce a logo animation, an animated explainer and a motion showreel, and you learn to build templates and deliver renders the way studios expect.",
    ],
    syllabus: [
      { tools: "After Effects, graph editor", build: "A bouncing-shapes animation with clean easing" },
      { tools: "Text animators", build: "A kinetic typography quote video" },
      { tools: "Shape layers, Illustrator", build: "An animated logo reveal" },
      { tools: "Masks, tracking, Roto Brush", build: "A tracked title composited into footage" },
      { tools: "AI texture and roto tools", build: "A scene cleaned and extended with AI" },
      { tools: "Essential Graphics, Media Encoder", build: "A reusable template and motion showreel" },
    ],
    careerTable: [
      { role: "Motion Graphics Designer", does: "Designs and animates graphics for video", skills: "After Effects, typography, design", where: "Agencies, studios, brands" },
      { role: "After Effects Animator", does: "Produces explainers and animated ads", skills: "Keyframing, shape animation", where: "Production houses, remote clients" },
      { role: "Video Editor & Motion Designer", does: "Edits and adds motion to the same project", skills: "Premiere Pro + After Effects", where: "Media teams, agencies" },
      { role: "Social Media Content Designer", does: "Creates animated posts and story graphics", skills: "Motion templates, branding", where: "Brands, marketing teams" },
    ],
  },

  "davinci-resolve-course-kozhikode": {
    bestFor: "Editor who wants colour grading skills",
    overview: [
      "DaVinci Resolve is used for colour grading on films, ads and music videos, and it is also a full editor with its own audio suite. It has a free version that covers most work, which makes it a practical choice for students, freelancers and wedding filmmakers.",
      "This course covers the cut and edit pages, then goes deep on colour: reading scopes, exposure and white balance, skin tones, matching shots and node-based grading with power windows and tracking. You also learn Fairlight audio and the Neural Engine AI tools such as Magic Mask, voice isolation and Smart Reframe.",
      "Projects are graded and reviewed by Media 360 Concept's production team at HiLITE Business Park. You leave with a graded short film, an event highlight film and a before-and-after reel that shows your colour range to studios and clients.",
    ],
    syllabus: [
      { tools: "DaVinci Resolve cut and edit pages", build: "An edited sequence with organised media" },
      { tools: "Scopes, primary wheels", build: "A corrected, balanced scene" },
      { tools: "Nodes, power windows, LUTs", build: "A graded short film with one consistent look" },
      { tools: "Fairlight, voice isolation", build: "A clean, mixed audio track" },
      { tools: "Magic Mask, Smart Reframe, Speed Warp", build: "AI-assisted fixes on a highlight film" },
      { tools: "Deliver page, review exports", build: "A before-and-after colour showreel" },
    ],
    careerTable: [
      { role: "Colourist", does: "Grades films, ads and music videos", skills: "Resolve colour, scopes, nodes", where: "Production houses, studios" },
      { role: "Video Editor", does: "Edits and finishes projects in one tool", skills: "Resolve edit, audio, delivery", where: "Agencies, media teams" },
      { role: "Post-Production Editor", does: "Handles conform, colour and final delivery", skills: "Resolve, delivery specs", where: "TV, film and ad productions" },
      { role: "Wedding & Event Filmmaker", does: "Edits and grades event films", skills: "Story, colour, audio", where: "Wedding studios, self-employed" },
    ],
  },

  "generative-ai-video-design-course-kozhikode": {
    bestFor: "Marketer making images, video and ads with AI",
    overview: [
      "Generative AI tools can now make product photos, illustrations, video clips, voiceovers and music from a prompt. Used well, they let a small team produce creatives that once needed a studio. Used badly, they produce off-brand, inconsistent or unlicensed work that clients cannot publish.",
      "This course teaches the full workflow: choosing the right tool for each job, prompting for style and consistency, planning shots for AI video, generating voice and sound, and finishing everything in Photoshop and Premiere Pro so it is ready for social media and ads. A full module covers copyright, licences, disclosure and client approvals.",
      "Briefs come from Media 360 Concept's creative work for brands at HiLITE Business Park. You produce an AI ad campaign, a narrated explainer and a month of social content — work that shows clients you can deliver with AI and still meet a brand standard.",
    ],
    syllabus: [
      { tools: "ChatGPT, Claude, AI tool comparisons", build: "A tool plan and prompt library for one brand" },
      { tools: "AI image generators, Adobe Firefly", build: "A consistent set of brand product visuals" },
      { tools: "Text- and image-to-video tools", build: "A short AI video with consistent scenes" },
      { tools: "AI voice and music tools", build: "A voiced, scored explainer" },
      { tools: "Photoshop, Premiere Pro", build: "Finished ads in every social format" },
      { tools: "Licence checklists, approval templates", build: "A rights and disclosure checklist for clients" },
    ],
    careerTable: [
      { role: "AI Content Creator", does: "Produces social content with AI tools", skills: "Prompting, editing, brand voice", where: "Brands, creators, agencies" },
      { role: "Generative AI Designer", does: "Creates AI visuals that meet brand rules", skills: "AI image tools, Photoshop", where: "Agencies, e-commerce brands" },
      { role: "Social Media Creative", does: "Designs and animates posts and ads", skills: "AI design, short video", where: "Marketing teams, agencies" },
      { role: "AI Video Producer", does: "Plans and produces AI-assisted video", skills: "AI video, voice, Premiere Pro", where: "Media teams, remote clients" },
    ],
  },
};
