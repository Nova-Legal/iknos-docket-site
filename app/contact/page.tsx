import Link from "next/link";
import { ContactForm } from "@/components/contact-form";

export default function ContactPage() {
  return (
    <div className="v2-shell">
      <section className="v2-hero v2-hero--clean">
        <div className="v2-container">
          <div className="v2-hero__main v2-hero__main--clean">
            <p className="v2-eyebrow">Contact</p>

            <h1 className="v2-hero__title v2-hero__title--clean">
              Get in touch about Iknos Docket.
            </h1>

            <p className="v2-hero__body v2-hero__body--clean">
              Use this page for general product questions, business inquiries,
              and follow-up that does not fit the demo or pilot routes.
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
                <p className="v2-hero-proof__label">General</p>
                <p className="v2-hero-proof__value">Business inquiries</p>
              </div>

              <div className="v2-hero-proof__item">
                <p className="v2-hero-proof__label">Product</p>
                <p className="v2-hero-proof__value">Workflow questions</p>
              </div>

              <div className="v2-hero-proof__item">
                <p className="v2-hero-proof__label">Routes</p>
                <p className="v2-hero-proof__value">Demo, pilot, or contact</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="v2-section v2-section--difference">
        <div className="v2-container">
          <div className="v2-difference-head">
            <div className="v2-difference-head__intro">
              <p className="v2-eyebrow">When to use this page</p>
              <h2>A general route for product and business contact.</h2>
            </div>

            <div className="v2-difference-head__body">
              <p>
                Use the contact form for general questions about the product,
                business inquiries, or follow-up that does not fit the demo or pilot routes.
              </p>
              <p>
                If you want a direct walkthrough, request a demo. If you want a
                more serious operational evaluation, apply for the pilot.
              </p>
            </div>
          </div>

          <div className="v2-difference-cards">
            <div className="v2-difference-card">
              <p className="v2-difference-card__eyebrow">Use this page</p>
              <h3>General questions</h3>
              <p>
                Product questions, business inquiries, partnership interest, or
                follow-up that does not need the demo or pilot flow.
              </p>
            </div>

            <div className="v2-difference-card">
              <p className="v2-difference-card__eyebrow">Better route</p>
              <h3>Request a demo</h3>
              <p>
                Choose the demo route if you want a direct walkthrough of the
                workflow and product direction.
              </p>
            </div>

            <div className="v2-difference-card">
              <p className="v2-difference-card__eyebrow">Operational fit</p>
              <h3>Apply for pilot</h3>
              <p>
                Choose the pilot route if you are evaluating fit inside active
                criminal defence workflow and want a more serious review.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="v2-section">
        <div className="v2-container">
          <div className="v2-contact-shell">
            <div className="v2-contact-copy">
              <p className="v2-eyebrow">Contact form</p>
              <h2>Send a message.</h2>
              <p>
                We review contact requests to understand the nature of the inquiry
                and the most appropriate next step.
              </p>
              <p>
                Depending on the request, follow-up may direct you toward a demo,
                pilot, or a more general business response.
              </p>
            </div>

            <div className="v2-contact-formwrap">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      <section className="v2-section v2-section--cta">
        <div className="v2-container">
          <div className="v2-cta-shell">
            <div className="v2-cta">
              <p className="v2-eyebrow">Next step</p>
              <h2>Use the route that matches the inquiry.</h2>
              <p>
                Contact for general business and product questions. Use Demo for
                a walkthrough. Use Pilot for more serious operational evaluation.
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
                <p className="v2-cta-rail__label">General</p>
                <p className="v2-cta-rail__value">Contact form</p>
              </div>
              <div className="v2-cta-rail__item">
                <p className="v2-cta-rail__label">Walkthrough</p>
                <p className="v2-cta-rail__value">Demo route</p>
              </div>
              <div className="v2-cta-rail__item">
                <p className="v2-cta-rail__label">Evaluation</p>
                <p className="v2-cta-rail__value">Pilot route</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
