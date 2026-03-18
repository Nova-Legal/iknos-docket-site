import { NextResponse } from "next/server";
import { ZodError } from "zod";
import { pilotSchema } from "@/lib/validation";
import { sendPilotEmail } from "@/lib/mail";

export async function POST(request: Request) {
  try {
    const json = await request.json();
    const data = pilotSchema.parse(json);
    await sendPilotEmail(data as Record<string, string>);
    return NextResponse.json({ ok: true });
  } catch (error) {
    if (error instanceof ZodError) {
      console.error("Pilot application validation error", error.flatten());
      return NextResponse.json(
        { ok: false, message: "Invalid request data" },
        { status: 400 }
      );
    }

    console.error("Pilot application server error", error);
    return NextResponse.json(
      { ok: false, message: "Unable to process request right now" },
      { status: 500 }
    );
  }
}
