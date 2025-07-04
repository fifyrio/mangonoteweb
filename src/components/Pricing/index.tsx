export default function Pricing() {
  const handleAppStoreClick = () => {
    window.open('https://apps.apple.com/us/app/ai-note-taker-mangonote/id6740802816', '_blank')
  }

  return (
    <section className="py-20 bg-gray-50">
      <div className="container">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Free to Start, Upgrade When Ready
          </h2>
          <p className="text-xl text-gray-600">
            Try MangoNote for free, then unlock premium AI features when you need them
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
          <div className="bg-white p-8 rounded-xl shadow-lg" data-aos="fade-up" data-aos-delay="100">
            <h3 className="text-2xl font-bold mb-4">Free Plan</h3>
            <div className="text-4xl font-bold text-mango-600 mb-4">$0<span className="text-lg text-gray-500">/month</span></div>
            <ul className="space-y-3 mb-8">
              <li className="flex items-center">
                <i className="ri-check-line text-green-500 mr-2"></i>
                <span>Basic note conversion</span>
              </li>
              <li className="flex items-center">
                <i className="ri-check-line text-green-500 mr-2"></i>
                <span>5 uploads per month</span>
              </li>
              <li className="flex items-center">
                <i className="ri-check-line text-green-500 mr-2"></i>
                <span>Basic mind maps</span>
              </li>
            </ul>
            <button onClick={handleAppStoreClick} className="w-full btn-secondary">Download Free</button>
          </div>
          
          <div className="bg-white p-8 rounded-xl shadow-lg border-2 border-mango-500 relative" data-aos="fade-up" data-aos-delay="200">
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-mango-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
              Most Popular
            </div>
            <h3 className="text-2xl font-bold mb-4">Pro Plan</h3>
            <div className="text-4xl font-bold text-mango-600 mb-4">$9.99<span className="text-lg text-gray-500">/month</span></div>
            <ul className="space-y-3 mb-8">
              <li className="flex items-center">
                <i className="ri-check-line text-green-500 mr-2"></i>
                <span>Unlimited uploads</span>
              </li>
              <li className="flex items-center">
                <i className="ri-check-line text-green-500 mr-2"></i>
                <span>Advanced PDF scanning</span>
              </li>
              <li className="flex items-center">
                <i className="ri-check-line text-green-500 mr-2"></i>
                <span>Multi-format export</span>
              </li>
              <li className="flex items-center">
                <i className="ri-check-line text-green-500 mr-2"></i>
                <span>Priority support</span>
              </li>
            </ul>
            <button onClick={handleAppStoreClick} className="w-full btn-primary">Download & Upgrade</button>
          </div>
        </div>
      </div>
    </section>
  )
}