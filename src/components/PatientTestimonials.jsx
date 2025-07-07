import React from 'react';

/**
 * PatientTestimonials Component
 * 
 * A component that displays 5 patient testimonials side by side
 * - Uses Lorem Picsum for images
 * - Shows all 5 testimonials at once on desktop
 * - Shows 1 testimonial at a time on mobile with swipe functionality
 */
function PatientTestimonials() {
  // Testimonial data - using only 5 testimonials as requested
  const testimonials = [
    {
      id: 1,
      name: "Mia G.",
      text: "Staff is modern and clean, with state-of-the-art equipment. I was really impressed by the attention to detail in a sterile environment, which is very important to me given the current health situation.",
      image: "https://picsum.photos/id/64/100/100"
    },
    {
      id: 2,
      name: "John D.",
      text: "Anthony did a great job cleaning my teeth, was really thorough and it was totally painless. I'm nervous about the dentist normally but I'd highly recommend this place to anybody!",
      image: "https://picsum.photos/id/65/100/100"
    },
    {
      id: 3,
      name: "Debbie S.",
      text: "I go for regular hygienist appointments at Dentalist Clinic and my teeth are much healthier now! I would definitely recommend.",
      image: "https://picsum.photos/id/66/100/100"
    },
    {
      id: 4,
      name: "Harvey J.",
      text: "This is a wonderful dental office with very professional and friendly staff and up to date technology. They took me at a very short notice when I needed emergency dental work, they were so nice and accommodating.",
      image: "https://picsum.photos/id/67/100/100"
    },
    {
      id: 5,
      name: "Ella R.",
      text: "The best dental care I have ever experienced! Professional and caring staff made me feel like family. I highly recommend to anyone.",
      image: "https://picsum.photos/id/68/100/100"
    }
  ];

  return (
    <section className="py-16 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-medium text-center mb-2">Patients love Dentalist Clinic</h2>
        <p className="text-center text-gray-600 mb-10">More than 250 five-star reviews on Google</p>
        
        {/* Desktop view - all 5 testimonials side by side */}
        <div className="hidden md:flex md:flex-row md:space-x-4">
          {testimonials.map((testimonial) => (
            <div 
              key={testimonial.id}
              className="w-1/5 px-2"
            >
              <div className="h-full flex flex-col border-t-4 border-blue-500 p-4">
                <div className="flex text-yellow-400 mb-2">
                  <span>★</span>
                  <span>★</span>
                  <span>★</span>
                  <span>★</span>
                  <span>★</span>
                </div>
                
                <p className="text-gray-700 flex-grow text-sm md:text-base mb-4">{testimonial.text}</p>
                
                <div className="flex items-center mt-auto">
                  <div className="flex-shrink-0">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-10 h-10 md:w-12 md:h-12 rounded-full object-cover"
                    />
                  </div>
                  <div className="ml-3">
                    <p className="font-medium text-gray-900">{testimonial.name}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Mobile view - single testimonial with swipe */}
        <div className="md:hidden">
          <div className="overflow-x-auto flex snap-x snap-mandatory scrollbar-hide">
            {testimonials.map((testimonial) => (
              <div 
                key={testimonial.id}
                className="w-full flex-shrink-0 flex-grow-0 px-4 snap-center"
                style={{ minWidth: '100%' }}
              >
                <div className="h-full flex flex-col border-t-4 border-blue-500 p-4">
                  <div className="flex text-yellow-400 mb-2">
                    <span>★</span>
                    <span>★</span>
                    <span>★</span>
                    <span>★</span>
                    <span>★</span>
                  </div>
                  
                  <p className="text-gray-700 flex-grow text-sm md:text-base mb-4">{testimonial.text}</p>
                  
                  <div className="flex items-center mt-auto">
                    <div className="flex-shrink-0">
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-10 h-10 md:w-12 md:h-12 rounded-full object-cover"
                      />
                    </div>
                    <div className="ml-3">
                      <p className="font-medium text-gray-900">{testimonial.name}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Mobile pagination dots */}
          <div className="flex justify-center mt-8">
            {testimonials.map((_, index) => (
              <div
                key={index}
                className={`w-2 h-2 mx-1 rounded-full ${index === 0 ? 'bg-blue-500' : 'bg-gray-300'}`}
                aria-label={`Slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
      
      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
}

export default PatientTestimonials;
