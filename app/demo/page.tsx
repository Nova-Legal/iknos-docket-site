import { DemoForm } from "@/components/demo-form";

export default function DemoPage() {
  return (
    <section className="section">
      <div className="container page-stack">
        <div className="page-hero">
          <p className="eyebrow">Request a demo</p>
          <h1>See whether Iknos Docket fits your practice.</h1>
          <p className="page-lead">
            Request a direct walkthrough of the product and its intended role in
            Ontario criminal defence workflow.
          </p>
        </div>

        <div className="content-grid">
          <div>
            <h2>What the demo is for</h2>
            <p>
              The demo is meant for lawyers and firms who want to understand how
              Iknos Docket approaches disclosure review, case organization,
              issue-focused workflow, and working-file clarity.
            </p>
            <p>
              It is a practical product walkthrough, not a generic sales call.
            </p>
          </div>

          <div>
            <h2>What to expect</h2>
            <ul className="clean-list">
              <li>A direct overview of the product and workflow</li>
              <li>A clearer sense of where it fits in practice</li>
              <li>Space to raise operational questions</li>
              <li>A straightforward next-step discussion if relevant</li>
            </ul>
          </div>
        </div>

        <div className="content-grid">
          <div>
            <h2>Who should request a demo</h2>
            <ul className="clean-list">
              <li>Solo criminal defence counsel</li>
              <li>Small criminal defence firms</li>
              <li>Teams evaluating review and organization workflow</li>
              <li>Practices dealing with disclosure-heavy matters</li>
            </ul>
          </div>

          <div>
            <h2>Before you submit</h2>
            <p>
              Use this form if you want a direct walkthrough. If you are looking
              for a deeper evaluation inside an active practice environment, the
              pilot application may be the better route.
            </p>
          </div>
        </div>

        <div className="content-grid">
          <div>
            <h2>Request a demo</h2>
            <p className="section-lead">
              Keep it simple. We only need the basics to follow up.
            </p>
          </div>

          <div>
            <DemoForm />
          </div>
        </div>
      </div>
    </section>
  );
}
