"use client";

import { useRef, useState } from "react";
import { gsap, useGSAP, isFinePointer, prefersReducedMotion } from "@/lib/gsap";
import { SectionHead } from "@/components/ui/SectionHead";
import { Plus } from "@/components/ui/Icons";
import { SERVICES } from "@/lib/data";

/**
 * Editorial service index: rows dim their siblings on hover, a gradient
 * preview chip chases the cursor, and rows expand on click/tap.
 */
export function Services() {
  const root = useRef<HTMLElement>(null);
  const preview = useRef<HTMLDivElement>(null);
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [hoverIndex, setHoverIndex] = useState<number | null>(null);

  useGSAP(
    () => {
      if (!isFinePointer() || prefersReducedMotion()) return;
      const el = preview.current!;
      const xTo = gsap.quickTo(el, "x", { duration: 0.7, ease: "power3" });
      const yTo = gsap.quickTo(el, "y", { duration: 0.7, ease: "power3" });

      const onMove = (e: MouseEvent) => {
        const rect = root.current!.getBoundingClientRect();
        xTo(e.clientX - rect.left + 32);
        yTo(e.clientY - rect.top - 90);
      };
      root.current!.addEventListener("mousemove", onMove, { passive: true });
      return () => root.current?.removeEventListener("mousemove", onMove);
    },
    { scope: root }
  );

  return (
    <section ref={root} id="services" className="relative overflow-hidden py-28 md:py-40">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHead
          index="02"
          label="What we do"
          title="Full-stack creativity, engineered."
          blurb="Twenty-two disciplines, six practices, one accountable team. Hover, tap, explore."
        />

        <div
          className="border-t border-line"
          onMouseLeave={() => setHoverIndex(null)}
        >
          {SERVICES.map((service, i) => {
            const open = openIndex === i;
            const dimmed = hoverIndex !== null && hoverIndex !== i;
            return (
              <div key={service.index} className="border-b border-line">
                <button
                  onClick={() => setOpenIndex(open ? null : i)}
                  onMouseEnter={() => setHoverIndex(i)}
                  aria-expanded={open}
                  aria-controls={`service-panel-${i}`}
                  data-cursor
                  className={`grid w-full cursor-pointer grid-cols-[3rem_1fr_2.5rem] items-center gap-4 py-8 text-left transition-all duration-500 md:grid-cols-[5rem_1fr_18rem_3rem] md:py-10 ${
                    dimmed ? "opacity-30" : "opacity-100"
                  }`}
                >
                  <span className="font-mono text-sm text-dim">{service.index}</span>
                  <span
                    className={`font-display text-2xl font-semibold tracking-tight transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] sm:text-3xl md:text-[2.6rem] ${
                      hoverIndex === i ? "md:translate-x-3" : ""
                    }`}
                  >
                    {service.title}
                  </span>
                  <span className="hidden font-mono text-[11px] leading-relaxed tracking-[0.15em] text-dim uppercase md:block">
                    {service.tags.slice(0, 2).join(" / ")}
                  </span>
                  <span
                    className={`flex h-10 w-10 items-center justify-center justify-self-end rounded-full border border-white/15 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                      open ? "rotate-45 bg-white text-black" : ""
                    }`}
                  >
                    <Plus size={14} />
                  </span>
                </button>

                <div
                  id={`service-panel-${i}`}
                  className={`grid transition-[grid-template-rows] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                    open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="grid gap-8 pb-10 md:grid-cols-[5rem_1fr] md:pl-0">
                      <span aria-hidden />
                      <div>
                        <p className="max-w-2xl leading-relaxed text-dim">
                          {service.description}
                        </p>
                        <ul className="mt-6 flex flex-wrap gap-3">
                          {service.tags.map((tag) => (
                            <li
                              key={tag}
                              className="rounded-full border border-line px-4 py-1.5 font-mono text-[11px] tracking-[0.15em] text-white/70 uppercase"
                            >
                              {tag}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Cursor-chasing preview chip (fine pointers only) */}
      <div
        ref={preview}
        aria-hidden
        className={`pointer-events-none absolute top-0 left-0 z-10 hidden h-44 w-72 overflow-hidden rounded-2xl border border-white/10 transition-opacity duration-300 lg:block ${
          hoverIndex !== null ? "opacity-100" : "opacity-0"
        }`}
      >
        {hoverIndex !== null && (
          <div
            className={`flex h-full w-full items-end bg-gradient-to-br p-5 ${SERVICES[hoverIndex].gradient} bg-surface`}
          >
            <span className="text-stroke font-display text-6xl font-bold">
              {SERVICES[hoverIndex].index}
            </span>
            <span className="mb-2 ml-auto font-mono text-[10px] tracking-[0.3em] text-white/70 uppercase">
              Explore ↗
            </span>
          </div>
        )}
      </div>
    </section>
  );
}
