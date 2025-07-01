import React from 'react';
import HeroSection from '../components/home/HeroSection';
import Services from '../components/home/Services';
import Doctors from '../components/home/Doctors';
import Testimonials from '../components/home/Testimonials';
import TreatmentResults from '../components/home/TreatmentResults';
import ContactSection from '../components/home/ContactSection';

function HomePage() {
  return (
    <div className="home-page">
      <HeroSection />
      <Services />
      <Doctors />
      <Testimonials />
      <ContactSection />
    </div>
  );
}

export default HomePage;