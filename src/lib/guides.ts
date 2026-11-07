import type { Faq } from "./schema";
import type { PageSection } from "./seo-pages";

/**
 * Educational guides that support the digital marketing cluster.
 * Facts come from public sources (Google's own documentation, Indian tax rules);
 * no invented prices, client results or statistics. Bump `updated` on real edits only.
 */
export type Guide = {
  slug: string;
  title: string;
  /** Short label for link lists and breadcrumbs. */
  short: string;
  description: string;
  h1: string;
  /** 40–60-word direct answer. */
  answer: string;
  chips: string[];
  published: string;
  updated: string;
  sections: PageSection[];
  faqs: Faq[];
  /** Slugs of related service pages. */
  related: string[];
};

export const GUIDES: Guide[] = [
  {
    slug: "digital-marketing-cost-kerala",
    title: "Digital Marketing Cost in Kerala: What You Pay For",
    short: "Digital Marketing Cost in Kerala",
    description:
      "What digital marketing costs in Kerala depends on scope. See what sits inside a quote, what drives the price up, and how to compare two agencies fairly.",
    h1: "Digital Marketing Cost in Kerala: What You Are Actually Paying For",
    answer:
      "Digital marketing cost in Kerala has two parts: the agency's fee for planning and doing the work, and media spend paid to platforms like Google and Meta. The total depends on channels, competition, content volume and how fast you need results, so compare itemised scopes rather than headline package prices.",
    chips: ["Agency fee", "Ad spend", "GST", "Content", "Scope"],
    published: "2026-11-07",
    updated: "2026-11-07",
    sections: [
      {
        heading: "The two parts of every marketing budget",
        body: [
          "The first part is the fee: the people who plan campaigns, write copy, design creative, fix your website and report results. The second is media spend: the money that goes to Google, Meta or YouTube to show your ads. These are separate costs, and a good quote shows them separately.",
          "Be careful with any package that bundles the two into one number. You cannot see how much of your money reached the platform, and you may not own the account it ran in. Our own rule is that ad spend goes directly to Google or Meta from an account in your business's name.",
        ],
      },
      {
        heading: "What sets the price",
        body: ["Two businesses on the same street can need very different budgets. These are the factors that change a quote."],
        table: {
          head: ["Factor", "Costs less when", "Costs more when"],
          rows: [
            ["Number of channels", "One focused channel", "SEO, social and ads together"],
            ["Competition", "Few businesses bidding or ranking", "Crowded sectors such as hospitals, real estate and education"],
            ["Website condition", "Fast site with clear pages", "New pages or a rebuild needed first"],
            ["Content volume", "A few posts or pages a month", "Weekly video shoots and many creatives"],
            ["Languages", "One language", "English, Malayalam and Gulf audiences"],
            ["Tracking", "Already set up and accurate", "Needs to be built from nothing"],
          ],
        },
      },
      {
        heading: "What to look for inside a quote",
        body: [],
        bullets: [
          { title: "Named deliverables", text: "Pages, posts, videos and campaigns per month, written down." },
          { title: "Who does the work", text: "In-house staff or outsourced, and who your contact is." },
          { title: "Account ownership", text: "Ad accounts, analytics, domain and pages in your name." },
          { title: "Reporting", text: "A sample report showing leads and cost per lead." },
          { title: "Exit terms", text: "Notice period and handover of files and access." },
          { title: "Taxes", text: "Whether GST is included. Agency fees in India generally attract 18% GST, so check the quote." },
        ],
      },
      {
        heading: "How to compare two agency quotes",
        body: [
          "Put both quotes side by side and remove the ad spend. Then compare what each one delivers for the fee. A cheaper quote with fewer deliverables, or no tracking, can cost more in the end if you cannot tell what worked.",
          "Very low monthly prices deserve one simple question: what exactly will be done this month, and by whom? Clear answers matter more than the number. Our [checklist for choosing an agency in Calicut](/best-digital-marketing-agency-in-calicut) lists the questions to ask.",
        ],
      },
      {
        heading: "Where to spend first with a small budget",
        body: [
          "If money is tight, start where intent is highest. Claim and complete your [Google Business Profile](/local-seo-google-business-profile-kozhikode), since it costs nothing to set up. Next, make sure one good landing page exists and that calls and WhatsApp clicks are tracked. Only then add paid ads or a content calendar.",
          "Spreading a small budget across five channels usually means none of them gets enough attention to work. Doing one or two properly gives you real numbers to decide what comes next.",
        ],
      },
      {
        heading: "Why we do not publish a price list",
        body: [
          "A fixed price list would be wrong for most businesses, because the scope above changes so much. Instead we run a free audit and send an itemised quote with a clear scope. [Talk to our digital marketing agency in Calicut](/digital-marketing-kozhikode) and we will tell you what we would do first, and what we would leave out.",
        ],
      },
    ],
    faqs: [
      {
        q: "Is ad spend included in an agency's digital marketing fee?",
        a: "It should not be. The agency fee pays for planning and management, and ad spend is paid to Google or Meta. Ask for the two to be shown separately, with the ad account in your business's name.",
      },
      {
        q: "Do I pay GST on digital marketing services in India?",
        a: "Agency services in India generally attract 18% GST, and a business with GST registration can usually claim input credit. Platforms also apply tax to ad spend. Check with your accountant and make sure quotes state whether tax is included.",
      },
      {
        q: "How long should I commit to digital marketing?",
        a: "Plan for at least three to six months for SEO to show meaningful movement. Paid ads can be tested in a shorter period. Whatever you choose, ask for a clear notice period instead of a long lock-in.",
      },
    ],
    related: ["digital-marketing-kozhikode", "best-digital-marketing-agency-in-calicut", "performance-marketing-agency-kerala"],
  },
  {
    slug: "seo-vs-google-ads-kerala",
    title: "SEO or Google Ads First? A Guide for Kerala Businesses",
    short: "SEO or Google Ads First?",
    description:
      "SEO or Google Ads first? How Kerala businesses can decide using urgency, margins and competition, with a simple way to split the budget between them.",
    h1: "SEO or Google Ads: Which Should a Kerala Business Start With?",
    answer:
      "Start with Google Ads if you need enquiries this month and your margins can pay for clicks. Start with SEO if you can wait three to six months and want a lower cost per lead later. Most Kerala businesses do best using ads now while SEO builds underneath.",
    chips: ["SEO", "Google Ads", "Budget split", "Cost per lead"],
    published: "2026-11-07",
    updated: "2026-11-07",
    sections: [
      {
        heading: "The core difference",
        body: [
          "Google Ads rents visibility: you pay for each click and the traffic stops when the budget stops. SEO builds an asset: the work costs money up front, but a page that ranks can keep bringing visitors without a charge per click. One is fast and metered, the other is slow and compounding.",
        ],
        table: {
          head: ["", "Google Ads", "SEO"],
          rows: [
            ["Speed", "Days after launch", "Three to six months for meaningful movement"],
            ["Cost pattern", "Pay per click, ongoing", "Monthly work, no click cost"],
            ["When you stop", "Traffic stops", "Rankings fade slowly"],
            ["Good for testing", "Yes, quick data on offers and keywords", "Slower feedback"],
            ["Trust", "Marked as sponsored", "Organic results and map listings"],
          ],
        },
      },
      {
        heading: "When to start with Google Ads",
        body: [],
        bullets: [
          { title: "You need leads now", text: "A launch, an admission season or a sale with a fixed date." },
          { title: "Your margins can carry it", text: "One customer is worth much more than the cost of the clicks that won them." },
          { title: "You are testing an offer", text: "Ads show within weeks which keywords and messages get responses." },
          { title: "Your website is brand new", text: "New sites take time to rank, and ads keep enquiries coming meanwhile." },
        ],
      },
      {
        heading: "When to start with SEO",
        body: [],
        bullets: [
          { title: "You can wait", text: "The business is steady and you are planning for next year." },
          { title: "Clicks are expensive", text: "In crowded sectors, a ranking page can cost far less per lead over time." },
          { title: "People research before buying", text: "Guides and FAQs earn trust for considered purchases." },
          { title: "You serve one area", text: "Local SEO and [Google Business Profile](/local-seo-google-business-profile-kozhikode) often win nearby customers first." },
        ],
      },
      {
        heading: "How to run both on one budget",
        body: [
          "Think of the plan in phases. In the first months, more budget goes to ads because they produce leads and data. That data tells you which searches actually convert, and those are the keywords worth building [SEO pages](/seo-services-kozhikode) for.",
          "As rankings appear, you can reduce bids on terms you now rank for and move money to new tests. Review the split every month using one number: cost per lead by channel. For a clear picture of what sits inside each budget, read [what digital marketing costs in Kerala](/guides/digital-marketing-cost-kerala).",
        ],
      },
      {
        heading: "Before you spend on either",
        body: [
          "Both channels waste money if the destination is weak. Check that your page loads quickly on a phone, states what you do and where you are in the first screen, and has a call and WhatsApp button that works. Then confirm that those clicks are tracked. A [digital marketing agency in Calicut](/digital-marketing-kozhikode) should insist on this before launching anything.",
        ],
      },
    ],
    faqs: [
      {
        q: "Does running Google Ads improve my SEO rankings?",
        a: "No. Google states that advertising does not affect organic rankings. Ads can still help SEO indirectly by showing which keywords produce customers, so you can build pages around the searches that convert.",
      },
      {
        q: "Should I run ads on keywords I already rank for?",
        a: "Test it. If competitors bid on your brand or top keywords, an ad can protect those clicks. If nobody else is advertising and you rank first, you may be paying for visitors who would have clicked anyway.",
      },
      {
        q: "How much should a small business spend on Google Ads to start?",
        a: "Enough to collect useful data in your market within a few weeks, which depends on your keyword costs. Check Google's Keyword Planner for local bid estimates, start narrow on a few high-intent keywords, then raise spend only once leads are tracked.",
      },
    ],
    related: ["digital-marketing-kozhikode", "seo-services-kozhikode", "performance-marketing-agency-kerala"],
  },
  {
    slug: "google-map-pack-kozhikode",
    title: "How to Get Into the Google Map Pack in Kozhikode",
    short: "Google Map Pack Guide",
    description:
      "How Kozhikode businesses can appear in Google's map pack: the three factors Google uses, a Business Profile checklist, reviews, and what to avoid.",
    h1: "How to Get Your Kozhikode Business Into the Google Map Pack",
    answer:
      "To appear in Google's map pack in Kozhikode, verify a complete Google Business Profile, choose the right primary category, keep your name, address and phone identical across the web, collect genuine reviews steadily, and post real photos. Google ranks local results on relevance, distance and prominence, so only some of this is in your control.",
    chips: ["Business Profile", "Reviews", "NAP", "Categories", "Photos"],
    published: "2026-11-07",
    updated: "2026-11-07",
    sections: [
      {
        heading: "What Google says it looks at",
        body: [
          "Google describes three local ranking factors. Understanding them stops you wasting time on the things that do not matter.",
        ],
        table: {
          head: ["Factor", "What it means", "What you can do"],
          rows: [
            ["Relevance", "How well your profile matches the search", "Accurate category, services and description"],
            ["Distance", "How far you are from the searcher or the place named", "Use your real address; you cannot change this"],
            ["Prominence", "How well known your business is", "Reviews, citations, links and press"],
          ],
        },
      },
      {
        heading: "Your Business Profile checklist",
        body: [],
        bullets: [
          { title: "Verify it", text: "An unverified profile will not perform. Use the business's real location and staffed address." },
          { title: "Exact business name", text: "Use your real name. Adding keywords such as city names breaks Google's guidelines and risks suspension." },
          { title: "Primary category", text: "Often the strongest choice you make. Pick what you are, then add a few secondary categories." },
          { title: "Services and description", text: "List what you sell in the words customers use." },
          { title: "Hours", text: "Keep them accurate, including holidays and festival closures." },
          { title: "Real photos", text: "Your office, team and work. Skip stock images." },
          { title: "Calicut and Kozhikode", text: "Your address sets the city, and you can mention both names naturally in your description." },
          { title: "Posts and updates", text: "Offers, events and work, posted regularly so the profile stays active." },
        ],
      },
      {
        heading: "Build reviews the right way",
        body: [
          "Reviews are one of the few prominence signals you can influence every week. Ask every satisfied customer, right after the job is done, using the short review link from your Business Profile. A WhatsApp message works well here. Ask for honest feedback and mention what they bought, because detail is useful to the next reader.",
          "Reply to every review, including the bad ones. A calm reply to a complaint often does more for trust than another five-star rating. Never buy reviews, offer rewards for them or write them yourself: this breaks Google's policies and can get them removed or the profile suspended.",
        ],
      },
      {
        heading: "Make your details match everywhere",
        body: [
          "Your name, address and phone number should read the same on your website, Business Profile, Facebook, Instagram, JustDial and every other listing. Small differences create doubt about which details are right. Pick one exact version, including how you write Kozhikode or Calicut in the address, and use it everywhere.",
          "Then put those same details in the footer and contact page of your site, with a page for each main service. Our [local SEO and Google Business Profile service](/local-seo-google-business-profile-kozhikode) handles all of this if you would rather hand it over.",
        ],
      },
      {
        heading: "What to avoid",
        body: [],
        bullets: [
          { title: "Fake locations", text: "Virtual offices or addresses where you do not meet customers can get a profile removed." },
          { title: "Keyword-stuffed names", text: "'Best Dental Clinic Calicut' is not a business name unless it is your legal one." },
          { title: "Duplicate profiles", text: "Merge or remove old listings so signals are not split." },
          { title: "Buying reviews", text: "Google filters them, and a suspension costs far more than the slow route." },
        ],
      },
      {
        heading: "How long it takes",
        body: [
          "Fixing a neglected profile can show results within weeks in a less crowded category, while competitive categories take months of steady reviews and citations. Distance also means you may rank well near your office and less well across town, which is normal.",
          "If you are still comparing options, see how a [digital marketing agency in Calicut](/digital-marketing-kozhikode) would fit this into a wider plan, or read [what marketing costs in Kerala](/guides/digital-marketing-cost-kerala).",
        ],
      },
    ],
    faqs: [
      {
        q: "Is Google Business Profile free?",
        a: "Yes. Creating and managing a Google Business Profile is free. Be careful of anyone who says Google charges for it or calls claiming to be Google. You may choose to pay an agency to manage it, but the profile itself has no fee.",
      },
      {
        q: "Can a home-based business appear in the map pack?",
        a: "Yes, as a service-area business, if you visit customers. Hide your home address in the profile and set your service area. If you do not serve customers in person at all, you may not be eligible.",
      },
      {
        q: "Do paid ads help me rank in the map pack?",
        a: "No. Google states that paying for ads does not improve local rankings. Ads can appear in the map results as sponsored listings, but they do not change your organic position.",
      },
    ],
    related: ["local-seo-google-business-profile-kozhikode", "digital-marketing-kozhikode", "seo-services-kozhikode"],
  },
];
