import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Book Free Tax Consultation | MC Tax Shelter Toronto',
  description: 'Schedule your free 60-minute tax consultation with senior tax strategists. Discover potential savings, get personalized recommendations. Available phone, video, or in-person.',
  keywords: [
    'free tax consultation',
    'book tax appointment',
    'tax planning consultation',
    'tax strategy meeting',
    'IRS tax advisor',
    'CPA consultation',
    'tax optimization appointment',
    'Toronto tax consultation',
    'schedule tax advisor',
    'tax planning meeting',
  ],
  openGraph: {
    title: 'Book Your Free Tax Consultation - Save Thousands on Taxes',
    description: 'Free 60-minute consultation with senior tax strategists. No obligation. Discover your tax-saving opportunities today.',
    url: 'https://mctaxshelter.com/booking',
    siteName: 'MC Tax Shelter',
    type: 'website',
    images: [
      {
        url: '/og-booking.jpg',
        width: 1200,
        height: 630,
        alt: 'Book Free Tax Consultation',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Book Free Tax Consultation - MC Tax Shelter',
    description: '60-minute consultation | Senior tax strategists | No obligation | Phone, video, or in-person',
    images: ['/og-booking.jpg'],
  },
  alternates: {
    canonical: 'https://mctaxshelter.com/booking',
  },
}

export default function BookingLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
