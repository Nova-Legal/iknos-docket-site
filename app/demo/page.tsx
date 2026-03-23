import Link from "next/link";
import { DemoForm } from "@/components/demo-form";

export default function DemoPage() {
  return (
    <div className="v2-shell">
      <section className="v2-hero v2-hero--clean">
        <div className="v2-container">
          <div className="v2-hero__main v2-hero__main--clean">
            <p className="v2-eyebrow">Demo</p>

            <h1 className="v2-hero__title v2-hero__title--clean">
              Request a direct walkthrough of Iknos Docket.
            </h1>

            <p className="v2-hero__body v2-hero__body--clean">
              Use this page to request a practical walkthrough of the product,
              its current direction, and how it fits Ontario criminal defence workflow.
            </p>

            <div className="v2-hero__actions">
              <Link href="/pilot" className="v2-btn v2-btn--secondary">
                Apply for Pilot
              </Link>
              <Link href="/contact" className="v2-btn v2-btn--secondary">
                General Contact
              </Link>
            </div>

            <div className="v2-hero-proof">
              <div className="v2-hero-proof__item">
                <p className="v2-hero-proof__label">Format</p>
                <p className="v2-hero-proof__value">Direct walkthrough</p>
              </div>

              <div className="v2-hero-proof__item">
                <p className="v2-hero-proof__label">Focus</p>
                <p className="v2-hero-proof__value">Product direction</p>
              </div>

              <div className="v2-hero-proof__item">
                <p className="v2-hero-proof__label">Route</p>
                <p className="v2-hero-proof__value">Demo before pilot</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="v2-section v2-section--difference">
        <div className="v2-container">
          <div className="v2-difference-head">
            <div className="v2-difference-head__intro">
              <p className="v2-eyebrow">What the demo is for</p>
              <h2>A practical look at the workflow.</h2>
            </div>

            <div className="v2-difference-head__body">
              <p>
                The demo route is for firms or counsel who want to understand the
                product more directly before deciding whether deeper evaluation makes sense.
              </p>
              <p>
                It is the right route for a first serious look at the workflow,
                handling posture, and current product direction.
              </p>
            </div>
          </div>

          <div className="v2-difference-cards">
            <div className="v2-difference-card">
              <p className="v2-difference-card__eyebrow">See</p>
              <h3>Product direction</h3>
              <p>
                Get a clearer view of how Iknos Docket is being built and how the
                product is being positioned.
              </p>
            </div>

            <div className="v2-difference-card">
              <p className="v2-difference-card__eyebrow">Review</p>
              <h3>Workflow fit</h3>
              <p>
                See whether the workflow appears relevant to your practice, file
                shape, and review needs.
              </p>
            </div>

            <div className="v2-difference-card">
              <p className="v2-difference-card__eyebrow">Decide</p>
              <h3>Next step</h3>
              <p>
                Use the walkthrough to decide whether a pilot conversation or
                follow-up evaluation makes sense.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="v2-section">
        <div className="v2-container">
          <div className="v2-contact-shell">
            <div className="v2-contact-copy">
              <p className="v2-eyebrow">Demo request</p>
              <h2>Request a walkthrough.</h2>
              <p>
                Use the form to request a demo and share enough context for us to
                understand what kind of walkthrough would be most useful.
              </p>
              <p>
                Basic practice context, file shape, and what you want to evaluate
                are usually enough.
              </p>
            </div>

            <div className="v2-contact-formwrap">
              <DemoForm />
            </div>
          </div>
        </div>
      </section>

      <section className="v2-section v2-section--cta">
        <div className="v2-container">
          <div className="v2-cta-shell">
            <div className="v2-cta">
              <p className="v2-eyebrow">Next step</p>
              <h2>Start with a walkthrough.</h2>
              <p>
                Use Demo for a first serious look at the product. Use Pilot if you
                are already evaluating operational fit more directly.
              </p>
              <div className="v2-hero__actions">
                <Link href="/pilot" className="v2-btn v2-btn--secondary">
                  Apply for Pilot
                </Link>
                <Link href="/contact" className="v2-btn v2-btn--secondary">
                  General Contact
                </Link>
              </div>
            </div>

            <div className="v2-cta-rail">
              <div className="v2-cta-rail__item">
                <p className="v2-cta-rail__label">Best for</p>
                <p className="v2-cta-rail__value">First serious look</p>
              </div>
              <div className="v2-cta-rail__item">
                <p className="v2-cta-rail__label">Use case</p>
                <p className="v2-cta-rail__value">Workflow walkthrough</p>
              </div>
              <div className="v2-cta-rail__item">
                <p className="v2-cta-rail__label">After demo</p>
                <p className="v2-cta-rail__value">Pilot or follow-up</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
