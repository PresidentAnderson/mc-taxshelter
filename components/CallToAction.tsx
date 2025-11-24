'use client'

import { ArrowRight, Clock, Users, DollarSign } from './icons'

export default function CallToAction() {
  return (
    <section id="consultation" className="py-20 bg-gradient-to-r from-blue-600 to-blue-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
          <div className="grid lg:grid-cols-2">
            <div className="p-12 lg:p-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Stop Overpaying on Taxes
                <span className="block text-2xl mt-2 text-blue-600">Start Building Wealth Today</span>
              </h2>
              
              <p className="text-lg text-gray-600 mb-8">
                Every day you wait costs you money. Our tax optimization strategies could save you thousands 
                this year alone. Get your free assessment and discover your savings potential.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3">
                  <Clock className="w-5 h-5 text-blue-600" />
                  <span className="text-gray-700">Free 30-minute consultation</span>
                </div>
                <div className="flex items-center gap-3">
                  <Users className="w-5 h-5 text-blue-600" />
                  <span className="text-gray-700">Personalized savings report</span>
                </div>
                <div className="flex items-center gap-3">
                  <DollarSign className="w-5 h-5 text-blue-600" />
                  <span className="text-gray-700">No obligation to proceed</span>
                </div>
              </div>

              <form className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="First Name"
                    className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                  />
                  <input
                    type="text"
                    placeholder="Last Name"
                    className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                  />
                </div>
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                />
                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                />
                <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 text-gray-600">
                  <option value="">Annual Income Range</option>
                  <option value="150-250">$150,000 - $250,000</option>
                  <option value="250-500">$250,000 - $500,000</option>
                  <option value="500-1m">$500,000 - $1,000,000</option>
                  <option value="1m+">$1,000,000+</option>
                </select>
                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors flex items-center justify-center gap-2 transform hover:scale-105"
                >
                  Get Your Free Tax Assessment
                  <ArrowRight className="w-5 h-5" />
                </button>
              </form>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-12 lg:p-16 flex flex-col justify-center">
              <div className="bg-white rounded-2xl p-8 shadow-lg mb-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Limited Time Offer</h3>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Initial Consultation</span>
                    <span className="text-gray-500 line-through">$500</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Tax Savings Analysis</span>
                    <span className="text-gray-500 line-through">$750</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">6 Months Dext Premium</span>
                    <span className="text-gray-500 line-through">$360</span>
                  </div>
                  <div className="border-t pt-3 flex items-center justify-between">
                    <span className="font-semibold text-gray-900">Total Value</span>
                    <div>
                      <span className="text-gray-500 line-through mr-2">$1,610</span>
                      <span className="text-3xl font-bold text-green-600">FREE</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-6">
                <p className="text-sm text-yellow-800 font-medium mb-2">⚡ High Demand Notice</p>
                <p className="text-sm text-yellow-700">
                  Due to year-end tax planning, consultation slots are filling quickly. 
                  Only 7 spots remaining this week.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}