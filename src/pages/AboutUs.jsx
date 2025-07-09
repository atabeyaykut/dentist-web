import React from 'react';
import { Link } from 'react-router-dom';
import WhyChooseUs from '../components/WhyChooseUs';
import ClinicalExcellence from '../components/ClinicalExcellence';

/**
 * AboutUs Page Component
 */
function AboutUs() {
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
            About Our Practice
          </h1>
        </div>
      </div>

      <div className="container mx-auto px-6 py-16">
        {/* Hero Section */}
        <div className="flex flex-col lg:flex-row gap-12 mb-16">
          <div className="lg:w-1/2">
            <img 
              src="https://picsum.photos/id/1000/800/600" 
              alt="Our Dental Practice" 
              className="w-full h-auto rounded-lg shadow-md object-cover"
            />
          </div>
          <div className="lg:w-1/2">
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
              Our Story
            </h2>
            <div className="space-y-6">
              <p className="text-gray-600 leading-relaxed">
                Founded in 2005, our dental practice has been dedicated to providing exceptional dental care to our community for over two decades. What started as a small family practice has grown into a comprehensive dental center offering a wide range of services while maintaining the personal touch that our patients have come to appreciate.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Our mission is to deliver the highest quality dental care in a comfortable, relaxed environment. We believe in treating each patient as an individual, taking the time to understand their unique needs and concerns. Our team of experienced professionals is committed to staying at the forefront of dental technology and techniques to ensure the best possible outcomes for our patients.
              </p>
              <p className="text-gray-600 leading-relaxed">
                We pride ourselves on creating lasting relationships with our patients, many of whom have been with us since we opened our doors. Our practice continues to grow primarily through word-of-mouth referrals—a testament to the trust our patients place in us and the quality of care we provide.
              </p>
            </div>
          </div>
        </div>

        {/* Our Values Section */}
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
            Our Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-50 text-center">
              <div className="bg-blue-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-medium mb-4">Excellence</h3>
              <p className="text-gray-600">
                We strive for excellence in everything we do, from the quality of our dental work to the service we provide. Our commitment to continuous learning and improvement ensures that our patients receive the best possible care.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-50 text-center">
              <div className="bg-blue-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-medium mb-4">Compassion</h3>
              <p className="text-gray-600">
                We understand that dental visits can be stressful for many people. Our team approaches each patient with empathy and compassion, taking the time to listen and address concerns to ensure a comfortable experience.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-50 text-center">
              <div className="bg-blue-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-medium mb-4">Integrity</h3>
              <p className="text-gray-600">
                We believe in transparent, honest communication with our patients. We provide clear explanations of treatment options, costs, and expected outcomes, empowering our patients to make informed decisions about their dental care.
              </p>
            </div>
          </div>
        </div>

        {/* Why Choose Us Section */}
        <div className="mb-16">
          <WhyChooseUs />
        </div>

        {/* Clinical Excellence Section */}
        <div className="mb-16">
          <ClinicalExcellence />
        </div>

        {/* Our Facilities */}
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
            Our Modern Facilities
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <img 
                src="https://picsum.photos/id/1048/600/400" 
                alt="Reception Area" 
                className="w-full h-auto rounded-lg shadow-md object-cover mb-4"
              />
              <h3 className="text-xl font-medium mb-2">Welcoming Reception</h3>
              <p className="text-gray-600">
                Our comfortable reception area is designed to make you feel at home from the moment you walk in. Enjoy complimentary refreshments and Wi-Fi while you wait.
              </p>
            </div>
            <div>
              <img 
                src="https://picsum.photos/id/1037/600/400" 
                alt="Treatment Room" 
                className="w-full h-auto rounded-lg shadow-md object-cover mb-4"
              />
              <h3 className="text-xl font-medium mb-2">State-of-the-Art Treatment Rooms</h3>
              <p className="text-gray-600">
                Our treatment rooms are equipped with the latest dental technology to provide efficient, comfortable care. Entertainment options help you relax during your treatment.
              </p>
            </div>
          </div>
          <div className="mt-8 text-center">
            <Link 
              to="/contact" 
              className="inline-flex items-center justify-center px-6 py-3 bg-blue-500 text-white font-medium rounded-md hover:bg-blue-600 transition-colors"
            >
              Schedule a Tour
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
