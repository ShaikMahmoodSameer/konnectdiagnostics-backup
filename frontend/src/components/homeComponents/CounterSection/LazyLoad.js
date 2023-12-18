// LazyLoadComponent.js
import React, { useState, useEffect } from "react";

const LazyLoadComponent = ({ children }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5, // Adjust as needed
    };

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        observer.disconnect();
      }
    }, options);

    observer.observe(document.querySelector(".lazy-load-target"));

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div className={`lazy-load-target ${isVisible ? "visible" : ""}`}>
      {children}
    </div>
  );
};

export default LazyLoadComponent;
