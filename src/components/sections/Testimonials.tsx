import Image from "next/image";
import { SectionHead } from "@/components/ui/SectionHead";
import { WordReveal } from "@/components/ui/Reveal";
import { Marquee } from "@/components/ui/Marquee";
import { Star } from "@/components/ui/Icons";
import { TESTIMONIALS } from "@/lib/data";

/** A featured pull-quote, then a slow glass-card river (pauses on hover). */
export function Testimonials() {
  const [featured, ...rest] = TESTIMONIALS;

  return (
    <section id="testimonials" className="relative overflow-hidden border-y border-line bg-surface py-28 md:py-40">
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(55% 80% at 80% 20%, rgb(34 211 238 / 6%), transparent 60%)",
        }}
      />
      <div className="relative mx-auto max-w-7xl px-6">
        <SectionHead index="08" label="Why choose us" title="Built on trust. Proven by work." />

        {/* Featured quote */}
        <figure className="mb-20 max-w-4xl">
          <WordReveal
            as="blockquote"
            text={`“${featured.quote}”`}
            className="font-display text-2xl leading-snug font-medium tracking-tight md:text-4xl"
          />
          <figcaption className="mt-8 flex items-center gap-4">
            <span className="relative h-12 w-12 overflow-hidden rounded-full border border-line">
              <Image
                src={featured.image}
                alt={featured.name}
                fill
                sizes="48px"
                className="object-cover"
              />
            </span>
            <span>
              <span className="block font-display font-semibold">{featured.name}</span>
              <span className="font-mono text-[11px] tracking-[0.2em] text-dim uppercase">
                {featured.role}, {featured.company}
              </span>
            </span>
            <span role="img" className="ml-auto flex gap-1 text-cyan" aria-label="5 out of 5 stars">
              {Array.from({ length: featured.rating }).map((_, i) => (
                <Star key={i} size={14} />
              ))}
            </span>
          </figcaption>
        </figure>
      </div>

      <Marquee duration={64} pauseOnHover className="relative">
        {rest.map((t) => (
          <figure
            key={t.name}
            className="glass mx-4 flex w-[22rem] shrink-0 flex-col justify-between rounded-2xl p-7 md:w-[26rem]"
          >
            <div>
              <span role="img" className="flex gap-1 text-cyan" aria-label={`${t.rating} out of 5 stars`}>
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} size={12} />
                ))}
              </span>
              <blockquote className="mt-5 leading-relaxed text-white/90">
                “{t.quote}”
              </blockquote>
            </div>
            <figcaption className="mt-7 flex items-center gap-3 border-t border-line pt-5">
              <span className="relative h-10 w-10 overflow-hidden rounded-full border border-line">
                <Image src={t.image} alt={t.name} fill sizes="40px" className="object-cover" />
              </span>
              <span>
                <span className="block text-sm font-semibold">{t.name}</span>
                <span className="font-mono text-[10px] tracking-[0.2em] text-dim uppercase">
                  {t.role}, {t.company}
                </span>
              </span>
              <span className="ml-auto font-display text-sm font-bold tracking-tight text-white/40">
                {t.company.split(" ")[0].toUpperCase()}
              </span>
            </figcaption>
          </figure>
        ))}
      </Marquee>
    </section>
  );
}
