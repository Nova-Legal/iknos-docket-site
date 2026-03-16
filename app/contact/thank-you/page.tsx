import Link from "next/link";

export default function ContactThankYouPage() {
  return (
    <section className="section">
      <div className="container page-stack">
        <div className="page-hero">
          <p className="eyebrow">Message received</p>
          <h1>Thank you. Your message has been received.</h1>
          <p className="page-lead">
            We will review the inquiry and reply through the appropriate route.
          </p>
        </div>

        <div className="content-grid">
          <div>
            <h2>What happens next</h2>
            <p>
              General inquiries are reviewed and routed according to their
              purpose.
            </p>
            <p>
              If your message is better suited to a demo or pilot path, we may
              direct you there instead.
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
