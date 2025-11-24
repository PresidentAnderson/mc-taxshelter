import { NextRequest, NextResponse } from 'next/server'

// Type definitions for contact form data
interface ContactFormData {
  name: string
  email: string
  phone: string
  subject: string
  message: string
}

// Validation helper
function validateContactForm(data: Record<string, unknown>): { isValid: boolean; errors: string[] } {
  const errors: string[] = []

  // Required field validation
  if (!data.name || typeof data.name !== 'string' || data.name.trim().length === 0) {
    errors.push('Name is required')
  }

  if (!data.email || typeof data.email !== 'string' || data.email.trim().length === 0) {
    errors.push('Email is required')
  } else {
    // Basic email format validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(data.email.trim())) {
      errors.push('Invalid email format')
    }
  }

  if (!data.phone || typeof data.phone !== 'string' || data.phone.trim().length === 0) {
    errors.push('Phone number is required')
  }

  if (!data.subject || typeof data.subject !== 'string' || data.subject.trim().length === 0) {
    errors.push('Subject is required')
  }

  if (!data.message || typeof data.message !== 'string' || data.message.trim().length === 0) {
    errors.push('Message is required')
  }

  return {
    isValid: errors.length === 0,
    errors
  }
}

// POST handler for contact form submissions
export async function POST(request: NextRequest) {
  try {
    // Parse request body
    const body = await request.json()

    // Validate form data
    const validation = validateContactForm(body)
    if (!validation.isValid) {
      return NextResponse.json(
        {
          success: false,
          message: 'Validation failed',
          errors: validation.errors
        },
        { status: 400 }
      )
    }

    // Extract and sanitize form data
    const formData: ContactFormData = {
      name: body.name.trim(),
      email: body.email.trim().toLowerCase(),
      phone: body.phone.trim(),
      subject: body.subject.trim(),
      message: body.message.trim()
    }

    // Log submission (will be replaced with email service later)
    console.log('=== Contact Form Submission ===')
    console.log('Timestamp:', new Date().toISOString())
    console.log('Name:', formData.name)
    console.log('Email:', formData.email)
    console.log('Phone:', formData.phone)
    console.log('Subject:', formData.subject)
    console.log('Message:', formData.message)
    console.log('================================')

    // TODO: Integrate email service (SendGrid, AWS SES, Resend, etc.)
    // await sendEmail({
    //   to: 'info@mctaxshelter.com',
    //   subject: `New Contact Form: ${formData.subject}`,
    //   ...formData
    // })

    // Return success response
    return NextResponse.json(
      {
        success: true,
        message: 'Thank you for contacting us! We will get back to you within 24 hours.',
        data: {
          name: formData.name,
          email: formData.email
        }
      },
      {
        status: 200,
        headers: {
          'Content-Type': 'application/json'
        }
      }
    )

  } catch (error) {
    // Log error for debugging
    console.error('Contact form submission error:', error)

    // Return error response
    return NextResponse.json(
      {
        success: false,
        message: 'An error occurred while processing your request. Please try again later.',
        error: process.env.NODE_ENV === 'development' ? String(error) : undefined
      },
      { status: 500 }
    )
  }
}

// OPTIONS handler for CORS preflight (if needed)
export async function OPTIONS(_request: NextRequest) {
  return NextResponse.json(
    {},
    {
      status: 200,
      headers: {
        'Allow': 'POST, OPTIONS',
        'Access-Control-Allow-Methods': 'POST, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type'
      }
    }
  )
}
