export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="container">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center mb-4">
              <img 
                src="/images/logo.png" 
                alt="Mango Note Logo" 
                className="w-12 h-12 mr-3"
              />
            </div>
            <p className="text-gray-400 mb-4">
              AI-powered learning tools for the modern student and professional.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-mango-500 transition-colors">
                <i className="ri-twitter-line text-xl"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-mango-500 transition-colors">
                <i className="ri-facebook-line text-xl"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-mango-500 transition-colors">
                <i className="ri-linkedin-line text-xl"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-mango-500 transition-colors">
                <i className="ri-wechat-line text-xl"></i>
              </a>
            </div>
          </div>
          
          <div>
            <div className="text-lg font-semibold mb-4">Product</div>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Features</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Pricing</a></li>
              <li><a href="/kiwinote-vs-mango" className="text-gray-400 hover:text-white transition-colors">vs Kiwinote</a></li>
            </ul>
          </div>
          
          <div>
            <div className="text-lg font-semibold mb-4">Support</div>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Help Center</a></li>
              <li><a href="/contact" className="text-gray-400 hover:text-white transition-colors">Contact Us</a></li>
            </ul>
          </div>
          
          <div>
            <div className="text-lg font-semibold mb-4">Legal</div>
            <ul className="space-y-2">
              <li><a href="/privacy" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="/terms" className="text-gray-400 hover:text-white transition-colors">Terms of Service</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
          <p>&copy; 2025 Mango AI Note. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}