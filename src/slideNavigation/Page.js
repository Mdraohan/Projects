// SlidePage.js
import React from 'react';

import { useSlideContext } from './SlideContext';
import { useEffect } from 'react';


const Page = ({ index }) => {
  const { slideIndex, setSlideIndex } = useSlideContext();

 useEffect (() => {
    setSlideIndex(index);
  }, [index, setSlideIndex])

  const handleMenuClick = () => {
    // Implement logic to show/hide menu modal
  };

  const handleExitClick = () => {
    // Implement logic to navigate back to home page
  };

  const handleCloseClick = () => {
    // Implement logic to close the menu modal
  };

  return (
    <div>
    
      {/* Render content for the current slide using slideIndex */}
      <p>Slide {slideIndex + 1} content</p>
      <button onClick={handleMenuClick}>Menu</button>
    </div>
  );
};

export default Page;



