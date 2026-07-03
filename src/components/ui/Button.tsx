"use client";

import type { ReactNode, MouseEventHandler } from "react";
import { Magnetic } from "./Magnetic";
import { scrollToSection } from "@/lib/scroll";

/**
 * Magnetic pill button with a sliding-fill hover. `href="#id"` anchors
 * route through Lenis for a smooth glide.
 */
export function Button({
  href,
  children,
  variant = "solid",
  onClick,
}: {
  href?: string;
  children: ReactNode;
  variant?: "solid" | "ghost";
  onClick?: MouseEventHandler;
}) {
  const solid = variant === "solid";

  const handleClick: MouseEventHandler<HTMLAnchorElement> = (e) => {
    if (href?.startsWith("#")) {
      e.preventDefault();
      scrollToSection(href);
    }
    onClick?.(e);
  };

  return (
    <Magnetic>
      <a
        href={href ?? "#"}
        onClick={handleClick}
        data-cursor
        className={`group relative inline-flex min-h-[52px] cursor-pointer items-center gap-3 overflow-hidden rounded-full px-8 py-3.5 font-display text-sm font-medium tracking-wide transition-colors duration-300 ${
          solid
            ? "bg-white text-black hover:text-white"
            : "border border-white/25 text-white hover:text-black"
        }`}
      >
        <span className="relative z-10 flex items-center gap-3">
          {children}
          <svg
            width="14"
            height="14"
            viewBox="0 0 16 16"
            fill="none"
            aria-hidden
            className="transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-1 group-hover:-translate-y-1"
          >
            <path
              d="M3 13L13 3M13 3H5M13 3v8"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
        <span
          aria-hidden
          className={`absolute inset-0 translate-y-[102%] rounded-full transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-y-0 ${
            solid
              ? "bg-gradient-to-r from-blue via-violet to-cyan"
              : "bg-white"
          }`}
        />
      </a>
    </Magnetic>
  );
}
