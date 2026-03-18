import Link from "next/link";

export default function ContactThankYouPage() {
  return (
    <section className="section">
      <div className="container page-stack">
        <div className="page-hero">
          <p className="eyebrow">Message received</p>
          <h1>Your message has been submitted.</h1>
          <p className="page-lead">
            Thank you for contacting Iknos Docket. We will review the inquiry
            and follow up with the most appropriate next step.
          </p>
        </div>

        <div className="content-grid">
          <div>
            <h2>What happens next</h2>
            <p>
              We review contact requests to understand the nature of the inquiry
              and whether it is best handled as a general response, a demo, or a
              pilot discussion.
            </p>
            <p>
              Follow-up timing may vary depending on the request and the context provided.
            </p>
          </div>

          <div>
            <h2>Useful next steps</h2>
            <p>
              You can return to the homepage, review the product overview, or
              go directly to the demo or pilot pages.
            </p>
            <div className="hero-actions">
              <Link href="/" className="btn btn-secondary">
                Back to Home
              </Link>
              <Link href="/demo" className="btn btn-secondary">
                Request a Demo
              </Link>
              <Link href="/pilot" className="btn btn-primary">
                Apply for Pilot
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
