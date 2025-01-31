import IkovalineEmail from "@/emails/FrewinglasEmail";
import { Resend } from "resend";
console.log(process.env.RESEND_API_KEY);
const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const { firstname, email, tel, message } = await request.json();

    if (!firstname || !email || !tel) {
      return new Response(
        JSON.stringify({ error: "Tous les champs sont requis." }),
        { status: 400 }
      );
    }
    const { data, error } = await resend.emails.send({
      from: "contact@ikovaline.com",
      to: ["f.leroux@frewinglas.com"],

      //   to: ["adrienlegeleu@gmail.com"],
      subject: firstname + " vous a envoyé un message",
      react: IkovalineEmail({
        firstName: firstname,
        email,
        tel,
        message,
      }),
    });

    if (error) {
      return Response.json({ error }, { status: 500 });
    }

    return Response.json(data);
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}
