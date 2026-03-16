import { Hero } from "@/components/hero";
import { Section } from "@/components/section";
import { PilotForm } from "@/components/pilot-form";

export default function PilotPage() {
  return (
    <>
      <Hero
        eyebrow="Apply for Pilot"
        title="Pilot participation is for serious workflow evaluation."
        description="The pilot is for firms or counsel who want to evaluate Iknos Docket in a real working context and provide grounded feedback. This is not for casual curiosity."
      />

      <Section title="Who the pilot is for" intro="A strong fit is usually operational, not performative.">
        <div className="grid-list">
          {[
            "Active criminal defence practice",
            "Meaningful disclosure review burden",
            "Willingness to provide structured feedback",
            "Interest in operational improvement, not novelty"
          ].map((item) => (
            <div key={item} className="card">
              <p className="font-semibold">{item}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section title="What participation may involve" intro="Keep expectations plain.">
        <p>Pilot participation may involve product walkthroughs, limited onboarding, practical usage discussions, and feedback on workflow fit, trust requirements, and implementation realities.</p>
      </Section>

      <section className="section">
        <div className="container max-w-4xl">
          <p className="eyebrow">Pilot application form</p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight">If this matches your practice, apply for pilot review.</h2>
          <p className="mt-4 max-w-2xl text-base leading-8 text-[var(--muted)]">
            The pilot form is more selective because the point is serious evaluation, not list-building.
          </p>
          <div className="mt-8">
            <PilotForm />
          </div>
        </div>
      </section>
    </>
  );
}
