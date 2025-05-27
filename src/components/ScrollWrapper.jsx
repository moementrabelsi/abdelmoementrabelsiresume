import React, { useLayoutEffect } from 'react';

// This component wraps each route component and forces scrolling to top
const ScrollWrapper = ({ children }) => {
  useLayoutEffect(() => {
    // Force scroll to top - using more aggressive approaches
    window.scrollTo(0, 0);
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
    
    // Force a layout recalculation
    const _ = document.body.offsetHeight;
  }, []);

  return children;
};

export default ScrollWrapper;
