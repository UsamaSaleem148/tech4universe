import { NextResponse } from 'next/server'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY || '')

export async function POST(req: Request) {
  try {
    const body = await req.json()
    const { name, email, message } = body || {}

    if (
      typeof name !== 'string' ||
      typeof email !== 'string' ||
      typeof message !== 'string' ||
      !email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/) 
    ) {
      return NextResponse.json({ success: false, error: 'Invalid input' }, { status: 400 })
    }

    if (message.length > 2000) {
      return NextResponse.json({ success: false, error: 'Message too long' }, { status: 400 })
    }

    const safeName = name.replace(/[<>&'"]/g, '')
    const safeEmail = email.replace(/[<>&'"]/g, '')
    const safeMessage = message.replace(/[<>&'"]/g, '')

    await resend.emails.send({
      from: 'onboarding@resend.dev', 
      to: 'outreach@tech4universe.com', 
      subject: `New contact form submission from ${safeName}`,
      text: `Name: ${safeName}\nEmail: ${safeEmail}\n\nMessage:\n${safeMessage}`,
      replyTo: safeEmail, 
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Email send error:', error)
    return NextResponse.json({ success: false, error: 'Internal Server Error' }, { status: 500 })
  }
}
