import React from 'react'

function ClinicalExcellence() {
  return (
    <div className="w-full py-[6vh] md:py-[10vh] px-4 md:px-8 bg-transparent">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-10 md:gap-16">
          {/* Image section - second on mobile, right on desktop */}
          <div className="relative w-full md:w-1/2 flex justify-center order-1 md:order-2 mb-8 md:mb-0">
            {/* Main image - oval shape */}
            <div className="w-[280px] h-[400px] sm:w-[320px] sm:h-[450px] md:w-[400px] md:h-[550px] lg:w-[500px] lg:h-[600px] rounded-b-full rounded-t-[0px] overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=facearea&w=800&h=800&q=80"
                alt="Main"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Small image in bottom left */}
            <div className="absolute bottom-4 md:bottom-8 -left-4 md:-left-10 w-[120px] h-[90px] sm:w-[150px] sm:h-[110px] md:w-[180px] md:h-[130px] rounded-md overflow-hidden border-2 md:border-4 border-white shadow-md">
              <img
                src="https://images.unsplash.com/photo-1510915228340-29c85a43dcfe?auto=format&fit=facearea&w=400&h=300&q=80"
                alt="Dentist appointment"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Text content section - first on mobile, left on desktop */}
          <div className="w-full md:w-1/2 order-4 md:order-3">
            {/* Welcome text */}
            <p className="text-sm text-gray-500 tracking-widest mb-2">WELCOME TO DENTALIST</p>

            {/* Main heading */}
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Clinical excellence in the heart of Portland</h2>

            {/* Description */}
            <p className="text-gray-600 mb-6 md:mb-8">
              Established in 2010 and based in the heart of Portland, we have spent over 14 years providing high-quality dental care. Our dedicated and experienced dentists provide decades worth of expertise to ensure you get the smile of your dreams.
            </p>

            {/* About us button */}
            <button className="border border-gray-800 text-gray-800 px-6 md:px-8 py-2 md:py-3 uppercase text-sm font-medium hover:bg-gray-800 hover:text-white transition-colors">
              About us
            </button>
          </div>
        </div>
      </div>
    </div>

  )
}

export default ClinicalExcellence

