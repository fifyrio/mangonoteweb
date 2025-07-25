'use client'

import { useEffect } from 'react'
import AOS from 'aos'
import ScrollHeader from '@/components/ScrollHeader'
import HeroSection from '@/components/HeroSection'
import Features from '@/components/Features'
import HowItWorks from '@/components/HowItWorks'
import SocialProof from '@/components/SocialProof'
import Pricing from '@/components/Pricing'
import FAQ from '@/components/FAQ'
import Footer from '@/components/Footer'

export default function Home() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      offset: 100,
      once: true,
    })
  }, [])

  return (
    <main className="min-h-screen">
      <ScrollHeader />
      <HeroSection />
      <Features />
      <HowItWorks />
      <SocialProof />
      <Pricing />
      <FAQ />
      <Footer />
    </main>
  )
}