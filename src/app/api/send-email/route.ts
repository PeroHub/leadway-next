import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { render } from "@react-email/render";
import VisaApprovalEmail from "@/components/emails/VisaApprovalEmail";

export async function POST(req: Request) {
  try {
    const { name, passportNumber, email, visaType, country, date, dear } =
      await req.json();

    // Nodemailer Transporter
    const transporter = nodemailer.createTransport({
      service: "gmail",
      secure: true,
      auth: {
        user: process.env.SMTP_EMAIL, // Your email
        pass: process.env.SMTP_PASSWORD, // Your email password or app password
      },
      // host: "mail.legalpathwayimmigrationlawfirm.org",
      // port: 465,
      // secure: true, // true for port 465, false for other ports
      // auth: {
      //   user: "test@legalpathwayimmigrationlawfirm.org",
      //   pass: "WKhkz5T.J:hCXu4",
      // },
    });

    // Generate Email HTML
    const emailHtml = await render(
      VisaApprovalEmail({ name, passportNumber, visaType, country, date, dear })
    );

    // Email Content
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: "Visa Application Update",
      html: emailHtml,
      //   html: `
      //     <h2>Dear ${name},</h2>
      //     <p>Your visa application for <strong>${visaType}</strong> has been reviewed.</p>
      //     <p><strong>Details:</strong></p>
      //     <ul>
      //       <li><strong>Passport Number:</strong> ${passportNumber}</li>
      //       <li><strong>Country:</strong> ${country}</li>
      //       <li><strong>Date:</strong> ${date}</li>
      //     </ul>
      //     <p>Please check your email for further updates.</p>
      //     <p>Best regards,</p>
      //     <p><strong>Legal Pathway Immigration Team</strong></p>
      //   `,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({
      success: true,
      message: "Email sent successfully!",
    });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { success: false, error: "Failed to send email" },
      { status: 500 }
    );
  }
}
