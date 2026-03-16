import Link from "next/link";
import { Hero } from "@/components/hero";

export default function DemoThankYouPage() {
  return (
    <>
      <Hero
        eyebrow="Request received"
        title="Thank you."
        description="Your demo request has been received. We&apos;ll review the information and follow up by email. The goal of the demo is to keep it direct, practical, and relevant to your workflow."
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
