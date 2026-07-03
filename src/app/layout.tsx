import type { Metadata, Viewport } from "next";
import { Inter, Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { SmoothScroll } from "@/components/providers/SmoothScroll";
import { Cursor } from "@/components/effects/Cursor";

const grotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-grotesk",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  weight: ["400", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://rootdigital.studio"),
  title: {
    default: "ROOT DIGITAL — Creative Technology Studio",
    template: "%s — ROOT DIGITAL",
  },
  description:
    "We build digital experiences that people remember. Branding, marketing, engineering, AI and automation — one studio, end to end.",
  keywords: [
    "creative technology studio",
    "branding",
    "web design",
    "SaaS development",
    "AI automation",
    "digital marketing",
  ],
  openGraph: {
    title: "ROOT DIGITAL — Creative Technology Studio",
    description:
      "We build digital experiences that people remember. Branding, marketing, engineering, AI and automation.",
    url: "https://rootdigital.studio",
    siteName: "ROOT DIGITAL",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#050505",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${grotesk.variable} ${inter.variable} ${jetbrains.variable} antialiased`}
    >
      <body className="bg-base font-body text-white">
        <SmoothScroll>{children}</SmoothScroll>
        <Cursor />
        <div className="noise-overlay" aria-hidden />
      </body>
    </html>
  );
}
