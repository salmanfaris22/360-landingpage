import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & { size?: number };

const base = (size?: number) => ({
  width: size ?? 16,
  height: size ?? 16,
  fill: "none",
  "aria-hidden": true as const,
});

export const ArrowUpRight = ({ size, ...props }: IconProps) => (
  <svg viewBox="0 0 16 16" {...base(size)} {...props}>
    <path
      d="M3 13L13 3M13 3H5M13 3v8"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const ArrowRight = ({ size, ...props }: IconProps) => (
  <svg viewBox="0 0 16 16" {...base(size)} {...props}>
    <path
      d="M2 8h12m0 0L9 3m5 5l-5 5"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const Plus = ({ size, ...props }: IconProps) => (
  <svg viewBox="0 0 16 16" {...base(size)} {...props}>
    <path d="M8 2v12M2 8h12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

export const Star = ({ size, ...props }: IconProps) => (
  <svg viewBox="0 0 16 16" {...base(size)} {...props}>
    <path
      d="M8 1.5l2 4.1 4.5.7-3.2 3.1.7 4.5L8 11.8l-4 2.1.7-4.5-3.2-3.1 4.5-.7L8 1.5z"
      fill="currentColor"
    />
  </svg>
);

export const Check = ({ size, ...props }: IconProps) => (
  <svg viewBox="0 0 16 16" {...base(size)} {...props}>
    <path
      d="M3 8.5L6.5 12L13 4.5"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const Sparkle = ({ size, ...props }: IconProps) => (
  <svg viewBox="0 0 16 16" {...base(size)} {...props}>
    <path
      d="M8 1c.6 3.6 2.4 5.4 6 6-3.6.6-5.4 2.4-6 6-.6-3.6-2.4-5.4-6-6 3.6-.6 5.4-2.4 6-6z"
      fill="currentColor"
    />
  </svg>
);

export const SocialX = ({ size, ...props }: IconProps) => (
  <svg viewBox="0 0 16 16" {...base(size)} {...props}>
    <path
      d="M9.3 6.9L14.6 1h-1.3L8.7 6.1 5.1 1H1l5.5 8L1 15h1.3l4.8-5.4 3.8 5.4H15L9.3 6.9zM7.7 8.8l-.6-.8L2.7 2h1.9l3.6 5.1.6.8 4.6 6.6h-1.9L7.7 8.8z"
      fill="currentColor"
    />
  </svg>
);

export const SocialLinkedIn = ({ size, ...props }: IconProps) => (
  <svg viewBox="0 0 16 16" {...base(size)} {...props}>
    <path
      d="M3.4 1.8a1.6 1.6 0 11-.02 3.2 1.6 1.6 0 01.02-3.2zM2 6h2.8v8H2V6zm4.4 0h2.7v1.1h.04c.37-.7 1.28-1.44 2.64-1.44 2.82 0 3.34 1.86 3.34 4.28V14h-2.8v-3.6c0-.86-.02-1.97-1.2-1.97-1.2 0-1.38.94-1.38 1.9V14H6.4V6z"
      fill="currentColor"
    />
  </svg>
);

export const SocialInstagram = ({ size, ...props }: IconProps) => (
  <svg viewBox="0 0 16 16" {...base(size)} {...props}>
    <rect x="1.5" y="1.5" width="13" height="13" rx="3.5" stroke="currentColor" strokeWidth="1.3" />
    <circle cx="8" cy="8" r="3" stroke="currentColor" strokeWidth="1.3" />
    <circle cx="11.8" cy="4.2" r="0.9" fill="currentColor" />
  </svg>
);

export const SocialDribbble = ({ size, ...props }: IconProps) => (
  <svg viewBox="0 0 16 16" {...base(size)} {...props}>
    <circle cx="8" cy="8" r="6.5" stroke="currentColor" strokeWidth="1.3" />
    <path
      d="M2.5 6.5c3 .5 6.5.3 9.5-2M13.8 6c-3.5 1-6 3.5-7.3 8M5 2.3c2 2.2 4.3 6 5.3 11"
      stroke="currentColor"
      strokeWidth="1.3"
      strokeLinecap="round"
    />
  </svg>
);
