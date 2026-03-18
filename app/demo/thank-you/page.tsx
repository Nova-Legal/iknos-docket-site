import Link from "next/link";

export default function DemoThankYouPage() {
  return (
    <section className="section">
      <div className="container page-stack">
        <div className="page-hero">
          <p className="eyebrow">Demo request received</p>
          <h1>Your request has been submitted.</h1>
          <p className="page-lead">
            Thank you for your interest in Iknos Docket. We will review the
            request and follow up with the next step for a direct product walkthrough.
          </p>
        </div>

        <div className="content-grid">
          <div>
            <h2>What happens next</h2>
            <p>
              We review demo requests to understand the practice context and
              whether a walkthrough is the right next step.
            </p>
            <p>
              If appropriate, follow-up will include scheduling and any context
              needed before the session.
            </p>
          </div>

          <div>
            <h2>In the meantime</h2>
            <p>
              You can return to the homepage, review the product overview, or
              read the trust, privacy, and security page.
            </p>
            <div className="hero-actions">
              <Link href="/" className="btn btn-secondary">
                Back to Home
              </Link>
              <Link href="/product" className="btn btn-secondary">
                Product Overview
              </Link>
              <Link href="/trust" className="btn btn-primary">
                Trust Page
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
