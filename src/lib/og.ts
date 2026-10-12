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
    h("div", { display: "flex", fontFamily: "Mono", fontSize: 20, color: "#9d9d9d" }, "360mediaconcepts.com · HiLITE Business Park, Kozhikode"),
  ]);
  const svg = await satori(tree as never, { width: 1200, height: 630, fonts });
  return sharp(Buffer.from(svg)).png({ compressionLevel: 9 }).toBuffer();
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
