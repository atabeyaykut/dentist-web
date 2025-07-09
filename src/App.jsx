import React, { lazy, Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'

// Components
import Header from './components/Header'
import Footer from './components/Footer'
import SEO from './components/SEO'

// Utility for lazy loading
import { lazyLoad } from './utils/lazyLoad.jsx'

// Only import HomePage eagerly as it's the landing page
import HomePage from './pages/HomePage'

// Lazy load all other pages for better performance
// Service Pages
const PediatricDentistry = lazy(() => import('./pages/PediatricDentistry'))
const EmergencyDentistry = lazy(() => import('./pages/EmergencyDentistry'))
const DentalImplants = lazy(() => import('./pages/DentalImplants'))
const OralSurgery = lazy(() => import('./pages/OralSurgery'))
const CavityPrevention = lazy(() => import('./pages/CavityPrevention'))
const SmileEnhancement = lazy(() => import('./pages/SmileEnhancement'))
const WhiteningBoost = lazy(() => import('./pages/WhiteningBoost'))
const GumCare = lazy(() => import('./pages/GumCare'))
const WisdomToothExtraction = lazy(() => import('./pages/WisdomToothExtraction'))

// Main Pages
const AboutUs = lazy(() => import('./pages/AboutUs'))
const Team = lazy(() => import('./pages/Team'))
const Contact = lazy(() => import('./pages/Contact'))
const Blog = lazy(() => import('./pages/Blog'))
const Testimonials = lazy(() => import('./pages/Testimonials'))

// Loading fallback component
const PageLoader = () => (
  <div className="flex items-center justify-center min-h-screen">
    <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-blue-500"></div>
  </div>
)

function App() {
  return (
    <SEO>
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
        <Suspense fallback={<PageLoader />}>
          <Routes>
            {/* Home Page */}
            <Route path="/" element={<HomePage />} />
            
            {/* Main Pages */}
            <Route path="/about" element={<AboutUs />} />
            <Route path="/team" element={<Team />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/testimonials" element={<Testimonials />} />
            
            {/* Service Pages */}
            <Route path="/services/pediatric-dentistry" element={<PediatricDentistry />} />
            <Route path="/services/emergency-dentistry" element={<EmergencyDentistry />} />
            <Route path="/services/dental-implants" element={<DentalImplants />} />
            <Route path="/services/oral-surgery" element={<OralSurgery />} />
            <Route path="/services/cavity-prevention" element={<CavityPrevention />} />
            <Route path="/services/smile-enhancement" element={<SmileEnhancement />} />
            <Route path="/services/whitening-boost" element={<WhiteningBoost />} />
            <Route path="/services/gum-care" element={<GumCare />} />
            <Route path="/services/wisdom-tooth-extraction" element={<WisdomToothExtraction />} />
          </Routes>
        </Suspense>
        <Footer />
      </div>
    </SEO>
  )
}

export default App