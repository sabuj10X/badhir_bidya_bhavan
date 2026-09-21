import React from 'react'
import second_image from "../../assets/second_front.jpg";
const Banner = () => {
  return (
    <div className="bg-slate-100 dark:bg-slate-900 dark:text-white">
      <div className="container md:h-[500px] flex items-center justify-center py-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 items-center gap-8 px-4 md:px-8">
          {/* image conatinter */}
          <div className='flex justify-center items-center h-full'>
            <img src={second_image} alt="banner" 
            className="mx-auto w-full p-4 md:w-full h-[300px] md:h-[350px] object-cover rounded-3xl shadow-lg border-2 border-violet-200 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:border-violet-400 hover:-rotate-1"/>
          </div>
          
          {/* text container */}
          <div className="sm:ml-4 bg-white/80 dark:bg-slate-800/80 rounded-2xl p-10 shadow-md ">
            <h1 className="text-2xl font-semibold md:text-4xl mb-4 text-violet-500/90 dark:text-violet-800">Empowering Hearing Impaired Students</h1>
            <ul className="flex list-inside list-disc flex-col gap-2 md:gap-4">
              <li className='font-medium text-slate-600/80  dark:text-slate-300'>At Badhir BidyaBhaban, we are dedicated to creating an inclusive and supportive learning environment for students with hearing impairments.</li>
              <li className='font-medium text-slate-600/80  dark:text-slate-300'>Our mission is to break down barriers to education by providing accessible resources, specialized teaching methods, and a nurturing community. </li>
              <li className='font-medium text-slate-600/80 dark:text-slate-300'>We believe every student deserves the opportunity to reach their full potential, and we are committed to empowering our learners with the skills, confidence, and independence they need to succeed in all aspects of life.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Banner
