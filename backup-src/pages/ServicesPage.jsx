import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';

// Import icons individually to avoid import issues
import { Stethoscope as Tooth } from 'lucide-react';
import { Sparkles } from 'lucide-react';
import { Heart } from 'lucide-react';
import { Baby } from 'lucide-react';
import { PlusCircle } from 'lucide-react';
import { CheckCircle } from 'lucide-react';
import { placeholderImages } from '@/assets/images/placeholder';

const services = [
  {
    id: 'general-dentistry',
    title: 'General Dentistry',
    description: 'Comprehensive care for your overall oral health.',
    icon: Tooth,
    color: 'bg-blue-100 text-blue-600',
    image: placeholderImages.generalDentistry,
    details: [
      'Routine dental check-ups and cleanings',
      'Fillings and cavity treatments',
      'Root canal therapy',
      'Gum disease treatment',
      'Oral cancer screenings',
      'Preventive care and education'
    ],
    content: 'Our general dentistry services form the foundation of good oral health. Regular check-ups and professional cleanings help prevent dental issues before they start. When treatment is needed, our team provides gentle, effective care using the latest techniques and materials. We focus on patient education, helping you maintain optimal oral health between visits.'
  },
  {
    id: 'cosmetic-dentistry',
    title: 'Cosmetic Dentistry',
    description: 'Transform your smile with our cosmetic procedures.',
    icon: Sparkles,
    color: 'bg-purple-100 text-purple-600',
    image: placeholderImages.cosmeticDentistry,
    details: [
      'Teeth whitening treatments',
      'Porcelain veneers',
      'Dental bonding',
      'Smile makeovers',
      'Gum contouring',
      'Tooth-colored fillings'
    ],
    content: 'Our cosmetic dentistry services help you achieve the beautiful, confident smile you deserve. From professional whitening to complete smile makeovers, we offer a range of treatments to address discoloration, chips, gaps, and other aesthetic concerns. Our dentists blend artistry with advanced techniques to create natural-looking results that enhance your unique features.'
  },
  {
    id: 'orthodontics',
    title: 'Orthodontics',
    description: 'Straighten your teeth with modern orthodontic solutions.',
    icon: PlusCircle,
    color: 'bg-green-100 text-green-600',
    image: placeholderImages.orthodontics,
    details: [
      'Traditional braces',
      'Clear/ceramic braces',
      'Invisible aligners',
      'Retainers',
      'Early intervention orthodontics',
      'Bite correction'
    ],
    content: 'Our orthodontic treatments help patients of all ages achieve straighter, properly aligned teeth. We offer both traditional braces and modern clear aligner options to suit your preferences and lifestyle. Properly aligned teeth not only create a more attractive smile but also improve function and make oral hygiene easier, contributing to better long-term dental health.'
  },
  {
    id: 'pediatric-dentistry',
    title: 'Pediatric Dentistry',
    description: 'Specialized dental care for children in a friendly environment.',
    icon: Baby,
    color: 'bg-yellow-100 text-yellow-600',
    image: placeholderImages.pediatricDentistry,
    details: [
      'Child-friendly dental exams',
      'Gentle cleanings',
      'Fluoride treatments',
      'Dental sealants',
      'Early orthodontic assessment',
      'Education on proper oral hygiene'
    ],
    content: 'Our pediatric dentistry services are designed to make dental visits enjoyable for children while building the foundation for lifelong oral health. Our team is specially trained to address the unique dental needs of children in a gentle, patient manner. We create positive experiences that help children develop good dental habits and overcome any anxiety about dental visits.'
  },
  {
    id: 'dental-implants',
    title: 'Dental Implants',
    description: 'Replace missing teeth with natural-looking dental implants.',
    icon: Heart,
    color: 'bg-red-100 text-red-600',
    image: placeholderImages.dentalImplants,
    details: [
      'Single tooth implants',
      'Multiple tooth implants',
      'Implant-supported dentures',
      'All-on-4 implants',
      'Bone grafting',
      'Implant restoration'
    ],
    content: 'Dental implants provide the most natural-looking and functioning replacement for missing teeth. These titanium posts serve as artificial tooth roots, providing a strong foundation for fixed or removable replacement teeth. Implants help preserve facial structure, prevent bone deterioration, and restore full chewing function. Our team provides comprehensive implant services from placement to restoration.'
  },
];

export default function ServicesPage() {
  const location = useLocation();
  const serviceRefs = useRef({});

  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
    
    // Check if there's a hash in the URL and scroll to that section
    if (location.hash) {
      const id = location.hash.replace('#', '');
      setTimeout(() => {
        const element = serviceRefs.current[id];
        if (element) {
          const yOffset = -100; // header height offset
          const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
          window.scrollTo({ top: y, behavior: 'smooth' });
        }
      }, 100);
    }
  }, [location]);

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-900 to-primary-700 text-white py-20 md:py-28">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <motion.h1 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-4xl md:text-5xl font-bold mb-6"
            >
              Our Dental Services
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg md:text-xl text-primary-100"
            >
              Comprehensive dental care for the entire family with a focus on comfort, 
              quality, and lasting results.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-12 bg-gray-50">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
              >
                <div className="h-48 overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform hover:scale-105 duration-300"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = `https://via.placeholder.com/600x400?text=${service.title.replace(' ', '+')}`;
                    }}
                  />
                </div>
                <div className="p-6">
                  <div className={`w-12 h-12 rounded-lg ${service.color} flex items-center justify-center mb-4`}>
                    <service.icon size={24} />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <a 
                    href={`#${service.id}`}
                    className="inline-flex items-center text-primary-600 hover:text-primary-800 font-medium"
                  >
                    Learn More
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                    </svg>
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Service Sections */}
      {services.map((service) => (
        <section 
          key={service.id} 
          id={service.id}
          ref={(el) => (serviceRefs.current[service.id] = el)}
          className="py-16 even:bg-gray-50"
        >
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className={`order-2 ${service.id % 2 === 0 ? 'lg:order-1' : 'lg:order-2'}`}
              >
                <div className={`inline-block ${service.color} p-3 rounded-lg mb-4`}>
                  <service.icon size={28} />
                </div>
                <h2 className="text-3xl font-bold mb-4">{service.title}</h2>
                <p className="text-gray-700 mb-6">{service.content}</p>
                
                <h3 className="text-xl font-semibold mb-4">What We Offer:</h3>
                <ul className="space-y-3">
                  {service.details.map((detail, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-primary-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className={`order-1 ${service.id % 2 === 0 ? 'lg:order-2' : 'lg:order-1'}`}
              >
                <div className="rounded-lg overflow-hidden shadow-lg">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-auto"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = `https://via.placeholder.com/600x400?text=${service.title.replace(' ', '+')}`;
                    }}
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      ))}

      {/* CTA Section */}
      <section className="bg-primary-900 text-white py-16">
        <div className="container text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Schedule Your Appointment?</h2>
            <p className="text-lg text-primary-100 mb-8">
              Our team is ready to provide you with exceptional dental care. Contact us today to schedule your visit.
            </p>
            <a 
              href="/contact" 
              className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-primary-900 bg-white hover:bg-primary-50 transition-colors"
            >
              Book Your Appointment
            </a>
          </motion.div>
        </div>
      </section>
    </>
  );
}
