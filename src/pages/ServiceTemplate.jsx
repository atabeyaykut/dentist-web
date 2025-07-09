import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ServicesSidebar from '../components/ServicesSidebar';

/**
 * ServiceTemplate Component
 * 
 * A reusable template for all service pages with consistent styling
 */
function ServiceTemplate({ 
  title,
  image,
  aboutTitle,
  aboutContent,
  faqs,
  specialists
}) {
  // State for managing FAQ accordion
  const [openFaqId, setOpenFaqId] = useState(1);

  // Toggle FAQ accordion
  const toggleFaq = (id) => {
    setOpenFaqId(openFaqId === id ? null : id);
  };

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
            {title}
          </h1>
        </div>
      </div>

      <div className="container mx-auto px-6 py-16">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Sidebar */}
          <div className="lg:w-1/4">
            {/* Services List */}
            <ServicesSidebar />

            {/* Consultation Form */}
            <div className="bg-white rounded-lg shadow-md p-6 mt-8">
              <h3 
                className="text-center mb-6"
                style={{
                  fontFamily: 'var(--cmsmasters-h3-font-family)',
                  fontSize: 'var(--cmsmasters-h3-font-size)',
                  lineHeight: 'var(--cmsmasters-h3-line-height)',
                  fontWeight: 'var(--cmsmasters-h3-font-weight)',
                  color: 'var(--cmsmasters-colors-heading)'
                }}
              >
                Book a Consultation
              </h3>
              <form className="space-y-4">
                <div>
                  <input 
                    type="text" 
                    placeholder="Your Name" 
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>
                <div>
                  <input 
                    type="tel" 
                    placeholder="Phone Number" 
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>
                <div className="relative">
                  <select 
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 appearance-none"
                    required
                  >
                    <option value="">Select Date</option>
                    <option value="2025-07-10">July 10, 2025</option>
                    <option value="2025-07-11">July 11, 2025</option>
                    <option value="2025-07-12">July 12, 2025</option>
                    <option value="2025-07-13">July 13, 2025</option>
                    <option value="2025-07-14">July 14, 2025</option>
                  </select>
                  <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                    <svg className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>
                <div className="relative">
                  <select 
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 appearance-none"
                    required
                  >
                    <option value="">Select Time</option>
                    <option value="09:00">9:00 AM</option>
                    <option value="10:00">10:00 AM</option>
                    <option value="11:00">11:00 AM</option>
                    <option value="13:00">1:00 PM</option>
                    <option value="14:00">2:00 PM</option>
                    <option value="15:00">3:00 PM</option>
                    <option value="16:00">4:00 PM</option>
                  </select>
                  <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                    <svg className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>
                <button 
                  type="submit" 
                  className="w-full py-2 px-4 bg-blue-500 hover:bg-blue-600 text-white font-bold rounded-md transition-colors"
                >
                  BOOK ONLINE
                </button>
              </form>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:w-3/4">
            {/* Featured Image */}
            <div className="mb-12">
              <img 
                src={image} 
                alt={title} 
                className="w-full h-auto rounded-lg shadow-md object-cover"
              />
            </div>
            
            {/* About Service */}
            <div className="mb-16">
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
                {aboutTitle}
              </h2>
              <div className="space-y-6">
                {aboutContent.map((paragraph, index) => (
                  <p key={index} className="text-gray-600 leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>

            {/* FAQ Section */}
            {faqs && faqs.length > 0 && (
              <div className="mb-16">
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
                  Frequently Asked Questions
                </h2>
                <div className="space-y-6">
                  {faqs.map((faq) => {
                    const isOpen = openFaqId === faq.id;
                    return (
                      <div key={faq.id} className="border-b border-gray-100 pb-6">
                        <div 
                          className="flex justify-between items-center cursor-pointer py-3"
                          onClick={() => toggleFaq(faq.id)}
                        >
                          <h3 className="text-base font-medium text-gray-800">{faq.question}</h3>
                          <button className="text-gray-400 w-8 h-8 flex items-center justify-center rounded-full bg-gray-50 hover:bg-gray-100 transition-colors">
                            {isOpen ? (
                              <span className="text-xl">−</span>
                            ) : (
                              <span className="text-xl">+</span>
                            )}
                          </button>
                        </div>
                        {isOpen && (
                          <div className="mt-4 text-gray-600 leading-relaxed pl-2">
                            <p>{faq.answer}</p>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            {/* Specialists Section */}
            {specialists && specialists.length > 0 && (
              <div>
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
                  Our Specialists
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {specialists.map((specialist) => (
                    <div key={specialist.id} className="text-center bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-50">
                      <img 
                        src={specialist.image} 
                        alt={specialist.name} 
                        className="w-full aspect-square object-cover object-center mb-5 rounded-md"
                      />
                      <h3 className="text-lg font-medium mb-2">{specialist.name}</h3>
                      <p className="text-gray-500">{specialist.title}</p>
                    </div>
                  ))}
                </div>
                <div className="mt-10 text-center">
                  <Link 
                    to="/team" 
                    className="inline-flex items-center text-blue-500 hover:text-blue-700 font-medium transition-colors"
                  >
                    VIEW ALL DOCTORS
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ServiceTemplate;
