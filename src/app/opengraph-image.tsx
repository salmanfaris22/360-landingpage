import { ImageResponse } from "next/og";

export const alt =
  "Media 360 Concept — Branding & Creative Agency in Kozhikode, Kerala";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
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
            "radial-gradient(600px 400px at 85% 0%, rgba(77,124,255,0.25), transparent), radial-gradient(500px 400px at 0% 100%, rgba(34,211,238,0.18), transparent)",
          color: "#ffffff",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 22,
            letterSpacing: "0.3em",
            color: "#9d9d9d",
          }}
        >
          BRANDING · ADVERTISING · DIGITAL
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              display: "flex",
              alignItems: "baseline",
              fontSize: 120,
              fontWeight: 700,
              letterSpacing: "-0.04em",
            }}
          >
            MEDIA 360
            <div
              style={{
                width: 24,
                height: 24,
                marginLeft: 14,
                borderRadius: 999,
                background: "linear-gradient(90deg, #4d7cff, #22d3ee)",
              }}
            />
          </div>
          <div style={{ display: "flex", fontSize: 38, color: "#d4d4d4" }}>
            Branding &amp; Creative Agency — Kozhikode, Kerala
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
          <div style={{ display: "flex" }}>Kerala · India · KSA · UAE · USA</div>
        </div>
      </div>
    ),
    size
  );
}
