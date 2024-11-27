// Section.js
import React, { useRef, useEffect, useState } from "react";

import "../styles/Section.css";

const Section = ({ id, title, children }) => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      {
        threshold: 0.5, // Trigger when 50% of the section is in view
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section
      id={id}
      className={`section ${isVisible ? "visible" : ""}`}
      ref={sectionRef}
    >
      <h2>{title}</h2>
      {children}
    </section>
  );
};

export default Section;
