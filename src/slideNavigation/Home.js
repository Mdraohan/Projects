import React from 'react';
import { useSlideContext } from './SlideContext';
import Page from './Page';



const Home = () => {
  const {
    activeLevel,
    slideIndex,
    isLevelFinished,
    nextSlide,
    prevSlide,
    finishLevel,
    maxSlides, // We assume this variable is provided by the context
    setActiveLevel,
} = useSlideContext();

  const handleFinishClick = () => {
    finishLevel();
  };

  return (
    <div>
      <h1>Home Page</h1>
      <p>Active Level: {activeLevel}</p>
      {activeLevel === 1 && (
        <button onClick={() => setActiveLevel(1)}>Level</button>
      )}
      {isLevelFinished && (
        <button onClick={() => setActiveLevel(activeLevel + 1)}>
          Next Level
        </button>
      )}
      
      <Page index={slideIndex} />
      {slideIndex > 0 && (
        <button onClick={prevSlide}>&lt; Back</button>
      )}
      {slideIndex < maxSlides - 1 && (
        <button onClick={nextSlide}>Next &gt;</button>
      )}
      {slideIndex === maxSlides - 1 && (
        <button onClick={handleFinishClick}>Finish</button>
      )}
    </div>
  );
};

export default Home;
