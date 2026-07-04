import { SectionHead } from "@/components/ui/SectionHead";
import { Marquee } from "@/components/ui/Marquee";
import { TECH_ORBITS } from "@/lib/data";

const RING_SIZES = ["34%", "64%", "94%"];
const RING_DURATIONS = [46, 64, 88];

/**
 * Orbital stack map: three counter-rotating rings of technologies around
 * a glowing core. Pure CSS rotation; chips counter-rotate to stay level.
 * Small screens get marquee rows instead.
 */
export function TechStack() {
  return (
    <section id="stack" className="relative overflow-hidden border-y border-line bg-surface py-28 md:py-40">
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(50% 60% at 50% 45%, rgb(77 124 255 / 8%), transparent 65%)",
        }}
      />
      <div className="relative mx-auto max-w-7xl px-6">
        <SectionHead
          index="05"
          label="Deliverables"
          title="Everything your brand needs."
          blurb="Branding at the core, orbited by everything that amplifies it — packaging and print, digital marketing and video, web, apps, and automation."
        />

        {/* Orbit system — md and up */}
        <div className="relative mx-auto hidden aspect-square w-[min(88vw,46rem)] md:block">
          {/* Core */}
          <div className="absolute top-1/2 left-1/2 z-10 -translate-x-1/2 -translate-y-1/2 text-center">
            <div
              className="mx-auto flex h-28 w-28 items-center justify-center rounded-full border border-white/15"
              style={{
                background:
                  "radial-gradient(circle, rgb(139 92 246 / 35%), rgb(77 124 255 / 12%) 60%, transparent)",
                boxShadow: "0 0 80px rgb(139 92 246 / 25%)",
              }}
            >
              <span className="font-display text-xl font-bold tracking-tight">
                M360
              </span>
            </div>
            <span className="label-mono mt-4 block text-[10px]">Full service</span>
          </div>

          {TECH_ORBITS.map((ring, ringIndex) => {
            const size = RING_SIZES[ringIndex];
            const duration = RING_DURATIONS[ringIndex];
            const reverse = ringIndex % 2 === 1;
            return (
              <div
                key={ringIndex}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                style={{ width: size, height: size }}
              >
                <div className="absolute inset-0 rounded-full border border-white/8" />
                <div
                  className={reverse ? "h-full w-full animate-orbit-reverse" : "h-full w-full animate-orbit"}
                  style={{ animationDuration: `${duration}s` }}
                >
                  {ring.map((tech, i) => {
                    const angle = (i / ring.length) * 360 + ringIndex * 24;
                    const rad = (angle * Math.PI) / 180;
                    const x = 50 + 50 * Math.cos(rad);
                    const y = 50 + 50 * Math.sin(rad);
                    return (
                      <div
                        key={tech}
                        className="absolute -translate-x-1/2 -translate-y-1/2"
                        style={{ left: `${x}%`, top: `${y}%` }}
                      >
                        <span
                          className={`glass block rounded-full px-4 py-1.5 font-mono text-[11px] whitespace-nowrap text-white/85 transition-colors duration-300 hover:border-cyan/50 hover:text-white ${
                            reverse ? "animate-orbit" : "animate-orbit-reverse"
                          }`}
                          style={{ animationDuration: `${duration}s` }}
                        >
                          {tech}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}

          {/* Drifting particles */}
          {[
            "top-[12%] left-[22%]",
            "top-[70%] left-[10%]",
            "top-[24%] right-[14%]",
            "bottom-[14%] right-[26%]",
          ].map((pos, i) => (
            <span
              key={pos}
              aria-hidden
              className={`absolute h-1 w-1 animate-float rounded-full bg-cyan/70 ${pos}`}
              style={{ animationDelay: `${-i * 1.8}s` }}
            />
          ))}
        </div>

        {/* Small screens: two counter-scrolling chip rows */}
        <div className="space-y-4 md:hidden">
          <Marquee duration={30}>
            {[...TECH_ORBITS[0], ...TECH_ORBITS[1]].map((tech) => (
              <span
                key={tech}
                className="glass mx-2 rounded-full px-4 py-2 font-mono text-[11px] whitespace-nowrap text-white/85"
              >
                {tech}
              </span>
            ))}
          </Marquee>
          <Marquee duration={34} reverse>
            {TECH_ORBITS[2].map((tech) => (
              <span
                key={tech}
                className="glass mx-2 rounded-full px-4 py-2 font-mono text-[11px] whitespace-nowrap text-white/85"
              >
                {tech}
              </span>
            ))}
          </Marquee>
        </div>
      </div>
    </section>
  );
}
