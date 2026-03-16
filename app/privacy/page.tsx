import { Hero } from "@/components/hero";
import { Section } from "@/components/section";

export default function PrivacyPage() {
  return (
    <>
      <Hero
        eyebrow="Privacy Policy"
        title="Privacy policy"
        description="This first version covers public-site inquiries and basic contact handling. Tight, honest, and usable beats legal wallpaper."
      />
      <Section title="What we collect" intro="Only what is needed for inquiries.">
        <p>We collect the information you submit through public forms, such as your name, work email, organization, role, message content, and other details relevant to demo or pilot requests.</p>
      </Section>
      <Section title="Why we collect it" intro="The purpose is narrow.">
        <p>We use that information to review inquiries, respond to demo requests, assess pilot applications, communicate about the product, and maintain basic business records related to those inquiries.</p>
      </Section>
      <Section title="Access and handling" intro="Not everyone needs access.">
        <p>Access to inquiry information is limited internally to people handling business communication and product evaluation. We do not collect more through the public site than is reasonably needed for those purposes.</p>
      </Section>
      <Section title="Contact" intro="Privacy questions can be directed through the contact page.">
        <p>If you have a question about how inquiry information is handled, use the contact page and include “Privacy” in the subject line.</p>
      </Section>
    </>
  );
}
