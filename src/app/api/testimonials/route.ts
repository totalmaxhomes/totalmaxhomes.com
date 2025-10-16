import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

export async function POST(request: NextRequest) {
  try {
    const { name, mansion, testimony } = await request.json();

    const emailBody = `
      <h2>New Testimonial Submission</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Mansion:</strong> ${mansion}</p>
      <p><strong>Testimony:</strong> ${testimony.replace(/\n/g, '<br>')}</p>
    `;

    const resend = new Resend(process.env.RESEND_API_KEY);

    await resend.emails.send({
      from: 'admin@totalmaxhomes.com',
      to: ['inquiry@totalmaxhomes.com'],
      subject: 'New Testimonial from Website',
      html: emailBody
    });

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}