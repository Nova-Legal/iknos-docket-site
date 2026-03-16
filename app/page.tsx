import Link from "next/link";
import { Hero } from "@/components/hero";
import { Section } from "@/components/section";
import { CtaBand } from "@/components/cta-band";

export default function HomePage() {
  return (
    <>
      <Hero
        eyebrow="Ontario criminal defence workflow"
        title="Ontario criminal disclosure, organized for defence review."
        description="Iknos Docket helps criminal defence counsel review disclosure, organize case material, surface issues, and work through defence workflow with greater structure and less drag."
        primaryHref="/demo"
        primaryLabel="Request a Demo"
        secondaryHref="/pilot"
        secondaryLabel="Apply for Pilot"
      />

      <Section title="Built for serious criminal defence workflow" intro="This is not generic document software.">
        <p>
          Iknos Docket is designed for Ontario criminal defence work. It helps turn large, messy disclosure into a more usable working file: organized material, structured review, issue-focused analysis, and a clearer path through defence preparation.
        </p>
        <p>
          It is built around the realities of criminal disclosure review, case organization, issue development, and counsel workflow.
        </p>
      </Section>

      <Section title="What it helps with" intro="The product is built to support the actual pressure points inside a criminal file.">
        <div className="grid-list md:grid-cols-2">
          {[
            "Disclosure review",
            "Case organization",
            "Issue spotting and issue review",
            "Evidence and document structure",
            "Defence preparation workflow",
            "Working-file clarity across a matter"
          ].map((item) => (
            <div key={item} className="card">
              <p className="font-semibold">{item}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section title="Why this matters" intro="Criminal files rarely fail because there is too little paper.">
        <p>
          They fail because important material gets buried, review becomes fragmented, and the working theory of the case is harder to hold together over time.
        </p>
        <p>Iknos Docket is meant to reduce that friction.</p>
      </Section>

      <Section title="Serious work needs serious handling." intro="The public posture should be restrained and trust-building.">
        <div className="grid-list md:grid-cols-3">
          <div className="card">
            <p className="font-semibold">Lawyer-readable review</p>
            <p className="mt-2 text-[var(--muted)]">Built for real legal workflow, not novelty copy.</p>
          </div>
          <div className="card">
            <p className="font-semibold">Confidentiality-sensitive posture</p>
            <p className="mt-2 text-[var(--muted)]">The trust model is serious because the work is serious.</p>
          </div>
          <div className="card">
            <p className="font-semibold">Supports counsel judgment</p>
            <p className="mt-2 text-[var(--muted)]">It is designed to support review and control, not replace legal thinking.</p>
          </div>
        </div>
        <p>
          <Link href="/trust" className="text-[var(--accent)] font-semibold">
            Read the trust, privacy, and security page.
          </Link>
        </p>
      </Section>

      <CtaBand />
    </>
  );
}
