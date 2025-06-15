import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

// Import icons individually to avoid import issues
import { MapPin } from 'lucide-react';
import { Phone } from 'lucide-react';
import { Mail } from 'lucide-react';
import { Clock } from 'lucide-react';

import { Button } from '@/components/ui/button';

export default function ContactSection() {
  return (
    <section className="section bg-primary-50">
      <div className="container">
        <div className="text-center mb-12">
          <motion.h2 
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="section-title"
          >
            Contact Us
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="section-subtitle"
          >
            We're here to answer your questions and provide the care you need
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-lg shadow-lg p-8"
          >
            <h3 className="text-2xl font-bold mb-6">Get in Touch</h3>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-primary-100 p-3 rounded-full mr-4">
                  <MapPin className="h-6 w-6 text-primary-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg">Our Location</h4>
                  <p className="text-gray-600">
                    123 Dental Street, Suite 100<br />
                    New York, NY 10001
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-primary-100 p-3 rounded-full mr-4">
                  <Phone className="h-6 w-6 text-primary-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg">Phone Number</h4>
                  <p className="text-gray-600">
                    <a href="tel:+12125551234" className="hover:text-primary-600 transition-colors">
                      (212) 555-1234
                    </a>
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-primary-100 p-3 rounded-full mr-4">
                  <Mail className="h-6 w-6 text-primary-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg">Email Address</h4>
                  <p className="text-gray-600">
                    <a href="mailto:info@dentcare.com" className="hover:text-primary-600 transition-colors">
                      info@dentcare.com
                    </a>
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-primary-100 p-3 rounded-full mr-4">
                  <Clock className="h-6 w-6 text-primary-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg">Office Hours</h4>
                  <ul className="text-gray-600">
                    <li>Monday - Friday: 9:00 AM - 6:00 PM</li>
                    <li>Saturday: 9:00 AM - 4:00 PM</li>
                    <li>Sunday: Closed</li>
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-lg shadow-lg p-8 flex flex-col"
          >
            <h3 className="text-2xl font-bold mb-6">Schedule an Appointment</h3>
            <p className="text-gray-600 mb-6">
              Ready to schedule your dental appointment? Fill out our contact form, and our team will get back to you promptly to confirm your appointment.
            </p>
            
            <div className="flex-1 flex flex-col justify-center items-center text-center py-8">
              <div className="mb-6">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary-100 text-primary-600 mb-4">
                  <Calendar className="h-8 w-8" />
                </div>
                <h4 className="text-xl font-semibold mb-2">Easy Scheduling</h4>
                <p className="text-gray-600">
                  We offer convenient online scheduling to fit your busy lifestyle.
                </p>
              </div>
              
              <Button size="lg" asChild className="w-full md:w-auto">
                <Link to="/contact">Book Your Appointment</Link>
              </Button>
            </div>
            
            <div className="mt-6 pt-6 border-t border-gray-200 text-center">
              <p className="text-gray-600">
                Have an emergency? Call us directly at{' '}
                <a href="tel:+12125551234" className="font-semibold text-primary-600 hover:underline">
                  (212) 555-1234
                </a>
              </p>
            </div>
          </motion.div>
        </div>
        
        <div className="mt-12 bg-white rounded-lg shadow-lg overflow-hidden">
          <iframe
            title="Dental Clinic Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.215573814498!2d-73.98784492439748!3d40.748440471388945!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9b30eac9f%3A0xaca8b8b1a817d037!2sEmpire%20State%20Building!5e0!3m2!1sen!2sus!4v1686672991027!5m2!1sen!2sus"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </section>
  );
}

// Import missing Calendar icon
import { Calendar } from 'lucide-react';
