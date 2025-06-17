import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useLoading } from '../context/LoadingContext';

/**
 * Custom hook to detect route changes and show/hide loading spinner
 * @param {number} loadingDelay - Delay in ms to show loading state (simulates loading time)
 */
const useRouteChangeDetector = (loadingDelay = 500) => {
  const location = useLocation();
  const { setIsLoading } = useLoading();
  
  useEffect(() => {
    // Show loading spinner on route change
    setIsLoading(true);
    
    // Hide loading spinner after delay
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, loadingDelay);
    
    return () => clearTimeout(timer);
  }, [location.pathname, setIsLoading, loadingDelay]);
};

export default useRouteChangeDetector;
