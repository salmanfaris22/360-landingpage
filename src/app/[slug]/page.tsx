import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { LandingPage } from "@/components/seo/LandingPage";
import { JsonLd } from "@/components/seo/JsonLd";
import { servicePageGraph } from "@/lib/schema";
import { SEO_PAGES, getSeoPage } from "@/lib/seo-pages";

type Props = { params: Promise<{ slug: string }> };

// Only the slugs in SEO_PAGES exist; everything else 404s.
export const dynamicParams = false;

export function generateStaticParams() {
  return SEO_PAGES.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const page = getSeoPage(slug);
  if (!page) return {};

  const path = `/${page.slug}`;
  return {
    title: page.title,
    description: page.description,
    alternates: {
      canonical: path,
      languages: {
        "en-IN": path,
        "x-default": path,
      },
    },
    openGraph: {
      url: path,
      siteName: "Media 360 Concept",
      type: "website",
      locale: "en_IN",
    },
    twitter: {
      card: "summary_large_image",
    },
  };
}

export default async function Page({ params }: Props) {
  const { slug } = await params;
  const page = getSeoPage(slug);
  if (!page) notFound();

  return (
    <>
      <LandingPage page={page} />
      <JsonLd data={servicePageGraph(page)} />
    </>
  );
}
