import nodemailer from "nodemailer";

import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { email, nombre, mensaje } = req.body;

  if (!email || !nombre || !mensaje) {
    return res.status(400).json({ error: "Missing required fields" });
  }

  console.warn("Received email:", email);

  console.warn("ZOHO_MAIL:", process.env.ZOHO_MAIL);
  console.warn("APP_PASSWORD_ZOHO:", process.env.APP_PASSWORD_ZOHO);

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
    const info = await transporter.sendMail({
      from: `"ELAM" <> ${process.env.ZOHO_MAIL}`,
      to: email, // recipient email
      subject: `Mensaje de ${nombre} desde ELAM Beer Garden`,
      text: mensaje, // or html
    });

    return res.status(200).json({ message: "Email sent successfully" });
  } catch (err) {
    console.error("Error sending email:", err);
    return res.status(500).json({ error: "Failed to send email" });
  }
}
