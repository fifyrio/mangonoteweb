import type { Metadata } from 'next'
import dynamic from 'next/dynamic'

const ContactContent = dynamic(() => import('./ContactContent'), {
  ssr: false,
})

export const metadata: Metadata = {
  title: 'Contact Us - Mango AI Note',
  description: 'Get in touch with Mango AI Note team for support, questions, or feedback.',
  alternates: {
    canonical: '/contact',
  },
}

export default function ContactPage() {
  return <ContactContent />
} 