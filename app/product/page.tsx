import { Hero } from "@/components/hero";
import { Section } from "@/components/section";
import { CtaBand } from "@/components/cta-band";

export default function ProductPage() {
  return (
    <>
      <Hero
        eyebrow="Product overview"
        title="A more usable criminal defence working file"
        description="Iknos Docket helps transform disclosure and case material into a more structured review environment for Ontario criminal defence matters."
        primaryHref="/demo"
        primaryLabel="Request a Demo"
        secondaryHref="/pilot"
        secondaryLabel="Apply for Pilot"
      />

      <Section title="What Iknos Docket does" intro="At a practical level, it helps counsel move from document volume to working structure.">
        <p>It is designed to help with organizing case material, reviewing disclosure more systematically, tracking issues and pressure points, and keeping the defence file more coherent as the matter develops.</p>
      </Section>

      <Section title="Input and output" intro="The product is meant to reduce drag between raw material and useful working visibility.">
        <div className="grid-list md:grid-cols-2">
          <div className="card">
            <p className="font-semibold">Input</p>
            <p className="mt-2 text-[var(--muted)]">Disclosure, reports, records, statements, transcripts, media, and supporting documents.</p>
          </div>
          <div className="card">
            <p className="font-semibold">Output</p>
            <p className="mt-2 text-[var(--muted)]">Organized material, clearer document relationships, issue-oriented review, and stronger continuity across the file.</p>
          </div>
        </div>
      </Section>

      <Section title="How it fits workflow" intro="The point is not passive storage. The point is structured review.">
        <div className="grid-list">
          {[
            ["1. Intake and organization", "Case material is brought into a structured review environment."],
            ["2. Review and sorting", "Material is organized in a way that supports working review rather than passive storage."],
            ["3. Issue-focused analysis", "Potential issues, relationships, and lines of attention are easier to track."],
            ["4. Ongoing defence workflow", "The file remains more workable as disclosure grows, strategy evolves, and deadlines move."]
          ].map(([title, body]) => (
            <div key={title} className="card">
              <p className="font-semibold">{title}</p>
              <p className="mt-2 text-[var(--muted)]">{body}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section title="Who it is built for" intro="The fit is specific.">
        <p>Iknos Docket is being built for Ontario criminal defence counsel and firms that deal with disclosure-heavy files, fragmented case material, and the operational burden of keeping a defence file truly reviewable.</p>
      </Section>

      <Section title="What it is not" intro="This language matters.">
        <p>Iknos Docket is not a replacement for legal judgment. It does not make defence decisions for counsel. It is a workflow product designed to support human review, legal thinking, and file control.</p>
      </Section>

      <CtaBand />
    </>
  );
}
