import { Hero } from "@/components/hero";
import { Section } from "@/components/section";
import { DemoForm } from "@/components/demo-form";

export default function DemoPage() {
  return (
    <>
      <Hero
        eyebrow="Request a Demo"
        title="See Iknos Docket in context."
        description="If you want to see how Iknos Docket is intended to fit Ontario criminal defence workflow, request a demo. The walkthrough should be concise, practical, and product-focused. No inflated sales theatre."
      />

      <Section title="What to expect" intro="The goal is a straight answer on fit.">
        <div className="grid-list md:grid-cols-2">
          {[
            "A short walkthrough",
            "Product scope and intended workflow fit",
            "Discussion of your practice context",
            "A direct answer on whether it looks like a fit"
          ].map((item) => (
            <div key={item} className="card">
              <p className="font-semibold">{item}</p>
            </div>
          ))}
        </div>
      </Section>

      <section className="section">
        <div className="container max-w-4xl">
          <p className="eyebrow">Demo request form</p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight">Submit your request and we&apos;ll follow up by email.</h2>
          <p className="mt-4 max-w-2xl text-base leading-8 text-[var(--muted)]">
            Keep it simple. Tell us who you are, what kind of practice you run, and what you most want to see.
          </p>
          <div className="mt-8">
            <DemoForm />
          </div>
        </div>
      </section>
    </>
  );
}
