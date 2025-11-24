# Frontend Integration Guide for API Routes

## Quick Start

This guide shows you how to update the existing frontend forms to connect with the newly created API routes.

---

## 1. Contact Form Integration

**File to update:** `app/contact/page.tsx`

### Current Implementation:
The form currently just logs to console. Replace the `handleSubmit` function:

```typescript
// BEFORE (current implementation):
const handleSubmit = (e: React.FormEvent) => {
  e.preventDefault()
  console.log('Form submitted:', formData)
}
```

### New Implementation:

```typescript
// AFTER (with API integration):
const [isSubmitting, setIsSubmitting] = useState(false)
const [submitStatus, setSubmitStatus] = useState<{
  type: 'success' | 'error' | null
  message: string
}>({ type: null, message: '' })

const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault()
  setIsSubmitting(true)
  setSubmitStatus({ type: null, message: '' })

  try {
    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData)
    })

    const result = await response.json()

    if (result.success) {
      setSubmitStatus({
        type: 'success',
        message: result.message
      })
      // Reset form on success
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      })
    } else {
      setSubmitStatus({
        type: 'error',
        message: result.message + (result.errors ? '\n' + result.errors.join('\n') : '')
      })
    }
  } catch (error) {
    setSubmitStatus({
      type: 'error',
      message: 'An unexpected error occurred. Please try again or call us at +1-929-310-8968.'
    })
  } finally {
    setIsSubmitting(false)
  }
}
```

### Add Status Message Display:

Add this before the form element:

```typescript
{/* Status Messages */}
{submitStatus.type && (
  <div className={`mb-6 p-4 rounded-lg ${
    submitStatus.type === 'success'
      ? 'bg-green-100 border border-green-400 text-green-800'
      : 'bg-red-100 border border-red-400 text-red-800'
  }`}>
    <p className="whitespace-pre-line">{submitStatus.message}</p>
  </div>
)}
```

### Update Submit Button:

```typescript
<button
  type="submit"
  disabled={isSubmitting}
  className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed flex items-center justify-center gap-2"
>
  <Send className="w-5 h-5" />
  {isSubmitting ? 'Sending...' : 'Send Message'}
</button>
```

---

## 2. Booking Form Integration

**File to update:** `app/booking/page.tsx`

### Current Implementation:
The form has a simulated API call with setTimeout. Update the `handleSubmit` function:

```typescript
// BEFORE (current implementation):
const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault()
  setIsSubmitting(true)

  // Simulate API call
  await new Promise(resolve => setTimeout(resolve, 1500))

  console.log('Booking submitted:', formData)
  setIsSubmitting(false)
  setIsSubmitted(true)
}
```

### New Implementation:

```typescript
// AFTER (with real API integration):
const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault()
  setIsSubmitting(true)

  try {
    const response = await fetch('/api/booking', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData)
    })

    const result = await response.json()

    if (result.success) {
      // Show success screen (already implemented)
      setIsSubmitted(true)

      // Optional: Store booking ID for reference
      console.log('Booking ID:', result.data.bookingId)
    } else {
      // Show error message
      alert(
        result.message +
        (result.errors ? '\n\nErrors:\n' + result.errors.join('\n') : '')
      )
    }
  } catch (error) {
    alert(
      'An unexpected error occurred while processing your booking.\n\n' +
      'Please try again or call us directly at +1-929-310-8968.'
    )
  } finally {
    setIsSubmitting(false)
  }
}
```

### Optional: Add Error State

For better UX, add an error display instead of using alert():

```typescript
// Add to state declarations
const [error, setError] = useState<string>('')

// Update handleSubmit
const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault()
  setIsSubmitting(true)
  setError('')

  try {
    const response = await fetch('/api/booking', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData)
    })

    const result = await response.json()

    if (result.success) {
      setIsSubmitted(true)
    } else {
      setError(result.message + (result.errors ? '\n\nErrors:\n' + result.errors.join('\n') : ''))
    }
  } catch (error) {
    setError('An unexpected error occurred. Please try again or call us at +1-929-310-8968.')
  } finally {
    setIsSubmitting(false)
  }
}

// Add error display before the form
{error && (
  <div className="mb-6 p-4 rounded-lg bg-red-100 border border-red-400 text-red-800">
    <p className="whitespace-pre-line">{error}</p>
  </div>
)}
```

---

## 3. Enhanced Validation (Client-Side)

### Contact Form - Add Email Validation:

```typescript
const validateEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault()

  // Client-side validation
  if (!validateEmail(formData.email)) {
    setSubmitStatus({
      type: 'error',
      message: 'Please enter a valid email address.'
    })
    return
  }

  // ... rest of submit logic
}
```

### Booking Form - Add Date Validation:

```typescript
const validateDate = (dateString: string): boolean => {
  const selectedDate = new Date(dateString)
  const today = new Date()
  today.setHours(0, 0, 0, 0)
  return selectedDate >= today
}

// In step 3, before moving to submit
if (!validateDate(formData.preferredDate)) {
  setError('Please select a date that is today or in the future.')
  return
}
```

---

## 4. Loading States

### Add Loading Spinner Component:

```typescript
const LoadingSpinner = () => (
  <svg
    className="animate-spin h-5 w-5 text-white"
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
  >
    <circle
      className="opacity-25"
      cx="12"
      cy="12"
      r="10"
      stroke="currentColor"
      strokeWidth="4"
    />
    <path
      className="opacity-75"
      fill="currentColor"
      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
    />
  </svg>
)

// Use in submit button
<button
  type="submit"
  disabled={isSubmitting}
  className="..."
>
  {isSubmitting && <LoadingSpinner />}
  {isSubmitting ? 'Submitting...' : 'Submit'}
</button>
```

---

## 5. TypeScript Types (Optional but Recommended)

Create a types file for shared interfaces:

**File:** `app/types/forms.ts`

```typescript
export interface ContactFormData {
  name: string
  email: string
  phone: string
  subject: string
  message: string
}

export interface BookingFormData {
  firstName: string
  lastName: string
  email: string
  phone: string
  serviceType: string
  annualIncome: string
  businessType?: string
  currentTaxSituation?: string
  preferredDate: string
  preferredTime: string
  consultationType: 'phone' | 'video' | 'in-person'
  specificConcerns?: string
  howDidYouHear?: string
}

export interface ApiResponse<T = any> {
  success: boolean
  message: string
  data?: T
  errors?: string[]
}
```

Then import and use:

```typescript
import { ContactFormData, ApiResponse } from '@/app/types/forms'

const [formData, setFormData] = useState<ContactFormData>({
  name: '',
  email: '',
  phone: '',
  subject: '',
  message: ''
})
```

---

## 6. Testing Checklist

After implementing the changes:

### Contact Form Tests:
- [ ] Submit with all valid fields
- [ ] Submit with missing required field (should show error)
- [ ] Submit with invalid email (should show error)
- [ ] Form resets after successful submission
- [ ] Success message displays correctly
- [ ] Error message displays correctly
- [ ] Loading state shows during submission
- [ ] Button is disabled while submitting

### Booking Form Tests:
- [ ] Complete all 3 steps with valid data
- [ ] Submit with missing required field in each step
- [ ] Submit with past date (should show error)
- [ ] Submit with invalid consultation type
- [ ] Success screen shows after submission
- [ ] Error message displays correctly
- [ ] Loading state shows during submission
- [ ] Can't submit while already submitting

### Cross-Browser Tests:
- [ ] Chrome
- [ ] Firefox
- [ ] Safari
- [ ] Edge
- [ ] Mobile Safari (iOS)
- [ ] Mobile Chrome (Android)

---

## 7. Network Error Handling

Add retry logic for network failures:

```typescript
const submitWithRetry = async (
  url: string,
  data: any,
  retries = 3
): Promise<Response> => {
  for (let i = 0; i < retries; i++) {
    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      })
      return response
    } catch (error) {
      if (i === retries - 1) throw error
      // Wait before retry (exponential backoff)
      await new Promise(resolve => setTimeout(resolve, 1000 * Math.pow(2, i)))
    }
  }
  throw new Error('Max retries exceeded')
}

// Use in handleSubmit
const response = await submitWithRetry('/api/contact', formData)
```

---

## 8. Analytics Integration (Optional)

Track form submissions:

```typescript
// Add to successful submission
if (result.success) {
  // Google Analytics
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('event', 'form_submission', {
      form_type: 'contact',
      form_success: true
    })
  }

  // Facebook Pixel
  if (typeof window !== 'undefined' && (window as any).fbq) {
    (window as any).fbq('track', 'Contact')
  }
}
```

---

## 9. Accessibility Improvements

Add ARIA attributes:

```typescript
<form
  onSubmit={handleSubmit}
  aria-label="Contact form"
  aria-busy={isSubmitting}
>
  {/* Form fields */}

  <button
    type="submit"
    disabled={isSubmitting}
    aria-label={isSubmitting ? 'Submitting form...' : 'Submit form'}
  >
    {isSubmitting ? 'Submitting...' : 'Submit'}
  </button>
</form>
```

---

## 10. Complete Example - Contact Form

Here's the complete updated contact form with all improvements:

```typescript
'use client'

import { useState } from 'react'
import { Phone, MapPin, Clock, Send } from '@/components/icons'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<{
    type: 'success' | 'error' | null
    message: string
  }>({ type: null, message: '' })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus({ type: null, message: '' })

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      })

      const result = await response.json()

      if (result.success) {
        setSubmitStatus({
          type: 'success',
          message: result.message
        })
        setFormData({
          name: '',
          email: '',
          phone: '',
          subject: '',
          message: ''
        })
      } else {
        setSubmitStatus({
          type: 'error',
          message: result.message + (result.errors ? '\n' + result.errors.join('\n') : '')
        })
      }
    } catch (error) {
      setSubmitStatus({
        type: 'error',
        message: 'An unexpected error occurred. Please try again or call us at +1-929-310-8968.'
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-4">Contact Us</h1>
            <p className="text-xl text-gray-300">
              Start your journey to significant tax savings today
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information and Form */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* ... existing contact info cards ... */}

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>

              {/* Status Messages */}
              {submitStatus.type && (
                <div className={`mb-6 p-4 rounded-lg ${
                  submitStatus.type === 'success'
                    ? 'bg-green-100 border border-green-400 text-green-800'
                    : 'bg-red-100 border border-red-400 text-red-800'
                }`}>
                  <p className="whitespace-pre-line">{submitStatus.message}</p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                {/* ... existing form fields ... */}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  <Send className="w-5 h-5" />
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            </div>

            {/* ... existing map section ... */}
          </div>
        </div>
      </section>
    </main>
  )
}
```

---

## Common Issues & Solutions

### Issue 1: CORS Errors
**Solution:** The API routes already include OPTIONS handlers. If issues persist, ensure you're not making requests from a different domain.

### Issue 2: 404 Not Found
**Solution:** Ensure the Next.js dev server is running and routes are in the correct location:
- `/app/api/contact/route.ts`
- `/app/api/booking/route.ts`

### Issue 3: JSON Parse Errors
**Solution:** Ensure you're sending proper JSON and setting Content-Type header:
```typescript
headers: {
  'Content-Type': 'application/json',
}
```

### Issue 4: Form Not Resetting
**Solution:** Only reset form state after successful submission:
```typescript
if (result.success) {
  setFormData({ /* reset values */ })
}
```

---

## Next Steps

1. Update both form pages with the new API integration code
2. Test all validation scenarios
3. Test error handling
4. Test on mobile devices
5. Add analytics tracking (optional)
6. Add CAPTCHA protection (recommended)
7. Integrate email service (see API_ROUTES_IMPLEMENTATION.md)

---

*Integration guide created on: November 24, 2025*
