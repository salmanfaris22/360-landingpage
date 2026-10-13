import type { APIRoute, GetStaticPaths } from "astro";
import { ALL_ROUTES, assetSlug } from "@/lib/routes";
import { pageImage } from "@/lib/og";

// One hero illustration per indexable page, referenced by the page <img>,
// its WebPage.primaryImageOfPage and the image sitemap.
export const getStaticPaths: GetStaticPaths = () =>
  ALL_ROUTES.filter((r) => r.og).map((r) => ({
    params: { slug: assetSlug(r.path) },
    props: { heading: r.heading, eyebrow: r.eyebrow, chips: r.chips ?? [], theme: r.theme ?? "home" },
  }));

export const GET: APIRoute = async ({ props }) =>
  new Response(new Uint8Array(await pageImage(props.heading, props.eyebrow, props.chips, props.theme)), {
    headers: { "Content-Type": "image/webp" },
  });
