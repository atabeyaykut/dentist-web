import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function BeforeAfterSection() {
  const [sliderPosition, setSliderPosition] = useState(50);

  const handleSliderChange = (e) => {
    setSliderPosition(e.target.value);
  };

  return (
    <section className="w-full py-24 bg-white">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
        {/* Left Content */}
        <div className="w-full md:w-1/2 pr-0 md:pr-12 mb-10 md:mb-0">
          <div className="max-w-md">
            <p className="uppercase text-sm tracking-wider text-gray-500 mb-2">COSMETIC SMILE MAKEOVER</p>
            <h2 className="text-4xl font-light mb-6">Start your journey to<br />a better smile</h2>

            <p className="text-gray-600 mb-8">
              We will always take the time to listen carefully to exactly what you want to achieve from your new smile, before identifying your treatment plan.
            </p>

            <Link
              to="/book-appointment"
              className="inline-block border border-gray-900 px-8 py-3 uppercase text-sm font-medium tracking-wider hover:bg-gray-900 hover:text-white transition-colors"
            >
              BOOK A VISIT
            </Link>
          </div>
        </div>

        {/* Right Content - Before/After Images with Slider */}
        <div className="w-full md:w-3/4 relative">
          <div className="relative w-full h-[400px] overflow-hidden rounded-lg">
            {/* Container for both images */}
            <div className="absolute inset-0 w-full h-full">
              {/* Before Image (Left side) */}
              <div className="absolute inset-0 w-full h-full">
                <img
                  src="https://picsum.photos/seed/before/800/600"
                  alt="Before treatment"
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4 bg-[#00D6C9] text-white px-4 py-1 text-sm font-medium rounded-sm">
                  Before
                </div>
              </div>

              {/* After Image (Right side) */}
              <div
                className="absolute inset-0 w-full h-full"
                style={{
                  clipPath: `inset(0 0 0 ${sliderPosition}%)`
                }}
              >
                <img
                  src="https://picsum.photos/seed/after/800/600"
                  alt="After treatment"
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 right-4 bg-[#00D6C9] text-white px-4 py-1 text-sm font-medium rounded-sm">
                  After
                </div>
              </div>
            </div>

            {/* Slider Control */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              {/* Vertical divider line */}
              <div
                className="h-full w-0.5 bg-white pointer-events-none"
                style={{ left: `${sliderPosition}%`, position: 'absolute' }}
              ></div>

              {/* Slider handle */}
              <div
                className="h-10 w-10 rounded-full bg-white shadow-lg flex items-center justify-center cursor-pointer pointer-events-auto"
                style={{ left: `${sliderPosition}%`, position: 'absolute', transform: 'translateX(-50%)' }}
              >
                <div className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-600 rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Hidden Range Input for Slider Control */}
            <input
              type="range"
              min="0"
              max="100"
              value={sliderPosition}
              onChange={handleSliderChange}
              className="absolute inset-0 w-full h-full cursor-pointer opacity-0"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default BeforeAfterSection;
