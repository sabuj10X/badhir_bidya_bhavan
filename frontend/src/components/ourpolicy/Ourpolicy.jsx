import React from "react";
import exchange_icon from "../../assets/product_assets/exchange_icon.png";
import quality_icon from "../../assets/product_assets/quality_icon.png";
import support_img from "../../assets/product_assets/support_img.png";

const Ourpolicy = () => {
  return (
    <div className="flex flex-col sm:flex-row justify-around gap-12 sm:gap-2 text-center py-20 text-xs sm:text-sm md:text-base text-gray-700">
      <div className="group cursor-pointer transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-lg rounded-lg p-6 hover:bg-white/50">
        <div className="transition-transform duration-300 group-hover:-translate-y-2">
          <img 
            className="w-12 m-auto mb-5 transition-all duration-300 group-hover:scale-110 group-hover:drop-shadow-md" 
            src={exchange_icon} 
            alt="exchange policy" 
          />
          <p className="font-semibold transition-colors duration-300 group-hover:text-gray-900">
            Easy Exchange Policy
          </p>
          <p className="text-gray-400 transition-colors duration-300 group-hover:text-gray-600">
            Very easy exchange policy
          </p>
        </div>
      </div>

      <div className="group cursor-pointer transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-lg rounded-lg p-6 hover:bg-white/50">
        <div className="transition-transform duration-300 group-hover:-translate-y-2">
          <img 
            className="w-12 m-auto mb-5 transition-all duration-300 group-hover:scale-110 group-hover:drop-shadow-md" 
            src={quality_icon} 
            alt="return policy" 
          />
          <p className="font-semibold transition-colors duration-300 group-hover:text-gray-900">
            7 Days Return Policy
          </p>
          <p className="text-gray-400 transition-colors duration-300 group-hover:text-gray-600">
            We return your money within 7 days
          </p>
        </div>
      </div>

      <div className="group cursor-pointer transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-lg rounded-lg p-6 hover:bg-white/50">
        <div className="transition-transform duration-300 group-hover:-translate-y-2">
          <img 
            className="w-12 m-auto mb-5 transition-all duration-300 group-hover:scale-110 group-hover:drop-shadow-md" 
            src={support_img} 
            alt="customer support" 
          />
          <p className="font-semibold transition-colors duration-300 group-hover:text-gray-900">
            Best Customer Support
          </p>
          <p className="text-gray-400 transition-colors duration-300 group-hover:text-gray-600">
            We are available 24/7 for you
          </p>
        </div>
      </div>
    </div>
  );
};

export default Ourpolicy;