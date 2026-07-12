/**
 * Renders a JSON-LD graph. `<` is escaped so user-visible copy containing
 * "</script>" can never break out of the script tag.
 */
export function JsonLd({ data }: { data: object }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data).replace(/</g, "\\u003c"),
      }}
    />
  );
}
