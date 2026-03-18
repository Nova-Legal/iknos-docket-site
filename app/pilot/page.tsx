import Link from "next/link";
import { PilotForm } from "@/components/pilot-form";

export default function PilotPage() {
  return (
    <section className="section">
      <div className="container page-stack">
        <div className="page-hero">
          <p className="eyebrow">Apply for pilot</p>
          <h1>Assess whether Iknos Docket fits active defence work.</h1>
          <p className="page-lead">
            The pilot is intended for firms or counsel evaluating whether the
            product has real operational fit inside ongoing criminal defence
            workflow.
          </p>
        </div>

        <div className="content-grid">
          <div>
            <h2>What the pilot is for</h2>
            <p>
              The pilot is meant for practices that want to evaluate Iknos
              Docket more seriously than a surface-level walkthrough allows.
            </p>
            <p>
              It is for firms or counsel assessing whether the product’s
              approach to review, file organization, issue visibility, and
              preparation workflow is operationally useful in actual matters.
            </p>
          </div>

          <div>
            <h2>What to expect</h2>
            <ul className="clean-list">
              <li>A closer look at practical workflow fit</li>
              <li>More direct evaluation of how the product maps to live work</li>
              <li>Space to surface operational constraints and questions</li>
              <li>A clearer basis for deciding whether further engagement makes sense</li>
            </ul>
          </div>
        </div>

        <div className="content-grid">
          <div>
            <h2>Who the pilot is best suited for</h2>
            <ul className="clean-list">
              <li>Solo criminal defence counsel with active file pressure</li>
              <li>Small criminal defence firms evaluating workflow fit</li>
              <li>Practices dealing with disclosure-heavy matters</li>
              <li>Teams that need stronger review continuity and file control</li>
            </ul>
          </div>

          <div>
            <h2>When to request a demo instead</h2>
            <p>
              If you only want a direct walkthrough of the product, request a
              demo instead.
            </p>
            <p>
              The pilot is better suited to firms or counsel who want to assess
              operational relevance more closely before deciding on next steps.
            </p>
            <div className="hero-actions">
              <Link href="/demo" className="btn btn-secondary">
                Request a Demo
              </Link>
            </div>
          </div>
        </div>

        <div className="content-grid">
          <div>
            <h2>How requests are assessed</h2>
            <p>
              Pilot requests are reviewed for practice fit, workflow need, and
              whether the use case appears serious enough to evaluate properly.
            </p>
            <p>
              Submission of a request does not guarantee acceptance into a
              pilot. It is an application to assess suitability.
            </p>
          </div>

          <div>
            <h2>Apply for pilot</h2>
            <p className="section-lead">
              Give enough context for us to understand whether a pilot makes sense.
            </p>
          </div>
        </div>

        <PilotForm />
      </div>
    </section>
  );
}
