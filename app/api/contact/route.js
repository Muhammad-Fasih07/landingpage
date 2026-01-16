export async function POST(request) {
  try {
    const body = await request.json()
    const { name, email, subject, message } = body

    // Basic validation
    if (!name || !email || !subject || !message) {
      return Response.json(
        { error: 'All fields are required' },
        { status: 400 }
      )
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return Response.json(
        { error: 'Invalid email address' },
        { status: 400 }
      )
    }

    // Your email address
    const recipientEmail = 'fasihshaukat642@gmail.com'
    
    // Format email message
    const emailSubject = `Portfolio Contact: ${subject}`
    const emailHtml = `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8">
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background-color: #0a192f; color: #64ffda; padding: 20px; border-radius: 5px 5px 0 0; }
            .content { background-color: #f4f4f4; padding: 20px; border-radius: 0 0 5px 5px; }
            .field { margin-bottom: 15px; }
            .label { font-weight: bold; color: #0a192f; }
            .value { color: #555; margin-top: 5px; }
            .message-box { background-color: white; padding: 15px; border-left: 4px solid #64ffda; margin-top: 10px; }
            .footer { margin-top: 20px; font-size: 12px; color: #777; text-align: center; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h2>📧 New Contact Form Message</h2>
            </div>
            <div class="content">
              <div class="field">
                <div class="label">👤 Name:</div>
                <div class="value">${name}</div>
              </div>
              <div class="field">
                <div class="label">📧 Email:</div>
                <div class="value"><a href="mailto:${email}">${email}</a></div>
              </div>
              <div class="field">
                <div class="label">📌 Subject:</div>
                <div class="value">${subject}</div>
              </div>
              <div class="field">
                <div class="label">💬 Message:</div>
                <div class="message-box">${message.replace(/\n/g, '<br>')}</div>
              </div>
              <div class="field">
                <div class="label">🕐 Time:</div>
                <div class="value">${new Date().toLocaleString('en-US', { 
                  timeZone: 'Asia/Karachi',
                  dateStyle: 'full',
                  timeStyle: 'short'
                })}</div>
              </div>
            </div>
            <div class="footer">
              <p>This email was sent from your portfolio contact form.</p>
            </div>
          </div>
        </body>
      </html>
    `
    
    const emailText = `
New Contact Form Message

Name: ${name}
Email: ${email}
Subject: ${subject}

Message:
${message}

Time: ${new Date().toLocaleString('en-US', { 
  timeZone: 'Asia/Karachi',
  dateStyle: 'full',
  timeStyle: 'short'
})}
    `

    // Log the submission
    console.log('📧 Contact Form Submission:', {
      name,
      email,
      subject,
      message,
      timestamp: new Date().toISOString(),
    })

    // Send email using Resend (if configured and installed)
    // For now, we'll just log the email details
    // To enable email sending, install resend: npm install resend
    // Then set RESEND_API_KEY in your .env.local file
    
    console.log('📧 Contact Form Submission - Email Details:')
    console.log('   To:', recipientEmail)
    console.log('   Subject:', emailSubject)
    console.log('   From:', email)
    console.log('   Name:', name)
    console.log('   Message:', message.substring(0, 100) + (message.length > 100 ? '...' : ''))
    
    // Optional: Uncomment and configure Resend for actual email sending
    /*
    if (process.env.RESEND_API_KEY) {
      try {
        const { Resend } = await import('resend')
        const resend = new Resend(process.env.RESEND_API_KEY)
        
        await resend.emails.send({
          from: process.env.RESEND_FROM_EMAIL || 'onboarding@resend.dev',
          to: recipientEmail,
          replyTo: email,
          subject: emailSubject,
          html: emailHtml,
          text: emailText,
        })

        console.log('✅ Email sent successfully via Resend')
      } catch (emailError) {
        console.error('❌ Error sending email:', emailError.message)
      }
    }
    */

    // Return success response
    return Response.json(
      { 
        message: 'Contact form submitted successfully. I\'ll get back to you soon!'
      },
      { status: 200 }
    )
  } catch (error) {
    console.error('❌ Error processing contact form:', error)
    return Response.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
