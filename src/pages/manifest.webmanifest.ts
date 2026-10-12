import type { APIRoute } from "astro";

export const GET: APIRoute = () =>
  new Response(
    JSON.stringify({
      name: "Media 360 Concept",
      short_name: "Media 360",
      description: "Digital marketing, web development, software, AI and branding agency in Kozhikode (Calicut), Kerala.",
      start_url: "/",
      display: "standalone",
      background_color: "#050505",
      theme_color: "#050505",
      icons: [{ src: "/logo.png", sizes: "512x512", type: "image/png" }],
    }),
    { headers: { "Content-Type": "application/manifest+json" } },
  );
