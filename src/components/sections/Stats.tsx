import { Counter } from "@/components/ui/Counter";
import { Reveal } from "@/components/ui/Reveal";
import { STATS } from "@/lib/data";

/** Full-bleed numbers wall — the studio in five figures. */
export function Stats() {
  return (
    <section aria-label="Studio statistics" className="relative border-y border-line bg-surface">
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(60% 120% at 50% 0%, rgb(139 92 246 / 7%), transparent 60%)",
        }}
      />
      <ul className="relative mx-auto grid max-w-7xl grid-cols-2 md:grid-cols-5">
        {STATS.map((stat, i) => (
          <li
            key={stat.label}
            className={`px-6 py-14 text-center md:py-20 ${
              i > 0 ? "border-l border-line" : ""
            } ${i >= 2 ? "max-md:border-t max-md:border-line" : ""} ${
              i % 2 === 0 ? "max-md:border-l-0" : ""
            }`}
          >
            <Reveal delay={i * 0.08}>
              <span className="block font-display text-[clamp(2.6rem,5vw,4.25rem)] font-bold tracking-tight">
                <Counter value={stat.value} suffix={stat.suffix} />
              </span>
              <span className="mt-2 block font-mono text-[11px] tracking-[0.25em] text-dim uppercase">
                {stat.label}
              </span>
            </Reveal>
          </li>
        ))}
      </ul>
    </section>
  );
}
