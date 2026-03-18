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
    <section className="section hero-shell">
      <div className="container">
        <div className="hero-grid">
          <div className="hero-copy">
            {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}

            <h1 className="hero-title">{title}</h1>

            <p className="hero-description">{description}</p>

            {(primaryHref && primaryLabel) || (secondaryHref && secondaryLabel) ? (
              <div className="hero-actions">
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

            <p className="hero-note">
              Built for serious criminal defence workflow. Clearer intake, faster review,
              better accountability across disclosure.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}