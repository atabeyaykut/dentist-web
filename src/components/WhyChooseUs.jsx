import React from 'react'

// Simple feature component
function Feature({ icon, title, description, hasDivider }) {
  return (
    <div className="text-center hover:-translate-y-4 transtion-transform duration-300 relative group">
      {hasDivider && <div className="hidden lg:block absolute left-4 h-3/4 w-px bg-gray-300 top-1/2 -translate-y-1/2"></div>}
      <div className=' flex flex-col p-16 gap-6 w-[16vw]'>
        <img src={icon} alt={title} className="w-16 h-16 mb-4 mx-auto" />
        <h3 className="text-3xl font-light mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  )
}

function WhyChooseUs() {
  // Feature data
  const features = [
    {
      icon: "/images/icons/clinic-icon.svg",
      title: "State-of-the-art Clinic",
      description: "Our beautiful and welcoming clinic was only just refurbished and modernized in 2023.",
      hasDivider: false
    },
    {
      icon: "/images/icons/expertise-icon.svg",
      title: "Unmatched Expertise",
      description: "Our dentists are experts in their respective fields - see their published work.",
      hasDivider: true
    },
    {
      icon: "/images/icons/technology-icon.svg",
      title: "Latest Technology",
      description: "We innovate with the most advanced dentistry technology for the best results.",
      hasDivider: true
    },
    {
      icon: "/images/icons/staff-icon.svg",
      title: "Experienced Staff",
      description: "We employ and train the very best dental nurses, management, technicians and hygienists.",
      hasDivider: true
    }
  ];

  return (
    <div className="py-16 px-4 md:px-8">
      <div className="container mx-auto">
        <h2 className="text-3xl text-center mb-12">WHY CHOOSE OUR DENTAL CLINIC</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="relative">
              <Feature
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
                hasDivider={feature.hasDivider}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default WhyChooseUs
