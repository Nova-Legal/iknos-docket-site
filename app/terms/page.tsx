import { Hero } from "@/components/hero";
import { Section } from "@/components/section";

export default function TermsPage() {
  return (
    <>
      <Hero
        eyebrow="Terms of Use"
        title="Terms of use"
        description="These terms govern use of the public website. They are not a substitute for fuller commercial terms later."
      />
      <Section title="Informational website" intro="This public site provides information about Iknos Docket.">
        <p>Nothing on this website is legal advice, and use of the website does not create a solicitor-client relationship, lawyer-client relationship, or any professional advisory relationship.</p>
      </Section>
      <Section title="No product commitment through site use" intro="A form submission is not a contract.">
        <p>Submitting a demo request, pilot application, or contact form does not guarantee acceptance, access, or availability of any product, pilot, or service.</p>
      </Section>
      <Section title="Content and use" intro="Use the site lawfully and reasonably.">
        <p>Site content belongs to Iknos Docket or its licensors unless otherwise stated. You may not misuse the website, interfere with its operation, or use it in a way that is unlawful or harmful.</p>
      </Section>
      <Section title="Contact" intro="Questions can be directed through the contact page.">
        <p>For questions about these terms, use the contact page and include “Terms” in the subject line.</p>
      </Section>
    </>
  );
}
