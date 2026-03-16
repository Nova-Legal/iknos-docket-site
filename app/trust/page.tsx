import Link from "next/link";

export default function TrustPage() {
  return (
    <section className="section">
      <div className="container page-stack">
        <div className="page-hero">
          <p className="eyebrow">Trust, privacy, and security</p>
          <h1>A serious posture for serious legal work.</h1>
          <p className="page-lead">
            Iknos Docket is intended for confidentiality-sensitive legal
            workflow. The public posture should be restrained, clear, and
            grounded in the realities of criminal defence practice.
          </p>
        </div>

        <div className="content-grid">
          <div>
            <h2>Built for lawyer-readable work</h2>
            <p>
              The product is designed to support legal review and working-file
              organization in a form that remains readable and usable to
              counsel.
            </p>
            <p>
              It is not built around novelty language, inflated claims, or
              theatrical product positioning. The aim is practical utility and
              disciplined workflow support.
            </p>
          </div>

          <div>
            <h2>Confidentiality-sensitive posture</h2>
            <p>
              Legal work requires a more careful trust posture than ordinary
              office software. Disclosure, evidence, issues, and preparation
              material can be sensitive, fragmented, and operationally important.
            </p>
            <p>
              For that reason, Iknos Docket is presented as a serious workflow
              product, not a casual productivity tool.
            </p>
          </div>
        </div>

        <div className="content-grid">
          <div>
            <h2>What the product is meant to support</h2>
            <ul className="clean-list">
              <li>Organized review of disclosure and case material</li>
              <li>Clearer working-file structure across a matter</li>
              <li>Issue-focused review and preparation workflow</li>
              <li>More coherent handling of fragmented file material</li>
              <li>Support for counsel control and continuity over time</li>
            </ul>
          </div>

          <div>
            <h2>What the product is not meant to do</h2>
            <ul className="clean-list">
              <li>It does not provide legal advice</li>
              <li>It does not replace counsel’s judgment</li>
              <li>It does not replace legal obligations or professional duties</li>
              <li>It is not a law firm or legal representative</li>
              <li>It is not a substitute for lawyer review</li>
            </ul>
          </div>
        </div>

        <div className="content-grid">
          <div>
            <h2>Privacy and operational handling</h2>
            <p>
              Privacy expectations in legal workflow are not optional. Product
              decisions, messaging, and workflow design should reflect that
              reality.
            </p>
            <p>
              The product is intended to reduce friction in review and
              organization while maintaining a serious operational posture toward
              legal material.
            </p>
          </div>

          <div>
            <h2>Need more detail?</h2>
            <p>
              For formal legal and policy language, review the Privacy Policy
              and Terms of Use. For practical evaluation, request a demo or
              apply for the pilot.
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
