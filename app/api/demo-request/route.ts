import { NextResponse } from "next/server";
import { ZodError } from "zod";
import { demoSchema } from "@/lib/validation";
import { sendDemoEmail } from "@/lib/mail";

export async function POST(request: Request) {
  try {
    const json = await request.json();
    const data = demoSchema.parse(json);
    await sendDemoEmail(data as Record<string, string>);
    return NextResponse.json({ ok: true });
  } catch (error) {
    if (error instanceof ZodError) {
      console.error("Demo request validation error", error.flatten());
      return NextResponse.json(
        { ok: false, message: "Invalid request data" },
        { status: 400 }
      );
    }

    console.error("Demo request server error", error);
    return NextResponse.json(
      { ok: false, message: "Unable to process request right now" },
      { status: 500 }
    );
  }
}
