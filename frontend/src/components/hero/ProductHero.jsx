import React, { useState, useEffect } from 'react';
import school from "../../assets/school.jpg";
import school2 from "../../assets/school2.jpg";
import school3 from "../../assets/school3.jpg";

const ProductHero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  // Sample images - replace with your actual images
  const slides = [
    {
      image: school,
      alt: "School building"
    },
    {
      image: school2, // Replace with your second image
      alt: "Students learning"
    },
    {
      image: school3, // Replace with your third image
      alt: "Educational resources"
    }
  ];

  // Auto-slide functionality
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="relative min-h-[85vh] bg-gradient-to-br from-blue-100  to-indigo-300  flex flex-col items-center justify-center overflow-hidden pt-12 pb-10">
      
      {/* Background Pattern - matching your main site */}
      
      {/* Main Content Container - Expanded for wider slider */}

      {/* Simplified floating elements */}
      <div className="absolute top-1/4 left-1/4 w-3 h-3 bg-blue-300/40 rounded-full animate-pulse"></div>
      <div className="absolute bottom-1/3 right-1/4 w-2 h-2 bg-indigo-300/40 rounded-full animate-bounce"></div>
      <div className="absolute top-3/4 left-1/3 w-4 h-4 bg-blue-400/30 rounded-full animate-pulse"></div>
    </div>
  );
};

export default ProductHero;