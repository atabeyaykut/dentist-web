import React from 'react';
import TeamSection from '../components/TeamSection';

/**
 * Team Page Component
 */
function Team() {
  // Team members data
  const teamMembers = [
    {
      id: 1,
      name: 'Dr. Sarah Johnson',
      title: 'Lead Dentist & Founder',
      image: 'https://picsum.photos/id/1011/400/400',
      specialties: ['General Dentistry', 'Cosmetic Dentistry'],
      education: 'DDS, Harvard School of Dental Medicine',
      bio: 'Dr. Johnson has over 15 years of experience in dentistry and founded our practice in 2005. She specializes in cosmetic dentistry and is passionate about helping patients achieve their perfect smile.'
    },
    {
      id: 2,
      name: 'Dr. Michael Chen',
      title: 'Orthodontist',
      image: 'https://picsum.photos/id/1012/400/400',
      specialties: ['Orthodontics', 'Invisalign'],
      education: 'DMD, University of Pennsylvania',
      bio: 'Dr. Chen is our resident orthodontics expert with a special focus on Invisalign treatments. He takes pride in creating beautiful, straight smiles for patients of all ages.'
    },
    {
      id: 3,
      name: 'Dr. Emily Rodriguez',
      title: 'Pediatric Dentist',
      image: 'https://picsum.photos/id/1013/400/400',
      specialties: ['Pediatric Dentistry', 'Preventive Care'],
      education: 'DDS, UCLA School of Dentistry',
      bio: 'Dr. Rodriguez specializes in making dental visits enjoyable for our youngest patients. Her gentle approach helps children develop positive associations with dental care from an early age.'
    },
    {
      id: 4,
      name: 'Dr. James Wilson',
      title: 'Oral Surgeon',
      image: 'https://picsum.photos/id/1025/400/400',
      specialties: ['Oral Surgery', 'Dental Implants'],
      education: 'DMD, Boston University',
      bio: 'Dr. Wilson is our oral surgery specialist with extensive experience in complex extractions and implant procedures. He is committed to providing pain-free surgical experiences.'
    },
    {
      id: 5,
      name: 'Dr. Lisa Thompson',
      title: 'Periodontist',
      image: 'https://picsum.photos/id/1027/400/400',
      specialties: ['Periodontics', 'Gum Disease Treatment'],
      education: 'DDS, University of Michigan',
      bio: 'Dr. Thompson specializes in the prevention, diagnosis, and treatment of gum disease. She is dedicated to helping patients maintain healthy gums as the foundation for overall oral health.'
    },
    {
      id: 6,
      name: 'Dr. Robert Garcia',
      title: 'Endodontist',
      image: 'https://picsum.photos/id/1074/400/400',
      specialties: ['Root Canal Therapy', 'Dental Trauma'],
      education: 'DDS, NYU College of Dentistry',
      bio: 'Dr. Garcia is our root canal specialist, focused on saving teeth through advanced endodontic procedures. He uses the latest techniques to ensure comfortable and effective treatments.'
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
            Meet Our Team
          </h1>
        </div>
      </div>

      <div className="container mx-auto px-6 py-16">
        {/* Team Introduction */}
        <div className="max-w-3xl mx-auto mb-16 text-center">
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
            Experienced Professionals Dedicated to Your Smile
          </h2>
          <p className="text-gray-600 leading-relaxed">
            Our team of highly qualified dental professionals is committed to providing you with the best possible care in a comfortable and friendly environment. Each member brings unique expertise and a passion for dentistry to ensure comprehensive care for all your dental needs.
          </p>
        </div>

        {/* Team Members Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {teamMembers.map(member => (
            <div key={member.id} className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100">
              <img 
                src={member.image} 
                alt={member.name} 
                className="w-full h-72 object-cover object-center"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                <p className="text-blue-600 mb-4">{member.title}</p>
                <div className="mb-4">
                  <h4 className="text-sm font-medium text-gray-700 mb-2">Specialties</h4>
                  <div className="flex flex-wrap gap-2">
                    {member.specialties.map((specialty, index) => (
                      <span key={index} className="px-3 py-1 bg-blue-50 text-blue-700 text-xs rounded-full">
                        {specialty}
                      </span>
                    ))}
                  </div>
                </div>
                <p className="text-sm text-gray-500 mb-4">
                  <strong>Education:</strong> {member.education}
                </p>
                <p className="text-gray-600">{member.bio}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Support Staff Section */}
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
            Our Support Team
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100 text-center">
              <img 
                src="https://picsum.photos/id/1001/200/200" 
                alt="Support Staff" 
                className="w-32 h-32 object-cover rounded-full mx-auto mb-4"
              />
              <h3 className="text-lg font-medium mb-1">Jennifer Adams</h3>
              <p className="text-blue-600 mb-3">Office Manager</p>
              <p className="text-gray-600">
                Jennifer ensures our office runs smoothly and efficiently, handling scheduling, insurance coordination, and patient relations.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100 text-center">
              <img 
                src="https://picsum.photos/id/1002/200/200" 
                alt="Support Staff" 
                className="w-32 h-32 object-cover rounded-full mx-auto mb-4"
              />
              <h3 className="text-lg font-medium mb-1">David Martinez</h3>
              <p className="text-blue-600 mb-3">Dental Hygienist</p>
              <p className="text-gray-600">
                David specializes in preventive oral care, providing thorough cleanings and educating patients on proper home care techniques.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100 text-center">
              <img 
                src="https://picsum.photos/id/1003/200/200" 
                alt="Support Staff" 
                className="w-32 h-32 object-cover rounded-full mx-auto mb-4"
              />
              <h3 className="text-lg font-medium mb-1">Michelle Lee</h3>
              <p className="text-blue-600 mb-3">Dental Assistant</p>
              <p className="text-gray-600">
                Michelle assists our dentists during procedures, prepares treatment rooms, and ensures patients are comfortable throughout their visit.
              </p>
            </div>
          </div>
        </div>

        {/* Join Our Team Section */}
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
            Interested in Joining Our Team?
          </h2>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            We're always looking for talented and passionate dental professionals to join our growing practice. If you're dedicated to providing exceptional patient care and want to be part of a collaborative team, we'd love to hear from you.
          </p>
          <a 
            href="/careers" 
            className="inline-flex items-center justify-center px-6 py-3 bg-blue-500 text-white font-medium rounded-md hover:bg-blue-600 transition-colors"
          >
            View Open Positions
          </a>
        </div>
      </div>
    </div>
  );
}

export default Team;
