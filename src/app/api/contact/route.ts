import { Client } from 'postmark';
import { NextRequest } from 'next/server';

const client = new Client(process.env.POSTMARK_SERVER_TOKEN);

interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

export async function POST(request: NextRequest) {
  try {
    const body: ContactFormData = await request.json();
    const { name, email, message } = body;

    // Basic validation
    if (!name || !email || !message) {
      return Response.json(
        { error: 'All fields are required' },
        { status: 400 },
      );
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return Response.json({ error: 'Invalid email format' }, { status: 400 });
    }

    // Send email via Postmark
    const result = await client.sendEmail({
      From: 'support@productised.ai',
      To: 'support@productised.ai',
      Subject: `New Contact Form Submission from ${name}`,
      HtmlBody: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: #f8f9fa; padding: 30px; border-radius: 8px;">
            <h2 style="color: #333; margin-bottom: 20px;">New Contact Form Submission</h2>
            
            <div style="background: white; padding: 25px; border-radius: 6px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
              <div style="margin-bottom: 15px;">
                <strong style="color: #555;">Name:</strong>
                <span style="margin-left: 10px; color: #333;">${name}</span>
              </div>
              
              <div style="margin-bottom: 15px;">
                <strong style="color: #555;">Email:</strong>
                <span style="margin-left: 10px; color: #333;">${email}</span>
              </div>
              
              <div style="margin-bottom: 15px;">
                <strong style="color: #555;">Message:</strong>
              </div>
              
              <div style="background: #f8f9fa; padding: 15px; border-radius: 4px; border-left: 4px solid #007bff;">
                ${message.replace(/\n/g, '<br>')}
              </div>
            </div>
            
            <div style="margin-top: 20px; padding-top: 20px; border-top: 1px solid #e9ecef; color: #6c757d; font-size: 14px;">
              <p>This email was sent from the contact form on productised.ai</p>
            </div>
          </div>
        </div>
      `,
      TextBody: `
        New Contact Form Submission
        
        Name: ${name}
        Email: ${email}
        
        Message:
        ${message}
        
        ---
        This email was sent from the contact form on productised.ai
      `,
      ReplyTo: email,
    });

    return Response.json({
      success: true,
      message: 'Email sent successfully',
      messageId: result.MessageID,
    });
  } catch (error) {
    console.error('Postmark error:', error);

    // Handle specific Postmark errors with proper typing
    if (error instanceof Error && 'code' in error && error.code === 422) {
      return Response.json({ error: 'Invalid email format' }, { status: 400 });
    }

    return Response.json({ error: 'Failed to send email' }, { status: 500 });
  }
}
