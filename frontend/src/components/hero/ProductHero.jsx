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
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(147,51,234,0.1),transparent)]"></div>
      
      {/* Main Content Container - Expanded for wider slider */}
      <div className="relative z-10 flex flex-col items-center justify-center px-2 max-w-full mx-auto w-full">
        
        {/* Welcome Heading at Top */}
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-medium text-gray-600 mb-2 hover:text-gray-800 transition-colors duration-300 cursor-default">
            Welcome to
          </h2>
          <h1 className="text-4xl md:text-6xl font-bold text-gray-800 group cursor-default hover:scale-105 transition-transform duration-300">
            Badhir{' '}
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent group-hover:from-blue-700 group-hover:to-indigo-700 transition-all duration-300">
              Bidya Bhaban
            </span>
          </h1>
        </div>
        
        {/* Image Slider Section - Full width */}
        <div className="relative mb-10 w-full max-w-7xl">
          
          {/* Slider Container */}
          <div className="relative bg-white/10 backdrop-blur-md rounded-3xl p-6 border border-white/20 shadow-2xl">
            
            {/* Images Container */}
            <div className="relative overflow-hidden rounded-2xl">
              <div 
                className="flex transition-transform duration-700 ease-in-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {slides.map((slide, index) => (
                  <div key={index} className="w-full flex-shrink-0">
                    <img 
                      src={slide.image} 
                      alt={slide.alt}
                      className='w-full h-[400px] md:h-[500px] lg:h-[550px] object-cover'
                    />
                  </div>
                ))}
              </div>
              
              {/* Navigation Arrows */}
              <button 
                onClick={prevSlide}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-md rounded-full p-3 transition-all duration-300 text-white hover:scale-110"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              
              <button 
                onClick={nextSlide}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-md rounded-full p-3 transition-all duration-300 text-white hover:scale-110"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
              
              {/* Slide Indicators */}
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-3">
                {slides.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToSlide(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      currentSlide === index 
                        ? 'bg-white scale-125' 
                        : 'bg-white/50 hover:bg-white/70'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
          
          {/* Slide Counter */}
          <div className="absolute top-6 right-6 bg-black/30 backdrop-blur-md rounded-full px-4 py-2 text-white text-sm font-medium">
            {currentSlide + 1} / {slides.length}
          </div>
        </div>

        {/* Text Section - Products heading at bottom */}
        <div className="text-center space-y-4 max-w-4xl">
          
          {/* Products Title with hover effects */}
          <h3 className="text-3xl md:text-4xl font-bold text-gray-700 mb-4 group cursor-default hover:scale-105 transition-transform duration-300">
            Our{' '}
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent group-hover:from-blue-700 group-hover:to-indigo-700 transition-all duration-300">
              Products
            </span>
          </h3>
          
          {/* Subtitle with hover effect */}
          <p className="text-lg md:text-xl text-gray-600 font-medium hover:text-gray-800 transition-colors duration-300 cursor-default">
            Explore our wide range of{' '}
            <span className="text-indigo-600 font-semibold hover:text-indigo-700 transition-colors duration-300">premium products</span>
          </p>

          {/* Simple underline */}
          <div className="flex justify-center mt-4">
            <div className="w-20 h-0.5 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full"></div>
          </div>
        </div>
      </div>

      {/* Simplified floating elements */}
      <div className="absolute top-1/4 left-1/4 w-3 h-3 bg-blue-300/40 rounded-full animate-pulse"></div>
      <div className="absolute bottom-1/3 right-1/4 w-2 h-2 bg-indigo-300/40 rounded-full animate-bounce"></div>
      <div className="absolute top-3/4 left-1/3 w-4 h-4 bg-blue-400/30 rounded-full animate-pulse"></div>
    </div>
  );
};

export default ProductHero;