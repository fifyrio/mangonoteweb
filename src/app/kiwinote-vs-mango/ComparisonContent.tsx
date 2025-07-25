'use client'

import { useEffect } from 'react'
import Link from 'next/link'

export default function ComparisonContent() {
  useEffect(() => {
    const script = document.createElement('script')
    script.type = 'application/ld+json'
    script.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": "Kiwinote vs Mango AI - Complete Feature & Pricing Comparison",
      "description": "Comprehensive comparison between Kiwinote and Mango AI note-taking applications, covering features, pricing, and user experience.",
      "author": {
        "@type": "Organization",
        "name": "Mango AI Team"
      },
      "publisher": {
        "@type": "Organization",
        "name": "Mango AI",
        "logo": {
          "@type": "ImageObject",
          "url": "https://www.mangonote.app/images/logo.png"
        }
      },
      "datePublished": "2024-07-25",
      "dateModified": "2024-07-25",
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": "https://www.mangonote.app/kiwinote-vs-mango"
      },
      "about": [
        {
          "@type": "SoftwareApplication",
          "name": "Kiwinote",
          "applicationCategory": "ProductivityApplication",
          "operatingSystem": "iOS"
        },
        {
          "@type": "SoftwareApplication",
          "name": "Mango AI",
          "applicationCategory": "ProductivityApplication",
          "operatingSystem": "iOS"
        }
      ]
    })
    document.head.appendChild(script)

    return () => {
      document.head.removeChild(script)
    }
  }, [])

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-mango-50 to-orange-50 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Kiwinote vs Mango AI
              <span className="block text-mango-600 text-2xl md:text-3xl mt-2">
                Complete Feature & Pricing Comparison
              </span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              A detailed comparison between two popular AI note-taking tools, helping you choose the best AI assistant for your learning and productivity needs.
            </p>
            <div className="flex flex-wrap justify-center gap-3 text-sm">
              <span className="bg-white/80 backdrop-blur-sm rounded-full px-4 py-2 text-gray-700">
                Updated July 2024
              </span>
              <span className="bg-white/80 backdrop-blur-sm rounded-full px-4 py-2 text-gray-700">
                Expert Analysis
              </span>
              <span className="bg-white/80 backdrop-blur-sm rounded-full px-4 py-2 text-gray-700">
                Unbiased Review
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-6xl">
          {/* Feature Comparison */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              ✅ Feature Comparison
            </h2>
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-4 text-left text-lg font-semibold text-gray-900">Feature</th>
                      <th className="px-6 py-4 text-center text-lg font-semibold text-blue-600">Kiwinote</th>
                      <th className="px-6 py-4 text-center text-lg font-semibold text-mango-600">Mango AI</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 font-medium text-gray-900">Audio to Text</td>
                      <td className="px-6 py-4 text-center">
                        <span className="inline-flex items-center text-green-600">
                          <i className="ri-check-line text-xl mr-1"></i>
                          Yes
                        </span>
                      </td>
                      <td className="px-6 py-4 text-center">
                        <span className="inline-flex items-center text-green-600">
                          <i className="ri-check-line text-xl mr-1"></i>
                          Yes
                        </span>
                      </td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 font-medium text-gray-900">PDF / YouTube Import</td>
                      <td className="px-6 py-4 text-center">
                        <span className="inline-flex items-center text-green-600">
                          <i className="ri-check-line text-xl mr-1"></i>
                          Yes
                        </span>
                      </td>
                      <td className="px-6 py-4 text-center">
                        <span className="inline-flex items-center text-green-600">
                          <i className="ri-check-line text-xl mr-1"></i>
                          Yes
                        </span>
                      </td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 font-medium text-gray-900">AI Summarization</td>
                      <td className="px-6 py-4 text-center">
                        <span className="inline-flex items-center text-green-600">
                          <i className="ri-check-line text-xl mr-1"></i>
                          Yes
                        </span>
                      </td>
                      <td className="px-6 py-4 text-center">
                        <span className="inline-flex items-center text-green-600">
                          <i className="ri-check-line text-xl mr-1"></i>
                          One-click summarization
                        </span>
                      </td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 font-medium text-gray-900">Flashcards & Quizzes</td>
                      <td className="px-6 py-4 text-center">
                        <span className="inline-flex items-center text-green-600">
                          <i className="ri-check-line text-xl mr-1"></i>
                          Yes
                        </span>
                      </td>
                      <td className="px-6 py-4 text-center">
                        <span className="inline-flex items-center text-green-600">
                          <i className="ri-check-line text-xl mr-1"></i>
                          Yes
                        </span>
                      </td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 font-medium text-gray-900">Mind Mapping</td>
                      <td className="px-6 py-4 text-center">
                        <span className="inline-flex items-center text-red-600">
                          <i className="ri-close-line text-xl mr-1"></i>
                          No
                        </span>
                      </td>
                      <td className="px-6 py-4 text-center">
                        <span className="inline-flex items-center text-red-600">
                          <i className="ri-close-line text-xl mr-1"></i>
                          No
                        </span>
                      </td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 font-medium text-gray-900">Chat with Notes (Chatbot)</td>
                      <td className="px-6 py-4 text-center">
                        <span className="inline-flex items-center text-green-600">
                          <i className="ri-check-line text-xl mr-1"></i>
                          Yes
                        </span>
                      </td>
                      <td className="px-6 py-4 text-center">
                        <span className="inline-flex items-center text-red-600">
                          <i className="ri-close-line text-xl mr-1"></i>
                          No
                        </span>
                      </td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 font-medium text-gray-900">Visual Elements in Notes</td>
                      <td className="px-6 py-4 text-center">
                        <span className="inline-flex items-center text-green-600">
                          <i className="ri-check-line text-xl mr-1"></i>
                          Tables, emojis, diagrams
                        </span>
                      </td>
                      <td className="px-6 py-4 text-center">
                        <span className="inline-flex items-center text-red-600">
                          <i className="ri-close-line text-xl mr-1"></i>
                          Not supported
                        </span>
                      </td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 font-medium text-gray-900">Cross-Platform Sync</td>
                      <td className="px-6 py-4 text-center">
                        <span className="inline-flex items-center text-green-600">
                          <i className="ri-check-line text-xl mr-1"></i>
                          App + Web
                        </span>
                      </td>
                      <td className="px-6 py-4 text-center">
                        <span className="inline-flex items-center text-green-600">
                          <i className="ri-check-line text-xl mr-1"></i>
                          App + Web
                        </span>
                      </td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 font-medium text-gray-900">Interface Style</td>
                      <td className="px-6 py-4 text-center text-gray-600">Simple</td>
                      <td className="px-6 py-4 text-center text-gray-600">Minimal and Refreshing</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* Pricing Comparison */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              💳 Pricing Comparison
            </h2>
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-4 text-left text-lg font-semibold text-gray-900">Plan Type</th>
                      <th className="px-6 py-4 text-center text-lg font-semibold text-blue-600">Kiwinote</th>
                      <th className="px-6 py-4 text-center text-lg font-semibold text-mango-600">Mango AI</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 font-medium text-gray-900">Weekly</td>
                      <td className="px-6 py-4 text-center text-gray-900 font-semibold">$8.99</td>
                      <td className="px-6 py-4 text-center">
                        <span className="text-red-600 font-medium">❌ Not available</span>
                      </td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 font-medium text-gray-900">Monthly</td>
                      <td className="px-6 py-4 text-center text-gray-900 font-semibold">$8.99 / $11.99</td>
                      <td className="px-6 py-4 text-center">
                        <span className="text-green-600 font-semibold">✅ $6.99</span>
                      </td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 font-medium text-gray-900">Yearly</td>
                      <td className="px-6 py-4 text-center text-gray-900 font-semibold">$49.99 / $69.99</td>
                      <td className="px-6 py-4 text-center">
                        <span className="text-green-600 font-semibold">✅ $49.99</span>
                      </td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 font-medium text-gray-900">Subscription Tiers</td>
                      <td className="px-6 py-4 text-center text-gray-600">Single Tier</td>
                      <td className="px-6 py-4 text-center text-gray-600">Single Tier (Pro)</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* Summary */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              🧠 Summary & Recommendations
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {/* Kiwinote */}
              <div className="bg-white rounded-2xl shadow-lg p-8 border-l-4 border-blue-500">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                    <i className="ri-robot-line text-2xl text-blue-600"></i>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">Kiwinote</h3>
                </div>
                
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-green-600 mb-3">✅ Strengths</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <i className="ri-check-line text-green-500 mr-2 mt-1"></i>
                      Lightweight chatbot functionality
                    </li>
                    <li className="flex items-start">
                      <i className="ri-check-line text-green-500 mr-2 mt-1"></i>
                      Visual-rich note formatting
                    </li>
                    <li className="flex items-start">
                      <i className="ri-check-line text-green-500 mr-2 mt-1"></i>
                      Advanced visual elements support
                    </li>
                  </ul>
                </div>

                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-red-600 mb-3">❌ Weaknesses</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <i className="ri-close-line text-red-500 mr-2 mt-1"></i>
                      No mind mapping feature
                    </li>
                    <li className="flex items-start">
                      <i className="ri-close-line text-red-500 mr-2 mt-1"></i>
                      Basic UI design
                    </li>
                  </ul>
                </div>

                <div className="bg-blue-50 rounded-lg p-4">
                  <h4 className="font-semibold text-blue-800 mb-2">Best For:</h4>
                  <p className="text-blue-700">Budget-conscious power users who want chatbot functionality and rich visual content in their notes.</p>
                </div>
              </div>

              {/* Mango AI */}
              <div className="bg-white rounded-2xl shadow-lg p-8 border-l-4 border-mango-500">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-mango-100 rounded-lg flex items-center justify-center mr-4">
                    <i className="ri-brain-line text-2xl text-mango-600"></i>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">Mango AI</h3>
                </div>
                
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-green-600 mb-3">✅ Strengths</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <i className="ri-check-line text-green-500 mr-2 mt-1"></i>
                      Clean and refreshing UI
                    </li>
                    <li className="flex items-start">
                      <i className="ri-check-line text-green-500 mr-2 mt-1"></i>
                      More affordable pricing plans
                    </li>
                    <li className="flex items-start">
                      <i className="ri-check-line text-green-500 mr-2 mt-1"></i>
                      Strong focus on Feynman learning method
                    </li>
                  </ul>
                </div>

                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-red-600 mb-3">❌ Weaknesses</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <i className="ri-close-line text-red-500 mr-2 mt-1"></i>
                      No chatbot functionality
                    </li>
                    <li className="flex items-start">
                      <i className="ri-close-line text-red-500 mr-2 mt-1"></i>
                      Limited visual content support
                    </li>
                  </ul>
                </div>

                <div className="bg-mango-50 rounded-lg p-4">
                  <h4 className="font-semibold text-mango-800 mb-2">Best For:</h4>
                  <p className="text-mango-700">Students and content creators who need simple, fast summarization and prefer a clean, minimal interface.</p>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-gradient-to-r from-mango-500 to-orange-500 rounded-2xl p-8 text-center text-white">
            <h2 className="text-3xl font-bold mb-4">Ready to Try Mango AI?</h2>
            <p className="text-xl mb-6 opacity-90">
              Experience the most lightweight, efficient, and creator-friendly AI learning assistant
            </p>
            <Link 
              href="https://apps.apple.com/us/app/ai-note-taker-mangonote/id6740802816"
              target="_blank"
              className="inline-flex items-center bg-white text-mango-600 font-semibold px-8 py-4 rounded-xl hover:bg-gray-100 transition-colors duration-200"
            >
              <i className="ri-download-line mr-2"></i>
              Download Mango AI
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}