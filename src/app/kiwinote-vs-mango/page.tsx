import type { Metadata } from 'next'
import dynamic from 'next/dynamic'

const ComparisonContent = dynamic(() => import('./ComparisonContent'), {
  ssr: false,
})

export const metadata: Metadata = {
  title: 'Kiwinote vs Mango AI - Complete Feature & Pricing Comparison 2024',
  description: 'Compare Kiwinote vs Mango AI note-taking apps. Feature comparison, pricing analysis, and expert recommendations for students and content creators.',
  keywords: 'Kiwinote vs Mango AI, AI note taking comparison, best note taking apps, student productivity tools, content creator tools',
  openGraph: {
    title: 'Kiwinote vs Mango AI - Which AI Note App is Better?',
    description: 'Detailed comparison of Kiwinote and Mango AI note-taking apps. Compare features, pricing, and find the best AI assistant for your needs.',
    type: 'article',
    url: '/kiwinote-vs-mango',
    images: [
      {
        url: '/images/kiwinote-vs-mango-comparison.jpg',
        width: 1200,
        height: 630,
        alt: 'Kiwinote vs Mango AI Comparison',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Kiwinote vs Mango AI - Complete Comparison',
    description: 'Compare features, pricing, and capabilities of Kiwinote vs Mango AI note-taking apps.',
    images: ['/images/kiwinote-vs-mango-comparison.jpg'],
  },
  alternates: {
    canonical: '/kiwinote-vs-mango',
  },
}

export default function ComparisonPage() {
  return <ComparisonContent />
}