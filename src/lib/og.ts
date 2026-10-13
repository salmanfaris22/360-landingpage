import { readFileSync } from "node:fs";
import { createRequire } from "node:module";
import satori from "satori";
import sharp from "sharp";

// Satori converts text to vector paths, so the PNGs render identically on any
// build machine regardless of installed system fonts.
const require = createRequire(import.meta.url);
const font = (pkg: string) => readFileSync(require.resolve(pkg));
const fonts = [
  { name: "Grotesk", data: font("@fontsource/space-grotesk/files/space-grotesk-latin-700-normal.woff"), weight: 700 as const, style: "normal" as const },
  { name: "Mono", data: font("@fontsource/jetbrains-mono/files/jetbrains-mono-latin-400-normal.woff"), weight: 400 as const, style: "normal" as const },
];

type El = { type: string; props: Record<string, unknown> };
const h = (type: string, style: Record<string, unknown>, children?: unknown): El => ({ type, props: { style, children } });

export async function ogPng(heading: string, eyebrow: string) {
  const tree = h("div", {
    width: 1200, height: 630, display: "flex", flexDirection: "column", justifyContent: "space-between",
    padding: 72, background: "linear-gradient(135deg, #050505 55%, #1a1640 100%)", color: "#fff",
  }, [
    h("div", { display: "flex", alignItems: "center", gap: 14, fontFamily: "Grotesk", fontSize: 34, fontWeight: 700 }, [
      "MEDIA 360",
      h("div", { width: 14, height: 14, borderRadius: 7, background: "linear-gradient(90deg,#4d7cff,#22d3ee)" }),
      h("span", { fontFamily: "Mono", fontSize: 18, letterSpacing: 6, color: "#9d9d9d" }, "CONCEPT"),
    ]),
    h("div", { display: "flex", flexDirection: "column", gap: 24 }, [
      h("div", { fontFamily: "Mono", fontSize: 22, letterSpacing: 4, color: "#22d3ee", textTransform: "uppercase" }, eyebrow),
      h("div", { fontFamily: "Grotesk", fontSize: heading.length > 60 ? 54 : 66, fontWeight: 700, lineHeight: 1.05, letterSpacing: -2, maxWidth: 1050 }, heading),
    ]),
    h("div", { display: "flex", fontFamily: "Mono", fontSize: 20, color: "#9d9d9d" }, "media360concept.com · HiLITE Business Park, Kozhikode"),
  ]);
  const svg = await satori(tree as never, { width: 1200, height: 630, fonts });
  return sharp(Buffer.from(svg)).png({ compressionLevel: 9 }).toBuffer();
}

const THEMES: Record<string, [string, string]> = {
  marketing: ["#4d7cff", "#22d3ee"],
  web: ["#8b5cf6", "#4d7cff"],
  software: ["#22d3ee", "#8b5cf6"],
  branding: ["#f472b6", "#8b5cf6"],
  local: ["#4d7cff", "#8b5cf6"],
  home: ["#8b5cf6", "#22d3ee"],
  academy: ["#ff6a3d", "#ffd23f"],
};

/**
 * In-page hero illustration (1600×900 WebP): brand gradient, orbit rings and
 * the page's real deliverables as chips. Graphics only — never presented as a
 * photo of the office or team.
 */
export async function pageImage(heading: string, eyebrow: string, chips: string[], theme = "home") {
  const [a, b] = THEMES[theme] ?? THEMES.home;
  const ring = (size: number, x: number, y: number, color: string, op: number) =>
    h("div", { position: "absolute", left: x - size / 2, top: y - size / 2, width: size, height: size, borderRadius: size, border: `2px solid ${color}`, opacity: op });
  const orb = (size: number, x: number, y: number, color: string) =>
    h("div", { position: "absolute", left: x - size / 2, top: y - size / 2, width: size, height: size, borderRadius: size, background: `radial-gradient(circle, ${color} 0%, transparent 70%)`, opacity: 0.55 });
  const tree = h("div", {
    width: 1600, height: 900, display: "flex", position: "relative", overflow: "hidden",
    background: "#050505", color: "#fff",
  }, [
    orb(1100, 1300, 250, a),
    orb(900, 1150, 800, b),
    ring(520, 1210, 450, a, 0.55),
    ring(760, 1210, 450, b, 0.35),
    ring(1000, 1210, 450, "#ffffff", 0.12),
    h("div", { position: "absolute", left: 1210 - 70, top: 450 - 70, width: 140, height: 140, borderRadius: 140, display: "flex", alignItems: "center", justifyContent: "center", background: `linear-gradient(135deg, ${a}, ${b})`, fontFamily: "Grotesk", fontSize: 46, fontWeight: 700 }, "360"),
    h("div", { position: "absolute", left: 96, top: 96, bottom: 96, width: 860, display: "flex", flexDirection: "column", justifyContent: "space-between" }, [
      h("div", { display: "flex", fontFamily: "Mono", fontSize: 24, letterSpacing: 5, color: b, textTransform: "uppercase" }, eyebrow),
      h("div", { display: "flex", fontFamily: "Grotesk", fontSize: heading.length > 55 ? 66 : 80, fontWeight: 700, lineHeight: 1.04, letterSpacing: -2.5 }, heading),
      h("div", { display: "flex", flexWrap: "wrap", gap: 14 }, chips.slice(0, 6).map((c) =>
        h("div", { display: "flex", padding: "12px 22px", borderRadius: 999, border: "1.5px solid rgba(255,255,255,0.22)", background: "rgba(255,255,255,0.05)", fontFamily: "Mono", fontSize: 21, color: "#e5e5e5" }, c),
      )),
      h("div", { display: "flex", fontFamily: "Mono", fontSize: 21, color: "#9d9d9d" }, "MEDIA 360 CONCEPT · HiLITE Business Park, Kozhikode (Calicut)"),
    ]),
  ]);
  const svg = await satori(tree as never, { width: 1600, height: 900, fonts });
  return sharp(Buffer.from(svg)).webp({ quality: 78 }).toBuffer();
}

export async function logoPng() {
  const tree = h("div", {
    width: 512, height: 512, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center",
    background: "#050505", color: "#fff", fontFamily: "Grotesk", fontWeight: 700,
  }, [
    h("div", { fontSize: 150, letterSpacing: -6, lineHeight: 1 }, "360"),
    h("div", { display: "flex", alignItems: "center", gap: 12, marginTop: 18, fontFamily: "Mono", fontSize: 30, letterSpacing: 8, color: "#9d9d9d" }, [
      h("div", { width: 16, height: 16, borderRadius: 8, background: "linear-gradient(90deg,#4d7cff,#22d3ee)" }),
      "MEDIA",
    ]),
  ]);
  const svg = await satori(tree as never, { width: 512, height: 512, fonts });
  return sharp(Buffer.from(svg)).png().toBuffer();
}
