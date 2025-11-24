import Hero from '@/components/Hero'
import Services from '@/components/Services'
import DextPartnership from '@/components/DextPartnership'
import TrustSignals from '@/components/TrustSignals'
import HowItWorks from '@/components/HowItWorks'
import CallToAction from '@/components/CallToAction'
import FAQ from '@/components/FAQ'
import LegalDisclaimer from '@/components/LegalDisclaimer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <TrustSignals />
      <Services />
      <DextPartnership />
      <HowItWorks />
      <FAQ />
      <CallToAction />
      <LegalDisclaimer />
    </main>
  )
}
