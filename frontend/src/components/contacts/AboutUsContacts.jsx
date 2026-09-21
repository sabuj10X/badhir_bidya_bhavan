import React from 'react'
import {Link} from 'react-router-dom';
const AboutUsContacts = () => {
  return (
    <div className="py-20 bg-gradient-to-r from-violet-900 to-violet-800 mb-16 rounded-2xl dark:bg-gray-800">
        <div className="container mx-auto px-4 text-center ">
          <h2 className="text-3xl font-bold text-white mb-4">Join Our Mission</h2>
          <p className="text-violet-200 text-lg mb-8 max-w-2xl mx-auto">
            Together, we can create a more inclusive world. Whether you want to volunteer, 
            donate, or partner with us, every contribution makes a difference.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href='/donation' className="bg-white text-violet-900 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors duration-300">
              Donate Here
            </a>
            <a href='aboutus/contactus' className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-violet-900 transition-all duration-300">
              Contact Us
            </a>
          </div>
        </div>
      </div>
  )
}

export default AboutUsContacts;
