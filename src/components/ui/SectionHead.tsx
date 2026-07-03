import { Reveal, WordReveal } from "./Reveal";

/**
 * Chapter opener used by every section: mono index + label rule,
 * then an oversized display headline and optional standfirst.
 */
export function SectionHead({
  index,
  label,
  title,
  blurb,
}: {
  index: string;
  label: string;
  title: string;
  blurb?: string;
}) {
  return (
    <div className="mb-16 md:mb-24">
      <Reveal>
        <div className="flex items-center gap-5">
          <span className="font-mono text-sm text-cyan">/{index}</span>
          <span className="label-mono">{label}</span>
          <span className="h-px flex-1 bg-line" aria-hidden />
        </div>
      </Reveal>
      <WordReveal
        text={title}
        className="mt-8 max-w-5xl font-display text-[clamp(2.4rem,6vw,5.25rem)] leading-[0.98] font-semibold tracking-[-0.03em]"
      />
      {blurb && (
        <Reveal delay={0.15}>
          <p className="mt-7 max-w-xl text-lg leading-relaxed text-dim">{blurb}</p>
        </Reveal>
      )}
    </div>
  );
}
