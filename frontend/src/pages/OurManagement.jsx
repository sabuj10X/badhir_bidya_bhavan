import React from 'react'
import { Users, Award, Briefcase } from 'lucide-react'
import Navbar from '../components/navbar/Navbar'
import Footer from '../components/Footer/Footer'
import amitavo from "../assets/amitavo.jpg";
import krisna from "../assets/krisna.jpg";
import rajesh from "../assets/rajesh.png";
import saibal from "../assets/saibal.png";
import soumyendu from "../assets/soumyendu.png";
import surojit from "../assets/surojit.png";
import syamalendu from "../assets/syamalendu.png";


const OurManagement = () => {
  const teamMembers = [
    {
      name: "Amitabha Guha Sarker",
      title: "President",
      credentials: "LLB, ASC",
      description: "Ex-Sr. VP & Company Secretary – McLeod Russel India Ltd.\nInvestment Columnist – Anandbazar",
      image: amitavo
    },
    {
      name: "Krishna Roy",
      title: "Headmistress",
      credentials: "BA (Spl. Edu.)",
      description: "Award winning social worker,\nTrained in special need education",
      image: krisna
    },
    {
      name: "Syamalendu Banerjee",
      title: "Secretary",
      credentials: "B.Engg.",
      description: "Ex-AGM (Materials),\nGarden Reach Shipbuilders",
      image: syamalendu
    },
    {
      name: "Rajesh Ghosh",
      title: "Treasurer",
      credentials: "M.Sc, PGDBM",
      description: "Ex-Director, Simoco Telecom (South Asian Region)",
      image: rajesh
    },
    {
      name: "Surajit Nag",
      title: "Assistant Secretary",
      credentials: "LLB, ACS",
      description: "Sr. GM & Company Secretary (retd.) – Williamson Tea",
      image: surojit
    },
    {
      name: "Saibal Mukherjee",
      title: "Assistant Treasurer",
      credentials: "Advocate",
      description: "Practicing Tax Consultant &\nPartner at Micro V & Co.",
      image: saibal
    },
    {
      name: "Soumyendu Banerjee",
      title: "CSR Coordinator",
      credentials: "BME",
      description: "Ex-Project Mgr. – Saudi Aramco,\nConsultant – Jacobs Calfran",
      image: soumyendu
    }
  ]

  return (
    <div>
      <Navbar/>
     <div className='mt-[46px]'>
       <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-4">
            <Users className="w-12 h-12 text-indigo-600" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our Working Team
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Meet the dedicated professionals leading our organization with expertise and passion
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden"
            >
              {/* Image Container */}
              <div className="relative h-64 overflow-hidden bg-gradient-to-br from-indigo-100 to-blue-100">
                <img 
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-1">
                  {member.name}
                </h3>
                <div className="flex items-center gap-2 mb-3">
                  <Award className="w-4 h-4 text-indigo-600" />
                  <p className="text-indigo-600 font-semibold">
                    {member.credentials}
                  </p>
                </div>
                <div className="flex items-start gap-2 mb-3">
                  <Briefcase className="w-4 h-4 text-gray-500 mt-1 flex-shrink-0" />
                  <p className="text-lg font-semibold text-gray-700">
                    {member.title}
                  </p>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed whitespace-pre-line">
                  {member.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Footer Note */}
        <div className="mt-16 text-center">
          <p className="text-gray-600 italic">
            Together, we strive for excellence and meaningful impact
          </p>
        </div>
      </div>
    </div>
     </div>
    <Footer></Footer>
    </div>
  )
}

export default OurManagement