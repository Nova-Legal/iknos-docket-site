"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { SelectField, TextAreaField, TextField } from "@/components/form-field";

export function PilotForm() {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsSubmitting(true);
    setError("");

    const formData = new FormData(event.currentTarget);
    const payload = Object.fromEntries(formData.entries());

    const response = await fetch("/api/pilot-application", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload)
    });

    setIsSubmitting(false);

    if (!response.ok) {
      setError("Something went wrong. Please try again or contact the company inbox directly.");
      return;
    }

    router.push("/pilot/thank-you");
  }

  return (
    <form onSubmit={onSubmit} className="rounded-3xl border border-[var(--border)] bg-[var(--surface)] p-8">
      <input type="hidden" name="sourcePage" value="/pilot" />
      <div className="grid gap-5 md:grid-cols-2">
        <TextField label="Full name" name="fullName" required />
        <TextField label="Work email" name="workEmail" type="email" required />
        <TextField label="Phone number" name="phone" required />
        <TextField label="Firm / organization" name="firm" required />
        <TextField label="Role / title" name="role" required />
        <TextField label="Province / jurisdiction" name="jurisdiction" placeholder="Ontario" required />
        <TextField label="Practice area" name="practiceArea" value="Criminal Defence" readOnly required />
        <SelectField label="Team size" name="teamSize" required>
          <option value="">Select</option>
          <option>Solo</option>
          <option>2–5</option>
          <option>6–20</option>
          <option>21+</option>
        </SelectField>
        <TextField label="Approximate active criminal files" name="activeFiles" required />
        <SelectField label="Typical disclosure burden" name="disclosureBurden" required>
          <option value="">Select</option>
          <option>Light</option>
          <option>Moderate</option>
          <option>Heavy</option>
          <option>Very Heavy</option>
        </SelectField>
        <SelectField label="Structured feedback during pilot" name="structuredFeedback" required>
          <option value="">Select</option>
          <option>Yes</option>
          <option>No</option>
        </SelectField>
        <SelectField label="Evaluating for" name="evaluationScope" required>
          <option value="">Select</option>
          <option>Self</option>
          <option>Firm</option>
          <option>Both</option>
        </SelectField>
        <SelectField label="Desired timeline" name="timeline" required>
          <option value="">Select</option>
          <option>ASAP</option>
          <option>This month</option>
          <option>This quarter</option>
          <option>Exploring only</option>
        </SelectField>
      </div>
      <div className="mt-5 grid gap-5">
        <TextAreaField
          label="Current workflow challenges"
          name="workflowChallenges"
          required
          placeholder="Describe the operational friction you want to reduce."
        />
        <TextAreaField
          label="What interests you about Iknos Docket?"
          name="interest"
          required
          placeholder="Tell us why you are looking at the product now."
        />
        <TextAreaField label="Anything else we should know?" name="anythingElse" />
      </div>
      {error ? <p className="mt-4 text-sm text-[var(--accent)]">{error}</p> : null}
      <button type="submit" className="btn btn-primary mt-6" disabled={isSubmitting}>
        {isSubmitting ? "Submitting..." : "Submit Pilot Application"}
      </button>
    </form>
  );
}
