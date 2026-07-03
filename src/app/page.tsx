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

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "ROOT DIGITAL",
  description:
    "Creative technology studio building brands, startups, products and experiences.",
  url: "https://rootdigital.studio",
  email: "hello@rootdigital.studio",
  foundingDate: "2016",
  sameAs: [],
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
