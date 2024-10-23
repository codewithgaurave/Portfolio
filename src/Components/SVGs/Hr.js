import React, { useEffect, useRef } from 'react';
import './hr.css';

export default function Hr() {
  const hrSVGRef = useRef(null); 

  useEffect(() => {
    const hrSVG = hrSVGRef.current; 

    if (hrSVG) {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            console.log('Element is in the viewport!');
            if (!hrSVG.classList.contains('animateHr')) {
              hrSVG.classList.add('animateHr');
            }
          }
        });
      });

      // Start observing the element
      observer.observe(hrSVG);

      // Clean up observer on component unmount
      return () => {
        if (hrSVG) {
          observer.unobserve(hrSVG);
        }
      };
    }
  }, []); 

  return (
    <svg
      ref={hrSVGRef} 
      width="100%"
      height="100%"
      viewBox="0 0 2519 30"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      fillRule="evenodd"
      clipRule="evenodd"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit="1.5"
      className='img'
    >
      <g transform="matrix(1,0,0,1,-23.9807,-84.3202)">
        <path
          d="M29.292,107.219C58.362,115.524 1047.31,84.963 1308.84,105.081C1360.58,109.061 2387.73,74.621 2537.08,97.598"
          fill="none"
          stroke="black"
          strokeWidth="7"
          strokeDasharray="2508.47"
          strokeDashoffset="0"
        />
      </g>
    </svg>
  );
}
