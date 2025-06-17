import { useState, useEffect } from 'react'
import SplashScreen from './components/SplashScreen'
import LandingPage from './components/home/LandingPage'



function App() {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 2000);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {showSplash ? (
        <SplashScreen logoSrc="https://via.placeholder.com/150x50?text=Dt.+Ataben+Efe+Çelik" duration={2000} />
      ) : (
        <LandingPage />
      )}
    </>  
  )
}

export default App
