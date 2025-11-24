'use client'

import { CheckCircle, Smartphone, Cloud, FileSearch, ChartBar } from './icons'

export default function DextPartnership() {
  const features = [
    {
      icon: Smartphone,
      title: "Mobile Receipt Capture",
      description: "Snap photos of receipts on-the-go for instant tax deduction tracking"
    },
    {
      icon: Cloud,
      title: "Cloud Storage",
      description: "Secure, IRS-compliant document storage with automatic backups"
    },
    {
      icon: FileSearch,
      title: "Smart Categorization",
      description: "AI-powered expense categorization for maximum deduction discovery"
    },
    {
      icon: ChartBar,
      title: "Real-Time Reporting",
      description: "Track your tax savings potential throughout the year"
    }
  ]

  return (
    <section id="dext" className="py-20 bg-gradient-to-br from-blue-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center px-4 py-2 bg-green-100 rounded-full text-sm font-medium text-green-800 mb-6">
              <CheckCircle className="w-4 h-4 mr-2" />
              Exclusive Partnership
            </div>
            
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Powered by Dext
              <span className="block text-2xl mt-2 text-gray-600">(formerly Receipt Bank)</span>
            </h2>
            
            <p className="text-lg text-gray-600 mb-8">
              We&apos;ve partnered with Dext, the leading expense management platform trusted by over 700,000 businesses worldwide. 
              Our clients get exclusive access to premium features that automate expense tracking and maximize deduction discovery.
            </p>

            <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 mb-8">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-semibold text-gray-900">Client Exclusive Offer</h3>
                <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold">50% OFF</span>
              </div>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">6 months free premium access with service signup</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Automatic integration with your tax strategy</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Dedicated support from certified bookkeepers</span>
                </li>
              </ul>
            </div>

            <button className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors transform hover:scale-105">
              Activate Your Dext Account
            </button>
          </div>

          <div className="space-y-6">
            {features.map((feature, index) => {
              const Icon = feature.icon
              return (
                <div key={index} className="flex gap-4 p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">{feature.title}</h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </div>
                </div>
              )
            })}
            
            <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl p-6 text-white">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-bold">Average Client Results</h3>
                <span className="text-3xl font-bold">$12,400</span>
              </div>
              <p className="text-blue-100">
                Additional deductions discovered through Dext integration in the first year
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}