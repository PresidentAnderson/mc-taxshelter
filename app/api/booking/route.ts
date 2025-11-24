import { NextRequest, NextResponse } from 'next/server'

// Type definitions for booking form data
interface BookingFormData {
  // Personal Information
  firstName: string
  lastName: string
  email: string
  phone: string

  // Service Selection
  serviceType: string

  // Financial Information
  annualIncome: string
  businessType?: string
  currentTaxSituation?: string

  // Scheduling
  preferredDate: string
  preferredTime: string
  consultationType: string

  // Additional Information
  specificConcerns?: string
  howDidYouHear?: string
}

// Validation helper
function validateBookingForm(data: any): { isValid: boolean; errors: string[] } {
  const errors: string[] = []

  // Personal Information - Required fields
  if (!data.firstName || typeof data.firstName !== 'string' || data.firstName.trim().length === 0) {
    errors.push('First name is required')
  }

  if (!data.lastName || typeof data.lastName !== 'string' || data.lastName.trim().length === 0) {
    errors.push('Last name is required')
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

  // Service Details - Required fields
  if (!data.serviceType || typeof data.serviceType !== 'string' || data.serviceType.trim().length === 0) {
    errors.push('Service type is required')
  }

  if (!data.annualIncome || typeof data.annualIncome !== 'string' || data.annualIncome.trim().length === 0) {
    errors.push('Annual income range is required')
  }

  // Scheduling - Required fields
  if (!data.preferredDate || typeof data.preferredDate !== 'string' || data.preferredDate.trim().length === 0) {
    errors.push('Preferred date is required')
  } else {
    // Validate date format and ensure it's in the future
    const dateRegex = /^\d{4}-\d{2}-\d{2}$/
    if (!dateRegex.test(data.preferredDate)) {
      errors.push('Invalid date format')
    } else {
      const selectedDate = new Date(data.preferredDate)
      const today = new Date()
      today.setHours(0, 0, 0, 0)

      if (selectedDate < today) {
        errors.push('Preferred date must be today or in the future')
      }
    }
  }

  if (!data.preferredTime || typeof data.preferredTime !== 'string' || data.preferredTime.trim().length === 0) {
    errors.push('Preferred time is required')
  }

  if (!data.consultationType || typeof data.consultationType !== 'string' || data.consultationType.trim().length === 0) {
    errors.push('Consultation type is required')
  } else {
    const validTypes = ['phone', 'video', 'in-person']
    if (!validTypes.includes(data.consultationType)) {
      errors.push('Invalid consultation type')
    }
  }

  return {
    isValid: errors.length === 0,
    errors
  }
}

// POST handler for booking form submissions
export async function POST(request: NextRequest) {
  try {
    // Parse request body
    const body = await request.json()

    // Validate form data
    const validation = validateBookingForm(body)
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
    const formData: BookingFormData = {
      // Personal Information
      firstName: body.firstName.trim(),
      lastName: body.lastName.trim(),
      email: body.email.trim().toLowerCase(),
      phone: body.phone.trim(),

      // Service Selection
      serviceType: body.serviceType.trim(),

      // Financial Information
      annualIncome: body.annualIncome.trim(),
      businessType: body.businessType?.trim() || undefined,
      currentTaxSituation: body.currentTaxSituation?.trim() || undefined,

      // Scheduling
      preferredDate: body.preferredDate.trim(),
      preferredTime: body.preferredTime.trim(),
      consultationType: body.consultationType.trim(),

      // Additional Information
      specificConcerns: body.specificConcerns?.trim() || undefined,
      howDidYouHear: body.howDidYouHear?.trim() || undefined
    }

    // Log submission (will be replaced with email service and database storage later)
    console.log('=== Consultation Booking Submission ===')
    console.log('Timestamp:', new Date().toISOString())
    console.log('\nPersonal Information:')
    console.log('Name:', `${formData.firstName} ${formData.lastName}`)
    console.log('Email:', formData.email)
    console.log('Phone:', formData.phone)
    console.log('\nService Details:')
    console.log('Service Type:', formData.serviceType)
    console.log('Annual Income:', formData.annualIncome)
    console.log('Business Type:', formData.businessType || 'N/A')
    console.log('Current Tax Situation:', formData.currentTaxSituation || 'N/A')
    console.log('\nScheduling:')
    console.log('Preferred Date:', formData.preferredDate)
    console.log('Preferred Time:', formData.preferredTime)
    console.log('Consultation Type:', formData.consultationType)
    console.log('\nAdditional Information:')
    console.log('Specific Concerns:', formData.specificConcerns || 'None provided')
    console.log('How Did You Hear:', formData.howDidYouHear || 'Not specified')
    console.log('=======================================')

    // TODO: Integrate with calendar/scheduling system
    // TODO: Send confirmation email to client
    // TODO: Send notification email to staff
    // TODO: Store booking in database

    // Example:
    // await sendConfirmationEmail({
    //   to: formData.email,
    //   name: `${formData.firstName} ${formData.lastName}`,
    //   date: formData.preferredDate,
    //   time: formData.preferredTime
    // })
    //
    // await sendStaffNotification({
    //   to: 'bookings@mctaxshelter.com',
    //   booking: formData
    // })
    //
    // await database.bookings.create({ data: formData })

    // Return success response
    return NextResponse.json(
      {
        success: true,
        message: 'Your consultation has been booked successfully! We will contact you within 24 hours to confirm your appointment.',
        data: {
          bookingId: `BOOK-${Date.now()}`, // Temporary booking ID
          name: `${formData.firstName} ${formData.lastName}`,
          email: formData.email,
          date: formData.preferredDate,
          time: formData.preferredTime,
          consultationType: formData.consultationType
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
    console.error('Booking form submission error:', error)

    // Return error response
    return NextResponse.json(
      {
        success: false,
        message: 'An error occurred while processing your booking. Please try again later or call us directly at +1-929-310-8968.',
        error: process.env.NODE_ENV === 'development' ? String(error) : undefined
      },
      { status: 500 }
    )
  }
}

// OPTIONS handler for CORS preflight (if needed)
export async function OPTIONS(request: NextRequest) {
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
