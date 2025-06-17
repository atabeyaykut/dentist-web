import { useState, useEffect } from 'react';

const SplashScreen = ({ logoSrc = '/images/logo.png', duration = 1000 }) => {
  const [isVisible, setIsVisible] = useState(true);
  const [shouldRender, setShouldRender] = useState(true);

  useEffect(() => {
    // Start fade out animation after specified duration
    const fadeOutTimer = setTimeout(() => {
      setIsVisible(false);
    }, duration);

    // Remove from DOM after animation completes
    const removeTimer = setTimeout(() => {
      setShouldRender(false);
    }, duration + 1000); // 500ms for fade-out animation

    return () => {
      clearTimeout(fadeOutTimer);
      clearTimeout(removeTimer);
    };
  }, [duration]);

  if (!shouldRender) return null;

  return (
    <div className={`splash-screen ${!isVisible ? 'fade-out' : ''}`}>
      <img
        src={logoSrc}
        alt="Logo"
        onError={(e) => {
          e.target.onerror = null;
          e.target.src = "https://placehold.co/600x400/white/blue?text=Dentist+Web";
        }}
      />
    </div>
  );
};

export default SplashScreen;
