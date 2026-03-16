"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { SelectField, TextAreaField, TextField } from "@/components/form-field";

export function DemoForm() {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsSubmitting(true);
    setError("");

    const formData = new FormData(event.currentTarget);
    const payload = Object.fromEntries(formData.entries());

    const response = await fetch("/api/demo-request", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload)
    });

    setIsSubmitting(false);

    if (!response.ok) {
      setError("Something went wrong. Please try again or contact the company inbox directly.");
      return;
    }

    router.push("/demo/thank-you");
  }

  return (
    <form onSubmit={onSubmit} className="rounded-3xl border border-[var(--border)] bg-[var(--surface)] p-8">
      <input type="hidden" name="sourcePage" value="/demo" />
      <div className="grid gap-5 md:grid-cols-2">
        <TextField label="Full name" name="fullName" required />
        <TextField label="Work email" name="workEmail" type="email" required />
        <TextField label="Firm / organization" name="firm" required />
        <TextField label="Role / title" name="role" required />
        <TextField label="Province / jurisdiction" name="jurisdiction" placeholder="Ontario" required />
        <SelectField label="Primary practice area" name="practiceArea" required>
          <option value="">Select</option>
          <option>Criminal Defence</option>
          <option>Mixed Practice</option>
          <option>Other</option>
        </SelectField>
        <SelectField label="Team size" name="teamSize" required>
          <option value="">Select</option>
          <option>Solo</option>
          <option>2–5</option>
          <option>6–20</option>
          <option>21+</option>
        </SelectField>
        <TextField label="How did you hear about Iknos Docket?" name="heardAbout" />
      </div>
      <div className="mt-5">
        <TextAreaField
          label="What would you like the demo to focus on?"
          name="demoFocus"
          required
          placeholder="Briefly tell us which part of the workflow matters most to you."
        />
      </div>
      {error ? <p className="mt-4 text-sm text-[var(--accent)]">{error}</p> : null}
      <button type="submit" className="btn btn-primary mt-6" disabled={isSubmitting}>
        {isSubmitting ? "Submitting..." : "Request Demo"}
      </button>
    </form>
  );
}
