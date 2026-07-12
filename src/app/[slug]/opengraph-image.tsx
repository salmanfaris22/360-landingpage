import { ImageResponse } from "next/og";
import { getSeoPage } from "@/lib/seo-pages";

export const alt = "Media 360 Concept — Branding & Creative Agency, Kochi";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const page = getSeoPage(slug);
  const title = page?.title ?? "Branding & Creative Agency";
  const eyebrow = page?.eyebrow ?? "Kochi, Kerala";

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px 80px",
          backgroundColor: "#050505",
          backgroundImage:
            "radial-gradient(600px 400px at 85% 0%, rgba(139,92,246,0.22), transparent), radial-gradient(500px 400px at 0% 100%, rgba(34,211,238,0.18), transparent)",
          color: "#ffffff",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "baseline",
            fontSize: 34,
            fontWeight: 700,
            letterSpacing: "-0.02em",
          }}
        >
          MEDIA 360
          <div
            style={{
              width: 12,
              height: 12,
              marginLeft: 8,
              borderRadius: 999,
              background: "linear-gradient(90deg, #4d7cff, #22d3ee)",
            }}
          />
          <div
            style={{
              display: "flex",
              marginLeft: 16,
              fontSize: 18,
              fontWeight: 400,
              letterSpacing: "0.3em",
              color: "#9d9d9d",
            }}
          >
            CONCEPT
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              display: "flex",
              fontSize: 20,
              letterSpacing: "0.25em",
              textTransform: "uppercase",
              color: "#22d3ee",
            }}
          >
            {eyebrow}
          </div>
          <div
            style={{
              display: "flex",
              marginTop: 20,
              fontSize: 74,
              fontWeight: 700,
              letterSpacing: "-0.03em",
              lineHeight: 1.05,
            }}
          >
            {title}
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            fontSize: 22,
            color: "#9d9d9d",
          }}
        >
          <div style={{ display: "flex" }}>www.360mediaconcepts.com</div>
          <div style={{ display: "flex" }}>Free consultation · WhatsApp +91 9061 460 360</div>
        </div>
      </div>
    ),
    size
  );
}
