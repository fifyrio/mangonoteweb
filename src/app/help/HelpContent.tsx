'use client'

import { useEffect } from 'react'
import AOS from 'aos'
import Link from 'next/link'

export default function HelpContent() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      offset: 100,
      once: true,
    })
  }, [])

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <Link href="/" className="text-2xl font-bold text-mango-600">
              MangoNote
            </Link>
            <nav className="hidden md:flex space-x-8">
              <Link href="/" className="text-gray-600 hover:text-mango-600 transition-colors">
                Home
              </Link>
              <Link href="/contact" className="text-gray-600 hover:text-mango-600 transition-colors">
                Contact
              </Link>
            </nav>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Page Header */}
          <div className="text-center mb-16" data-aos="fade-up">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Help Center
            </h1>
            <p className="text-xl text-gray-600">
              Everything you need to know about MangoNote
            </p>
          </div>

          {/* Quick Navigation */}
          <div className="bg-white rounded-lg shadow-sm p-6 mb-12" data-aos="fade-up">
            <h2 className="text-2xl font-semibold mb-4">Quick Navigation</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <a href="#getting-started" className="flex items-center p-3 rounded-lg border hover:border-mango-500 hover:bg-mango-50 transition-colors">
                <i className="ri-rocket-line text-mango-600 text-xl mr-3"></i>
                <span>Getting Started</span>
              </a>
              <a href="#features" className="flex items-center p-3 rounded-lg border hover:border-mango-500 hover:bg-mango-50 transition-colors">
                <i className="ri-star-line text-mango-600 text-xl mr-3"></i>
                <span>Features Guide</span>
              </a>
              <a href="#troubleshooting" className="flex items-center p-3 rounded-lg border hover:border-mango-500 hover:bg-mango-50 transition-colors">
                <i className="ri-tools-line text-mango-600 text-xl mr-3"></i>
                <span>Troubleshooting</span>
              </a>
              <a href="#faq" className="flex items-center p-3 rounded-lg border hover:border-mango-500 hover:bg-mango-50 transition-colors">
                <i className="ri-question-line text-mango-600 text-xl mr-3"></i>
                <span>FAQ</span>
              </a>
            </div>
          </div>

          {/* Getting Started */}
          <div id="getting-started" className="bg-white rounded-lg shadow-sm p-8 mb-12" data-aos="fade-up">
            <h2 className="text-3xl font-bold mb-6">Getting Started</h2>
            
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-semibold mb-3">1. Sign Up</h3>
                <p className="text-gray-600 mb-4">
                  Create your account using Google or Apple Sign-In for a seamless experience.
                </p>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-sm text-gray-700">
                    <strong>Note:</strong> We use OAuth 2.0 for secure authentication. Your data is protected and we never store your password.
                  </p>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3">2. Upload Your First Content</h3>
                <p className="text-gray-600 mb-4">
                  Start by uploading audio files, PDFs, or recording directly in the app.
                </p>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  <li>Supported audio formats: MP3, WAV, M4A, AAC</li>
                  <li>Supported document formats: PDF</li>
                  <li>Maximum file size: 100MB for audio, 50MB for PDFs</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3">3. Choose Your Output Format</h3>
                <p className="text-gray-600 mb-4">
                  Select how you want your content processed:
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="border rounded-lg p-4">
                    <h4 className="font-semibold mb-2">📝 Notes</h4>
                    <p className="text-sm text-gray-600">Structured summaries with key points</p>
                  </div>
                  <div className="border rounded-lg p-4">
                    <h4 className="font-semibold mb-2">🗺️ Mind Maps</h4>
                    <p className="text-sm text-gray-600">Visual knowledge organization</p>
                  </div>
                  <div className="border rounded-lg p-4">
                    <h4 className="font-semibold mb-2">❓ Quizzes</h4>
                    <p className="text-sm text-gray-600">Practice questions for retention</p>
                  </div>
                  <div className="border rounded-lg p-4">
                    <h4 className="font-semibold mb-2">🃏 Flashcards</h4>
                    <p className="text-sm text-gray-600">Spaced repetition learning</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Features Guide */}
          <div id="features" className="bg-white rounded-lg shadow-sm p-8 mb-12" data-aos="fade-up">
            <h2 className="text-3xl font-bold mb-6">Features Guide</h2>
            
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-semibold mb-3 flex items-center">
                  <i className="ri-mic-line text-mango-600 text-xl mr-3"></i>
                  Voice Recording & Transcription
                </h3>
                <p className="text-gray-600 mb-4">
                  Record lectures, meetings, or your thoughts with AI-powered transcription.
                </p>
                <div className="bg-mango-50 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">How to use:</h4>
                  <ol className="list-decimal list-inside text-sm text-gray-700 space-y-1">
                    <li>Tap the microphone icon to start recording</li>
                    <li>Speak clearly for best transcription results</li>
                    <li>Tap again to stop recording</li>
                    <li>Review and edit the transcription if needed</li>
                  </ol>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3 flex items-center">
                  <i className="ri-file-pdf-line text-mango-600 text-xl mr-3"></i>
                  PDF Analysis
                </h3>
                <p className="text-gray-600 mb-4">
                  Upload PDFs and let AI extract key information and create summaries.
                </p>
                <div className="bg-mango-50 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">Supported content:</h4>
                  <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
                    <li>Academic papers and research documents</li>
                    <li>Business reports and presentations</li>
                    <li>Textbooks and educational materials</li>
                    <li>Articles and whitepapers</li>
                  </ul>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3 flex items-center">
                  <i className="ri-mind-map text-mango-600 text-xl mr-3"></i>
                  Mind Maps
                </h3>
                <p className="text-gray-600 mb-4">
                  Automatically generate visual mind maps from your content to understand relationships and connections.
                </p>
                <div className="bg-mango-50 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">Benefits:</h4>
                  <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
                    <li>Visual learning and memory retention</li>
                    <li>Identify key concepts and their relationships</li>
                    <li>Easy to share and collaborate</li>
                    <li>Export in multiple formats</li>
                  </ul>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3 flex items-center">
                  <i className="ri-question-line text-mango-600 text-xl mr-3"></i>
                  Smart Quizzes & Flashcards
                </h3>
                <p className="text-gray-600 mb-4">
                  Generate practice questions and flashcards automatically to test your knowledge.
                </p>
                <div className="bg-mango-50 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">Quiz types:</h4>
                  <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
                    <li>Multiple choice questions</li>
                    <li>True/False questions</li>
                    <li>Fill-in-the-blank</li>
                    <li>Short answer questions</li>
                  </ul>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3 flex items-center">
                  <i className="ri-chat-3-line text-mango-600 text-xl mr-3"></i>
                  AI Chat Assistant
                </h3>
                <p className="text-gray-600 mb-4">
                  Ask questions about your notes and get instant AI-powered responses for deeper understanding.
                </p>
                <div className="bg-mango-50 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">What you can ask:</h4>
                  <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
                    <li>Clarify concepts from your notes</li>
                    <li>Get additional examples and explanations</li>
                    <li>Ask follow-up questions</li>
                    <li>Request summaries of specific topics</li>
                  </ul>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3 flex items-center">
                  <i className="ri-smartphone-line text-mango-600 text-xl mr-3"></i>
                  Cross-Platform Sync
                </h3>
                <p className="text-gray-600 mb-4">
                  Access your notes, mind maps, and study materials across all your devices seamlessly.
                </p>
                <div className="bg-mango-50 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">Sync features:</h4>
                  <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
                    <li>Real-time synchronization</li>
                    <li>Offline access to downloaded content</li>
                    <li>Automatic backup to cloud</li>
                    <li>Version history and recovery</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Troubleshooting */}
          <div id="troubleshooting" className="bg-white rounded-lg shadow-sm p-8 mb-12" data-aos="fade-up">
            <h2 className="text-3xl font-bold mb-6">Troubleshooting</h2>
            
            <div className="space-y-6">
              <div className="border-l-4 border-mango-500 pl-4">
                <h3 className="text-lg font-semibold mb-2">Audio not recording properly</h3>
                <p className="text-gray-600 mb-2">Check your device's microphone permissions and ensure you're in a quiet environment.</p>
                <div className="text-sm text-gray-500">
                  <strong>Solution:</strong> Go to Settings &gt; Privacy &amp; Security &gt; Microphone and enable MangoNote.
                </div>
              </div>

              <div className="border-l-4 border-mango-500 pl-4">
                <h3 className="text-lg font-semibold mb-2">PDF upload fails</h3>
                <p className="text-gray-600 mb-2">Ensure your PDF is not password-protected and is under 50MB.</p>
                <div className="text-sm text-gray-500">
                  <strong>Solution:</strong> Remove password protection or compress the file if it's too large.
                </div>
              </div>

              <div className="border-l-4 border-mango-500 pl-4">
                <h3 className="text-lg font-semibold mb-2">Sync issues</h3>
                <p className="text-gray-600 mb-2">Check your internet connection and ensure you're signed in to the same account.</p>
                <div className="text-sm text-gray-500">
                  <strong>Solution:</strong> Try signing out and back in, or check your network connection.
                </div>
              </div>

              <div className="border-l-4 border-mango-500 pl-4">
                <h3 className="text-lg font-semibold mb-2">AI responses are slow</h3>
                <p className="text-gray-600 mb-2">This can happen during peak usage times or with complex queries.</p>
                <div className="text-sm text-gray-500">
                  <strong>Solution:</strong> Wait a moment and try again, or break down your question into smaller parts.
                </div>
              </div>
            </div>
          </div>

          {/* FAQ */}
          <div id="faq" className="bg-white rounded-lg shadow-sm p-8 mb-12" data-aos="fade-up">
            <h2 className="text-3xl font-bold mb-6">Frequently Asked Questions</h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold mb-2">Is my data secure?</h3>
                <p className="text-gray-600">
                  Yes, we use industry-standard encryption and security practices. Your data is encrypted in transit and at rest. We never share your personal information with third parties.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-2">What languages are supported?</h3>
                <p className="text-gray-600">
                  Currently, we support English for transcription and AI features. We're working on adding more languages in future updates.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-2">Can I export my notes?</h3>
                <p className="text-gray-600">
                  Yes, you can export your notes, mind maps, and quizzes in various formats including PDF, PNG, and text files.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-2">Is there a limit on file uploads?</h3>
                <p className="text-gray-600">
                  Free users can upload up to 10 files per month. Pro users have unlimited uploads and larger file size limits.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-2">How accurate is the AI transcription?</h3>
                <p className="text-gray-600">
                  Our AI transcription is highly accurate for clear speech in quiet environments. Accuracy may vary with background noise, accents, or technical terminology.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-2">Can I collaborate with others?</h3>
                <p className="text-gray-600">
                  Currently, collaboration features are available for Pro users. You can share notes and mind maps with team members.
                </p>
              </div>
            </div>
          </div>

          {/* Contact Support */}
          <div className="bg-mango-50 rounded-lg p-8 text-center" data-aos="fade-up">
            <h2 className="text-2xl font-bold mb-4">Still Need Help?</h2>
            <p className="text-gray-600 mb-6">
              Our support team is here to help you get the most out of MangoNote.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact" 
                className="bg-mango-600 text-white px-6 py-3 rounded-lg hover:bg-mango-700 transition-colors"
              >
                Contact Support
              </Link>
              <a 
                href="mailto:support@mangonote.com" 
                className="border border-mango-600 text-mango-600 px-6 py-3 rounded-lg hover:bg-mango-600 hover:text-white transition-colors"
              >
                Email Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}