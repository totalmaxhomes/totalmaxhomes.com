import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

export async function POST(request: NextRequest) {
  try {
    const { mansion, fullName, email, phone, checkInDate, checkOutDate, guests } = await request.json();

    const emailBody = `
      <h2>New Inquiry from TotalMax Homes</h2>
      <p><strong>Mansion:</strong> ${mansion}</p>
      <p><strong>Full Name:</strong> ${fullName}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone}</p>
      <p><strong>Check-in Date:</strong> ${checkInDate}</p>
      <p><strong>Check-out Date:</strong> ${checkOutDate}</p>
      <p><strong>Guests:</strong> ${guests}</p>
    `;

    const resend = new Resend(process.env.RESEND_API_KEY);

    await resend.emails.send({
      from: 'admin@totalmaxhomes.com',
      to: ['inquiry@totalmaxhomes.com'],
      subject: 'New Inquiry from Website',
      html: emailBody.replace(/\n/g, '<br>')
    });

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}