import type { SeoPage } from "../seo-pages";

/**
 * Digital marketing cluster. Hub: /digital-marketing-kozhikode (in seo-pages.ts).
 * One primary keyword per page; Google Ads + Meta Ads live on the
 * performance page (same buyer, same decision) instead of two thin pages.
 * Sector pages describe how each sector buys: no client names or results
 * until the owner supplies real ones.
 */
export const MARKETING_PAGES: SeoPage[] = [
  {
    slug: "seo-services-kozhikode",
    cluster: "marketing",
    keyword: "SEO Agency in Calicut",
    navLabel: "SEO Agency Calicut",
    title: "SEO Agency in Calicut (Kozhikode) — SEO Services",
    description:
      "SEO agency in Calicut (Kozhikode): local SEO, Google Business Profile, technical SEO, content and ChatGPT/AI-search visibility, reported monthly. Free audit.",
    eyebrow: "SEO Services · Kozhikode (Calicut), Kerala",
    h1: "SEO Agency in Calicut (Kozhikode) for Businesses That Want to Be Found",
    answer:
      "Media 360 Concept is an SEO agency and SEO services company in Calicut (Kozhikode), based at HiLITE Business Park. We handle local SEO and Google Business Profile, technical SEO, content and structured data so Kerala businesses appear in Google results, the Map Pack and AI answers — with monthly reports on rankings, traffic and enquiries.",
    intro: [
      "Search engine optimisation is the work of making your website the answer Google — and increasingly ChatGPT, Gemini and Perplexity — gives when a customer asks for what you sell. For most Kerala businesses that means three things done well: a technically clean site, pages that genuinely answer customer questions, and a local presence Google trusts.",
      "We are a small, senior team, so the people who audit your site are the people who fix it. No outsourced link packages, no ranking guarantees — just the work that compounds.",
      "SEO is one part of the wider service from our [digital marketing agency in Calicut](/digital-marketing-kozhikode).",
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
      "Social media is planned alongside search and ads by our [digital marketing agency in Calicut](/digital-marketing-kozhikode).",
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
      "Ad management sits alongside SEO and content in our [digital marketing services in Calicut](/digital-marketing-kozhikode).",
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
  {
    slug: "local-seo-google-business-profile-kozhikode",
    cluster: "marketing",
    keyword: "Local SEO in Calicut",
    navLabel: "Local SEO & Google Business Profile",
    title: "Local SEO & Google Business Profile in Calicut",
    description:
      "Local SEO and Google Business Profile management in Calicut (Kozhikode): map pack visibility, reviews, citations and tracked calls. At HiLITE Business Park.",
    eyebrow: "Local SEO · Kozhikode, Kerala",
    answer:
      "Local SEO puts your business in front of nearby customers on Google Search and Maps. Media 360 Concept manages Google Business Profiles, local pages, citations and review habits for businesses in Calicut (Kozhikode) from HiLITE Business Park, and tracks the calls, direction requests and WhatsApp messages that result.",
    h1: "Local SEO and Google Business Profile Management in Calicut",
    intro: [
      "When someone searches for a service 'near me', Google usually shows a map with three businesses before any website. Those three positions take a large share of the attention, and for a shop, clinic or restaurant they are often worth more than a first-page ranking.",
      "Local SEO is the work of earning that place. It is one part of what we do as a [digital marketing agency in Calicut](/digital-marketing-kozhikode), and it is often the best first step for a business that serves customers in person.",
    ],
    sections: [
      {
        heading: "What local SEO covers",
        body: [],
        bullets: [
          { title: "Profile set-up and clean-up", text: "Verification, primary and secondary categories, services, attributes, hours and photos." },
          { title: "Review habit", text: "A simple WhatsApp request process, plus help replying to every review." },
          { title: "Citations", text: "Consistent name, address and phone across directories such as JustDial and Sulekha." },
          { title: "Local pages", text: "Service pages on your website that match how people search in Calicut." },
          { title: "Posts and photos", text: "Regular updates that keep the profile accurate and active." },
          { title: "Tracking", text: "Calls, direction requests, website clicks and WhatsApp messages, reported monthly." },
        ],
      },
      {
        heading: "How Google decides who appears",
        body: [
          "Google says local results depend on relevance, distance and prominence. We can improve relevance through your categories, services and website. Prominence comes from reviews, citations and links, built steadily. Distance is fixed by your real address and the searcher's location, so nobody can honestly promise you the top spot across all of Kozhikode.",
          "That is why we measure more than rankings. A profile that gets more calls from the right part of the city is doing its job. For the do-it-yourself version, read our guide on [getting into the Google map pack](/guides/google-map-pack-kozhikode).",
        ],
      },
      {
        heading: "Calicut, Kozhikode and getting details right",
        body: [
          "Customers search both names for the same city, and directories list you in different ways. We pick one exact version of your name, address and phone, use it everywhere, and mention both city names naturally in your description and website copy.",
          "We also look for old or duplicate listings from past addresses or phone numbers, which are common for established Kozhikode businesses and split the signals Google uses.",
        ],
      },
      {
        heading: "Who benefits most",
        body: [
          "Local SEO matters most for businesses where customers visit you, or where you visit them nearby: [hospitals and clinics](/digital-marketing-for-hospitals-kozhikode), [restaurants and cafés](/digital-marketing-for-restaurants-kozhikode), shops, salons, service companies, showrooms and professional offices. If your customers are spread across India or the Gulf, standard [SEO services](/seo-services-kozhikode) may be the better starting point.",
        ],
      },
      {
        heading: "What we will not do",
        body: [
          "We will not add keywords to your business name, create fake locations, or buy reviews. All three break Google's rules and can get a profile suspended, which takes far longer to recover from than doing the work properly would have taken.",
        ],
      },
    ],
    steps: [
      { title: "Audit", text: "We check your profile, competitors in the map results and your citations." },
      { title: "Fix", text: "Categories, services, hours, photos and duplicate listings." },
      { title: "Align", text: "Website contact details, local pages and structured data match the profile." },
      { title: "Build", text: "Citations and a review process your staff can follow." },
      { title: "Maintain", text: "Posts, photos, review replies and monthly reporting." },
    ],
    table: {
      caption: "Local SEO or general SEO?",
      head: ["", "Local SEO", "General SEO"],
      rows: [
        ["Main goal", "Nearby customers", "Customers anywhere"],
        ["Main asset", "Google Business Profile", "Website pages"],
        ["Key signals", "Reviews, citations, distance", "Content, links, technical health"],
        ["Best for", "Shops, clinics, restaurants, offices", "E-commerce, B2B, online services"],
      ],
    },
    deliverables: ["Profile audit", "Category & service setup", "Duplicate clean-up", "Citation building", "Review process", "Photos & posts", "Local landing pages", "Monthly reports"],
    faqs: [
      {
        q: "How long does local SEO take in Kozhikode?",
        a: "A neglected profile can improve within weeks once it is fixed, particularly in less crowded categories. Competitive categories take several months of steady reviews and citations. We set expectations after checking who already ranks in your area.",
      },
      {
        q: "Can you get my business to number one on Google Maps?",
        a: "Nobody can honestly promise that. Results change with the searcher's location, and Google controls the ranking. We improve the factors you can influence and report the calls and enquiries your profile produces.",
      },
      {
        q: "Do I need a website for local SEO?",
        a: "You can appear in Maps without one, but a website with clear service pages strengthens relevance and gives customers somewhere to go. If you need one, we build fast, search-ready business websites too.",
      },
      {
        q: "Will you own my Google Business Profile?",
        a: "No. The profile stays under your business's Google account and we work as a manager on it. You can remove our access at any time.",
      },
    ],
    related: ["digital-marketing-kozhikode", "seo-services-kozhikode", "digital-marketing-for-restaurants-kozhikode", "web-development-kozhikode"],
    serviceName: "Local SEO & Google Business Profile Management",
    serviceDescription:
      "Google Business Profile management, citations, review processes and local pages for businesses in Calicut (Kozhikode), reported in calls and enquiries.",
  },
  {
    slug: "digital-marketing-for-hospitals-kozhikode",
    cluster: "marketing",
    keyword: "Digital Marketing for Hospitals in Calicut",
    navLabel: "Hospital Digital Marketing Calicut",
    title: "Digital Marketing for Hospitals & Clinics in Calicut",
    description:
      "Digital marketing for hospitals, clinics and dentists in Calicut: doctor search visibility, Google Maps, reviews and careful ads that follow Indian rules.",
    eyebrow: "Healthcare Marketing · Kozhikode, Kerala",
    answer:
      "Digital marketing for hospitals in Calicut helps patients find the right doctor and book with confidence. Media 360 Concept builds doctor and treatment pages, Google Business Profiles, appointment tracking and carefully worded campaigns for hospitals, clinics and dental practices in Kozhikode, written to respect medical advertising rules.",
    h1: "Digital Marketing for Hospitals and Clinics in Calicut (Kozhikode)",
    intro: [
      "Choosing a doctor is a decision built on trust. Patients and their families search a symptom, then a specialist, then read reviews and check the location before they call. If your hospital or clinic is missing from any step, they move to the next name.",
      "Kozhikode is a referral centre for much of Malabar, so patients often travel in from nearby districts, and Gulf-based relatives frequently help with research. We shape healthcare marketing around that journey. Our wider work as a [digital marketing agency in Calicut](/digital-marketing-kozhikode) supplies the SEO, design and tracking behind it.",
    ],
    sections: [
      {
        heading: "How patients search",
        body: [
          "Healthcare search tends to move through three stages, and each needs a different page. Early on, people ask about symptoms and treatments, which educational content can answer. Next they compare specialists and hospitals, which is where doctor profiles and departments matter. Finally they search for a name with 'near me', 'contact' or 'appointment', when your Business Profile and phone number must be correct.",
        ],
        table: {
          head: ["Patient stage", "Typical search", "What they need"],
          rows: [
            ["Understanding", "Symptom or treatment question", "Clear, doctor-reviewed article"],
            ["Comparing", "Specialist or department in Calicut", "Doctor profile and department page"],
            ["Deciding", "Hospital name, 'near me', timings", "Correct profile, booking and phone"],
          ],
        },
      },
      {
        heading: "What we build for hospitals and clinics",
        body: [],
        bullets: [
          { title: "Doctor profiles", text: "Qualifications, specialties and timings, each on a page of its own." },
          { title: "Department and treatment pages", text: "Plain-language explanations reviewed by your clinicians." },
          { title: "Google Business Profile", text: "Hospital and practitioner listings set up correctly. See [local SEO](/local-seo-google-business-profile-kozhikode)." },
          { title: "Appointment tracking", text: "Calls, WhatsApp and booking forms measured without exposing patient details." },
          { title: "Awareness content", text: "Doctor-led videos and camps promoted on Instagram, Facebook and YouTube." },
          { title: "Malayalam content", text: "Health information people can read comfortably with their families." },
        ],
      },
      {
        heading: "Advertising rules we plan around",
        body: [
          "Healthcare has stricter limits than most sectors. Doctors in India are bound by medical council ethics rules on solicitation and advertising, the Drugs and Magic Remedies (Objectionable Advertisements) Act restricts claims about treating certain conditions, and Google and Meta apply their own healthcare policies to ads.",
          "In practice this means no cure guarantees, no before-and-after promises, and no testimonials that imply a result. Your medical team and legal adviser approve the final content, because they carry the responsibility. We do the planning and writing to keep that review simple.",
        ],
      },
      {
        heading: "Patient privacy comes first",
        body: [
          "Tracking in healthcare needs care. We measure that a call or form happened and which campaign produced it, and avoid sending health details to advertising platforms. Reviews need the same care: you can thank a reviewer, but your replies should not confirm that someone was a patient or mention their treatment.",
        ],
      },
    ],
    steps: [
      { title: "Review", text: "Your departments, doctors, competitors and current search presence." },
      { title: "Prioritise", text: "Pick the departments with capacity and clear patient demand." },
      { title: "Build", text: "Doctor and department pages, profiles and tracking." },
      { title: "Approve", text: "Medical and legal review of all patient-facing content." },
      { title: "Promote", text: "Search, local and social campaigns, reported monthly." },
    ],
    deliverables: ["Doctor profile pages", "Department pages", "Google Business Profiles", "Appointment tracking", "Health content", "Doctor videos", "Google & Meta campaigns", "Monthly reports"],
    faqs: [
      {
        q: "Can hospitals run Google Ads in India?",
        a: "Yes, within limits. Google restricts some healthcare and medicine topics, and medical advertising rules still apply. Campaigns should use careful wording and approved landing pages. We check each campaign against platform policy before launch.",
      },
      {
        q: "Can a clinic use patient reviews in marketing?",
        a: "Be careful. Reviews on Google are fine to encourage if you ask politely and never pay for them, but using testimonials in ads can create problems with medical ethics rules. Have your medical team or legal adviser approve anything you republish.",
      },
      {
        q: "Do you work with single-doctor clinics and dental practices?",
        a: "Yes. Smaller practices usually see the most value from a strong Google Business Profile, a simple website with accurate timings and a review habit, before spending on ads.",
      },
      {
        q: "Do you also build hospital software?",
        a: "Yes. Our software team builds hospital and clinic management systems, so appointment data and marketing can be planned together where that helps.",
      },
    ],
    related: ["digital-marketing-kozhikode", "local-seo-google-business-profile-kozhikode", "hospital-management-software-kerala", "seo-services-kozhikode"],
    serviceName: "Digital Marketing for Hospitals & Clinics",
    serviceDescription:
      "Doctor and department pages, Google Business Profiles, appointment tracking and compliant campaigns for hospitals, clinics and dental practices in Calicut (Kozhikode).",
  },
  {
    slug: "digital-marketing-for-restaurants-kozhikode",
    cluster: "marketing",
    keyword: "Restaurant Digital Marketing in Calicut",
    navLabel: "Restaurant Marketing Calicut",
    title: "Restaurant Digital Marketing in Calicut (Kozhikode)",
    description:
      "Restaurant digital marketing in Calicut: Google Maps visibility, reviews, food reels and offers that fill tables and bring direct orders. Free audit.",
    eyebrow: "Restaurant Marketing · Kozhikode, Kerala",
    answer:
      "Restaurant digital marketing in Calicut means being found on Google Maps at the moment people choose where to eat, then giving them a reason to pick you. Media 360 Concept handles Business Profiles, menus, reviews, food reels and local ads for restaurants, cafés, bakeries and cloud kitchens in Kozhikode.",
    h1: "Restaurant Digital Marketing in Calicut (Kozhikode)",
    intro: [
      "Calicut takes food seriously. From biryani and Malabar snacks to new cafés along the bypass, a hungry customer has plenty of choices and decides quickly, often on a phone, often minutes before leaving home.",
      "Restaurant marketing has a short path: see it, want it, go. So we concentrate on what affects that moment, using the same team behind our [digital marketing agency in Calicut](/digital-marketing-kozhikode) work: your Maps listing, your photos, your reviews and short videos that make people hungry.",
    ],
    sections: [
      {
        heading: "Win the 'near me' moment",
        body: [
          "Searches like 'best biryani near me' or 'family restaurant in Calicut' lead straight to the map. Your [Google Business Profile](/local-seo-google-business-profile-kozhikode) needs correct hours, a current menu, price level, real food photos and links for booking or ordering. Small errors cost real meals: wrong closing times in Ramadan or on festival days send customers elsewhere and bring angry reviews.",
        ],
      },
      {
        heading: "Reviews are your front window",
        body: [
          "Diners read recent reviews and look at customer photos before deciding. Teach staff to ask at the right moment, put a QR code on the bill, and reply to every review within a day or two. A polite answer to a complaint about slow service shows the next reader that you care.",
        ],
      },
      {
        heading: "Food content that earns attention",
        body: [],
        bullets: [
          { title: "Reels from the kitchen", text: "Steam, sizzle and hands at work, shot on location in batches." },
          { title: "Menu launches", text: "A planned content burst whenever a dish or combo launches." },
          { title: "Local food creators", text: "Clear briefs and honest disclosure when you work with creators." },
          { title: "Festival calendars", text: "Onam sadhya, Ramadan iftar, Eid, Christmas and wedding season, planned early." },
          { title: "Malayalam captions", text: "Copy with the local humour and warmth that gets shared." },
          { title: "Offers worth sharing", text: "Weekday lunches and family deals, promoted to people nearby." },
        ],
      },
      {
        heading: "Direct orders and aggregator margins",
        body: [
          "Swiggy and Zomato bring reach, but commissions take a real share of each order. For regular customers, a simple WhatsApp ordering flow or your own online menu can help keep more of the margin. We can set up that flow and promote it to your existing customers, while your aggregator listings keep bringing in new ones.",
        ],
      },
      {
        heading: "Local ads with a small radius",
        body: [
          "Restaurant customers rarely travel far, so ads should reach people close by, at the right times, with a clear offer. Meta Ads work well for a new outlet or a launch, and Google Ads can capture high-intent searches. We keep the radius and schedule tight so a modest budget goes further, and we use tracking to compare the offers.",
        ],
      },
    ],
    table: {
      caption: "What each channel does for a restaurant",
      head: ["Channel", "Job", "Measure it by"],
      rows: [
        ["Google Business Profile", "Be chosen nearby", "Calls, directions, menu views"],
        ["Instagram & Reels", "Make people want to visit", "Saves, shares, DMs"],
        ["Reviews", "Build trust", "Recent rating and review count"],
        ["WhatsApp", "Bring regulars back", "Direct orders and repeat visits"],
        ["Local ads", "Launches and slow days", "Offers redeemed, cost per order"],
      ],
    },
    deliverables: ["Google Business Profile", "Menu & photo updates", "Review system", "Reels & food shoots", "Festival campaigns", "Local Meta ads", "WhatsApp ordering", "Monthly reports"],
    faqs: [
      {
        q: "How can a restaurant in Calicut get more customers online?",
        a: "Start with your Google Business Profile: correct hours, menu, photos and steady reviews. Then add short food videos on Instagram and a local offer for slow days. These usually matter more than a large social media following.",
      },
      {
        q: "Do I need a website for my restaurant?",
        a: "A simple, fast site with your menu, location, timings and order links is useful, and it gives you a page you own. It does not need to be elaborate, but it should work well on a phone.",
      },
      {
        q: "Can you shoot food videos at our restaurant?",
        a: "Yes. Our team shoots and edits on location in Kozhikode, usually batching a month of reels in a single session to keep costs down.",
      },
      {
        q: "How do I handle a bad review?",
        a: "Reply quickly and politely, thank them for the feedback, apologise if something went wrong and invite them to contact you directly. Never argue in public. Later readers judge your reply as much as the complaint.",
      },
    ],
    related: ["digital-marketing-kozhikode", "local-seo-google-business-profile-kozhikode", "social-media-marketing-kozhikode", "video-production-kozhikode"],
    serviceName: "Restaurant Digital Marketing",
    serviceDescription:
      "Google Business Profile, reviews, food reels, festival campaigns and local ads for restaurants, cafés, bakeries and cloud kitchens in Calicut (Kozhikode).",
  },
  {
    slug: "real-estate-digital-marketing-kozhikode",
    cluster: "marketing",
    keyword: "Real Estate Digital Marketing in Calicut",
    navLabel: "Real Estate Marketing Calicut",
    title: "Real Estate Digital Marketing in Calicut (Kozhikode)",
    description:
      "Real estate digital marketing in Calicut for builders and brokers: qualified leads from Kerala and the Gulf, project pages, tracked ads, WhatsApp follow-up.",
    eyebrow: "Real Estate Marketing · Kozhikode, Kerala",
    answer:
      "Real estate digital marketing in Calicut helps builders and brokers reach serious buyers in Kerala and the Gulf. Media 360 Concept creates project pages, video walkthroughs, Google and Meta campaigns and WhatsApp lead follow-up for developers in Kozhikode, and reports cost per qualified lead instead of raw form fills.",
    h1: "Real Estate Digital Marketing in Calicut (Kozhikode)",
    intro: [
      "A flat or a villa is one of the biggest purchases a family makes, and the decision can take months. In Calicut, the buyer may be a Gulf-based professional comparing projects from Dubai or Doha while parents visit the site at home.",
      "Generating leads is rarely the hard part in real estate. Getting serious ones and following up fast is. We connect the campaign, the project page and your sales team into one process, drawing on the full range of our [digital marketing agency in Calicut](/digital-marketing-kozhikode).",
    ],
    sections: [
      {
        heading: "Reach buyers at home and in the Gulf",
        body: [
          "We plan audiences around where your buyers really are: families in Kozhikode and Malabar, Non-Resident Keralites across the GCC, and investors. Gulf campaigns need their own schedule and message. Friday timing, video calls and a clear explanation of the buying process from abroad all matter to someone who cannot simply visit on Sunday.",
        ],
      },
      {
        heading: "What a project page should contain",
        body: [],
        bullets: [
          { title: "Location and access", text: "Map, nearby schools, hospitals and roads, stated accurately." },
          { title: "Floor plans", text: "Unit types and carpet areas, clearly labelled." },
          { title: "Approvals", text: "RERA registration number and legal status, easy to find." },
          { title: "Construction updates", text: "Dated photos and videos, which reassure buyers abroad." },
          { title: "Video walkthroughs", text: "Show flats and 3D renders, clearly marked as what they are." },
          { title: "Fast contact", text: "WhatsApp, call-back and site-visit booking on every screen." },
        ],
      },
      {
        heading: "Follow up before the lead goes cold",
        body: [
          "A property enquiry can lose value quickly, because the same person has often contacted several builders. We connect ad leads to a simple CRM or WhatsApp flow so the sales team sees each enquiry straight away, with its source. Our software team can build a [custom CRM](/crm-erp-development-kerala) when a spreadsheet is no longer enough.",
          "Tracking then runs past the form: which campaigns produced site visits and bookings, not only enquiries. That is the number that should decide your budget.",
        ],
      },
      {
        heading: "Advertise within RERA rules",
        body: [
          "Under the Real Estate (Regulation and Development) Act, 2016, registered projects must show the RERA registration number and the authority's website in their advertising, and buyers can check the details. We build this into every ad and page. Your legal team should approve any statement on price, possession dates or returns, and we avoid promises of guaranteed appreciation.",
        ],
      },
      {
        heading: "Build a brand buyers remember",
        body: [
          "Long decisions favour builders people recognise. Delivered projects, [video](/video-production-kozhikode) from real sites, and consistent [branding](/branding-agency-kozhikode) all build trust between the first ad and the site visit, and an organic presence through [SEO](/seo-services-kozhikode) lets buyers find you again by name.",
        ],
      },
    ],
    table: {
      caption: "Where real estate leads come from",
      head: ["Channel", "Strength", "Watch out for"],
      rows: [
        ["Google Ads", "Active buyers with high intent", "Competitive keywords"],
        ["Meta Ads", "Reach and video reach, at home and in the GCC", "Many casual enquiries; qualify them"],
        ["YouTube", "Walkthroughs and builder credibility", "Needs good video"],
        ["SEO & project pages", "Lasting visibility for locations and projects", "Takes months"],
        ["Property portals", "Existing buyer traffic", "Shared leads, listing costs"],
      ],
    },
    steps: [
      { title: "Project brief", text: "Buyer profile, unit mix, approvals and sales capacity." },
      { title: "Project page", text: "A fast page with plans, location, approvals and contact routes." },
      { title: "Campaign", text: "Separate audiences for Kerala and the Gulf." },
      { title: "Lead handling", text: "Instant alerts, WhatsApp follow-up and clear qualification." },
      { title: "Report", text: "Cost per qualified lead, site visit and booking." },
    ],
    deliverables: ["Project landing pages", "Google & Meta campaigns", "GCC audience targeting", "Video walkthroughs", "WhatsApp follow-up", "CRM integration", "Lead qualification", "Monthly reports"],
    faqs: [
      {
        q: "How do builders in Calicut get better-quality leads?",
        a: "Use forms that ask useful questions, target by intent and location, and show price guidance and project details before the enquiry. Then measure campaigns by site visits and bookings, so budget moves toward the sources of serious buyers.",
      },
      {
        q: "Can you reach Keralites working in the Gulf?",
        a: "Yes. We can target Malayalam and English audiences in the GCC through Meta, Google and YouTube, with their own schedules, messages and video-call site tours for buyers who cannot visit in person.",
      },
      {
        q: "Must RERA numbers appear in property ads?",
        a: "For projects that must be registered, yes. The law requires the registration number and the authority's website address in advertisements. Check details for your project with your legal adviser, and we will include them in every campaign.",
      },
      {
        q: "Do you work with brokers as well as builders?",
        a: "Yes, for builders, brokers and consultants. Brokers usually need strong local pages, reviews and clear listings, while builders need a campaign for each project.",
      },
    ],
    related: ["digital-marketing-kozhikode", "performance-marketing-agency-kerala", "crm-erp-development-kerala", "video-production-kozhikode"],
    serviceName: "Real Estate Digital Marketing",
    serviceDescription:
      "Project pages, Google and Meta campaigns, GCC targeting, video and WhatsApp lead follow-up for builders and brokers in Calicut (Kozhikode).",
  },
  {
    slug: "education-digital-marketing-kerala",
    cluster: "marketing",
    keyword: "Digital Marketing for Schools and Colleges in Kerala",
    navLabel: "Education Marketing Kerala",
    title: "Digital Marketing for Schools & Colleges in Kerala",
    description:
      "Digital marketing for schools, colleges and coaching centres in Kerala: admission campaigns, parent-friendly websites and tracked enquiries from Calicut.",
    eyebrow: "Education Marketing · Kerala",
    answer:
      "Digital marketing for schools and colleges in Kerala fills admissions by reaching parents and students before they decide. Media 360 Concept plans admission campaigns, search-ready course pages, video and WhatsApp follow-up for schools, colleges, coaching centres and overseas education consultants, working from HiLITE Business Park in Calicut.",
    h1: "Digital Marketing for Schools, Colleges and Coaching Centres in Kerala",
    intro: [
      "Admissions run on a calendar. Families start comparing months before the deadline, and the institutions that show up early, with clear information, are the ones on the shortlist when the decision comes.",
      "Two audiences matter: students, who scroll Instagram and YouTube, and parents, who search Google and ask relatives. Your marketing needs to reach both, and the team behind our [digital marketing agency in Calicut](/digital-marketing-kozhikode) plans it around your admission dates.",
    ],
    sections: [
      {
        heading: "Plan backwards from admission season",
        body: [],
        table: {
          head: ["Phase", "When", "Focus"],
          rows: [
            ["Build", "Four to six months before", "Website, course pages, video, reviews"],
            ["Awareness", "Three months before", "Social content, YouTube, open days"],
            ["Enquiry", "Six to eight weeks before", "Google Ads, Meta lead campaigns"],
            ["Conversion", "Through admission", "Fast calls, WhatsApp, campus visits"],
            ["Retention", "After admission", "Alumni stories, referrals, next year's content"],
          ],
        },
      },
      {
        heading: "What parents and students want to see",
        body: [],
        bullets: [
          { title: "Course and fee clarity", text: "Eligibility, duration and how to apply, stated plainly." },
          { title: "Recognition", text: "Affiliation, approvals and accreditation, verifiable by parents." },
          { title: "Real campus video", text: "Classrooms, labs, hostels and transport as they really are." },
          { title: "Faculty", text: "Named teachers and what they teach." },
          { title: "Student stories", text: "Real alumni with their consent, and no invented numbers." },
          { title: "Fast answers", text: "WhatsApp replies within hours in admission season." },
        ],
      },
      {
        heading: "Honest claims protect your reputation",
        body: [
          "Education advertising is under growing scrutiny. In 2024 India's Central Consumer Protection Authority issued guidelines against misleading coaching advertisements, covering claims about success rates, rankings and guaranteed outcomes. Advertising rules in India also expect claims to be backed by evidence.",
          "Beyond the legal side, parents talk to each other. We avoid vague lines like '100% placement' unless your records prove them, and we use only results you can document and students who have agreed to appear.",
        ],
      },
      {
        heading: "Search pages that win all year",
        body: [
          "Ads stop when the budget ends, but pages for 'best nursing college in Kerala' or a course in your town can bring enquiries every year. We build [SEO](/seo-services-kozhikode) pages for each course and location you really serve, with a complete [Google Business Profile](/local-seo-google-business-profile-kozhikode) for each campus so that parents searching nearby find accurate details.",
        ],
      },
      {
        heading: "Turn enquiries into admissions",
        body: [
          "A form is only the start. Enquiries should reach your admissions team immediately, with the course and the source attached. We can set up a WhatsApp flow or [CRM](/crm-erp-development-kerala) that handles follow-up reminders, which also shows which campaigns produced admissions.",
        ],
      },
    ],
    deliverables: ["Admission campaigns", "Course landing pages", "Campus video", "Google & Meta Ads", "Google Business Profile", "WhatsApp follow-up", "Enquiry tracking", "Season reports"],
    faqs: [
      {
        q: "When should a school start admission marketing?",
        a: "Ideally four to six months before admissions open, since the website, video and reviews need time to build. Paid campaigns usually start closer to the deadline, when families are actively comparing.",
      },
      {
        q: "Which platform works best for college admissions in Kerala?",
        a: "Usually a mix: Instagram and YouTube for students, Google Search for parents and students close to deciding, and WhatsApp for conversation. We test this against your own enquiry data each season.",
      },
      {
        q: "Do you work with overseas education consultants?",
        a: "Yes. These campaigns usually need clear country and course pages, honest visa and cost information, and quick counselling follow-up on WhatsApp.",
      },
      {
        q: "Do you market Media 360 Academy too?",
        a: "Yes. Our own academy at HiLITE Business Park runs courses in digital marketing, coding and video, so we use many of the same methods for our own admissions.",
      },
    ],
    related: ["digital-marketing-kozhikode", "seo-services-kozhikode", "performance-marketing-agency-kerala", "video-production-kozhikode"],
    serviceName: "Digital Marketing for Education",
    serviceDescription:
      "Admission campaigns, course pages, video and enquiry follow-up for schools, colleges, coaching centres and overseas education consultants in Kerala.",
  },
];
