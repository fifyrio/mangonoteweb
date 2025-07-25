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
            <span className="hidden sm:block text-xl font-bold text-gray-900">Mango AI Note</span>
          </Link>
          
          <div className="flex items-center">
            <Link
              href="https://apps.apple.com/us/app/ai-note-taker-mangonote/id6740802816"
              target="_blank"
              className="bg-mango-600 hover:bg-mango-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors"
            >
              Try for free
            </Link>
          </div>
        </div>
      </nav>
    </header>
  )
}