import React, { useState, useRef, useEffect } from 'react';
import './BeforeAfterSlider.css';

const BeforeAfterSlider = ({ beforeImage, afterImage, beforeAlt = 'Before', afterAlt = 'After' }) => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const containerRef = useRef(null);
  const sliderRef = useRef(null);

  const handleMouseDown = (e) => {
    e.preventDefault();
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);
  };

  const handleTouchStart = (e) => {
    document.addEventListener('touchmove', handleTouchMove);
    document.addEventListener('touchend', handleTouchEnd);
  };

  const handleMouseMove = (e) => {
    if (containerRef.current) {
      const containerRect = containerRef.current.getBoundingClientRect();
      const containerWidth = containerRect.width;
      const offsetX = e.clientX - containerRect.left;
      
      let newPosition = (offsetX / containerWidth) * 100;
      newPosition = Math.max(0, Math.min(100, newPosition));
      
      setSliderPosition(newPosition);
    }
  };

  const handleTouchMove = (e) => {
    if (containerRef.current && e.touches[0]) {
      const containerRect = containerRef.current.getBoundingClientRect();
      const containerWidth = containerRect.width;
      const offsetX = e.touches[0].clientX - containerRect.left;
      
      let newPosition = (offsetX / containerWidth) * 100;
      newPosition = Math.max(0, Math.min(100, newPosition));
      
      setSliderPosition(newPosition);
    }
  };

  const handleMouseUp = () => {
    document.removeEventListener('mousemove', handleMouseMove);
    document.removeEventListener('mouseup', handleMouseUp);
  };

  const handleTouchEnd = () => {
    document.removeEventListener('touchmove', handleTouchMove);
    document.removeEventListener('touchend', handleTouchEnd);
  };

  // Clean up event listeners
  useEffect(() => {
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('touchmove', handleTouchMove);
      document.removeEventListener('touchend', handleTouchEnd);
    };
  }, []);

  return (
    <div className="before-after-container" ref={containerRef}>
      <div 
        className="before-image-container"
        style={{ width: `${sliderPosition}%` }}
      >
        <img src={beforeImage} alt={beforeAlt} className="before-image" />
        <div className="image-label before-label">Öncesi</div>
      </div>
      
      <div className="after-image-container">
        <img src={afterImage} alt={afterAlt} className="after-image" />
        <div className="image-label after-label">Sonrası</div>
      </div>
      
      <div 
        className="slider-handle"
        style={{ left: `${sliderPosition}%` }}
        onMouseDown={handleMouseDown}
        onTouchStart={handleTouchStart}
        ref={sliderRef}
      >
        <div className="slider-arrow left-arrow">&#10094;</div>
        <div className="slider-line"></div>
        <div className="slider-arrow right-arrow">&#10095;</div>
      </div>
    </div>
  );
};

export default BeforeAfterSlider;
