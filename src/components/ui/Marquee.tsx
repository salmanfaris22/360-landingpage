import type { ReactNode } from "react";

/**
 * Infinite CSS marquee. Content is duplicated once; the track translates
 * -50% and loops. Pass `pauseOnHover` for interactive rows.
 */
export function Marquee({
  children,
  duration = 36,
  reverse = false,
  pauseOnHover = false,
  className = "",
}: {
  children: ReactNode;
  duration?: number;
  reverse?: boolean;
  pauseOnHover?: boolean;
  className?: string;
}) {
  return (
    <div className={`group/marquee overflow-hidden ${className}`}>
      <div
        className={`flex w-max animate-marquee ${
          pauseOnHover ? "group-hover/marquee:[animation-play-state:paused]" : ""
        }`}
        style={{
          animationDuration: `${duration}s`,
          animationDirection: reverse ? "reverse" : "normal",
        }}
      >
        <div className="flex shrink-0 items-center">{children}</div>
        <div className="flex shrink-0 items-center" aria-hidden>
          {children}
        </div>
      </div>
    </div>
  );
}
