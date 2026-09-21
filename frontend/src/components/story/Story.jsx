import React from "react";
import front_image from "../../assets/front_image.jpg";
const Story = () => {
  return (
    <div className="py-20 bg-gray-50 dark:bg-slate-800 dark:text-gray-400 ">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <span className="inline-block bg-blue-100 text-blue-600 px-4 py-2 rounded-full text-sm font-medium mb-4">
              Since 1986
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4 dark:text-gray-200">
              Our Story
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              How Badhir Bidyabhaban began its journey to empower the
              hearing-impaired community
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Text Section */}
            <div className="space-y-8">
              {/* Foundation Story */}
              <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-200 hover:shadow-xl transition-shadow duration-300 dark:bg-slate-400 dark:border-slate-600 dark:text-gray-300">
                <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mr-3 dark:bg-blue-400"></span>
                  The Beginning (1986)
                </h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  <strong>UTTARPARA</strong>, centrally located at Howrah-Bandel
                  rail line, became home to the Welfare Society for the Deaf and
                  Retarded (WSDR). Founded by social activists and
                  philanthropists under{" "}
                  <strong>Sri Ashutosh Bhattacharya's</strong> leadership, we
                  began serving the economically weaker sections of society.
                </p>
              </div>

              {/* Growth Story */}
              <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-200 hover:shadow-xl transition-shadow duration-300 dark:bg-slate-400 dark:border-slate-600 dark:text-gray-300">
                <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
                  <span className="w-2 h-2 bg-green-600 rounded-full mr-3 dark:bg-green-400"></span>
                  Our Own Home (1992)
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  We acquired our own property just two minutes from Uttarpara
                  railway station. Our <strong>4,000 sq.ft. facility</strong>{" "}
                  became the <em>only school in Hooghly district</em>
                  exclusively engaged in formal education and vocational
                  training for hearing-impaired students. Many of our graduates
                  are now economically well-settled in society.
                </p>
              </div>

              {/* Highlights */}
              <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-200 dark:bg-slate-400 dark:border-slate-600 dark:text-gray-300">
                <h3 className="text-xl font-bold text-gray-800 mb-6">
                  What We Offer
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                  <div className="flex items-center space-x-3">
                    <span className="w-2 h-2 bg-yellow-400 rounded-full  dark:bg-yellow-400"></span>
                    <span className="text-gray-600">
                      Pre-primary to Class VIII
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <span className="w-2 h-2 bg-yellow-400 rounded-full dark:bg-yellow-400"></span>
                    <span className="text-gray-600">
                      Madhyamik Exam preparation
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <span className="w-2 h-2 bg-yellow-400 rounded-full dark:bg-yellow-400"></span>
                    <span className="text-gray-600">Computer training</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <span className="w-2 h-2 bg-yellow-400 rounded-full dark:bg-yellow-400"></span>
                    <span className="text-gray-600">Vocational training</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <span className="w-2 h-2 bg-yellow-400 rounded-full dark:bg-yellow-400"></span>
                    <span className="text-gray-600">Speech therapy</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <span className="w-2 h-2 bg-yellow-400 rounded-full"></span>
                    <span className="text-gray-600">Free meals & uniforms</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <span className="w-2 h-2 bg-yellow-400 rounded-full dark:bg-yellow-400"></span>
                    <span className="text-gray-600">
                      Yoga & special classes
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <span className="w-2 h-2 bg-yellow-400 rounded-full dark:bg-yellow-400"></span>
                    <span className="text-gray-600">
                      Monthly Stipend to all Students
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Image Section */}
            <div className="relative">
              <div className="relative group">
                {/* Subtle glow effect */}
                <div className="absolute inset-0 bg-blue-400 rounded-2xl blur-lg opacity-20 group-hover:opacity-30 transition-opacity duration-300"></div>

                <img
                  src={front_image}
                  alt="Badhir Bidyabhaban School Building"
                  className="relative w-full h-[600px] object-cover rounded-2xl shadow-xl border-4 border-white group-hover:scale-[1.02] transition-transform duration-300"
                />

                {/* Simple overlay badge */}
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm rounded-lg px-3 py-2 shadow-lg">
                  <span className="text-sm font-semibold text-gray-800">
                    Est. 1986
                  </span>
                </div>
              </div>

              {/* Location info */}
              <div className="mt-6 bg-white rounded-lg p-4 shadow-lg border border-gray-200 dark:bg-slate-400 dark:border-slate-600 dark:text-gray-300">
                <div className="text-center">
                  <h4 className="font-semibold text-gray-800 mb-2">Location</h4>
                  <p className="text-sm text-gray-600">
                    2 minutes from Uttarpara Railway Station
                    <br />
                    Howrah-Bandel Rail Line, West Bengal
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Story;
