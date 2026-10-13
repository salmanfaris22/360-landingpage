import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

// Fully static: every page is pre-rendered HTML with no framework JS, so
// crawlers and AI bots read the complete content without running scripts.
export default defineConfig({
  site: "https://www.media360concept.com",
  // URLs stay exactly as they were on the Next.js site: /branding-agency-kozhikode (no trailing slash).
  trailingSlash: "never",
  build: { format: "file", inlineStylesheets: "always" },
  compressHTML: true,
  vite: { plugins: [tailwindcss()] },
});
