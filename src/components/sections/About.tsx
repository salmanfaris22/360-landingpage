"use client";

import { useRef } from "react";
import Image from "next/image";
import { gsap, useGSAP, prefersReducedMotion } from "@/lib/gsap";
import { SectionHead } from "@/components/ui/SectionHead";
import { Reveal, WordReveal } from "@/components/ui/Reveal";
import { MILESTONES, IMAGES } from "@/lib/data";

export function About() {
  const root = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      if (prefersReducedMotion()) return;

      // Giant backdrop word drifts against scroll direction
      gsap.to(".about-ghost", {
        xPercent: -18,
        ease: "none",
        scrollTrigger: {
          trigger: root.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 1,
        },
      });

      // Parallax inside the sticky portrait
      gsap.fromTo(
        ".about-img",
        { yPercent: -10, scale: 1.18 },
        {
          yPercent: 10,
          scale: 1.18,
          ease: "none",
          scrollTrigger: {
            trigger: ".about-img-wrap",
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        }
      );

      // Journey line draws itself as the timeline scrolls through
      gsap.from(".about-line", {
        scaleY: 0,
        transformOrigin: "top center",
        ease: "none",
        scrollTrigger: {
          trigger: ".about-timeline",
          start: "top 75%",
          end: "bottom 55%",
          scrub: 1,
        },
      });
    },
    { scope: root }
  );

  return (
    <section ref={root} id="about" className="relative overflow-hidden py-28 md:py-40">
      <span
        aria-hidden
        className="about-ghost text-stroke pointer-events-none absolute top-10 left-[20%] font-display text-[24vw] font-bold whitespace-nowrap opacity-60 select-none"
      >
        KOCHI — KERALA
      </span>

      <div className="relative mx-auto max-w-7xl px-6">
        <SectionHead
          index="01"
          label="About us"
          title="The story behind Media 360 Concept."
        />

        <div className="grid gap-16 lg:grid-cols-2 lg:gap-24">
          {/* Sticky editorial portrait */}
          <div className="about-img-wrap lg:sticky lg:top-28 lg:self-start">
            <div className="relative aspect-[4/5] overflow-hidden rounded-2xl">
              <Image
                src={IMAGES.aboutMain}
                alt="Media 360 Concept branding agency team collaborating at the Kochi, Kerala studio"
                fill
                sizes="(min-width: 1024px) 45vw, 100vw"
                className="about-img object-cover will-change-transform"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-base/70 via-transparent to-transparent" />
              <span className="label-mono absolute bottom-6 left-6">
                Creative professionals — building brands that stand out
              </span>
            </div>
          </div>

          <div>
            <WordReveal
              as="p"
              text="Media 360 Concept is a Kochi-based branding agency built by senior creatives — each with 17+ years in brand activation, branding, advertising, and creative design across Saudi Arabia, India, and the USA."
              className="font-display text-2xl leading-snug font-medium tracking-tight md:text-[2rem]"
            />
            <Reveal delay={0.1}>
              <p className="mt-8 max-w-xl leading-relaxed text-dim">
                That experience changes how we work. We don&apos;t start with a logo; we start with your market — then build the identity, packaging, campaigns, website, and marketing that make your business the obvious choice. One team in Kerala handling strategy, design, production, and growth, so nothing gets lost between agencies.
              </p>
            </Reveal>

            <Reveal delay={0.15} className="mt-14">
              <div className="relative aspect-video overflow-hidden rounded-2xl">
                <Image
                  src={IMAGES.aboutSecondary}
                  alt="Brand design review session at Media 360 Concept creative studio in Kerala"
                  fill
                  sizes="(min-width: 1024px) 40vw, 100vw"
                  className="object-cover transition-transform duration-700 hover:scale-105"
                />
              </div>
            </Reveal>

            {/* Company journey */}
            <div className="about-timeline relative mt-20 pl-10">
              <span
                aria-hidden
                className="about-line absolute top-1 left-0 h-full w-px bg-gradient-to-b from-blue via-violet to-cyan"
              />
              <p className="label-mono mb-10">Our journey</p>
              <ol className="space-y-10">
                {MILESTONES.map((m, i) => (
                  <li key={m.year}>
                    <Reveal delay={i * 0.05}>
                      <div className="relative">
                        <span
                          aria-hidden
                          className="absolute top-1.5 -left-[45px] h-2.5 w-2.5 rounded-full border border-cyan bg-base"
                        />
                        <span className="font-mono text-sm text-cyan">{m.year}</span>
                        <p className="mt-1 max-w-md text-white/85">{m.text}</p>
                      </div>
                    </Reveal>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
