// src/components/research/ResearchHero.jsx
"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { FaFlask, FaDna, FaLaptopCode, FaChartNetwork } from "react-icons/fa";

const ResearchHero = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="w-full"
    >
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-2xl p-8 md:p-10 shadow-lg border border-blue-100 dark:border-blue-900/30">
        <div className="flex flex-col md:flex-row gap-10">
          {/* Left side - Text content */}
          <div className="md:w-3/5">
            <h2 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-6">
              Advancing Bioinformatics Through Computational Innovation
            </h2>

            <p className="text-gray-700 dark:text-gray-300 text-lg mb-6">
              My research focuses on developing cutting-edge computational
              methods, machine learning models, and bioinformatics tools to
              analyze complex biological data, particularly in genomics,
              transcriptomics, epigenomics, and metagenomics. I am passionate
              about integrating multi-omics data to improve plant and animal
              health, leveraging AI-driven computational modeling, and exploring
              host-pathogen interactions through systems biology approaches.
              With over a decade of experience in bioinformatics, I have
              developed NGS data analysis pipelines, prediction tools, and
              databases while collaborating with researchers across
              institutions. At South Dakota State University, I aim to establish
              a strong, externally funded research program, foster
              interdisciplinary collaborations, and mentor students in
              computational biology and bioinformatics. My work is driven by the
              goal of bridging the gap between data and discovery, ultimately
              contributing to advancements in agriculture, medicine, and
              environmental science. I plan to seek funding from agencies such
              as NIH, NSF, USDA, DOE, and private foundations to support these
              initiatives.{" "}
            </p>

            <div className="grid grid-cols-2 gap-6 mt-8">
              <ResearchStat number="30+" label="Publications" />
              <ResearchStat number="25+" label="Research Projects" />
              <ResearchStat number="15+" label="Collaborations" />
              <ResearchStat number="200+" label="Citations" />
            </div>
          </div>

          {/* Right side - Image */}
          <div className="md:w-2/5">
            <div className="relative h-full">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-xl blur-md"></div>
              <Image
                src="/images/research/research.jpg"
                alt="Research Visualization"
                width={500}
                height={400}
                className="w-full h-full object-cover rounded-xl shadow-lg relative z-10"
              />
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const ResearchStat = ({ number, label }) => (
  <div className="flex items-center">
    <div className="bg-white dark:bg-gray-800 rounded-full h-14 w-14 flex items-center justify-center shadow-md mr-4">
      <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
        {number}
      </span>
    </div>
    <span className="text-gray-700 dark:text-gray-300 font-medium">
      {label}
    </span>
  </div>
);

export default ResearchHero;
