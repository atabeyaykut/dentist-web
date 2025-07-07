import React from 'react'
import HeroSection from './components/HeroSection'
import Header from './components/Header'
import ClinicalExcellence from './components/ClinicalExcellence'
import WhyChooseUs from './components/WhyChooseUs'
import ConfidenceSection from './components/ConfidenceSection'
import InfiniteSlider from './components/InfiniteSlider'
import TeamSection from './components/TeamSection'
import BeforeAfterSection from './components/BeforeAfterSection'
import StatsSection from './components/StatsSection'
import PatientTestimonials from './components/PatientTestimonials'
import ContactUs from './components/ContactUs'

function App() {
  return (
    <div className="flex flex-col items-center justify-centerß">
      <style>
        {`
          .slide-up-animate {
            opacity: 0;
            transform: translateY(40px);
            animation: slideUp 0.6s cubic-bezier(0.23, 1, 0.32, 1) forwards;
          }
          @keyframes slideUp {
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
        `}
      </style>
      <Header />
      <HeroSection />
      <ClinicalExcellence />
      <WhyChooseUs />
      <ConfidenceSection />
      <InfiniteSlider />
      <TeamSection />
      <BeforeAfterSection />
      <StatsSection />
      <PatientTestimonials />
      <ContactUs />
    </div>
  )
}

export default App