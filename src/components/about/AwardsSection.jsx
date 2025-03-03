// src/components/about/AwardsSection.jsx
"use client";

import React, { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import { FaAward, FaTrophy } from "react-icons/fa";

const AwardCard = ({ award }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ duration: 0.5 }}
    whileHover={{ scale: 1.02 }}
    className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 border-l-4 border-amber-500 hover:shadow-lg transition-all duration-300"
  >
    <div className="flex items-start">
      <div className="bg-gradient-to-r from-amber-500 to-orange-500 text-white p-2 rounded-full mr-4 flex-shrink-0">
        <FaTrophy className="w-5 h-5" />
      </div>
      <div>
        <h3 className="font-bold text-lg text-gray-800 dark:text-gray-200 mb-2">
          {award.title}
        </h3>
        <p className="text-gray-600 dark:text-gray-400 text-sm">
          {award.description}
        </p>
      </div>
    </div>
  </motion.div>
);

const AwardsSection = () => {
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
    <div className="my-24 w-full">
      <div className="flex items-center mb-12">
        <FaAward className="text-4xl mr-4 text-amber-500" />
        <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-amber-500 to-orange-500 bg-clip-text text-transparent">
          Awards & Recognition
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {awards.map((award) => (
          <AwardCard key={award.id} award={award} />
        ))}
      </div>
    </div>
  );
};

export default AwardsSection;
