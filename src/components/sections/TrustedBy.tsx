import { Marquee } from "@/components/ui/Marquee";
import { CLIENTS } from "@/lib/data";

/** Dual counter-scrolling wordmark marquees between hairlines. */
export function TrustedBy() {
  return (
    <section aria-label="Trusted by" className="relative border-y border-line py-14">
      <p className="label-mono mb-10 text-center">Trusted by forward thinkers</p>

      <Marquee duration={44} className="mb-6">
        {CLIENTS.map((client) => (
          <span key={client} className="mx-10 flex items-center gap-10">
            <span className="font-display text-3xl font-semibold tracking-tight text-white/30 transition-colors duration-500 hover:text-white">
              {client}
            </span>
            <span className="text-xs text-white/20" aria-hidden>
              ✦
            </span>
          </span>
        ))}
      </Marquee>

      <Marquee duration={52} reverse>
        {[...CLIENTS].reverse().map((client) => (
          <span key={client} className="mx-10 flex items-center gap-10">
            <span className="text-stroke font-display text-3xl font-semibold tracking-tight transition-colors duration-500 hover:text-white/60">
              {client}©
            </span>
            <span className="text-xs text-white/20" aria-hidden>
              ●
            </span>
          </span>
        ))}
      </Marquee>
    </section>
  );
}
