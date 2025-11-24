'use client'

import { Home, Briefcase, TrendingUp, FileText, DollarSign, Users } from './icons'

export default function Services() {
  const services = [
    {
      icon: Home,
      title: "Real Estate Tax Strategies",
      description: "Leverage depreciation, 1031 exchanges, and REITs to minimize property investment taxes.",
      savings: "Save up to 40%"
    },
    {
      icon: Briefcase,
      title: "Business Structure Optimization",
      description: "Strategic entity formation including LLCs, S-Corps, and holding companies for maximum protection.",
      savings: "Save up to 35%"
    },
    {
      icon: TrendingUp,
      title: "Investment Tax Planning",
      description: "Capital gains strategies, tax-loss harvesting, and qualified opportunity zones.",
      savings: "Save up to 30%"
    },
    {
      icon: FileText,
      title: "Estate & Trust Planning",
      description: "Protect generational wealth with irrevocable trusts, GRATs, and charitable remainder trusts.",
      savings: "Save up to 50%"
    },
    {
      icon: DollarSign,
      title: "Retirement Optimization",
      description: "Maximize 401(k), IRA, and pension strategies including backdoor Roth conversions.",
      savings: "Save up to 25%"
    },
    {
      icon: Users,
      title: "Family Office Services",
      description: "Comprehensive wealth management for high net worth families and individuals.",
      savings: "Custom savings"
    }
  ]

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Comprehensive Tax Optimization Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Every strategy we implement is 100% legal, IRS-compliant, and tailored to your unique financial situation
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <div key={index} className="group bg-white border border-gray-200 rounded-xl p-8 hover:shadow-xl transition-all hover:-translate-y-1">
                <div className="w-14 h-14 bg-blue-100 rounded-lg flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-colors">
                  <Icon className="w-7 h-7 text-blue-600 group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-semibold text-green-600">{service.savings}</span>
                  <button className="text-blue-600 font-medium text-sm hover:text-blue-700 transition-colors">
                    Learn More →
                  </button>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}