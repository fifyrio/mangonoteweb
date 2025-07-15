'use client'

import { useEffect } from 'react'
import AOS from 'aos'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function ContactPage() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      offset: 100,
      once: true,
    })
  }, [])

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="pt-16">
        {/* Hero Section */}
        <section className="bg-white py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center" data-aos="fade-up">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Get in Touch
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Have questions about Mango AI Note? We're here to help you get the most out of our AI-powered learning platform.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Information */}
        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="grid md:grid-cols-2 gap-12">
                {/* Contact Details */}
                <div data-aos="fade-right">
                  <h2 className="text-3xl font-bold text-gray-900 mb-8">
                    Contact Information
                  </h2>
                  
                  <div className="space-y-6">
                    <div className="flex items-start">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 bg-mango-100 rounded-lg flex items-center justify-center">
                          <svg className="w-6 h-6 text-mango-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                          </svg>
                        </div>
                      </div>
                      <div className="ml-4">
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">Email Support</h3>
                        <p className="text-gray-600 mb-2">
                          For technical support, feature requests, or general inquiries:
                        </p>
                        <a 
                          href="mailto:support@chat-mentor.com" 
                          className="text-mango-600 hover:text-mango-700 font-medium transition-colors"
                        >
                          support@chat-mentor.com
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 bg-mango-100 rounded-lg flex items-center justify-center">
                          <svg className="w-6 h-6 text-mango-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                        </div>
                      </div>
                      <div className="ml-4">
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">Response Time</h3>
                        <p className="text-gray-600">
                          We typically respond within 24 hours during business days.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 bg-mango-100 rounded-lg flex items-center justify-center">
                          <svg className="w-6 h-6 text-mango-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                          </svg>
                        </div>
                      </div>
                      <div className="ml-4">
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">Help Center</h3>
                        <p className="text-gray-600 mb-2">
                          Check our comprehensive documentation and guides:
                        </p>
                        <a href="#" className="text-mango-600 hover:text-mango-700 font-medium transition-colors">
                          Visit Help Center →
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Contact Form */}
                <div data-aos="fade-left">
                  <div className="bg-white rounded-2xl shadow-lg p-8">
                    <h3 className="text-2xl font-bold text-gray-900 mb-6">
                      Send us a Message
                    </h3>
                    
                    <form className="space-y-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                          Full Name
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-mango-500 focus:border-transparent transition-colors"
                          placeholder="Enter your full name"
                        />
                      </div>

                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                          Email Address
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-mango-500 focus:border-transparent transition-colors"
                          placeholder="Enter your email address"
                        />
                      </div>

                      <div>
                        <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                          Subject
                        </label>
                        <select
                          id="subject"
                          name="subject"
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-mango-500 focus:border-transparent transition-colors"
                        >
                          <option value="">Select a subject</option>
                          <option value="technical-support">Technical Support</option>
                          <option value="feature-request">Feature Request</option>
                          <option value="billing">Billing Question</option>
                          <option value="general">General Inquiry</option>
                          <option value="bug-report">Bug Report</option>
                        </select>
                      </div>

                      <div>
                        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                          Message
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          rows={5}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-mango-500 focus:border-transparent transition-colors resize-none"
                          placeholder="Tell us how we can help you..."
                        ></textarea>
                      </div>

                      <button
                        type="submit"
                        className="w-full bg-mango-600 hover:bg-mango-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200"
                      >
                        Send Message
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="bg-white py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center" data-aos="fade-up">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">
                Frequently Asked Questions
              </h2>
              
              <div className="space-y-6 text-left">
                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    How do I get started with Mango AI Note?
                  </h3>
                  <p className="text-gray-600">
                    Simply sign up for an account, upload your first document or audio file, and our AI will automatically generate notes, mind maps, and study materials for you.
                  </p>
                </div>

                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    What file formats are supported?
                  </h3>
                  <p className="text-gray-600">
                    We support PDF documents, audio files (MP3, WAV, M4A), and text files. Our AI can process and convert these into various learning formats.
                  </p>
                </div>

                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Is my data secure?
                  </h3>
                  <p className="text-gray-600">
                    Yes, we take data security seriously. All files are encrypted in transit and at rest, and we never share your personal information with third parties.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
} 