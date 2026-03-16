import Link from "next/link";
import { Hero } from "@/components/hero";

export default function ContactThankYouPage() {
  return (
    <>
      <Hero
        eyebrow="Message received"
        title="Thank you."
        description="Your message has been received. We&apos;ll review it and follow up by email if a response is required."
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
