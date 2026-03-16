import Link from "next/link";

export default function DemoThankYouPage() {
  return (
    <section className="section">
      <div className="container page-stack">
        <div className="page-hero">
          <p className="eyebrow">Demo request received</p>
          <h1>Thank you. Your demo request has been received.</h1>
          <p className="page-lead">
            We will review your request and follow up through the appropriate
            next step.
          </p>
        </div>

        <div className="content-grid">
          <div>
            <h2>What happens next</h2>
            <p>
              We will review the information you submitted and reply if a demo
              is the right route.
            </p>
            <p>
              If your situation appears better suited to a pilot evaluation, we
              may point you in that direction instead.
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
