import { NextRequest, NextResponse } from 'next/server';
import Plunk from '@plunk/node';

export async function POST(request: NextRequest) {
  try {
    const { mansion, fullName, email, phone, checkInDate, checkOutDate, guests } = await request.json();

    if (!fullName || !email || !phone) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    const plunkApiKey = process.env.PLUNK_API_KEY;
    if (!plunkApiKey) {
      return NextResponse.json({ error: 'Plunk API key not configured' }, { status: 500 });
    }

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

    const plunk = new Plunk(plunkApiKey);

    await plunk.emails.send({
      to: 'inquiry@totalmaxhomes.com',
      subject: 'New Inquiry from Website',
      body: emailBody
    });

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}