import Link from "next/link";

export default function ProductPage() {
  return (
    <div className="v2-shell">
      <section className="v2-hero v2-hero--clean">
        <div className="v2-container">
          <div className="v2-hero__main v2-hero__main--clean">
            <p className="v2-eyebrow">Product</p>

            <h1 className="v2-hero__title v2-hero__title--clean">
              Built for the hard parts of criminal disclosure review.
            </h1>

            <p className="v2-hero__body v2-hero__body--clean">
              Iknos Docket is built for Ontario criminal defence workflow:
              mixed-format disclosure, change over time, timeline pressure, and
              exact-detail recovery inside a live file.
            </p>

            <div className="v2-hero__actions">
              <Link href="/demo" className="v2-btn v2-btn--primary">
                Request a Demo
              </Link>
              <Link href="/pilot" className="v2-btn v2-btn--secondary">
                Apply for Pilot
              </Link>
            </div>

            <div className="v2-hero-proof">
              <div className="v2-hero-proof__item">
                <p className="v2-hero-proof__label">Review</p>
                <p className="v2-hero-proof__value">Mixed-format disclosure</p>
              </div>

              <div className="v2-hero-proof__item">
                <p className="v2-hero-proof__label">Visibility</p>
                <p className="v2-hero-proof__value">Change over time</p>
              </div>

              <div className="v2-hero-proof__item">
                <p className="v2-hero-proof__label">Pressure</p>
                <p className="v2-hero-proof__value">Exact-detail recovery</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="v2-section v2-section--difference">
        <div className="v2-container">
          <div className="v2-difference-head">
            <div className="v2-difference-head__intro">
              <p className="v2-eyebrow">Capabilities</p>
              <h2>A narrower, deeper product direction.</h2>
            </div>

            <div className="v2-difference-head__body">
              <p>Docket is not broad legal administration software.</p>
              <p>
                It is built for difficult criminal disclosure workflow: fragmented
                material, chronology pressure, version movement, and the need to
                get back to exact detail quickly and reliably.
              </p>
            </div>
          </div>

          <div className="v2-difference-cards">
            <div className="v2-difference-card">
              <p className="v2-difference-card__eyebrow">Format</p>
              <h3>Mixed-format disclosure</h3>
              <p>
                Review may have to account for scans, PDFs, images, video, audio,
                CCTV, and other fragmented material across the life of a matter.
              </p>
            </div>

            <div className="v2-difference-card">
              <p className="v2-difference-card__eyebrow">Change</p>
              <h3>Change over time</h3>
              <p>
                Versions shift. New material arrives. Contradictions, omissions,
                and timeline movement can disappear unless the file is worked
                through more deliberately.
              </p>
            </div>

            <div className="v2-difference-card">
              <p className="v2-difference-card__eyebrow">Chronology</p>
              <h3>Timeline work</h3>
              <p>
                Criminal review often becomes chronological whether the file is
                ready for that or not. Sequence matters. Timing matters. Alternate
                sequences may matter too.
              </p>
            </div>

            <div className="v2-difference-card">
              <p className="v2-difference-card__eyebrow">Recovery</p>
              <h3>Exact detail under pressure</h3>
              <p>
                The real test is whether counsel can get back to the exact
                statement, timeline point, image, segment, or evidentiary detail
                that matters when pressure is high.
              </p>
            </div>

            <div className="v2-difference-card">
              <p className="v2-difference-card__eyebrow">Handling</p>
              <h3>Local-first posture</h3>
              <p>
                Sensitive working material is not treated as ordinary cloud-first
                platform data. The emphasis is on user control and
                confidentiality-sensitive handling.
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
