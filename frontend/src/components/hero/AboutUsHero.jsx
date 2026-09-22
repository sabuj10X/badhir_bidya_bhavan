import React, { useState, useEffect } from "react";
import logo2 from "../../assets/logo2.PNG";
import study1 from "../../assets/study1.jpg";
import school from "../../assets/school.jpg";
import school3 from "../../assets/school3.jpg";
const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Placeholder images - replace with your actual imports
  const slides = [
    {
      image: study1,
      alt: "study",
    },
    {
      image: school,
      alt: "School building",
    },
    {
      image: school3,
      alt: "Students in classroom",
    },
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
    <div className="relative min-h-screen bg-gradient-to-br from-blue-50 via-indigo-100 to-purple-100 flex flex-col items-center justify-center overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(99,102,241,0.1),transparent)]"></div>

      {/* Main Content Container */}
      <div className="relative z-10 flex flex-col items-center justify-center px-4 w-full py-12">
        {/* Title Section - Top Center */}
        <div className="text-center mb-8 md:mb-12">
          {/* Tagline */}
          <p className="text-indigo-700 text-sm md:text-base font-medium mb-4 italic">
            ... a silent call for help and love...
          </p>

          {/* Main Title */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-indigo-900 mb-4 tracking-wide">
            BADHIR BIDYA BHABAN
          </h1>

          {/* Underline */}
          <div className="flex justify-center">
            <div className="w-32 md:w-48 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full"></div>
          </div>
        </div>

        {/* Subtitle/Mission Statement */}
        <div className="text-center mb-10 max-w-4xl">
          <p className="text-indigo-800 text-lg md:text-xl font-medium leading-relaxed">
            Dedicated to empowering the deaf and hearing-impaired community
            through education, skill development, and creating an inclusive
            society where everyone can thrive.
          </p>
        </div>

        {/* Image Slider Section with Logo */}
        <div className="relative w-full px-2 md:px-4">
          {/* Slider Container */}
          <div className="relative bg-white/60 backdrop-blur-sm rounded-2xl md:rounded-3xl p-3 md:p-4 border border-indigo-200 shadow-2xl">
            {/* Logo - Top Right of Slider */}
            <div className="absolute top-6 right-6 z-20 bg-white rounded-xl p-3 shadow-lg border border-indigo-200">
              <div className="h-16 w-24 sm:h-20 sm:w-80  bg-indigo-600 rounded-lg flex items-center justify-center">
                <img src={logo2} alt="logo" />
              </div>
            </div>

            {/* Images Container */}
            <div className="relative overflow-hidden rounded-xl md:rounded-2xl">
              <div
                className="flex transition-transform duration-700 ease-in-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {slides.map((slide, index) => (
                  <div key={index} className="w-full flex-shrink-0">
                    <img
                      src={slide.image}
                      alt={slide.alt}
                      className="w-full h-[350px] md:h-[500px] lg:h-[600px] object-cover"
                    />
                  </div>
                ))}
              </div>

              {/* Navigation Arrows */}
              <button
                onClick={prevSlide}
                className="absolute left-2 md:left-4 top-1/2 transform -translate-y-1/2 bg-indigo-600/80 hover:bg-indigo-700 backdrop-blur-md rounded-full p-2 md:p-3 transition-all duration-300 text-white hover:scale-110 shadow-lg"
                aria-label="Previous slide"
              >
                <svg
                  className="w-5 h-5 md:w-6 md:h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </button>

              <button
                onClick={nextSlide}
                className="absolute right-2 md:right-4 top-1/2 transform -translate-y-1/2 bg-indigo-600/80 hover:bg-indigo-700 backdrop-blur-md rounded-full p-2 md:p-3 transition-all duration-300 text-white hover:scale-110 shadow-lg"
                aria-label="Next slide"
              >
                <svg
                  className="w-5 h-5 md:w-6 md:h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>

              {/* Slide Indicators */}
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-3">
                {slides.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToSlide(index)}
                    className={`w-2.5 h-2.5 md:w-3 md:h-3 rounded-full transition-all duration-300 ${
                      currentSlide === index
                        ? "bg-indigo-600 scale-125"
                        : "bg-white/70 hover:bg-white"
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Slide Counter */}
          <div className="absolute top-3 left-3 md:top-4 md:left-4 bg-indigo-600/90 backdrop-blur-md rounded-full px-3 py-1.5 md:px-4 md:py-2 text-white text-xs md:text-sm font-semibold shadow-lg">
            {currentSlide + 1} / {slides.length}
          </div>
        </div>

        {/* Call to Action Buttons */}
      </div>

      {/* Floating decorative elements */}
      <div className="absolute top-1/4 left-1/4 w-3 h-3 bg-indigo-400/40 rounded-full animate-pulse"></div>
      <div className="absolute bottom-1/3 right-1/4 w-2 h-2 bg-purple-400/40 rounded-full animate-bounce"></div>
      <div className="absolute top-3/4 left-1/3 w-4 h-4 bg-indigo-300/30 rounded-full animate-pulse"></div>
    </div>
  );
};

export default HeroSection;
