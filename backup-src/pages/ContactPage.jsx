import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { useFormspree } from '@formspree/react';

// Import icons individually to avoid import issues
import { MapPin } from 'lucide-react';
import { Phone } from 'lucide-react';
import { Mail } from 'lucide-react';
import { Clock } from 'lucide-react';
import { CheckCircle } from 'lucide-react';
import { AlertCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { isValidEmail } from '@/lib/utils';

export default function ContactPage() {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Form handling with react-hook-form
  const { register, handleSubmit, reset, formState: { errors } } = useForm();
  
  // Formspree integration
  const [formspreeState, sendToFormspree] = useFormspree('YOUR_FORMSPREE_ID'); // Replace with your Formspree ID
  
  // Form submission state
  const [formStatus, setFormStatus] = useState({
    submitted: false,
    success: false,
    message: '',
  });

  // Handle form submission
  const onSubmit = async (data) => {
    try {
      await sendToFormspree(data);
      setFormStatus({
        submitted: true,
        success: true,
        message: 'Thank you! Your message has been sent successfully. We will contact you shortly.',
      });
      reset();
    } catch (error) {
      setFormStatus({
        submitted: true,
        success: false,
        message: 'There was an error sending your message. Please try again or contact us directly by phone.',
      });
    }
  };

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
              Contact Us
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg md:text-xl text-primary-100"
            >
              We're here to answer your questions and provide the dental care you need.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Contact Information and Form */}
      <section className="py-16">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>
                <p className="text-gray-600 mb-8">
                  Have questions about our services or want to schedule an appointment? 
                  Contact us using the information below or fill out the form, and our team 
                  will get back to you as soon as possible.
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-8 space-y-6">
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

              <div className="bg-primary-50 rounded-lg p-6 border border-primary-100">
                <h3 className="text-xl font-semibold mb-3">Emergency Dental Care</h3>
                <p className="text-gray-700 mb-4">
                  Experiencing a dental emergency? Call our emergency line for immediate assistance.
                </p>
                <a 
                  href="tel:+12125551234" 
                  className="inline-flex items-center text-primary-700 font-semibold hover:text-primary-900"
                >
                  (212) 555-1234
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                  </svg>
                </a>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="bg-white rounded-lg shadow-lg p-8">
                <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
                
                {formStatus.submitted ? (
                  <div className={`p-4 rounded-md ${formStatus.success ? 'bg-green-50 border border-green-200' : 'bg-red-50 border border-red-200'}`}>
                    <div className="flex items-start">
                      {formStatus.success ? (
                        <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5" />
                      ) : (
                        <AlertCircle className="h-5 w-5 text-red-500 mr-3 mt-0.5" />
                      )}
                      <p className={formStatus.success ? 'text-green-700' : 'text-red-700'}>
                        {formStatus.message}
                      </p>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="name">Full Name</Label>
                        <Input
                          id="name"
                          placeholder="John Doe"
                          {...register('name', { required: 'Name is required' })}
                          className={errors.name ? 'border-red-300 focus-visible:ring-red-500' : ''}
                        />
                        {errors.name && (
                          <p className="text-sm text-red-500">{errors.name.message}</p>
                        )}
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="email">Email Address</Label>
                        <Input
                          id="email"
                          type="email"
                          placeholder="john@example.com"
                          {...register('email', { 
                            required: 'Email is required',
                            validate: value => isValidEmail(value) || 'Please enter a valid email'
                          })}
                          className={errors.email ? 'border-red-300 focus-visible:ring-red-500' : ''}
                        />
                        {errors.email && (
                          <p className="text-sm text-red-500">{errors.email.message}</p>
                        )}
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input
                        id="phone"
                        placeholder="(123) 456-7890"
                        {...register('phone', { required: 'Phone number is required' })}
                        className={errors.phone ? 'border-red-300 focus-visible:ring-red-500' : ''}
                      />
                      {errors.phone && (
                        <p className="text-sm text-red-500">{errors.phone.message}</p>
                      )}
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="subject">Subject</Label>
                      <Input
                        id="subject"
                        placeholder="Appointment Request"
                        {...register('subject', { required: 'Subject is required' })}
                        className={errors.subject ? 'border-red-300 focus-visible:ring-red-500' : ''}
                      />
                      {errors.subject && (
                        <p className="text-sm text-red-500">{errors.subject.message}</p>
                      )}
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="message">Message</Label>
                      <Textarea
                        id="message"
                        placeholder="How can we help you?"
                        rows={5}
                        {...register('message', { required: 'Message is required' })}
                        className={errors.message ? 'border-red-300 focus-visible:ring-red-500' : ''}
                      />
                      {errors.message && (
                        <p className="text-sm text-red-500">{errors.message.message}</p>
                      )}
                    </div>
                    
                    <Button type="submit" className="w-full" disabled={formspreeState.submitting}>
                      {formspreeState.submitting ? 'Sending...' : 'Send Message'}
                    </Button>
                    
                    <p className="text-sm text-gray-500 text-center">
                      By submitting this form, you agree to our{' '}
                      <a href="/privacy" className="text-primary-600 hover:underline">
                        Privacy Policy
                      </a>
                    </p>
                  </form>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-12 bg-gray-50">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Find Our Location</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We're conveniently located in the heart of New York City. 
              Visit us for your next dental appointment.
            </p>
          </div>
          
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
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
    </>
  );
}
