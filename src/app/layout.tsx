import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Mango AI Note - Master Everything with AI-Powered Learning',
  description: 'Convert audio and PDFs into notes, mind maps, quizzes, and flashcards in one click. Cross-platform sync and AI-powered learning tools.',
  keywords: ['AI learning', 'note taking', 'mind maps', 'flashcards', 'PDF converter', 'audio transcription'],
  authors: [{ name: 'Mango AI Note Team' }],
  metadataBase: new URL('https://www.mangonote.app'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Mango AI Note - Master Everything with AI-Powered Learning',
    description: 'Convert audio and PDFs into notes, mind maps, quizzes, and flashcards in one click.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mango AI Note',
    description: 'AI-powered learning tools for students and professionals.',
  },
  robots: 'index, follow',
}

export const viewport = 'width=device-width, initial-scale=1'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}