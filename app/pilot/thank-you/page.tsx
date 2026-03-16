import Link from "next/link";
import { Hero } from "@/components/hero";

export default function PilotThankYouPage() {
  return (
    <>
      <Hero
        eyebrow="Application received"
        title="Thank you."
        description="Your pilot application has been received. Pilot participation is selective. We review for workflow fit, seriousness of use case, and ability to provide meaningful feedback. If there appears to be a fit, we&apos;ll follow up by email."
      />
      <section className="section">
        <div className="container">
          <Link href="/" className="btn btn-primary">
            Return to homepage
          </Link>
        </div>
      </section>
    </>
  );
}
