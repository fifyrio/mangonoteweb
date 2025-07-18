import type { Metadata } from 'next'
import dynamic from 'next/dynamic'

const HelpContent = dynamic(() => import('./HelpContent'), {
  ssr: false,
})

export const metadata: Metadata = {
  title: 'Help Center - Mango AI Note',
  description: 'Get help with MangoNote features, troubleshooting, and frequently asked questions. Learn how to use AI-powered note-taking tools.',
  alternates: {
    canonical: '/help',
  },
}

export default function HelpPage() {
  return <HelpContent />
} 