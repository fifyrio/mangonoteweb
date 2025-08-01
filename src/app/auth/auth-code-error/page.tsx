import Link from 'next/link';

export default function AuthCodeErrorPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 to-orange-50 flex items-center justify-center px-4 py-8">
      <div className="max-w-md w-full text-center">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-red-100 rounded-2xl mb-6">
          <span className="text-2xl">❌</span>
        </div>
        
        <h1 className="text-2xl font-bold text-gray-900 mb-4">
          Authentication Error
        </h1>
        
        <p className="text-gray-600 mb-8">
          There was an error processing your authentication request. Please try signing in again.
        </p>
        
        <div className="space-y-4">
          <Link
            href="/sign-in"
            className="block w-full bg-mango-600 hover:bg-mango-700 text-white py-3 px-6 rounded-lg font-medium transition-colors"
          >
            Try Again
          </Link>
          
          <Link
            href="/"
            className="block w-full text-gray-600 hover:text-gray-900 py-3 px-6 rounded-lg font-medium transition-colors"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}