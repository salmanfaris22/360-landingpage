import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { CONTACT } from "@/lib/data";
import { getSeoPage, type SeoPage } from "@/lib/seo-pages";

/**
 * Server-rendered template for keyword landing pages. Deliberately ships
 * zero page-specific JavaScript: FAQs use native <details>, everything else
 * is static HTML — fast LCP on the pages that have to win local search.
 */
export function LandingPage({ page }: { page: SeoPage }) {
  const related = page.related
    .map((slug) => getSeoPage(slug))
    .filter((p): p is SeoPage => Boolean(p));

  return (
    <>
      <Navbar />
      <main id="main" className="mx-auto max-w-7xl px-6 pt-36 pb-24 md:pt-44">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="mb-10">
          <ol className="flex flex-wrap items-center gap-2 font-mono text-[11px] tracking-[0.15em] text-dim uppercase">
            <li>
              <Link href="/" className="link-underline hover:text-white">
                Home
              </Link>
            </li>
            <li aria-hidden>/</li>
            <li aria-current="page" className="text-white/70">
              {page.serviceName}
            </li>
          </ol>
        </nav>

        {/* Hero */}
        <header className="max-w-4xl">
          <p className="label-mono">{page.eyebrow}</p>
          <h1 className="mt-6 font-display text-[clamp(2.6rem,6vw,5rem)] leading-[1.02] font-semibold tracking-[-0.03em]">
            {page.h1}
          </h1>
          {page.intro.map((paragraph) => (
            <p key={paragraph} className="mt-6 max-w-3xl text-lg leading-relaxed text-dim">
              {paragraph}
            </p>
          ))}
          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href={CONTACT.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-[48px] items-center rounded-full bg-white px-7 py-3 text-sm font-medium text-black transition-opacity hover:opacity-85"
            >
              Get a Free Consultation on WhatsApp
            </a>
            <Link
              href="/#contact"
              className="inline-flex min-h-[48px] items-center rounded-full border border-white/25 px-7 py-3 text-sm transition-colors hover:border-white/60"
            >
              Start a project
            </Link>
          </div>
        </header>

        {/* Content sections */}
        <div className="mt-24 space-y-20 md:mt-32">
          {page.sections.map((section) => (
            <section key={section.heading} className="border-t border-line pt-14">
              <div className="grid gap-8 md:grid-cols-[minmax(0,1fr)_minmax(0,2fr)]">
                <h2 className="font-display text-2xl font-semibold tracking-tight md:text-3xl">
                  {section.heading}
                </h2>
                <div>
                  {section.body.map((paragraph) => (
                    <p key={paragraph} className="mb-5 leading-relaxed text-dim">
                      {paragraph}
                    </p>
                  ))}
                  {section.bullets && (
                    <dl className="mt-2 grid gap-6 sm:grid-cols-2">
                      {section.bullets.map((bullet) => (
                        <div key={bullet.title} className="rounded-2xl border border-line p-6">
                          <dt className="font-display text-base font-semibold">
                            {bullet.title}
                          </dt>
                          <dd className="mt-2 text-sm leading-relaxed text-dim">
                            {bullet.text}
                          </dd>
                        </div>
                      ))}
                    </dl>
                  )}
                </div>
              </div>
            </section>
          ))}

          {/* Deliverables */}
          <section className="border-t border-line pt-14">
            <div className="grid gap-8 md:grid-cols-[minmax(0,1fr)_minmax(0,2fr)]">
              <h2 className="font-display text-2xl font-semibold tracking-tight md:text-3xl">
                What we deliver
              </h2>
              <ul className="flex flex-wrap gap-3">
                {page.deliverables.map((item) => (
                  <li
                    key={item}
                    className="rounded-full border border-line px-5 py-2 font-mono text-[11px] tracking-[0.15em] text-white/70 uppercase"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* FAQ */}
          <section className="border-t border-line pt-14" aria-labelledby="faq-heading">
            <div className="grid gap-8 md:grid-cols-[minmax(0,1fr)_minmax(0,2fr)]">
              <h2
                id="faq-heading"
                className="font-display text-2xl font-semibold tracking-tight md:text-3xl"
              >
                Frequently asked questions
              </h2>
              <div className="divide-y divide-line border-y border-line">
                {page.faqs.map((faq) => (
                  <details key={faq.q} className="group py-5">
                    <summary className="flex cursor-pointer list-none items-baseline justify-between gap-6 font-display text-lg font-medium [&::-webkit-details-marker]:hidden">
                      {faq.q}
                      <span
                        aria-hidden
                        className="text-cyan transition-transform duration-300 group-open:rotate-45"
                      >
                        +
                      </span>
                    </summary>
                    <p className="mt-4 max-w-2xl leading-relaxed text-dim">{faq.a}</p>
                  </details>
                ))}
              </div>
            </div>
          </section>

          {/* Related services */}
          <section className="border-t border-line pt-14">
            <div className="grid gap-8 md:grid-cols-[minmax(0,1fr)_minmax(0,2fr)]">
              <h2 className="font-display text-2xl font-semibold tracking-tight md:text-3xl">
                Related services
              </h2>
              <ul className="grid gap-4 sm:grid-cols-2">
                {related.map((rel) => (
                  <li key={rel.slug}>
                    <Link
                      href={`/${rel.slug}`}
                      className="group flex items-baseline justify-between gap-4 rounded-2xl border border-line p-6 transition-colors hover:border-white/30"
                    >
                      <span className="font-display text-base font-semibold">
                        {rel.keyword}
                      </span>
                      <span
                        aria-hidden
                        className="text-dim transition-transform duration-300 group-hover:translate-x-1 group-hover:text-cyan"
                      >
                        →
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* CTA */}
          <section className="rounded-3xl border border-line p-10 text-center md:p-16">
            <p className="label-mono">Free consultation · Kochi, Kerala</p>
            <h2 className="mx-auto mt-6 max-w-2xl font-display text-3xl font-semibold tracking-tight md:text-4xl">
              Tell us what you&apos;re building — we&apos;ll reply within 24 hours.
            </h2>
            <p className="mx-auto mt-4 max-w-xl leading-relaxed text-dim">
              Message Media 360 Concept on WhatsApp, call, or email — and get a
              clear, itemised plan for your project.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <a
                href={CONTACT.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-[48px] items-center rounded-full bg-white px-7 py-3 text-sm font-medium text-black transition-opacity hover:opacity-85"
              >
                WhatsApp {CONTACT.phoneDisplay}
              </a>
              <a
                href={`mailto:${CONTACT.email}`}
                className="inline-flex min-h-[48px] items-center rounded-full border border-white/25 px-7 py-3 text-sm transition-colors hover:border-white/60"
              >
                {CONTACT.email}
              </a>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
