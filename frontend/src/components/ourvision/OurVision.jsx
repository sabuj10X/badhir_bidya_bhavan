import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const OurVision = () => {
  const fadeAnimation = (delay) => {
    return {
      initial: {
        opacity: 0,
        y: 20,
      },
      animate: {
        opacity: 1,
        y: 0,
        transition: {
          delay: delay,
          duration: 0.5,
          ease: "easeInOut",
        },
      },
    };
  };

  return (
    <div className="container mx-auto my-16 bg-white dark:bg-gray-900 dark:text-white">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
        {/* Vision Card */}
        <motion.div
          variants={fadeAnimation(0.2)}
          initial="initial"
          animate="animate"
          className="mx-5 md:mx-8 px-6 py-10 space-y-4 shadow-lg border-t-[6px] border-green-800 bg-white dark:bg-slate-800 dark:border-green-600 rounded-lg"
        >
          <h1 className="text-xl font-bold text-gray-800 dark:text-white">Our Vision</h1>
          <p className="text-gray-600 dark:text-gray-300">
            At Badhir BidyaBhaban, our vision is to create an inclusive and
            empowering environment for the hearing impaired community. We aim to
            provide quality education, resources, and support that enable
            individuals to thrive and achieve their full potential.
          </p>
          <a 
            href="/aboutus"
            className="inline-block text-green-600 hover:text-green-500 hover:border-b-2 hover:border-green-500 transition-all duration-200 mt-2"
          >
            Learn More
          </a>
        </motion.div>

        {/* Mission Card */}
        <motion.div
          variants={fadeAnimation(0.4)}
          initial="initial"
          animate="animate"
          className="mx-5 md:mx-8 px-6 py-10 space-y-4 shadow-lg border-t-[6px] border-yellow-700 bg-white dark:bg-slate-800 dark:border-yellow-600 rounded-lg"
        >
          <h1 className="text-xl font-bold text-gray-800 dark:text-white">Our Mission</h1>
          <p className="text-gray-600 dark:text-gray-300">
            Our mission is to deliver accessible education and services that
            cater to the unique needs of the hearing impaired. We strive to
            foster a community where everyone has equal opportunities to learn,
            grow, and contribute positively to society.
          </p>
          <a 
            href="/aboutus"
            className="inline-block text-yellow-600 hover:text-yellow-500 hover:border-b-2 hover:border-yellow-500 transition-all duration-200 mt-2"
          >
            Learn More
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default OurVision;