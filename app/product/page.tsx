import Link from "next/link";

export default function ProductPage() {
  return (
    <section className="section">
      <div className="container page-stack">
        <div className="page-hero">
          <p className="eyebrow">Product overview</p>
          <h1>A more usable criminal defence working file.</h1>
          <p className="page-lead">
            Iknos Docket helps transform disclosure and case material into a
            more structured review environment for Ontario criminal defence matters.
          </p>
          <div className="hero-actions">
            <Link href="/demo" className="btn btn-primary">
              Request a Demo
            </Link>
            <Link href="/pilot" className="btn btn-secondary">
              Apply for Pilot
            </Link>
          </div>
        </div>

        <div className="content-grid">
          <div>
            <h2>What Iknos Docket does</h2>
            <p>
              At a practical level, it helps counsel move from document volume
              to working structure.
            </p>
            <p>
              It is designed to help with organizing case material, reviewing
              disclosure more systematically, tracking issues and pressure
              points, and keeping the defence file more coherent as the matter
              develops.
            </p>
          </div>

          <div>
            <h2>What that means in practice</h2>
            <p>
              Instead of treating disclosure as a pile of disconnected material,
              Iknos Docket is meant to support a more disciplined working file:
              clearer structure, clearer review, and clearer movement toward
              defence preparation.
            </p>
            <p>
              The goal is not to add noise. The goal is to reduce drag.
            </p>
          </div>
        </div>

        <div className="content-grid">
          <div>
            <h2>Core workflow support</h2>
            <ul className="clean-list">
              <li>Disclosure review</li>
              <li>Case organization</li>
              <li>Issue spotting and issue review</li>
              <li>Evidence and document structure</li>
              <li>Defence preparation workflow</li>
              <li>Working-file clarity across a matter</li>
            </ul>
          </div>

          <div>
            <h2>Designed for real legal workflow</h2>
            <ul className="clean-list">
              <li>Built for lawyer-readable review</li>
              <li>Supports counsel judgment rather than replacing it</li>
              <li>Intended for confidentiality-sensitive workflow</li>
              <li>Aims to reduce fragmentation across the file</li>
              <li>Helps surface pressure points earlier</li>
              <li>Keeps preparation grounded in organized material</li>
            </ul>
          </div>
        </div>

        <div className="content-grid">
          <div>
            <h2>What it is not</h2>
            <p>
              Iknos Docket is not a law firm, does not provide legal advice,
              and does not replace counsel’s professional duties, legal
              judgment, or case theory.
            </p>
            <p>
              It is a legal workflow product built to support review,
              organization, and preparation in a more usable environment.
            </p>
          </div>

          <div>
            <h2>Next step</h2>
            <p>
              If you want to see whether Iknos Docket fits your practice,
              request a demo for a direct walkthrough or apply for the pilot if
              you are evaluating operational fit inside an active criminal
              defence practice.
            </p>
            <div className="hero-actions">
              <Link href="/demo" className="btn btn-primary">
                Request a Demo
              </Link>
              <Link href="/pilot" className="btn btn-secondary">
                Apply for Pilot
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
