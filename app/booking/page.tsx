'use client'

import { useState } from 'react'
import { Clock, Phone, Mail, CheckCircle, Shield, Users, DollarSign } from '@/components/icons'
import Link from 'next/link'

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
  businessType: string
  currentTaxSituation: string

  // Scheduling
  preferredDate: string
  preferredTime: string
  consultationType: string

  // Additional Information
  specificConcerns: string
  howDidYouHear: string
}

export default function BookingPage() {
  const [formData, setFormData] = useState<BookingFormData>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    serviceType: '',
    annualIncome: '',
    businessType: '',
    currentTaxSituation: '',
    preferredDate: '',
    preferredTime: '',
    consultationType: 'phone',
    specificConcerns: '',
    howDidYouHear: ''
  })

  const [step, setStep] = useState(1)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500))

    console.log('Booking submitted:', formData)
    setIsSubmitting(false)
    setIsSubmitted(true)
  }

  const nextStep = () => {
    setStep(step + 1)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const prevStep = () => {
    setStep(step - 1)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const services = [
    { value: 'real-estate', label: 'Real Estate Tax Strategies' },
    { value: 'business-structure', label: 'Business Structure Optimization' },
    { value: 'investment', label: 'Investment Tax Planning' },
    { value: 'estate', label: 'Estate & Trust Planning' },
    { value: 'retirement', label: 'Retirement Optimization' },
    { value: 'family-office', label: 'Family Office Services' },
    { value: 'general', label: 'General Tax Consultation' }
  ]

  const timeSlots = [
    '9:00 AM - 10:00 AM',
    '10:00 AM - 11:00 AM',
    '11:00 AM - 12:00 PM',
    '12:00 PM - 1:00 PM',
    '1:00 PM - 2:00 PM',
    '2:00 PM - 3:00 PM',
    '3:00 PM - 4:00 PM',
    '4:00 PM - 5:00 PM',
    '5:00 PM - 6:00 PM'
  ]

  if (isSubmitted) {
    return (
      <main className="min-h-screen bg-gray-50 py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-xl p-8 lg:p-12 text-center">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-12 h-12 text-green-600" />
            </div>
            <h1 className="text-3xl font-bold text-gray-900 mb-4">Consultation Booked!</h1>
            <p className="text-xl text-gray-600 mb-8">
              Thank you, {formData.firstName}! We&apos;ve received your consultation request.
            </p>

            <div className="bg-blue-50 rounded-xl p-6 mb-8 text-left">
              <h2 className="font-semibold text-gray-900 mb-4">What happens next?</h2>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center flex-shrink-0 text-sm font-bold">
                    1
                  </div>
                  <p className="text-gray-700">
                    <strong>Confirmation Email:</strong> Check your inbox for a confirmation email with all the details.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center flex-shrink-0 text-sm font-bold">
                    2
                  </div>
                  <p className="text-gray-700">
                    <strong>Schedule Confirmation:</strong> Our team will call you within 24 hours to confirm your preferred time.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center flex-shrink-0 text-sm font-bold">
                    3
                  </div>
                  <p className="text-gray-700">
                    <strong>Preparation Package:</strong> We&apos;ll send you a brief questionnaire to make the most of your consultation.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center flex-shrink-0 text-sm font-bold">
                    4
                  </div>
                  <p className="text-gray-700">
                    <strong>Your Consultation:</strong> Meet with one of our senior tax strategists to discuss your situation.
                  </p>
                </div>
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              <div className="bg-gray-50 rounded-lg p-4 text-left">
                <div className="flex items-center gap-2 mb-2">
                  <Mail className="w-5 h-5 text-blue-600" />
                  <span className="font-semibold text-gray-900">Email</span>
                </div>
                <p className="text-gray-600">{formData.email}</p>
              </div>
              <div className="bg-gray-50 rounded-lg p-4 text-left">
                <div className="flex items-center gap-2 mb-2">
                  <Phone className="w-5 h-5 text-blue-600" />
                  <span className="font-semibold text-gray-900">Phone</span>
                </div>
                <p className="text-gray-600">{formData.phone}</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/"
                className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
              >
                Return to Home
              </Link>
              <Link
                href="/services"
                className="bg-white text-blue-600 border-2 border-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
              >
                Learn More About Our Services
              </Link>
            </div>
          </div>
        </div>
      </main>
    )
  }

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Book Your Free Consultation</h1>
            <p className="text-xl text-gray-300">
              Discover how much you could save with a personalized tax strategy
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl shadow-lg p-6 lg:p-8">
              {/* Progress Indicator */}
              <div className="mb-8">
                <div className="flex items-center justify-between mb-2">
                  {[1, 2, 3].map((stepNumber) => (
                    <div key={stepNumber} className="flex items-center flex-1">
                      <div
                        className={`w-10 h-10 rounded-full flex items-center justify-center font-bold ${
                          step >= stepNumber
                            ? 'bg-blue-600 text-white'
                            : 'bg-gray-200 text-gray-600'
                        }`}
                      >
                        {stepNumber}
                      </div>
                      {stepNumber < 3 && (
                        <div
                          className={`flex-1 h-1 mx-2 ${
                            step > stepNumber ? 'bg-blue-600' : 'bg-gray-200'
                          }`}
                        />
                      )}
                    </div>
                  ))}
                </div>
                <div className="flex justify-between text-xs text-gray-600">
                  <span>Your Info</span>
                  <span>Service Details</span>
                  <span>Schedule</span>
                </div>
              </div>

              <form onSubmit={handleSubmit}>
                {/* Step 1: Personal Information */}
                {step === 1 && (
                  <div className="space-y-6">
                    <h2 className="text-2xl font-bold text-gray-900 mb-6">Personal Information</h2>

                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">
                          First Name *
                        </label>
                        <input
                          type="text"
                          id="firstName"
                          name="firstName"
                          required
                          value={formData.firstName}
                          onChange={handleChange}
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                        />
                      </div>
                      <div>
                        <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">
                          Last Name *
                        </label>
                        <input
                          type="text"
                          id="lastName"
                          name="lastName"
                          required
                          value={formData.lastName}
                          onChange={handleChange}
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                      />
                    </div>

                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="(555) 123-4567"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                      />
                    </div>

                    <div>
                      <label htmlFor="howDidYouHear" className="block text-sm font-medium text-gray-700 mb-1">
                        How did you hear about us?
                      </label>
                      <select
                        id="howDidYouHear"
                        name="howDidYouHear"
                        value={formData.howDidYouHear}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                      >
                        <option value="">Select an option</option>
                        <option value="google">Google Search</option>
                        <option value="referral">Friend/Colleague Referral</option>
                        <option value="social-media">Social Media</option>
                        <option value="advertisement">Advertisement</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                  </div>
                )}

                {/* Step 2: Service Details */}
                {step === 2 && (
                  <div className="space-y-6">
                    <h2 className="text-2xl font-bold text-gray-900 mb-6">Service Details</h2>

                    <div>
                      <label htmlFor="serviceType" className="block text-sm font-medium text-gray-700 mb-1">
                        What service are you interested in? *
                      </label>
                      <select
                        id="serviceType"
                        name="serviceType"
                        required
                        value={formData.serviceType}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                      >
                        <option value="">Select a service</option>
                        {services.map((service) => (
                          <option key={service.value} value={service.value}>
                            {service.label}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label htmlFor="annualIncome" className="block text-sm font-medium text-gray-700 mb-1">
                        Annual Income Range *
                      </label>
                      <select
                        id="annualIncome"
                        name="annualIncome"
                        required
                        value={formData.annualIncome}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                      >
                        <option value="">Select range</option>
                        <option value="under-100k">Under $100,000</option>
                        <option value="100k-250k">$100,000 - $250,000</option>
                        <option value="250k-500k">$250,000 - $500,000</option>
                        <option value="500k-1m">$500,000 - $1,000,000</option>
                        <option value="1m-5m">$1,000,000 - $5,000,000</option>
                        <option value="over-5m">Over $5,000,000</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="businessType" className="block text-sm font-medium text-gray-700 mb-1">
                        Business Type (if applicable)
                      </label>
                      <select
                        id="businessType"
                        name="businessType"
                        value={formData.businessType}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                      >
                        <option value="">Select business type</option>
                        <option value="sole-proprietor">Sole Proprietor</option>
                        <option value="llc">LLC</option>
                        <option value="s-corp">S-Corporation</option>
                        <option value="c-corp">C-Corporation</option>
                        <option value="partnership">Partnership</option>
                        <option value="real-estate">Real Estate Investor</option>
                        <option value="not-applicable">Not Applicable</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="currentTaxSituation" className="block text-sm font-medium text-gray-700 mb-1">
                        Current Tax Situation
                      </label>
                      <select
                        id="currentTaxSituation"
                        name="currentTaxSituation"
                        value={formData.currentTaxSituation}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                      >
                        <option value="">Select an option</option>
                        <option value="no-cpa">Don&apos;t currently have a CPA</option>
                        <option value="have-cpa">Have a CPA but want second opinion</option>
                        <option value="diy">Do my own taxes</option>
                        <option value="new-business">Just started a business</option>
                        <option value="high-taxes">Paying too much in taxes</option>
                        <option value="audit">Facing an audit</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="specificConcerns" className="block text-sm font-medium text-gray-700 mb-1">
                        Specific Concerns or Questions
                      </label>
                      <textarea
                        id="specificConcerns"
                        name="specificConcerns"
                        rows={4}
                        value={formData.specificConcerns}
                        onChange={handleChange}
                        placeholder="Tell us about your specific tax situation and what you'd like to discuss..."
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                      />
                    </div>
                  </div>
                )}

                {/* Step 3: Schedule */}
                {step === 3 && (
                  <div className="space-y-6">
                    <h2 className="text-2xl font-bold text-gray-900 mb-6">Schedule Your Consultation</h2>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-3">
                        Consultation Type *
                      </label>
                      <div className="grid sm:grid-cols-3 gap-4">
                        {[
                          { value: 'phone', label: 'Phone Call', icon: Phone },
                          { value: 'video', label: 'Video Call', icon: Users },
                          { value: 'in-person', label: 'In Person', icon: Users }
                        ].map((type) => {
                          const Icon = type.icon
                          return (
                            <label
                              key={type.value}
                              className={`border-2 rounded-lg p-4 cursor-pointer transition-all ${
                                formData.consultationType === type.value
                                  ? 'border-blue-600 bg-blue-50'
                                  : 'border-gray-200 hover:border-blue-300'
                              }`}
                            >
                              <input
                                type="radio"
                                name="consultationType"
                                value={type.value}
                                checked={formData.consultationType === type.value}
                                onChange={handleChange}
                                className="sr-only"
                              />
                              <div className="flex flex-col items-center text-center">
                                <Icon className={`w-8 h-8 mb-2 ${
                                  formData.consultationType === type.value ? 'text-blue-600' : 'text-gray-400'
                                }`} />
                                <span className="font-medium">{type.label}</span>
                              </div>
                            </label>
                          )
                        })}
                      </div>
                    </div>

                    <div>
                      <label htmlFor="preferredDate" className="block text-sm font-medium text-gray-700 mb-1">
                        Preferred Date *
                      </label>
                      <input
                        type="date"
                        id="preferredDate"
                        name="preferredDate"
                        required
                        value={formData.preferredDate}
                        onChange={handleChange}
                        min={new Date().toISOString().split('T')[0]}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                      />
                    </div>

                    <div>
                      <label htmlFor="preferredTime" className="block text-sm font-medium text-gray-700 mb-1">
                        Preferred Time (EST) *
                      </label>
                      <select
                        id="preferredTime"
                        name="preferredTime"
                        required
                        value={formData.preferredTime}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                      >
                        <option value="">Select a time</option>
                        {timeSlots.map((slot) => (
                          <option key={slot} value={slot}>
                            {slot}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div className="bg-blue-50 rounded-lg p-4">
                      <div className="flex items-start gap-3">
                        <Clock className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                        <div className="text-sm text-blue-900">
                          <p className="font-medium mb-1">What to Expect</p>
                          <p>
                            Your free consultation will last approximately 45-60 minutes. We&apos;ll review your tax situation,
                            identify savings opportunities, and outline potential strategies. There&apos;s no obligation to proceed.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Navigation Buttons */}
                <div className="flex justify-between mt-8 pt-6 border-t">
                  {step > 1 && (
                    <button
                      type="button"
                      onClick={prevStep}
                      className="px-6 py-2 border-2 border-gray-300 text-gray-700 rounded-lg font-semibold hover:bg-gray-50 transition-colors"
                    >
                      Previous
                    </button>
                  )}

                  {step < 3 ? (
                    <button
                      type="button"
                      onClick={nextStep}
                      className="ml-auto px-6 py-2 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                    >
                      Next Step
                    </button>
                  ) : (
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="ml-auto px-8 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? 'Submitting...' : 'Book Consultation'}
                    </button>
                  )}
                </div>
              </form>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Why Book */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Why Book a Consultation?</h3>
              <div className="space-y-4">
                {[
                  { icon: DollarSign, text: 'Discover potential tax savings' },
                  { icon: Shield, text: '100% free, no obligation' },
                  { icon: Users, text: 'Meet with senior tax strategist' },
                  { icon: CheckCircle, text: 'Get personalized recommendations' }
                ].map((item, index) => {
                  const Icon = item.icon
                  return (
                    <div key={index} className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Icon className="w-5 h-5 text-blue-600" />
                      </div>
                      <span className="text-gray-700">{item.text}</span>
                    </div>
                  )
                })}
              </div>
            </div>

            {/* Contact Info */}
            <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-xl shadow-lg p-6 text-white">
              <h3 className="text-xl font-bold mb-4">Prefer to Talk Now?</h3>
              <p className="mb-4 text-blue-100">
                Our team is available Monday-Friday, 9 AM - 6 PM EST
              </p>
              <a
                href="tel:+19293108968"
                className="flex items-center justify-center gap-2 bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors mb-3"
              >
                <Phone className="w-5 h-5" />
                +1-929-310-8968
              </a>
              <a
                href="mailto:info@mctaxshelter.com"
                className="flex items-center justify-center gap-2 bg-blue-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-400 transition-colors"
              >
                <Mail className="w-5 h-5" />
                Email Us
              </a>
            </div>

            {/* Testimonial */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="flex gap-1 mb-3">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                    <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-700 italic mb-3">
                &quot;MC Tax Shelter saved me over $45,000 in the first year alone. The consultation was thorough and they explained everything in terms I could understand.&quot;
              </p>
              <p className="font-semibold text-gray-900">— Robert Chen</p>
              <p className="text-sm text-gray-600">Real Estate Investor</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
