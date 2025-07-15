import Link from 'next/link'

export default function Header() {
  return (
    <header className="bg-white shadow-sm border-b border-gray-200">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center">
            <img 
              src="/images/logo.png" 
              alt="Mango Note Logo" 
              className="w-10 h-10 mr-3"
            />
            <span className="text-xl font-bold text-gray-900">Mango AI Note</span>
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
          </div>
        </div>
      </nav>
    </header>
  )
}