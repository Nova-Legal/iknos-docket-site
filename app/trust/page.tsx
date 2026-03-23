import Link from "next/link";

export default function TrustPage() {
  return (
    <div className="v2-shell">
      <section className="v2-hero v2-hero--clean">
        <div className="v2-container">
          <div className="v2-hero__main v2-hero__main--clean">
            <p className="v2-eyebrow">Trust, privacy, and security</p>

            <h1 className="v2-hero__title v2-hero__title--clean">
              A more disciplined operating posture for legal work.
            </h1>

            <p className="v2-hero__body v2-hero__body--clean">
              Iknos Docket is built for confidentiality-sensitive criminal defence
              workflow. The trust posture is restrained: careful handling, clear
              claims, and a product position grounded in legal review.
            </p>

            <div className="v2-hero__actions">
              <Link href="/privacy" className="v2-btn v2-btn--secondary">
                Privacy Policy
              </Link>
              <Link href="/terms" className="v2-btn v2-btn--secondary">
                Terms of Use
              </Link>
              <Link href="/demo" className="v2-btn v2-btn--primary">
                Request a Demo
              </Link>
            </div>

            <div className="v2-hero-proof">
              <div className="v2-hero-proof__item">
                <p className="v2-hero-proof__label">Posture</p>
                <p className="v2-hero-proof__value">Confidentiality-sensitive</p>
              </div>

              <div className="v2-hero-proof__item">
                <p className="v2-hero-proof__label">Handling</p>
                <p className="v2-hero-proof__value">Local-first</p>
              </div>

              <div className="v2-hero-proof__item">
                <p className="v2-hero-proof__label">Role</p>
                <p className="v2-hero-proof__value">Supports counsel judgment</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="v2-section v2-section--difference">
        <div className="v2-container">
          <div className="v2-difference-head">
            <div className="v2-difference-head__intro">
              <p className="v2-eyebrow">Operating stance</p>
              <h2>Built for lawyer-readable work.</h2>
            </div>

            <div className="v2-difference-head__body">
              <p>
                Criminal defence work carries different expectations from ordinary
                office software.
              </p>
              <p>
                Disclosure can include scans, PDFs, images, video, audio, CCTV,
                and other fragmented material that is sensitive, operationally
                important, and rarely self-organizing.
              </p>
            </div>
          </div>

          <div className="v2-difference-cards">
            <div className="v2-difference-card">
              <p className="v2-difference-card__eyebrow">Readable</p>
              <h3>Built for lawyer-readable review</h3>
              <p>
                Practical structure over novelty, disciplined workflow over
                inflated language, and a product surface that can hold up inside
                real defence work.
              </p>
            </div>

            <div className="v2-difference-card">
              <p className="v2-difference-card__eyebrow">Handling</p>
              <h3>Local-first handling posture</h3>
              <p>
                Sensitive working material is not treated as ordinary cloud-first
                platform data. The emphasis is on user control and a more careful
                handling model from the start.
              </p>
            </div>

            <div className="v2-difference-card">
              <p className="v2-difference-card__eyebrow">Position</p>
              <h3>Not a casual AI layer</h3>
              <p>
                Docket is positioned as a serious legal workflow product, not as
                a consumer-style AI layer sitting loosely on top of legal work.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="v2-section v2-section--difference">
        <div className="v2-container">
          <div className="v2-difference-head">
            <div className="v2-difference-head__intro">
              <p className="v2-eyebrow">Boundaries</p>
              <h2>What the product supports and what it does not do.</h2>
            </div>

            <div className="v2-difference-head__body">
              <p>
                The point is to support review, organization, and preparation in a
                more controlled working environment.
              </p>
              <p>
                The point is not to replace counsel, legal obligations, or legal
                judgment.
              </p>
            </div>
          </div>

          <div className="v2-difference-cards">
            <div className="v2-difference-card">
              <p className="v2-difference-card__eyebrow">Supports</p>
              <h3>What it is meant to support</h3>
              <p>
                Structured review of disclosure and case material, clearer
                working-file continuity, issue-focused preparation, and stronger
                counsel control over organization and visibility.
              </p>
            </div>

            <div className="v2-difference-card">
              <p className="v2-difference-card__eyebrow">Does not</p>
              <h3>What it is not</h3>
              <p>
                It does not provide legal advice, does not replace counsel’s
                judgment, and is not a law firm, legal representative, or
                substitute for lawyer review.
              </p>
            </div>

            <div className="v2-difference-card">
              <p className="v2-difference-card__eyebrow">Evaluation</p>
              <h3>Need more detail?</h3>
              <p>
                Review the Privacy Policy and Terms of Use for formal language,
                or request a demo for a practical walkthrough of the workflow directly.
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
              <h2>Review the trust posture directly.</h2>
              <p>
                For practical evaluation, request a demo. For formal policy
                language, review the Privacy Policy and Terms of Use.
              </p>
              <div className="v2-hero__actions">
                <Link href="/privacy" className="v2-btn v2-btn--secondary">
                  Privacy Policy
                </Link>
                <Link href="/terms" className="v2-btn v2-btn--secondary">
                  Terms of Use
                </Link>
                <Link href="/demo" className="v2-btn v2-btn--primary">
                  Request a Demo
                </Link>
              </div>
            </div>

            <div className="v2-cta-rail">
              <div className="v2-cta-rail__item">
                <p className="v2-cta-rail__label">Audience</p>
                <p className="v2-cta-rail__value">Criminal defence counsel</p>
              </div>
              <div className="v2-cta-rail__item">
                <p className="v2-cta-rail__label">Handling</p>
                <p className="v2-cta-rail__value">Local-first, careful by design</p>
              </div>
              <div className="v2-cta-rail__item">
                <p className="v2-cta-rail__label">Role</p>
                <p className="v2-cta-rail__value">Supports, does not replace</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
