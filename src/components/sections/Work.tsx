"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { gsap, useGSAP } from "@/lib/gsap";
import { SectionHead } from "@/components/ui/SectionHead";
import { WorkModal } from "./WorkModal";
import { PROJECTS, type Project } from "@/lib/data";

/**
 * Pinned horizontal archive on desktop (GSAP scrub), native snap
 * scrolling on touch/small screens and for reduced motion.
 */
export function Work() {
  const root = useRef<HTMLElement>(null);
  const pinWrap = useRef<HTMLDivElement>(null);
  const track = useRef<HTMLDivElement>(null);
  const progress = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState<Project | null>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add(
        "(min-width: 768px) and (prefers-reduced-motion: no-preference)",
        () => {
          const el = track.current!;
          const distance = () => el.scrollWidth - window.innerWidth;
          gsap.to(el, {
            x: () => -distance(),
            ease: "none",
            scrollTrigger: {
              trigger: pinWrap.current,
              pin: true,
              scrub: 1,
              start: "top top",
              end: () => `+=${distance()}`,
              invalidateOnRefresh: true,
              onUpdate: (self) => {
                if (progress.current) {
                  progress.current.style.transform = `scaleX(${self.progress})`;
                }
              },
            },
          });
        }
      );
      return () => mm.revert();
    },
    { scope: root }
  );

  return (
    <section ref={root} id="work" className="relative py-28 md:py-40">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHead
          index="03"
          label="Selected work"
          title="Work that works."
          blurb="Brand identity, packaging, signage, print, video, and digital — deliverables crafted for restaurants, retailers, hospitals, and startups across Kerala, India, and the Gulf."
        />
      </div>

      <div ref={pinWrap} className="md:flex md:h-screen md:flex-col md:justify-center">
        <div className="overflow-x-auto md:overflow-x-visible [scrollbar-width:none] [&::-webkit-scrollbar]:hidden snap-x snap-mandatory md:snap-none">
          <div
            ref={track}
            className="flex w-max items-stretch gap-6 px-6 will-change-transform md:gap-10 md:pl-[max(1.5rem,calc((100vw-80rem)/2+1.5rem))] md:pr-[12vw]"
          >
            {PROJECTS.map((project, i) => (
              <article
                key={project.slug}
                className="w-[80vw] shrink-0 snap-start sm:w-[55vw] md:w-[42vw] lg:w-[34vw]"
              >
                <button
                  onClick={() => setActive(project)}
                  data-cursor="View"
                  className="group w-full cursor-pointer text-left"
                  aria-label={`Open ${project.title} case study`}
                >
                  <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-line">
                    <Image
                      src={project.image}
                      alt={`${project.title} — ${project.category}`}
                      fill
                      sizes="(min-width: 1024px) 34vw, 80vw"
                      className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-base/80 via-transparent to-transparent opacity-60 transition-opacity duration-500 group-hover:opacity-90" />
                    <span className="glass absolute right-4 bottom-4 translate-y-2 rounded-full px-4 py-2 font-mono text-[10px] tracking-[0.25em] uppercase opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                      View case ↗
                    </span>
                  </div>
                  <div className="mt-5 flex items-baseline justify-between gap-4">
                    <p className={`font-mono text-[11px] tracking-[0.25em] uppercase ${project.accent}`}>
                      {String(i + 1).padStart(2, "0")} / {project.category}
                    </p>
                    <span className="font-mono text-[11px] text-dim">{project.year}</span>
                  </div>
                  <h3 className="mt-2 font-display text-2xl font-semibold tracking-tight transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-2 md:text-3xl">
                    {project.title}
                  </h3>
                  <p className="mt-2 line-clamp-2 max-w-md text-sm leading-relaxed text-dim">
                    {project.description}
                  </p>
                </button>
              </article>
            ))}
          </div>
        </div>

        {/* Scrub progress */}
        <div className="mx-auto mt-12 hidden h-px w-full max-w-7xl bg-line px-6 md:block">
          <div
            ref={progress}
            className="h-px origin-left scale-x-0 bg-gradient-to-r from-blue via-violet to-cyan"
          />
        </div>
      </div>

      {active && <WorkModal project={active} onClose={() => setActive(null)} />}
    </section>
  );
}
