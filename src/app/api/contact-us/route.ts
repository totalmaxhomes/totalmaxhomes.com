import { NextRequest, NextResponse } from 'next/server';
import Plunk from '@plunk/node';

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();
    const name = formData.get('name') as string;
    const email = formData.get('email') as string;
    const phone = formData.get('phone') as string;
    const message = formData.get('message') as string;

    if (!name || !email || !phone) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    const plunkApiKey = process.env.PLUNK_API_KEY;
    if (!plunkApiKey) {
      return NextResponse.json({ error: 'Plunk API key not configured' }, { status: 500 });
    }

    const plunk = new Plunk(plunkApiKey);

    // Send email to admin
    await plunk.emails.send({
      to: 'inquiry@totalmaxhomes.com', // Replace with actual admin email
      subject: 'New Contact Form Submission',
      body: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Message:</strong> ${message || 'No message provided'}</p>
      `,
    });

    // Send confirmation email to user
    await plunk.emails.send({
      to: email,
      subject: 'Thank you for contacting TotalMax Homes',
      body: `
        <h2>Thank you for reaching out!</h2>
        <p>Dear ${name},</p>
        <p>We have received your message and will get back to you soon.</p>
        <p><strong>Your Details:</strong></p>
        <p>Name: ${name}</p>
        <p>Email: ${email}</p>
        <p>Phone: ${phone}</p>
        <p>Message: ${message || 'No message provided'}</p>
        <p>Best regards,<br>TotalMax Homes Team</p>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error processing contact form:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}