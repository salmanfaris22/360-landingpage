import type { APIRoute } from "astro";
import { logoPng } from "@/lib/og";

export const GET: APIRoute = async () =>
  new Response(new Uint8Array(await logoPng()), { headers: { "Content-Type": "image/png" } });
