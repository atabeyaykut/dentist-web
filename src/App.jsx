import React from 'react'
import { Routes, Route } from 'react-router-dom'

// Components
import Header from './components/Header'
import Footer from './components/Footer'

// Pages
import HomePage from './pages/HomePage'
import PediatricDentistry from './pages/PediatricDentistry'

function App() {
  return (
    <div className="flex flex-col items-center justify-center">
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
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/services/pediatric-dentistry" element={<PediatricDentistry />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App