import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ServicesSidebar from '../components/ServicesSidebar';

/**
 * PediatricDentistry Component
 * 
 * A page component that displays information about pediatric dentistry services
 * - Includes sidebar with services list
 * - Consultation form
 * - Service description
 * - FAQ section
 * - Specialists section
 */
function PediatricDentistry() {
  // No longer need services data as it's now in ServicesSidebar component

  // State for managing FAQ accordion
  const [openFaqId, setOpenFaqId] = useState(1);

  // Toggle FAQ accordion
  const toggleFaq = (id) => {
    setOpenFaqId(openFaqId === id ? null : id);
  };

  // FAQ data
  const faqs = [
    {
      id: 1,
      question: "Are Regular Dental Cleanings Necessary?",
      answer: "The European languages are members of the same family. Their separate existence is a myth. For science, music, sport, etc, Europe uses the same vocabulary. The languages only differ in their grammar, their pronunciation and their most common words. Everyone realizes why a new common language would be desirable."
    },
    {
      id: 2,
      question: "Do I Need to See a Dentist Even If My Teeth Feel Fine?",
      answer: "Regular dental check-ups are essential even when your teeth feel fine. Many dental issues develop without symptoms until they're advanced. Dentists can detect problems early, saving you pain and expense. Preventive care helps maintain oral health and can identify systemic health issues that first show signs in the mouth."
    },
    {
      id: 3,
      question: "What's a Dental Cleaning Like at Ruby Canyon Dental?",
      answer: "A dental cleaning at Ruby Canyon Dental is thorough yet comfortable. Our hygienists use specialized tools to remove plaque and tartar, polish your teeth, and provide fluoride treatment if needed. We also perform oral cancer screenings and offer personalized oral hygiene advice. The entire process typically takes 45-60 minutes."
    },
    {
      id: 4,
      question: "When Should I Change My Toothbrush?",
      answer: "You should replace your toothbrush every 3-4 months, or sooner if the bristles become frayed or worn. After illnesses, it's also a good idea to replace your toothbrush to prevent reinfection. Regular replacement ensures effective cleaning and maintains good oral hygiene."
    },
    {
      id: 5,
      question: "How Do I Know If I Have Gum Disease?",
      answer: "Signs of gum disease include red, swollen, or tender gums; bleeding while brushing or flossing; receding gums; persistent bad breath; loose teeth; and changes in how your teeth fit together. Early detection is crucial, so schedule an appointment if you notice any of these symptoms. Regular dental check-ups help catch gum disease in its early, more treatable stages."
    }
  ];

  // Specialists data
  const specialists = [
    {
      id: 1,
      name: "Mark Potter",
      title: "Cosmetic Dentistry",
      image: "https://picsum.photos/id/1027/300/300"
    },
    {
      id: 2,
      name: "Anna Middleton",
      title: "Preventive Dentistry",
      image: "https://picsum.photos/id/1000/300/300"
    },
    {
      id: 3,
      name: "John Pierson, RDH",
      title: "Orthodontic Solutions",
      image: "https://picsum.photos/id/1074/300/300"
    }
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
            Emergency Dentistry
          </h1>
        </div>
      </div>

      <div className="container mx-auto px-6 py-16">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Sidebar */}
          <div className="lg:w-1/4">
            {/* Services List */}
            <div className="mb-8">
              <ServicesSidebar />
            </div>

            {/* Consultation Form */}
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
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
                Book a Consultation:
              </h3>
              <form>
                <div className="mb-4">
                  <input 
                    type="text" 
                    placeholder="Your Full Name" 
                    className="w-full px-4 py-3 border border-gray-200 focus:outline-none"
                  />
                </div>
                <div className="mb-4">
                  <input 
                    type="tel" 
                    placeholder="Your Phone" 
                    className="w-full px-4 py-3 border border-gray-200 focus:outline-none"
                  />
                </div>
                <div className="mb-4">
                  <input 
                    type="text" 
                    placeholder="Select Date" 
                    className="w-full px-4 py-3 border border-gray-200 focus:outline-none"
                  />
                </div>
                <div className="mb-4 flex gap-3">
                  <div className="w-1/2">
                    <div className="relative">
                      <select 
                        className="w-full appearance-none px-4 py-3 border border-gray-200 focus:outline-none bg-white"
                      >
                        <option>08</option>
                        <option>09</option>
                        <option>10</option>
                        <option>11</option>
                        <option>12</option>
                      </select>
                      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-400">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div className="w-1/2">
                    <div className="relative">
                      <select 
                        className="w-full appearance-none px-4 py-3 border border-gray-200 focus:outline-none bg-white"
                      >
                        <option>30</option>
                        <option>00</option>
                        <option>15</option>
                        <option>45</option>
                      </select>
                      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-400">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
                <button 
                  type="submit" 
                  className="w-full py-3 px-4 bg-[#00efd1] hover:bg-[#00d1c5] text-white text-center rounded-md transition-colors"
                  style={{
                    fontFamily: 'var(--cmsmasters-accent-font-family)',
                    fontSize: 'var(--cmsmasters-accent-font-size)',
                    fontWeight: 'var(--cmsmasters-accent-font-weight)',
                    textTransform: 'var(--cmsmasters-accent-text-transform)',
                    letterSpacing: 'var(--cmsmasters-accent-letter-spacing)'
                  }}
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
                src="https://picsum.photos/id/1059/1200/600" 
                alt="Emergency Dentistry" 
                className="w-full h-auto rounded-lg shadow-md object-cover"
              />
            </div>
            
            {/* About Emergency Dentistry */}
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
                About Emergency Dentistry Services
              </h2>
              <div className="space-y-6">
                <p className="text-gray-600 leading-relaxed">
                  I enjoy getting to know my patients and building meaningful relationships. I understand that each person has their own unique dental needs and diverse cultural backgrounds. I strive to actively listen and empower them to be an advocate for the health and wellness goals that are important to them.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  I'm dedicated to providing compassionate and individualized care by promoting evidence-based dentistry and education and practicing preventive medicine. I communicate about practicing preventive medicine and helping patients manage acute and chronic health conditions, mental health.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  I enjoy by doing almost any outdoor activity, including hiking, running, and exploring with our kiddos. I enjoy spending time with family and friends. I also strive to live mindfully and intentionally by creating uplifting routines and limiting media.
                </p>
              </div>
            </div>

            {/* FAQ Section */}
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

            {/* Specialists Section */}
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
          </div>
        </div>
      </div>
    </div>
  );
}

export default PediatricDentistry;
