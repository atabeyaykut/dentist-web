import React, { useState, useRef, useEffect } from 'react';

/**
 * PatientTestimonials Component
 * 
 * A component that displays patient testimonials in an infinite draggable slider
 * - Uses Lorem Picsum for images
 * - Implements infinite loop
 * - Supports drag-to-scroll functionality
 * - Prevents text selection during drag
 */
function PatientTestimonials() {
  // Testimonial data
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
    },
    {
      id: 6,
      name: "Liam T.",
      text: "From the moment I walked in, I felt welcomed. The receptionist was kind, and the dentist took time to explain everything clearly.",
      image: "https://picsum.photos/id/69/100/100"
    },
    {
      id: 7,
      name: "Sophia K.",
      text: "They helped me get over my fear of dentists. Extremely gentle and understanding team. So grateful I found them!",
      image: "https://picsum.photos/id/70/100/100"
    },
    {
      id: 8,
      name: "Noah B.",
      text: "Top-notch service with very short waiting times. I appreciated how clean and well-maintained everything was.",
      image: "https://picsum.photos/id/71/100/100"
    },
    {
      id: 9,
      name: "Ava M.",
      text: "My kids love coming here. The staff is amazing with children and always makes them laugh. Highly recommend for families.",
      image: "https://picsum.photos/id/72/100/100"
    },
    {
      id: 10,
      name: "James C.",
      text: "I had a root canal done and didn’t feel a thing. The dentist was calm, confident, and reassuring the entire time.",
      image: "https://picsum.photos/id/73/100/100"
    },
    {
      id: 11,
      name: "Isabella H.",
      text: "Clean, modern, and very friendly team. Scheduling an appointment was super easy, and I barely waited at all.",
      image: "https://picsum.photos/id/74/100/100"
    },
    {
      id: 12,
      name: "William P.",
      text: "They went above and beyond to make sure I was comfortable. Easily the best dental experience I’ve ever had.",
      image: "https://picsum.photos/id/75/100/100"
    }
  ];


  // Create an extended array for infinite loop effect
  const extendedTestimonials = [...testimonials, ...testimonials, ...testimonials];

  // Refs and state
  const sliderRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [activeIndex, setActiveIndex] = useState(0);

  // Initialize slider position
  useEffect(() => {
    if (!sliderRef.current) return;

    // Set initial scroll position to show the middle set
    const cardWidth = sliderRef.current.offsetWidth / 5;
    sliderRef.current.scrollLeft = testimonials.length * cardWidth;

    const handleScroll = () => {
      if (!sliderRef.current) return;

      const scrollPosition = sliderRef.current.scrollLeft;
      const containerWidth = sliderRef.current.offsetWidth;
      const cardWidth = containerWidth / 5;

      // Calculate which testimonial is most visible
      const index = Math.round(scrollPosition / cardWidth) % testimonials.length;
      setActiveIndex(index);

      // Handle infinite loop
      const maxScroll = sliderRef.current.scrollWidth - containerWidth;

      if (scrollPosition >= maxScroll - cardWidth) {
        // If near end, jump to middle set
        sliderRef.current.scrollLeft = testimonials.length * cardWidth;
      } else if (scrollPosition <= cardWidth) {
        // If near beginning, jump to middle set
        sliderRef.current.scrollLeft = testimonials.length * 2 * cardWidth - containerWidth;
      }
    };

    sliderRef.current.addEventListener('scroll', handleScroll);
    return () => {
      if (sliderRef.current) {
        sliderRef.current.removeEventListener('scroll', handleScroll);
      }
    };
  }, [testimonials.length]);

  // Handle mouse down event for dragging
  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.pageX - sliderRef.current.offsetLeft);
    setScrollLeft(sliderRef.current.scrollLeft);
  };

  // Handle mouse move event for dragging
  const handleMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - sliderRef.current.offsetLeft;
    const walk = (x - startX) * 2; // Scroll speed multiplier
    sliderRef.current.scrollLeft = scrollLeft - walk;
  };

  // Handle mouse up/leave events to stop dragging
  const handleDragEnd = () => {
    setIsDragging(false);
  };

  return (
    <section className="py-16 w-screen ">
      <div className=" w-[104vw] mx-auto relative left-[-2vw]">
        <h2 className="text-3xl md:text-4xl font-medium text-center mb-2">Patients love Dentalist Clinic</h2>
        <p className="text-center text-gray-600 mb-10">More than 250 five-star reviews on Google</p>

        <div
          ref={sliderRef}
          className="testimonials-container overflow-x-auto scrollbar-hide"
          style={{
            WebkitUserSelect: isDragging ? 'none' : 'auto',
            userSelect: isDragging ? 'none' : 'auto',
            cursor: isDragging ? 'grabbing' : 'grab',
            scrollSnapType: 'x mandatory',
            scrollBehavior: 'smooth',
            display: 'flex',
            msOverflowStyle: 'none', /* IE and Edge */
            scrollbarWidth: 'none' /* Firefox */
          }}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleDragEnd}
          onMouseLeave={handleDragEnd}
          onTouchStart={(e) => {
            setIsDragging(true);
            setStartX(e.touches[0].clientX - sliderRef.current.offsetLeft);
            setScrollLeft(sliderRef.current.scrollLeft);
          }}
          onTouchMove={(e) => {
            if (!isDragging) return;
            const x = e.touches[0].clientX - sliderRef.current.offsetLeft;
            const walk = (x - startX) * 2;
            sliderRef.current.scrollLeft = scrollLeft - walk;
          }}
          onTouchEnd={handleDragEnd}
        >
          {extendedTestimonials.map((testimonial, index) => (
            <div
              key={`${testimonial.id}-${index}`}
              className="testimonial-card flex-shrink-0 w-full md:w-1/5 lg:w-1/5 px-2 md:px-3"
              style={{
                scrollSnapAlign: 'center',
                minWidth: '100%'
              }}
            >
              <div className="p-3 md:p-4 h-full flex flex-col border-t-4 border-blue-500">
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

        <div className="flex justify-center mt-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              className={`w-2 h-2 mx-1 rounded-full ${activeIndex === index ? 'bg-blue-500' : 'bg-gray-300'
                }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
      <style jsx>{`
        .testimonials-container::-webkit-scrollbar {
          display: none;
        }
        
        @media (min-width: 768px) {
          .testimonial-card {
            min-width: 20% !important;
            max-width: 20% !important;
            flex: 0 0 20% !important;
          }
        }
        
        @media (max-width: 767px) {
          .testimonial-card {
            min-width: 100%;
            max-width: 100%;
            flex: 0 0 100%;
          }
        }
      `}</style>
    </section>
  );
}

export default PatientTestimonials;
