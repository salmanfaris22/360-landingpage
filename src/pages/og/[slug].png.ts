import type { APIRoute, GetStaticPaths } from "astro";
import { ALL_ROUTES } from "@/lib/routes";
import { ogPng } from "@/lib/og";

export const getStaticPaths: GetStaticPaths = () =>
  ALL_ROUTES.filter((r) => r.og).map((r) => ({ params: { slug: r.og }, props: { heading: r.heading, eyebrow: r.eyebrow } }));

export const GET: APIRoute = async ({ props }) =>
  new Response(new Uint8Array(await ogPng(props.heading, props.eyebrow)), { headers: { "Content-Type": "image/png" } });
