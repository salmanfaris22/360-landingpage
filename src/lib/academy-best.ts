import type { Faq } from "./schema";

/**
 * "Best courses in …" landing pages for the academy, one per real search
 * area: HiLITE Business Park (the complex), Calicut/Kozhikode (the city — one
 * page targets both names, since two pages would be duplicates), Kerala and
 * India (both served by the live online classes).
 *
 * "Best" is never self-awarded with invented proof: each page gives the
 * reader criteria to judge any institute, then shows how the academy works
 * against them. Each page has its own intro, criteria, table and FAQs so no
 * page is a place-swapped copy of another.
 */
type Pick = { who: string; slug: string };
export type BestPage = {
  slug: string;
  path: string;
  name: string;
  title: string;
  description: string;
  h1: string;
  answer: string;
  /** Short place label for breadcrumbs and cross-links. */
  place: string;
  headings: { intro: string; criteria: string; courses: string; picks: string };
  glance: { k: string; v: string }[];
  listName: string;
  intro: string[];
  criteria: { title: string; text: string }[];
  /** A page-specific decision table (distinct per page). */
  table?: { heading: string; caption: string; head: string[]; rows: string[][] };
  /** "Which course for you" table — HiLITE only; the wider pages have their own table instead. */
  picks: Pick[];
  /** Compact course list (no blurbs), so wider-area pages don't repeat the HiLITE page's text. */
  compact?: boolean;
  faqs: Faq[];
  cta: { heading: string; text: string };
};

export const PICKS: Pick[] = [
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
];

/**
 * "Best courses in HiLITE Business Park" — the academy's local landing page.
 * Like the agency's HiLITE pages, "best" is never self-awarded with invented
 * proof: the page gives the criteria to judge any institute, then shows how
 * the academy works against them and which course fits which student.
 */
export const BEST_COURSES: BestPage = {
  slug: "best-courses-in-hilite-business-park",
  path: "/academy/best-courses-in-hilite-business-park",
  name: "Best Courses in HiLITE Business Park",
  title: "Best Courses in HiLITE Business Park, Kozhikode (Calicut)",
  description:
    "All 13 courses in HiLITE Business Park, Kozhikode (Calicut): digital marketing, MERN, Python, AI, Premiere Pro, After Effects and more. Offline + online.",
  h1: "Best Courses in HiLITE Business Park, Kozhikode (Calicut)",
  place: "HiLITE Business Park",
  headings: { intro: "Training inside HiLITE Business Park", criteria: "How to judge the best course", courses: "All {count} courses in HiLITE Business Park", picks: "Which course is best for you?" },
  glance: [
    { k: "Courses", v: "{count}" },
    { k: "Mode", v: "Offline · Online" },
    { k: "Where", v: "HiLITE Business Park" },
    { k: "City", v: "Kozhikode (Calicut)" },
    { k: "Counselling", v: "Free on WhatsApp" },
  ],
  listName: "Courses at HiLITE Business Park, Calicut",
  cta: { heading: "Visit us at HiLITE Business Park", text: "Ask about the next batch and the right course for you." },
  answer:
    "Media 360 Academy runs 13 AI-first courses inside HiLITE Business Park, HiLITE City, Thondayad Bypass, Kozhikode (Calicut), next to HiLITE Mall. A 3-month AI Digital Master Program covers digital marketing, AI web development, video editing and PR, and twelve specialist courses cover MERN stack, Python full stack, Golang, frontend, AI web development, AI developer & vibe coding, forward deployed engineering, AI video editing, Premiere Pro, After Effects, DaVinci Resolve and generative AI, taught on real agency projects, offline at HiLITE and live online, Sunday to Friday.",
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
  picks: PICKS,
  faqs: [
    { q: "Which is the best course in HiLITE Business Park?", a: "It depends on your goal. For digital marketing, websites, video and PR together, take the 3-month AI Digital Master Program. For a developer career, start with the MERN stack or Python full stack course. For AI engineering, take AI developer & vibe coding. For video, take AI video editing or Premiere Pro. Media 360 Academy offers all of them at HiLITE Business Park, Calicut, and free counselling helps you choose." },
    { q: "Where exactly are the classes in HiLITE Business Park?", a: "Classes are held at Media 360 Concept, HiLITE Business Park, HiLITE City, Thondayad Bypass, Kozhikode (Calicut), Kerala 673014. Message us on WhatsApp before visiting so we can meet you." },
    { q: "Are the courses available online as well?", a: "Yes. Every course runs offline at HiLITE Business Park and online with live sessions, code reviews and the same projects." },
    { q: "Can I join without an IT background?", a: "Yes. The MERN stack, Python full stack, frontend, AI web development, AI video editing and Premiere Pro courses start from the basics. Advanced courses such as Golang and forward deployed engineering expect some coding experience." },
    { q: "What are the batch timings?", a: "Batches run Sunday to Friday, with morning and evening batches. The AI Digital Master Program takes 3 months. Message us on WhatsApp for the next start date and fees — we reply within 24 hours." },
    { q: "Which course near HiLITE Mall is best for digital marketing?", a: "Media 360 Academy's AI Digital Master Program is taught inside HiLITE Business Park, next to HiLITE Mall on Thondayad Bypass, Kozhikode. It covers SEO, Google Business Profile, Meta and Google Ads, AI web development, Premiere Pro video and PR in 3 months." },
  ],
};


/** Calicut and Kozhikode are one city: a single page carries both names. */
export const BEST_CALICUT: BestPage = {
  slug: "best-courses-in-calicut-kozhikode",
  path: "/academy/best-courses-in-calicut-kozhikode",
  name: "Best Courses in Calicut (Kozhikode)",
  title: "Best Courses in Calicut (Kozhikode) — AI, Coding & Video",
  description:
    "Best courses in Calicut (Kozhikode): 3-month digital marketing + AI program, MERN, Python, AI developer and video editing at HiLITE. Offline + live online.",
  h1: "Best Courses in Calicut (Kozhikode) for AI, Coding, Marketing & Video",
  answer:
    "Media 360 Academy runs AI-first courses in Calicut (Kozhikode) from HiLITE Business Park on Thondayad Bypass: a 3-month AI Digital Master Program in digital marketing, AI web development, video and PR, plus specialist courses in MERN stack, Python full stack, Golang, frontend, AI development, Premiere Pro, After Effects, DaVinci Resolve and generative AI. Classes run Sunday to Friday, morning and evening, in Malayalam and English, offline or live online.",
  place: "Calicut (Kozhikode)",
  headings: { intro: "Learning tech and creative skills in Calicut", criteria: "Questions to ask any institute in Kozhikode", courses: "All {count} courses in Calicut (Kozhikode)", picks: "Best course in Calicut for your goal" },
  glance: [
    { k: "City", v: "Calicut · Kozhikode" },
    { k: "Classroom", v: "HiLITE Business Park" },
    { k: "Batches", v: "Sunday–Friday" },
    { k: "Times", v: "Morning & evening" },
    { k: "Language", v: "Malayalam + English" },
  ],
  listName: "Courses in Calicut (Kozhikode)",
  intro: [
    "Calicut — Kozhikode in Malayalam — has a growing base of software and creative work: two IT parks, Government CyberPark and UL CyberPark, a busy agency scene, and thousands of local businesses that now need websites, ads and video. Most students here want a course that leads to that work, close to home, without moving to Kochi or Bengaluru.",
    "Media 360 Academy is the training side of Media 360 Concept, an agency at HiLITE Business Park that builds websites, software, AI tools, ads and video for Kerala businesses. Every course is taught from that client work, so what you practise in class is what Calicut employers and clients are paying for right now.",
    "Whether you search for the best course in Calicut or the best course in Kozhikode, you are looking for the same thing: a clear syllabus, teachers who do the job, and a portfolio you can show at an interview.",
  ],
  criteria: [
    { title: "Can I see real student-style projects?", text: "Ask to see the projects you will build. Each of our course pages lists every module, tool and project before you join." },
    { title: "Who teaches and reviews my work?", text: "Look for working developers, marketers and editors. Our reviewers deliver client projects from HiLITE Business Park every week." },
    { title: "Is AI part of the course?", text: "Calicut companies now expect AI-assisted work. Every course here uses ChatGPT, Claude and other AI tools — and teaches you to check them." },
    { title: "Do batches fit my day?", text: "Classes run Sunday to Friday with morning and evening batches, so college students and working people can both attend." },
    { title: "Can I continue if I travel?", text: "Every course is also live online, so a trip, a job change or a move to the Gulf does not end your course." },
    { title: "Are the claims honest?", text: "Be careful with guaranteed-placement or salary promises. We offer portfolio, resume and interview preparation, not invented numbers." },
  ],
  table: {
    heading: "Career paths in Calicut",
    caption: "Suggested course paths for common career goals in Calicut (Kozhikode)",
    head: ["Your goal", "Start with", "Then add", "Typical employers in Calicut"],
    rows: [
      ["Marketing job at an agency or brand", "AI Digital Master Program (3 months)", "Generative AI for Video & Design", "Agencies, retail, hospitals, real estate, colleges"],
      ["Developer job at an IT company", "MERN Stack or Python Full Stack", "AI Developer & Vibe Coding", "CyberPark firms, IT service companies, startups"],
      ["Freelance websites for local businesses", "AI Web Development", "AI Digital Master Program", "Shops, clinics, restaurants, Gulf clients"],
      ["Video editor for reels, ads and YouTube", "Premiere Pro or AI Video Editing", "After Effects or DaVinci Resolve", "Agencies, media houses, wedding studios, creators"],
      ["AI engineer or AI automation", "Python Full Stack", "AI Developer → Forward Deployed Engineer", "AI startups, product teams, remote companies"],
    ],
  },
  picks: [],
  compact: true,
  faqs: [
    { q: "Which is the best course in Calicut?", a: "It depends on your goal. For a marketing job, the 3-month AI Digital Master Program covers digital marketing, AI web development, video and PR. For a developer job, MERN stack or Python full stack. For video, Premiere Pro or AI video editing. Media 360 Academy teaches all of them at HiLITE Business Park, Calicut, with free counselling to help you choose." },
    { q: "Which is the best course in Kozhikode for a job?", a: "Courses that leave you with a portfolio of real work: deployed apps for developers, live campaigns for marketers, and a showreel for editors. In Kozhikode, MERN stack, Python full stack, digital marketing and video editing match the jobs local companies hire for most often." },
    { q: "What is the best digital marketing course in Calicut?", a: "Look for a course that covers SEO, Google Business Profile, Meta and Google Ads, analytics and content, taught by people who run campaigns for clients. Media 360 Academy's 3-month AI Digital Master Program covers all of that, plus AI web development, Premiere Pro video and PR, at HiLITE Business Park, Kozhikode." },
    { q: "What is the best coding course in Kozhikode?", a: "For beginners, MERN stack or Python full stack; for designers, frontend development; for developers moving into AI, AI developer & vibe coding. All are taught AI-first at HiLITE Business Park, Kozhikode, with code review from working developers." },
    { q: "Are Calicut and Kozhikode the same place?", a: "Yes. Calicut is the English name and Kozhikode the Malayalam name of the same city. Media 360 Academy is at HiLITE Business Park, HiLITE City, Thondayad Bypass, Kozhikode (Calicut), Kerala 673014." },
    { q: "Do you have evening courses in Calicut for working people?", a: "Yes. Batches run Sunday to Friday with morning and evening batches, and every course is also live online." },
  ],
  cta: { heading: "Visit us in Calicut", text: "Our classroom is at HiLITE Business Park, Thondayad Bypass, next to HiLITE Mall." },
};

export const BEST_KERALA: BestPage = {
  slug: "best-courses-in-kerala",
  path: "/academy/best-courses-in-kerala",
  name: "Best Courses in Kerala",
  title: "Best Courses in Kerala — AI, Coding, Marketing & Video",
  description:
    "Best AI, coding, digital marketing and video editing courses in Kerala: live online from anywhere or offline in Kozhikode. Malayalam + English classes.",
  h1: "Best Courses in Kerala for AI, Coding, Digital Marketing & Video Editing",
  answer:
    "Media 360 Academy teaches AI-first courses to students across Kerala: live online from any district, or in the classroom at HiLITE Business Park, Kozhikode. Courses include a 3-month AI Digital Master Program (digital marketing, AI web development, video and PR), MERN stack, Python full stack, AI developer, Premiere Pro, After Effects, DaVinci Resolve and generative AI, taught in Malayalam and English, Sunday to Friday.",
  place: "Kerala",
  headings: { intro: "Courses for students across Kerala", criteria: "What makes a course worth it in Kerala", courses: "{count} courses you can take from anywhere in Kerala", picks: "Best course in Kerala for your goal" },
  glance: [
    { k: "Online", v: "Any district in Kerala" },
    { k: "Classroom", v: "Kozhikode (HiLITE)" },
    { k: "Language", v: "Malayalam + English" },
    { k: "Batches", v: "Sunday–Friday" },
    { k: "Times", v: "Morning & evening" },
  ],
  listName: "Courses available across Kerala",
  intro: [
    "Kerala has one of India's most educated workforces, and a large share of it now works in software, digital marketing and media — in Kerala, in other Indian cities and in the Gulf. What students across the state need is the same: up-to-date skills, AI included, taught in a language they are comfortable with, at a time that fits their day.",
    "Media 360 Academy is based in Kozhikode, but most of Kerala is a long commute away from any one classroom. That is why every course runs live online with the same syllabus, projects and reviews as the classroom at HiLITE Business Park. You can study from Kannur, Malappuram, Thrissur, Kochi or Thiruvananthapuram and still have your work reviewed by the agency team that does it for clients.",
    "Classes are explained in Malayalam and English, with notes, code and briefs in English, so you learn comfortably and still prepare for interviews anywhere.",
  ],
  criteria: [
    { title: "Live teaching, not just videos", text: "Recorded courses are cheap but easy to abandon. Live classes with screen-share help keep you moving." },
    { title: "Malayalam and English", text: "Understanding the concept matters more than the language. Explanations in Malayalam, materials in English." },
    { title: "Skills Kerala and the Gulf hire for", text: "Digital marketing, full stack development, AI and video editing are in demand with Kerala firms and Gulf employers alike." },
    { title: "AI in every module", text: "AI tools are now part of daily work. Learn to use them well and to check their output." },
    { title: "A portfolio you can send", text: "Online or offline, finish with deployed projects, campaigns or a showreel — not only a certificate." },
    { title: "Visit when you can", text: "Online students are welcome at the Kozhikode classroom for help sessions." },
  ],
  table: {
    heading: "Online or classroom: what suits you",
    caption: "How students in different parts of Kerala and abroad usually study with Media 360 Academy",
    head: ["Where you are", "Best way to study", "Why"],
    rows: [
      ["Kozhikode city and nearby", "Classroom at HiLITE Business Park", "Daily in-person help, team projects, the agency next door"],
      ["Malappuram, Wayanad, Kannur, Kasaragod", "Live online, with visits to Kozhikode when possible", "No daily commute; in-person sessions when you need them"],
      ["Thrissur, Palakkad, Kochi and south Kerala", "Live online", "The same classes and reviews, from home"],
      ["Gulf countries (UAE, Saudi Arabia, Qatar, Oman)", "Live online, choosing a batch that fits your time zone", "Keep your job while you reskill; Malayalam and English teaching"],
      ["Working full time anywhere in Kerala", "Evening batch, online or classroom", "Classes after work, Sunday to Friday"],
    ],
  },
  picks: [],
  compact: true,
  faqs: [
    { q: "Which is the best course in Kerala right now?", a: "For a job in the next few months, digital marketing and full stack development are strong choices, and AI skills raise the value of both. Media 360 Academy's 3-month AI Digital Master Program covers digital marketing, AI web development, video and PR; MERN stack and Python full stack cover development. All run live online across Kerala and in Kozhikode." },
    { q: "What is the best AI course in Kerala?", a: "Choose by your background. Non-coders can start with generative AI for video and design or the AI Digital Master Program. Developers can take AI developer & vibe coding, which covers LLMs, RAG, agents and MCP, and then forward deployed engineering." },
    { q: "What is the best digital marketing course in Kerala?", a: "A good course covers SEO, Google Business Profile, Meta and Google Ads, analytics and content, with real campaigns. Media 360 Academy's AI Digital Master Program adds AI web development, Premiere Pro video and PR in 3 months, live online across Kerala or at HiLITE Business Park, Kozhikode." },
    { q: "Are the courses taught in Malayalam?", a: "Yes. Concepts are explained in Malayalam and English; notes, code and project briefs are in English." },
    { q: "Can I join from outside Kozhikode?", a: "Yes. Every course is live online, so students from any district in Kerala — or the Gulf — attend the same classes as the Kozhikode classroom." },
    { q: "Is there a classroom in my district?", a: "The classroom is at HiLITE Business Park, Kozhikode. Students elsewhere in Kerala study live online and can visit Kozhikode for help sessions." },
  ],
  cta: { heading: "Join from anywhere in Kerala", text: "Live online classes, or visit the classroom at HiLITE Business Park, Kozhikode." },
};

export const BEST_INDIA: BestPage = {
  slug: "best-online-courses-in-india",
  path: "/academy/best-online-courses-in-india",
  name: "Best Online Courses in India",
  title: "Best Online Courses in India — AI, Coding & Marketing",
  description:
    "Live online AI, coding, digital marketing and video editing courses for students across India, from Media 360 Academy, Kozhikode. Real projects, AI-first.",
  h1: "Best Online Courses in India for AI, Coding, Digital Marketing & Video",
  answer:
    "Media 360 Academy offers live online courses to students across India from its base at HiLITE Business Park, Kozhikode, Kerala: a 3-month AI Digital Master Program (digital marketing, AI web development, video and PR), MERN stack, Python full stack, Golang, AI developer & vibe coding, forward deployed engineering, Premiere Pro, After Effects, DaVinci Resolve and generative AI. Classes are live, Sunday to Friday, with real projects reviewed by a working agency team.",
  place: "India",
  headings: { intro: "Live online courses for India", criteria: "How to choose an online course in India", courses: "{count} live online courses across India", picks: "Best online course for your goal" },
  glance: [
    { k: "Format", v: "Live online classes" },
    { k: "Based in", v: "Kozhikode, Kerala" },
    { k: "Batches", v: "Sunday–Friday" },
    { k: "Times", v: "Morning & evening (IST)" },
    { k: "Language", v: "Malayalam + English" },
  ],
  listName: "Live online courses for students in India",
  intro: [
    "India has thousands of online courses, and most of them are recorded videos that few people finish. Live courses with real feedback are rarer — and they are what turn a course into a job, a freelance income or a promotion.",
    "Media 360 Academy teaches live from Kozhikode, Kerala. Teachers and reviewers are the developers, marketers and editors of Media 360 Concept, an agency that builds websites, software, AI tools, ads and video for clients. Online students anywhere in India join the same classes, build the same projects and get the same reviews as the classroom at HiLITE Business Park.",
    "Explanations are in Malayalam and English, and every note, codebase and brief is in English. The courses suit Malayalam speakers living anywhere in India, and English-speaking students who are comfortable with mixed-language classes.",
  ],
  criteria: [
    { title: "Live, with feedback", text: "Pick courses where a person reviews your work. Recorded-only courses rarely build job-ready skill." },
    { title: "AI-first syllabus", text: "Indian employers increasingly expect AI-assisted work. Every module here uses AI tools and teaches you to check them." },
    { title: "Portfolio over certificate", text: "Finish with deployed apps, real campaigns or a showreel you can send to companies in any city." },
    { title: "Practitioner teachers", text: "Ask who teaches. Here it is a working agency team, not full-time trainers only." },
    { title: "Transparent syllabus", text: "Every module, tool and project is listed on each course page before you join." },
    { title: "No placement hype", text: "Be wary of guaranteed jobs or salary figures. We offer portfolio, resume and interview preparation instead." },
  ],
  table: {
    heading: "Online course vs. recorded course",
    caption: "Live online courses at Media 360 Academy compared with typical recorded courses",
    head: ["", "Live online at Media 360 Academy", "Typical recorded course"],
    rows: [
      ["Teaching", "Live classes with a teacher, Sunday to Friday", "Pre-recorded videos"],
      ["Help when stuck", "Ask in class, get help on screen share", "Forum or email, if any"],
      ["Projects", "Agency-style briefs, reviewed by practitioners", "Follow-along exercises"],
      ["AI tools", "Used and checked in every module", "Often added as a separate topic"],
      ["Outcome", "Portfolio of deployed work + certificate", "Certificate of completion"],
    ],
  },
  picks: [],
  compact: true,
  faqs: [
    { q: "Which is the best online course in India for a job?", a: "Courses that end with a portfolio of real work: full stack development (MERN or Python) for developers, digital marketing with live campaigns for marketers, and video editing with a showreel for editors. Media 360 Academy teaches all of these live online with AI built into every module." },
    { q: "What is the best online AI course in India?", a: "For developers, a course that covers LLM APIs, RAG, agents and evaluation — Media 360 Academy's AI developer & vibe coding course does. For non-coders, generative AI for video and design, or the 3-month AI Digital Master Program." },
    { q: "What is the best online digital marketing course in India?", a: "Look for live teaching and real campaigns across SEO, Google Ads, Meta Ads and analytics. Media 360 Academy's 3-month AI Digital Master Program covers those, plus AI web development, video editing and PR." },
    { q: "Can students outside Kerala join?", a: "Yes. Classes are live online in Indian Standard Time, Sunday to Friday, morning and evening. Teaching mixes Malayalam and English, with all materials in English, so ask during counselling whether the batch suits you." },
    { q: "Where is Media 360 Academy based?", a: "At HiLITE Business Park, HiLITE City, Thondayad Bypass, Kozhikode (Calicut), Kerala 673014, India." },
  ],
  cta: { heading: "Join live from anywhere in India", text: "Free counselling on WhatsApp to find the right course and batch." },
};

/** Every "best courses" page, local to wide. */
export const BEST_PAGES: BestPage[] = [BEST_COURSES, BEST_CALICUT, BEST_KERALA, BEST_INDIA];
