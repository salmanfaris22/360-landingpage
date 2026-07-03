"use client";

import { useEffect, useRef, useState } from "react";
import { gsap, prefersReducedMotion, isFinePointer } from "@/lib/gsap";

/**
 * Soft glow + ring follower. The native cursor stays visible (a11y);
 * the ring scales up over any element carrying [data-cursor] and shows
 * its value as a label (e.g. data-cursor="View").
 */
export function Cursor() {
  const glowRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const dotRef = useRef<HTMLDivElement>(null);
  const [label, setLabel] = useState("");
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    if (!isFinePointer() || prefersReducedMotion()) return;
    setEnabled(true);
  }, []);

  useEffect(() => {
    if (!enabled) return;
    const glow = glowRef.current!;
    const ring = ringRef.current!;
    const dot = dotRef.current!;

    const glowX = gsap.quickTo(glow, "x", { duration: 0.6, ease: "power3" });
    const glowY = gsap.quickTo(glow, "y", { duration: 0.6, ease: "power3" });
    const ringX = gsap.quickTo(ring, "x", { duration: 0.35, ease: "power3" });
    const ringY = gsap.quickTo(ring, "y", { duration: 0.35, ease: "power3" });
    const dotX = gsap.quickTo(dot, "x", { duration: 0.12, ease: "power3" });
    const dotY = gsap.quickTo(dot, "y", { duration: 0.12, ease: "power3" });

    let visible = false;
    const onMove = (e: MouseEvent) => {
      if (!visible) {
        visible = true;
        gsap.to([glow, ring, dot], { opacity: 1, duration: 0.4 });
      }
      glowX(e.clientX);
      glowY(e.clientY);
      ringX(e.clientX);
      ringY(e.clientY);
      dotX(e.clientX);
      dotY(e.clientY);
    };

    const onOver = (e: MouseEvent) => {
      const target = (e.target as HTMLElement).closest<HTMLElement>("[data-cursor]");
      if (target) {
        setLabel(target.dataset.cursor ?? "");
        gsap.to(ring, { scale: target.dataset.cursor ? 3.2 : 1.8, duration: 0.35, ease: "power3.out" });
        gsap.to(dot, { scale: 0, duration: 0.25 });
      } else {
        setLabel("");
        gsap.to(ring, { scale: 1, duration: 0.35, ease: "power3.out" });
        gsap.to(dot, { scale: 1, duration: 0.25 });
      }
    };

    const onDown = () => gsap.to(ring, { scale: 0.85, duration: 0.2 });
    const onUp = () => gsap.to(ring, { scale: 1, duration: 0.3, ease: "back.out(3)" });

    window.addEventListener("mousemove", onMove, { passive: true });
    window.addEventListener("mouseover", onOver, { passive: true });
    window.addEventListener("mousedown", onDown);
    window.addEventListener("mouseup", onUp);

    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseover", onOver);
      window.removeEventListener("mousedown", onDown);
      window.removeEventListener("mouseup", onUp);
    };
  }, [enabled]);

  if (!enabled) return null;

  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 z-[120]">
      <div
        ref={glowRef}
        className="absolute -top-40 -left-40 h-80 w-80 rounded-full opacity-0"
        style={{
          background:
            "radial-gradient(circle, rgb(139 92 246 / 14%) 0%, rgb(77 124 255 / 7%) 40%, transparent 70%)",
        }}
      />
      <div
        ref={ringRef}
        className="absolute -top-5 -left-5 flex h-10 w-10 items-center justify-center rounded-full border border-white/40 opacity-0"
      >
        {label && (
          <span className="font-mono text-[9px] tracking-[0.2em] text-white uppercase">
            {label}
          </span>
        )}
      </div>
      <div
        ref={dotRef}
        className="absolute -top-[3px] -left-[3px] h-1.5 w-1.5 rounded-full bg-cyan opacity-0"
      />
    </div>
  );
}
