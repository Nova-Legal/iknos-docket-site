import { Hero } from "@/components/hero";
import { Section } from "@/components/section";

export default function TrustPage() {
  return (
    <>
      <Hero
        eyebrow="Trust / Privacy / Security"
        title="Trust, privacy, and professional responsibility"
        description="Criminal defence work is sensitive by definition. Any product in this space has to earn trust the hard way: by being serious about confidentiality, controlled handling, and professional boundaries."
      />

      <Section title="Our posture" intro="Iknos Docket is being built around legal-workflow realities, not generic software assumptions.">
        <div className="grid-list md:grid-cols-2">
          {[
            "Confidentiality sensitivity",
            "Careful data handling",
            "Professional restraint",
            "Support for counsel judgment rather than substitution"
          ].map((item) => (
            <div key={item} className="card">
              <p className="font-semibold">{item}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section title="Data handling principles" intro="Do not promise technical specifics on the public site unless they are true in production.">
        <p>Information submitted through public forms is used to respond to demo and pilot inquiries.</p>
        <p>Access to inquiry information is limited internally.</p>
        <p>Product and data-handling details are discussed more specifically in direct conversations where appropriate.</p>
        <p>Formal policies and technical controls are documented as the product stack matures.</p>
      </Section>

      <Section title="Professional judgment remains with counsel" intro="This line is not filler. It is core positioning.">
        <p>Iknos Docket is intended to support review, organization, and workflow. It does not replace counsel&apos;s legal analysis, ethical duties, or professional judgment.</p>
      </Section>

      <Section title="Questions" intro="Keep the contact route simple.">
        <p>Questions about privacy or security can be sent through the contact page.</p>
      </Section>
    </>
  );
}
