'use client'

import { ArrowRight, Shield, TrendingUp, Calculator } from './icons'

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white">
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-10"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
        <div className="text-center">
          <div className="flex justify-center mb-6">
            <div className="inline-flex items-center px-4 py-2 bg-blue-500/20 backdrop-blur-sm rounded-full text-sm font-medium border border-blue-400/30">
              <Shield className="w-4 h-4 mr-2" />
              100% Legal & Compliant Tax Strategies
            </div>
          </div>
          
          <h1 className="text-5xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
            Maximize Your Wealth
            <span className="block text-3xl lg:text-5xl mt-2">Minimize Your Tax Burden</span>
          </h1>
          
          <p className="text-xl lg:text-2xl mb-4 text-gray-300 max-w-3xl mx-auto">
            Expert tax optimization strategies designed to legally protect and grow your wealth. 
            Save thousands with proven methods used by the world&apos;s most successful individuals.
          </p>
          
          <div className="mb-8">
            <a href="tel:+19293108968" className="inline-flex items-center text-2xl font-bold text-yellow-400 hover:text-yellow-300 transition-colors">
              📞 Call Now: +1-929-310-8968
            </a>
            <p className="text-sm text-gray-400 mt-2">Free Consultation • Toronto Office</p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <button className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-slate-900 bg-white rounded-lg hover:bg-gray-100 transition-all transform hover:scale-105">
              Start Your Tax Assessment
              <ArrowRight className="ml-2 w-5 h-5" />
            </button>
            <button className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white border-2 border-white/30 rounded-lg hover:bg-white/10 transition-all">
              <Calculator className="mr-2 w-5 h-5" />
              Calculate Potential Savings
            </button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <TrendingUp className="w-12 h-12 mb-4 text-green-400" />
              <h3 className="text-xl font-semibold mb-2">Average Savings</h3>
              <p className="text-3xl font-bold text-green-400">$47,000</p>
              <p className="text-sm text-gray-300 mt-2">Per year for our clients</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <Shield className="w-12 h-12 mb-4 text-blue-400" />
              <h3 className="text-xl font-semibold mb-2">Fully Compliant</h3>
              <p className="text-3xl font-bold text-blue-400">100%</p>
              <p className="text-sm text-gray-300 mt-2">IRS approved strategies</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="w-12 h-12 mb-4 text-yellow-400 font-bold text-2xl">4.9★</div>
              <h3 className="text-xl font-semibold mb-2">Client Rating</h3>
              <p className="text-3xl font-bold text-yellow-400">2,847</p>
              <p className="text-sm text-gray-300 mt-2">Satisfied clients</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}