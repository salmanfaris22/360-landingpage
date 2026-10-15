import type { APIRoute } from "astro";
import { faviconSvgText } from "@/lib/og";

export const GET: APIRoute = async () => new Response(await faviconSvgText(), { headers: { "Content-Type": "image/svg+xml" } });
