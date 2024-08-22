import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request) {
  try {
    const { selectedService, selectedBudget, name, email, projectDetails } =
      await request.json();

    // Configure the nodemailer transporter with Hostinger SMTP settings
    const transporter = nodemailer.createTransport({
      host: "smtp.hostinger.com",
      port: 465, // or 587 if needed
      secure: true, // true for 465, false for other ports
      auth: {
        user: process.env.NEXT_PUBLIC_EMAIL_USERNAME,
        pass: process.env.NEXT_PUBLIC_EMAIL_PASSWORD,
      },
      tls: {
        rejectUnauthorized: false, // Disable this in production
      },
    });

    // Email options
    const mailOptions = {
      from: '"Your Website" <hello@jeangalant.com>', // Sender address
      to: "hello@jeangalant.com", // Recipient address (your own email)
      subject: `New Service Request from ${name}`, // Subject line
      text: `
        Name: ${name}
        Email: ${email}
        Service: ${selectedService}
        Budget: ${selectedBudget}
        Project Details: ${projectDetails}
      `, // Plain text body
      html: `
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Service:</strong> ${selectedService}</p>
        <p><strong>Budget:</strong> ${selectedBudget}</p>
        <p><strong>Project Details:</strong> ${projectDetails}</p>
      `, // HTML body
    };

    // Send the email
    const info = await transporter.sendMail(mailOptions);

    console.log("Message sent: %s", info.messageId);

    return NextResponse.json({ success: true, messageId: info.messageId });
  } catch (error) {
    console.error("Error sending email: ", error);
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }
}
