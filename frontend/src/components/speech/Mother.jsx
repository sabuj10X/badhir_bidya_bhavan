import React from "react";
import m from "../../assets/m.jpg";
import mother_quote from "../../assets/mother_terisa.jpg";

const MotherTeresaSection = () => {
  return (
    <div className="relative bg-white py-16 md:py-24">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(99,102,241,0.03),transparent)]"></div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 md:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-indigo-900 mb-3">
            Speech
          </h2>
          <div className="flex justify-center">
            <div className="w-24 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full"></div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
          {/* Left Side - Mother Teresa Image */}
          <div className="flex-shrink-0">
            <div className="relative">
              <div className="w-64 h-80 md:w-80 md:h-100 rounded-2xl overflow-hidden shadow-2xl border-4 border-indigo-100 ">
                <img
                  src={m}
                  alt="Mother Teresa"
                  className="w-full h-full object-cover hover:scale-105 transition-all duration-300"
                />
              </div>
              {/* Decorative element */}
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-indigo-100 rounded-full -z-10"></div>
            </div>
          </div>

          {/* Right Side - Quote */}
          <div className="flex-1">
            <div className="relative">
              {/* quote image */}
              <img
                src={mother_quote}
                className="w-full h-[300px] border border-gray-200 border-spacing-1 shadow-xl rounded-lg"
                alt="quote"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MotherTeresaSection;
