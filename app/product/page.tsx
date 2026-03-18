import Link from "next/link";

export default function ProductPage() {
  return (
    <section className="section">
      <div className="container page-stack">
        <div className="page-hero">
          <p className="eyebrow">Product overview</p>
          <h1>A more usable criminal defence working file.</h1>
          <p className="page-lead">
            Iknos Docket is built to help criminal defence counsel turn
            disclosure volume into a clearer review environment: stronger file
            structure, better continuity, and more disciplined movement toward
            preparation.
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
              At a practical level, the product helps counsel move from raw
              disclosure and scattered material toward a more controlled working
              file.
            </p>
            <p>
              That includes stronger organization of case material, more
              structured review, better visibility into issues and pressure
              points, and a file that remains more coherent as the matter
              develops.
            </p>
          </div>

          <div>
            <h2>What that means in practice</h2>
            <p>
              Instead of treating disclosure as a pile of disconnected inputs,
              Iknos Docket is intended to support a more disciplined review
              environment: clearer structure, clearer continuity, and clearer
              progress toward defence preparation.
            </p>
            <p>
              The point is not to add another layer of software noise. The point
              is to reduce friction inside the file.
            </p>
          </div>
        </div>

        <div className="content-grid">
          <div>
            <h2>Core workflow support</h2>
            <ul className="clean-list">
              <li>Disclosure review</li>
              <li>Case-material organization</li>
              <li>Issue spotting and issue review</li>
              <li>Evidence and document structure</li>
              <li>Preparation workflow</li>
              <li>Working-file clarity across the life of a matter</li>
            </ul>
          </div>

          <div>
            <h2>Designed for real legal workflow</h2>
            <ul className="clean-list">
              <li>Built for lawyer-readable review</li>
              <li>Supports counsel judgment rather than replacing it</li>
              <li>Intended for confidentiality-sensitive legal workflow</li>
              <li>Reduces fragmentation across the file</li>
              <li>Helps surface pressure points earlier</li>
              <li>Keeps preparation anchored to organized material</li>
            </ul>
          </div>
        </div>

        <div className="content-grid">
          <div>
            <h2>What it is not</h2>
            <p>
              Iknos Docket is not a law firm, does not provide legal advice, and
              does not replace counsel’s professional duties, legal judgment, or
              case theory.
            </p>
            <p>
              It is a legal workflow product intended to support review,
              organization, and preparation in a more usable and more controlled
              working environment.
            </p>
          </div>

          <div>
            <h2>Next step</h2>
            <p>
              If you want to evaluate whether Iknos Docket fits your practice,
              request a demo for a direct walkthrough. If you are evaluating
              operational fit inside active criminal defence work, apply for the
              pilot.
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
