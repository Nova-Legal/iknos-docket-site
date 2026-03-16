import { ContactForm } from "@/components/contact-form";

export default function ContactPage() {
  return (
    <section className="section">
      <div className="container page-stack">
        <div className="page-hero">
          <p className="eyebrow">Contact</p>
          <h1>Get in touch about Iknos Docket.</h1>
          <p className="page-lead">
            Use this page for general product inquiries, follow-up questions,
            or other business contact related to Iknos Docket.
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
              Keep the message direct. Basic context is enough. We will review
              the inquiry and reply through the appropriate route.
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
