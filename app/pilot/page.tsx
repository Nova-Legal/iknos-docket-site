import { PilotForm } from "@/components/pilot-form";

export default function PilotPage() {
  return (
    <section className="section">
      <div className="container page-stack">
        <div className="page-hero">
          <p className="eyebrow">Apply for pilot</p>
          <h1>Evaluate Iknos Docket inside real practice conditions.</h1>
          <p className="page-lead">
            The pilot is intended for lawyers and firms evaluating operational
            fit in active criminal defence workflow.
          </p>
        </div>

        <div className="content-grid">
          <div>
            <h2>What the pilot is for</h2>
            <p>
              The pilot is for practices that want a more serious evaluation
              than a standard demo. It is intended for situations where counsel
              wants to assess how the product may fit inside actual working
              conditions.
            </p>
            <p>
              This is not just a product tour. It is a more selective review of
              operational fit.
            </p>
          </div>

          <div>
            <h2>Who should apply</h2>
            <ul className="clean-list">
              <li>Solo criminal defence counsel with active file pressure</li>
              <li>Small criminal defence firms evaluating workflow fit</li>
              <li>Practices handling disclosure-heavy matters</li>
              <li>Teams looking for a more structured review environment</li>
            </ul>
          </div>
        </div>

        <div className="content-grid">
          <div>
            <h2>What we want to understand</h2>
            <ul className="clean-list">
              <li>Your practice context</li>
              <li>Your current review and organization pressure points</li>
              <li>Why you think a pilot is the right route</li>
              <li>Whether the workflow fit appears serious enough to evaluate</li>
            </ul>
          </div>

          <div>
            <h2>Before you apply</h2>
            <p>
              If you only want a direct walkthrough, request a demo instead.
              The pilot is better suited to firms or counsel who want to assess
              operational relevance more closely.
            </p>
          </div>
        </div>

        <div className="content-grid">
          <div>
            <h2>Apply for pilot</h2>
            <p className="section-lead">
              Give us enough context to understand whether a pilot makes sense.
            </p>
          </div>

          <div>
            <PilotForm />
          </div>
        </div>
      </div>
    </section>
  );
}
