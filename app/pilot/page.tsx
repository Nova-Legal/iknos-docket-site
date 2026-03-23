import Link from "next/link";
import { PilotForm } from "@/components/pilot-form";

export default function PilotPage() {
  return (
    <div className="v2-shell">
      <section className="v2-hero v2-hero--clean">
        <div className="v2-container">
          <div className="v2-hero__main v2-hero__main--clean">
            <p className="v2-eyebrow">Pilot</p>

            <h1 className="v2-hero__title v2-hero__title--clean">
              Apply for a more serious product evaluation.
            </h1>

            <p className="v2-hero__body v2-hero__body--clean">
              Use this page if you are evaluating operational fit more directly
              inside active criminal defence workflow and want a more serious
              review than a first walkthrough.
            </p>

            <div className="v2-hero__actions">
              <Link href="/demo" className="v2-btn v2-btn--secondary">
                Request a Demo
              </Link>
              <Link href="/contact" className="v2-btn v2-btn--secondary">
                General Contact
              </Link>
            </div>

            <div className="v2-hero-proof">
              <div className="v2-hero-proof__item">
                <p className="v2-hero-proof__label">Evaluation</p>
                <p className="v2-hero-proof__value">Operational fit</p>
              </div>

              <div className="v2-hero-proof__item">
                <p className="v2-hero-proof__label">Audience</p>
                <p className="v2-hero-proof__value">Serious practitioners</p>
              </div>

              <div className="v2-hero-proof__item">
                <p className="v2-hero-proof__label">Route</p>
                <p className="v2-hero-proof__value">After demo or direct need</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="v2-section v2-section--difference">
        <div className="v2-container">
          <div className="v2-difference-head">
            <div className="v2-difference-head__intro">
              <p className="v2-eyebrow">What the pilot is for</p>
              <h2>A deeper evaluation route.</h2>
            </div>

            <div className="v2-difference-head__body">
              <p>
                The pilot route is for counsel or firms who are beyond a general
                walkthrough and want to evaluate whether the workflow fits more
                directly inside actual practice.
              </p>
              <p>
                It is the right route when the question is not just “what is the
                product,” but “does this fit the way we actually work.”
              </p>
            </div>
          </div>

          <div className="v2-difference-cards">
            <div className="v2-difference-card">
              <p className="v2-difference-card__eyebrow">Depth</p>
              <h3>More than a walkthrough</h3>
              <p>
                The pilot route is for more serious evaluation, not a first-pass
                introduction to the product.
              </p>
            </div>

            <div className="v2-difference-card">
              <p className="v2-difference-card__eyebrow">Fit</p>
              <h3>Operational relevance</h3>
              <p>
                Focus on whether the workflow appears relevant to your file shape,
                review pressure, and practical needs.
              </p>
            </div>

            <div className="v2-difference-card">
              <p className="v2-difference-card__eyebrow">Selectivity</p>
              <h3>Serious evaluation posture</h3>
              <p>
                Pilot is intended as a more selective route for firms or counsel
                evaluating fit with greater intent.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="v2-section">
        <div className="v2-container">
          <div className="v2-contact-shell">
            <div className="v2-contact-copy">
              <p className="v2-eyebrow">Pilot application</p>
              <h2>Apply for evaluation.</h2>
              <p>
                Use the form to share enough practical context for us to understand
                what kind of evaluation you are considering.
              </p>
              <p>
                Practice context, file characteristics, and what you want to test
                are usually the important pieces.
              </p>
            </div>

            <div className="v2-contact-formwrap">
              <PilotForm />
            </div>
          </div>
        </div>
      </section>

      <section className="v2-section v2-section--cta">
        <div className="v2-container">
          <div className="v2-cta-shell">
            <div className="v2-cta">
              <p className="v2-eyebrow">Next step</p>
              <h2>Choose the route that matches your level of intent.</h2>
              <p>
                Use Demo for a first serious look. Use Pilot when you are already
                evaluating operational fit more directly.
              </p>
              <div className="v2-hero__actions">
                <Link href="/demo" className="v2-btn v2-btn--secondary">
                  Request a Demo
                </Link>
                <Link href="/contact" className="v2-btn v2-btn--secondary">
                  General Contact
                </Link>
              </div>
            </div>

            <div className="v2-cta-rail">
              <div className="v2-cta-rail__item">
                <p className="v2-cta-rail__label">Best for</p>
                <p className="v2-cta-rail__value">Deeper evaluation</p>
              </div>
              <div className="v2-cta-rail__item">
                <p className="v2-cta-rail__label">Focus</p>
                <p className="v2-cta-rail__value">Operational fit</p>
              </div>
              <div className="v2-cta-rail__item">
                <p className="v2-cta-rail__label">Alternative</p>
                <p className="v2-cta-rail__value">Demo for first look</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
