import React from 'react'
import { Heart, Users, Award, Target, BookOpen, Handshake  } from "lucide-react";

const stats = [
  { number: "1000+", label: "Students Trained", icon: <BookOpen className="w-6 h-6" /> },
  { number: "37", label: "Years of Service", icon: <Award className="w-6 h-6" /> },
  { number: "50+", label: "Active Volunteers", icon: <Users className="w-6 h-6" /> },
  { number: "10:1", label: "Student - Teacher Ratio", icon: <Heart className="w-6 h-6" /> },
  { number: "10+", label: "Programs Running", icon: <Target className="w-6 h-6" /> }
]
const AboutOverview = () => {
  return (
    <div className="py-16 bg-violet-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Our Impact</h2>
            <p className="text-violet-200">Making a difference in the lives of the deaf community</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="bg-white/10 backdrop-blur-sm rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4 border border-white/20">
                  <div className="text-violet-300">
                    {stat.icon}
                  </div>
                </div>
                <div className="text-3xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-violet-200">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
  )
}

export default AboutOverview
