import { NextResponse } from "next/server";
import { ZodError } from "zod";
import { contactSchema } from "@/lib/validation";
import { sendContactEmail } from "@/lib/mail";

export async function POST(request: Request) {
  try {
    const json = await request.json();
    const data = contactSchema.parse(json);
    await sendContactEmail(data as Record<string, string>);
    return NextResponse.json({ ok: true });
  } catch (error) {
    if (error instanceof ZodError) {
      console.error("Contact form validation error", error.flatten());
      return NextResponse.json(
        { ok: false, message: "Invalid request data" },
        { status: 400 }
      );
    }

    console.error("Contact form server error", error);
    return NextResponse.json(
      { ok: false, message: "Unable to process request right now" },
      { status: 500 }
    );
  }
}
