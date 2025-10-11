import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const { name, mansion, testimony } = await request.json();

    const emailBody = `
      <h2>New Testimonial Submission</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Mansion:</strong> ${mansion}</p>
      <p><strong>Testimony:</strong> ${testimony.replace(/\n/g, '<br>')}</p>
    `;

    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.RESEND_API_KEY}`
      },
      body: JSON.stringify({
        from: 'testimonials@totalmaxhomes.com',
        to: 'inquiry@totalmaxhomes.com',
        subject: 'New Testimonial from Website',
        html: emailBody
      })
    });

    if (response.ok) {
      return NextResponse.json({ success: true });
    } else {
      return NextResponse.json({ error: 'Failed to send email' }, { status: 500 });
    }
  } catch (error) {
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}