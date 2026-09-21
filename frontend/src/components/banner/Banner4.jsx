import React from 'react'
import computer_practice from "../../assets/computer_practice.jpeg";
const Banner = () => {
  return (
    <div className="bg-slate-100 dark:bg-slate-900 dark:text-white">
      <div className="container md:h-[500px] flex items-center justify-center py-4 mb-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 items-center gap-8 px-4 md:px-8">
          {/* image conatinter */}
          <div className='flex justify-center items-center h-full'>
            <img src={computer_practice} alt="banner" 
            className="mx-auto w-full p-4 md:w-full h-[300px] md:h-[350px] object-cover object-top rounded-3xl shadow-lg border-2 border-violet-200 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:border-violet-400 hover:-rotate-1"/>
          </div>
          
          {/* text container */}
          <div className="sm:ml-4 bg-white/80 dark:bg-slate-800/80 rounded-2xl p-10 shadow-md ">
           <h1 className="text-2xl font-semibold md:text-4xl mb-4 text-violet-500/90 dark:text-violet-800">Empowering Hearing Impaired Students</h1>
            <ul className="flex list-inside list-disc flex-col gap-2 md:gap-4">
              <li className='font-medium text-slate-600/80 dark:text-slate-300'>Hands‑on computer classes teach keyboarding, file management and safe internet use to boost everyday independence.</li>
              <li className='font-medium text-slate-600/80 dark:text-slate-300'>Sign‑supported instruction + adaptive software ensures every student learns at their own pace.</li>
              <li className='font-medium text-slate-600/80 dark:text-slate-300'>Project‑based practice — digital storytelling, presentations and basic coding — builds confidence and vocational skills.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Banner
