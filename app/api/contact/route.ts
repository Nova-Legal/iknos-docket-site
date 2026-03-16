import { NextResponse } from "next/server";
import { contactSchema } from "@/lib/validation";
import { sendContactEmail } from "@/lib/mail";

export async function POST(request: Request) {
  try {
    const json = await request.json();
    const data = contactSchema.parse(json);
    await sendContactEmail(data as Record<string, string>);
    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Contact form error", error);
    return NextResponse.json({ ok: false, message: "Invalid request" }, { status: 400 });
  }
}
