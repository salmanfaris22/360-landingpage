import type { SeoPage } from "../seo-pages";

/**
 * Digital marketing cluster. Hub: /digital-marketing-kozhikode (in seo-pages.ts).
 * One primary keyword per page; Google Ads + Meta Ads live on the
 * performance page (same buyer, same decision) instead of two thin pages.
 */
export const MARKETING_PAGES: SeoPage[] = [
  {
    slug: "seo-services-kozhikode",
    cluster: "marketing",
    keyword: "SEO Services in Kozhikode",
    navLabel: "SEO Services Kozhikode",
    title: "SEO Services Company in Kozhikode (Calicut)",
    description:
      "SEO company in Kozhikode — local SEO, Google Business Profile, technical fixes, content and AI-search readiness, reported clearly. Free SEO audit.",
    eyebrow: "SEO Services · Kozhikode (Calicut), Kerala",
    h1: "SEO Services in Kozhikode for Businesses That Want to Be Found",
    answer:
      "Media 360 Concept is an SEO services company at HiLITE Business Park, Kozhikode (Calicut). We handle local SEO and Google Business Profile, technical SEO, content and structured data so Kerala businesses appear in Google results, the Map Pack and AI answers — with monthly reports on rankings, traffic and enquiries.",
    intro: [
      "Search engine optimisation is the work of making your website the answer Google — and increasingly ChatGPT, Gemini and Perplexity — gives when a customer asks for what you sell. For most Kerala businesses that means three things done well: a technically clean site, pages that genuinely answer customer questions, and a local presence Google trusts.",
      "We are a small, senior team, so the people who audit your site are the people who fix it. No outsourced link packages, no ranking guarantees — just the work that compounds.",
    ],
    sections: [
      {
        heading: "Local SEO: the Map Pack and \"near me\" searches",
        body: [
          "When someone searches \"dentist in Calicut\" or \"interior designer near me\", Google shows three businesses on a map before any website. Getting into that block depends on a complete Google Business Profile, consistent name, address and phone details across the web, genuine reviews arriving steadily, and a website that confirms where you are and what you do.",
          "We set up or repair your profile, choose the right categories, publish weekly posts, clean up directory listings (Justdial, Sulekha, IndiaMART and the rest), and give your team a simple WhatsApp-based process for asking happy customers for reviews.",
        ],
      },
      {
        heading: "Technical SEO: what Google can actually read",
        body: [
          "Many Kerala business websites look fine to people and nearly blank to search engines — content loaded by JavaScript, duplicate pages, missing canonicals, slow mobile load times, or a robots.txt that blocks the wrong thing. A technical audit finds these problems; fixing them is often the fastest ranking gain available.",
        ],
        bullets: [
          { title: "Crawl & index", text: "robots.txt, XML sitemaps, canonical tags, redirects, status codes and Search Console coverage." },
          { title: "Speed & Core Web Vitals", text: "LCP, INP and CLS on real mobile networks — images, fonts, scripts and hosting." },
          { title: "Structured data", text: "Organization, LocalBusiness, Service, FAQ and Breadcrumb schema that matches the visible page." },
          { title: "Rendering", text: "Making sure important text exists in the HTML, not only after JavaScript runs." },
        ],
      },
      {
        heading: "Content SEO and AI search visibility",
        body: [
          "Rankings come from pages that answer real questions better than the competition. We research what your customers search and ask — including the longer, conversational questions people type into AI assistants — then plan service pages, cost guides and FAQs with direct answers, comparison tables and clear facts about your business.",
          "The same structure that wins featured snippets also makes your content easier for AI systems to quote and cite. We also check that AI crawlers are allowed to read your site and that your business is described identically everywhere it appears online.",
        ],
      },
    ],
    steps: [
      { title: "Audit", text: "Technical crawl, Search Console and Analytics review, Google Business Profile check and competitor gap analysis." },
      { title: "Plan", text: "Keyword-to-page map with one primary keyword per page, and a prioritised fix list." },
      { title: "Fix", text: "Technical fixes, metadata, structured data, internal links and page speed." },
      { title: "Publish", text: "New and improved service pages, FAQs and guides written for your customers." },
      { title: "Build authority", text: "Directory listings, local links, reviews and digital PR — never bought links." },
      { title: "Report", text: "Monthly report on rankings, traffic, enquiries and what we do next." },
    ],
    table: {
      caption: "SEO compared with paid search ads",
      head: ["", "SEO", "Google Ads"],
      rows: [
        ["You pay for", "Work on your site and content", "Every click"],
        ["Time to first results", "Usually 3–6 months", "Days"],
        ["When spending stops", "Rankings largely remain", "Traffic stops"],
        ["Best for", "Long-term, compounding enquiries", "Immediate demand, launches, testing"],
      ],
    },
    deliverables: [
      "Technical SEO audit",
      "Local SEO & Google Business Profile",
      "Keyword & page mapping",
      "On-page optimisation",
      "Schema markup",
      "Content & FAQ writing",
      "Citation clean-up",
      "Monthly reporting",
    ],
    faqs: [
      {
        q: "How long does SEO take to show results?",
        a: "Most businesses see measurable movement in three to six months, and stronger results in six to twelve, depending on competition and how much needs fixing. Local Map Pack visibility often improves sooner once the Google Business Profile is complete. Be wary of anyone promising page one within weeks.",
      },
      {
        q: "How much do SEO services cost in Kozhikode?",
        a: "SEO pricing depends on the size of your site, how competitive your keywords are and whether you need content written. We quote a fixed monthly fee after a free audit, itemised so you can see what each part covers. There are no long lock-in contracts.",
      },
      {
        q: "Do you guarantee first-page rankings?",
        a: "No. Nobody controls Google's results, and guarantees usually signal shortcuts that get sites penalised. We commit to the work — fixes, content, local signals and authority — and report honestly on rankings, traffic and the enquiries it produces.",
      },
      {
        q: "What is the difference between local SEO and regular SEO?",
        a: "Local SEO targets searches with a place in them, such as \"in Calicut\" or \"near me\", and focuses on Google Business Profile, reviews and address consistency. Regular SEO targets wider searches through website content and authority. Most Kerala businesses need both, weighted towards local.",
      },
      {
        q: "Can SEO help my business appear in ChatGPT or Google AI Overviews?",
        a: "It can improve your chances, not guarantee them. AI answers draw on pages that are crawlable, clearly structured and trusted elsewhere on the web. We make your pages easy to quote, allow AI crawlers, and keep your business details consistent, then test a set of real prompts before and after.",
      },
      {
        q: "Will you need access to my website and Google accounts?",
        a: "Yes — Search Console, Analytics, Google Business Profile and your website or hosting. Accounts stay in your name; we are added as users, so you keep full ownership and can remove access at any time.",
      },
    ],
    related: [
      "digital-marketing-kozhikode",
      "performance-marketing-agency-kerala",
      "website-redesign-kozhikode",
      "social-media-marketing-kozhikode",
    ],
    serviceName: "SEO Services",
    serviceDescription:
      "Local, technical and content SEO for businesses in Kozhikode and across Kerala — Google Business Profile, site fixes, structured data, content and AI-search readiness with monthly reporting.",
  },
  {
    slug: "social-media-marketing-kozhikode",
    cluster: "marketing",
    keyword: "Social Media Marketing in Kozhikode",
    navLabel: "Social Media Marketing",
    title: "Social Media Marketing Agency in Kozhikode",
    description:
      "Social media marketing in Kozhikode — Instagram, Facebook, YouTube and LinkedIn content, reels and community management in English and Malayalam.",
    eyebrow: "Social Media Marketing · Kozhikode, Kerala",
    h1: "Social Media Marketing That Makes Kerala Customers Stop Scrolling",
    answer:
      "Media 360 Concept is a social media marketing agency in Kozhikode (Calicut) that plans, designs and manages Instagram, Facebook, YouTube and LinkedIn for Kerala businesses. We produce reels, posts and campaigns in English and Malayalam, handle daily publishing and replies, and report monthly on reach, engagement and enquiries.",
    intro: [
      "Your customers in Kerala spend more time on Instagram, YouTube and WhatsApp than on any website. Social media marketing is how a business earns a place in that attention — not by posting every day for the sake of it, but by giving people a reason to follow, remember and message you.",
      "Because we started as a branding and production studio, the content we make looks like your brand rather than a template — and the reels are shot and edited by the same team.",
    ],
    sections: [
      {
        heading: "What social media management includes",
        body: [],
        bullets: [
          { title: "Strategy & calendar", text: "Content pillars, posting rhythm and a monthly calendar approved before anything goes live." },
          { title: "Content production", text: "Reels, carousels, stories and short video — design, copy, shooting and editing in-house." },
          { title: "Bilingual copy", text: "English and Malayalam captions and creative, tested to see which your audience prefers." },
          { title: "Community management", text: "Replies to comments and messages, routed to your team or WhatsApp for sales enquiries." },
          { title: "Paid amplification", text: "Boosts and Meta ad campaigns for the posts that earn attention organically." },
          { title: "Reporting", text: "Monthly report on reach, engagement, follower growth and the enquiries social media produced." },
        ],
      },
      {
        heading: "Which platforms matter for your business",
        body: [
          "Restaurants, retail, real estate and education usually win on Instagram and Facebook; B2B companies and recruiters on LinkedIn; anything that needs explaining on YouTube. We recommend two or three platforms done properly rather than six done badly, and we tell you which ones are not worth your time.",
        ],
      },
      {
        heading: "Turning followers into enquiries",
        body: [
          "Likes do not pay salaries. Every campaign we run has a next step — a WhatsApp click-to-chat, a booking link, a landing page or a lead form — and we track it, so you can see which content actually produces customers.",
        ],
      },
    ],
    steps: [
      { title: "Brand & audience review", text: "What your brand stands for, who buys, and what competitors post." },
      { title: "Content plan", text: "Pillars, formats and a 30-day calendar for approval." },
      { title: "Produce", text: "Design, shoot and edit the month's content in one batch." },
      { title: "Publish & engage", text: "Scheduled posting with daily replies and message handling." },
      { title: "Review", text: "Monthly results and adjustments to what worked." },
    ],
    deliverables: [
      "Social media strategy",
      "Monthly content calendar",
      "Reels & short video",
      "Post & carousel design",
      "Malayalam & English copy",
      "Community management",
      "Meta ad campaigns",
      "Monthly analytics report",
    ],
    faqs: [
      {
        q: "How much does social media marketing cost in Kerala?",
        a: "It depends on the number of platforms, posts and videos per month, and whether paid ads are included. A small monthly package of designed posts costs much less than a programme with filmed reels and ad management. We quote a fixed monthly fee after understanding your goals; ad spend is paid to Meta directly.",
      },
      {
        q: "How many posts per month do I need?",
        a: "Consistency matters more than volume. Most businesses do well with three to four quality posts a week plus regular stories, with reels as the main reach driver. We would rather post less with better content than fill a calendar with filler.",
      },
      {
        q: "Do you create Malayalam content?",
        a: "Yes. We write and design in both Malayalam and English. For many local consumer businesses, Malayalam content performs noticeably better on Facebook and Instagram; we test both and follow your audience's response.",
      },
      {
        q: "Can you shoot videos and reels at our location?",
        a: "Yes. Our production team shoots on-site in Kozhikode and across Kerala, then edits reels, short videos and longer brand films. Batch-shooting a month of content in one session keeps costs reasonable.",
      },
      {
        q: "How do you measure social media results?",
        a: "We report reach, engagement and follower growth, but focus on what matters commercially: messages, calls, form fills and sales attributed to social. Click-to-WhatsApp links and tracked landing pages make that measurable.",
      },
    ],
    related: [
      "digital-marketing-kozhikode",
      "performance-marketing-agency-kerala",
      "video-production-kozhikode",
      "branding-agency-kozhikode",
    ],
    serviceName: "Social Media Marketing",
    serviceDescription:
      "Social media strategy, content production and community management for Instagram, Facebook, YouTube and LinkedIn, in English and Malayalam, for businesses in Kozhikode and Kerala.",
  },
  {
    slug: "performance-marketing-agency-kerala",
    cluster: "marketing",
    keyword: "Performance Marketing Agency in Kerala",
    navLabel: "Google & Meta Ads",
    title: "Google Ads & Meta Ads Agency in Kerala",
    description:
      "Google Ads and Meta Ads agency in Kerala — conversion tracking, landing pages and weekly optimisation for enquiries, not clicks.",
    eyebrow: "Performance Marketing · Google Ads · Meta Ads",
    h1: "Google Ads and Meta Ads Managed for Enquiries, Not Clicks",
    answer:
      "Media 360 Concept is a performance marketing agency in Kozhikode, Kerala that manages Google Ads and Meta (Facebook and Instagram) ads. We set up conversion tracking, build landing pages, write and design the ads, and optimise weekly for enquiries, calls and sales — inside ad accounts you own.",
    intro: [
      "Performance marketing means paying for advertising and measuring exactly what it returns. Done properly, every rupee can be traced from an ad to a WhatsApp message, a call, a form or an order. Done badly, it is the fastest way for a business to spend money with nothing to show for it.",
      "Most wasted spend we see comes from three problems: no conversion tracking, ads sending people to a homepage instead of a focused landing page, and campaigns left running without anyone reviewing search terms. We fix those first.",
    ],
    sections: [
      {
        heading: "Google Ads management",
        body: [
          "Google Ads reaches people at the moment they search — \"AC service Calicut\", \"MBA colleges in Kerala\", \"buy villa Kozhikode\". We manage Search, Performance Max, YouTube and Display campaigns, with keyword research, negative keywords, ad copy, extensions and bid strategies built around your real cost per enquiry.",
        ],
      },
      {
        heading: "Meta Ads (Facebook & Instagram)",
        body: [
          "Meta ads reach people before they search — ideal for launches, events, admissions, real estate, retail offers and anything visual. We plan audiences, produce the creative (images, reels and video), and use click-to-WhatsApp and lead-form campaigns that suit how Kerala customers prefer to respond.",
        ],
      },
      {
        heading: "Tracking and landing pages",
        body: [
          "Before we spend your budget we set up GA4 and platform conversion tracking for the actions that matter — calls, WhatsApp clicks, form submissions and purchases. Our web team builds fast landing pages for each campaign, because the page after the click usually decides the cost per lead more than the ad itself.",
        ],
      },
    ],
    steps: [
      { title: "Account & tracking audit", text: "Review existing campaigns and fix or install conversion tracking." },
      { title: "Plan", text: "Channel mix, budget split and target cost per enquiry." },
      { title: "Build", text: "Campaigns, ad creative and dedicated landing pages." },
      { title: "Launch & optimise", text: "Weekly search-term, audience and creative optimisation." },
      { title: "Report", text: "Monthly spend, leads, cost per lead and recommendations." },
    ],
    table: {
      caption: "Google Ads vs Meta Ads",
      head: ["", "Google Ads", "Meta Ads"],
      rows: [
        ["Reaches people who are", "Actively searching", "Scrolling, not yet searching"],
        ["Strongest for", "Urgent and high-intent services", "Launches, offers, visual products, awareness"],
        ["Typical formats", "Search, Performance Max, YouTube", "Reels, images, carousels, lead forms"],
        ["Common response", "Call or website enquiry", "WhatsApp message or instant form"],
      ],
    },
    deliverables: [
      "Google Ads management",
      "Meta Ads management",
      "Conversion tracking setup",
      "Landing page design",
      "Ad creative & copy",
      "Remarketing",
      "Weekly optimisation",
      "Monthly performance report",
    ],
    faqs: [
      {
        q: "How much should I spend on Google Ads or Meta Ads?",
        a: "It depends on competition in your category and what a customer is worth to you. We usually start with a test budget large enough to get meaningful data in four to six weeks, then scale what produces enquiries at an acceptable cost. Ad spend is paid directly to Google or Meta from your account.",
      },
      {
        q: "How do you charge for ad management?",
        a: "A fixed monthly management fee agreed in advance, based on the number of platforms and campaigns. We do not take a hidden margin on your ad spend, and the ad accounts stay in your business's name.",
      },
      {
        q: "Which is better for my business, Google Ads or Meta Ads?",
        a: "If customers already search for what you sell, start with Google Ads. If you need to create demand — a new product, an event, a property launch — Meta Ads usually work better. Many businesses use both: Meta to build interest and Google to capture the searches it creates.",
      },
      {
        q: "How soon will ads produce leads?",
        a: "Campaigns can produce enquiries within days of launch, but the first two to four weeks are a learning period while we refine keywords, audiences and creative. Cost per lead normally improves after that as data accumulates.",
      },
      {
        q: "Can you run ads targeting Malayalis in the Gulf?",
        a: "Yes. Both platforms can target the UAE, Saudi Arabia and other Gulf countries by location and language. Our team has long experience with Gulf audiences, which helps for real estate, education and healthcare brands whose customers live abroad.",
      },
    ],
    related: [
      "digital-marketing-kozhikode",
      "seo-services-kozhikode",
      "social-media-marketing-kozhikode",
      "web-development-kozhikode",
    ],
    serviceName: "Performance Marketing (Google Ads & Meta Ads)",
    serviceDescription:
      "Google Ads and Meta Ads management with conversion tracking, landing pages and weekly optimisation, for businesses in Kerala, India and the Gulf.",
  },
];
