import React from 'react'
import HeroSection from './components/HeroSection'
import Header from './components/Header'
import ClinicalExcellence from './components/ClinicalExcellence'
import WhyChooseUs from './components/WhyChooseUs'

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
    </div>
  )
}

export default App