import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: NextRequest) {
    try {
        const body = await request.json();
        const { name, email, companyType, projectDetails } = body;

        // Validate required fields
        if (!name || !email || !projectDetails) {
            return NextResponse.json(
                { error: 'Name, email, and project details are required' },
                { status: 400 }
            );
        }

        // Create transporter with Hostinger SMTP settings
        const transporter = nodemailer.createTransport({
            host: process.env.SMTP_HOST || 'smtp.hostinger.com',
            port: parseInt(process.env.SMTP_PORT || '465'),
            secure: true,
            auth: {
                user: process.env.SMTP_USER,
                pass: process.env.SMTP_PASSWORD,
            },
        });

        // Email content
        const mailOptions = {
            from: `"The Burujan Blueprint Request" <${process.env.SMTP_USER}>`,
            to: process.env.CONTACT_EMAIL || process.env.SMTP_USER,
            replyTo: email,
            subject: `🔷 New Blueprint Request from ${name}`,
            html: `
                <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background: #1a1a1a; color: #ffffff;">
                    <div style="border-bottom: 2px solid #c9a227; padding-bottom: 20px; margin-bottom: 20px;">
                        <h1 style="color: #c9a227; margin: 0;">🔷 Blueprint Request</h1>
                        <p style="color: #888; margin: 5px 0 0 0;">New project audit request received</p>
                    </div>
                    
                    <div style="background: #252525; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
                        <h2 style="color: #c9a227; margin-top: 0; font-size: 16px;">Client Information</h2>
                        <table style="width: 100%; border-collapse: collapse;">
                            <tr>
                                <td style="padding: 10px 0; color: #888; width: 130px; border-bottom: 1px solid #333;">Name:</td>
                                <td style="padding: 10px 0; color: #fff; border-bottom: 1px solid #333;">${name}</td>
                            </tr>
                            <tr>
                                <td style="padding: 10px 0; color: #888; border-bottom: 1px solid #333;">Email:</td>
                                <td style="padding: 10px 0; color: #fff; border-bottom: 1px solid #333;">
                                    <a href="mailto:${email}" style="color: #c9a227;">${email}</a>
                                </td>
                            </tr>
                            <tr>
                                <td style="padding: 10px 0; color: #888;">Company Type:</td>
                                <td style="padding: 10px 0; color: #fff;">
                                    <span style="background: #c9a227; color: #000; padding: 4px 12px; border-radius: 20px; font-size: 13px; font-weight: 600;">
                                        ${companyType || 'Not specified'}
                                    </span>
                                </td>
                            </tr>
                        </table>
                    </div>
                    
                    <div style="background: #252525; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
                        <h2 style="color: #c9a227; margin-top: 0; font-size: 16px;">Project Vision</h2>
                        <p style="color: #fff; line-height: 1.7; white-space: pre-wrap; margin: 0;">${projectDetails}</p>
                    </div>
                    
                    <div style="background: linear-gradient(135deg, #1a2332 0%, #0d1117 100%); padding: 20px; border-radius: 8px; border: 1px solid #c9a227;">
                        <h3 style="color: #c9a227; margin: 0 0 10px 0; font-size: 14px;">⚡ Next Steps</h3>
                        <ol style="color: #ccc; margin: 0; padding-left: 20px; line-height: 1.8;">
                            <li>Review the project requirements</li>
                            <li>Schedule an audit call with the client</li>
                            <li>Begin the Blueprint process</li>
                        </ol>
                    </div>
                    
                    <div style="margin-top: 20px; padding-top: 20px; border-top: 1px solid #333; text-align: center;">
                        <p style="color: #666; font-size: 12px; margin: 0;">
                            Blueprint Request from theburujan.tech/services
                        </p>
                    </div>
                </div>
            `,
        };

        // Send email
        await transporter.sendMail(mailOptions);

        return NextResponse.json(
            { message: 'Blueprint request submitted successfully!' },
            { status: 200 }
        );
    } catch (error) {
        console.error('Blueprint request error:', error);
        return NextResponse.json(
            { error: 'Failed to submit request. Please try again later.' },
            { status: 500 }
        );
    }
}
