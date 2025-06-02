import { Resend } from "resend";
import type { NextApiRequest, NextApiResponse } from "next";

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") return res.status(405).end();

  try {
    const { email, nombre, mensaje } = req.body;

    if (!email || !nombre || !mensaje) {
      return res.status(400).json({ error: "Missing required fields" });
    }

    const data = await resend.emails.send({
      from: email,
      to: "administrador@elambeergarden.cl",
      replyTo: "" + email,
      subject: "Contacto desde Elam Beer Garden",
      text: `Nombre: ${nombre}\nCorreo: ${email}\nMensaje: ${mensaje}`,
    });

    res.status(200).json({ success: true, data });
  } catch (err) {
    const errorMessage =
      err && typeof err === "object" && "message" in err
        ? (err as { message: string }).message
        : "An unknown error occurred";
    res.status(500).json({ error: errorMessage });
  }
}
