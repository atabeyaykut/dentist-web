import React from 'react'

function ClinicalExcellence() {
  return (
    <div className="flex items-center w-[90vw] py-16 px-8 bg-transparent">
      {/* Left side with images */}
      <div className="relative w-1/2">
        {/* Main image - oval shape */}
        <div className="w-[500px] h-[500px] rounded-b-[250px] rounded-t-[0px] overflow-hidden mx-auto relative">
          <img 
            src="https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=facearea&w=800&h=800&q=80" 
            alt="Main" 
            className="w-full h-full object-cover"
          />
        </div>
        {/* Small image in bottom left */}
        <div className="absolute bottom-10 left-[6vw] w-[180px] h-[120px] rounded-md overflow-hidden border-4 border-white shadow-md">
          <img 
            src="https://images.unsplash.com/photo-1510915228340-29c85a43dcfe?auto=format&fit=facearea&w=400&h=300&q=80" 
            alt="Dentist appointment" 
            className="w-full h-full object-cover"
          />
        </div>
      </div>
      {/* Right side with text content */}
      <div className="w-1/2 flex flex-col justify-center">
        <div className="max-w-md">
          {/* Welcome text */}
          <p className="text-sm text-gray-500 tracking-widest mb-2">WELCOME TO DENTALIST</p>
          
          {/* Main heading */}
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Clinical excellence in the heart of Portland</h2>
          
          {/* Description */}
          <p className="text-gray-600 mb-8">
            Established in 2010 and based in the heart of Portland, we have spent over 14 years providing high-quality dental care. Our dedicated and experienced dentists provide decades worth of expertise to ensure you get the smile of your dreams.
          </p>
          
          {/* About us button */}
          <button className="border border-gray-800 text-gray-800 px-8 py-3 uppercase text-sm font-medium hover:bg-gray-800 hover:text-white transition-colors">
            About us
          </button>
        </div>
      </div>
    </div>
  )
}

export default ClinicalExcellence

