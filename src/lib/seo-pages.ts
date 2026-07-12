import type { Faq } from "./schema";

/**
 * Keyword-targeted landing pages, one per search-intent cluster.
 * Every page: unique title + description, single H1, 700+ words of
 * genuinely local content, its own FAQ block, and related-page links.
 *
 * Copy rules (Google Helpful Content): write for the reader first, one
 * primary keyword cluster per page, no invented clients, prices, or reviews.
 */

export type PageSection = {
  heading: string;
  body: string[];
  bullets?: { title: string; text: string }[];
};

export type SeoPage = {
  slug: string;
  /** Primary keyword — used as internal anchor text. */
  keyword: string;
  /** Short label for footer navigation. */
  navLabel: string;
  title: string;
  description: string;
  eyebrow: string;
  h1: string;
  intro: string[];
  sections: PageSection[];
  deliverables: string[];
  faqs: Faq[];
  /** Slugs of related landing pages. */
  related: string[];
  serviceName: string;
  serviceDescription: string;
};

export const SEO_PAGES: SeoPage[] = [
  {
    slug: "branding-agency-kozhikode",
    keyword: "Branding Agency in Kozhikode",
    navLabel: "Branding Agency Kozhikode",
    title: "Branding Agency in Kozhikode, Kerala",
    description:
      "Media 360 Concept is a full-service branding agency in Kozhikode — brand strategy, identity, logo design, packaging, and campaigns for businesses across Kerala. Free consultation.",
    eyebrow: "Branding Agency · Kozhikode, Kerala",
    h1: "A Branding Agency in Kozhikode That Builds Brands Kerala Remembers",
    intro: [
      "Media 360 Concept is a full-service branding and creative agency headquartered at Business Park, Calicut (Kozhikode), working with businesses across Kerala — from restaurants and hospitals to builders, retailers, and startups. We handle the entire journey under one roof: research, brand strategy, identity design, packaging, print, signage, and the campaigns that carry it all to market.",
      "What makes us different is range with accountability. The same team that writes your positioning designs your logo, produces your signage, and launches your campaign — so nothing gets lost in handoffs, and the brand that reaches your customers is exactly the brand that was planned.",
    ],
    sections: [
      {
        heading: "What a complete branding engagement includes",
        body: [
          "Branding is more than a logo. A brand is every decision a customer uses to judge you — the name, the colours, the packaging, the shopfront, the website, the way your ads sound. A serious branding engagement covers all of it, in the right order:",
        ],
        bullets: [
          {
            title: "Brand strategy",
            text: "Market research, competitor analysis, positioning, and messaging — the decisions that tell the design what to say.",
          },
          {
            title: "Visual identity",
            text: "Logo design, colour system, typography, and brand guidelines that keep every future touchpoint consistent.",
          },
          {
            title: "Brand collateral",
            text: "Business cards, brochures, packaging, menus, signage, and vehicle branding — designed and production-managed.",
          },
          {
            title: "Launch & rollout",
            text: "Website, social profiles, and advertising that introduce the new brand to Kozhikode, Kerala, and beyond.",
          },
        ],
      },
      {
        heading: "Local insight, international discipline",
        body: [
          "Our team brings 17+ years of branding and advertising experience in Saudi Arabia, 12+ years across India, and 8+ years serving clients in the USA. That mix matters: Gulf clients demand precision and speed, Indian markets demand range and value, and both disciplines now work for businesses here in Kerala.",
          "Being based in Kozhikode means we understand how Kerala customers actually decide — how a family picks a restaurant, how a patient chooses between hospitals, how an NRI returning from the Gulf evaluates a builder. Strategy built on that understanding beats templates imported from anywhere else.",
        ],
      },
      {
        heading: "Industries we brand across Kerala",
        body: [
          "We work with restaurants and cafés, hospitals and clinics, schools and colleges, real estate and construction, retail and supermarkets, manufacturing, hospitality and resorts, luxury brands, and startups. Each industry gets strategy tailored to how its customers choose — a menu is designed differently from a hospital wayfinding system, and both are designed differently from a startup pitch identity.",
        ],
      },
      {
        heading: "How a branding project works",
        body: [
          "Every engagement follows the same disciplined path: we listen to your story and goals, research your market and competitors, agree on positioning, then design — with structured feedback rounds and a clear timeline agreed before we start. After launch, we stay on for production, campaigns, and brand support as you grow.",
        ],
      },
    ],
    deliverables: [
      "Brand strategy & positioning",
      "Logo & visual identity",
      "Brand guidelines",
      "Packaging & labels",
      "Print collateral",
      "Signage & vehicle branding",
      "Website & digital presence",
      "Launch campaigns",
    ],
    faqs: [
      {
        q: "How much does it cost to hire a branding agency in Kozhikode?",
        a: "It depends on scope. A focused logo and identity project costs far less than a complete brand system with packaging, signage, website, and campaign rollout. Media 360 Concept scopes every project individually and gives you a clear, itemised quote after a free consultation — so you pay for exactly what your business needs.",
      },
      {
        q: "What should I look for in a branding agency in Kerala?",
        a: "Look for strategy before design (research and positioning, not just a logo), a portfolio spanning your industry, in-house production capability so print and signage match what was approved on screen, and a team that communicates fast. Ask how they measure success after launch — the good ones have an answer.",
      },
      {
        q: "Do you only work with businesses in Kozhikode?",
        a: "No. Kozhikode is our headquarters, but we work with clients across Kerala — Thrissur, Kochi, Thiruvananthapuram, Kottayam — plus the rest of India, Saudi Arabia, the UAE, and the USA. Most projects run smoothly over WhatsApp, video calls, and structured review rounds.",
      },
      {
        q: "How long does a full branding project take?",
        a: "A logo and core identity typically takes a few weeks. A complete brand system — strategy, identity, guidelines, collateral, and website — usually runs six to ten weeks depending on feedback rounds and production requirements. We agree the timeline before starting, and we keep it.",
      },
      {
        q: "Can you rebrand an existing business without losing customers?",
        a: "Yes — that is what a rebrand strategy is for. We audit what equity your current brand holds, keep what customers recognise and value, and change what holds you back. The rollout is planned so regular customers experience an upgrade, not a stranger.",
      },
    ],
    related: [
      "logo-design-kozhikode",
      "brand-strategy-kerala",
      "packaging-design-kerala",
      "graphic-design-kozhikode",
    ],
    serviceName: "Branding Agency Services",
    serviceDescription:
      "Full-service branding for businesses in Kozhikode and across Kerala — brand strategy, identity design, logo design, packaging, print, signage, and launch campaigns, managed by one accountable team.",
  },
  {
    slug: "advertising-agency-kerala",
    keyword: "Advertising Agency in Kerala",
    navLabel: "Advertising Agency Kerala",
    title: "Advertising Agency in Kerala",
    description:
      "Full-service advertising agency in Kerala — creative campaigns, media planning and buying across outdoor, print, broadcast, and digital. Based in Kozhikode. Free consultation.",
    eyebrow: "Advertising Agency · Kerala",
    h1: "Advertising That Kerala Notices — and Remembers",
    intro: [
      "Media 360 Concept plans, creates, and places advertising for businesses across Kerala from our base at Business Park, Calicut (Kozhikode). One team handles the whole chain: campaign strategy, the creative idea, design and production, media buying, and the reporting that tells you what your budget actually did.",
      "Most wasted ad spend comes from the gap between the people who make the ad and the people who place it. We closed that gap by doing both — so the creative is built for the exact hoarding, newspaper, screen, or feed where it will run.",
    ],
    sections: [
      {
        heading: "Creative campaigns built on one sharp idea",
        body: [
          "Great campaigns are not ten scattered messages — they are one idea, executed everywhere. We develop the concept, art direction, and copywriting, then adapt it across every channel your customers use: outdoor hoardings on NH bypasses, print in Malayalam dailies, radio and broadcast, in-cinema, social media, and search.",
          "Because our roots are in branding, campaign creative always builds the brand while it sells — colours, voice, and story stay consistent, so every rupee of media spend also compounds into long-term recognition.",
        ],
      },
      {
        heading: "Media planning & buying across Kerala and the Gulf",
        body: [
          "We plan and negotiate media placement across Kerala's outdoor networks, leading Malayalam newspapers and magazines, TV and radio, and digital platforms — plus Gulf media for brands targeting the NRI and KSA/UAE markets, where our team has 17+ years of on-ground experience.",
          "Planning starts with your customer, not the medium: where they travel, what they read, what they watch, and when they decide. Then we negotiate rates, book placements, verify the ads actually ran, and report results — so media money is spent like it is yours.",
        ],
      },
      {
        heading: "From launch campaigns to always-on advertising",
        body: [
          "Some clients need a six-week launch blitz for a new store, project, or product. Others need an always-on presence across seasons — Onam and Vishu campaigns, admission season for schools and colleges, wedding season for jewellery and textiles. We build both, with budgets and creative calendars planned around Kerala's real buying moments.",
        ],
      },
    ],
    deliverables: [
      "Campaign strategy & concept",
      "Art direction & copywriting",
      "Outdoor & hoarding design",
      "Print & press ads",
      "Broadcast & radio spots",
      "Digital & social campaigns",
      "Media planning & buying",
      "Campaign reporting",
    ],
    faqs: [
      {
        q: "What does an advertising agency in Kerala actually do?",
        a: "A full-service agency handles strategy (who to reach and with what message), creative (the idea, design, and copy), production (print, video, digital assets), media buying (negotiating and booking hoardings, press, broadcast, and digital placements), and reporting. Media 360 Concept covers all five under one roof in Kozhikode.",
      },
      {
        q: "How much should a business budget for advertising in Kerala?",
        a: "It depends on your market, season, and goal — a shop launch in one city needs a very different budget from a state-wide brand campaign. We start from your objective, recommend a media mix with transparent rate estimates, and size the budget to the result you need rather than a fixed package.",
      },
      {
        q: "Do you handle just the creative, or the media placement too?",
        a: "Both. We develop the campaign creative and negotiate, book, and verify the media placements — outdoor, print, broadcast, and digital. Combining the two means the creative is designed for the exact placement it will occupy, and one team is accountable for the outcome.",
      },
      {
        q: "Can you run campaigns targeting Malayalis in the Gulf?",
        a: "Yes. With 17+ years of advertising experience in Saudi Arabia and work across the UAE, we plan campaigns that reach Malayali and Gulf audiences — useful for real estate, education, healthcare, and retail brands whose customers earn in the Gulf and spend in Kerala.",
      },
      {
        q: "How quickly can a campaign go live?",
        a: "A focused digital campaign can be live within days. Campaigns involving outdoor production, print schedules, or broadcast slots typically need two to four weeks for creative, approvals, production, and booking. We plan backwards from your launch date and commit to the timeline in writing.",
      },
    ],
    related: [
      "branding-agency-kozhikode",
      "digital-marketing-kozhikode",
      "graphic-design-kozhikode",
      "brand-strategy-kerala",
    ],
    serviceName: "Advertising & Media Buying",
    serviceDescription:
      "Creative advertising campaigns with media planning and buying across outdoor, print, broadcast, and digital channels in Kerala, India, and the Gulf — strategy, creative, placement, and reporting by one team.",
  },
  {
    slug: "logo-design-kozhikode",
    keyword: "Logo Design in Kozhikode",
    navLabel: "Logo Design Kozhikode",
    title: "Logo Design in Kozhikode, Kerala",
    description:
      "Professional logo design in Kozhikode by Media 360 Concept — strategy-led logo designers creating identities Kerala businesses are proud of. Concepts, revisions, all files, brand guidelines.",
    eyebrow: "Logo Design · Kozhikode, Kerala",
    h1: "Logo Design That Makes Kerala Businesses Instantly Recognisable",
    intro: [
      "Your logo is the hardest-working asset your business owns. It sits on your shopfront, your packaging, your invoices, your WhatsApp display picture, and — if it is designed well — in your customers' memory. Media 360 Concept designs logos in Kozhikode for businesses across Kerala that want to be recognised at a glance and impossible to confuse with a competitor.",
      "We are logo designers who start with strategy, not clip-art. Every mark we draw comes out of research into your market, your competitors, and the story only you can tell.",
    ],
    sections: [
      {
        heading: "What separates a professional logo from a cheap one",
        body: [
          "A professional logo is designed as a system, not a picture. It must work embroidered on a uniform, printed single-colour on a bill, glowing on a signboard at night, and shrunk to a favicon — without falling apart. It must look right next to Malayalam and English type, because in Kerala it will live beside both.",
          "Template logos and ₹500 downloads fail exactly here: they look fine on a phone screen and break everywhere else, and legally you often do not even own them. A professionally designed logo is original, versatile, and yours.",
        ],
      },
      {
        heading: "What's included in a logo design project",
        body: [],
        bullets: [
          {
            title: "Research & direction",
            text: "Competitor scan and a creative brief agreed with you before any sketching begins.",
          },
          {
            title: "Original concepts",
            text: "Multiple distinct logo directions to react to — not variations of one idea.",
          },
          {
            title: "Refinement rounds",
            text: "Structured revisions on your chosen direction until the mark is right.",
          },
          {
            title: "Every file you'll ever need",
            text: "Vector masters (AI/EPS/SVG), print-ready PDFs, and web/social formats (PNG/JPG) in colour, black, and white.",
          },
          {
            title: "Usage guidelines",
            text: "Clear rules for spacing, sizing, colours, and typography so the logo stays consistent wherever it goes.",
          },
        ],
      },
      {
        heading: "Logo design or full brand identity?",
        body: [
          "A logo is the signature; the identity is the handwriting. If you are launching something new or repositioning seriously, consider the full identity — logo plus colour palette, typography, patterns, and collateral — so everything your customer touches feels like one brand. If you need just the mark, we design it so the wider identity can grow around it later without a restart.",
        ],
      },
    ],
    deliverables: [
      "Logo concepts & refinement",
      "Vector master files",
      "Print & digital formats",
      "Colour & mono versions",
      "Usage guidelines",
      "Stationery design",
      "Social media kit",
      "Full brand identity (optional)",
    ],
    faqs: [
      {
        q: "How much does logo design cost in Kozhikode?",
        a: "Logo design pricing depends on the depth of research, the number of concepts, and what is bundled — a standalone mark costs less than a logo with stationery, social kit, and brand guidelines. We quote a fixed price for a defined scope after a free consultation, so there are no surprises mid-project.",
      },
      {
        q: "How long does a logo design project take?",
        a: "Most logo projects at Media 360 Concept complete within two to four weeks: research and briefing first, concepts around a week later, then one or two structured refinement rounds. Faster timelines are possible when a launch date demands it — tell us the date and we plan backwards.",
      },
      {
        q: "How many logo concepts will I see?",
        a: "You will see multiple genuinely different directions — different ideas, not one idea in three colours. We present each with the thinking behind it, then refine the direction you choose. The goal is a confident decision, not an overwhelming pile of options.",
      },
      {
        q: "Which files will I receive, and do I own the logo?",
        a: "You receive the complete package: editable vector masters (AI, EPS, SVG), print-ready PDFs, and web formats (PNG, JPG) in full-colour, black, and white versions. Once the project is paid for, the logo is fully yours — including the source files many designers withhold.",
      },
      {
        q: "Can you redesign our existing logo without losing recognition?",
        a: "Yes. A logo refresh keeps the equity customers already recognise — a shape, a colour, a name style — and modernises what dates it. We start by auditing what is working, so the new mark reads as an evolution your regulars trust, not a replacement they don't.",
      },
    ],
    related: [
      "branding-agency-kozhikode",
      "brand-strategy-kerala",
      "graphic-design-kozhikode",
      "packaging-design-kerala",
    ],
    serviceName: "Logo Design",
    serviceDescription:
      "Strategy-led logo design in Kozhikode for businesses across Kerala — original concepts, structured refinement, complete file packages, and usage guidelines from professional logo designers.",
  },
  {
    slug: "packaging-design-kerala",
    keyword: "Package Design in Kerala",
    navLabel: "Package Design Kerala",
    title: "Package & Label Design in Kerala",
    description:
      "Package design and label design in Kerala by Media 360 Concept, Kozhikode — shelf-winning packaging for food, spices, ayurveda, FMCG, and export brands. Design to print-ready production.",
    eyebrow: "Packaging & Labels · Kerala",
    h1: "Package Design That Wins the Three Seconds on the Shelf",
    intro: [
      "On a supermarket shelf in Kozhikode, your product gets about three seconds of a customer's attention. Packaging either earns the pick-up in those seconds or disappears into the row. Media 360 Concept designs packaging and labels in Kerala that win that moment — and keep the promise after the product is home.",
      "We take packaging from brand strategy to print-ready artwork: structure, dieline, label layout, compliance text, and production supervision, so what ships is exactly what was approved.",
    ],
    sections: [
      {
        heading: "Packaging for the products Kerala makes",
        body: [
          "Kerala's shelves — and its exports — have their own character, and we design for it: spices and condiments, tea and coffee, banana chips and bakery, seafood and frozen foods, ayurveda and wellness, coconut products, FMCG, and cosmetics. Export packaging gets special attention: what reads as premium in a Kozhikode supermarket, a Gulf hypermarket, and a US ethnic store are three different things, and your packaging can be designed to work in all three.",
        ],
      },
      {
        heading: "Labels that sell — and comply",
        body: [
          "A label carries two jobs at once: the front sells, the back complies. We design label systems that make your brand unmistakable on the front while handling the mandatory declarations Indian food and consumer products need — FSSAI details, net quantity, MRP, batch and date formats, ingredient panels, and barcodes — laid out cleanly so compliance never looks like clutter.",
          "For product ranges, we build label systems, not one-offs: a structure where every variant and SKU is clearly differentiated yet obviously one family, so your shelf presence grows stronger with every new product.",
        ],
      },
      {
        heading: "From dieline to delivered carton",
        body: [],
        bullets: [
          {
            title: "Structure & dieline",
            text: "Box, pouch, bottle, or jar — we design on the real dieline so artwork fits the physical pack perfectly.",
          },
          {
            title: "3D mockups before print",
            text: "Photorealistic renders let you approve the pack from every angle before a single unit is produced.",
          },
          {
            title: "Print-ready artwork",
            text: "Colour-managed, bleed-correct files prepared for your printer's exact process — offset, flexo, or digital.",
          },
          {
            title: "Production supervision",
            text: "We coordinate with the press so the colours approved on screen are the colours on the shelf.",
          },
        ],
      },
    ],
    deliverables: [
      "Packaging concept & design",
      "Label design & systems",
      "Dieline & structural layout",
      "3D pack mockups",
      "Compliance panel layout",
      "Print-ready artwork",
      "Range & SKU extensions",
      "Production coordination",
    ],
    faqs: [
      {
        q: "How much does package design cost in Kerala?",
        a: "It depends on the format (label, pouch, carton, or full structural design), the number of SKUs, and whether brand identity work is needed first. A single label costs far less than a packaging system for a ten-product range. We scope per project and quote a fixed price after a free consultation.",
      },
      {
        q: "Do you design labels that meet FSSAI and legal requirements?",
        a: "We lay out all mandatory declarations — FSSAI license number, net quantity, MRP, dates, ingredient and nutrition panels, barcodes — cleanly within the design, following your regulatory consultant's or food technologist's approved text. Design and compliance work together instead of fighting for space.",
      },
      {
        q: "Can you handle printing as well as design?",
        a: "Yes. We prepare print-ready, colour-managed artwork and coordinate directly with printers and converters — offset, flexo, or digital — supervising proofs so the delivered pack matches the approved design. You can use your existing printer or ours.",
      },
      {
        q: "Do you design export packaging?",
        a: "Yes — export packaging is a Kerala strength and one of ours. We design packs for Gulf, US, and European markets, considering language panels, cultural colour readings, and the retail environments where the product will actually sit. Our team's 17+ years in Saudi Arabia helps here directly.",
      },
      {
        q: "How long does a packaging project take?",
        a: "A single label typically takes one to two weeks; a full packaging design with structure, 3D mockups, and print-ready artwork usually runs three to six weeks depending on feedback rounds. Add printer proofing time before products ship — we plan the full calendar with you at the start.",
      },
    ],
    related: [
      "branding-agency-kozhikode",
      "logo-design-kozhikode",
      "graphic-design-kozhikode",
      "brand-strategy-kerala",
    ],
    serviceName: "Package & Label Design",
    serviceDescription:
      "Packaging and label design in Kerala — shelf-winning packs for food, spice, ayurveda, FMCG, and export brands, from brand strategy and dieline to compliance layout and print-ready production.",
  },
  {
    slug: "digital-marketing-kozhikode",
    keyword: "Digital Marketing in Kozhikode",
    navLabel: "Digital Marketing Kozhikode",
    title: "Digital Marketing & SEO Company in Kozhikode",
    description:
      "Digital marketing company in Kozhikode — SEO, Google Business Profile, social media, and performance ads that turn searches into enquiries for Kerala businesses. Free consultation.",
    eyebrow: "Digital Marketing · Kozhikode, Kerala",
    h1: "Digital Marketing in Kozhikode That Turns Searches Into Sales",
    intro: [
      "When someone in Kerala needs what you sell, they search, scroll, or ask — on Google, Instagram, YouTube, or WhatsApp. Media 360 Concept is a digital marketing and SEO company in Kozhikode that makes sure your business is what they find, and that finding you leads to an enquiry, not just a visit.",
      "We run full-funnel digital marketing: search visibility to bring people in, content and social to build trust, performance ads to accelerate, and tracking so you always know what your budget returned.",
    ],
    sections: [
      {
        heading: "SEO that wins local searches",
        body: [
          "Most high-intent searches in Kerala are local — \"near me\", \"in Kozhikode\", \"in Thrissur\". As an SEO company in Kozhikode, we optimise for exactly those moments: technical SEO so Google can crawl and trust your site, content that answers what your customers actually ask, local SEO and Google Business Profile optimisation so you appear in the Map Pack, and clean structured data so search engines — and AI assistants — understand your business precisely.",
          "SEO is a compounding investment: the rankings you earn keep sending customers without paying per click. We report positions, traffic, and enquiries monthly, in plain language.",
        ],
      },
      {
        heading: "Social media that builds preference",
        body: [
          "Kerala lives on Instagram, YouTube, Facebook, and WhatsApp. We plan and produce content calendars that fit your brand voice — reels, stories, carousels, and campaigns in English and Malayalam — and manage the daily publishing, engagement, and reporting. Because we are a branding agency first, your social presence stays visually consistent with everything else your customers see.",
        ],
      },
      {
        heading: "Performance marketing with honest measurement",
        body: [
          "Google Ads for the moments customers are searching, Meta ads for the moments they are scrolling, remarketing to bring them back — set up with proper conversion tracking so we optimise for enquiries and orders, not vanity clicks. Landing pages are designed and built in-house, which is usually where the biggest conversion gains hide.",
          "Every rupee is tracked from click to WhatsApp message, call, or form. If a channel is not paying for itself, we tell you and move the budget.",
        ],
      },
    ],
    deliverables: [
      "SEO audit & strategy",
      "Technical & on-page SEO",
      "Google Business Profile",
      "Content & blog writing",
      "Social media management",
      "Google & Meta ads",
      "Landing pages",
      "Analytics & reporting",
    ],
    faqs: [
      {
        q: "How long does SEO take to show results in Kozhikode?",
        a: "For most Kerala businesses, meaningful movement shows in three to four months, with strong results in six to twelve depending on competition. Local SEO — Map Pack visibility via Google Business Profile — often moves faster. Anyone promising page one in two weeks is describing an ad, or a trick that won't survive Google's next update.",
      },
      {
        q: "Should I invest in SEO or paid ads first?",
        a: "Usually both, in different proportions over time. Ads buy immediate visibility while SEO compounds; as rankings grow, organic enquiries reduce your dependence on ad spend. We size the split around your urgency, margins, and competition — and show the numbers behind the recommendation.",
      },
      {
        q: "What does digital marketing cost per month in Kozhikode?",
        a: "Retainers depend on scope: SEO only, social only, or a full program with content, ads, and landing pages. Ad spend is separate and goes to Google or Meta directly, in your own accounts. After a free consultation we propose a scope and fixed monthly fee — transparent, itemised, cancellable.",
      },
      {
        q: "Do you manage Google Business Profile for local businesses?",
        a: "Yes — GBP is the single highest-impact asset for local visibility in Kerala. We set up or clean the profile, optimise categories, services, photos, and posts, keep NAP details consistent everywhere, and build a review-generation habit so your profile earns the Map Pack position it deserves.",
      },
      {
        q: "Can you create content in Malayalam as well as English?",
        a: "Yes. We produce bilingual content — social posts, ad copy, and campaign creative in Malayalam and English — matched to where each audience actually is. For many Kerala businesses, Malayalam content dramatically outperforms English on Meta platforms; we test both and follow the data.",
      },
    ],
    related: [
      "web-development-kozhikode",
      "advertising-agency-kerala",
      "branding-agency-kozhikode",
      "ui-ux-design-kozhikode",
    ],
    serviceName: "Digital Marketing & SEO",
    serviceDescription:
      "Full-funnel digital marketing in Kozhikode — SEO, Google Business Profile optimisation, social media management, and performance advertising with honest, enquiry-level measurement for Kerala businesses.",
  },
  {
    slug: "web-development-kozhikode",
    keyword: "Web Development in Kozhikode",
    navLabel: "Web Development Kozhikode",
    title: "Web Development & Website Design in Kozhikode",
    description:
      "Web development company in Kozhikode — fast, SEO-ready websites and web apps designed in Figma and engineered for Core Web Vitals. Website design for businesses across Kerala.",
    eyebrow: "Web Development · Kozhikode, Kerala",
    h1: "Websites Built to Rank, Load, and Convert",
    intro: [
      "Your website is the one salesperson that meets every customer. Media 360 Concept designs and develops websites in Kozhikode for businesses across Kerala — sites that load fast on real Kerala mobile networks, rank on Google for the searches that matter, and turn visitors into WhatsApp messages, calls, and orders.",
      "Every build follows the same discipline: designed in Figma first so you approve exactly what will be built, then engineered on modern architecture with SEO and Core Web Vitals treated as requirements, not afterthoughts.",
    ],
    sections: [
      {
        heading: "What we design and build",
        body: [],
        bullets: [
          {
            title: "Business websites",
            text: "Corporate and service-business sites structured so Google — and your customers — instantly understand what you offer.",
          },
          {
            title: "E-commerce",
            text: "Online stores with clean product architecture, payments, and the speed that keeps carts from being abandoned.",
          },
          {
            title: "Landing pages",
            text: "Campaign-specific pages built to convert ad traffic — the difference between paying for clicks and paying for customers.",
          },
          {
            title: "Web applications",
            text: "Custom platforms, dashboards, and portals engineered around your workflow — with CRM, ERP, and API integrations.",
          },
          {
            title: "Mobile apps",
            text: "iOS, Android, and cross-platform builds that extend your brand into your customers' pockets.",
          },
        ],
      },
      {
        heading: "Website design that carries your brand",
        body: [
          "As a branding agency, we design websites the way we design identities: your typography, colours, and voice, translated into an interface that feels premium and works effortlessly. Design happens in Figma with real content, reviewed with you screen by screen — so development is execution, not guesswork.",
        ],
      },
      {
        heading: "Engineered for Google from the first commit",
        body: [
          "Every site ships with the technical SEO layer most builds skip: semantic HTML, structured data, per-page metadata, sitemaps, image optimisation, and Core Web Vitals performance budgets. This page — and this site — is built exactly that way; we practise what we sell.",
          "After launch we can run the growth side too: SEO, content, and campaigns, with hosting, maintenance, and support handled by the same team that built the site.",
        ],
      },
    ],
    deliverables: [
      "Figma design & prototypes",
      "Business & corporate sites",
      "E-commerce stores",
      "Landing pages",
      "Web applications",
      "Mobile app development",
      "Technical SEO setup",
      "Hosting & maintenance",
    ],
    faqs: [
      {
        q: "How much does a website cost in Kozhikode?",
        a: "It depends on scope: a focused landing page, a multi-page business site, an e-commerce store, and a custom web application are very different builds. After a free consultation we quote a fixed price for a defined scope — with design, development, SEO setup, and launch itemised so you can see exactly what you are paying for.",
      },
      {
        q: "How long does it take to build a website?",
        a: "A landing page can ship in one to two weeks. A business website typically takes three to six weeks including Figma design and content; e-commerce and custom applications run longer depending on features. We fix the timeline with you before starting.",
      },
      {
        q: "Will my website rank on Google?",
        a: "Every site we build ships search-ready: clean semantic structure, fast Core Web Vitals, structured data, metadata, and sitemaps. Ranking against competitors then depends on content and authority over time — which our SEO retainers handle. Search-ready engineering is included; ongoing SEO is a service you can add.",
      },
      {
        q: "Can you redesign my existing website without losing my Google rankings?",
        a: "Yes — a redesign done properly protects rankings with URL mapping, 301 redirects, and content preserved or improved page by page. We audit what currently ranks before touching anything, so the new site starts from your equity instead of from zero.",
      },
      {
        q: "Do you provide maintenance and support after launch?",
        a: "Yes. We offer hosting, updates, backups, security patching, and content changes under simple support arrangements — and because the same team built the site, fixes and improvements happen fast, over WhatsApp, without re-explaining anything.",
      },
    ],
    related: [
      "ui-ux-design-kozhikode",
      "digital-marketing-kozhikode",
      "branding-agency-kozhikode",
      "logo-design-kozhikode",
    ],
    serviceName: "Web Development & Website Design",
    serviceDescription:
      "Website design and web development in Kozhikode — fast, SEO-ready business sites, e-commerce, landing pages, and web applications designed in Figma and engineered for Core Web Vitals.",
  },
  {
    slug: "brand-strategy-kerala",
    keyword: "Brand Strategy in Kerala",
    navLabel: "Brand Strategy Kerala",
    title: "Brand Strategy Consultants in Kerala",
    description:
      "Brand strategy in Kerala by Media 360 Concept, Kozhikode — research, positioning, naming, and messaging that give your brand a plan before a single pixel is designed.",
    eyebrow: "Brand Strategy · Kerala",
    h1: "Brand Strategy for Kerala Businesses That Plan to Lead",
    intro: [
      "Design without strategy is decoration. Before a logo is sketched or a campaign is written, someone has to decide what your brand stands for, who it serves, why it wins, and what it should never say. That work is brand strategy — and it is the highest-leverage money a growing Kerala business can spend on its brand.",
      "Media 360 Concept builds brand strategy from Kozhikode for businesses across Kerala and the Gulf: research-backed, written down, and practical enough that every designer, marketer, and salesperson can act on it.",
    ],
    sections: [
      {
        heading: "What brand strategy actually covers",
        body: [],
        bullets: [
          {
            title: "Market & competitor research",
            text: "Who you are really competing with, what they claim, and where the credible open space is.",
          },
          {
            title: "Positioning",
            text: "The single clear answer to \"why choose you\" — specific enough to guide every decision that follows.",
          },
          {
            title: "Naming",
            text: "Names for companies, products, and ranges that are memorable, meaningful, pronounceable in Malayalam and English, and available.",
          },
          {
            title: "Messaging & voice",
            text: "Taglines, key messages, and a tone of voice that sounds like you everywhere — from hoardings to WhatsApp replies.",
          },
          {
            title: "Brand architecture",
            text: "How your brands, sub-brands, and product lines relate — critical for family businesses and groups that have grown organically.",
          },
        ],
      },
      {
        heading: "When a business needs brand strategy",
        body: [
          "The trigger moments are predictable: launching a new venture, rebranding one that has outgrown its image, expanding to new markets or a second generation of leadership, facing a new competitor who suddenly looks more modern, or bringing a Gulf-earned business ambition home to Kerala. In each case, strategy answers the questions design alone cannot.",
          "Our vantage point helps: 17+ years serving brands in Saudi Arabia, 12+ across India, and 8+ in the USA, applied to how Kerala's customers, communities, and buying decisions actually work.",
        ],
      },
      {
        heading: "What you receive",
        body: [
          "Strategy engagements end with a working document, not a lecture: research findings, the positioning decision and its reasoning, naming (when in scope), messaging and voice guidelines, and clear direction for identity design and campaigns. Most clients continue into identity and rollout with us; the strategy is written so any competent team could execute it.",
        ],
      },
    ],
    deliverables: [
      "Market & competitor research",
      "Customer insight",
      "Positioning & value proposition",
      "Brand naming",
      "Tagline & messaging",
      "Tone of voice guidelines",
      "Brand architecture",
      "Go-to-market direction",
    ],
    faqs: [
      {
        q: "What is brand strategy, in plain terms?",
        a: "Brand strategy is the set of decisions that define what your brand stands for: who it serves, why it wins against competitors, what it promises, how it speaks, and what it looks like at the highest level. It is the plan that makes every later decision — logo, website, campaign — consistent and effective.",
      },
      {
        q: "How is brand strategy different from brand identity?",
        a: "Strategy decides; identity expresses. Strategy is the thinking — research, positioning, messaging. Identity is the visible result — logo, colours, typography, design. Identity built without strategy is guesswork that looks good; strategy without identity is a document nobody sees. Strong brands need both, in that order.",
      },
      {
        q: "Does a small business in Kerala really need brand strategy?",
        a: "Small businesses arguably need it most, because every rupee has to work harder. Strategy at small scale is lighter — sharper research, faster decisions — but answering \"why should someone choose us\" before spending on design and marketing routinely saves multiples of its cost in redone work and wasted ads.",
      },
      {
        q: "How long does a brand strategy engagement take?",
        a: "A focused strategy sprint for a small business takes two to three weeks. Full engagements with research interviews, naming, and brand architecture typically run four to eight weeks. We agree the scope and calendar upfront, and strategy can run in parallel with early identity exploration.",
      },
      {
        q: "Can you help name a new company or product?",
        a: "Yes — naming is part of our strategy practice. We develop names that carry meaning, survive Malayalam and English pronunciation, stand out in your category, and pass practical checks like domain and trademark screening (with your legal advisor handling formal registration).",
      },
    ],
    related: [
      "branding-agency-kozhikode",
      "logo-design-kozhikode",
      "advertising-agency-kerala",
      "packaging-design-kerala",
    ],
    serviceName: "Brand Strategy",
    serviceDescription:
      "Brand strategy consulting in Kerala — market research, positioning, naming, messaging, and brand architecture that give businesses a written, actionable plan before design begins.",
  },
  {
    slug: "ui-ux-design-kozhikode",
    keyword: "UI/UX Design in Kozhikode",
    navLabel: "UI/UX Design Kozhikode",
    title: "UI/UX Design Company in Kozhikode",
    description:
      "UI/UX design in Kozhikode by Media 360 Concept — research-driven interface design in Figma for websites, apps, and SaaS products. Wireframes, prototypes, design systems, dev-ready handoff.",
    eyebrow: "UI/UX Design · Kozhikode, Kerala",
    h1: "UI/UX Design That Makes Digital Products Feel Effortless",
    intro: [
      "Users do not read interfaces — they feel them. A product that feels effortless earns trust in seconds; one that feels confusing loses the customer before the first feature is seen. Media 360 Concept is a UI/UX design team in Kozhikode crafting websites, mobile apps, dashboards, and SaaS products that people understand instantly and enjoy using.",
      "Our process is research-driven and built entirely in Figma: real user flows, wireframes, interactive prototypes, and pixel-perfect design systems your developers can build from without a single guess.",
    ],
    sections: [
      {
        heading: "UX first: design decisions backed by evidence",
        body: [
          "Before screens are drawn, we map how your users actually think: what they came to do, what they know, where they hesitate, and what convinces them. User flows and wireframes get the logic right cheaply — moving a step in a flow costs minutes in Figma and weeks in code. Only when the skeleton works do we dress it.",
        ],
      },
      {
        heading: "UI that carries your brand into the product",
        body: [
          "Interface design is brand design under constraints. We translate your identity — type, colour, voice — into interface language: component styles, spacing rhythm, motion, and states that feel unmistakably yours while staying fast and accessible. Because we are a branding agency, the app your customers use and the hoardings they pass feel like one company.",
        ],
      },
      {
        heading: "Figma systems developers actually thank you for",
        body: [],
        bullets: [
          {
            title: "Component libraries",
            text: "Reusable components with variants and states — buttons, forms, cards — so screens stay consistent as the product grows.",
          },
          {
            title: "Interactive prototypes",
            text: "Clickable flows for stakeholder sign-off and user testing before any code is written.",
          },
          {
            title: "Dev-ready specs",
            text: "Tokens, spacing, and behaviour documented so what gets built is exactly what was designed.",
          },
          {
            title: "Design systems",
            text: "For growing products: a living system that keeps ten future screens as consistent as the first ten.",
          },
        ],
      },
      {
        heading: "Accessible by default",
        body: [
          "Good UX includes everyone: readable contrast, touch targets that work for real thumbs, keyboard navigation, and screen-reader-sensible structure. Accessibility widens your audience, protects your brand, and — as search engines increasingly measure experience — helps you rank.",
        ],
      },
    ],
    deliverables: [
      "UX research & user flows",
      "Wireframes",
      "Interactive prototypes",
      "UI design in Figma",
      "Component libraries",
      "Design systems",
      "Developer handoff specs",
      "Usability review",
    ],
    faqs: [
      {
        q: "What is the difference between UI and UX design?",
        a: "UX (user experience) is how the product works: the flows, structure, and logic that get a user from intent to done. UI (user interface) is how it looks and feels: layout, colour, typography, and interaction details. UX makes it usable; UI makes it desirable. We design both, in that order.",
      },
      {
        q: "What does a UI/UX project cost in Kozhikode?",
        a: "It depends on the number of screens and flows, whether research and prototyping are in scope, and whether you need a full design system or a focused redesign. We scope per project after a free consultation and quote a fixed price, so design costs are known before development budgeting.",
      },
      {
        q: "Can you work with our existing development team?",
        a: "Yes — much of our UI/UX work ships to in-house or external developers. Handoff includes organised Figma files, components with variants, spacing and token specs, and behaviour notes, plus a walkthrough call. We stay available during development for the questions that always come up.",
      },
      {
        q: "Can you redesign an existing app or website?",
        a: "Yes. Redesigns start with an audit: analytics, drop-off points, and a usability review to find where users struggle. We then fix the experience in priority order — often keeping what works — so the redesign improves results instead of just changing the look.",
      },
      {
        q: "Do you also build what you design?",
        a: "We can. Our web and app development team builds directly from our own Figma systems, which removes the classic design-to-development quality gap. You can take our design files to any developer, or have one accountable team design and build the product end to end.",
      },
    ],
    related: [
      "web-development-kozhikode",
      "brand-strategy-kerala",
      "digital-marketing-kozhikode",
      "branding-agency-kozhikode",
    ],
    serviceName: "UI/UX Design",
    serviceDescription:
      "Research-driven UI/UX design in Kozhikode — user flows, wireframes, interactive prototypes, and pixel-perfect Figma design systems for websites, mobile apps, dashboards, and SaaS products.",
  },
  {
    slug: "graphic-design-kozhikode",
    keyword: "Graphic Design in Kozhikode",
    navLabel: "Graphic Design Kozhikode",
    title: "Graphic Design Company in Kozhikode, Kerala",
    description:
      "Graphic design company in Kozhikode — brochures, catalogues, menus, signage, vehicle branding, and every print deliverable, designed and production-managed by Media 360 Concept.",
    eyebrow: "Graphic Design · Kozhikode, Kerala",
    h1: "Graphic Design for Print, Signage & Everything In Between",
    intro: [
      "Long after a website is closed, print stays in the room: the brochure on the table, the menu in the customer's hands, the signboard over the street, the van carrying your name through Kozhikode traffic. Media 360 Concept is a graphic design company in Kozhikode that designs — and production-manages — every physical expression of your brand.",
      "One team, one visual standard: whether it is a business card or a building facade, the colours, type, and finish all say the same brand.",
    ],
    sections: [
      {
        heading: "Print design that earns its keep",
        body: [
          "We design brochures, company profiles, catalogues, booklets, flyers, posters, business cards, letterheads, restaurant menus, invitations, and packaging — with real editorial hierarchy, sharp copy, and print-perfect finishing. Print is unforgiving: there is no update button after a thousand copies. Our production experience means bleeds, colour profiles, paper choices, and finishes are decided before the press runs, not after.",
        ],
      },
      {
        heading: "Signage & vehicle branding across Kerala",
        body: [
          "Your signboard is the hardest-working ad you own — it sells every day, all day, at the exact place customers decide to walk in. We design and manage shopfront signage, LED and ACP boards, wayfinding systems for hospitals and campuses, exhibition stalls, and large-format hoardings, along with vehicle branding that turns delivery vans and fleet cars into moving media across Kerala's roads.",
          "Design is specified for real conditions: viewing distance, night visibility, monsoon-grade materials, and installation — so the sign that goes up matches the mockup and lasts.",
        ],
      },
      {
        heading: "Brand consistency, deliverable after deliverable",
        body: [
          "Anyone can make one good-looking flyer. The hard part is the fiftieth deliverable still looking like the first. Working from your brand guidelines — or building them if they do not exist — we keep every menu, banner, T-shirt, sticker, and stall design unmistakably consistent, which is what turns spending on design into equity in a brand.",
        ],
      },
    ],
    deliverables: [
      "Brochures & company profiles",
      "Catalogues & booklets",
      "Business cards & stationery",
      "Restaurant menus",
      "Flyers & posters",
      "Shopfront signage",
      "Vehicle branding",
      "Exhibition & stall design",
    ],
    faqs: [
      {
        q: "What graphic design services do you offer in Kozhikode?",
        a: "Everything printed or fabricated: brochures, catalogues, company profiles, booklets, flyers, posters, business cards, letterheads, menus, packaging, stickers, T-shirt and merchandise design, shopfront signage, wayfinding, exhibition stalls, hoardings, and vehicle branding — designed and production-managed by one team.",
      },
      {
        q: "Do you handle printing and installation, or only design?",
        a: "Both. We prepare print-ready artwork and manage production with trusted printers and signage fabricators — supervising proofs, materials, and installation — so what gets delivered matches what you approved. You may also take our press-ready files to your own vendor.",
      },
      {
        q: "How fast can you deliver print or signage work?",
        a: "Simple items like flyers and business cards can be designed within days. Brochures and catalogues typically take one to three weeks depending on content; signage and vehicle branding add fabrication and installation time. Tell us your deadline first — we plan production backwards from it.",
      },
      {
        q: "Can you match new designs to our existing brand?",
        a: "Yes. If you have brand guidelines, we follow them precisely. If you do not, we can reverse-engineer a consistent standard from your existing materials — or take the opportunity to formalise proper guidelines so every future deliverable, from any vendor, stays on brand.",
      },
      {
        q: "Do you design for events and exhibitions?",
        a: "Yes — exhibition stalls, backdrops, standees, banners, invitations, badges, and the full kit an event needs, designed as one coherent brand experience. We also handle event branding end to end with our events and activation team, including production and on-site setup.",
      },
    ],
    related: [
      "branding-agency-kozhikode",
      "packaging-design-kerala",
      "logo-design-kozhikode",
      "advertising-agency-kerala",
    ],
    serviceName: "Graphic Design",
    serviceDescription:
      "Graphic design in Kozhikode for print, signage, and vehicle branding — brochures, catalogues, menus, shopfront signage, and large-format work, designed and production-managed under one roof.",
  },
];

export const getSeoPage = (slug: string) =>
  SEO_PAGES.find((page) => page.slug === slug);
