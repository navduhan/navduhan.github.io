import React from "react";
import { motion, useScroll } from "framer-motion";

const LiIcon = ({ reference }) => {
  const { scrollYProgress } = useScroll({
    target: reference,
    offset: ["center end", "center center"],
    layoutEffect: false,
  });

  return (
    <div className="relative w-full flex justify-center">
      <figure className="absolute -left-10 sm:-left-6 md:-left-30 stroke-gray-800 dark:stroke-white">
        <svg
          className="-rotate-90 w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-20 lg:h-20"
          viewBox="0 0 100 100"
        >
          {/* Outer Circle */}
          <circle
            cx="50"
            cy="50"
            r="20"
            className="stroke-teal-500 stroke-[1.5] fill-none"
          />
          {/* Animated Circle */}
          <motion.circle
            cx="50"
            cy="50"
            r="20"
            className="stroke-[5px] fill-white dark:fill-gray-800"
            style={{ pathLength: scrollYProgress }}
          />
          {/* Inner Circle */}
          <circle
            cx="50"
            cy="50"
            r="10"
            className="animate-pulse stroke-1 fill-teal-500"
          />
        </svg>
      </figure>
    </div>
  );
};

export default LiIcon;