import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { TrustedBy } from "@/components/sections/TrustedBy";
import { About } from "@/components/sections/About";
import { Stats } from "@/components/sections/Stats";
import { Services } from "@/components/sections/Services";
import { Work } from "@/components/sections/Work";
import { Industries } from "@/components/sections/Industries";
import { TechStack } from "@/components/sections/TechStack";
import { Process } from "@/components/sections/Process";
import { Team } from "@/components/sections/Team";
import { Testimonials } from "@/components/sections/Testimonials";
import { Achievements } from "@/components/sections/Achievements";
import { Pricing } from "@/components/sections/Pricing";
import { Faq } from "@/components/sections/Faq";
import { Blog } from "@/components/sections/Blog";
import { Contact } from "@/components/sections/Contact";
import { FAQS, SERVICES, CONTACT } from "@/lib/data";

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["ProfessionalService", "Organization"],
      "@id": `${CONTACT.site}/#organization`,
      name: "Media 360 Concept",
      alternateName: "Media 360 Concept Kerala",
      description:
        "Media 360 Concept is a premium branding, advertising, and creative agency headquartered in Kochi, Kerala — delivering brand identity, logo design, packaging, digital marketing, media production, web and app development for clients across Kerala, India, Saudi Arabia, the UAE, and the USA.",
      url: CONTACT.site,
      email: CONTACT.email,
      telephone: CONTACT.phone,
      foundingDate: "2009",
      slogan: "Designing Brands. Connecting Worlds.",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Kochi",
        addressRegion: "Kerala",
        addressCountry: "IN",
      },
      areaServed: [
        { "@type": "State", name: "Kerala" },
        { "@type": "Country", name: "India" },
        { "@type": "Country", name: "Saudi Arabia" },
        { "@type": "Country", name: "United Arab Emirates" },
        { "@type": "Country", name: "United States" },
      ],
      knowsAbout: [
        "Branding",
        "Brand Identity Design",
        "Logo Design",
        "Advertising",
        "Packaging Design",
        "Digital Marketing",
        "Media Buying",
        "Video Production",
        "Signage",
        "Vehicle Branding",
        "Web Development",
        "App Development",
        "UI/UX Design",
      ],
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Branding & Creative Services",
        itemListElement: SERVICES.map((s) => ({
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: s.title,
            description: s.description,
            areaServed: "Kerala, India",
            provider: { "@id": `${CONTACT.site}/#organization` },
          },
        })),
      },
    },
    {
      "@type": "WebSite",
      "@id": `${CONTACT.site}/#website`,
      url: CONTACT.site,
      name: "Media 360 Concept",
      inLanguage: "en-IN",
      publisher: { "@id": `${CONTACT.site}/#organization` },
    },
    {
      "@type": "WebPage",
      "@id": `${CONTACT.site}/#webpage`,
      url: CONTACT.site,
      name: "Media 360 Concept | Branding & Creative Agency in Kochi, Kerala",
      isPartOf: { "@id": `${CONTACT.site}/#website` },
      about: { "@id": `${CONTACT.site}/#organization` },
      inLanguage: "en-IN",
    },
    {
      "@type": "FAQPage",
      "@id": `${CONTACT.site}/#faq`,
      mainEntity: FAQS.map((faq) => ({
        "@type": "Question",
        name: faq.q,
        acceptedAnswer: { "@type": "Answer", text: faq.a },
      })),
    },
  ],
};

export default function Home() {
  return (
    <>
      <Navbar />
      <main id="main">
        <Hero />
        <TrustedBy />
        <About />
        <Stats />
        <Services />
        <Work />
        <Industries />
        <TechStack />
        <Process />
        <Team />
        <Testimonials />
        <Achievements />
        <Pricing />
        <Faq />
        <Blog />
        <Contact />
      </main>
      <Footer />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </>
  );
}
