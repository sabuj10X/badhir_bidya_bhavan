import React from 'react'
import { Heart, Users, Award, Target, BookOpen, Handshake } from "lucide-react";
const Values = () => {
  const values = [
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Compassion",
      description: "We believe in treating every individual with dignity, respect, and unconditional love."
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Community",
      description: "Building stronger communities through inclusive education and support systems."
    },
    {
      icon: <BookOpen className="w-8 h-8" />,
      title: "Education",
      description: "Providing quality education and skill development for the deaf and hearing-impaired."
    },
    {
      icon: <Handshake className="w-8 h-8" />,
      title: "Empowerment",
      description: "Empowering individuals to become self-reliant and contributing members of society."
    }
  ];
  return (
    <div className="py-16 bg-white dark:bg-gray-800 dark:text-gray-300">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4 dark:text-white">Our Values</h2>
            <p className="text-gray-600 text-lg dark:text-gray-300">The principles that guide everything we do</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center group hover:transform hover:scale-105 transition-all duration-300">
                <div className="bg-gradient-to-br from-violet-100 to-violet-50 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6 group-hover:from-violet-600 group-hover:to-violet-700 group-hover:text-white transition-all duration-300 border border-violet-200">
                  <div className="text-violet-600 group-hover:text-white transition-colors duration-300">
                    {value.icon}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3 dark:bg-gray-300 dark:rounded-md">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed dark:text-gray-400">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
  )
}

export default Values;
