import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Tax Optimization Services | Real Estate, Business & Investment Tax Planning',
  description: '100% legal tax strategies: Real estate tax optimization, business structure planning, investment tax strategies, estate planning, retirement optimization, and family office services.',
  keywords: [
    'tax optimization services',
    'real estate tax strategies',
    'business structure optimization',
    'investment tax planning',
    'estate planning',
    'retirement tax strategies',
    'family office tax services',
    '1031 exchange',
    'cost segregation',
    'S-Corp election',
    'QBI deduction',
    'tax loss harvesting',
    'Roth IRA conversion',
    'trust planning',
  ],
  openGraph: {
    title: 'Comprehensive Tax Optimization Services - Save 25-50% on Taxes',
    description: 'Expert tax services: Real Estate, Business Structure, Investment Planning, Estate & Trust, Retirement, Family Office. IRS-compliant strategies with guaranteed results.',
    url: 'https://mctaxshelter.com/services',
    siteName: 'MC Tax Shelter',
    type: 'website',
    images: [
      {
        url: '/og-services.jpg',
        width: 1200,
        height: 630,
        alt: 'MC Tax Shelter Services',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Tax Optimization Services - Save 25-50% Annually',
    description: 'Real Estate | Business | Investment | Estate | Retirement | Family Office Tax Services',
    images: ['/og-services.jpg'],
  },
  alternates: {
    canonical: 'https://mctaxshelter.com/services',
  },
}

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
