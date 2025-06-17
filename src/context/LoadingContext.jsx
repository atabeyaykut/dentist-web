import { createContext, useContext, useState, useEffect } from 'react';

// Create context
const LoadingContext = createContext({
  isLoading: false,
  setIsLoading: () => {}
});

// Custom hook to use the loading context
export const useLoading = () => useContext(LoadingContext);

// Provider component
export const LoadingProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);

  // Handle initial app loading
  useEffect(() => {
    // Simulate initial loading delay
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const value = {
    isLoading,
    setIsLoading
  };

  return (
    <LoadingContext.Provider value={value}>
      {children}
    </LoadingContext.Provider>
  );
};

export default LoadingContext;
