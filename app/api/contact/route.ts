import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

const requiredEnvVars = [
  "SMTP_HOST",
  "SMTP_PORT",
  "SMTP_USER",
  "SMTP_PASS",
  "CONTACT_EMAIL_TO",
];

function getMissingEnvVars() {
  return requiredEnvVars.filter((key) => !process.env[key]);
}

function sanitize(value: unknown) {
  return String(value ?? "").trim();
}

function getErrorMessage(error: unknown) {
  return error instanceof Error ? error.message : "Erreur inconnue";
}

export async function POST(request: Request) {
  try {
    const missingEnvVars = getMissingEnvVars();

    if (missingEnvVars.length > 0) {
      return NextResponse.json(
        { message: `Configuration email manquante: ${missingEnvVars.join(", ")}` },
        { status: 500 }
      );
    }

    const body = await request.json();
    const name = sanitize(body.name);
    const email = sanitize(body.email);
    const subject = sanitize(body.subject);
    const message = sanitize(body.message);

    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { message: "Tous les champs sont obligatoires." },
        { status: 400 }
      );
    }

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: process.env.SMTP_SECURE === "true",
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    await transporter.verify();

    await transporter.sendMail({
      from: `OKAPI TECH Website <${process.env.SMTP_FROM ?? process.env.SMTP_USER}>`,
      to: process.env.CONTACT_EMAIL_TO,
      replyTo: email,
      subject: `Nouveau message - ${subject}`,
      text: `Nom: ${name}\nEmail: ${email}\nObjet: ${subject}\n\nMessage:\n${message}`,
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #111827;">
          <h2 style="color: #1a4f6e;">Nouveau message depuis le site OKAPI TECH</h2>
          <p><strong>Nom:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Objet:</strong> ${subject}</p>
          <hr style="border: none; border-top: 1px solid #e5e7eb; margin: 20px 0;" />
          <p style="white-space: pre-line;">${message}</p>
        </div>
      `,
    });

    return NextResponse.json({ message: "Message envoyé avec succès." });
  } catch (error) {
    const errorMessage = getErrorMessage(error);

    console.error("Contact email error:", errorMessage);

    return NextResponse.json(
      {
        message:
          process.env.NODE_ENV === "development"
            ? `Erreur SMTP: ${errorMessage}`
            : "Impossible d'envoyer le message pour le moment.",
      },
      { status: 500 }
    );
  }
}
