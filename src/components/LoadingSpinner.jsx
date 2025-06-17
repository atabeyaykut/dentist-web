import React from 'react';

const LoadingSpinner = ({ isVisible }) => {
  return (
    <div className={`loading-spinner-overlay ${isVisible ? 'visible' : ''}`}>
      <div className="spinner"></div>
    </div>
  );
};

export default LoadingSpinner;
