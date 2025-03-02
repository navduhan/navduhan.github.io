import React, { useRef } from "react";
import { motion, useScroll } from "framer-motion";

const Awards = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });

  const awards = [
    {
      id: 1,
      title: "USU Robins Awards finalist for Doctoral Student Researcher of the academic Year 2022-2023",
      description: "Utah State University, Logan, UT, USA",
    },
    {
      id: 2,
      title: "Doctoral Student Researcher of the academic Year 2022-2023",
      description: "College of Agriculture and Applied Sciences, Utah State University, Logan, UT, USA",
    },
    {
      id: 3,
      title: "Doctoral Student Researcher of the academic Year 2022-2023",
      description: "Department of Plants, Soils and Climate, Utah State University, Logan, UT, USA",
    },
    {
      id: 4,
      title: "Young Scientist Award",
      description:
        "National Conference on Technological Challenges in Social, Environmental, and Agricultural Reforms (TECHSEAR-2017) 9th and 10th September 2017 at IIRR Hyderabad",
    },
  ];

  return (
    <div className="my-32 max-w-6xl mx-auto px-4">
      <h2 className="font-bold text-6xl md:text-8xl mb-32 w-full text-center text-black dark:text-white">
        Awards
      </h2>

      <div ref={ref} className="relative w-full md:w-[75%] mx-auto">
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className="absolute md:left-9 top-0 w-[4px] h-full bg-blue-500 origin-top dark:bg-blue-400"
        />

        <div className="flex flex-col gap-y-6">
          {awards.map((award) => (
            <motion.div
              key={award.id}
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, type: "spring" }}
              className="w-full flex flex-col items-center"
            >
              <div className="group relative rounded-lg bg-white p-6 shadow-lg 
                              transition-all duration-300 ease-in-out hover:scale-105
                              border border-blue-500/50 dark:border-blue-800/20 
                              w-[80%] flex flex-col justify-between">
                <h3 className="font-bold text-2xl text-blue-600 dark:text-blue-400 mb-2">
                  {award.title}
                </h3>
                <span className="font-medium text-gray-600 dark:text-gray-400 block mb-4">
                  {award.description}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Awards;