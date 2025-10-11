import { NextRequest, NextResponse } from 'next/server';

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

    const response = await fetch('https://api.plunk.app/v1/send', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.PLUNK_API_KEY}`
      },
      body: JSON.stringify({
        to: 'inquiry@totalmaxhomes.com',
        subject: 'New Inquiry from Website',
        body: emailBody
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