import { NextResponse } from "next/server";
import { pilotSchema } from "@/lib/validation";
import { sendPilotEmail } from "@/lib/mail";

export async function POST(request: Request) {
  try {
    const json = await request.json();
    const data = pilotSchema.parse(json);
    await sendPilotEmail(data as Record<string, string>);
    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Pilot application error", error);
    return NextResponse.json({ ok: false, message: "Invalid request" }, { status: 400 });
  }
}
