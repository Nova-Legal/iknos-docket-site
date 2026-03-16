import Link from "next/link";
import { CtaBand } from "@/components/cta-band";

export default function HomePage() {
  return (
    <>
      <section className="section">
        <div className="container">
          <p className="eyebrow">Ontario criminal defence workflow</p>
          <h1 className="hero-title">
            Ontario criminal disclosure, organized for defence review.
          </h1>
          <p className="hero-text">
            Iknos Docket helps criminal defence counsel review disclosure,
            organize case material, surface issues, and work through defence
            workflow with greater structure and less drag.
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
      </section>

      <section className="section">
        <div className="container split-section">
          <div>
            <h2>Built for serious criminal defence workflow</h2>
            <p className="section-lead">
              This is not generic document software.
            </p>
          </div>
          <div className="stack-text">
            <p>
              Iknos Docket is designed for Ontario criminal defence work. It
              helps turn large, messy disclosure into a more usable working
              file: organized material, structured review, issue-focused
              analysis, and a clearer path through defence preparation.
            </p>
            <p>
              It is built around the realities of criminal disclosure review,
              case organization, issue development, and counsel workflow.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container split-section">
          <div>
            <h2>Who it is for</h2>
            <p className="section-lead">
              Built for real practice pressure, not generic office workflow.
            </p>
          </div>
          <div className="feature-grid">
            <div className="card">
              <h3>Solo defence counsel</h3>
              <p>
                For lawyers carrying active files who need a clearer working
                structure across disclosure, issues, and preparation.
              </p>
            </div>
            <div className="card">
              <h3>Small criminal defence firms</h3>
              <p>
                For teams that want a more consistent review process and a more
                coherent working file as matters evolve.
              </p>
            </div>
            <div className="card">
              <h3>Disclosure-heavy matters</h3>
              <p>
                For files where volume, fragmentation, and buried material make
                review harder than it should be.
              </p>
            </div>
            <div className="card">
              <h3>Issue-driven preparation</h3>
              <p>
                For counsel who need to move from raw material toward clearer
                lines of review, pressure points, and defence workflow.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container split-section">
          <div>
            <h2>What it helps with</h2>
            <p className="section-lead">
              The product is built to support the actual pressure points inside a criminal file.
            </p>
          </div>
          <div className="feature-grid">
            <div className="card">
              <h3>Disclosure review</h3>
              <p>Structured handling of large disclosure sets and fragmented material.</p>
            </div>
            <div className="card">
              <h3>Case organization</h3>
              <p>Clearer arrangement of file material so review becomes more usable over time.</p>
            </div>
            <div className="card">
              <h3>Issue spotting and issue review</h3>
              <p>Better visibility into what matters, what conflicts, and what needs attention.</p>
            </div>
            <div className="card">
              <h3>Evidence and document structure</h3>
              <p>Working-file structure that reduces drift, duplication, and buried material.</p>
            </div>
            <div className="card">
              <h3>Defence preparation workflow</h3>
              <p>Support for moving from raw material toward organized preparation.</p>
            </div>
            <div className="card">
              <h3>Working-file clarity across a matter</h3>
              <p>More control and continuity as the case develops.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container split-section">
          <div>
            <h2>Why this matters</h2>
            <p className="section-lead">
              Criminal files rarely fail because there is too little paper.
            </p>
          </div>
          <div className="stack-text">
            <p>
              They fail because important material gets buried, review becomes
              fragmented, and the working theory of the case is harder to hold
              together over time.
            </p>
            <p>Iknos Docket is meant to reduce that friction.</p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container split-section">
          <div>
            <h2>Serious work needs serious handling.</h2>
            <p className="section-lead">
              The public posture should be restrained and trust-building.
            </p>
          </div>
          <div className="feature-grid feature-grid--three">
            <div className="card">
              <h3>Lawyer-readable review</h3>
              <p>Built for real legal workflow, not novelty copy.</p>
            </div>
            <div className="card">
              <h3>Confidentiality-sensitive posture</h3>
              <p>The trust model is serious because the work is serious.</p>
            </div>
            <div className="card">
              <h3>Supports counsel judgment</h3>
              <p>
                It is designed to support review and control, not replace legal thinking.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container split-section">
          <div>
            <h2>What it is not</h2>
            <p className="section-lead">
              Better to be clear than sound impressive.
            </p>
          </div>
          <div className="stack-text">
            <p>
              Iknos Docket is not a law firm, does not provide legal advice,
              and does not replace counsel’s analysis, obligations, or judgment.
            </p>
            <p>
              It is a workflow product intended to support review,
              organization, and defence preparation in a more usable working
              environment.
            </p>
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
