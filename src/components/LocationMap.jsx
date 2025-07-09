import React from 'react';

/**
 * LocationMap Component
 * 
 * A component that displays the dental clinic's location on a map
 * - Uses Google Maps iframe for embedding the map
 * - Responsive design for all screen sizes
 * - Includes location details and contact information
 */
function LocationMap() {
  // Location data object
  const locationData = {
    clinicName: "Dentalist Clinic",
    address: "123 Dental Street, Istanbul, Turkey",
    phone: "+90 (212) 123 4567",
    email: "info@dentalistclinic.com",
    workingHours: "Monday - Friday: 9:00 - 18:00",
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d192698.6296207998!2d28.8720964971519!3d41.00498228699284!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14caa7040068086b%3A0xe1ccfe98bc01b0d0!2zxLBzdGFuYnVs!5e0!3m2!1str!2str!4v1688918234525!5m2!1str!2str"
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-center mb-4" style={{
          fontFamily: 'var(--cmsmasters-h2-font-family)',
          fontSize: 'var(--cmsmasters-h2-font-size)',
          lineHeight: 'var(--cmsmasters-h2-line-height)',
          fontWeight: 'var(--cmsmasters-h2-font-weight)',
          textTransform: 'var(--cmsmasters-h2-text-transform)',
          fontStyle: 'var(--cmsmasters-h2-font-style)',
          textDecoration: 'var(--cmsmasters-h2-text-decoration)',
          letterSpacing: 'var(--cmsmasters-h2-letter-spacing)',
          wordSpacing: 'var(--cmsmasters-h2-word-spacing)',
          color: 'var(--cmsmasters-colors-heading)'
        }}>Find Us</h2>
        <p className="text-center text-gray-600 mb-12">Visit our clinic for professional dental care</p>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Location Information */}
          <div className="lg:col-span-1 bg-white p-8 shadow-sm">
            <h3 className="text-2xl font-medium mb-6">{locationData.clinicName}</h3>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div className="ml-3">
                  <h4 className="text-sm font-medium text-gray-900">Address</h4>
                  <p className="mt-1 text-sm text-gray-600">{locationData.address}</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div className="ml-3">
                  <h4 className="text-sm font-medium text-gray-900">Phone</h4>
                  <p className="mt-1 text-sm text-gray-600">{locationData.phone}</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div className="ml-3">
                  <h4 className="text-sm font-medium text-gray-900">Email</h4>
                  <p className="mt-1 text-sm text-gray-600">{locationData.email}</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div className="ml-3">
                  <h4 className="text-sm font-medium text-gray-900">Working Hours</h4>
                  <p className="mt-1 text-sm text-gray-600">{locationData.workingHours}</p>
                </div>
              </div>
            </div>
            
            <div className="mt-8">
              <button className="w-full bg-blue-500 hover:bg-blue-600 text-white py-3 px-4 rounded-md transition-colors">
                Book Appointment
              </button>
            </div>
          </div>
          
          {/* Map */}
          <div className="lg:col-span-2">
            <div className="h-full min-h-[400px] w-full bg-gray-200 relative">
              <iframe
                src={locationData.mapUrl}
                className="absolute inset-0 w-full h-full border-0"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Dentalist Clinic Location"
                aria-label="Dentalist Clinic Location Map"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default LocationMap;
