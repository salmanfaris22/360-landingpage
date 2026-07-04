import Image from "next/image";
import { SectionHead } from "@/components/ui/SectionHead";
import { Reveal } from "@/components/ui/Reveal";
import { Tilt } from "@/components/ui/Tilt";
import { SocialX, SocialLinkedIn, SocialDribbble } from "@/components/ui/Icons";
import { TEAM } from "@/lib/data";

/** Tilt-card portrait wall; middle column floats lower for rhythm. */
export function Team() {
  return (
    <section id="team" className="relative py-28 md:py-40">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHead
          index="07"
          label="The team"
          title="The minds behind the brands."
          blurb="Senior strategists, designers, engineers, and producers — the same people who scope your project craft it, from first sketch to final delivery."
        />

        <ul className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 lg:gap-10">
          {TEAM.map((member, i) => (
            <li
              key={member.name}
              className={i % 3 === 1 ? "lg:translate-y-12" : ""}
            >
              <Reveal delay={(i % 3) * 0.08}>
                <Tilt max={6}>
                  <div className="group relative overflow-hidden rounded-2xl border border-line">
                    <div className="relative aspect-[3/4]">
                      <Image
                        src={member.image}
                        alt={`${member.name}, ${member.role} at Media 360 Concept`}
                        fill
                        sizes="(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 100vw"
                        className="object-cover grayscale transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105 group-hover:grayscale-0"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-base/90 via-base/10 to-transparent" />
                    </div>

                    <div className="absolute inset-x-0 bottom-0 flex items-end justify-between p-6">
                      <div>
                        <h3 className="font-display text-xl font-semibold tracking-tight">
                          {member.name}
                        </h3>
                        <p className="mt-1 font-mono text-[10px] tracking-[0.25em] text-cyan uppercase">
                          {member.role}
                        </p>
                      </div>
                      <div className="flex translate-y-3 gap-2 opacity-0 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-y-0 group-hover:opacity-100">
                        {[
                          { Icon: SocialX, label: "X profile" },
                          { Icon: SocialLinkedIn, label: "LinkedIn profile" },
                          { Icon: SocialDribbble, label: "Dribbble profile" },
                        ].map(({ Icon, label }) => (
                          <a
                            key={label}
                            href="#contact"
                            aria-label={`${member.name} — ${label}`}
                            className="glass flex h-9 w-9 cursor-pointer items-center justify-center rounded-full text-white/80 transition-colors hover:text-cyan"
                          >
                            <Icon size={13} />
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                </Tilt>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
