export default function SocialProof() {
  return (
    <section className="py-20 bg-white">
      <div className="container">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Loved by Learners Worldwide
          </h2>
          <p className="text-xl text-gray-600">
            Join 200,000+ users who trust Mango AI Note
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-gray-50 p-8 rounded-xl" data-aos="fade-up" data-aos-delay="100">
            <div className="flex items-center mb-4">
              <div className="flex text-mango-500">
                {[...Array(5)].map((_, i) => (
                  <i key={i} className="ri-star-fill"></i>
                ))}
              </div>
              <span className="ml-2 text-gray-600">5.0</span>
            </div>
            <p className="text-gray-600 mb-4">"Game-changer for my studies! Converts my lecture recordings into perfect notes."</p>
            <div className="font-semibold">Sarah M.</div>
            <div className="text-sm text-gray-500">University Student</div>
          </div>
          
          <div className="bg-gray-50 p-8 rounded-xl" data-aos="fade-up" data-aos-delay="200">
            <div className="flex items-center mb-4">
              <div className="flex text-mango-500">
                {[...Array(5)].map((_, i) => (
                  <i key={i} className="ri-star-fill"></i>
                ))}
              </div>
              <span className="ml-2 text-gray-600">5.0</span>
            </div>
            <p className="text-gray-600 mb-4">"The mind maps feature helps me understand complex topics visually."</p>
            <div className="font-semibold">John D.</div>
            <div className="text-sm text-gray-500">Professional</div>
          </div>
          
          <div className="bg-gray-50 p-8 rounded-xl" data-aos="fade-up" data-aos-delay="300">
            <div className="flex items-center mb-4">
              <div className="flex text-mango-500">
                {[...Array(5)].map((_, i) => (
                  <i key={i} className="ri-star-fill"></i>
                ))}
              </div>
              <span className="ml-2 text-gray-600">5.0</span>
            </div>
            <p className="text-gray-600 mb-4">"Cross-platform sync is perfect. I can study on any device seamlessly."</p>
            <div className="font-semibold">Maria L.</div>
            <div className="text-sm text-gray-500">Lifelong Learner</div>
          </div>
        </div>
      </div>
    </section>
  )
}