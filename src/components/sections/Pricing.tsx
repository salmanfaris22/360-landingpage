import { SectionHead } from "@/components/ui/SectionHead";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { Check, Sparkle } from "@/components/ui/Icons";
import { PRICING } from "@/lib/data";

/** Three tiers; the Business tier wears the gradient halo. */
export function Pricing() {
  return (
    <section id="pricing" className="relative py-28 md:py-40">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHead
          index="10"
          label="Investment"
          title="Priced like a partner, not a vendor."
          blurb="Transparent tiers to start the conversation. Every engagement is scoped precisely before you sign anything."
        />

        <div className="grid gap-8 lg:grid-cols-3 lg:items-stretch">
          {PRICING.map((tier, i) => (
            <Reveal key={tier.name} delay={i * 0.1} className="h-full">
              <div
                className={`relative h-full rounded-3xl ${
                  tier.featured
                    ? "bg-gradient-to-b from-blue via-violet to-cyan p-px shadow-[0_0_80px_rgb(139_92_246/20%)]"
                    : "border border-line"
                }`}
              >
                <div
                  className={`flex h-full flex-col rounded-[calc(1.5rem-1px)] p-8 md:p-10 ${
                    tier.featured ? "bg-surface" : "bg-transparent"
                  }`}
                >
                  {tier.featured && (
                    <span className="absolute -top-3.5 left-1/2 flex -translate-x-1/2 items-center gap-2 rounded-full bg-gradient-to-r from-blue to-cyan px-4 py-1.5 font-mono text-[10px] font-medium tracking-[0.25em] text-black uppercase">
                      <Sparkle size={10} /> Most popular
                    </span>
                  )}

                  <h3 className="font-display text-xl font-semibold tracking-tight">
                    {tier.name}
                  </h3>
                  <p className="mt-2 text-sm text-dim">{tier.blurb}</p>

                  <p className="mt-8 flex items-baseline gap-3">
                    <span className="font-display text-5xl font-bold tracking-tight">
                      {tier.price}
                    </span>
                    <span className="font-mono text-[10px] tracking-[0.2em] text-dim uppercase">
                      {tier.per}
                    </span>
                  </p>

                  <ul className="mt-9 flex-1 space-y-4 border-t border-line pt-8">
                    {tier.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3 text-sm text-white/85">
                        <Check size={15} className="mt-0.5 shrink-0 text-cyan" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-10">
                    <Button href="#contact" variant={tier.featured ? "solid" : "ghost"}>
                      {tier.price === "Custom" ? "Talk to us" : "Get started"}
                    </Button>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
