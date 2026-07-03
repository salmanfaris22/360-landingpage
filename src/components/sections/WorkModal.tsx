"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap, useGSAP, prefersReducedMotion } from "@/lib/gsap";
import { stopScroll, startScroll } from "@/lib/scroll";
import { Plus } from "@/components/ui/Icons";
import { Button } from "@/components/ui/Button";
import type { Project } from "@/lib/data";

/** Fullscreen case-study sheet. Locks Lenis while open, closes on Esc. */
export function WorkModal({
  project,
  onClose,
}: {
  project: Project;
  onClose: () => void;
}) {
  const panel = useRef<HTMLDivElement>(null);
  const closeBtn = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    stopScroll();
    document.body.style.overflow = "hidden";
    closeBtn.current?.focus();
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
      startScroll();
    };
  }, [onClose]);

  useGSAP(() => {
    if (prefersReducedMotion()) return;
    gsap.fromTo(
      panel.current,
      { y: 90, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, ease: "expo.out" }
    );
  }, []);

  return (
    <div
      className="fixed inset-0 z-[110]"
      role="dialog"
      aria-modal="true"
      aria-label={`${project.title} case study`}
    >
      <button
        aria-label="Close case study"
        onClick={onClose}
        className="absolute inset-0 cursor-pointer bg-black/70 backdrop-blur-sm"
      />
      <div
        ref={panel}
        className="absolute inset-x-0 top-[5svh] bottom-0 overflow-y-auto rounded-t-3xl border border-line bg-surface md:inset-x-[4vw] md:top-[6svh] md:bottom-[6svh] md:rounded-3xl"
      >
        <div className="relative h-[36svh] md:h-[46svh]">
          <Image
            src={project.image}
            alt={`${project.title} — ${project.category}`}
            fill
            sizes="100vw"
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-surface via-transparent to-transparent" />
          <button
            ref={closeBtn}
            onClick={onClose}
            aria-label="Close"
            data-cursor
            className="glass absolute top-5 right-5 flex h-11 w-11 cursor-pointer items-center justify-center rounded-full text-white transition-transform duration-300 hover:rotate-90"
          >
            <Plus size={16} className="rotate-45" />
          </button>
        </div>

        <div className="px-6 pb-16 md:px-14">
          <div className="-mt-10 relative">
            <p className={`font-mono text-xs tracking-[0.3em] uppercase ${project.accent}`}>
              {project.category} — {project.year}
            </p>
            <h3 className="mt-3 font-display text-4xl font-bold tracking-tight md:text-6xl">
              {project.title}
            </h3>
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-dim">
              {project.description}
            </p>
          </div>

          <div className="mt-12 grid gap-10 md:grid-cols-2">
            <div className="rounded-2xl border border-line p-7">
              <p className="label-mono mb-4">The challenge</p>
              <p className="leading-relaxed text-white/85">{project.challenge}</p>
            </div>
            <div className="rounded-2xl border border-line p-7">
              <p className="label-mono mb-4">The solution</p>
              <p className="leading-relaxed text-white/85">{project.solution}</p>
            </div>
          </div>

          <div className="mt-10">
            <p className="label-mono mb-4">Technology</p>
            <ul className="flex flex-wrap gap-3">
              {project.tech.map((t) => (
                <li
                  key={t}
                  className="rounded-full border border-line px-4 py-1.5 font-mono text-[11px] tracking-[0.15em] text-white/70 uppercase"
                >
                  {t}
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-3">
            {project.results.map((r) => (
              <div key={r.label} className="bg-surface p-7 text-center">
                <p className="font-display text-3xl font-bold tracking-tight md:text-4xl">
                  {r.value}
                </p>
                <p className="mt-2 font-mono text-[10px] tracking-[0.25em] text-dim uppercase">
                  {r.label}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-14 flex justify-center">
            <Button href="#contact" onClick={onClose}>
              Start a project like this
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
