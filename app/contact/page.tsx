import { ContactForm } from "@/components/contact-form";
import Link from "next/link";

export default function ContactPage() {
  return (
    <section className="section">
      <div className="container page-stack">
        <div className="page-hero">
          <p className="eyebrow">Contact</p>
          <h1>Get in touch about Iknos Docket.</h1>
          <p className="page-lead">
            Use this page for general product inquiries, follow-up questions,
            and business contact related to Iknos Docket.
          </p>
        </div>

        <div className="content-grid">
          <div>
            <h2>When to use this page</h2>
            <p>
              Use the contact form for general questions about the product,
              business inquiries, or follow-up that does not fit the demo or
              pilot routes.
            </p>
            <p>
              If you want a direct walkthrough, request a demo. If you want a
              more serious operational evaluation, apply for the pilot.
            </p>
          </div>

          <div>
            <h2>Best routes</h2>
            <ul className="clean-list">
              <li>Demo request for a direct walkthrough</li>
              <li>Pilot application for operational evaluation</li>
              <li>Contact form for general or business inquiries</li>
            </ul>
          </div>
        </div>

        <div className="content-grid">
          <div>
            <h2>What to expect</h2>
            <p>
              We review contact requests to understand the nature of the inquiry
              and the most appropriate next step.
            </p>
            <p>
              Depending on the request, follow-up may direct you toward a demo,
              pilot, or a more general response.
            </p>
          </div>

          <div>
            <h2>Useful next steps</h2>
            <div className="hero-actions">
              <Link href="/demo" className="btn btn-secondary">
                Request a Demo
              </Link>
              <Link href="/pilot" className="btn btn-secondary">
                Apply for Pilot
              </Link>
            </div>
          </div>
        </div>

        <div className="content-grid">
          <div>
            <h2>Contact form</h2>
            <p className="section-lead">
              Give enough context for us to understand the inquiry clearly.
            </p>
          </div>

          <div>
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
