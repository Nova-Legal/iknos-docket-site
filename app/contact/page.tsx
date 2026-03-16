import { Hero } from "@/components/hero";
import { ContactForm } from "@/components/contact-form";

export default function ContactPage() {
  return (
    <>
      <Hero
        eyebrow="Contact"
        title="Get in touch"
        description="For demo requests, pilot applications, or general business inquiries, contact Iknos Docket here."
      />
      <section className="section">
        <div className="container grid gap-10 lg:grid-cols-[0.9fr_1.3fr]">
          <div>
            <p className="eyebrow">Contact options</p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight">Direct and professional.</h2>
            <div className="mt-6 space-y-6 text-base leading-8 text-[var(--text)]">
              <p><strong>General inquiries</strong><br />Use the contact form or your company inbox.</p>
              <p><strong>Demo requests</strong><br />For a product walkthrough, the dedicated demo page is the better route.</p>
              <p><strong>Pilot applications</strong><br />For early evaluation and structured feedback participation, use the pilot page.</p>
              <p className="text-[var(--muted)]">We will respond as promptly as practical.</p>
            </div>
          </div>
          <ContactForm />
        </div>
      </section>
    </>
  );
}
