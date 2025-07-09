import React from 'react';
import ContactUs from '../components/ContactUs';
import LocationMap from '../components/LocationMap';

/**
 * Contact Page Component
 */
function Contact() {
  // Office hours data
  const officeHours = [
    { day: 'Monday', hours: '8:00 AM - 6:00 PM' },
    { day: 'Tuesday', hours: '8:00 AM - 6:00 PM' },
    { day: 'Wednesday', hours: '8:00 AM - 6:00 PM' },
    { day: 'Thursday', hours: '8:00 AM - 6:00 PM' },
    { day: 'Friday', hours: '8:00 AM - 5:00 PM' },
    { day: 'Saturday', hours: '9:00 AM - 2:00 PM' },
    { day: 'Sunday', hours: 'Closed' }
  ];

  return (
    <div className="bg-white">
      {/* Page Header */}
      <div className="bg-white py-12 border-b border-gray-100">
        <div className="container mx-auto px-6">
          <h1 
            className="text-left" 
            style={{
              fontFamily: 'var(--cmsmasters-h1-font-family)',
              fontSize: 'var(--cmsmasters-h1-font-size)',
              lineHeight: 'var(--cmsmasters-h1-line-height)',
              fontWeight: 'var(--cmsmasters-h1-font-weight)',
              color: 'var(--cmsmasters-colors-heading)'
            }}
          >
            Contact Us
          </h1>
        </div>
      </div>

      <div className="container mx-auto px-6 py-16">
        {/* Contact Information and Form */}
        <div className="flex flex-col lg:flex-row gap-12 mb-16">
          {/* Contact Information */}
          <div className="lg:w-1/3">
            <h2 
              className="mb-8 text-3xl"
              style={{
                fontFamily: 'var(--cmsmasters-h2-font-family)',
                fontSize: 'var(--cmsmasters-h2-font-size)',
                lineHeight: 'var(--cmsmasters-h2-line-height)',
                fontWeight: 'var(--cmsmasters-h2-font-weight)',
                color: 'var(--cmsmasters-colors-heading)'
              }}
            >
              Get in Touch
            </h2>
            
            <div className="space-y-8">
              <div className="flex items-start">
                <div className="bg-blue-50 w-12 h-12 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-medium mb-2">Phone</h3>
                  <p className="text-gray-600 mb-1">Main Office: (555) 123-4567</p>
                  <p className="text-gray-600">Emergency: (555) 987-6543</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-blue-50 w-12 h-12 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-medium mb-2">Email</h3>
                  <p className="text-gray-600 mb-1">Appointments: appointments@dentalclinic.com</p>
                  <p className="text-gray-600">General Inquiries: info@dentalclinic.com</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-blue-50 w-12 h-12 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-medium mb-2">Address</h3>
                  <p className="text-gray-600">
                    123 Dental Way<br />
                    Suite 200<br />
                    Smile City, CA 90210
                  </p>
                </div>
              </div>
            </div>
            
            {/* Office Hours */}
            <div className="mt-12">
              <h3 className="text-xl font-medium mb-4">Office Hours</h3>
              <div className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden">
                {officeHours.map((item, index) => (
                  <div 
                    key={index} 
                    className={`flex justify-between py-3 px-4 ${
                      index !== officeHours.length - 1 ? 'border-b border-gray-100' : ''
                    } ${item.day === 'Sunday' ? 'bg-gray-50' : ''}`}
                  >
                    <span className="font-medium">{item.day}</span>
                    <span className={`${item.day === 'Sunday' ? 'text-red-500' : 'text-gray-600'}`}>
                      {item.hours}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <div className="lg:w-2/3 bg-white rounded-lg shadow-md border border-gray-100 p-8">
            <h2 
              className="mb-6 text-2xl"
              style={{
                fontFamily: 'var(--cmsmasters-h3-font-family)',
                fontSize: 'var(--cmsmasters-h3-font-size)',
                lineHeight: 'var(--cmsmasters-h3-line-height)',
                fontWeight: 'var(--cmsmasters-h3-font-weight)',
                color: 'var(--cmsmasters-colors-heading)'
              }}
            >
              Send Us a Message
            </h2>
            
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="John Doe"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="john@example.com"
                    required
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="(555) 123-4567"
                  />
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                    Subject
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    required
                  >
                    <option value="">Select a subject</option>
                    <option value="appointment">Schedule Appointment</option>
                    <option value="inquiry">General Inquiry</option>
                    <option value="feedback">Feedback</option>
                    <option value="billing">Billing Question</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="How can we help you?"
                  required
                ></textarea>
              </div>
              
              <div className="flex items-center">
                <input
                  id="privacy"
                  name="privacy"
                  type="checkbox"
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                  required
                />
                <label htmlFor="privacy" className="ml-2 block text-sm text-gray-700">
                  I agree to the <a href="/privacy-policy" className="text-blue-600 hover:underline">privacy policy</a>
                </label>
              </div>
              
              <div>
                <button
                  type="submit"
                  className="w-full md:w-auto px-6 py-3 bg-blue-500 text-white font-medium rounded-md hover:bg-blue-600 transition-colors"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
        
        {/* Map Section */}
        <div className="mb-16">
          <h2 
            className="mb-8 text-3xl text-center"
            style={{
              fontFamily: 'var(--cmsmasters-h2-font-family)',
              fontSize: 'var(--cmsmasters-h2-font-size)',
              lineHeight: 'var(--cmsmasters-h2-line-height)',
              fontWeight: 'var(--cmsmasters-h2-font-weight)',
              color: 'var(--cmsmasters-colors-heading)'
            }}
          >
            Find Us
          </h2>
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <LocationMap />
          </div>
        </div>
        
        {/* Emergency Contact */}
        <div className="bg-red-50 rounded-lg p-8 text-center">
          <h2 
            className="mb-4 text-2xl text-red-700"
            style={{
              fontFamily: 'var(--cmsmasters-h3-font-family)',
              fontSize: 'var(--cmsmasters-h3-font-size)',
              lineHeight: 'var(--cmsmasters-h3-line-height)',
              fontWeight: 'var(--cmsmasters-h3-font-weight)'
            }}
          >
            Dental Emergency?
          </h2>
          <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
            If you're experiencing a dental emergency, please call our emergency line immediately. We offer same-day emergency appointments for both existing and new patients.
          </p>
          <a 
            href="tel:5559876543" 
            className="inline-flex items-center justify-center px-6 py-3 bg-red-600 text-white font-medium rounded-md hover:bg-red-700 transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            Call Emergency Line: (555) 987-6543
          </a>
        </div>
      </div>
    </div>
  );
}

export default Contact;
