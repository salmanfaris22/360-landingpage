"use client";

import { useEffect, useRef, useState } from "react";
import { gsap, useGSAP, prefersReducedMotion } from "@/lib/gsap";
import { scrollToSection, stopScroll, startScroll } from "@/lib/scroll";
import { NAV_LINKS } from "@/lib/data";
import { Magnetic } from "@/components/ui/Magnetic";
import { SocialX, SocialLinkedIn, SocialInstagram, SocialDribbble } from "@/components/ui/Icons";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [open, setOpen] = useState(false);
  const lastY = useRef(0);
  const overlay = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 60);
      setHidden(y > 400 && y > lastY.current);
      lastY.current = y;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Fullscreen menu: lock scroll + stagger links in
  useGSAP(() => {
    if (!open || !overlay.current) return;
    stopScroll();
    if (!prefersReducedMotion()) {
      gsap.fromTo(
        ".menu-link",
        { yPercent: 120 },
        { yPercent: 0, duration: 0.9, stagger: 0.06, ease: "expo.out", delay: 0.1 }
      );
      gsap.fromTo(
        ".menu-meta",
        { opacity: 0, y: 16 },
        { opacity: 1, y: 0, duration: 0.7, stagger: 0.08, delay: 0.4 }
      );
    }
    return () => startScroll();
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const go = (href: string) => {
    setOpen(false);
    // Wait a beat so the overlay clears before gliding
    requestAnimationFrame(() => scrollToSection(href));
  };

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-[100] transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          hidden && !open ? "-translate-y-full" : "translate-y-0"
        } ${scrolled && !open ? "glass border-x-0 border-t-0" : "border-b border-transparent"}`}
      >
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <a
            href="#hero"
            onClick={(e) => {
              e.preventDefault();
              go("#hero");
            }}
            data-cursor
            className="group flex cursor-pointer items-baseline gap-2 font-display text-lg font-bold tracking-tight"
            aria-label="Media 360 Concept — back to top"
          >
            MEDIA 360
            <span className="inline-block h-2 w-2 rounded-full bg-gradient-to-r from-blue to-cyan transition-transform duration-500 group-hover:scale-150" />
            <span className="font-mono text-[10px] font-normal tracking-[0.3em] text-dim">
              CONCEPT
            </span>
          </a>

          <div className="hidden items-center gap-9 lg:flex">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  go(link.href);
                }}
                className="link-underline cursor-pointer text-sm text-dim transition-colors duration-300 hover:text-white"
              >
                {link.label}
              </a>
            ))}
            <Magnetic strength={0.25}>
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  go("#contact");
                }}
                data-cursor
                className="group relative inline-flex min-h-[44px] cursor-pointer items-center overflow-hidden rounded-full border border-white/25 px-6 py-2.5 text-sm transition-colors duration-300 hover:text-black"
              >
                <span className="relative z-10">Start a project</span>
                <span
                  aria-hidden
                  className="absolute inset-0 translate-y-[102%] bg-white transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-y-0"
                />
              </a>
            </Magnetic>
          </div>

          <button
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-label={open ? "Close menu" : "Open menu"}
            className="relative flex h-11 w-11 cursor-pointer items-center justify-center lg:hidden"
          >
            <span
              className={`absolute h-px w-6 bg-white transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                open ? "rotate-45" : "-translate-y-1"
              }`}
            />
            <span
              className={`absolute h-px w-6 bg-white transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                open ? "-rotate-45" : "translate-y-1"
              }`}
            />
          </button>
        </nav>
      </header>

      {/* Fullscreen menu */}
      {open && (
        <div
          ref={overlay}
          className="fixed inset-0 z-[99] flex flex-col justify-between bg-base/95 px-6 pt-28 pb-10 backdrop-blur-xl lg:hidden"
          role="dialog"
          aria-modal="true"
          aria-label="Navigation"
        >
          <nav className="flex flex-col gap-2">
            {NAV_LINKS.map((link, i) => (
              <span key={link.href} className="overflow-hidden">
                <a
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    go(link.href);
                  }}
                  className="menu-link flex cursor-pointer items-baseline gap-4 py-1 font-display text-5xl font-bold tracking-tight text-white will-change-transform"
                >
                  <span className="font-mono text-xs text-cyan">0{i + 1}</span>
                  {link.label}
                </a>
              </span>
            ))}
          </nav>
          <div className="menu-meta flex items-center justify-between border-t border-line pt-6">
            <span className="font-mono text-xs tracking-[0.3em] text-dim uppercase">
              media360concept@gmail.com
            </span>
            <div className="flex gap-5 text-dim">
              <SocialX size={18} />
              <SocialLinkedIn size={18} />
              <SocialInstagram size={18} />
              <SocialDribbble size={18} />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
