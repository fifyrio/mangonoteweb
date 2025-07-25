'use client'

import { useState } from 'react'

export function QRCodeWidget() {
  const [isVisible, setIsVisible] = useState(true)

  if (!isVisible) return null

  return (
    <div className="fixed bottom-6 right-6 z-40 group hidden md:block">
      <div className="bg-white rounded-3xl shadow-2xl border border-gray-100 overflow-hidden backdrop-blur-sm transform transition-all duration-300 hover:scale-105 hover:shadow-3xl">
        {/* Header with gradient */}
        <div className="bg-gradient-to-r from-mango-500 to-orange-500 px-8 py-5 relative">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                <i className="ri-smartphone-line text-white text-base"></i>
              </div>
              <span className="text-white font-semibold text-base">Download App</span>
            </div>
            
            {/* Close button */}
            <button
              onClick={() => setIsVisible(false)}
              className="w-8 h-8 flex items-center justify-center text-white/80 hover:text-white hover:bg-white/20 transition-all duration-200 rounded-full"
            >
              <i className="ri-close-line text-base"></i>
            </button>
          </div>
          
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-20 h-20 bg-white/10 rounded-full -translate-y-10 translate-x-10"></div>
          <div className="absolute bottom-0 left-0 w-16 h-16 bg-white/10 rounded-full translate-y-8 -translate-x-8"></div>
        </div>

        {/* QR Code Content */}
        <div className="p-8 text-center">
          {/* QR Code with enhanced styling */}
          <div className="relative mb-4 inline-block">
            <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-5 shadow-inner">
              <img
                src="/images/qr_code.png"
                alt="Download QR Code"
                className="w-36 h-36 mx-auto rounded-lg"
              />
            </div>
            {/* Corner decorations */}
            <div className="absolute -top-1 -left-1 w-3 h-3 border-l-2 border-t-2 border-mango-500 rounded-tl-lg"></div>
            <div className="absolute -top-1 -right-1 w-3 h-3 border-r-2 border-t-2 border-mango-500 rounded-tr-lg"></div>
            <div className="absolute -bottom-1 -left-1 w-3 h-3 border-l-2 border-b-2 border-mango-500 rounded-bl-lg"></div>
            <div className="absolute -bottom-1 -right-1 w-3 h-3 border-r-2 border-b-2 border-mango-500 rounded-br-lg"></div>
          </div>
          
          {/* Text with icon */}
          <div className="space-y-3">
            <div className="flex items-center justify-center space-x-2 text-gray-700">
              <i className="ri-camera-line text-mango-500 text-base"></i>
              <span className="text-sm font-medium">Scan with camera</span>
            </div>
            <p className="text-sm text-gray-500 leading-relaxed max-w-[160px] mx-auto">
              Point your phone's camera to download instantly
            </p>
          </div>

          {/* App Store badge */}
          <div className="mt-5 pt-4 border-t border-gray-100">
            <div className="flex items-center justify-center space-x-1 text-sm text-gray-400">
              <i className="ri-apple-line"></i>
              <span>Available on App Store</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Floating animation dots */}
      <div className="absolute -top-2 -left-2 w-3 h-3 bg-mango-400 rounded-full animate-ping opacity-75"></div>
      <div className="absolute -bottom-2 -right-2 w-2 h-2 bg-orange-400 rounded-full animate-pulse"></div>
    </div>
  )
}