import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Media 360 Concept — Branding & Creative Agency, Kozhikode",
    short_name: "Media 360",
    description:
      "Premium branding, advertising, and creative agency in Kozhikode, Kerala — brand identity, logo design, packaging, digital marketing, web and app development.",
    start_url: "/",
    display: "standalone",
    background_color: "#050505",
    theme_color: "#050505",
    categories: ["business", "design", "marketing"],
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
    ],
  };
}
