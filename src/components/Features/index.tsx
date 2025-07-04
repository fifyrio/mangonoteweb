export default function Features() {
  return (
    <section className="py-20 bg-white">
      <div className="container">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Everything You Need in Your Pocket
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover the powerful AI features that make MangoNote the ultimate iPhone companion for students and professionals
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="text-center p-6" data-aos="fade-up" data-aos-delay="100">
            <div className="w-16 h-16 bg-mango-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <i className="ri-mic-line text-2xl text-mango-600"></i>
            </div>
            <h3 className="text-xl font-semibold mb-2">Voice Recording</h3>
            <p className="text-gray-600">Record lectures and meetings with AI-powered transcription</p>
          </div>
          
          <div className="text-center p-6" data-aos="fade-up" data-aos-delay="200">
            <div className="w-16 h-16 bg-mango-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <i className="ri-file-pdf-line text-2xl text-mango-600"></i>
            </div>
            <h3 className="text-xl font-semibold mb-2">PDF Analysis</h3>
            <p className="text-gray-600">Extract and summarize content from PDFs instantly</p>
          </div>
          
          <div className="text-center p-6" data-aos="fade-up" data-aos-delay="300">
            <div className="w-16 h-16 bg-mango-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <i className="ri-mind-map text-2xl text-mango-600"></i>
            </div>
            <h3 className="text-xl font-semibold mb-2">Mind Maps</h3>
            <p className="text-gray-600">Generate visual mind maps from your notes automatically</p>
          </div>
          
          <div className="text-center p-6" data-aos="fade-up" data-aos-delay="400">
            <div className="w-16 h-16 bg-mango-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <i className="ri-question-line text-2xl text-mango-600"></i>
            </div>
            <h3 className="text-xl font-semibold mb-2">Smart Quizzes</h3>
            <p className="text-gray-600">Auto-generate quizzes and flashcards for better retention</p>
          </div>
          
          <div className="text-center p-6" data-aos="fade-up" data-aos-delay="500">
            <div className="w-16 h-16 bg-mango-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <i className="ri-chat-3-line text-2xl text-mango-600"></i>
            </div>
            <h3 className="text-xl font-semibold mb-2">AI Chat</h3>
            <p className="text-gray-600">Ask questions about your notes and get instant AI responses</p>
          </div>
          
          <div className="text-center p-6" data-aos="fade-up" data-aos-delay="600">
            <div className="w-16 h-16 bg-mango-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <i className="ri-smartphone-line text-2xl text-mango-600"></i>
            </div>
            <h3 className="text-xl font-semibold mb-2">iPhone Optimized</h3>
            <p className="text-gray-600">Designed specifically for iPhone with seamless performance</p>
          </div>
        </div>
      </div>
    </section>
  )
}