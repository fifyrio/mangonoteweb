export default function HeroSection() {
  const handleAppStoreClick = () => {
    window.open('https://apps.apple.com/us/app/ai-note-taker-mangonote/id6740802816', '_blank')
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-mango-50 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-20 -right-20 w-80 h-80 bg-mango-200 rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-20 -left-20 w-60 h-60 bg-mango-300 rounded-full opacity-20 animate-pulse delay-1000"></div>
      </div>

      <div className="container relative z-10">
        <div className="text-center max-w-4xl mx-auto" data-aos="fade-up">
          {/* Logo */}
          <div className="mb-8">
            <div className="inline-flex items-center justify-center mb-4">
              <img 
                src="/images/logo.png" 
                alt="Mango Note Logo" 
                className="w-32 h-32 md:w-40 md:h-40"
              />
            </div>
          </div>

          {/* Headline */}
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            AI-Powered Note Taking{' '}
            <span className="text-mango-600">Made Simple</span>
          </h1>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Transform your iPhone into the ultimate AI note-taking companion. Convert audio, PDFs, and more into organized notes, mind maps, and flashcards instantly.
          </p>

          {/* Value proposition */}
          <div className="flex flex-wrap justify-center gap-4 mb-12 text-sm md:text-base">
            <div className="flex items-center bg-white/50 backdrop-blur-sm rounded-full px-4 py-2">
              <i className="ri-mic-line text-mango-600 mr-2"></i>
              <span>Voice to Text</span>
            </div>
            <div className="flex items-center bg-white/50 backdrop-blur-sm rounded-full px-4 py-2">
              <i className="ri-file-pdf-line text-mango-600 mr-2"></i>
              <span>PDF Processing</span>
            </div>
            <div className="flex items-center bg-white/50 backdrop-blur-sm rounded-full px-4 py-2">
              <i className="ri-brain-line text-mango-600 mr-2"></i>
              <span>AI Mind Maps</span>
            </div>
            <div className="flex items-center bg-white/50 backdrop-blur-sm rounded-full px-4 py-2">
              <i className="ri-smartphone-line text-mango-600 mr-2"></i>
              <span>iPhone Native</span>
            </div>
          </div>

          {/* Demo Video */}
          <div className="flex justify-center mb-8">
            <div className="w-48 md:w-56">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-black">
                <iframe
                  src="https://www.youtube.com/embed/7mf0HqH4PAQ"
                  className="w-full aspect-[9/16]"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  title="Mango Note Demo"
                ></iframe>
              </div>
              <p className="text-xs text-gray-500 mt-2 text-center">See it in action</p>
            </div>
          </div>

          {/* CTA Button */}
          <div className="flex justify-center mb-12">
            <button 
              onClick={handleAppStoreClick}
              className="flex items-center justify-center bg-gray-900 hover:bg-gray-800 text-white font-semibold py-4 px-8 rounded-xl transition-all duration-200 transform hover:scale-105 active:scale-95 shadow-lg"
            >
              <svg className="w-6 h-6 mr-3" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
              </svg>
              Download on App Store
            </button>
          </div>

          {/* Social proof */}
          <div className="text-center text-gray-500" data-aos="fade-up" data-aos-delay="300">
            <p className="text-sm mb-4">Available exclusively on iPhone</p>
            <div className="flex justify-center items-center space-x-4">
              <div className="flex items-center">
                <div className="flex text-mango-500">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <i key={i} className="ri-star-fill text-lg"></i>
                  ))}
                </div>
                <span className="text-sm text-gray-500 ml-2">App Store Rating</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-gray-400 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  )
}