import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SplashScreen from './components/SplashScreen'
import LandingPage from './components/home/LandingPage'
import TreatmentsGrid from './components/treatments/TreatmentsGrid'
import Layout from './components/layout/Layout'



function App() {
  const [showSplash, setShowSplash] = useState(true);
  const [showLanding, setShowLanding] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false);
      setTimeout(() => setShowLanding(true), 10);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

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
      {showSplash ? (
        <SplashScreen logoSrc="https://via.placeholder.com/150x50?text=Dt.+Ataben+Efe+Çelik" duration={2000} />
      ) : (
        showLanding && (
          <Router>
            <Routes>
              <Route path="/" element={<Layout />}>
                <Route
                  index
                  element={
                    <div className="slide-up-animate">
                      <LandingPage />
                    </div>
                  }
                />
                <Route
                  path="tedavilerimiz"
                  element={<TreatmentsGrid />}
                />
                {/* ...existing code... */}
              </Route>
            </Routes>
          </Router>
        )
      )}
    </>
  )
}

export default App
