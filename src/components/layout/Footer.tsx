"use client";

import { Marquee } from "@/components/ui/Marquee";
import { Magnetic } from "@/components/ui/Magnetic";
import { scrollToSection } from "@/lib/scroll";
import { NAV_LINKS } from "@/lib/data";

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-line">
      {/* Closing mantra */}
      <Marquee duration={38} className="border-b border-line py-8">
        {["We build brands", "Kerala to the world", "We craft identities", "We create together"].map(
          (phrase) => (
            <span key={phrase} className="mx-8 flex items-center gap-16">
              <span className="text-stroke font-display text-5xl font-bold tracking-tight whitespace-nowrap uppercase md:text-7xl">
                {phrase}
              </span>
              <span className="text-gradient font-display text-4xl" aria-hidden>
                ✦
              </span>
            </span>
          )
        )}
      </Marquee>

      <div className="mx-auto max-w-7xl px-6 pt-20 pb-10">
        <div className="grid gap-14 md:grid-cols-[1.5fr_1fr_1fr]">
          <div>
            <a
              href="#hero"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("#hero");
              }}
              data-cursor
              aria-label="Media 360 Concept — back to top"
              className="group inline-block cursor-pointer"
            >
              <span className="font-display text-[clamp(4rem,10vw,8rem)] leading-none font-bold tracking-[-0.04em] transition-all duration-500 group-hover:text-transparent group-hover:[-webkit-text-stroke:1px_rgb(255_255_255/60%)]">
                MEDIA 360<span className="text-gradient">.</span>
              </span>
            </a>
            <p className="mt-6 max-w-sm leading-relaxed text-dim">
              Media 360 Concept is a premium branding and advertising agency in Kochi, Kerala — crafting brand identities, packaging, campaigns, and digital experiences for businesses across Kerala, India, KSA, the UAE, and the USA.
            </p>
          </div>

          <nav aria-label="Sitemap">
            <p className="label-mono mb-6">Sitemap</p>
            <ul className="space-y-3">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(link.href);
                    }}
                    className="link-underline cursor-pointer text-sm text-dim transition-colors hover:text-white"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <p className="label-mono mb-6">Reach us</p>
            <ul className="space-y-3 text-sm text-dim">
              <li>
                <a
                  href="mailto:media360concept@gmail.com"
                  className="link-underline cursor-pointer transition-colors hover:text-white"
                >
                  media360concept@gmail.com
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/919061460360?text=Hi%20Media%20360%20Concept%2C%20I%27d%20like%20to%20talk%20about%20branding%20for%20my%20business."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-underline cursor-pointer transition-colors hover:text-white"
                >
                  WhatsApp: +91 9061 460 360
                </a>
              </li>
              <li>
                <a
                  href="tel:+919061460360"
                  className="link-underline cursor-pointer transition-colors hover:text-white"
                >
                  +91 9061 460 360
                </a>
              </li>
              <li>Kochi, Kerala, India</li>
              <li>Kerala — India — KSA — UAE — USA</li>
              <li className="pt-4">
                <Magnetic strength={0.3}>
                  <button
                    onClick={() => scrollToSection("#hero")}
                    data-cursor
                    aria-label="Back to top"
                    className="glass flex h-14 w-14 cursor-pointer items-center justify-center rounded-full text-white transition-colors duration-300 hover:text-cyan"
                  >
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden>
                      <path
                        d="M8 14V2m0 0L3 7m5-5l5 5"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>
                </Magnetic>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-wrap items-center justify-between gap-4 border-t border-line pt-8">
          <p className="font-mono text-[11px] tracking-[0.2em] text-dim uppercase">
            © 2026 Media 360 Concept — All rights reserved
          </p>
          <p className="font-mono text-[11px] tracking-[0.2em] text-dim uppercase">
            Branding · Advertising · Design — Kochi, Kerala
          </p>
        </div>
      </div>
    </footer>
  );
}
