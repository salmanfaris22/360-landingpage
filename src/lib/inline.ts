/**
 * Copy stays plain strings; `[anchor](/path)` becomes an internal link at render time.
 * Text is escaped first, so a stray < or & in copy can never break the page.
 * Only site-relative links are allowed: outbound links do not belong in body copy.
 */
const escapeHtml = (s: string) => s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

export const inlineHtml = (text: string) =>
  escapeHtml(text).replace(/\[([^\]]+)\]\((\/[^)\s]*)\)/g, '<a href="$2" class="inline-link">$1</a>');

/** Same copy without link markup, for llms-full.txt and other plain-text output. */
export const plainText = (text: string) => text.replace(/\[([^\]]+)\]\((\/[^)\s]*)\)/g, "$1");
