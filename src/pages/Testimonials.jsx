import React, { useState } from 'react';
import TestimonialSlider from '../components/TestimonialSlider';
import BeforeAfterSection from '../components/BeforeAfterSection';

/**
 * Testimonials Page Component
 */
function Testimonials() {
  // Testimonial categories
  const categories = [
    'All',
    'General Dentistry',
    'Cosmetic Dentistry',
    'Orthodontics',
    'Pediatric Dentistry',
    'Dental Implants'
  ];

  // Testimonials data
  const testimonials = [
    {
      id: 1,
      name: 'Sarah Thompson',
      location: 'Los Angeles, CA',
      image: 'https://picsum.photos/id/1027/150/150',
      category: 'Cosmetic Dentistry',
      rating: 5,
      text: 'I couldn\'t be happier with my smile makeover! Dr. Johnson and her team were professional, caring, and attentive throughout the entire process. The results exceeded my expectations, and I now smile with confidence in photos and social situations. I highly recommend this dental practice to anyone looking for exceptional cosmetic dentistry services.',
      date: 'June 15, 2025'
    },
    {
      id: 2,
      name: 'Michael Rodriguez',
      location: 'San Francisco, CA',
      image: 'https://picsum.photos/id/1012/150/150',
      category: 'Dental Implants',
      rating: 5,
      text: 'After losing two teeth in an accident, I was devastated. Dr. Wilson recommended dental implants, and I couldn\'t be more pleased with the results. The procedure was much more comfortable than I expected, and my new teeth look and feel completely natural. The entire team was supportive throughout my treatment journey, making a potentially stressful experience quite manageable.',
      date: 'May 28, 2025'
    },
    {
      id: 3,
      name: 'Emily Chen',
      location: 'Seattle, WA',
      image: 'https://picsum.photos/id/1014/150/150',
      category: 'General Dentistry',
      rating: 5,
      text: 'I\'ve been coming to this dental practice for over five years, and I\'ve always received excellent care. The hygienists are thorough yet gentle, and Dr. Thompson takes the time to explain everything clearly. The office is modern, clean, and equipped with the latest technology. I appreciate their focus on preventive care and how they make routine dental visits a pleasant experience.',
      date: 'May 12, 2025'
    },
    {
      id: 4,
      name: 'David Johnson',
      location: 'Portland, OR',
      image: 'https://picsum.photos/id/1025/150/150',
      category: 'Orthodontics',
      rating: 5,
      text: 'My experience with Invisalign at this practice was fantastic! Dr. Chen guided me through the entire process with expertise and patience. The staff was always accommodating with appointments, and they genuinely cared about my progress. In just 14 months, I achieved the straight smile I\'ve always wanted. The investment was absolutely worth it, and I would choose this team again without hesitation.',
      date: 'April 30, 2025'
    },
    {
      id: 5,
      name: 'Jennifer Martinez',
      location: 'San Diego, CA',
      image: 'https://picsum.photos/id/1001/150/150',
      category: 'Pediatric Dentistry',
      rating: 5,
      text: 'Finding a dentist who can work well with children is challenging, but Dr. Rodriguez is exceptional! My 5-year-old son used to be terrified of dental visits, but now he actually looks forward to them. The office has a fun, kid-friendly environment, and the staff knows exactly how to make children feel comfortable. They\'re patient, kind, and make dental care a positive experience for the whole family.',
      date: 'April 15, 2025'
    },
    {
      id: 6,
      name: 'Robert Kim',
      location: 'Denver, CO',
      image: 'https://picsum.photos/id/1074/150/150',
      category: 'General Dentistry',
      rating: 4,
      text: 'I recently moved to the area and needed to find a new dentist. After reading positive reviews, I decided to give this practice a try, and I\'m glad I did. The front desk staff is friendly and efficient with insurance processing, and my dental cleaning was thorough yet comfortable. Dr. Garcia took time to review my dental history and address my concerns. I\'ve found my new dental home!',
      date: 'March 22, 2025'
    },
    {
      id: 7,
      name: 'Amanda Wilson',
      location: 'Chicago, IL',
      image: 'https://picsum.photos/id/1011/150/150',
      category: 'Cosmetic Dentistry',
      rating: 5,
      text: 'After years of being self-conscious about my stained teeth, I finally decided to get professional whitening. The results are amazing! My teeth are several shades whiter, and the treatment was quick and painless. The team was knowledgeable about the process and gave me great tips for maintaining my results. I feel so much more confident when I smile now!',
      date: 'March 10, 2025'
    },
    {
      id: 8,
      name: 'Thomas Lee',
      location: 'Boston, MA',
      image: 'https://picsum.photos/id/1006/150/150',
      category: 'Dental Implants',
      rating: 5,
      text: 'Having worn dentures for years, I was skeptical about switching to implants at my age. However, it\'s been one of the best decisions I\'ve made. Dr. Wilson explained the procedure thoroughly and addressed all my concerns. The implants have completely transformed my quality of life - I can eat all my favorite foods again and speak with confidence. The entire team provided exceptional care throughout my treatment.',
      date: 'February 28, 2025'
    },
    {
      id: 9,
      name: 'Olivia Parker',
      location: 'Miami, FL',
      image: 'https://picsum.photos/id/1005/150/150',
      category: 'Orthodontics',
      rating: 5,
      text: 'As an adult needing braces, I was apprehensive about the process. This practice offered several discreet options and helped me choose the best one for my lifestyle. Throughout my treatment, the orthodontic team was attentive and responsive, making adjustments to ensure my comfort. The results have exceeded my expectations, and I only wish I had done this sooner!',
      date: 'February 15, 2025'
    }
  ];

  // State for active category
  const [activeCategory, setActiveCategory] = useState('All');

  // Filter testimonials based on active category
  const filteredTestimonials = activeCategory === 'All' 
    ? testimonials 
    : testimonials.filter(testimonial => testimonial.category === activeCategory);

  // Video testimonials
  const videoTestimonials = [
    {
      id: 1,
      thumbnail: 'https://picsum.photos/id/1035/600/400',
      title: 'Sarah\'s Smile Transformation',
      category: 'Cosmetic Dentistry',
      duration: '2:45'
    },
    {
      id: 2,
      thumbnail: 'https://picsum.photos/id/1036/600/400',
      title: 'Michael\'s Dental Implant Journey',
      category: 'Dental Implants',
      duration: '3:12'
    },
    {
      id: 3,
      thumbnail: 'https://picsum.photos/id/1039/600/400',
      title: 'The Williams Family Experience',
      category: 'Pediatric Dentistry',
      duration: '2:30'
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
            Patient Testimonials
          </h1>
        </div>
      </div>

      <div className="container mx-auto px-6 py-16">
        {/* Introduction */}
        <div className="max-w-3xl mx-auto mb-12 text-center">
          <h2 
            className="mb-6 text-3xl"
            style={{
              fontFamily: 'var(--cmsmasters-h2-font-family)',
              fontSize: 'var(--cmsmasters-h2-font-size)',
              lineHeight: 'var(--cmsmasters-h2-line-height)',
              fontWeight: 'var(--cmsmasters-h2-font-weight)',
              color: 'var(--cmsmasters-colors-heading)'
            }}
          >
            What Our Patients Say
          </h2>
          <p className="text-gray-600 leading-relaxed">
            We're proud of the positive experiences our patients have at our dental practice. Read through these testimonials to learn more about the quality of care we provide and the results we achieve.
          </p>
        </div>

        {/* Featured Testimonial Slider */}
        <div className="mb-16">
          <TestimonialSlider />
        </div>

        {/* Category Filter */}
        <div className="mb-12 flex flex-wrap justify-center gap-3">
          {categories.map((category, index) => (
            <button
              key={index}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                activeCategory === category
                  ? 'bg-blue-500 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {filteredTestimonials.map(testimonial => (
            <div key={testimonial.id} className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100 p-6">
              {/* Rating */}
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg 
                    key={i} 
                    xmlns="http://www.w3.org/2000/svg" 
                    className={`h-5 w-5 ${i < testimonial.rating ? 'text-yellow-400' : 'text-gray-300'}`} 
                    viewBox="0 0 20 20" 
                    fill="currentColor"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              
              {/* Testimonial Text */}
              <p className="text-gray-600 mb-6 italic">"{testimonial.text}"</p>
              
              {/* Patient Info */}
              <div className="flex items-center">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name} 
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-medium">{testimonial.name}</h4>
                  <p className="text-sm text-gray-500">{testimonial.location}</p>
                </div>
              </div>
              
              {/* Category and Date */}
              <div className="flex justify-between items-center mt-4 pt-4 border-t border-gray-100 text-sm">
                <span className="text-blue-600">{testimonial.category}</span>
                <span className="text-gray-500">{testimonial.date}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Before & After Section */}
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
            Before & After Results
          </h2>
          <BeforeAfterSection />
        </div>

        {/* Video Testimonials */}
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
            Video Testimonials
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {videoTestimonials.map(video => (
              <div key={video.id} className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100">
                <div className="relative">
                  <img 
                    src={video.thumbnail} 
                    alt={video.title} 
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 bg-white bg-opacity-80 rounded-full flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-500" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </div>
                  <span className="absolute bottom-2 right-2 bg-black bg-opacity-70 text-white text-xs px-2 py-1 rounded">
                    {video.duration}
                  </span>
                </div>
                <div className="p-4">
                  <h3 className="font-medium mb-1">{video.title}</h3>
                  <p className="text-sm text-blue-600">{video.category}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Share Your Story */}
        <div className="bg-blue-50 rounded-lg p-8 text-center">
          <h2 
            className="mb-4 text-2xl"
            style={{
              fontFamily: 'var(--cmsmasters-h3-font-family)',
              fontSize: 'var(--cmsmasters-h3-font-size)',
              lineHeight: 'var(--cmsmasters-h3-line-height)',
              fontWeight: 'var(--cmsmasters-h3-font-weight)',
              color: 'var(--cmsmasters-colors-heading)'
            }}
          >
            Share Your Experience
          </h2>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            We value your feedback and would love to hear about your experience at our dental practice. Your testimonial helps us improve our services and helps other patients make informed decisions about their dental care.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/contact?subject=testimonial" 
              className="px-6 py-3 bg-blue-500 text-white font-medium rounded-md hover:bg-blue-600 transition-colors"
            >
              Submit a Written Testimonial
            </a>
            <a 
              href="/contact?subject=video-testimonial" 
              className="px-6 py-3 bg-white text-blue-500 border border-blue-500 font-medium rounded-md hover:bg-blue-50 transition-colors"
            >
              Record a Video Testimonial
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Testimonials;
