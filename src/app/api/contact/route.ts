import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: NextRequest) {
    try {
        const body = await request.json();
        const { name, company, phone, email, message } = body;

        // Validate required fields
        if (!name || !email || !message) {
            return NextResponse.json(
                { error: 'Name, email, and message are required' },
                { status: 400 }
            );
        }

        // Create transporter with Hostinger SMTP settings
        const transporter = nodemailer.createTransport({
            host: process.env.SMTP_HOST || 'smtp.hostinger.com',
            port: parseInt(process.env.SMTP_PORT || '465'),
            secure: true, // true for 465, false for other ports
            auth: {
                user: process.env.SMTP_USER,
                pass: process.env.SMTP_PASSWORD,
            },
        });

        // Email content
        const mailOptions = {
            from: `"The Burujan Contact Form" <${process.env.SMTP_USER}>`,
            to: process.env.CONTACT_EMAIL || process.env.SMTP_USER,
            replyTo: email,
            subject: `New Contact Form Submission from ${name}`,
            html: `
                <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background: #1a1a1a; color: #ffffff;">
                    <div style="border-bottom: 2px solid #c9a227; padding-bottom: 20px; margin-bottom: 20px;">
                        <h1 style="color: #c9a227; margin: 0;">New Message Received</h1>
                        <p style="color: #888; margin: 5px 0 0 0;">The Burujan Contact Form</p>
                    </div>
                    
                    <div style="background: #252525; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
                        <h2 style="color: #c9a227; margin-top: 0; font-size: 16px;">Contact Details</h2>
                        <table style="width: 100%; border-collapse: collapse;">
                            <tr>
                                <td style="padding: 8px 0; color: #888; width: 120px;">Name:</td>
                                <td style="padding: 8px 0; color: #fff;">${name}</td>
                            </tr>
                            <tr>
                                <td style="padding: 8px 0; color: #888;">Email:</td>
                                <td style="padding: 8px 0; color: #fff;"><a href="mailto:${email}" style="color: #c9a227;">${email}</a></td>
                            </tr>
                            ${phone ? `
                            <tr>
                                <td style="padding: 8px 0; color: #888;">Phone:</td>
                                <td style="padding: 8px 0; color: #fff;">${phone}</td>
                            </tr>
                            ` : ''}
                            ${company ? `
                            <tr>
                                <td style="padding: 8px 0; color: #888;">Company Type:</td>
                                <td style="padding: 8px 0; color: #fff;">${company}</td>
                            </tr>
                            ` : ''}
                        </table>
                    </div>
                    
                    <div style="background: #252525; padding: 20px; border-radius: 8px;">
                        <h2 style="color: #c9a227; margin-top: 0; font-size: 16px;">Message</h2>
                        <p style="color: #fff; line-height: 1.6; white-space: pre-wrap;">${message}</p>
                    </div>
                    
                    <div style="margin-top: 20px; padding-top: 20px; border-top: 1px solid #333; text-align: center;">
                        <p style="color: #666; font-size: 12px; margin: 0;">
                            This message was sent from the contact form at theburujan.tech
                        </p>
                    </div>
                </div>
            `,
        };

        // Send email
        await transporter.sendMail(mailOptions);

        return NextResponse.json(
            { message: 'Message sent successfully!' },
            { status: 200 }
        );
    } catch (error) {
        console.error('Contact form error:', error);
        return NextResponse.json(
            { error: 'Failed to send message. Please try again later.' },
            { status: 500 }
        );
    }
}
