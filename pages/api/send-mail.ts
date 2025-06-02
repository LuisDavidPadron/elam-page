import { Resend } from "resend";
import type { NextApiRequest, NextApiResponse } from "next";

const resend = new Resend(process.env.RESEND_API_KEY);

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

  try {
    const data = await resend.emails.send({
      from: "Elam Contacto <no-reply@elambeergarden.cl>",
      to: "administrador@elambeergarden.cl",
      replyTo: email,
      subject: "Contacto desde Elam Beer Garden",
      text: `Nombre: ${nombre}\nCorreo: ${email}\nMensaje: ${mensaje}`,
    });

    return res.status(200).json({ success: true, data });
  } catch (err) {
    const errorMessage =
      err && typeof err === "object" && "message" in err
        ? err.message
        : "An unknown error occurred";
    return res.status(500).json({ error: errorMessage });
  }
}
