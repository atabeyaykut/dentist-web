import { motion } from 'framer-motion'

const AboutPage = () => {
  const team = [
    {
      name: "Dr. Sarah Johnson",
      role: "Lead Dentist",
      bio: "Dr. Johnson has over 15 years of experience in general and cosmetic dentistry. She graduated from Harvard Dental School and is committed to providing the highest quality care to her patients.",
      image: "/images/dentist-1.jpg"
    },
    {
      name: "Dr. Michael Chen",
      role: "Orthodontist",
      bio: "Dr. Chen specializes in orthodontics and is an expert in modern alignment techniques. With his gentle approach, he helps patients achieve their perfect smile with minimal discomfort.",
      image: "/images/dentist-2.jpg"
    },
    {
      name: "Dr. Emily Rodriguez",
      role: "Pediatric Dentist",
      bio: "Dr. Rodriguez has a special way with children, making dental visits fun and stress-free. She focuses on preventive care and education to establish good oral health habits early.",
      image: "/images/dentist-3.jpg"
    },
    {
      name: "Jessica Williams",
      role: "Dental Hygienist",
      bio: "Jessica is passionate about preventive dental care and patient education. She ensures every patient receives thorough cleaning and personalized advice for maintaining oral health.",
      image: "/images/staff-1.jpg"
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-700 to-primary-900 text-white py-16">
        <div className="container">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About Us</h1>
            <p className="text-lg text-primary-100">
              Get to know our practice, our team, and our commitment to providing exceptional dental care.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 bg-white">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold mb-6">Our Story</h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  Founded in 2005, Dentist Web began with a simple mission: to provide high-quality dental care in a comfortable and welcoming environment. Dr. Sarah Johnson established the practice with a commitment to using the latest technology and techniques to ensure the best outcomes for patients.
                </p>
                <p>
                  Over the years, our practice has grown to include a team of specialists covering all aspects of dentistry, from general and preventive care to cosmetic and restorative treatments. Despite our growth, we've maintained our patient-centered approach, taking the time to understand each individual's needs and concerns.
                </p>
                <p>
                  Today, we're proud to be a trusted dental care provider in our community, serving patients of all ages with compassion and expertise. Our commitment to excellence and continuous improvement drives us to stay at the forefront of dental innovation.
                </p>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="relative"
            >
              <img 
                src="/images/dental-office.jpg" 
                alt="Our dental office" 
                className="rounded-lg shadow-xl w-full"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = "https://placehold.co/800x600/primary-100/primary-800?text=Our+Dental+Office";
                }}
              />
              <div className="absolute -bottom-6 -right-6 bg-primary-600 text-white p-6 rounded-lg shadow-lg hidden md:block">
                <p className="font-bold text-xl">20+</p>
                <p>Years of Excellence</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 bg-gray-50">
        <div className="container">
          <h2 className="section-title">Our Values</h2>
          <p className="section-subtitle">
            These core principles guide everything we do at Dentist Web.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {[
              {
                title: "Excellence",
                description: "We strive for excellence in every aspect of our practice, from clinical care to patient service.",
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary-600">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                )
              },
              {
                title: "Compassion",
                description: "We treat each patient with empathy and understanding, recognizing their unique needs and concerns.",
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary-600">
                    <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
                  </svg>
                )
              },
              {
                title: "Innovation",
                description: "We continuously invest in advanced technology and techniques to provide the best possible care.",
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary-600">
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                  </svg>
                )
              }
            ].map((value, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-lg shadow-md border border-gray-100"
              >
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-primary-50 mb-4">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Meet Our Team */}
      <section className="py-16 bg-white">
        <div className="container">
          <h2 className="section-title">Meet Our Team</h2>
          <p className="section-subtitle">
            Our experienced and friendly team is dedicated to providing you with the best dental care.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            {team.map((member, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow"
              >
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-64 object-cover object-center"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = `https://placehold.co/400x500/primary-100/primary-800?text=${member.name.replace(' ', '+')}`;
                  }}
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                  <p className="text-primary-600 font-medium mb-3">{member.role}</p>
                  <p className="text-gray-600">{member.bio}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Facility */}
      <section className="py-16 bg-gray-50">
        <div className="container">
          <h2 className="section-title">Our Facility</h2>
          <p className="section-subtitle">
            We've created a comfortable environment with state-of-the-art equipment to ensure the best experience for our patients.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            {[
              { title: "Modern Treatment Rooms", image: "/images/facility-1.jpg" },
              { title: "Advanced Technology", image: "/images/facility-2.jpg" },
              { title: "Comfortable Waiting Area", image: "/images/facility-3.jpg" }
            ].map((item, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="rounded-lg overflow-hidden shadow-md"
              >
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-64 object-cover"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = `https://placehold.co/600x400/primary-100/primary-800?text=${item.title.replace(' ', '+')}`;
                  }}
                />
                <div className="p-4 bg-white">
                  <h3 className="text-lg font-bold">{item.title}</h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary-900 text-white">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Experience Our Care?</h2>
            <p className="text-lg text-primary-100 mb-8">
              Schedule your appointment today and see the difference our team can make for your dental health.
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

export default AboutPage
