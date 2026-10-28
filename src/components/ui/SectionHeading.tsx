export function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="mb-10 grid gap-4 sm:mb-14 lg:grid-cols-[180px_minmax(0,650px)]">
      <p className="pt-2 text-[11px] font-bold uppercase tracking-[.22em] text-accent-500">
        {eyebrow}
      </p>
      <div>
        <h2 className="text-balance font-display text-4xl leading-[1.04] tracking-[-.035em] text-ink-950 sm:text-5xl lg:text-6xl">
          {title}
        </h2>
        {description && (
          <p className="mt-5 max-w-xl text-base leading-7 text-ink-800/75 sm:text-lg">
            {description}
          </p>
        )}
      </div>
    </div>
  );
}
