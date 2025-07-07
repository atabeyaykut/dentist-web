import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

/**
 * InfiniteSlider Component
 * 
 * A mid-level infinite slider component that displays items in a continuous loop.
 * It accepts an array of objects as data and renders them in a horizontally scrolling slider.
 * 
 * @param {Object} props
 * @param {Array} props.items - Array of objects containing the slide data
 * @param {number} props.speed - Speed of the slider animation in ms (default: 3000)
 * @param {number} props.visibleItems - Number of items visible at once (default: 3)
 * @param {boolean} props.autoPlay - Whether the slider should auto-play (default: true)
 * @param {string} props.className - Additional CSS classes for the slider container
 */
function InfiniteSlider({
  items = sampleItems,
  speed = 5000,
  visibleItems = 8,
  autoPlay = true,
  className = '',
}) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const sliderRef = useRef(null);
  const intervalRef = useRef(null);

  // Clone the items array to create the infinite effect
  const extendedItems = [...items, ...items, ...items];

  // Calculate the total width each item should take based on visible items
  const itemWidth = 100 / visibleItems;

  // Handle automatic sliding
  useEffect(() => {
    if (autoPlay && !isHovered && items.length > visibleItems) {
      intervalRef.current = setInterval(() => {
        setCurrentIndex((prevIndex) => {
          // When we reach the end of the original items, reset to start
          if (prevIndex >= items.length * 2) {
            return items.length;
          }
          return prevIndex + 1;
        });
      }, speed);
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [autoPlay, isHovered, items.length, speed, visibleItems]);

  // Handle manual navigation
  const handlePrev = () => {
    setCurrentIndex((prevIndex) => {
      if (prevIndex <= 0) {
        return items.length - 1;
      }
      return prevIndex - 1;
    });
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => {
      if (prevIndex >= items.length * 2) {
        return items.length;
      }
      return prevIndex + 1;
    });
  };

  // Reset to the middle set when reaching the end
  useEffect(() => {
    if (currentIndex >= items.length * 2) {
      const timeout = setTimeout(() => {
        // Disable the transition temporarily
        if (sliderRef.current) {
          sliderRef.current.style.transition = 'none';
          setCurrentIndex(items.length);

          // Re-enable the transition after a small delay
          setTimeout(() => {
            if (sliderRef.current) {
              sliderRef.current.style.transition = 'transform 0.7s ease';
            }
          }, 50);
        }
      }, 700);

      return () => clearTimeout(timeout);
    }

    if (currentIndex < 0) {
      const timeout = setTimeout(() => {
        if (sliderRef.current) {
          sliderRef.current.style.transition = 'none';
          setCurrentIndex(items.length - 1);

          setTimeout(() => {
            if (sliderRef.current) {
              sliderRef.current.style.transition = 'transform 0.7s ease';
            }
          }, 50);
        }
      }, 700);

      return () => clearTimeout(timeout);
    }
  }, [currentIndex, items.length]);

  // Calculate the transform value
  const translateX = -currentIndex * itemWidth;

  return (
    <div
      className={`infinite-slider-container w-screen overflow-hidden relative ${className} py-12`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="w-full">
        <h2 className="text-5xl text-center w-full font-light py-20 bg-gradient-to-r from-[#00EFD1] to-[#00B2FF] mb-0">POPÜLER HİZMETLERİMİZ</h2>
      </div>
      <div className="w-full">
        <div
          ref={sliderRef}
          className="infinite-slider-track flex transition-transform duration-700 ease-in-out"
          style={{
            transform: `translateX(${translateX}%)`,
            width: `${extendedItems.length * itemWidth}%`
          }}
        >
          {extendedItems.map((item, index) => (
            <div
              key={`${item.id || index}-${index}`}
              className="infinite-slider-item flex-shrink-0"
              style={{ width: `${itemWidth}%` }}
            >
              <div className="relative h-[450px] overflow-hidden group">
                <div className="absolute inset-0 z-10 pointer-events-none">
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-900/50 to-gray-900/80 opacity-50 transition-opacity duration-700"></div>
                  <div className="absolute inset-0 bg-gradient-to-b from-gray-900/60 via-gray-900/70 to-gray-900/95 opacity-50 group-hover:opacity-70 transition-opacity duration-700"></div>
                </div>

                <img
                  src={item.image}
                  alt={item.title || `Slide ${index}`}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />

                {/* Content positioned over the image */}
                <div className="absolute inset-0 z-20 flex flex-col justify-between p-8 text-white">
                  <div>
                    {item.category && (
                      <Link to={item.categoryLink || '#'} className="uppercase tracking-wider text-sm font-medium mb-2 block text-gray-200">
                        {item.category}
                      </Link>
                    )}

                    {item.title && (
                      <Link to={item.link || '#'} className="block">
                        <h3 className="text-2xl font-light mt-2 border-gray-400 pt-2">
                          {item.title}
                        </h3>
                      </Link>
                    )}
                  </div>

                  <div className="mt-auto">
                    <Link
                      to={item.link || '#'}
                      className="inline-block px-6 py-3 border border-white text-white hover:bg-white hover:text-gray-900 transition-colors uppercase tracking-wider text-sm font-medium"
                    >
                      View Details
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation buttons */}
      <button
        className="slider-nav-button prev absolute top-1/2 left-6 -translate-y-1/2 bg-white bg-opacity-80 hover:bg-opacity-100 rounded-full p-3 shadow-lg z-30 transition-all"
        onClick={handlePrev}
        aria-label="Previous slide"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="15 18 9 12 15 6"></polyline>
        </svg>
      </button>

      <button
        className="slider-nav-button next absolute top-1/2 right-6 -translate-y-1/2 bg-white bg-opacity-80 hover:bg-opacity-100 rounded-full p-3 shadow-lg z-30 transition-all"
        onClick={handleNext}
        aria-label="Next slide"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="9 18 15 12 9 6"></polyline>
        </svg>
      </button>
    </div>
  );
}

// Sample items for the slider
const sampleItems = [
  {
    id: 1,
    category: 'SPECIALIZED CARE',
    categoryLink: '/categories/estetik-dis-hekimligi',
    title: 'Emergency Dentistry',
    description: 'Dişlerinizin şeklini, rengini ve dizilimini değiştirerek mükemmel gülüşe kavuşun.',
    image: 'https://picsum.photos/id/101/800/600',
    link: '/services/emergency-dentistry'
  },
  {
    id: 2,
    category: 'COSMETIC DENTISTRY',
    categoryLink: '/categories/cerrahi-islemler',
    title: 'Smile Makeover',
    description: 'Eksik dişlerinizi doğal görünümlü ve fonksiyonel implantlarla değiştirin.',
    image: 'https://picsum.photos/id/102/800/600',
    link: '/services/smile-makeover'
  },
  {
    id: 3,
    category: 'PREVENTIVE CARE',
    categoryLink: '/categories/koruyucu-dis-hekimligi',
    title: 'Dental Cleaning',
    description: 'Profesyonel diş temizliği ile diş eti hastalıklarını önleyin.',
    image: 'https://picsum.photos/id/103/800/600',
    link: '/services/dental-cleaning'
  },
  {
    id: 4,
    category: 'ORTHODONTICS',
    categoryLink: '/categories/ortodonti',
    title: 'Invisible Aligners',
    description: 'Görünmez diş telleri ile estetik kaygı yaşamadan dişlerinizi düzeltin.',
    image: 'https://picsum.photos/id/104/800/600',
    link: '/services/invisible-aligners'
  },
  {
    id: 5,
    category: 'PEDIATRIC DENTISTRY',
    categoryLink: '/categories/cocuk-dis-hekimligi',
    title: 'Children\'s Dental Care',
    description: 'Çocuğunuzun diş sağlığını korumak için özel tedaviler.',
    image: 'https://picsum.photos/id/106/800/600',
    link: '/services/childrens-dental-care'
  },
  {
    id: 6,
    category: 'ENDODONTICS',
    categoryLink: '/categories/endodonti',
    title: 'Root Canal Therapy',
    description: 'Ağrılı dişlerinizi çekmeden kurtarmanın modern yolu.',
    image: 'https://picsum.photos/id/107/800/600',
    link: '/services/root-canal-therapy'
  }
];

export default InfiniteSlider;
