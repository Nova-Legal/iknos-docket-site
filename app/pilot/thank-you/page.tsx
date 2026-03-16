import Link from "next/link";

export default function PilotThankYouPage() {
  return (
    <section className="section">
      <div className="container page-stack">
        <div className="page-hero">
          <p className="eyebrow">Pilot application received</p>
          <h1>Thank you. Your pilot application has been received.</h1>
          <p className="page-lead">
            We will review the context you submitted and assess whether a pilot
            evaluation appears to be a serious fit.
          </p>
        </div>

        <div className="content-grid">
          <div>
            <h2>What happens next</h2>
            <p>
              Pilot applications are reviewed more selectively than standard
              demo requests.
            </p>
            <p>
              We will assess the practice context, the stated workflow needs,
              and whether the product appears operationally relevant enough to
              evaluate more closely.
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
