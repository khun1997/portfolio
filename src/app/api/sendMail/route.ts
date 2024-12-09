import nodemailer from "nodemailer";

export async function POST(req: Request) {
  const { to, subject, body } = await req.json();
  const { SMTP_EMAIL, SMTP_PASSWORD } = process.env;

  if (!SMTP_EMAIL || !SMTP_PASSWORD) {
    return new Response(
      JSON.stringify({ error: "SMTP credentials are missing" }),
      { status: 500 }
    );
  }

  const transport = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: SMTP_EMAIL,
      pass: SMTP_PASSWORD,
    },
  });

  try {
    await transport.verify();
    await transport.sendMail({
      from: `"No-Reply" <${SMTP_EMAIL}>`,
      to,
      subject,
      html: body,
    });

    return new Response(
      JSON.stringify({ message: "Email sent successfully" }),
      { status: 200 }
    );
  } catch (error) {
    console.error("Error sending email:", error);
    return new Response(JSON.stringify({ error: "Error sending email" }), {
      status: 500,
    });
  }
}
