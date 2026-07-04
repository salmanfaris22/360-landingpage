import { SectionHead } from "@/components/ui/SectionHead";
import { Reveal } from "@/components/ui/Reveal";
import { ArrowUpRight } from "@/components/ui/Icons";
import { AWARDS } from "@/lib/data";

/** Award ledger: hairline rows that flood white on hover. */
export function Achievements() {
  return (
    <section id="awards" className="relative py-28 md:py-40">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-16 lg:grid-cols-[1fr_1.6fr]">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <SectionHead
              index="09"
              label="Future vision"
              title="Designing Brands. Connecting Worlds."
            />
            <Reveal>
              <p className="-mt-8 max-w-sm leading-relaxed text-dim lg:-mt-12">
                From Kochi to Riyadh to the wider world — we&apos;re expanding our creative capabilities and helping businesses build meaningful, memorable, future-ready brands through innovation and strategic thinking.
              </p>
            </Reveal>
          </div>

          <ul className="self-end border-t border-line">
            {AWARDS.map((award, i) => (
              <li key={`${award.org}-${award.title}`} className="border-b border-line">
                <Reveal delay={i * 0.05}>
                  <div
                    data-cursor
                    className="group grid cursor-pointer grid-cols-[4rem_1fr_auto] items-center gap-4 py-7 transition-colors duration-500 hover:bg-white hover:px-5"
                  >
                    <span className="font-mono text-sm text-dim transition-colors duration-500 group-hover:text-black/50">
                      {award.year}
                    </span>
                    <span>
                      <span className="block font-display text-xl font-semibold tracking-tight transition-colors duration-500 group-hover:text-black md:text-2xl">
                        {award.title}
                      </span>
                      <span className="font-mono text-[11px] tracking-[0.25em] text-dim uppercase transition-colors duration-500 group-hover:text-black/60">
                        {award.org}
                      </span>
                    </span>
                    <ArrowUpRight
                      size={18}
                      className="text-dim transition-all duration-500 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-black"
                    />
                  </div>
                </Reveal>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
