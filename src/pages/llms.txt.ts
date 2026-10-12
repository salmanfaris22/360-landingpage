import type { APIRoute } from "astro";
import { CONTACT } from "@/lib/data";
import { pagesInCluster, type Cluster } from "@/lib/seo-pages";
import { BRAND_DESCRIPTION } from "@/lib/schema";

// llmstxt.org summary: same facts as the visible site, never anything extra.
export const GET: APIRoute = ({ site }) => {
  const u = (p: string) => new URL(p, site).href;
  const section = (label: string, c: Cluster) =>
    [`## ${label}`, ...pagesInCluster(c).map((p) => `- [${p.serviceName}](${u(`/${p.slug}`)}): ${p.serviceDescription}`), ""];
  const body = [
    "# Media 360 Concept",
    "",
    `> ${BRAND_DESCRIPTION}`,
    "",
    ...section("Digital marketing", "marketing"),
    ...section("Web development", "web"),
    ...section("Software, apps & AI", "software"),
    ...section("Branding & creative", "branding"),
    "## Company",
    `- [About & key facts](${u("/about")})`,
    `- [All services](${u("/services")})`,
    `- [Office at HiLITE Business Park, Calicut](${u("/hilite-business-park-calicut")})`,
    `- [Contact](${u("/contact")})`,
    "",
    "## Contact",
    `- Address: ${CONTACT.postal.street}, ${CONTACT.postal.locality}, ${CONTACT.postal.region} ${CONTACT.postal.postalCode}, India`,
    `- Phone / WhatsApp: ${CONTACT.phoneDisplay}`,
    `- Email: ${CONTACT.email}`,
    "",
    "## Optional",
    `- [Full text of every service page](${u("/llms-full.txt")})`,
  ];
  return new Response(body.join("\n") + "\n", { headers: { "Content-Type": "text/plain; charset=utf-8" } });
};
