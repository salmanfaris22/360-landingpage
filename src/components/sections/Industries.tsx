import { SectionHead } from "@/components/ui/SectionHead";
import { Reveal } from "@/components/ui/Reveal";
import { INDUSTRIES } from "@/lib/data";

/** Hairline grid of sectors; cells invert to white on hover. */
export function Industries() {
  return (
    <section id="industries" className="relative py-28 md:py-40">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHead
          index="04"
          label="Industries"
          title="Fluent in twelve worlds."
          blurb="Every sector has its own physics. We've shipped in all of these — and kept the scars as documentation."
        />

        <ul className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-line bg-line md:grid-cols-3 lg:grid-cols-4">
          {INDUSTRIES.map((industry, i) => (
            <li key={industry} className="bg-base">
              <Reveal delay={(i % 4) * 0.06} className="h-full">
                <div
                  data-cursor
                  className="group flex h-full cursor-pointer flex-col justify-between gap-10 p-6 transition-colors duration-500 hover:bg-white md:p-8"
                >
                  <span className="text-stroke font-display text-3xl font-bold transition-colors duration-500 group-hover:[-webkit-text-stroke-color:rgb(0_0_0/30%)] md:text-4xl">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="font-display text-lg font-semibold tracking-tight transition-all duration-500 group-hover:translate-x-1 group-hover:text-black md:text-xl">
                    {industry}
                  </span>
                </div>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
