import React from "react";
import paread from "../../assets/video2.mp4";
import poster from "../../assets/poster.png"; // Optional poster image
import {Link} from "react-router-dom";
const Videobanner = () => {
  return (
    <div className="bg-gradient-to-r from-yellow-400 via-orange-400 to-yellow-500 min-h-[580px] flex items-center">
      <div className="container mx-auto px-4 py-12 md:py-20 ml-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* video section */}
          <div className="order-2 lg:order-1">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-black/10 backdrop-blur-sm border border-white/20">
              <video
                src={paread}
                className="w-full h-[280px] md:h-[350px] lg:h-[400px] object-cover rounded-2xl"
                controls
                loop
                playsInline
                poster={poster}
              />
              {/* Optional overlay for better control visibility */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent pointer-events-none rounded-2xl"></div>
            </div>
          </div>

          {/* text section */}
          <div className="order-1 lg:order-2 text-center lg:text-left">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 leading-tight">
                Watch Our
                <span className="block text-gray-700">Video</span>
              </h1>

              <div className="w-20 h-1 bg-gradient-to-r from-purple-600 to-blue-600 mx-auto lg:mx-0 rounded-full"></div>

              <p className="text-gray-700 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto lg:mx-0">
                Discover our mission to provide quality education and support
                for the hearing impaired community. Learn how we empower
                individuals through inclusive learning experiences and
                innovative teaching methods.
              </p>

              <div
                className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4"
              >
                {/* <button className="bg-purple-600 hover:bg-purple-700 text-white font-semibold px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
                  Learn More
                </button> */}
                <a
                  href="/aboutus/contactus"
                  className="bg-white/30 hover:bg-white/60 text-gray-800 font-semibold px-8 py-4 rounded-full border-2 border-white/30 hover:border-white/50 backdrop-blur-sm transition-all duration-300"
                >
                  Contact Us
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Optional decorative elements */}
        <div className="absolute top-10 right-10 w-32 h-32 bg-white/10 rounded-full blur-xl"></div>
        <div className="absolute bottom-10 left-10 w-24 h-24 bg-purple-300/20 rounded-full blur-lg"></div>
      </div>
    </div>
  );
};

export default Videobanner;
