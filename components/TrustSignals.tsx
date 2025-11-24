import { Award, Building, Users, BookOpen, Shield, Globe } from './icons'

export default function TrustSignals() {
  const signals = [
    { icon: Award, text: "IRS Enrolled Agents" },
    { icon: Building, text: "Fortune 500 Trusted" },
    { icon: Users, text: "50+ Tax Professionals" },
    { icon: BookOpen, text: "25 Years Experience" },
    { icon: Shield, text: "Licensed & Insured" },
    { icon: Globe, text: "International Tax Experts" }
  ]

  return (
    <section className="py-8 bg-gray-50 border-y border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap justify-center items-center gap-8 lg:gap-12">
          {signals.map((signal, index) => {
            const Icon = signal.icon
            return (
              <div key={index} className="flex items-center gap-3 text-gray-600">
                <Icon className="w-5 h-5 text-blue-600" />
                <span className="text-sm font-medium">{signal.text}</span>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}