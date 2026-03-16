import { z } from "zod";

const optionalText = z.string().trim().max(2000).optional().or(z.literal(""));

export const demoSchema = z.object({
  fullName: z.string().trim().min(2).max(100),
  workEmail: z.string().trim().email().max(200),
  firm: z.string().trim().min(2).max(200),
  role: z.string().trim().min(2).max(100),
  jurisdiction: z.string().trim().min(2).max(100),
  practiceArea: z.string().trim().min(2).max(100),
  teamSize: z.string().trim().min(1).max(50),
  demoFocus: z.string().trim().min(10).max(2000),
  heardAbout: optionalText,
  sourcePage: optionalText
});

export const pilotSchema = z.object({
  fullName: z.string().trim().min(2).max(100),
  workEmail: z.string().trim().email().max(200),
  phone: z.string().trim().min(7).max(50),
  firm: z.string().trim().min(2).max(200),
  role: z.string().trim().min(2).max(100),
  jurisdiction: z.string().trim().min(2).max(100),
  practiceArea: z.string().trim().min(2).max(100),
  teamSize: z.string().trim().min(1).max(50),
  activeFiles: z.string().trim().min(1).max(100),
  disclosureBurden: z.string().trim().min(1).max(50),
  workflowChallenges: z.string().trim().min(20).max(2000),
  interest: z.string().trim().min(20).max(2000),
  structuredFeedback: z.string().trim().min(2).max(10),
  evaluationScope: z.string().trim().min(2).max(50),
  timeline: z.string().trim().min(2).max(50),
  anythingElse: optionalText,
  sourcePage: optionalText
});

export const contactSchema = z.object({
  name: z.string().trim().min(2).max(100),
  email: z.string().trim().email().max(200),
  subject: z.string().trim().min(2).max(200),
  message: z.string().trim().min(10).max(2000),
  sourcePage: optionalText
});

export type DemoInput = z.infer<typeof demoSchema>;
export type PilotInput = z.infer<typeof pilotSchema>;
export type ContactInput = z.infer<typeof contactSchema>;
