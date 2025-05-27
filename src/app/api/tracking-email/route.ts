import { NextResponse } from "next/server";
import { Resend } from "resend";
import VisaStatusEmail from "@/components/emails/VisaStatusEmail";
import { dataStore } from "../../../../lib/data-store";
import React from "react";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const { trackingNumber, emailType, customMessage } = await req.json();

    // Validate required fields
    if (!trackingNumber || !emailType) {
      return NextResponse.json(
        { error: "Missing tracking number or email type" },
        { status: 400 }
      );
    }

    // Get application details
    const application = await dataStore.getApplication(trackingNumber);
    if (!application) {
      return NextResponse.json(
        { error: "Application not found" },
        { status: 404 }
      );
    }

    // Determine email content based on type
    let emailSubject = "";
    const emailData = {
      name: application.applicant.fullName,
      visaType: application.visaDetails.type,
      country: application.applicant.country,
      trackingNumber: application.trackingNumber,
      currentStatus: application.status.current,
      customMessage: customMessage || "",
      dear: "Dear Applicant", // Default salutation
    };

    switch (emailType) {
      case "application_confirmation":
        emailSubject = "Your Visa Application Has Been Received";
        emailData.dear = `Dear ${application.applicant.fullName.split(" ")[0]}`;
        break;

      case "status_update":
        emailSubject = "Your Visa Application Status Update";
        emailData.dear = `Dear ${application.applicant.fullName.split(" ")[0]}`;
        break;

      case "document_request":
        emailSubject = "Additional Documents Required";
        emailData.dear = `Dear ${application.applicant.fullName.split(" ")[0]}`;
        break;

      default:
        emailSubject = "Visa Application Update";
    }

    // Send email via Resend
    const { data, error } = await resend.emails.send({
      from: "Legal Pathway Immigration <attorney@legalpathwayimmigrationlawfirm.org>",
      to: application.applicant.email,
      subject: emailSubject,
      react: React.createElement(VisaStatusEmail, emailData),
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json(
        { error: "Failed to send email" },
        { status: 500 }
      );
    }

    // Record successful email sending
    await dataStore.recordEmail(trackingNumber, emailType);

    return NextResponse.json({
      success: true,
      message: "Email sent successfully",
      emailId: data?.id,
    });
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
