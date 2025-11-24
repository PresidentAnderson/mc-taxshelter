'use client'

import { useState } from 'react'
import { ChevronDown } from './icons'

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const faqs = [
    {
      question: "Are these tax strategies legal?",
      answer: "Absolutely. Every strategy we recommend is 100% legal and IRS-compliant. We work exclusively within the tax code to find legitimate deductions, credits, and structures that minimize your tax burden. Our team includes IRS Enrolled Agents and CPAs who ensure complete compliance with all federal and state regulations."
    },
    {
      question: "How much can I realistically save?",
      answer: "Savings vary based on your income, assets, and current tax situation. Our average client saves $47,000 per year, with some saving significantly more. High-income earners and business owners typically see the greatest benefits. We provide a detailed savings projection during your consultation based on your specific circumstances."
    },
    {
      question: "What's included with the Dext partnership?",
      answer: "Our partnership with Dext provides you with premium expense tracking software at no additional cost for 6 months. This includes unlimited receipt scanning, automatic categorization, cloud storage, real-time reporting, and integration with your accounting software. After 6 months, you receive a 50% discount on continued service."
    },
    {
      question: "How quickly can I start saving on taxes?",
      answer: "Many strategies can be implemented immediately and provide benefits in the current tax year. Others, like entity restructuring, may take 1-2 weeks to establish but can provide retroactive benefits. We prioritize quick-win strategies to maximize your immediate savings while building long-term tax efficiency."
    },
    {
      question: "What if I get audited?",
      answer: "While our strategies significantly reduce audit risk through proper documentation and compliance, we provide full audit protection as part of our service. This includes representation before the IRS, document preparation, and strategic guidance throughout the audit process. Our audit protection has successfully defended 100% of challenged positions."
    },
    {
      question: "Who is this service best suited for?",
      answer: "Our services are ideal for individuals earning over $150,000 annually, business owners, real estate investors, and anyone with complex financial situations. We specialize in helping entrepreneurs, medical professionals, executives, and investors who want to legally minimize their tax burden while building long-term wealth."
    },
    {
      question: "What makes you different from my regular CPA?",
      answer: "While most CPAs focus on compliance and filing returns, we specialize in proactive tax strategy and optimization. We look beyond basic deductions to implement sophisticated structures and strategies that can save tens of thousands annually. Our team stays current with tax law changes and actively seeks opportunities rather than just processing paperwork."
    },
    {
      question: "Is there a money-back guarantee?",
      answer: "Yes. We're so confident in our ability to find significant tax savings that we offer a full refund if we can't identify savings opportunities that exceed our fee within the first 90 days. Most clients see savings of 10-20x our fee in the first year alone."
    }
  ]

  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600">
            Everything you need to know about legal tax optimization
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg transition-shadow"
            >
              <button
                className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <h3 className="text-lg font-semibold text-gray-900 pr-8">{faq.question}</h3>
                <ChevronDown
                  className={`w-5 h-5 text-gray-500 transition-transform flex-shrink-0 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>
              {openIndex === index && (
                <div className="px-8 pb-6">
                  <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}