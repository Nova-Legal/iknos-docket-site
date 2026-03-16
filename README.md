# Iknos Docket public website

This is a lean, serious public-facing website for Iknos Docket.

## Stack
- Next.js (App Router)
- TypeScript
- Plain CSS utilities in `app/globals.css`
- Resend for form email delivery
- Route handlers for demo, pilot, and contact form submission

## Pages
- `/` — homepage
- `/product` — product overview / how it works
- `/demo` — request a demo
- `/pilot` — apply for pilot
- `/trust` — trust / privacy / security
- `/contact` — contact page
- `/privacy` — privacy policy
- `/terms` — terms of use

## Setup
1. Install dependencies:
   ```bash
   npm install
   ```
2. Copy the environment template:
   ```bash
   cp .env.example .env.local
   ```
3. Set these values in `.env.local`:
   - `CONTACT_TO_EMAIL`
   - `EMAIL_FROM`
   - `RESEND_API_KEY`
4. Start the site locally:
   ```bash
   npm run dev
   ```
5. Open `http://localhost:3000`

## First serious launch checklist
- Set real company inbox in `.env.local`
- Configure sending domain in Resend
- Test all three forms end-to-end
- Deploy to Vercel
- Point domain DNS to Vercel
- Replace placeholder `siteConfig.url`
- Add favicon / og image

## What to tighten next
- Honeypot or Turnstile spam protection
- Analytics
- Submission logging / CRM sync
- Better metadata and OG image
- Real legal-reviewed privacy and terms pages
