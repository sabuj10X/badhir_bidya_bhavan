import React from 'react'
// import second_image from "../../assets/second_front.jpg";
import skill_image from "../../assets/skill.jpg";
const Banner2 = () => {
  return (
    <div className="bg-slate-100 dark:bg-slate-900 dark:text-white mt-[-20px]">
      <div className="container md:h-[500px] flex items-center justify-center py-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 items-center gap-8 px-4 md:px-8">
          {/* text container */}
          <div className="sm:ml-4 bg-white/80 dark:bg-slate-800/80 rounded-2xl p-10 shadow-md ">
            <h1 className="text-2xl font-semibold md:text-4xl mb-4 text-yellow-500/60 dark:text-yellow-600">Improving Their Crafting Skills</h1>
            <ul className="flex list-inside list-disc flex-col gap-2 md:gap-4">
              <li className='font-medium text-slate-600/80  dark:text-slate-300'>At Badhir BidyaBhaban, we encourage students to explore and develop their creativity through hands-on crafting activities.</li>
              <li className='font-medium text-slate-600/80  dark:text-slate-300'>By engaging in various craft projects, students not only enhance their artistic talents but also learn valuable problem-solving and teamwork skills.</li>
              <li className='font-medium text-slate-600/80 dark:text-slate-300'>Through guided instruction and access to quality materials, we empower our students to improve their crafting skills and unlock new opportunities for personal growth and self-expression.</li>
            </ul>
          </div>
          {/* image conatinter */}
          <div className='flex justify-center items-center h-full'>
            <img src={skill_image} alt="banner2" 
            className="mx-auto w-full p-4 md:w-full h-[300px] md:h-[350px] object-cover rounded-3xl shadow-lg border-2 border-violet-200 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:border-yellow-400 hover:-rotate-1"/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Banner2
