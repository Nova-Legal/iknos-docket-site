import { NextResponse } from "next/server";
import { demoSchema } from "@/lib/validation";
import { sendDemoEmail } from "@/lib/mail";

export async function POST(request: Request) {
  try {
    const json = await request.json();
    const data = demoSchema.parse(json);
    await sendDemoEmail(data as Record<string, string>);
    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Demo request error", error);
    return NextResponse.json({ ok: false, message: "Invalid request" }, { status: 400 });
  }
}
