'use client'

import { Home, Briefcase, TrendingUp, FileText, DollarSign, Users, CheckCircle, Shield, Phone } from '@/components/icons'

export default function ServicesPage() {
  const services = [
    {
      icon: Home,
      title: "Real Estate Tax Strategies",
      tagline: "Maximize returns on property investments",
      savings: "Save up to 40%",
      description: "Real estate offers some of the most powerful tax advantages available. Our comprehensive approach helps property investors and developers minimize their tax burden while maximizing cash flow.",
      features: [
        "Depreciation acceleration strategies (Cost Segregation Studies)",
        "1031 Like-Kind Exchange structuring and execution",
        "REIT (Real Estate Investment Trust) formation and optimization",
        "Passive activity loss optimization",
        "Short-term rental tax strategies (STR loophole)",
        "Real estate professional status qualification",
        "Opportunity Zone investment guidance",
        "Property holding structure optimization"
      ],
      idealFor: [
        "Property investors with multiple holdings",
        "Real estate developers and flippers",
        "Commercial property owners",
        "Short-term rental operators",
        "REITs and syndication sponsors"
      ]
    },
    {
      icon: Briefcase,
      title: "Business Structure Optimization",
      tagline: "Reduce taxes through strategic entity formation",
      savings: "Save up to 35%",
      description: "The right business structure can save you tens of thousands annually. We analyze your specific situation to recommend the optimal entity structure and implement advanced strategies for maximum protection and tax efficiency.",
      features: [
        "Entity selection analysis (LLC, S-Corp, C-Corp, Partnership)",
        "Multi-entity holding company structures",
        "S-Corporation election and optimization",
        "Qualified Business Income (QBI) deduction maximization",
        "Owner compensation strategy (salary vs. distributions)",
        "Family employment tax benefits",
        "Retirement plan integration (Solo 401k, SEP IRA, Defined Benefit)",
        "State tax jurisdiction optimization"
      ],
      idealFor: [
        "Small business owners and entrepreneurs",
        "Professional service providers",
        "E-commerce and online businesses",
        "Consultants and freelancers",
        "Growing businesses looking to scale"
      ]
    },
    {
      icon: TrendingUp,
      title: "Investment Tax Planning",
      tagline: "Optimize your portfolio for after-tax returns",
      savings: "Save up to 30%",
      description: "Smart investing isn&apos;t just about returns—it&apos;s about what you keep after taxes. We develop sophisticated strategies to minimize capital gains, maximize tax-advantaged growth, and optimize your overall investment portfolio.",
      features: [
        "Strategic tax-loss harvesting programs",
        "Capital gains timing and deferral strategies",
        "Qualified Opportunity Zone (QOZ) investments",
        "Municipal bond portfolio strategies",
        "Dividend income optimization",
        "Cryptocurrency taxation and reporting",
        "Options and derivatives tax treatment",
        "Foreign investment reporting (FBAR, FATCA)"
      ],
      idealFor: [
        "Active traders and investors",
        "High-net-worth portfolio holders",
        "Cryptocurrency investors",
        "Angel investors and venture capitalists",
        "Retirees managing investment income"
      ]
    },
    {
      icon: FileText,
      title: "Estate & Trust Planning",
      tagline: "Preserve wealth for future generations",
      savings: "Save up to 50%",
      description: "Protect your legacy from estate taxes and ensure your wealth transfers efficiently to your heirs. Our estate planning strategies combine tax efficiency with asset protection and family governance.",
      features: [
        "Irrevocable Life Insurance Trusts (ILITs)",
        "Grantor Retained Annuity Trusts (GRATs)",
        "Charitable Remainder Trusts (CRTs)",
        "Qualified Personal Residence Trusts (QPRTs)",
        "Dynasty trusts for multi-generational wealth",
        "Family Limited Partnerships (FLPs)",
        "Annual gifting strategies (gift tax exclusions)",
        "Estate tax projection and planning"
      ],
      idealFor: [
        "High-net-worth families (estates over $13M)",
        "Business owners planning succession",
        "Individuals with significant real estate holdings",
        "Families with special needs dependents",
        "Philanthropically-minded individuals"
      ]
    },
    {
      icon: DollarSign,
      title: "Retirement Optimization",
      tagline: "Supercharge your retirement savings",
      savings: "Save up to 25%",
      description: "Retirement accounts offer powerful tax advantages, but most people don&apos;t maximize their potential. We implement advanced strategies to accelerate your retirement savings while minimizing current and future taxes.",
      features: [
        "Solo 401(k) and Mega Backdoor Roth strategies",
        "Traditional to Roth IRA conversions (timing optimization)",
        "Defined Benefit Plan design for business owners",
        "Cash Balance Plan implementation",
        "After-tax contribution strategies",
        "Required Minimum Distribution (RMD) planning",
        "Inherited IRA strategies (SECURE Act compliance)",
        "Social Security timing optimization"
      ],
      idealFor: [
        "High-income professionals and executives",
        "Self-employed individuals and business owners",
        "Pre-retirees (ages 50-65)",
        "Those with inherited retirement accounts",
        "Individuals maximizing catch-up contributions"
      ]
    },
    {
      icon: Users,
      title: "Family Office Services",
      tagline: "Comprehensive wealth management for families",
      savings: "Custom savings strategy",
      description: "For ultra-high-net-worth families, we provide comprehensive family office tax services that coordinate all aspects of wealth management, tax planning, and multi-generational wealth transfer.",
      features: [
        "Consolidated family tax planning and reporting",
        "Multi-entity and multi-jurisdiction coordination",
        "Private foundation and donor-advised fund management",
        "Succession planning for family businesses",
        "Trust administration and fiduciary services",
        "Coordination with legal, investment, and insurance advisors",
        "Next-generation wealth education programs",
        "International tax compliance (FATCA, CRS)"
      ],
      idealFor: [
        "Ultra-high-net-worth families ($20M+ net worth)",
        "Multi-generational family enterprises",
        "Families with complex international holdings",
        "Philanthropic families with foundations",
        "Families transitioning wealth to next generation"
      ]
    }
  ]

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl font-bold mb-6">Our Services</h1>
            <p className="text-xl text-gray-300 mb-8">
              Comprehensive tax optimization strategies tailored to your unique financial situation. Every approach is 100% legal, IRS-compliant, and designed to maximize your after-tax wealth.
            </p>
            <div className="inline-flex items-center gap-2 bg-blue-600 px-6 py-3 rounded-lg">
              <Shield className="w-5 h-5" />
              <span className="font-semibold">Fully IRS Compliant Strategies</span>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-8 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {services.map((service, index) => {
              const Icon = service.icon
              return (
                <a
                  key={index}
                  href={`#service-${index}`}
                  className="flex flex-col items-center text-center p-4 rounded-lg hover:bg-gray-50 transition-colors group"
                >
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-3 group-hover:bg-blue-600 transition-colors">
                    <Icon className="w-6 h-6 text-blue-600 group-hover:text-white transition-colors" />
                  </div>
                  <span className="text-sm font-medium text-gray-700">{service.title}</span>
                </a>
              )
            })}
          </div>
        </div>
      </section>

      {/* Detailed Services */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {services.map((service, index) => {
            const Icon = service.icon
            const isEven = index % 2 === 0

            return (
              <div
                key={index}
                id={`service-${index}`}
                className={`bg-white rounded-2xl shadow-xl overflow-hidden ${isEven ? '' : 'lg:flex-row-reverse'}`}
              >
                <div className="lg:flex">
                  {/* Content Side */}
                  <div className="lg:w-2/3 p-8 lg:p-12">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center">
                        <Icon className="w-8 h-8 text-blue-600" />
                      </div>
                      <div>
                        <h2 className="text-3xl font-bold text-gray-900">{service.title}</h2>
                        <p className="text-blue-600 font-medium">{service.tagline}</p>
                      </div>
                    </div>

                    <div className="inline-block bg-green-100 text-green-800 px-4 py-2 rounded-lg font-semibold mb-6">
                      {service.savings} on average
                    </div>

                    <p className="text-gray-600 mb-6 text-lg">{service.description}</p>

                    <div className="mb-8">
                      <h3 className="text-xl font-semibold text-gray-900 mb-4">What&apos;s Included:</h3>
                      <div className="grid sm:grid-cols-2 gap-3">
                        {service.features.map((feature, idx) => (
                          <div key={idx} className="flex items-start gap-2">
                            <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                            <span className="text-gray-700 text-sm">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="border-t pt-6">
                      <h3 className="text-lg font-semibold text-gray-900 mb-3">Ideal For:</h3>
                      <div className="flex flex-wrap gap-2">
                        {service.idealFor.map((item, idx) => (
                          <span
                            key={idx}
                            className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm"
                          >
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* CTA Side */}
                  <div className="lg:w-1/3 bg-gradient-to-br from-blue-600 to-blue-800 p-8 lg:p-12 text-white flex flex-col justify-center">
                    <h3 className="text-2xl font-bold mb-4">Ready to Get Started?</h3>
                    <p className="mb-6 text-blue-100">
                      Schedule a free consultation to learn how this service can benefit your specific situation.
                    </p>

                    <div className="space-y-4">
                      <a
                        href="/booking"
                        className="block w-full bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold text-center hover:bg-gray-100 transition-colors"
                      >
                        Book Free Consultation
                      </a>
                      <a
                        href="/contact"
                        className="block w-full bg-blue-500 text-white px-6 py-3 rounded-lg font-semibold text-center hover:bg-blue-400 transition-colors"
                      >
                        Contact Our Team
                      </a>
                    </div>

                    <div className="mt-8 pt-8 border-t border-blue-400">
                      <div className="flex items-center gap-3 mb-4">
                        <Phone className="w-5 h-5" />
                        <div>
                          <div className="text-sm text-blue-200">Call us now</div>
                          <a href="tel:+19293108968" className="font-bold text-lg">
                            +1-929-310-8968
                          </a>
                        </div>
                      </div>
                      <p className="text-sm text-blue-100">
                        Available Monday-Friday, 9 AM - 6 PM EST
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Service Process</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A proven methodology to deliver maximum tax savings
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: "1",
                title: "Discovery Call",
                description: "We learn about your financial situation, goals, and current tax strategy"
              },
              {
                step: "2",
                title: "Deep Analysis",
                description: "Our team reviews your documents and identifies all savings opportunities"
              },
              {
                step: "3",
                title: "Strategy Presentation",
                description: "We present a customized plan with projected savings and implementation timeline"
              },
              {
                step: "4",
                title: "Implementation & Support",
                description: "We execute the strategy and provide ongoing support and optimization"
              }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Guarantee Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-white rounded-2xl shadow-xl p-8 lg:p-12">
            <Shield className="w-16 h-16 text-blue-600 mx-auto mb-6" />
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Guarantee</h2>
            <p className="text-xl text-gray-600 mb-8">
              If we don&apos;t save you at least 3x our fee in tax savings within the first year, we&apos;ll refund 100% of your investment.
            </p>
            <div className="grid md:grid-cols-3 gap-6 text-left">
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold mb-1">100% Legal</h3>
                  <p className="text-sm text-gray-600">Every strategy is IRS-compliant</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold mb-1">Audit Support</h3>
                  <p className="text-sm text-gray-600">We represent you if needed</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold mb-1">No Risk</h3>
                  <p className="text-sm text-gray-600">Money-back guarantee</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h2 className="text-4xl font-bold mb-4">Ready to Transform Your Tax Situation?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Join thousands of clients who are keeping more of what they earn
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/booking"
              className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-700 transition-colors"
            >
              Schedule Free Consultation
            </a>
            <a
              href="tel:+19293108968"
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors flex items-center justify-center gap-2"
            >
              <Phone className="w-5 h-5" />
              Call Now
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}
