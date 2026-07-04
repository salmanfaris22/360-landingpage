"use client";

import { useState } from "react";
import { SectionHead } from "@/components/ui/SectionHead";
import { Reveal } from "@/components/ui/Reveal";
import { Plus } from "@/components/ui/Icons";
import { FAQS } from "@/lib/data";

/** Accordion driven by grid-row transitions — smooth, no height hacks. */
export function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="relative border-y border-line bg-surface py-28 md:py-40">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-16 lg:grid-cols-[1fr_1.6fr]">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <SectionHead index="11" label="Questions" title="Asked, answered." />
            <Reveal>
              <p className="-mt-8 max-w-sm leading-relaxed text-dim lg:-mt-12">
                What Kerala businesses ask us most — services, branding costs, timelines, and how to get started with Media 360 Concept.
              </p>
            </Reveal>
          </div>

          <div className="self-start border-t border-line">
            {FAQS.map((faq, i) => {
              const isOpen = open === i;
              return (
                <div key={faq.q} className="border-b border-line">
                  <button
                    onClick={() => setOpen(isOpen ? null : i)}
                    aria-expanded={isOpen}
                    aria-controls={`faq-panel-${i}`}
                    data-cursor
                    className="flex w-full cursor-pointer items-center justify-between gap-6 py-7 text-left"
                  >
                    <span
                      className={`font-display text-lg font-medium tracking-tight transition-colors duration-300 md:text-xl ${
                        isOpen ? "text-cyan" : "text-white"
                      }`}
                    >
                      {faq.q}
                    </span>
                    <span
                      className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/15 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                        isOpen ? "rotate-45 bg-white text-black" : ""
                      }`}
                    >
                      <Plus size={13} />
                    </span>
                  </button>
                  <div
                    id={`faq-panel-${i}`}
                    className={`grid transition-[grid-template-rows] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                      isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="max-w-2xl pb-8 leading-relaxed text-dim">{faq.a}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
