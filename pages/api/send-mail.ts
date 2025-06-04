import nodemailer from "nodemailer";

import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { email, nombre, mensaje, captcha } = req.body;

  if (!email || !nombre || !mensaje) {
    return res.status(400).json({ error: "Missing required fields" });
  }
  // Configure transport (use your SMTP credentials)
  const transporter = nodemailer.createTransport({
    host: "smtp.zoho.com",
    secure: true,
    port: 465,
    auth: {
      user: process.env.ZOHO_MAIL,
      pass: process.env.APP_PASSWORD_ZOHO, // Use environment variable for security
    },
  });

  try {
    const response = await fetch(
      `https://www.google.com/recaptcha/api/siteverify?secret=${process.env.RECAPTCHA_KEY}&response=${captcha}`,
      { method: "POST" }
    );

    const data = await response.json();

    console.warn("CAPTCH sent: %s", data);

    if (!data.success) {
      return res.status(400).json({ error: "Captcha inválido" });
    }

    const info = await transporter.sendMail({
      from: `"ELAM" <> ${process.env.ZOHO_MAIL}`,
      to: `email, ${process.env.ZOHO_MAIL}`, // recipient email
      replyTo: process.env.ZOHO_MAIL, // reply to the same email
      subject: `Mensaje de ${nombre} desde ELAM Beer Garden`,
      text: mensaje, // or html
    });

    console.warn("Message sent: %s", info);

    return res.status(200).json({ message: "Email sent successfully" });
  } catch (err) {
    console.error("Error sending email:", err);
    return res.status(500).json({ error: "Failed to send email" });
  }
}
