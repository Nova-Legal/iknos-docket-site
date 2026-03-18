import Link from "next/link";

export default function PilotThankYouPage() {
  return (
    <section className="section">
      <div className="container page-stack">
        <div className="page-hero">
          <p className="eyebrow">Pilot application received</p>
          <h1>Your application has been submitted.</h1>
          <p className="page-lead">
            Thank you for applying to the Iknos Docket pilot. We will review the
            submission for practice fit, workflow need, and operational relevance.
          </p>
        </div>

        <div className="content-grid">
          <div>
            <h2>How applications are reviewed</h2>
            <p>
              Pilot requests are assessed to determine whether the use case
              appears serious enough and suitable enough for further evaluation.
            </p>
            <p>
              Submission of an application does not guarantee acceptance. It is
              a request to assess whether a pilot makes sense.
            </p>
          </div>

          <div>
            <h2>In the meantime</h2>
            <p>
              You can review the product overview, return to the homepage, or
              request a direct demo if you mainly want a clearer walkthrough.
            </p>
            <div className="hero-actions">
              <Link href="/" className="btn btn-secondary">
                Back to Home
              </Link>
              <Link href="/product" className="btn btn-secondary">
                Product Overview
              </Link>
              <Link href="/demo" className="btn btn-primary">
                Request a Demo
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
