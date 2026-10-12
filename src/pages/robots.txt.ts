import type { APIRoute } from "astro";

// Search + AI crawlers are explicitly welcome (AI search/retrieval bots and
// training bots alike). Allowing them makes citation possible, not guaranteed.
const AI_BOTS = [
  "OAI-SearchBot", "ChatGPT-User", "GPTBot",
  "Claude-SearchBot", "Claude-User", "ClaudeBot",
  "PerplexityBot", "Perplexity-User",
  "Google-Extended", "Applebot-Extended", "Bingbot",
];

export const GET: APIRoute = ({ site }) => {
  const lines = ["User-agent: *", "Allow: /", ""];
  for (const bot of AI_BOTS) lines.push(`User-agent: ${bot}`, "Allow: /", "");
  lines.push(`Sitemap: ${new URL("/sitemap.xml", site).href}`);
  return new Response(lines.join("\n") + "\n", { headers: { "Content-Type": "text/plain; charset=utf-8" } });
};
