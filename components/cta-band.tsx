import Link from "next/link";

export function CtaBand() {
  return (
    <section className="section section--cta">
      <div className="container">
        <div className="cta-band">
          <p className="eyebrow">Next step</p>
          <h2 className="cta-band__title">
            See whether Iknos Docket fits your practice.
          </h2>
          <p className="cta-band__text">
            Request a demo for a direct walkthrough, or apply for the pilot if you are evaluating operational fit inside an active criminal defence practice.
          </p>
          <div className="cta-band__actions">
            <Link href="/demo" className="btn btn-primary">
              Request a Demo
            </Link>
            <Link href="/pilot" className="btn btn-secondary">
              Apply for Pilot
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
