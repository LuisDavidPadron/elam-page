import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { email, nombre, mensaje } = body;

    if (!email || !nombre || !mensaje) {
      return new Response(
        JSON.stringify({ error: "Missing required fields" }),
        { status: 400 }
      );
    }

    const data = await resend.emails.send({
      from: "Elam Contacto <no-reply@elambeergarden.cl>", // Usa un correo válido aquí
      to: "administrador@elambeergarden.cl",
      replyTo: email,
      subject: "Contacto desde Elam Beer Garden",
      text: `Nombre: ${nombre}\nCorreo: ${email}\nMensaje: ${mensaje}`,
    });

    return new Response(JSON.stringify({ success: true, data }), {
      status: 200,
    });
  } catch (err) {
    const errorMessage =
      err && typeof err === "object" && "message" in err
        ? (err as { message: string }).message
        : "An unknown error occurred";
    return new Response(JSON.stringify({ error: errorMessage }), {
      status: 500,
    });
  }
}
