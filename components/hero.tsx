import Link from "next/link";

type HeroProps = {
  eyebrow?: string;
  title: string;
  description: string;
  primaryHref?: string;
  primaryLabel?: string;
  secondaryHref?: string;
  secondaryLabel?: string;
};

export function Hero({
  eyebrow,
  title,
  description,
  primaryHref,
  primaryLabel,
  secondaryHref,
  secondaryLabel
}: HeroProps) {
  return (
    <section className="section border-b border-[var(--border)]">
      <div className="container max-w-5xl">
        {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
        <h1 className="mt-4 max-w-4xl text-balance text-4xl font-semibold tracking-tight text-[var(--text)] sm:text-5xl">
          {title}
        </h1>
        <p className="mt-6 max-w-3xl text-lg leading-8 text-[var(--muted)]">{description}</p>

        {(primaryHref && primaryLabel) || (secondaryHref && secondaryLabel) ? (
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            {primaryHref && primaryLabel ? (
              <Link href={primaryHref} className="btn btn-primary">
                {primaryLabel}
              </Link>
            ) : null}
            {secondaryHref && secondaryLabel ? (
              <Link href={secondaryHref} className="btn btn-secondary">
                {secondaryLabel}
              </Link>
            ) : null}
          </div>
        ) : null}
      </div>
    </section>
  );
}
