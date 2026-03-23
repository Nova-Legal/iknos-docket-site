import Link from "next/link";

export default function HomePage() {
  return (
    <div className="v2-shell">
      <section className="v2-hero v2-hero--clean">
        <div className="v2-container">
          <div className="v2-hero__main v2-hero__main--clean">
            <p className="v2-eyebrow">IKNOS • Docket • Ontario criminal defence workflow</p>

            <h1 className="v2-hero__title v2-hero__title--clean">
              Criminal disclosure, with more control.
            </h1>

            <p className="v2-hero__body v2-hero__body--clean">
              Iknos Docket is built for Ontario criminal defence workflow:
              mixed-format disclosure, clearer review continuity, and stronger
              control inside a live file.
            </p>

            <div className="v2-hero__actions">
              <Link href="/product" className="v2-btn v2-btn--primary">
                Explore Product
              </Link>
              <Link href="/demo" className="v2-btn v2-btn--secondary">
                Request a Demo
              </Link>
            </div>

            <div className="v2-hero-proof">
              <div className="v2-hero-proof__item">
                <p className="v2-hero-proof__label">Format</p>
                <p className="v2-hero-proof__value">Mixed-format disclosure</p>
              </div>

              <div className="v2-hero-proof__item">
                <p className="v2-hero-proof__label">Focus</p>
                <p className="v2-hero-proof__value">Ontario-first workflow</p>
              </div>

              <div className="v2-hero-proof__item">
                <p className="v2-hero-proof__label">Handling</p>
                <p className="v2-hero-proof__value">Local-first handling posture</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="v2-section v2-section--difference">
        <div className="v2-container">
          <div className="v2-difference-head">
            <div className="v2-difference-head__intro">
              <p className="v2-eyebrow">Why Docket is different</p>
              <h2>Vertical depth for Ontario criminal defence.</h2>
            </div>

            <div className="v2-difference-head__body">
              <p>
                Broad legal-tech platforms are usually designed across firm operations,
                practice management, or wide review categories.
              </p>
              <p>
                Docket is narrower by design: Ontario criminal defence workflow,
                mixed-format disclosure, change over time, and exact-detail recovery
                inside a live file.
              </p>
            </div>
          </div>

          <div className="v2-difference-cards">
            <div className="v2-difference-card">
              <p className="v2-difference-card__eyebrow">Review</p>
              <h3>Mixed-format review</h3>
              <p>
                Built for PDFs, scans, images, video, audio, CCTV, and other
                fragmented material that rarely arrives in one neat shape.
              </p>
            </div>

            <div className="v2-difference-card">
              <p className="v2-difference-card__eyebrow">Continuity</p>
              <h3>Change over time</h3>
              <p>
                Preserve visibility into revisions, contradictions, additions,
                and timeline movement so important shifts do not disappear inside volume.
              </p>
            </div>

            <div className="v2-difference-card">
              <p className="v2-difference-card__eyebrow">Recovery</p>
              <h3>Exact-detail recovery</h3>
              <p>
                Get back to the precise statement, segment, image, or timeline
                point that matters when pressure is high.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="v2-section v2-section--cta">
        <div className="v2-container">
          <div className="v2-cta-shell">
            <div className="v2-cta">
              <p className="v2-eyebrow">Next step</p>
              <h2>See the product in a direct walkthrough.</h2>
              <p>
                Request a demo for a practical walkthrough, or apply for the pilot
                if you are evaluating fit inside active criminal defence workflow.
              </p>
              <div className="v2-hero__actions">
                <Link href="/demo" className="v2-btn v2-btn--primary">
                  Request a Demo
                </Link>
                <Link href="/pilot" className="v2-btn v2-btn--secondary">
                  Apply for Pilot
                </Link>
              </div>
            </div>

            <div className="v2-cta-rail">
              <div className="v2-cta-rail__item">
                <p className="v2-cta-rail__label">Use case</p>
                <p className="v2-cta-rail__value">Difficult disclosure review</p>
              </div>
              <div className="v2-cta-rail__item">
                <p className="v2-cta-rail__label">Evaluation</p>
                <p className="v2-cta-rail__value">Pilot consideration</p>
              </div>
              <div className="v2-cta-rail__item">
                <p className="v2-cta-rail__label">Posture</p>
                <p className="v2-cta-rail__value">Ontario-first, local-first</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
