import type { Metadata, Viewport } from "next";
import { Inter, Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { SmoothScroll } from "@/components/providers/SmoothScroll";
import { Cursor } from "@/components/effects/Cursor";

const grotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-grotesk",
  // "optional": never swaps in late, so the headline/logo (the LCP element)
  // paints once and stays painted — a late font swap was re-triggering LCP
  // at ~4.5s on slow connections. Preload still wins on normal networks.
  display: "optional",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  // Single weight: the 500 face cost a 22KB render-blocking preload and was
  // used on one 10px badge. Browsers synthesize medium from 400 fine there.
  weight: "400",
  display: "swap",
});

const SITE_URL = "https://www.360mediaconcepts.com";
const TITLE = "Media 360 Concept | Branding & Creative Agency in Kozhikode, Kerala";
const DESCRIPTION =
  "Premium branding agency in Kozhikode, Kerala — logo design, brand identity, packaging, advertising, digital marketing & video production. 17+ years in KSA, 12+ in India. Free consultation.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: TITLE,
    template: "%s — Media 360 Concept",
  },
  description: DESCRIPTION,
  keywords: [
    "Media 360 Concept",
    "Media360 Concept",
    "branding agency Kozhikode",
    "branding agency Calicut",
    "branding agency Kerala",
    "creative agency Kozhikode",
    "advertising agency Kerala",
    "logo design Kozhikode",
    "logo design Calicut",
    "logo designer Kerala",
    "package design Kerala",
    "digital marketing Kozhikode",
    "SEO company Kozhikode",
    "web development Kozhikode",
    "website design Kerala",
    "brand strategy Kerala",
    "UI UX design Kozhikode",
    "graphic design Kozhikode",
  ],
  verification: {
    google: "lYUlUgsgLU7Te8J9oyto91OiAF2Dj4e6wcM7UdF0iK4",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: SITE_URL,
    siteName: "Media 360 Concept",
    type: "website",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
  },
  applicationName: "Media 360 Concept",
  authors: [{ name: "Media 360 Concept", url: SITE_URL }],
  creator: "Media 360 Concept",
  publisher: "Media 360 Concept",
  category: "Branding & Advertising",
  other: {
    "geo.region": "IN-KL",
    "geo.placename": "Kozhikode, Kerala",
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
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-200 focus:rounded-full focus:bg-white focus:px-5 focus:py-2.5 focus:text-sm focus:font-medium focus:text-black"
        >
          Skip to content
        </a>
        <SmoothScroll>{children}</SmoothScroll>
        <Cursor />
        <div className="noise-overlay" aria-hidden />
      </body>
    </html>
  );
}
