import { Resend } from "resend";

const resendApiKey = process.env.RESEND_API_KEY;
const to = process.env.CONTACT_TO_EMAIL;
const from = process.env.EMAIL_FROM;

function assertMailConfig() {
  if (!resendApiKey || !to || !from) {
    throw new Error(
      "Missing email configuration. Set RESEND_API_KEY, CONTACT_TO_EMAIL, and EMAIL_FROM in your environment."
    );
  }
}

function formatRows(entries: Array<[string, string | undefined]>) {
  return entries
    .filter(([, value]) => value && value.trim().length > 0)
    .map(([label, value]) => `<p><strong>${label}:</strong><br/>${value}</p>`)
    .join("\n");
}

export async function sendDemoEmail(fields: Record<string, string>) {
  assertMailConfig();
  const resend = new Resend(resendApiKey);
  const subject = `[Demo Request] ${fields.fullName} — ${fields.firm}`;
  const html = `
    <h2>Iknos Docket Demo Request</h2>
    ${formatRows([
      ["Full name", fields.fullName],
      ["Work email", fields.workEmail],
      ["Firm / organization", fields.firm],
      ["Role / title", fields.role],
      ["Province / jurisdiction", fields.jurisdiction],
      ["Practice area", fields.practiceArea],
      ["Team size", fields.teamSize],
      ["Demo focus", fields.demoFocus],
      ["How they heard about Iknos Docket", fields.heardAbout],
      ["Source page", fields.sourcePage]
    ])}
  `;

  await resend.emails.send({ from: from!, to: to!, replyTo: fields.workEmail, subject, html });
}

export async function sendPilotEmail(fields: Record<string, string>) {
  assertMailConfig();
  const resend = new Resend(resendApiKey);
  const subject = `[Pilot Application] ${fields.fullName} — ${fields.firm}`;
  const html = `
    <h2>Iknos Docket Pilot Application</h2>
    ${formatRows([
      ["Full name", fields.fullName],
      ["Work email", fields.workEmail],
      ["Phone", fields.phone],
      ["Firm / organization", fields.firm],
      ["Role / title", fields.role],
      ["Province / jurisdiction", fields.jurisdiction],
      ["Practice area", fields.practiceArea],
      ["Team size", fields.teamSize],
      ["Approximate active criminal files", fields.activeFiles],
      ["Typical disclosure burden", fields.disclosureBurden],
      ["Current workflow challenges", fields.workflowChallenges],
      ["What interests them about Iknos Docket", fields.interest],
      ["Willing to provide structured feedback", fields.structuredFeedback],
      ["Evaluating for self or firm", fields.evaluationScope],
      ["Desired timeline", fields.timeline],
      ["Anything else", fields.anythingElse],
      ["Source page", fields.sourcePage]
    ])}
  `;

  await resend.emails.send({ from: from!, to: to!, replyTo: fields.workEmail, subject, html });
}

export async function sendContactEmail(fields: Record<string, string>) {
  assertMailConfig();
  const resend = new Resend(resendApiKey);
  const subject = `[Contact] ${fields.subject}`;
  const html = `
    <h2>Iknos Docket Contact Inquiry</h2>
    ${formatRows([
      ["Name", fields.name],
      ["Email", fields.email],
      ["Subject", fields.subject],
      ["Message", fields.message],
      ["Source page", fields.sourcePage]
    ])}
  `;

  await resend.emails.send({ from: from!, to: to!, replyTo: fields.email, subject, html });
}
