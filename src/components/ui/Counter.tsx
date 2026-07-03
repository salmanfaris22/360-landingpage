"use client";

import { useRef } from "react";
import { gsap, useGSAP, prefersReducedMotion } from "@/lib/gsap";

/** Number that counts up from 0 when scrolled into view. */
export function Counter({
  value,
  suffix = "",
  className,
  duration = 2,
}: {
  value: number;
  suffix?: string;
  className?: string;
  duration?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);

  useGSAP(() => {
    const el = ref.current!;
    if (prefersReducedMotion()) {
      el.textContent = `${value}${suffix}`;
      return;
    }
    const state = { v: 0 };
    gsap.to(state, {
      v: value,
      duration,
      ease: "power2.out",
      scrollTrigger: { trigger: el, start: "top 90%" },
      onUpdate: () => {
        el.textContent = `${Math.round(state.v)}${suffix}`;
      },
    });
  }, [value, suffix, duration]);

  return (
    <span ref={ref} className={className}>
      0{suffix}
    </span>
  );
}
