import { motion } from 'framer-motion'

const ServicesPage = () => {
  const services = [
    {
      id: 1,
      title: "General Dentistry",
      description: "Our general dentistry services focus on preventive care and maintaining your oral health. Regular check-ups, cleanings, and early detection of dental issues help prevent more serious problems down the road.",
      treatments: [
        "Comprehensive Dental Exams",
        "Professional Teeth Cleaning",
        "Dental X-Rays",
        "Fillings and Restorations",
        "Gum Disease Treatment",
        "Root Canal Therapy"
      ],
      image: "/images/general-dentistry.jpg"
    },
    {
      id: 2,
      title: "Cosmetic Dentistry",
      description: "Transform your smile with our cosmetic dentistry services. We offer a range of treatments designed to enhance the appearance of your teeth and give you the confidence to smile brightly.",
      treatments: [
        "Teeth Whitening",
        "Dental Veneers",
        "Dental Bonding",
        "Smile Makeovers",
        "Gum Contouring",
        "Tooth-Colored Fillings"
      ],
      image: "/images/cosmetic-dentistry.jpg"
    },
    {
      id: 3,
      title: "Orthodontics",
      description: "Achieve a straighter smile with our orthodontic treatments. We offer various options to correct misaligned teeth and improve your bite for both functional and aesthetic benefits.",
      treatments: [
        "Traditional Braces",
        "Clear Aligners",
        "Retainers",
        "Early Orthodontic Treatment",
        "Surgical Orthodontics",
        "TMJ/TMD Treatment"
      ],
      image: "/images/orthodontics.jpg"
    },
    {
      id: 4,
      title: "Pediatric Dentistry",
      description: "We provide specialized dental care for children in a friendly and comfortable environment. Our pediatric dentistry services focus on preventive care and education to establish good oral health habits early.",
      treatments: [
        "Child-Friendly Dental Exams",
        "Gentle Teeth Cleaning",
        "Dental Sealants",
        "Fluoride Treatments",
        "Space Maintainers",
        "Early Orthodontic Assessment"
      ],
      image: "/images/pediatric-dentistry.jpg"
    },
    {
      id: 5,
      title: "Restorative Dentistry",
      description: "Restore the function and appearance of damaged or missing teeth with our restorative dentistry services. We use high-quality materials and advanced techniques to provide durable and natural-looking results.",
      treatments: [
        "Dental Crowns",
        "Dental Bridges",
        "Dental Implants",
        "Dentures",
        "Inlays and Onlays",
        "Full Mouth Reconstruction"
      ],
      image: "/images/restorative-dentistry.jpg"
    },
    {
      id: 6,
      title: "Emergency Dental Care",
      description: "We provide prompt and effective emergency dental care when you need it most. Whether you're experiencing severe tooth pain, have a broken tooth, or any other dental emergency, we're here to help.",
      treatments: [
        "Toothache Relief",
        "Broken Tooth Repair",
        "Lost Filling or Crown Replacement",
        "Dental Abscess Treatment",
        "Emergency Extractions",
        "Sports Injury Treatment"
      ],
      image: "/images/emergency-dental.jpg"
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
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Dental Services</h1>
            <p className="text-lg text-primary-100">
              We offer a comprehensive range of dental services to meet all your oral health needs.
              From preventive care to cosmetic and restorative treatments, our team is dedicated to providing
              exceptional dental care in a comfortable environment.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services List */}
      <section className="py-16 bg-white">
        <div className="container">
          <div className="grid grid-cols-1 gap-16">
            {services.map((service, index) => (
              <motion.div 
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center"
              >
                <div className={`${index % 2 === 1 ? 'md:order-2' : ''}`}>
                  <h2 className="text-3xl font-bold mb-4">{service.title}</h2>
                  <p className="text-gray-600 mb-6">{service.description}</p>
                  
                  <h3 className="text-xl font-semibold mb-3">Treatments Include:</h3>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {service.treatments.map((treatment, i) => (
                      <li key={i} className="flex items-start">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary-600 mr-2 mt-1">
                          <path d="M20 6 9 17l-5-5" />
                        </svg>
                        <span>{treatment}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className={`${index % 2 === 1 ? 'md:order-1' : ''}`}>
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="rounded-lg shadow-lg w-full h-80 object-cover"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = `https://placehold.co/800x600/primary-100/primary-800?text=${service.title.replace(' ', '+')}`;
                    }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary-50">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Ready to Schedule Your Appointment?</h2>
            <p className="text-lg text-gray-600 mb-8">
              Contact us today to schedule a consultation and learn more about how our services can help you achieve optimal oral health and a beautiful smile.
            </p>
            <a href="/contact" className="btn btn-primary px-8 py-3 text-lg">
              Contact Us Now
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ServicesPage
