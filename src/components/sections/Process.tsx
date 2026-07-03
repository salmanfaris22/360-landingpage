"use client";

import { useRef } from "react";
import { gsap, useGSAP, prefersReducedMotion } from "@/lib/gsap";
import { SectionHead } from "@/components/ui/SectionHead";
import { Reveal } from "@/components/ui/Reveal";
import { PROCESS } from "@/lib/data";

/** Nine-step spine: a gradient line draws down the centre as you scroll. */
export function Process() {
  const root = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      if (prefersReducedMotion()) return;
      gsap.from(".process-line", {
        scaleY: 0,
        transformOrigin: "top center",
        ease: "none",
        scrollTrigger: {
          trigger: ".process-list",
          start: "top 70%",
          end: "bottom 60%",
          scrub: 1,
        },
      });
    },
    { scope: root }
  );

  return (
    <section ref={root} id="process" className="relative py-28 md:py-40">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHead
          index="06"
          label="How we work"
          title="Nine steps. Zero surprises."
          blurb="A process refined over a decade — transparent enough to plan around, flexible enough to chase a better idea mid-flight."
        />

        <div className="process-list relative">
          <span
            aria-hidden
            className="process-line absolute top-0 left-5 h-full w-px bg-gradient-to-b from-blue via-violet to-cyan md:left-1/2"
          />

          <ol className="space-y-14 md:space-y-0">
            {PROCESS.map((item, i) => {
              const left = i % 2 === 0;
              return (
                <li key={item.step} className="relative md:grid md:grid-cols-2 md:gap-20 md:py-8">
                  <span
                    aria-hidden
                    className="absolute top-2 left-5 h-2.5 w-2.5 -translate-x-1/2 rounded-full border border-cyan bg-base md:top-12 md:left-1/2"
                  />
                  <div
                    className={`pl-14 md:pl-0 ${
                      left
                        ? "md:pr-4 md:text-right"
                        : "md:col-start-2 md:pl-4"
                    }`}
                  >
                    <Reveal>
                      <span className="text-stroke font-display text-5xl font-bold md:text-6xl">
                        {item.step}
                      </span>
                      <h3 className="mt-3 font-display text-2xl font-semibold tracking-tight md:text-3xl">
                        {item.title}
                      </h3>
                      <p
                        className={`mt-3 max-w-md leading-relaxed text-dim ${
                          left ? "md:ml-auto" : ""
                        }`}
                      >
                        {item.text}
                      </p>
                    </Reveal>
                  </div>
                </li>
              );
            })}
          </ol>
        </div>
      </div>
    </section>
  );
}
