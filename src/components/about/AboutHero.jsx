// src/components/about/AboutHero.jsx
"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const AboutHero = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="grid w-full grid-cols-1 md:grid-cols-2 gap-12 md:gap-16"
    >
      {/* Bio Section */}
      <div className="flex flex-col items-start justify-start order-2 md:order-1 px-4 md:px-0">
        <h2 className="mb-6 text-2xl font-bold uppercase bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
          About Me
        </h2>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="font-medium text-gray-700 dark:text-gray-300 text-lg mb-6"
        >
          Hi, I'm Naveen Duhan, a Bioinformatician with a passion for
          deciphering complex biological data and transforming it into
          meaningful insights. With years of experience in computational
          biology and data analysis, I am always exploring innovative
          approaches to bridge biology and technology. My expertise lies
          in genomics, data science, and bioinformatics tools, and I am
          committed to leveraging these skills to drive scientific
          discovery and innovation.
        </motion.p>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="font-medium text-gray-700 dark:text-gray-300 text-lg mb-6"
        >
          I believe bioinformatics is more than just analyzing data—it's
          about solving biological mysteries and driving scientific
          discoveries through computational methods. I am dedicated to
          pushing the boundaries of what is possible in bioinformatics and
          am excited to collaborate with other researchers and scientists
          to advance our understanding of the natural world.
        </motion.p>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="font-medium text-gray-700 dark:text-gray-300 text-lg"
        >
          Whether working on genomics, transcriptomics, or other
          biological datasets, I bring my expertise in data science,
          machine learning, and bioinformatics tools to every project. I
          am passionate about using computational methods to uncover
          hidden patterns in biological data and am always looking for new
          ways to apply my skills to real-world problems.
        </motion.p>
      </div>

      {/* Image Section */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="relative h-max order-1 md:order-2 px-4 md:px-0"
      >
        <div className="relative rounded-2xl overflow-hidden border-2 border-solid border-blue-500 bg-white p-6 md:p-8 shadow-xl">
          <div className="absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-gradient-to-r from-blue-600 to-purple-600" />
          <Image
            src="/images/profile/nav1.jpg"
            alt="Naveen Duhan"
            width={500}
            height={500}
            className="w-full h-auto rounded-xl"
            priority
          />
        </div>
      </motion.div>
    </motion.div>
  );
};

export default AboutHero;
