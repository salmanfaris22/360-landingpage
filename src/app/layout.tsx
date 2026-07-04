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

const SITE_URL = "https://www.360mediaconcepts.com";
const TITLE = "Media 360 Concept | Branding & Creative Agency in Kochi, Kerala";
const DESCRIPTION =
  "Premium branding agency in Kochi, Kerala — logo design, brand identity, packaging, advertising, digital marketing & video production. 17+ years in KSA, 12+ in India. Free consultation.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: TITLE,
    template: "%s — Media 360 Concept",
  },
  description: DESCRIPTION,
  keywords: [
    "branding agency Kerala",
    "creative agency Kerala",
    "advertising agency Kerala",
    "graphic design company Kerala",
    "logo design Kerala",
    "brand identity Kerala",
    "digital marketing agency Kerala",
    "packaging design Kerala",
    "marketing agency Kochi",
    "creative agency Kochi",
    "video production Kerala",
    "signage company Kerala",
    "Media 360 Concept",
  ],
  alternates: {
    canonical: "/",
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
    "geo.placename": "Kochi, Kerala",
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
