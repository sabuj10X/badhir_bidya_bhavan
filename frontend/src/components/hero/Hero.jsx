import React from "react";
import frontImage from "../../assets/front7.png";
import study1 from "../../assets/study1.jpg";
import { motion } from "framer-motion";
import { ChevronRight, Play, Users, BookOpen, Award } from "lucide-react";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";

const bgStyle = {
  backgroundImage: `url(${study1})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  width: "100%",
};

const FadeUp = (delay) => {
  return {
    initial: {
      opacity: 0,
      y: 60,
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        delay: delay,
        duration: 0.8,
        ease: [0.25, 0.25, 0, 1],
      },
    },
  };
};

const SlideIn = (delay, direction = "left") => {
  return {
    initial: {
      opacity: 0,
      x: direction === "left" ? -60 : 60,
    },
    animate: {
      opacity: 1,
      x: 0,
      transition: {
        delay: delay,
        duration: 0.8,
        ease: [0.25, 0.25, 0, 1],
      },
    },
  };
};

const FloatAnimation = {
  animate: {
    y: [-10, 10, -10],
    transition: {
      duration: 6,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

const Hero = () => {
  const stats = [
    { icon: Users, number: "200+", label: "Students" },
    { icon: BookOpen, number: "10+", label: "Courses" },
    { icon: Award, number: "95%", label: "Success Rate" },
  ];

  return (
    <div style={bgStyle} className="relative overflow-hidden">
      {/* Enhanced gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/85 via-black/60 to-primary/30"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
      
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          {...FloatAnimation}
          className="absolute top-20 left-10 w-20 h-20 bg-primary/20 rounded-full blur-xl"
        />
        <motion.div
          {...FloatAnimation}
          style={{ animationDelay: "2s" }}
          className="absolute bottom-32 right-16 w-32 h-32 bg-blue-500/20 rounded-full blur-xl"
        />
        <motion.div
          {...FloatAnimation}
          style={{ animationDelay: "4s" }}
          className="absolute top-1/2 right-1/4 w-16 h-16 bg-purple-500/20 rounded-full blur-xl"
        />
      </div>

      <div className="relative min-h-[100vh] flex items-center pt-20 pb-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-12 items-center gap-12 text-white">
            {/* Hero text section */}
            <div className="lg:col-span-7 flex flex-col items-center text-center gap-8 lg:items-start lg:text-left">
              {/* Badge */}
              <motion.div
                variants={FadeUp(0.1)}
                initial="initial"
                animate="animate"
                className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 text-sm font-medium"
              >
                <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                Empowering Deaf Education Since 1986
              </motion.div>

              <motion.h1
                variants={FadeUp(0.2)}
                initial="initial"
                animate="animate"
                className="text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-bold leading-tight"
              >
                Welcome to{" "}
                <span className="bg-gradient-to-r from-primary to-blue-400 bg-clip-text text-transparent">
                  Badhir BidyaBhaban
                </span>
              </motion.h1>

              <motion.p
                variants={FadeUp(0.3)}
                initial="initial"
                animate="animate"
                className="text-lg md:text-xl text-gray-200 leading-relaxed max-w-2xl"
              >
                We are dedicated to providing quality education and support for
                the hearing impaired community. Our mission is to empower
                individuals through inclusive learning experiences that break
                barriers and build futures.
              </motion.p>

              {/* CTA Buttons */}
              <motion.div
                variants={FadeUp(0.4)}
                initial="initial"
                animate="animate"
                className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
              >
                <Link to="/products"  className="group bg-primary hover:bg-primary/90 text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl hover:shadow-primary/25 transform hover:-translate-y-1">
                  Get Started
                  <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                
                <Link to="/aboutus" className="group bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 flex items-center justify-center gap-2 hover:shadow-lg transform hover:-translate-y-1">
                  <Play className="w-5 h-5 group-hover:scale-110 transition-transform" />
                  About US
                </Link>
              </motion.div>

              {/* Stats */}
              <motion.div
                variants={FadeUp(0.5)}
                initial="initial"
                animate="animate"
                className="grid grid-cols-3 gap-8 w-full max-w-md mt-8"
              >
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="flex justify-center mb-2">
                      <stat.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div className="text-2xl font-bold">{stat.number}</div>
                    <div className="text-sm text-gray-300">{stat.label}</div>
                  </div>
                ))}
              </motion.div>
            </div>

            {/* Visual element section */}
            <div className="lg:col-span-5 flex justify-center lg:justify-end">
              <motion.div
                variants={SlideIn(0.6, "right")}
                initial="initial"
                animate="animate"
                className="relative"
              >
                {/* Decorative card */}
                <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-8 shadow-2xl">
                  <div className="space-y-6">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center">
                        <BookOpen className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg">Quality Education</h3>
                        <p className="text-gray-300 text-sm">Inclusive learning for all</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-blue-500/20 rounded-full flex items-center justify-center">
                        <Users className="w-6 h-6 text-blue-400" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg">Expert Support</h3>
                        <p className="text-gray-300 text-sm">Dedicated instructors</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-green-500/20 rounded-full flex items-center justify-center">
                        <Award className="w-6 h-6 text-green-400" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg">Proven Results</h3>
                        <p className="text-gray-300 text-sm">Success guaranteed</p>
                      </div>
                    </div>
                  </div>
                  
                  
                  <div className="mt-8 space-y-3">
                    <div className="flex items-center justify-between text-sm">
                      <span>Course Completion</span>
                      <span>92%</span>
                    </div>
                    <div className="w-full bg-white/10 rounded-full h-2">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: "92%" }}
                        transition={{ delay: 1.2, duration: 1.5 }}
                        className="bg-gradient-to-r from-primary to-blue-400 h-2 rounded-full"
                      />
                    </div>
                  </div>
                </div>

                {/* Floating elements */}
                <motion.div
                  {...FloatAnimation}
                  className="absolute -top-4 -right-4 w-8 h-8 bg-primary/60 rounded-full blur-sm"
                />
                <motion.div
                  {...FloatAnimation}
                  style={{ animationDelay: "3s" }}
                  className="absolute -bottom-6 -left-6 w-12 h-12 bg-blue-400/40 rounded-full blur-sm"
                />
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      
    </div>
  );
};

export default Hero;