"use client";

import { useRef, type ReactNode } from "react";
import { gsap, useGSAP, prefersReducedMotion } from "@/lib/gsap";

/** Fade-up reveal for arbitrary content, triggered on scroll. */
export function Reveal({
  children,
  className,
  delay = 0,
  y = 48,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  y?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (prefersReducedMotion()) return;
      gsap.set(ref.current, { y, opacity: 0 });
      gsap.to(ref.current, {
        y: 0,
        opacity: 1,
        duration: 1.1,
        delay,
        ease: "expo.out",
        scrollTrigger: { trigger: ref.current, start: "top 88%" },
      });
    },
    { scope: ref }
  );

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}

/**
 * Editorial word-mask reveal: each word slides out of an overflow-hidden
 * slot with a stagger. Screen readers get the plain string via aria-label.
 */
export function WordReveal({
  text,
  className,
  as: Tag = "h2",
  delay = 0,
}: {
  text: string;
  className?: string;
  as?: "h1" | "h2" | "h3" | "h4" | "p" | "blockquote" | "span";
  delay?: number;
}) {
  const ref = useRef<HTMLElement | null>(null);

  useGSAP(
    () => {
      if (prefersReducedMotion()) return;
      const words = ref.current!.querySelectorAll<HTMLElement>(".wr-word");
      gsap.set(words, { yPercent: 120 });
      gsap.to(words, {
        yPercent: 0,
        duration: 1.2,
        delay,
        ease: "expo.out",
        stagger: 0.04,
        scrollTrigger: { trigger: ref.current, start: "top 85%" },
      });
    },
    { scope: ref }
  );

  return (
    <Tag
      ref={(el: HTMLElement | null) => {
        ref.current = el;
      }}
      className={className}
      aria-label={text}
    >
      {text.split(" ").map((word, i) => (
        <span
          key={i}
          aria-hidden
          className="inline-block overflow-hidden pb-[0.1em] -mb-[0.1em] align-top"
        >
          <span className="wr-word inline-block will-change-transform">
            {word}
            {" "}
          </span>
        </span>
      ))}
    </Tag>
  );
}
