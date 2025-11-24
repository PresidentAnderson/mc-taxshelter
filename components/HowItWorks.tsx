'use client'

import { FileText, Users, Calculator, FileCheck, TrendingUp, Shield } from './icons'

export default function HowItWorks() {
  const steps = [
    {
      icon: FileText,
      title: "Initial Assessment",
      description: "Complete our comprehensive financial assessment to understand your current tax situation",
      time: "15 minutes"
    },
    {
      icon: Users,
      title: "Expert Consultation",
      description: "Meet with our certified tax strategists to discuss personalized optimization opportunities",
      time: "45 minutes"
    },
    {
      icon: Calculator,
      title: "Strategy Development",
      description: "Receive a custom tax optimization plan with projected savings and implementation timeline",
      time: "2-3 days"
    },
    {
      icon: FileCheck,
      title: "Implementation",
      description: "We handle all documentation, entity formation, and structural changes required",
      time: "1-2 weeks"
    },
    {
      icon: TrendingUp,
      title: "Ongoing Optimization",
      description: "Continuous monitoring and adjustment to maximize your tax savings year-round",
      time: "Ongoing"
    },
    {
      icon: Shield,
      title: "Audit Protection",
      description: "Full support and representation in the unlikely event of an IRS audit",
      time: "Always included"
    }
  ]

  return (
    <section id="how-it-works" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Your Path to Tax Optimization
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A proven process that has saved our clients millions in taxes while ensuring complete compliance
          </p>
        </div>

        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-blue-200 hidden lg:block"></div>
          
          <div className="space-y-12">
            {steps.map((step, index) => {
              const Icon = step.icon
              const isEven = index % 2 === 0
              
              return (
                <div key={index} className={`flex flex-col lg:flex-row items-center gap-8 ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}>
                  <div className={`flex-1 ${isEven ? 'lg:text-right' : 'lg:text-left'}`}>
                    <div className={`bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow ${isEven ? 'lg:mr-8' : 'lg:ml-8'}`}>
                      <div className={`flex items-start gap-4 ${isEven ? 'lg:flex-row-reverse' : ''}`}>
                        <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                          <Icon className="w-7 h-7 text-blue-600" />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-2">
                            <span className="text-sm font-semibold text-blue-600">Step {index + 1}</span>
                            <span className="text-sm text-gray-500">• {step.time}</span>
                          </div>
                          <h3 className="text-xl font-semibold text-gray-900 mb-2">{step.title}</h3>
                          <p className="text-gray-600">{step.description}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="w-4 h-4 bg-blue-600 rounded-full border-4 border-white shadow-lg hidden lg:block"></div>
                  
                  <div className="flex-1 hidden lg:block"></div>
                </div>
              )
            })}
          </div>
        </div>

        <div className="mt-16 text-center">
          <button className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors transform hover:scale-105">
            Start Your Free Assessment
          </button>
        </div>
      </div>
    </section>
  )
}