/**
 * Site-wide motion, ported from the Next.js site: Lenis smooth scroll,
 * GSAP scroll reveals, word-mask headings, count-ups, magnetic buttons,
 * tilt cards, hero parallax, process spine and the custom cursor.
 *
 * Everything is progressive enhancement — the HTML is complete and readable
 * without this script, and reduced-motion users get none of it.
 */
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";

gsap.registerPlugin(ScrollTrigger);

const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const fine = window.matchMedia("(pointer: fine)").matches;
const $$ = <T extends HTMLElement = HTMLElement>(sel: string, root: ParentNode = document) =>
  Array.from(root.querySelectorAll<T>(sel));

let lenis: Lenis | null = null;

function smoothScroll() {
  lenis = new Lenis({ lerp: 0.1, smoothWheel: true });
  lenis.on("scroll", ScrollTrigger.update);
  gsap.ticker.add((t) => lenis!.raf(t * 1000));
  gsap.ticker.lagSmoothing(0);

  // In-page anchors glide through Lenis.
  document.addEventListener("click", (e) => {
    const a = (e.target as HTMLElement).closest<HTMLAnchorElement>('a[href^="#"]');
    if (!a || a.hash.length < 2) return;
    const target = document.querySelector<HTMLElement>(a.hash);
    if (!target) return;
    e.preventDefault();
    lenis!.scrollTo(target, { duration: 1.6 });
    history.replaceState(null, "", a.hash);
  });
}

/** Fade-up on scroll: [data-reveal], optional data-delay (seconds). */
function reveals() {
  $$("[data-reveal]").forEach((el) => {
    gsap.fromTo(
      el,
      { y: 48, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1.1,
        delay: Number(el.dataset.delay ?? 0),
        ease: "expo.out",
        scrollTrigger: { trigger: el, start: "top 88%" },
      },
    );
  });
}

/**
 * Word-mask reveal for [data-words] headings. Words are split at runtime so
 * the served HTML (what search engines read) stays a plain text heading;
 * the split copy is aria-hidden and the original text is kept for AT.
 */
function wordReveals() {
  $$("[data-words]").forEach((el) => {
    const text = el.textContent?.trim() ?? "";
    if (!text) return;
    el.innerHTML = "";
    const sr = document.createElement("span");
    sr.className = "sr-only";
    sr.textContent = text;
    el.append(sr);
    const words = text.split(/\s+/).map((w) => {
      const slot = document.createElement("span");
      slot.className = "wr-slot";
      slot.setAttribute("aria-hidden", "true");
      const inner = document.createElement("span");
      inner.className = "wr-word";
      inner.textContent = w + " ";
      slot.append(inner);
      el.append(slot);
      return inner;
    });
    gsap.fromTo(
      words,
      { yPercent: 120 },
      {
        yPercent: 0,
        duration: 1.2,
        ease: "expo.out",
        stagger: 0.04,
        scrollTrigger: { trigger: el, start: "top 85%" },
      },
    );
  });
}

/** Count-up for [data-count] — the real number is in the HTML already. */
function counters() {
  $$("[data-count]").forEach((el) => {
    const value = Number(el.dataset.count);
    const suffix = el.dataset.suffix ?? "";
    const state = { v: 0 };
    el.textContent = `0${suffix}`;
    gsap.to(state, {
      v: value,
      duration: 2,
      ease: "power2.out",
      scrollTrigger: { trigger: el, start: "top 90%" },
      onUpdate: () => {
        el.textContent = `${Math.round(state.v)}${suffix}`;
      },
    });
  });
}

/** Elastic pull toward the pointer: [data-magnetic]. */
function magnetic() {
  $$("[data-magnetic]").forEach((el) => {
    const xTo = gsap.quickTo(el, "x", { duration: 0.8, ease: "elastic.out(1, 0.4)" });
    const yTo = gsap.quickTo(el, "y", { duration: 0.8, ease: "elastic.out(1, 0.4)" });
    el.addEventListener("mousemove", (e) => {
      const r = el.getBoundingClientRect();
      xTo((e.clientX - r.left - r.width / 2) * 0.35);
      yTo((e.clientY - r.top - r.height / 2) * 0.35);
    });
    el.addEventListener("mouseleave", () => {
      xTo(0);
      yTo(0);
    });
  });
}

/** Perspective tilt following the pointer: [data-tilt]. */
function tilt() {
  $$("[data-tilt]").forEach((el) => {
    const max = Number(el.dataset.tilt || 6);
    gsap.set(el, { transformPerspective: 800 });
    const rx = gsap.quickTo(el, "rotationX", { duration: 0.5, ease: "power3" });
    const ry = gsap.quickTo(el, "rotationY", { duration: 0.5, ease: "power3" });
    el.addEventListener("mousemove", (e) => {
      const r = el.getBoundingClientRect();
      ry(((e.clientX - r.left) / r.width - 0.5) * max * 2);
      rx(-((e.clientY - r.top) / r.height - 0.5) * max * 2);
    });
    el.addEventListener("mouseleave", () => {
      rx(0);
      ry(0);
    });
  });
}

/** Hero: content lifts away on scroll, stat cards drift with the pointer. */
function hero() {
  const root = document.querySelector<HTMLElement>("#hero");
  const inner = root?.querySelector<HTMLElement>("[data-hero-inner]");
  if (!root || !inner) return;

  gsap.to(inner, {
    yPercent: -22,
    opacity: 0,
    ease: "none",
    scrollTrigger: { trigger: root, start: "top top", end: "bottom top", scrub: true },
  });

  if (fine) {
    const setters = $$(".hero-stat", root).map((card, i) => ({
      x: gsap.quickTo(card, "x", { duration: 1, ease: "power3" }),
      y: gsap.quickTo(card, "y", { duration: 1, ease: "power3" }),
      depth: (i + 1) * 12,
    }));
    root.addEventListener(
      "mousemove",
      (e) => {
        const nx = e.clientX / window.innerWidth - 0.5;
        const ny = e.clientY / window.innerHeight - 0.5;
        setters.forEach((s) => {
          s.x(nx * s.depth);
          s.y(ny * s.depth);
        });
      },
      { passive: true },
    );
  }

  // The three.js galaxy is decoration: large screens only, loaded when idle
  // so it never competes with the headline (LCP) for bandwidth.
  const sky = root.querySelector<HTMLElement>("[data-galaxy]");
  if (sky && window.innerWidth >= 1024) {
    const start = () => import("./galaxy").then((m) => m.mountGalaxy(sky));
    if ("requestIdleCallback" in window) requestIdleCallback(start, { timeout: 3500 });
    else setTimeout(start, 1200);
  }
}

/** Process spine draws down as you scroll. */
function processLine() {
  const line = document.querySelector(".process-line");
  if (!line) return;
  gsap.from(line, {
    scaleY: 0,
    transformOrigin: "top center",
    ease: "none",
    scrollTrigger: { trigger: ".process-list", start: "top 70%", end: "bottom 60%", scrub: 1 },
  });
}

/** Service rows: siblings dim, a gradient chip chases the cursor. */
function serviceIndex() {
  const list = document.querySelector<HTMLElement>("[data-service-list]");
  const chip = document.querySelector<HTMLElement>("[data-service-chip]");
  if (!list || !chip) return;
  const num = chip.querySelector<HTMLElement>("[data-chip-num]")!;
  const xTo = gsap.quickTo(chip, "x", { duration: 0.7, ease: "power3" });
  const yTo = gsap.quickTo(chip, "y", { duration: 0.7, ease: "power3" });
  const host = chip.offsetParent as HTMLElement;
  host.addEventListener(
    "mousemove",
    (e) => {
      const r = host.getBoundingClientRect();
      xTo(e.clientX - r.left + 32);
      yTo(e.clientY - r.top - 90);
    },
    { passive: true },
  );
  $$("details", list).forEach((row) => {
    row.addEventListener("mouseenter", () => {
      list.classList.add("is-hovering");
      row.classList.add("is-active");
      num.textContent = row.dataset.index ?? "";
      chip.style.opacity = "1";
    });
    row.addEventListener("mouseleave", () => row.classList.remove("is-active"));
  });
  list.addEventListener("mouseleave", () => {
    list.classList.remove("is-hovering");
    chip.style.opacity = "0";
  });
}

/** Glow + ring + dot follower. Native cursor stays visible (a11y). */
function cursor() {
  const wrap = document.createElement("div");
  wrap.setAttribute("aria-hidden", "true");
  wrap.className = "cursor-layer";
  wrap.innerHTML =
    '<div class="cursor-glow"></div><div class="cursor-ring"><span></span></div><div class="cursor-dot"></div>';
  document.body.append(wrap);
  const [glow, ring, dot] = Array.from(wrap.children) as HTMLElement[];
  const label = ring.querySelector("span")!;

  const mk = (el: HTMLElement, d: number) => [
    gsap.quickTo(el, "x", { duration: d, ease: "power3" }),
    gsap.quickTo(el, "y", { duration: d, ease: "power3" }),
  ];
  const movers = [mk(glow, 0.6), mk(ring, 0.35), mk(dot, 0.12)];
  let visible = false;

  window.addEventListener(
    "mousemove",
    (e) => {
      if (!visible) {
        visible = true;
        gsap.to([glow, ring, dot], { opacity: 1, duration: 0.4 });
      }
      movers.forEach(([x, y]) => {
        x(e.clientX);
        y(e.clientY);
      });
    },
    { passive: true },
  );

  window.addEventListener(
    "mouseover",
    (e) => {
      const t = (e.target as HTMLElement).closest<HTMLElement>("a, button, summary, [data-cursor]");
      const text = t?.dataset.cursor ?? "";
      label.textContent = text;
      gsap.to(ring, { scale: t ? (text ? 3.2 : 1.8) : 1, duration: 0.35, ease: "power3.out" });
      gsap.to(dot, { scale: t ? 0 : 1, duration: 0.25 });
    },
    { passive: true },
  );
  window.addEventListener("mousedown", () => gsap.to(ring, { scale: 0.85, duration: 0.2 }));
  window.addEventListener("mouseup", () => gsap.to(ring, { scale: 1, duration: 0.3, ease: "back.out(3)" }));
}

if (!reduced) {
  document.documentElement.classList.add("motion");
  smoothScroll();
  reveals();
  wordReveals();
  counters();
  hero();
  processLine();
  if (fine) {
    magnetic();
    tilt();
    serviceIndex();
    cursor();
  }
}
