export default function LegalDisclaimer() {
  return (
    <footer className="bg-gray-900 text-gray-400 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-white font-semibold mb-4">MC Tax Shelter</h3>
            <p className="text-sm">
              Professional tax optimization services for individuals and businesses seeking legal tax minimization strategies.
            </p>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">Tax Planning</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Estate Planning</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Business Structure</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Investment Strategy</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-4">Resources</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">Tax Calculator</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Case Studies</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Tax Calendar</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-sm">
              <li className="font-semibold">+1-929-310-8968</li>
              <li>info@mctaxshelter.com</li>
              <li className="text-xs leading-relaxed">40 Alexandre Street<br/>Toronto, Ontario M4Y 1B5</li>
              <li>Mon-Fri: 9AM-6PM EST</li>
              <li>Sat: 10AM-2PM EST</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8">
          <div className="text-sm space-y-4">
            <p className="font-semibold text-white mb-2">Important Legal Disclaimer:</p>
            <p>
              The information provided on this website is for general informational purposes only and should not be construed as tax, legal, or financial advice. 
              Tax laws are complex and change frequently. The strategies discussed may not be suitable for everyone and results will vary based on individual circumstances.
            </p>
            <p>
              All tax strategies implemented through our services are 100% legal and compliant with current IRS regulations. We do not engage in or promote tax evasion, 
              which is illegal. Tax avoidance through legal means is every taxpayer&apos;s right, as established by numerous court precedents including Gregory v. Helvering (1935).
            </p>
            <p>
              Past performance and client testimonials do not guarantee future results. Your specific tax savings will depend on your unique financial situation, 
              applicable tax laws, and proper implementation of strategies. We strongly recommend consulting with our qualified tax professionals before making any tax-related decisions.
            </p>
            <p>
              MC Tax Shelter professionals include IRS Enrolled Agents, Certified Public Accountants (CPAs), and tax attorneys licensed in their respective jurisdictions. 
              Our partnership with Dext (Receipt Bank) is an independent business relationship, and Dext services are subject to their own terms and conditions.
            </p>
          </div>
          
          <div className="mt-8 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm">
              © 2024 MC Tax Shelter. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-white transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}