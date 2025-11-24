'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Phone, MapPin, Menu, X } from './icons'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      {/* Top Bar */}
      <div className="bg-blue-900 text-white py-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row justify-between items-center text-sm">
            <div className="flex items-center gap-6">
              <a href="tel:+19293108968" className="flex items-center gap-2 hover:text-blue-200">
                <Phone className="w-4 h-4" />
                <span className="font-semibold">+1-929-310-8968</span>
              </a>
              <div className="hidden sm:flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                <span>40 Alexandre St, Toronto, ON M4Y 1B5</span>
              </div>
            </div>
            <div className="flex items-center gap-4 mt-2 sm:mt-0">
              <a href="#consultation" className="bg-green-500 hover:bg-green-600 px-4 py-1 rounded-full text-xs font-semibold transition-colors">
                FREE CONSULTATION
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Link href="/" className="flex items-center">
                <span className="text-2xl font-bold text-blue-900">MC Tax Shelter</span>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <Link href="/" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
                Home
              </Link>
              <Link href="#services" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
                Services
              </Link>
              <Link href="#dext" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
                Dext Partnership
              </Link>
              <Link href="#how-it-works" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
                Process
              </Link>
              <Link href="/contact" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
                Contact
              </Link>
              <Link href="#consultation" className="bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                Get Started
              </Link>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-700 hover:text-blue-600 focus:outline-none"
              >
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link
                href="/"
                className="block px-3 py-2 text-gray-700 hover:text-blue-600 font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                href="#services"
                className="block px-3 py-2 text-gray-700 hover:text-blue-600 font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Services
              </Link>
              <Link
                href="#dext"
                className="block px-3 py-2 text-gray-700 hover:text-blue-600 font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Dext Partnership
              </Link>
              <Link
                href="#how-it-works"
                className="block px-3 py-2 text-gray-700 hover:text-blue-600 font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Process
              </Link>
              <Link
                href="/contact"
                className="block px-3 py-2 text-gray-700 hover:text-blue-600 font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
              <Link
                href="#consultation"
                className="block mx-3 my-2 bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors text-center"
                onClick={() => setIsMenuOpen(false)}
              >
                Get Started
              </Link>
            </div>
            <div className="px-4 py-3 bg-gray-50 border-t text-sm text-gray-600">
              <div className="flex items-center gap-2 mb-2">
                <MapPin className="w-4 h-4" />
                <span>40 Alexandre St, Toronto, ON M4Y 1B5</span>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}