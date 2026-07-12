"use client";

import { useEffect, useRef, useState } from "react";
import dynamic from "next/dynamic";
import { gsap, useGSAP, prefersReducedMotion, isFinePointer } from "@/lib/gsap";
import { Button } from "@/components/ui/Button";

const GalaxyScene = dynamic(() => import("@/components/three/GalaxyScene"), {
  ssr: false,
});

/** Style helper for the CSS entrance stagger (see globals.css). */
const stagger = (i: number) => ({ "--stagger": i }) as React.CSSProperties;

const HEADLINE = [
  { text: "WE BUILD", style: "" },
  { text: "BRANDS", style: "text-stroke" },
  { text: "KERALA", style: "" },
  { text: "CAN'T", style: "" },
  { text: "FORGET.", style: "text-gradient" },
];

const DISCIPLINES = ["Branding", "Advertising", "Design", "Digital Marketing", "Production"];

const FLOATING_STATS = [
  { value: "17+", label: "Years — Saudi Arabia", pos: "left-[5%] top-[26%]", delay: "0s" },
  { value: "12+", label: "Years — India", pos: "right-[5%] top-[22%]", delay: "-2.4s" },
  { value: "08+", label: "Years — USA", pos: "right-[10%] bottom-[24%]", delay: "-4.8s" },
];

export function Hero() {
  const root = useRef<HTMLElement>(null);
  const inner = useRef<HTMLDivElement>(null);
  // The three.js sky is decoration: mount it only on large screens, after the
  // browser is idle, so it never competes with the headline for bandwidth or
  // main-thread time. (The entrance animation itself is pure CSS.)
  const [galaxy, setGalaxy] = useState(false);

  useEffect(() => {
    if (prefersReducedMotion() || window.innerWidth < 1024) return;
    const start = () => setGalaxy(true);
    if ("requestIdleCallback" in window) {
      const id = window.requestIdleCallback(start, { timeout: 3500 });
      return () => window.cancelIdleCallback(id);
    }
    const timer = setTimeout(start, 1200);
    return () => clearTimeout(timer);
  }, []);

  useGSAP(
    () => {
      if (prefersReducedMotion()) return;

      // Atmosphere shift on scroll: content lifts away faster than the sky
      gsap.to(inner.current, {
        yPercent: -22,
        opacity: 0,
        ease: "none",
        scrollTrigger: {
          trigger: root.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });

      // Stat cards drift with the pointer at different depths
      if (isFinePointer()) {
        const cards = gsap.utils.toArray<HTMLElement>(".hero-stat");
        const setters = cards.map((card, i) => ({
          x: gsap.quickTo(card, "x", { duration: 1, ease: "power3" }),
          y: gsap.quickTo(card, "y", { duration: 1, ease: "power3" }),
          depth: (i + 1) * 12,
        }));
        const onMove = (e: MouseEvent) => {
          const nx = e.clientX / window.innerWidth - 0.5;
          const ny = e.clientY / window.innerHeight - 0.5;
          setters.forEach((s) => {
            s.x(nx * s.depth);
            s.y(ny * s.depth);
          });
        };
        root.current!.addEventListener("mousemove", onMove, { passive: true });
        return () => root.current?.removeEventListener("mousemove", onMove);
      }
    },
    { scope: root }
  );

  return (
    <section
      ref={root}
      id="hero"
      className="relative flex min-h-[100svh] items-center justify-center overflow-hidden"
    >
      {/* Galaxy sky — deferred so it never blocks the headline */}
      {galaxy && <GalaxyScene />}

      {/* Aurora atmosphere */}
      <div
        aria-hidden
        className="absolute -top-[20%] -left-[15%] h-[70vh] w-[70vw] animate-aurora rounded-full blur-3xl"
        style={{
          background: "radial-gradient(circle, rgb(77 124 255 / 22%), transparent 62%)",
        }}
      />
      <div
        aria-hidden
        className="absolute -right-[15%] top-[10%] h-[60vh] w-[55vw] animate-aurora rounded-full blur-3xl"
        style={{
          background: "radial-gradient(circle, rgb(139 92 246 / 20%), transparent 60%)",
          animationDelay: "-8s",
        }}
      />

      {/* Fade into page background */}
      <div
        aria-hidden
        className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-b from-transparent to-base"
      />

      <div ref={inner} className="relative z-10 mx-auto w-full max-w-7xl px-6 py-32 text-center">
        <p className="hero-fade label-mono" style={stagger(0)}>
          Media 360 Concept — Branding Agency in Kozhikode, Kerala
        </p>

        <h1 className="mt-10 font-display font-bold uppercase leading-[0.93] tracking-[-0.04em] text-[clamp(2.6rem,9.5vw,8.25rem)]">
          {HEADLINE.map((line, i) => (
            <span
              key={line.text}
              className={`hero-line block will-change-transform ${line.style}`}
              style={stagger(i)}
            >
              {line.text}
            </span>
          ))}
        </h1>

        <p
          className="hero-fade mx-auto mt-10 flex max-w-2xl flex-wrap items-center justify-center gap-x-4 gap-y-2 font-mono text-xs tracking-[0.28em] text-dim uppercase"
          style={stagger(1)}
        >
          <span className="mb-4 w-full text-center leading-relaxed">
            Premium branding, advertising, and creative design from Kozhikode — backed by 17+ years in Saudi Arabia, 12+ across India, and 8+ in the USA. Strategy, design, production, and marketing under one roof.
          </span>
          {DISCIPLINES.map((d, i) => (
            <span key={d} className="flex items-center gap-4">
              {i > 0 && <span className="text-cyan" aria-hidden>◆</span>}
              {d}
            </span>
          ))}
        </p>

        <div
          className="hero-fade mt-12 flex flex-wrap items-center justify-center gap-5"
          style={stagger(2)}
        >
          <Button href="#contact">Get a Free Brand Consultation</Button>
          <Button href="#work" variant="ghost">
            See Our Work
          </Button>
        </div>
      </div>

      {/* Floating statistics */}
      {FLOATING_STATS.map((stat, i) => (
        <div
          key={stat.label}
          className={`hero-stat absolute z-10 hidden xl:block ${stat.pos}`}
          style={stagger(i)}
        >
          <div
            className="glass animate-float rounded-2xl px-6 py-5 text-left"
            style={{ animationDelay: stat.delay }}
          >
            <span className="font-display text-3xl font-bold">{stat.value}</span>
            <span className="mt-1 block font-mono text-[10px] tracking-[0.25em] text-dim uppercase">
              {stat.label}
            </span>
          </div>
        </div>
      ))}

      {/* Scroll cue */}
      <div
        className="hero-fade absolute bottom-8 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-3"
        style={stagger(3)}
      >
        <span className="font-mono text-[10px] tracking-[0.4em] text-dim uppercase">Scroll</span>
        <span className="relative h-10 w-px overflow-hidden bg-white/15" aria-hidden>
          <span className="absolute inset-x-0 top-0 h-1/2 animate-float bg-gradient-to-b from-cyan to-transparent" />
        </span>
      </div>
    </section>
  );
}
