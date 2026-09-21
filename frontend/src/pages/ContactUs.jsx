import React from "react";
import Navbar from "../components/navbar/Navbar.jsx";
import Footer from "../components/Footer/Footer.jsx";
const ContactUs = () => {
  return (
    <div className="py-20 bg-gray-50">
      <Navbar></Navbar>
      <div className="container mx-auto px-4 mb-10">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Contact <span className="text-blue-600">Us</span>
            </h1>
            <p className="text-gray-600 text-lg">
              Get in touch with Badhir Bidyabhaban
            </p>
          </div>

          {/* Contact Sections */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Email Section */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200 hover:shadow-xl transition-shadow duration-300">
              <div className="text-center">
                {/* Email Icon */}
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg
                    className="w-8 h-8 text-blue-600"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                </div>

                {/* Email Content */}
                <h2 className="text-2xl font-bold text-gray-800 mb-4">
                  Email Us
                </h2>
                <p className="text-gray-600 mb-6">
                  Send us your questions, suggestions, or inquiries about our
                  programs
                </p>

                {/* Email Address */}
                <div className="bg-gray-50 rounded-lg p-4 mb-6">
                  <a
                    href="mailto:sabuj712515@gmail.com"
                    className="text-blue-600 font-semibold text-lg hover:text-blue-700 transition-colors duration-300"
                  >
                    sabuj712515@gmail.com
                  </a>
                </div>

                {/* Email Button */}
                <a
                  href="mailto:info@badhirbidyabhaban.org"
                  className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg transition-colors duration-300"
                >
                  <svg
                    className="w-5 h-5 mr-2"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                  Send Email
                </a>
              </div>
            </div>

            {/* Phone Section */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200 hover:shadow-xl transition-shadow duration-300">
              <div className="text-center">
                {/* Phone Icon */}
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg
                    className="w-8 h-8 text-green-600"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                </div>

                {/* Phone Content */}
                <h2 className="text-2xl font-bold text-gray-800 mb-4">
                  Call Us
                </h2>
                <p className="text-gray-600 mb-6">
                  Speak directly with our team for immediate assistance and
                  support
                </p>

                {/* Phone Number */}
                <div className="bg-gray-50 rounded-lg p-4 mb-6">
                  <a
                    href="tel:+919831475875"
                    className="text-green-600 font-semibold text-lg hover:text-green-700 transition-colors duration-300"
                  >
                    +91 9831475875
                  </a>
                </div>

                {/* Call Button */}
                <a
                  href="tel:+919831475875"
                  className="inline-flex items-center bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-3 rounded-lg transition-colors duration-300"
                >
                  <svg
                    className="w-5 h-5 mr-2"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                  Call Now
                </a>
              </div>
            </div>
          </div>

          {/* Bottom Info */}
          <div className="mt-12 text-center ">
            <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                School Hours
              </h3>
              <p className="text-gray-600">
                Monday - Friday | 10:00 AM - 4:00 PM
              </p>
              <p className="text-gray-600">Saturday: 10:00 AM - 1:00 PM</p>
              <p className="text-gray-500 text-sm mt-2">
                We respond to all inquiries within 24 hours
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default ContactUs;
