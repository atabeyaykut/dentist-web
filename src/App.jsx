import React from 'react'
import HeroSection from './components/HeroSection'

function App() {
  return (
    <>
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
      <HeroSection />
    </>
  )
}

export default App