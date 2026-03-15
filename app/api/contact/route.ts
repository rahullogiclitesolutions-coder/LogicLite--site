import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { db } from "@/lib/db";

export async function POST(req: Request) {
  try {

    const body = await req.json();

    const { name, email, phone, company, service, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { message: "Missing required fields" },
        { status: 400 }
      );
    }

    // 1️⃣ Save to database
    await db.execute(
      "INSERT INTO contacts (name,email,phone,company,service,message) VALUES (?,?,?,?,?,?)",
      [name, email, phone || "", company || "", service || "", message]
    );

    // 2️⃣ Send email notification
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      subject: `New Contact Form: ${service || "General"}`,
      text: `
Name: ${name}
Email: ${email}
Phone: ${phone}
Company: ${company}
Service: ${service}

Message:
${message}
      `,
    });

    return NextResponse.json({ message: "Message saved and email sent" });

  } catch (error) {
    console.error(error);

    return NextResponse.json(
      { message: "Server error" },
      { status: 500 }
    );
  }
}