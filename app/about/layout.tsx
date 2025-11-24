import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About MC Tax Shelter - 25+ Years of Tax Expertise',
  description: '25+ years helping individuals and businesses save on taxes. 50+ tax professionals, $50M+ in client savings. IRS-compliant strategies backed by CPAs and Enrolled Agents.',
  keywords: [
    'about MC Tax Shelter',
    'tax professionals Toronto',
    'certified tax strategists',
    'IRS enrolled agents',
    'CPA tax services',
    'tax planning experts',
    'tax shelter history',
    'tax consulting team',
    'Toronto tax experts',
  ],
  openGraph: {
    title: 'About MC Tax Shelter - Expert Tax Professionals Since 1999',
    description: '50+ tax professionals | 5,000+ clients served | $50M+ in tax savings. Learn about our team and proven track record.',
    url: 'https://mctaxshelter.com/about',
    siteName: 'MC Tax Shelter',
    type: 'website',
    images: [
      {
        url: '/og-about.jpg',
        width: 1200,
        height: 630,
        alt: 'MC Tax Shelter Team',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About MC Tax Shelter - 25+ Years of Tax Expertise',
    description: '50+ tax professionals serving 5,000+ clients with $50M+ in tax savings',
    images: ['/og-about.jpg'],
  },
  alternates: {
    canonical: 'https://mctaxshelter.com/about',
  },
}

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
