import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact MC Tax Shelter Toronto | +1-929-310-8968',
  description: 'Contact MC Tax Shelter in Toronto. Call +1-929-310-8968 | Email info@mctaxshelter.com | 40 Alexandre St, Toronto M4Y 1B5. Mon-Fri 9AM-6PM EST.',
  keywords: [
    'contact MC Tax Shelter',
    'tax consultant Toronto',
    'tax advisor contact',
    'MC Tax Shelter phone number',
    'Toronto tax services',
    'tax help Toronto',
    'Alexandre Street Toronto',
    'Toronto CPA office',
    'tax advisor near me',
  ],
  openGraph: {
    title: 'Contact MC Tax Shelter - Toronto Tax Optimization Experts',
    description: 'Get in touch: +1-929-310-8968 | info@mctaxshelter.com | 40 Alexandre St, Toronto. Mon-Fri 9AM-6PM EST. Start saving on taxes today.',
    url: 'https://mctaxshelter.com/contact',
    siteName: 'MC Tax Shelter',
    type: 'website',
    images: [
      {
        url: '/og-contact.jpg',
        width: 1200,
        height: 630,
        alt: 'Contact MC Tax Shelter',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact MC Tax Shelter Toronto',
    description: 'Call +1-929-310-8968 | 40 Alexandre St, Toronto | Mon-Fri 9AM-6PM EST',
    images: ['/og-contact.jpg'],
  },
  alternates: {
    canonical: 'https://mctaxshelter.com/contact',
  },
}

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
