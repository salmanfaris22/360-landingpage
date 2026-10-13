/**
 * Agency ↔ Academy switching. Links marked [data-side-link] stay plain links
 * (they work without JS); with JS the target side's colour fills the screen
 * first, then the browser navigates:
 * - on the gateway, the chosen half grows from half to full screen;
 * - everywhere else, that side's colour sweeps in from its own edge
 *   (agency from the left, academy from the right — as on the gateway).
 */
type Side = "agency" | "academy";

const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
let leaving = false;

const go = (href: string) => window.location.assign(href);

document.addEventListener("click", (e) => {
  const target = e.target as Element;

  // Anywhere on a gateway half counts as choosing it.
  const half = target.closest<HTMLElement>(".gate-half");
  if (half && !target.closest("a")) {
    half.querySelector<HTMLAnchorElement>("a[data-side-link]")?.click();
    return;
  }

  const a = target.closest<HTMLAnchorElement>("a[data-side-link]");
  if (!a || e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
  if (a.getAttribute("aria-current") === "true") return; // already on this side: plain navigation
  e.preventDefault();
  if (leaving) return;
  leaving = true;
  if (reduced) return go(a.href);

  const side = a.dataset.sideLink as Side;
  const gate = a.closest<HTMLElement>("[data-gate]");
  if (gate) {
    gate.classList.add("is-leaving", `go-${side}`);
    window.setTimeout(() => go(a.href), 820);
    return;
  }

  const fill = document.createElement("div");
  fill.className = `side-fill side-fill-${side}`;
  fill.setAttribute("aria-hidden", "true");
  document.body.append(fill);
  fill
    .animate(
      [{ clipPath: side === "agency" ? "inset(0 100% 0 0)" : "inset(0 0 0 100%)" }, { clipPath: "inset(0 0 0 0)" }],
      { duration: 760, easing: "cubic-bezier(0.76, 0, 0.24, 1)", fill: "forwards" },
    )
    .finished.then(() => go(a.href), () => go(a.href));
});

// Warm the other side's page while the pointer is on its link.
const warmed = new Set<string>();
document.addEventListener(
  "pointerover",
  (e) => {
    const a = (e.target as Element).closest<HTMLAnchorElement>("a[data-side-link], .gate-half");
    const link = a?.matches("a") ? (a as HTMLAnchorElement) : a?.querySelector<HTMLAnchorElement>("a[data-side-link]");
    if (!link || warmed.has(link.href)) return;
    warmed.add(link.href);
    const hint = document.createElement("link");
    hint.rel = "prefetch";
    hint.href = link.href;
    document.head.append(hint);
  },
  { passive: true },
);

// Back/forward cache restores the page mid-transition — reset it.
window.addEventListener("pageshow", (e) => {
  if (!e.persisted) return;
  leaving = false;
  document.querySelectorAll(".side-fill").forEach((n) => n.remove());
  document.querySelectorAll("[data-gate]").forEach((g) => g.classList.remove("is-leaving", "go-agency", "go-academy"));
});
