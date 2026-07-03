import type Lenis from "lenis";

let lenis: Lenis | null = null;

export const setLenis = (instance: Lenis | null) => {
  lenis = instance;
};

export const getLenis = () => lenis;

/** Smooth-scroll to an anchor; falls back to native when Lenis is inactive. */
export const scrollToSection = (hash: string) => {
  const target = document.querySelector<HTMLElement>(hash);
  if (!target) return;
  if (lenis) {
    lenis.scrollTo(target, { duration: 1.6 });
  } else {
    target.scrollIntoView({ behavior: "smooth" });
  }
};

export const stopScroll = () => lenis?.stop();
export const startScroll = () => lenis?.start();
