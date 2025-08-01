'use client';

import { useState } from 'react';
import { createClient } from '@/lib/supabase-browser';
import { getOAuthCallbackUrl } from '@/lib/site-url';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function SignInContent() {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const supabase = createClient();

  const handleGoogleSignIn = async () => {
    setIsLoading(true);
    try {
      const { data, error } = await supabase.auth.signInWithOAuth({
        provider: 'google',
        options: {
          redirectTo: getOAuthCallbackUrl('/')
        }
      });
      
      if (error) {
        console.error('Google sign in error:', error);
        setIsLoading(false);
      }
      // Note: Don't set loading to false here on success, as the page will redirect
    } catch (error) {
      console.error('Google sign in error:', error);
      setIsLoading(false);
    }
  };

  const handleAppleSignIn = async () => {
    setIsLoading(true);
    try {
      const { data, error } = await supabase.auth.signInWithOAuth({
        provider: 'apple',
        options: {
          redirectTo: `${window.location.origin}/auth/callback`
        }
      });
      
      if (error) {
        console.error('Apple sign in error:', error);
      }
    } catch (error) {
      console.error('Apple sign in error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 to-orange-50 flex items-center justify-center px-4 py-8">
      <div className="max-w-md w-full">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-2xl mb-6">
            <span className="text-2xl">🥭</span>
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Let AI help you take notes
          </h1>
          <div className="flex items-center justify-center gap-1 mb-2">
            {[...Array(5)].map((_, i) => (
              <span key={i} className="text-yellow-400 text-xl">⭐</span>
            ))}
          </div>
          <p className="text-gray-600 text-lg">
            <span className="font-semibold">170,000+</span>
            <br />
            People loved
          </p>
        </div>

        {/* Sign In Buttons */}
        <div className="space-y-4 mb-8">
          <button
            onClick={handleGoogleSignIn}
            disabled={isLoading}
            className="w-full bg-white hover:bg-gray-50 border border-gray-300 rounded-xl py-4 px-6 flex items-center justify-center gap-3 text-gray-700 font-medium transition-all duration-200 transform hover:scale-[1.02] active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed shadow-sm"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24">
              <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
              <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
              <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
              <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
            </svg>
            Continue with Google
          </button>

          {/* Apple sign-in temporarily hidden */}
          {/* <button
            onClick={handleAppleSignIn}
            disabled={isLoading}
            className="w-full bg-black hover:bg-gray-800 text-white rounded-xl py-4 px-6 flex items-center justify-center gap-3 font-medium transition-all duration-200 transform hover:scale-[1.02] active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed shadow-sm"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
            </svg>
            Continue with Apple
          </button> */}
        </div>

        {/* Terms and Privacy */}
        <div className="text-center text-sm text-gray-500">
          <p>
            By signing in, you agree to our{' '}
            <Link href="/terms" className="text-yellow-600 hover:text-yellow-700 underline">
              Term of Use
            </Link>{' '}
            and{' '}
            <Link href="/privacy" className="text-yellow-600 hover:text-yellow-700 underline">
              Privacy Policy
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}