'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

export default function ScrollHeader() {
  const [isVisible, setIsVisible] = useState(false)
  const [lastScrollY, setLastScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      
      // Show header when scrolling down after 100px
      // Hide header when scrolling up
      if (currentScrollY > 100) {
        if (currentScrollY > lastScrollY) {
          // Scrolling down
          setIsVisible(true)
        } else {
          // Scrolling up
          setIsVisible(false)
        }
      } else {
        // At top of page
        setIsVisible(false)
      }
      
      setLastScrollY(currentScrollY)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [lastScrollY])

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm border-b border-gray-200 transition-transform duration-300 ${
        isVisible ? 'translate-y-0' : '-translate-y-full'
      }`}
    >
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center">
            <img 
              src="/images/logo.png" 
              alt="Mango Note Logo" 
              className="w-10 h-10 mr-3"
            />
            <span className="hidden sm:block text-xl font-bold text-gray-900">Mango AI Note</span>
          </Link>
          
          <div className="flex items-center space-x-6">
            <Link 
              href="/#features" 
              className="text-gray-600 hover:text-mango-600 transition-colors"
            >
              Features
            </Link>
            <Link 
              href="/#pricing" 
              className="text-gray-600 hover:text-mango-600 transition-colors"
            >
              Pricing
            </Link>
            <Link 
              href="/#faq" 
              className="text-gray-600 hover:text-mango-600 transition-colors"
            >
              FAQ
            </Link>
            <Link 
              href="/contact" 
              className="text-gray-600 hover:text-mango-600 transition-colors"
            >
              Contact
            </Link>
            <Link
              href="https://apps.apple.com/us/app/ai-note-taker-mangonote/id6740802816"
              target="_blank"
              className="bg-mango-600 hover:bg-mango-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors"
            >
              Download
            </Link>
          </div>
        </div>
      </nav>
    </header>
  )
}