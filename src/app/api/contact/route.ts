import { Resend } from "resend";
import { NextRequest, NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  try {
    const { name, email, message } = await req.json();

    // Basic validation
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 }
      );
    }

    await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>", // change after adding your domain
      to: process.env.CONTACT_EMAIL!,
      subject: `New message from ${name}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #f43f5e;">New Contact Form Submission</h2>
          <hr style="border-color: #e4e4e7;" />

          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>

          <hr style="border-color: #e4e4e7;" />

          <p><strong>Message:</strong></p>
          <p style="background: #f4f4f5; padding: 16px; border-radius: 8px; color: #3f3f46;">
            ${message.replace(/\n/g, "<br/>")}
          </p>

          <hr style="border-color: #e4e4e7;" />
          <p style="color: #a1a1aa; font-size: 12px;">
            Sent from your portfolio contact form
          </p>
        </div>
      `,
      // Also send a reply-to so you can reply directly to the sender
      replyTo: email,
    });

    return NextResponse.json(
      { success: true },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { error: "Failed to send message" },
      { status: 500 }
    );
  }
}