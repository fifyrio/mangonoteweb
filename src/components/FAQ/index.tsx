'use client'

import { useState } from 'react'

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const faqs = [
    {
      question: "How do I upload and process files?",
      answer: "Simply drag and drop your audio files or PDFs into the upload area, or click to browse. Our AI will automatically process and convert them into your chosen format."
    },
    {
      question: "How is my data backed up and synced?",
      answer: "All your data is securely stored in the cloud and automatically synced across all your devices. We use enterprise-grade encryption to protect your information."
    },
    {
      question: "What are the privacy and security policies?",
      answer: "We take privacy seriously. Your data is encrypted, never shared with third parties, and you have full control over your content. Read our full privacy policy for details."
    },
    {
      question: "Can I export my notes to other formats?",
      answer: "Yes! Pro users can export notes to PDF, Word, markdown, and other popular formats. Free users have access to basic export options."
    },
    {
      question: "What file types are supported?",
      answer: "We support most audio formats (MP3, WAV, M4A) and document formats (PDF, DOCX, TXT). More formats are being added regularly."
    }
  ]

  return (
    <section className="py-20 bg-white">
      <div className="container">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600">
            Everything you need to know about Mango AI Note
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <div key={index} className="mb-4" data-aos="fade-up" data-aos-delay={index * 100}>
              <button
                className="w-full text-left p-6 bg-gray-50 hover:bg-gray-100 rounded-lg transition-colors"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-semibold text-gray-900">{faq.question}</h3>
                  <i className={`ri-arrow-${openIndex === index ? 'up' : 'down'}-s-line text-gray-500`}></i>
                </div>
                {openIndex === index && (
                  <p className="mt-4 text-gray-600">{faq.answer}</p>
                )}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}