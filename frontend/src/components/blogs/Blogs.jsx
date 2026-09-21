import React from "react";
import yoga from "../../assets/yoga.jpg";
import posing from "../../assets/posing_contest.jpg";
import inde from "../../assets/indipendance_day.jpg";
import Blog from "./Blog";
import prize_distribution from "../../assets/prize_distribution.jpg";
import carft from "../../assets/craft.jpg";

const Blogs = () => {
  const blogs = [{
    img: yoga,
    title: "Yoga for Beginners",
    description: "A comprehensive guide to starting your yoga journey with basic poses and breathing techniques.",
    data: "April 10, 2024",
  },{
    img: posing,
    title: "Pose for Beginners",
    description: "Learn the basics of poses and their benefits for physical and mental wellness.",
    data: "April 15, 2024",
  },{
    img: inde,
    title: "Independence Day Celebration",
    description: "Join us for a special Independence Day celebration with family and friends.",
    data: "August 15, 2025",
  },
  {
    img: prize_distribution,
    title: "Prize Distribution",
    description: "A spacial prize distribution event for The Students in Winter.",
    data: "September 15, 2025",
  },
{
  img: carft,
  title: "Craft Competition",
  description: "A Special Compitition for The Students.",
  data: "September 16, 2025",
}];

  return (
    <div className="dark:bg-gray-900 dark:text-white bg-gray-50 py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Our Latest Events
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-4"></div>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Discover our exciting upcoming events and activities designed to inspire and engage our community
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog, index) => (
            <Blog
              key={index}
              img={blog.img}
              title={blog.title}
              description={blog.description}
              data={blog.data}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blogs;