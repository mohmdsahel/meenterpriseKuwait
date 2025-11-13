import React, { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";

import { testimonials } from "../constants";

export const SeriesCard = ({
  items,
  direction = "left", // Default direction is now left
  pauseOnHover = true,
  className,
}) => {
  const containerRef = useRef(null);
  const scrollerRef = useRef(null);
  const [start, setStart] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    addAnimation();
  }, []);

  function addAnimation() {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);

      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        if (scrollerRef.current) {
          scrollerRef.current.appendChild(duplicatedItem);
        }
      });

      getDirection();
      getSpeed();
      setStart(true);
    }
  }

  const getDirection = () => {
    if (containerRef.current) {
      if (direction === "left") {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "forwards"
        );
      } else {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "reverse"
        );
      }
    }
  };

  const getSpeed = () => {
    if (containerRef.current) {
      containerRef.current.style.setProperty("--animation-duration", "200s");
    }
  };

  // Add this function to scroll to a specific card
  // Add this ref at the top of the component
  const timeoutRef = useRef(null);
  
  // Update the scrollToCard function
  const scrollToCard = (index) => {
    if (scrollerRef.current && scrollerRef.current.children[index]) {
      // Clear any existing timeout
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      
      // Stop the animation
      setStart(false);
      setIsPaused(true);
      
      // Update active index
      setActiveIndex(index);
      
      // Scroll to the card
      scrollerRef.current.children[index].scrollIntoView({
        behavior: 'smooth',
        block: 'nearest',
        inline: 'center'
      });
  
      // Auto-resume after 5 seconds
      timeoutRef.current = setTimeout(() => {
        setStart(true);
        setIsPaused(false);
      }, 5000);
    }
  };
  
  // Remove the Resume Auto-Scroll button component from the JSX
  // Update the handlers to use the new function
  const handleScrollLeft = () => {
    const newIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    scrollToCard(newIndex);
  };

  const handleScrollRight = () => {
    const newIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    scrollToCard(newIndex);
  };

  const mergeClasses = (...classes) => classes.filter(Boolean).join(' ');

  return (
    <div className="relative">
      <div
        ref={containerRef}
        className={mergeClasses(
          "relative z-20 max-w-7xl overflow-hidden",
          "mask-linear-gradient",
          className
        )}
        style={{
          maskImage: "linear-gradient(to right, transparent, white 20%, white 80%, transparent)",
          '--transform-direction': 'translateX(-50%)',
          position: 'relative',
        }}
      >
        <div 
          ref={scrollerRef}
          className={mergeClasses(
            "flex w-max min-w-full shrink-0 flex-nowrap gap-4 py-4 transition-all duration-500",
            start && !isPaused && "animate-scroll"
          )}
          style={{
            animation: start && !isPaused ? `scroll var(--animation-duration) forwards linear infinite` : "none",
            scrollBehavior: "smooth",
            overflowX: "auto",
            msOverflowStyle: "none", /* IE and Edge */
            scrollbarWidth: "none", /* Firefox */
            WebkitOverflowScrolling: "touch",
            scrollSnapType: "x mandatory",
            position: 'relative',
          }}
          onScroll={(e) => {
            // Prevent default scroll behavior when manually scrolling
            if (isPaused) {
              e.preventDefault();
            }
          }}
        >
          {items.map((item, idx) => (
            <motion.div
              className="relative w-[320px] max-w-full shrink-0 rounded-xl sm:rounded-2xl border border-b-0 border-color-1/10 bg-n-5 backdrop-blur-sm sm:w-[400px] md:w-[500px] shadow-2xl overflow-hidden scroll-snap-align-start"
              key={`${item.name}-${idx}`}
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
              style={{ scrollSnapAlign: "start" }}
            >
              <div className="flex flex-row items-center">
                <div className="w-2/3 p-2 sm:p-4">
                  <h3 className="text-lg sm:text-xl font-bold text-white mb-1 sm:mb-2">
                    {item.name}
                  </h3>
                  <div className="relative z-20 mt-2 sm:mt-4 flex flex-row items-center">
                    <span className="flex flex-col gap-1">
                      <span className="text-xs sm:text-sm leading-[1.6] font-medium text-n-3">
                        {item.title}
                      </span>
                      <span className="text-xs sm:text-sm leading-[1.6] font-normal text-n-3 italic">
                        {item.role}
                      </span>
                    </span>
                  </div>
                </div>
                <div className="w-1/3 h-full">
                  <img
                    src={item.img}
                    alt={item.name}
                    className="w-full h-[170px] sm:h-full object-cover object-center"
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Fixed Navigation Controls */}
      {/* <div className="absolute inset-x-0 top-1/2 transform -translate-y-1/2 flex justify-between pointer-events-none  -mx-12 z-30">
        <button
          onClick={handleScrollLeft}
          className="w-12 h-12 rounded-full bg-gradient-to-r from-color-1 to-color-2 flex items-center justify-center shadow-lg transform transition-all duration-300 hover:scale-110 pointer-events-auto focus:outline-none group opacity-70 hover:opacity-90 backdrop-blur-sm"
          aria-label="Scroll left"
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="h-6 w-6 text-white transform transition-transform group-hover:-translate-x-1" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        
        <button
          onClick={handleScrollRight}
          className="w-12 h-12 rounded-full bg-gradient-to-r from-color-2/90 to-color-1/90 flex items-center justify-center shadow-lg transform transition-all duration-300 hover:scale-110 pointer-events-auto focus:outline-none group opacity-70 hover:opacity-90 backdrop-blur-sm"
          aria-label="Scroll right"
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="h-6 w-6 text-white transform transition-transform group-hover:translate-x-1" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div> */}

      {/* Indicator Dots */}
     

      {/* Remove this section */}
      {/* Restart Animation Button */}
      {/* <div className="flex justify-center mt-4">
        <button
          onClick={() => {
            setStart(true);
            setIsPaused(false);
          }}
          className={`px-4 py-2 rounded-lg bg-color-1/80 text-white text-sm transition-opacity duration-300 ${isPaused ? 'opacity-100' : 'opacity-0'}`}
          style={{ pointerEvents: isPaused ? 'auto' : 'none' }}
        >
          Resume Auto-Scroll
        </button>
      </div> */}
    </div>
  );
};

export default function SeriesCardDemo() {
  return (
    <div className="h-fit rounded-md flex flex-col items-center justify-center relative overflow-hidden">
      <SeriesCard
        items={testimonials}
        direction="left"
        pauseOnHover={true}
      />
    </div>
  );
}