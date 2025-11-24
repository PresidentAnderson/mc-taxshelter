import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://mctaxshelter.com'),
  title: {
    default: "MC Tax Shelter - Legal Tax Optimization & Wealth Protection",
    template: "%s | MC Tax Shelter"
  },
  description: "Save thousands on taxes with 100% legal, IRS-compliant strategies. Expert tax planning, Dext partnership, and guaranteed results. Free consultation.",
  keywords: [
    "tax shelter",
    "tax optimization",
    "legal tax strategies",
    "tax planning",
    "wealth protection",
    "Dext",
    "Receipt Bank",
    "IRS compliant",
    "tax consultant Toronto",
    "CPA tax services",
    "business tax planning",
    "real estate tax strategies",
    "estate planning",
    "tax deductions",
    "tax credits"
  ],
  authors: [{ name: "MC Tax Shelter Team" }],
  creator: "MC Tax Shelter",
  publisher: "MC Tax Shelter",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://mctaxshelter.com",
    siteName: "MC Tax Shelter",
    title: "MC Tax Shelter - Save $47,000+ Annually on Taxes",
    description: "Legal tax optimization strategies that save our clients an average of $47,000 per year. Free consultation included.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "MC Tax Shelter - Legal Tax Optimization",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "MC Tax Shelter - Legal Tax Optimization",
    description: "Save thousands on taxes with 100% legal, IRS-compliant strategies. Free consultation.",
    images: ["/og-image.jpg"],
    creator: "@mctaxshelter",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: "https://mctaxshelter.com",
  },
  verification: {
    google: "your-google-verification-code",
    yandex: "your-yandex-verification-code",
    yahoo: "your-yahoo-verification-code",
  },
  category: "Finance",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
