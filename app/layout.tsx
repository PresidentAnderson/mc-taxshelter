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
  title: "MC Tax Shelter - Legal Tax Optimization & Wealth Protection",
  description: "Save thousands on taxes with 100% legal, IRS-compliant strategies. Expert tax planning, Dext partnership, and guaranteed results. Free consultation.",
  keywords: "tax shelter, tax optimization, legal tax strategies, tax planning, wealth protection, Dext, Receipt Bank",
  openGraph: {
    title: "MC Tax Shelter - Save $47,000+ Annually on Taxes",
    description: "Legal tax optimization strategies that save our clients an average of $47,000 per year. Free consultation included.",
    url: "https://mctaxshelter.com",
    siteName: "MC Tax Shelter",
    type: "website",
  },
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
