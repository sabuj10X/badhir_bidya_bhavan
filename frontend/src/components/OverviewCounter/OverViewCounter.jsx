import React from "react";
import CountUp from "react-countup";
import { motion } from "framer-motion";
const OverViewCounter = () => {
  return (
    <motion.section
      initial={{ opacity: 0, scale: 0.5 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ type: "spring", stiffness: 100 }}
      className="container h-12  md:h-32 p-3"
    >
      <div className="mx-auto my-4 grid w-full grid-cols-3 divide-x text-gray-600 divide-slate-700 bg-white p-2 shadow-lg dark:bg-gray-800 dark:divide-slate-300 dark:text-white/70 md:max-w-[800px] lg:-translate-y-20 md:p-8 rounded-lg">
        <div className="flex flex-col items-center justify-center">
          <p className="text-sm font-bold text-black/80 dark:text-white sm:text-lg md:text-3xl">
            <CountUp
              enableScrollSpy={true}
              scrollSpyOnce={true}
              start={0}
              end={50}
              suffix="+"
              duration={2.75}
            />
          </p>
          <p className="sm:text-md text-xs md:text-lg">Fundraisers</p>
        </div>
         <div className="flex flex-col items-center justify-center">
          <p className="text-sm font-bold text-black/80 dark:text-white sm:text-lg md:text-3xl">
            <CountUp
              enableScrollSpy={true}
              scrollSpyOnce={true}
              start={0}
              end={150}
              suffix="+"
              duration={2.75}
            />
          </p>
          <p className="sm:text-md text-xs md:text-lg">Donors</p>
        </div>
        <div className="flex flex-col items-center justify-center">
          <p className="text-sm font-bold text-black/80 dark:text-white sm:text-lg md:text-3xl">
            <CountUp
              enableScrollSpy={true}
              scrollSpyOnce={true}
              start={0}
              end={50}
              suffix="+"
              duration={2.75}
            />
          </p>
          <p className="sm:text-md text-xs md:text-lg">Volunteers</p>
        </div>
      </div>
    </motion.section>
  );
};

export default OverViewCounter;
