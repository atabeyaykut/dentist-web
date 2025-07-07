import React from 'react';

function StatsSection() {
  const stats = [
    {
      id: 1,
      value: '50,000',
      label: 'Happy patients'
    },
    {
      id: 2,
      value: '34,256',
      label: 'Veneers placed'
    },
    {
      id: 3,
      value: '16,331',
      label: 'Smiles straightened'
    },
    {
      id: 4,
      value: '150',
      label: 'Years of combined experience'
    }
  ];

  return (
    <section className="w-full h-full">
      {/* Background Image */}
      <div className="relative">
        {/* Dental Office Image */}
        <div className="w-full h-[70vh]">
          <img
            src="https://picsum.photos/seed/dental-office/1920"
            alt="Modern dental office"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Stats Bar with Gradient */}
        <div className="w-full bg-gradient-to-r from-[#00D6C9] to-[#0095FF] py-12">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-between items-center">
              {stats.map((stat) => (
                <div
                  key={stat.id}
                  className="w-full md:w-1/4 text-center text-white px-4 mb-8 md:mb-0"
                >
                  <div className="text-4xl md:text-5xl font-light mb-2">{stat.value}</div>
                  <div className="text-sm md:text-base opacity-80">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default StatsSection;
