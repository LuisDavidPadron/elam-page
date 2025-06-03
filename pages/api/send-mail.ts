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

  // Configure transport (use your SMTP credentials)
  const transporter = nodemailer.createTransport({
    host: "smtp.zoho.com",
    secure: true,
    port: 465,
    auth: {
      user: "administrador@elambeergarden.cl",
      pass: "nodemailer",
    },
  });

  try {
    const info = await transporter.sendMail({
      from: '"Your App" <administrador@emlambeergarden.cl>',
      to: email, // recipient email
      replyTo: "administrador@elambeergarden.cl",
      subject: `Mensaje de ${nombre} desde el Am Beer Garden`,
      text: mensaje, // or html
    });

    return res.status(200).json({ message: "Email sent successfully", info });
  } catch (err) {
    console.error("Error sending email:", err);
    return res.status(500).json({ error: "Failed to send email" });
  }
}
