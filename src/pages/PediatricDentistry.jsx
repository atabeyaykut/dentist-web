import React from 'react';
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

  // FAQ data
  const faqs = [
    {
      id: 1,
      question: "Are Regular Dental Cleanings Necessary?",
      answer: "Yes! Regular cleanings are essential for your child's dental health. They help maintain excellent oral hygiene, catch early issues that can develop into serious problems, and help establish good dental habits. Our team gently cleans your child's teeth and provides education on proper brushing techniques."
    },
    {
      id: 2,
      question: "Do Fluoride Treatments Benefit My Child's Teeth From Decay?",
      answer: "Yes, fluoride treatments are highly beneficial for children. Fluoride strengthens tooth enamel, making it more resistant to acid attacks that cause tooth decay. Our professional fluoride treatments provide an extra layer of protection beyond regular brushing with fluoride toothpaste."
    },
    {
      id: 3,
      question: "What is a Dental Cleaning Like at Our Pediatric Dentist?",
      answer: "Our dental cleanings are gentle, thorough, and designed specifically for children. We use kid-friendly tools and explain each step in age-appropriate language. The appointment typically includes plaque removal, gentle polishing, fluoride treatment, and oral hygiene education in a fun, comfortable environment."
    },
    {
      id: 4,
      question: "When Should I Change my Toothbrush?",
      answer: "You should replace your child's toothbrush every 3-4 months, or sooner if the bristles become frayed or worn. After illnesses, it's also a good idea to replace the toothbrush to prevent reinfection. Regular replacement ensures effective cleaning and maintains good oral hygiene."
    },
    {
      id: 5,
      question: "How Can I Prevent White Spots On Braces?",
      answer: "To prevent white spots while your child has braces, ensure thorough brushing around brackets and wires after every meal, use a fluoride mouthwash daily, avoid sugary and acidic foods/drinks, attend regular dental cleanings, and consider professional fluoride treatments during orthodontic appointments."
    }
  ];

  // Specialists data
  const specialists = [
    {
      id: 1,
      name: "Mark Foster",
      title: "Pediatric Dentist",
      image: "https://picsum.photos/id/1027/200/200"
    },
    {
      id: 2,
      name: "Anna Muldoon",
      title: "Orthodontist",
      image: "https://picsum.photos/id/1000/200/200"
    },
    {
      id: 3,
      name: "John Peterson, DDS",
      title: "Dental Surgeon",
      image: "https://picsum.photos/id/1074/200/200"
    }
  ];

  return (
    <div className="bg-white">
      {/* Page Header */}
      <div className="bg-white py-8 border-b border-gray-100">
        <div className="container mx-auto px-4">
          <h1 
            className="text-center" 
            style={{
              fontFamily: 'var(--cmsmasters-h1-font-family)',
              fontSize: 'var(--cmsmasters-h1-font-size)',
              lineHeight: 'var(--cmsmasters-h1-line-height)',
              fontWeight: 'var(--cmsmasters-h1-font-weight)',
              color: 'var(--cmsmasters-colors-heading)'
            }}
          >
            Pediatric Dentistry
          </h1>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar */}
          <div className="lg:w-1/4">
            {/* Services List */}
            <div className="mb-8">
              <ServicesSidebar />
            </div>

            {/* Consultation Form */}
            <div className="bg-gray-50 p-6 rounded-md">
              <h3 className="text-xl font-medium mb-4">Book a Consultation</h3>
              <form>
                <div className="mb-4">
                  <input 
                    type="text" 
                    placeholder="Your Name" 
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div className="mb-4">
                  <input 
                    type="tel" 
                    placeholder="Your Phone" 
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div className="mb-4">
                  <input 
                    type="email" 
                    placeholder="Email (Optional)" 
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div className="mb-4 flex">
                  <div className="w-1/2 pr-2">
                    <input 
                      type="date" 
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div className="w-1/2 pl-2">
                    <input 
                      type="time" 
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                </div>
                <button 
                  type="submit" 
                  className="w-full py-3 px-4 bg-[#00efd1] hover:bg-[#00c5be] text-black transition-colors"
                  style={{
                    fontFamily: 'var(--cmsmasters-accent-font-family)',
                    fontSize: 'var(--cmsmasters-accent-font-size)',
                    fontWeight: 'var(--cmsmasters-accent-font-weight)',
                    textTransform: 'var(--cmsmasters-accent-text-transform)',
                    letterSpacing: 'var(--cmsmasters-accent-letter-spacing)'
                  }}
                >
                  BOOK AN APPOINTMENT
                </button>
              </form>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:w-3/4">
            {/* About Pediatric Dentistry */}
            <div className="mb-12">
              <h2 
                className="mb-6"
                style={{
                  fontFamily: 'var(--cmsmasters-h2-font-family)',
                  fontSize: 'var(--cmsmasters-h2-font-size)',
                  lineHeight: 'var(--cmsmasters-h2-line-height)',
                  fontWeight: 'var(--cmsmasters-h2-font-weight)',
                  color: 'var(--cmsmasters-colors-heading)'
                }}
              >
                About Pediatric Dentistry Services
              </h2>
              <p className="mb-4 text-gray-700">
                Helping your child develop healthy dental hygiene habits early is essential for their long-term oral health. Our pediatric dentistry services are designed specifically for children, with gentle care and a kid-friendly approach. We know how important it is for a child's first dental experiences to be positive ones, which is why our team is specially trained to make dental visits fun and comfortable for young patients.
              </p>
              <p className="mb-4 text-gray-700">
                Our pediatric dental services include regular check-ups, cleanings, fluoride treatments, dental sealants, cavity fillings, and education on proper brushing and flossing techniques. We also provide guidance to parents on nutrition and habits that can affect their child's dental health, such as thumb-sucking and pacifier use.
              </p>
              <p className="text-gray-700">
                The early years are crucial for establishing good dental habits. By bringing your child in regularly for check-ups, you're helping them develop a positive relationship with dental care that will benefit them throughout their life. Our team is committed to making each visit a pleasant experience, ensuring your child looks forward to their dental appointments.
              </p>
            </div>

            {/* FAQ Section */}
            <div className="mb-12">
              <h2 
                className="mb-6"
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
              <div className="space-y-4">
                {faqs.map((faq) => (
                  <div key={faq.id} className="border-b border-gray-200 pb-4">
                    <div className="flex justify-between items-center cursor-pointer">
                      <h3 className="text-lg font-medium text-gray-900">{faq.question}</h3>
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                      </svg>
                    </div>
                    <div className="mt-2 text-gray-600">
                      <p>{faq.answer}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Specialists Section */}
            <div>
              <h2 
                className="mb-6"
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
                  <div key={specialist.id} className="text-center">
                    <img 
                      src={specialist.image} 
                      alt={specialist.name} 
                      className="w-full h-64 object-cover object-center mb-4 rounded-md"
                    />
                    <h3 className="text-xl font-medium">{specialist.name}</h3>
                    <p className="text-gray-600">{specialist.title}</p>
                  </div>
                ))}
              </div>
              <div className="mt-8 text-center">
                <Link 
                  to="/team" 
                  className="inline-flex items-center text-blue-500 hover:text-blue-700"
                >
                  VIEW ALL DOCTORS
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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
