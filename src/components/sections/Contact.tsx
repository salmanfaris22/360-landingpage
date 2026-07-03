"use client";

import { useRef, useState, type FormEvent } from "react";
import { SectionHead } from "@/components/ui/SectionHead";
import { Reveal } from "@/components/ui/Reveal";
import { Check, ArrowUpRight, SocialX, SocialLinkedIn, SocialInstagram, SocialDribbble } from "@/components/ui/Icons";
import { OFFICES } from "@/lib/data";

const inputClass =
  "w-full rounded-xl border border-line bg-white/[0.03] px-5 py-4 text-white placeholder:text-white/25 transition-colors duration-300 focus:border-cyan/60 focus:outline-none focus:ring-1 focus:ring-cyan/40";

/** Contact chapter: pointer-reactive glow, working form states, offices. */
export function Contact() {
  const root = useRef<HTMLElement>(null);
  const glow = useRef<HTMLDivElement>(null);
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");

  const onMove = (e: React.MouseEvent) => {
    const rect = root.current!.getBoundingClientRect();
    glow.current?.style.setProperty("--mx", `${e.clientX - rect.left}px`);
    glow.current?.style.setProperty("--my", `${e.clientY - rect.top}px`);
  };

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (status !== "idle") return;
    setStatus("sending");
    // Demo submit — wire to your API route / CRM here
    window.setTimeout(() => setStatus("sent"), 1400);
  };

  return (
    <section
      ref={root}
      id="contact"
      onMouseMove={onMove}
      className="relative overflow-hidden py-28 md:py-40"
    >
      {/* Pointer-reactive atmosphere */}
      <div
        ref={glow}
        aria-hidden
        className="pointer-events-none absolute inset-0 transition-opacity duration-500"
        style={{
          background:
            "radial-gradient(600px circle at var(--mx, 50%) var(--my, 30%), rgb(77 124 255 / 9%), transparent 65%)",
        }}
      />
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.35]"
        style={{
          backgroundImage:
            "radial-gradient(rgb(255 255 255 / 7%) 1px, transparent 1px)",
          backgroundSize: "36px 36px",
          maskImage: "radial-gradient(70% 60% at 50% 40%, black, transparent)",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-6">
        <SectionHead
          index="13"
          label="Contact"
          title="Have an idea? Let's make it unforgettable."
          blurb="Tell us where you're headed. We'll reply within 24 hours with honest thoughts — even if the honest thought is 'you don't need us yet'."
        />

        <div className="grid gap-16 lg:grid-cols-[1.4fr_1fr] lg:gap-24">
          {/* Form */}
          <Reveal>
            <form onSubmit={onSubmit} noValidate={false} className="space-y-6">
              <div className="grid gap-6 sm:grid-cols-2">
                <div>
                  <label htmlFor="name" className="label-mono mb-3 block">
                    Your name *
                  </label>
                  <input
                    id="name"
                    name="name"
                    required
                    autoComplete="name"
                    placeholder="Ada Lovelace"
                    className={inputClass}
                  />
                </div>
                <div>
                  <label htmlFor="email" className="label-mono mb-3 block">
                    Email *
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    autoComplete="email"
                    placeholder="ada@company.com"
                    className={inputClass}
                  />
                </div>
              </div>

              <div className="grid gap-6 sm:grid-cols-2">
                <div>
                  <label htmlFor="company" className="label-mono mb-3 block">
                    Company
                  </label>
                  <input
                    id="company"
                    name="company"
                    autoComplete="organization"
                    placeholder="Analytical Engines Ltd"
                    className={inputClass}
                  />
                </div>
                <div>
                  <label htmlFor="budget" className="label-mono mb-3 block">
                    Budget
                  </label>
                  <select id="budget" name="budget" defaultValue="" className={inputClass}>
                    <option value="" disabled>
                      Select a range
                    </option>
                    <option value="starter">$5k — $15k</option>
                    <option value="business">$15k — $50k</option>
                    <option value="enterprise">$50k+</option>
                    <option value="unsure">Not sure yet</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="message" className="label-mono mb-3 block">
                  The idea *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  placeholder="We want to build…"
                  className={`${inputClass} resize-none`}
                />
              </div>

              <div className="flex flex-wrap items-center gap-6 pt-2">
                <button
                  type="submit"
                  disabled={status !== "idle"}
                  data-cursor
                  className={`group relative inline-flex min-h-[52px] cursor-pointer items-center gap-3 overflow-hidden rounded-full px-9 py-4 font-display text-sm font-medium transition-all duration-300 disabled:cursor-default ${
                    status === "sent"
                      ? "bg-cyan text-black"
                      : "bg-white text-black hover:text-white disabled:opacity-70"
                  }`}
                >
                  <span className="relative z-10 flex items-center gap-3">
                    {status === "idle" && (
                      <>
                        Send it <ArrowUpRight size={14} />
                      </>
                    )}
                    {status === "sending" && (
                      <>
                        <span className="h-4 w-4 animate-spin rounded-full border-2 border-black/30 border-t-black" />
                        Sending…
                      </>
                    )}
                    {status === "sent" && (
                      <>
                        <Check size={15} /> Received — talk soon
                      </>
                    )}
                  </span>
                  {status === "idle" && (
                    <span
                      aria-hidden
                      className="absolute inset-0 translate-y-[102%] bg-gradient-to-r from-blue via-violet to-cyan transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-y-0"
                    />
                  )}
                </button>
                <p aria-live="polite" className="font-mono text-[11px] tracking-[0.2em] text-dim uppercase">
                  {status === "sent"
                    ? "We reply within 24 hours."
                    : "No decks required. Ideas welcome."}
                </p>
              </div>
            </form>
          </Reveal>

          {/* Offices + reach */}
          <div className="space-y-6">
            {OFFICES.map((office, i) => (
              <Reveal key={office.city} delay={i * 0.08}>
                <div className="glass rounded-2xl p-6">
                  <div className="flex items-baseline justify-between">
                    <h3 className="font-display text-xl font-semibold tracking-tight">
                      {office.city}
                    </h3>
                    <span className="font-mono text-[10px] tracking-[0.25em] text-cyan uppercase">
                      {office.tz}
                    </span>
                  </div>
                  <p className="mt-2 text-sm text-dim">
                    {office.line} — {office.country}
                  </p>
                </div>
              </Reveal>
            ))}

            {/* Stylised constellation map */}
            <Reveal delay={0.2}>
              <div
                className="relative h-44 overflow-hidden rounded-2xl border border-line"
                aria-label="ROOT DIGITAL operates worldwide"
                role="img"
              >
                <div
                  aria-hidden
                  className="absolute inset-0"
                  style={{
                    backgroundImage:
                      "radial-gradient(rgb(255 255 255 / 14%) 1px, transparent 1px)",
                    backgroundSize: "22px 22px",
                  }}
                />
                {[
                  { pos: "top-[38%] left-[58%]", label: "DXB" },
                  { pos: "top-[26%] left-[44%]", label: "LDN" },
                  { pos: "top-[55%] left-[30%]", label: "NYC" },
                ].map((pin) => (
                  <span key={pin.label} className={`absolute ${pin.pos} flex items-center gap-2`}>
                    <span className="relative flex h-2.5 w-2.5">
                      <span className="absolute inline-flex h-full w-full animate-ping-slow rounded-full bg-cyan/60" />
                      <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-cyan" />
                    </span>
                    <span className="font-mono text-[9px] tracking-[0.3em] text-white/60">
                      {pin.label}
                    </span>
                  </span>
                ))}
              </div>
            </Reveal>

            <Reveal delay={0.25}>
              <div className="flex items-center justify-between border-t border-line pt-6">
                <a
                  href="mailto:hello@rootdigital.studio"
                  className="link-underline cursor-pointer font-mono text-xs tracking-[0.2em] text-white/80 uppercase"
                >
                  hello@rootdigital.studio
                </a>
                <div className="flex gap-3">
                  {[
                    { Icon: SocialX, label: "X" },
                    { Icon: SocialLinkedIn, label: "LinkedIn" },
                    { Icon: SocialInstagram, label: "Instagram" },
                    { Icon: SocialDribbble, label: "Dribbble" },
                  ].map(({ Icon, label }) => (
                    <a
                      key={label}
                      href="#contact"
                      aria-label={`ROOT DIGITAL on ${label}`}
                      className="glass flex h-10 w-10 cursor-pointer items-center justify-center rounded-full text-white/70 transition-all duration-300 hover:-translate-y-1 hover:text-cyan"
                    >
                      <Icon size={14} />
                    </a>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
