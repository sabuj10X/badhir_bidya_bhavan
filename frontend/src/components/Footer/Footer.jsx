import React from "react";
import Footerlink from "./Footerlink";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaLocationArrow,
  FaMobileAlt,
} from "react-icons/fa";

const Footer = () => {
  const importentLinks = [
    { name: "Home" , link: "/" },
    { name: "About", link: "/aboutus" },
    { name: "Contact" , link: "/aboutus/contactus" },
    { name: "Products" , link: "/products" },
  ];
  const Links = [
    { name: "Donation" , link: "/donation"},
    { name: "Approvals" , link: "/approvals"},
    { name: "About Us", link: "/aboutus" },
  ];
  return (
    <div className="text-white rounded-t-3xl bg-gradient-to-r from-blue-800 to to-yellow-900">
      <div className="container">
        {/* Footer container Section */}
        <div className="grid py-5 md:grid-cols-3">
          <div>
            <h1 className="mb-3 text-justify text-xl sm:text-left sm:text-2xl mt-4">
              <a href="/#home" className="uppercase font-semibold">
                badhir
                <span className="inline-block font-bold text-primary ml-2">
                  Bidya bhaban
                </span>
              </a>
            </h1>
            <p>
              Run and manage by Uttarpara Welfare Society for the Deaf and Retarted (WSDR)
            </p>
            <div className="flex items-center gap-3">
              <FaLocationArrow />
              <p>98, T.N. Mukherjee Road, Makhla, Uttarpara, West Bengal 712245</p>
            </div>
            <div className="flex items-center gap-3 mt-3">
              <FaMobileAlt />
              <p>+9831475875</p>
            </div>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:pl-10 col-span-2">
            <div className="py-4 px-4">
              <h1 className="mb-3 text-xl font-semibold sm:text-left sm:text-2xl">
                Importent Links
              </h1>
              <ul className="flex flex-col gap-3">
                <Footerlink links={importentLinks} />
              </ul>
            </div>
            <div className="py-4 px-4">
              <h1 className="mb-3 text-xl font-semibold sm:text-left sm:text-2xl">
               Page Links
              </h1>
              <ul className="flex flex-col gap-3">
                <Footerlink links={Links} />
              </ul>
            </div>
            <div className="py-4 px-4">
              <h1 className="mb-3 text-xl font-bold sm:text-left sm:text-xl">Social Links</h1>
              <div className="space-y-3">
                <h1>See our social links</h1>
                <input type="text"
                placeholder="Enter your email"
                className="rounded-full px-3 py-1 text-black focus:border-sky-500 focus:outline-none focus:ring-2 focus:ring-sky-500"  />
                <div className="flex items-center gap-4 mt-2">
                  <a href="#"><FaInstagram className="text-3xl duration-300 hover:scale-110"/></a>
                  <a href="https://www.facebook.com/profile.php?id=61578321416389"><FaFacebook className="text-3xl  duration-300 hover:scale-110"/></a>
                  <a href="#"><FaLinkedin className="text-3xl "/></a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Map Section */}
        <div className="relative py-8">

          {/* Map Container with Enhanced Styling */}
          <div className="relative max-w-5xl mx-auto">
            {/* Decorative background elements */}
            <div className="absolute -top-4 -left-4 w-20 h-20 bg-violet-400/20 rounded-full blur-xl"></div>
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-violet-600/20 rounded-full blur-xl"></div>
            
            {/* Main map container */}
            <div className="relative bg-white/10 backdrop-blur-lg rounded-2xl p-4 shadow-2xl border border-white/20">
              <div className="rounded-xl overflow-hidden shadow-lg ring-1 ring-white/10">
                <iframe
                  title="location"
                  src="https://maps.google.com/maps?q=Makhla+Deaf+and+Dumb+School,+18+Makhla+Government+Colony+Number+1+Olabibitala+Makhla+Uttarpara+West+Bengal+712245&hl=en&z=16&output=embed"
                  width="100%"
                  height="350"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="rounded-xl"
                ></iframe>
              </div>
              
              {/* Map overlay info */}
              <div className="absolute top-8 left-8 bg-white/90 backdrop-blur-md rounded-lg px-4 py-3 shadow-lg">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
                  <span className="text-gray-800 font-semibold text-sm">Badhir Bidyabhaban</span>
                </div>
                <p className="text-gray-600 text-xs mt-1">98, T.N. Mukherjee Road, Makhla</p>
              </div>
            </div>

            {/* Quick info cards */}
            <div className="grid md:grid-cols-2 gap-4 mt-6">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-violet-500/30 rounded-full flex items-center justify-center">
                    <FaLocationArrow className="text-violet-300" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold">Address</h3>
                    <p className="text-violet-200 text-sm">98, T.N. Mukherjee Road, Makhla, Uttarpara, WB 712245</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-violet-500/30 rounded-full flex items-center justify-center">
                    <FaMobileAlt className="text-violet-300" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold">Contact</h3>
                    <p className="text-violet-200 text-sm">+9831475875</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer copy right section */}
        <div className="bottom-footer">
          <p className="border-t-2 border-gray-300/50 py-6 text-center">
            Copyright &copy; 2025. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;