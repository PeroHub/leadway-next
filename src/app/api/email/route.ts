import { NextResponse } from "next/server";
import { Resend } from "resend";
import VisaApprovalEmail from "@/components/emails/VisaApprovalEmail";
export async function GET() {
  return NextResponse.json({ messsage: "all working" }, { status: 200 });
}

const resend = new Resend(process.env.RESEND_API_KEY);
export async function POST(req: Request) {
  try {
    const { name, passportNumber, email, visaType, country, date, dear } =
      await req.json();

    await resend.emails.send({
      from: "Acme <onboarding@resend.dev>",
      to: email,
      subject: "Visa Application Update",
      react: VisaApprovalEmail({
        name,
        passportNumber,
        visaType,
        country,
        date,
        dear,
      }),
    });
    return NextResponse.json(
      {
        success: true,
        message: "Email sent successfully!",
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error fetching applications:", error);
    return NextResponse.json(
      { success: false, error: "Failed to fetch applications" },
      { status: 500 }
    );
  }
}
