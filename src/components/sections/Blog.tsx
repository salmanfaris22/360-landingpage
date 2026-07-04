import Image from "next/image";
import { SectionHead } from "@/components/ui/SectionHead";
import { Reveal } from "@/components/ui/Reveal";
import { ArrowUpRight } from "@/components/ui/Icons";
import { POSTS } from "@/lib/data";

/** Editorial journal: one featured story, three index rows. */
export function Blog() {
  const [featured, ...rest] = POSTS;

  return (
    <section id="blog" className="relative py-28 md:py-40">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHead
          index="12"
          label="Insights"
          title="Branding insights for Kerala businesses."
          blurb="Straight answers to the questions business owners actually search — branding costs, rebranding timing, and what makes identities work in this market."
        />

        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Featured story */}
          <Reveal>
            <a href="#blog" data-cursor="Read" className="group block cursor-pointer">
              <div className="relative aspect-[16/10] overflow-hidden rounded-2xl border border-line">
                <Image
                  src={featured.image}
                  alt={featured.title}
                  fill
                  sizes="(min-width: 1024px) 45vw, 100vw"
                  className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105"
                />
                <span className="glass absolute top-4 left-4 rounded-full px-4 py-1.5 font-mono text-[10px] tracking-[0.25em] text-cyan uppercase">
                  {featured.category}
                </span>
              </div>
              <p className="mt-6 font-mono text-[11px] tracking-[0.25em] text-dim uppercase">
                {featured.date} — {featured.read} read
              </p>
              <h3 className="mt-3 max-w-lg font-display text-2xl font-semibold tracking-tight transition-colors duration-300 group-hover:text-cyan md:text-3xl">
                {featured.title}
              </h3>
            </a>
          </Reveal>

          {/* Index rows */}
          <div className="self-center border-t border-line">
            {rest.map((post, i) => (
              <Reveal key={post.title} delay={i * 0.08}>
                <a
                  href="#blog"
                  data-cursor="Read"
                  className="group flex cursor-pointer items-center gap-6 border-b border-line py-8"
                >
                  <div className="relative hidden h-20 w-28 shrink-0 overflow-hidden rounded-xl border border-line sm:block">
                    <Image
                      src={post.image}
                      alt=""
                      fill
                      sizes="112px"
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  </div>
                  <div className="min-w-0">
                    <p className="font-mono text-[10px] tracking-[0.25em] text-dim uppercase">
                      {post.category} — {post.date} — {post.read}
                    </p>
                    <h3 className="mt-2 font-display text-lg font-semibold tracking-tight transition-all duration-500 group-hover:translate-x-1 group-hover:text-cyan md:text-xl">
                      {post.title}
                    </h3>
                  </div>
                  <ArrowUpRight
                    size={18}
                    className="ml-auto shrink-0 text-dim transition-all duration-500 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-cyan"
                  />
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
