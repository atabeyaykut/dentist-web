import { motion } from 'framer-motion'

const HomePage = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-700 to-primary-900 text-white py-20">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="space-y-6"
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Your Smile, Our Passion
              </h1>
              <p className="text-lg md:text-xl text-primary-100">
                Experience exceptional dental care with our team of experts dedicated to your oral health and beautiful smile.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="/contact" className="btn btn-primary">
                  Book Appointment
                </a>
                <a href="/services" className="btn btn-outline text-white border-white hover:bg-white hover:text-primary-800">
                  Our Services
                </a>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="hidden md:block"
            >
              <img 
                src="/images/hero-dentist.jpg" 
                alt="Dental care professionals" 
                className="rounded-lg shadow-xl"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = "https://placehold.co/600x400/primary-800/white?text=Dental+Care";
                }}
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="container">
          <h2 className="section-title">Why Choose Us</h2>
          <p className="section-subtitle">
            We combine advanced technology with compassionate care to provide you with the best dental experience.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {[
              {
                title: "Expert Dentists",
                description: "Our team of highly qualified dentists brings years of experience and expertise.",
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary-600">
                    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                    <circle cx="9" cy="7" r="4" />
                    <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                  </svg>
                )
              },
              {
                title: "Modern Technology",
                description: "We use state-of-the-art equipment and techniques for precise and comfortable treatments.",
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary-600">
                    <rect width="18" height="10" x="3" y="11" rx="2" />
                    <circle cx="12" cy="5" r="2" />
                    <path d="M12 7v4" />
                    <line x1="8" x2="8" y1="16" y2="16" />
                    <line x1="16" x2="16" y1="16" y2="16" />
                  </svg>
                )
              },
              {
                title: "Comfortable Care",
                description: "Your comfort is our priority. We ensure a relaxing and stress-free dental experience.",
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary-600">
                    <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
                  </svg>
                )
              }
            ].map((feature, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-lg shadow-md border border-gray-100 hover:shadow-lg transition-shadow"
              >
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-primary-50 mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-16 bg-gray-50">
        <div className="container">
          <h2 className="section-title">Our Services</h2>
          <p className="section-subtitle">
            We offer a comprehensive range of dental services to meet all your oral health needs.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {[
              {
                title: "General Dentistry",
                description: "Comprehensive care for your overall oral health including check-ups and cleanings.",
                image: "/images/general-dentistry.jpg"
              },
              {
                title: "Cosmetic Dentistry",
                description: "Enhance your smile with our range of cosmetic treatments and procedures.",
                image: "/images/cosmetic-dentistry.jpg"
              },
              {
                title: "Orthodontics",
                description: "Straighten your teeth and correct bite issues with our orthodontic solutions.",
                image: "/images/orthodontics.jpg"
              }
            ].map((service, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow"
              >
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-48 object-cover"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = `https://placehold.co/600x400/primary-100/primary-800?text=${service.title.replace(' ', '+')}`;
                  }}
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <a href="/services" className="text-primary-600 font-medium hover:text-primary-800 flex items-center">
                    Learn More
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-1">
                      <path d="m9 18 6-6-6-6" />
                    </svg>
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <a href="/services" className="btn btn-primary">
              View All Services
            </a>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-white">
        <div className="container">
          <h2 className="section-title">What Our Patients Say</h2>
          <p className="section-subtitle">
            Don't just take our word for it. Here's what our patients have to say about their experience.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {[
              {
                name: "Sarah Johnson",
                quote: "The team at Dentist Web made my dental visit comfortable and stress-free. Their attention to detail and gentle approach is commendable.",
                rating: 5
              },
              {
                name: "Michael Brown",
                quote: "I've been coming here for years and have always received excellent care. The staff is friendly and the facilities are top-notch.",
                rating: 5
              },
              {
                name: "Emily Davis",
                quote: "My children love coming to Dentist Web! The pediatric dentists are amazing with kids and make the experience fun and educational.",
                rating: 4
              }
            ].map((testimonial, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-lg shadow-md border border-gray-100"
              >
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg 
                      key={i} 
                      xmlns="http://www.w3.org/2000/svg" 
                      width="20" 
                      height="20" 
                      viewBox="0 0 24 24" 
                      fill={i < testimonial.rating ? "currentColor" : "none"} 
                      stroke="currentColor" 
                      strokeWidth="2" 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      className={i < testimonial.rating ? "text-yellow-400" : "text-gray-300"}
                    >
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-600 italic mb-4">"{testimonial.quote}"</p>
                <p className="font-semibold">{testimonial.name}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary-900 text-white">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Smile?</h2>
            <p className="text-lg text-primary-100 mb-8">
              Schedule your appointment today and take the first step towards a healthier, more beautiful smile.
            </p>
            <a href="/contact" className="btn bg-white text-primary-900 hover:bg-primary-100 px-8 py-3 text-lg">
              Book Your Appointment
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default HomePage
