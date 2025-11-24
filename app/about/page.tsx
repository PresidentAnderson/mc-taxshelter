'use client'

import { Award, Building, Users, BookOpen, Shield, Globe, CheckCircle, TrendingUp } from '@/components/icons'

export default function AboutPage() {
  const team = [
    {
      name: "Michael Chen",
      role: "Founder & Senior Tax Strategist",
      credentials: "CPA, EA, MST",
      image: "/team/michael-chen.jpg",
      bio: "25+ years of experience in tax law and strategic planning for high-net-worth individuals."
    },
    {
      name: "Sarah Thompson",
      role: "Director of Estate Planning",
      credentials: "JD, LLM (Taxation)",
      image: "/team/sarah-thompson.jpg",
      bio: "Specialized in complex estate structures and multi-generational wealth preservation."
    },
    {
      name: "David Rodriguez",
      role: "International Tax Director",
      credentials: "CPA, International Tax Specialist",
      image: "/team/david-rodriguez.jpg",
      bio: "Expert in cross-border taxation and global compliance for multinational clients."
    },
    {
      name: "Jennifer Park",
      role: "Business Tax Consultant",
      credentials: "CPA, MBA",
      image: "/team/jennifer-park.jpg",
      bio: "Focuses on business structure optimization and corporate tax strategy."
    }
  ]

  const certifications = [
    { icon: Award, title: "IRS Enrolled Agents", description: "Federally authorized tax practitioners" },
    { icon: Shield, title: "Licensed & Insured", description: "Full professional liability coverage" },
    { icon: BookOpen, title: "CPA Certified", description: "Certified Public Accountants on staff" },
    { icon: Globe, title: "International Tax Experts", description: "Cross-border taxation specialists" },
    { icon: Building, title: "AICPA Members", description: "American Institute of CPAs" },
    { icon: Users, title: "NATP Members", description: "National Association of Tax Professionals" }
  ]

  const milestones = [
    { year: "1999", event: "Founded in Toronto", description: "Started with a mission to democratize advanced tax strategies" },
    { year: "2005", event: "Expanded Services", description: "Added estate planning and international tax services" },
    { year: "2012", event: "Digital Transformation", description: "Launched comprehensive online client portal" },
    { year: "2018", event: "Dext Partnership", description: "Became certified Dext partner for seamless accounting" },
    { year: "2023", event: "50+ Professionals", description: "Grew to serve thousands of clients across North America" },
    { year: "2024", event: "AI Integration", description: "Implemented advanced tax optimization algorithms" }
  ]

  const values = [
    {
      icon: Shield,
      title: "Integrity First",
      description: "Every strategy we recommend is 100% legal and IRS-compliant. We never cut corners or take unnecessary risks with your finances."
    },
    {
      icon: TrendingUp,
      title: "Results-Driven",
      description: "Our success is measured by your savings. We&apos;re committed to maximizing your after-tax wealth through proven strategies."
    },
    {
      icon: Users,
      title: "Client Partnership",
      description: "We build long-term relationships based on trust, transparency, and consistent communication."
    },
    {
      icon: BookOpen,
      title: "Continuous Learning",
      description: "Tax laws change constantly. We stay ahead through ongoing education and professional development."
    }
  ]

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl font-bold mb-6">About MC Tax Shelter</h1>
            <p className="text-xl text-gray-300 mb-8">
              For over 25 years, we&apos;ve been helping individuals and businesses keep more of what they earn through strategic, legal tax optimization.
            </p>
            <div className="flex flex-wrap justify-center gap-8 text-center">
              <div className="flex flex-col items-center">
                <div className="text-4xl font-bold text-blue-400 mb-2">25+</div>
                <div className="text-gray-300">Years Experience</div>
              </div>
              <div className="flex flex-col items-center">
                <div className="text-4xl font-bold text-blue-400 mb-2">5,000+</div>
                <div className="text-gray-300">Clients Served</div>
              </div>
              <div className="flex flex-col items-center">
                <div className="text-4xl font-bold text-blue-400 mb-2">$50M+</div>
                <div className="text-gray-300">In Tax Savings</div>
              </div>
              <div className="flex flex-col items-center">
                <div className="text-4xl font-bold text-blue-400 mb-2">50+</div>
                <div className="text-gray-300">Tax Professionals</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  Founded in 1999 by Michael Chen, MC Tax Shelter began with a simple but powerful mission: to make sophisticated tax optimization strategies accessible to more than just the ultra-wealthy.
                </p>
                <p>
                  Michael recognized that while large corporations had teams of tax advisors finding every legal way to reduce their tax burden, small business owners and high-income professionals were often paying far more than necessary.
                </p>
                <p>
                  Today, we&apos;re proud to serve thousands of clients across North America, from entrepreneurs and real estate investors to Fortune 500 companies. Our team of 50+ tax professionals brings together expertise in business taxation, estate planning, international tax law, and cutting-edge financial strategies.
                </p>
                <p>
                  We&apos;ve saved our clients over $50 million in taxes through perfectly legal, IRS-compliant strategies. But beyond the numbers, we&apos;ve built lasting relationships based on trust, transparency, and results.
                </p>
              </div>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-slate-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Company Milestones</h3>
              <div className="space-y-6">
                {milestones.map((milestone, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="flex-shrink-0 w-16 h-16 bg-blue-600 text-white rounded-lg flex items-center justify-center font-bold">
                      {milestone.year}
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">{milestone.event}</h4>
                      <p className="text-sm text-gray-600">{milestone.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Mission & Values</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We&apos;re committed to helping you build and preserve wealth through intelligent tax planning
            </p>
          </div>

          <div className="mb-16 bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl p-8 text-white text-center">
            <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
            <p className="text-lg max-w-3xl mx-auto">
              To empower individuals and businesses to achieve financial success by providing expert tax strategies that are ethical, effective, and tailored to each client&apos;s unique situation. We believe everyone deserves access to the same sophisticated tax planning tools available to the wealthy.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon
              return (
                <div key={index} className="bg-white rounded-xl shadow-lg p-8">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                      <Icon className="w-6 h-6 text-blue-600" />
                    </div>
                    <h3 className="text-xl font-semibold ml-4">{value.title}</h3>
                  </div>
                  <p className="text-gray-600">{value.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Meet Our Leadership Team</h2>
            <p className="text-xl text-gray-600">
              Industry experts with decades of combined experience
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-xl transition-shadow">
                <div className="aspect-square bg-gradient-to-br from-blue-100 to-slate-100 flex items-center justify-center">
                  <Users className="w-24 h-24 text-blue-600 opacity-50" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-1">{member.name}</h3>
                  <p className="text-blue-600 font-medium mb-2">{member.role}</p>
                  <p className="text-sm text-gray-500 mb-3">{member.credentials}</p>
                  <p className="text-sm text-gray-600">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications & Memberships */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Certifications & Memberships</h2>
            <p className="text-xl text-gray-600">
              Recognized by leading professional organizations
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {certifications.map((cert, index) => {
              const Icon = cert.icon
              return (
                <div key={index} className="bg-white rounded-xl shadow-lg p-8 text-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{cert.title}</h3>
                  <p className="text-sm text-gray-600">{cert.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose MC Tax Shelter?</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {[
              "Personalized strategies tailored to your unique situation",
              "Proactive year-round tax planning, not just filing",
              "Direct access to senior tax professionals",
              "Transparent pricing with no hidden fees",
              "Comprehensive audit support and representation",
              "Cutting-edge technology for seamless collaboration",
              "Same-day response guarantee for urgent matters",
              "Multi-year tax projections and planning",
              "Coordination with your other advisors"
            ].map((benefit, index) => (
              <div key={index} className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                <span className="text-gray-700">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Ready to Start Saving?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Join thousands of satisfied clients who trust us with their tax planning
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/booking"
              className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Schedule Free Consultation
            </a>
            <a
              href="/contact"
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}
