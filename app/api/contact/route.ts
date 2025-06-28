import { type NextRequest, NextResponse } from "next/server"
import sgMail from "@sendgrid/mail"

// Initialize SendGrid
sgMail.setApiKey(process.env.SENDGRID_API_KEY!)

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, phone, service, message } = body

    // Validate required fields
    if (!name || !email || !service || !message) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 })
    }

    // Email content for the business
    const businessEmailContent = `
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>New Contact Form Submission</title>
    <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
        .container { max-width: 600px; margin: 0 auto; padding: 20px; }
        .header { background-color: #ffb900; color: #2d2d2d; padding: 20px; text-align: center; }
        .content { background-color: #f9f9f9; padding: 20px; }
        .field { margin-bottom: 15px; }
        .label { font-weight: bold; color: #2d2d2d; }
        .value { margin-top: 5px; }
        .footer { background-color: #2d2d2d; color: white; padding: 15px; text-align: center; font-size: 12px; }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1>New Contact Form Submission</h1>
            <p>Return Zero Solutions Website</p>
        </div>
        <div class="content">
            <div class="field">
                <div class="label">Name:</div>
                <div class="value">${name}</div>
            </div>
            <div class="field">
                <div class="label">Email:</div>
                <div class="value">${email}</div>
            </div>
            <div class="field">
                <div class="label">Phone:</div>
                <div class="value">${phone || "Not provided"}</div>
            </div>
            <div class="field">
                <div class="label">Service Interested In:</div>
                <div class="value">${service}</div>
            </div>
            <div class="field">
                <div class="label">Message:</div>
                <div class="value" style="white-space: pre-wrap;">${message}</div>
            </div>
        </div>
        <div class="footer">
            <p>This message was sent from the Return Zero Solutions website contact form.</p>
            <p>Timestamp: ${new Date().toLocaleString()}</p>
        </div>
    </div>
</body>
</html>
    `

    // Plain text version
    const businessEmailText = `
New Contact Form Submission - Return Zero Solutions

Name: ${name}
Email: ${email}
Phone: ${phone || "Not provided"}
Service: ${service}

Message:
${message}

---
This message was sent from the Return Zero Solutions website contact form.
Timestamp: ${new Date().toLocaleString()}
    `.trim()

    // Send email to business
    await sgMail.send({
      to: process.env.SENDGRID_FROM_EMAIL!,
      from: process.env.SENDGRID_FROM_EMAIL!,
      subject: `New Contact Form Submission from ${name}`,
      text: businessEmailText,
      html: businessEmailContent,
      replyTo: email,
    })

    // Send confirmation email to customer
    const customerEmailContent = `
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>Thank You for Contacting Return Zero Solutions</title>
    <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
        .container { max-width: 600px; margin: 0 auto; padding: 20px; }
        .header { background-color: #ffb900; color: #2d2d2d; padding: 20px; text-align: center; }
        .content { background-color: #f9f9f9; padding: 20px; }
        .footer { background-color: #2d2d2d; color: white; padding: 15px; text-align: center; }
        .button { background-color: #ffb900; color: #2d2d2d; padding: 12px 24px; text-decoration: none; border-radius: 5px; display: inline-block; font-weight: bold; }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1>Thank You, ${name}!</h1>
            <p>We've received your message</p>
        </div>
        <div class="content">
            <p>Dear ${name},</p>
            <p>Thank you for contacting Return Zero Solutions! We've received your inquiry about <strong>${service}</strong> and will get back to you within 24 hours.</p>
            
            <p><strong>Your Message Summary:</strong></p>
            <p style="background-color: white; padding: 15px; border-left: 4px solid #ffb900; margin: 15px 0;">
                ${message}
            </p>
            
            <p>In the meantime, feel free to:</p>
            <ul>
                <li>Browse our <a href="https://your-domain.com/services" style="color: #ffb900;">services</a></li>
                <li>Check out our <a href="https://your-domain.com/projects" style="color: #ffb900;">past projects</a></li>
                <li>Contact us directly via WhatsApp at +94719089368</li>
            </ul>
            
            <p style="text-align: center; margin: 30px 0;">
                <a href="https://wa.me/94719089368" class="button">Chat on WhatsApp</a>
            </p>
        </div>
        <div class="footer">
            <p><strong>Return Zero Solutions</strong></p>
            <p>Professional Web Development & Digital Services</p>
            <p>Email: returnzerosolutions.info@gmail.com | WhatsApp: +94719089368</p>
        </div>
    </div>
</body>
</html>
    `

    const customerEmailText = `
Dear ${name},

Thank you for contacting Return Zero Solutions! We've received your inquiry about ${service} and will get back to you within 24 hours.

Your Message Summary:
${message}

In the meantime, feel free to:
- Browse our services at https://your-domain.com/services
- Check out our past projects at https://your-domain.com/projects  
- Contact us directly via WhatsApp at +94719089368

Best regards,
Return Zero Solutions Team

Email: returnzerosolutions.info@gmail.com
WhatsApp: +94719089368
    `.trim()

    // Send confirmation email to customer
    await sgMail.send({
      to: email,
      from: process.env.SENDGRID_FROM_EMAIL!,
      subject: "Thank you for contacting Return Zero Solutions!",
      text: customerEmailText,
      html: customerEmailContent,
    })

    return NextResponse.json(
      {
        success: true,
        message:
          "Thank you for your message! We've sent you a confirmation email and will get back to you within 24 hours.",
      },
      { status: 200 },
    )
  } catch (error) {
    console.error("Contact form error:", error)

    // Check if it's a SendGrid error
    if (error && typeof error === "object" && "response" in error) {
      const sgError = error as any
      console.error("SendGrid error details:", sgError.response?.body)
    }

    return NextResponse.json(
      { error: "Failed to send message. Please try again or contact us directly via WhatsApp." },
      { status: 500 },
    )
  }
}
