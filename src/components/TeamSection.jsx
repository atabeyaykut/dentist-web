import React from 'react';
import { Link } from 'react-router-dom';

function TeamSection() {
  const teamMembers = [
    {
      id: 1,
      name: 'Mark Potter',
      specialty: 'Cosmetic Dentistry',
      image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&h=400&q=80',
      profileLink: '/doctors/mark-potter',
    },
    {
      id: 2,
      name: 'Anne Middleton',
      specialty: 'Preventive Dentistry',
      image: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&h=400&q=80',
      profileLink: '/doctors/anne-middleton',
    },
    {
      id: 3,
      name: 'John Pierson, RDH',
      specialty: 'Orthodontic Solutions',
      image: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&h=400&q=80',
      profileLink: '/doctors/john-pierson',
    },
  ];

  return (
    <section className="w-full py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <p className="text-sm uppercase tracking-wider text-gray-500 mb-3">MEET OUR TEAM</p>
          <h2 className="text-4xl font-light mb-6">Trusted and multiple award<br />winning dentists</h2>
        </div>

        <div className="flex flex-wrap justify-center gap-10 mb-10">
          {teamMembers.map((member) => (
            <div key={member.id} className="w-full md:w-[31%] border border-gray-300 rounded-lg p-14 flex flex-col items-center">
              <div className="mb-6">
                <h3 className="text-xl font-medium">{member.name}</h3>
                <p className="text-gray-500 text-sm mt-1">{member.specialty}</p>
              </div>

              <div className="w-52 h-52 rounded-full overflow-hidden mb-8 transition-transform duration-500 hover:scale-110">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="flex items-center justify-between w-full mt-2">
                <Link
                  to={member.profileLink}
                  className="text-sm font-medium flex items-center hover:text-blue-600 transition-colors"
                >
                  OPEN PROFILE
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </Link>

                <div className="flex space-x-3">
                  <a href="#" className="w-8 h-8 rounded-full bg-teal-400 flex items-center justify-center text-white hover:bg-teal-500 transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723 10.1 10.1 0 01-3.127 1.184 4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                    </svg>
                  </a>
                  <a href="#" className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-white hover:bg-blue-600 transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <Link
            to="/doctors"
            className="inline-block border border-gray-300 px-10 py-4 rounded hover:bg-gray-50 transition-colors"
          >
            VIEW ALL DOCTORS
          </Link>
        </div>
      </div>
    </section>
  );
}

export default TeamSection;
