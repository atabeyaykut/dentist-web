import { useEffect } from 'react';
import { motion } from 'framer-motion';
import HeroSection from '@/components/home/HeroSection';
import ServicesSection from '@/components/home/ServicesSection';
import TestimonialsSection from '@/components/home/TestimonialsSection';
import ContactSection from '@/components/home/ContactSection';
import { placeholderImages } from '@/assets/images/placeholder';

export default function HomePage() {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <HeroSection />
      
      {/* About Section */}
      <section className="section bg-white">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <img 
                src={placeholderImages.aboutDentist} 
                alt="Professional dental team" 
                className="rounded-lg shadow-lg w-full h-auto object-cover"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = 'https://via.placeholder.com/600x400?text=Dental+Team';
                }}
              />
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="space-y-6"
            >
              <span className="inline-block bg-primary-100 text-primary-800 px-4 py-1 rounded-full text-sm font-medium">
                About Our Practice
              </span>
              <h2 className="text-3xl md:text-4xl font-bold">
                Exceptional Dental Care for Your Entire Family
              </h2>
              <p className="text-gray-600">
                At DentCare, we believe that a healthy smile is essential to your overall well-being. 
                Our team of experienced dental professionals is committed to providing comprehensive, 
                personalized care in a comfortable and welcoming environment.
              </p>
              <p className="text-gray-600">
                With state-of-the-art technology and a patient-centered approach, we offer a wide range 
                of services from preventive care to advanced cosmetic and restorative treatments. 
                We take the time to listen to your concerns and develop a treatment plan tailored to your unique needs.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                <div className="flex items-start">
                  <div className="bg-primary-100 p-2 rounded-full mr-3">
                    <svg className="w-5 h-5 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold">Experienced Team</h4>
                    <p className="text-sm text-gray-600">Highly qualified dental professionals</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-primary-100 p-2 rounded-full mr-3">
                    <svg className="w-5 h-5 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold">Modern Technology</h4>
                    <p className="text-sm text-gray-600">State-of-the-art dental equipment</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-primary-100 p-2 rounded-full mr-3">
                    <svg className="w-5 h-5 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold">Comfortable Care</h4>
                    <p className="text-sm text-gray-600">Relaxing environment and gentle approach</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-primary-100 p-2 rounded-full mr-3">
                    <svg className="w-5 h-5 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold">Personalized Treatment</h4>
                    <p className="text-sm text-gray-600">Customized care for your unique needs</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      <ServicesSection />
      <TestimonialsSection />
      <ContactSection />
    </>
  );
}
