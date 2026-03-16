"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { TextAreaField, TextField } from "@/components/form-field";

export function ContactForm() {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsSubmitting(true);
    setError("");

    const formData = new FormData(event.currentTarget);
    const payload = Object.fromEntries(formData.entries());

    const response = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload)
    });

    setIsSubmitting(false);

    if (!response.ok) {
      setError("Something went wrong. Please try again or contact the company inbox directly.");
      return;
    }

    router.push("/contact/thank-you");
  }

  return (
    <form onSubmit={onSubmit} className="rounded-3xl border border-[var(--border)] bg-[var(--surface)] p-8">
      <input type="hidden" name="sourcePage" value="/contact" />
      <div className="grid gap-5 md:grid-cols-2">
        <TextField label="Name" name="name" required />
        <TextField label="Email" name="email" type="email" required />
      </div>
      <div className="mt-5 grid gap-5">
        <TextField label="Subject" name="subject" required />
        <TextAreaField label="Message" name="message" required />
      </div>
      {error ? <p className="mt-4 text-sm text-[var(--accent)]">{error}</p> : null}
      <button type="submit" className="btn btn-primary mt-6" disabled={isSubmitting}>
        {isSubmitting ? "Sending..." : "Send Message"}
      </button>
    </form>
  );
}
