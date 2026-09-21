
import React from "react";

const Title = ({ text1, text2 }) => {
  return (
    <div className="flex items-center gap-2 mb-3 cursor-pointer group transition-all duration-300 hover:gap-4">
      <span className="text-gray-500 group-hover:text-gray-700 transition-colors duration-300">
        {text1} <span className="text-gray-700 font-medium group-hover:text-gray-900">{text2}</span>
      </span>
      <div className="w-8 sm:w-12 h-px sm:h-0.5 bg-gray-700 group-hover:w-16 group-hover:bg-gray-900 transition-all duration-300" />
    </div>
  );
};

export default Title;