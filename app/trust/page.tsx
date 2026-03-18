import Link from "next/link";

export default function TrustPage() {
  return (
    <section className="section">
      <div className="container page-stack">
        <div className="page-hero">
          <p className="eyebrow">Trust, privacy, and security</p>
          <h1>A more serious operating posture for legal work.</h1>
          <p className="page-lead">
            Iknos Docket is built for confidentiality-sensitive criminal defence
            workflow. The trust posture is intentionally restrained: clear
            claims, disciplined handling, and a product position grounded in the
            realities of legal review rather than startup theatre.
          </p>
        </div>

        <div className="content-grid">
          <div>
            <h2>Built for lawyer-readable work</h2>
            <p>
              The product is designed to support disclosure review, working-file
              structure, and issue development in a form that remains legible to
              counsel.
            </p>
            <p>
              That means practical structure over novelty, disciplined workflow
              over inflated language, and a product surface that can hold up
              inside real defence work.
            </p>
          </div>

          <div>
            <h2>Confidentiality-sensitive by design</h2>
            <p>
              Criminal defence work carries different expectations from ordinary
              office software. Disclosure, evidence, issues, and preparation
              material can be sensitive, fragmented, and operationally critical.
            </p>
            <p>
              For that reason, Iknos Docket is positioned as a serious legal
              workflow product, not as a casual productivity tool and not as a
              consumer-style AI layer sitting on top of legal work.
            </p>
          </div>
        </div>

        <div className="content-grid">
          <div>
            <h2>What the product is meant to support</h2>
            <ul className="clean-list">
              <li>Structured review of disclosure and case material</li>
              <li>Clearer working-file continuity across a matter</li>
              <li>Issue-focused review and preparation workflow</li>
              <li>More coherent handling of fragmented material</li>
              <li>Stronger counsel control over file organization and visibility</li>
            </ul>
          </div>

          <div>
            <h2>What the product is not</h2>
            <ul className="clean-list">
              <li>It does not provide legal advice</li>
              <li>It does not replace counsel’s judgment</li>
              <li>It does not replace legal obligations or professional duties</li>
              <li>It is not a law firm or legal representative</li>
              <li>It is not a substitute for lawyer review and decision-making</li>
            </ul>
          </div>
        </div>

        <div className="content-grid">
          <div>
            <h2>Privacy and operational handling</h2>
            <p>
              Privacy expectations in legal workflow are not optional. Product
              design, language, and operating decisions should reflect that from
              the start.
            </p>
            <p>
              The aim is not to make legal work look flashy. The aim is to make
              review and organization more controlled, more usable, and more
              durable under real file pressure.
            </p>
          </div>

          <div>
            <h2>Need more detail?</h2>
            <p>
              For formal legal and policy language, review the Privacy Policy
              and Terms of Use. For practical evaluation, request a demo to see
              the workflow directly.
            </p>
            <div className="hero-actions">
              <Link href="/privacy" className="btn btn-secondary">
                Privacy Policy
              </Link>
              <Link href="/terms" className="btn btn-secondary">
                Terms of Use
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
