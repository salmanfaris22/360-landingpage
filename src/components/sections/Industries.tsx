import { SectionHead } from "@/components/ui/SectionHead";
import { Reveal } from "@/components/ui/Reveal";
import { CAPABILITIES, INDUSTRIES } from "@/lib/data";

function SectorGrid({ items, idPrefix }: { items: string[]; idPrefix: string }) {
  return (
    <ul className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-line bg-line md:grid-cols-3 lg:grid-cols-4">
      {items.map((item, i) => (
        <li key={`${idPrefix}-${item}`} className="bg-base">
          <Reveal delay={(i % 4) * 0.06} className="h-full">
            <div
              data-cursor
              className="group flex h-full cursor-pointer flex-col justify-between gap-10 p-6 transition-colors duration-500 hover:bg-white md:p-8"
            >
              <span className="text-stroke font-display text-3xl font-bold transition-colors duration-500 group-hover:[-webkit-text-stroke-color:rgb(0_0_0/30%)] md:text-4xl">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="font-display text-lg font-semibold tracking-tight transition-all duration-500 group-hover:translate-x-1 group-hover:text-black md:text-xl">
                {item}
              </span>
            </div>
          </Reveal>
        </li>
      ))}
    </ul>
  );
}

/** Two hairline grids: capabilities + industry sectors. */
export function Industries() {
  return (
    <section id="industries" className="relative py-28 md:py-40">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHead
          index="04"
          label="Capabilities"
          title="Every discipline your brand will ever need."
          blurb="Logo design, packaging, signage, vehicle branding, SEO, video production — the complete creative and digital toolkit, without juggling five different vendors."
        />

        <SectorGrid items={CAPABILITIES} idPrefix="cap" />

        <div className="mt-28 md:mt-40">
          <SectionHead
            index="04b"
            label="Industries"
            title="Fluent in twelve industries."
            blurb="A restaurant is won at the table, a hospital on trust, a school on reputation. We've branded them all — and we design for how each one's customers actually decide."
          />

          <SectorGrid items={INDUSTRIES} idPrefix="ind" />
        </div>
      </div>
    </section>
  );
}
