// SlideContext.js
import React, { createContext, useState, useEffect, useContext } from 'react';

const SlideContext = createContext();

const SlideProvider = ({ children }) => {
  // State variables
  const [activeLevel, setActiveLevel] = useState(1);
  const [slideIndex, setSlideIndex] = useState(0);
  const [isLevelFinished, setIsLevelFinished] = useState(false);

  // useEffect to persist the slide index in localStorage
  useEffect(() => {
    localStorage.setItem('slideIndex', slideIndex.toString());
  }, [slideIndex]);

  // Other utility functions for navigation and finishing levels
  const nextSlide = () => {
    setSlideIndex((prevIndex) => prevIndex + 1);
  };

  const prevSlide = () => {
    setSlideIndex((prevIndex) => prevIndex - 1);
  };

  const finishLevel = () => {
    setIsLevelFinished(true);
    setActiveLevel((prevLevel) => prevLevel + 1);
    setSlideIndex(0);
  };

  return (
    <SlideContext.Provider
      value={{
        activeLevel,
        setActiveLevel,
        slideIndex,
        setSlideIndex,
        isLevelFinished,
        setIsLevelFinished,
        nextSlide,
        prevSlide,
        finishLevel,
      }}
    >
      {children}
    </SlideContext.Provider>
  );
};

// Custom hook to use the SlideContext
const useSlideContext = () => {
  const context = useContext(SlideContext);
  if (!context) {
    throw new Error('useSlideContext must be used within a SlideProvider');
  }
  return context;
};

export { SlideProvider, useSlideContext };
