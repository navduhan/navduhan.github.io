// src/components/teaching/TeachingExperienceCard.jsx
"use client";

import React from "react";
import { motion } from "framer-motion";
import { FaUniversity, FaMapMarkerAlt, FaGraduationCap, FaUserGraduate, FaBook, FaCalendarAlt } from "react-icons/fa";

const TeachingExperienceCard = () => {
  const usExperiences = [
    {
      institution: "South Dakota State University",
      location: "Brookings, SD, USA",
      courses: [
        { code: 'PSC 4150/6150', title: 'Bioinformatics and Big Data Mining' },
      ],
      gradientClass: "from-blue-600 to-cyan-500",
      years: "2023 - Present"
    },
    {
      institution: "Utah State University",
      location: "Logan, UT, USA",
      courses: [
        { code: 'PSC 4150/6150', title: 'Bioinformatics and Big Data Mining' },
      ],
      gradientClass: "from-purple-600 to-indigo-500",
      years: "2019 - 2023"
    }
  ];

  const indianExperience = {
    institution: "Punjab Agricultural University",
    location: "Ludhiana, India",
    graduateCourses: [
      { code: 'Biotech 509', title: 'Bioinformatics Tools and Their Application in Agriculture' },
      { code: 'Biotech 607', title: 'Advances in Bioinformatics' },
    ],
    undergraduateCourses: [
      { code: 'Biotech 307', title: 'Introduction to Bioinformatics' },
      { code: 'Biotech 401', title: 'Introduction to Genomics and Proteomics' },
      { code: 'Biotech 404', title: 'Computational Biology' },
      { code: 'Biotech 499', title: 'In-house Training' },
    ],
    gradientClass: "from-emerald-600 to-green-500",
    years: "2011 - 2018"
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
      {/* US Universities Card */}
      <motion.div
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className="bg-white dark:bg-gray-800 rounded-2xl p-5 shadow-lg border border-gray-200 dark:border-gray-700"
      >
        <h3 className="text-xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-4 flex items-center">
          <FaUniversity className="mr-2 text-blue-600 dark:text-blue-400" />
          US Teaching Experience
        </h3>

        {usExperiences.map((experience, index) => (
          <div key={index} className={`mb-5 ${index !== usExperiences.length - 1 ? "border-b border-gray-200 dark:border-gray-700 pb-5" : ""}`}>
            <div className="flex items-center mb-3">
              <div className={`p-2 rounded-full bg-gradient-to-r ${experience.gradientClass} text-white mr-3`}>
                <FaUniversity className="text-sm" />
              </div>
              <div>
                <h4 className={`text-lg font-semibold bg-gradient-to-r ${experience.gradientClass} bg-clip-text text-transparent`}>
                  {experience.institution}
                </h4>
                <div className="flex flex-col sm:flex-row sm:items-center text-sm">
                  <p className="flex items-center text-gray-600 dark:text-gray-400 mr-4">
                    <FaMapMarkerAlt className="mr-1" />
                    {experience.location}
                  </p>
                  <p className="flex items-center text-gray-500 dark:text-gray-400">
                    <FaCalendarAlt className="mr-1" />
                    {experience.years}
                  </p>
                </div>
              </div>
            </div>
            
            <div className="ml-8">
              <h5 className="text-md font-medium text-gray-800 dark:text-gray-200 mb-2 flex items-center">
                <FaBook className="mr-2 text-gray-600 dark:text-gray-400" />
                Courses
              </h5>
              <ul className="space-y-2">
                {experience.courses.map((course, idx) => (
                  <li key={idx} className="bg-gray-50 dark:bg-gray-700/50 rounded-lg p-3">
                    <div className="font-bold text-gray-800 dark:text-gray-200 text-sm">{course.code}</div>
                    <div className="text-gray-600 dark:text-gray-400 text-sm">{course.title}</div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </motion.div>

      {/* Punjab Agricultural University Card */}
      <motion.div
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className="bg-white dark:bg-gray-800 rounded-2xl p-5 shadow-lg border border-gray-200 dark:border-gray-700"
      >
        <div className="flex items-center mb-4">
          <div className={`p-2.5 rounded-full bg-gradient-to-r ${indianExperience.gradientClass} text-white mr-3`}>
            <FaUniversity className="text-lg" />
          </div>
          <div>
            <h3 className={`text-xl font-bold bg-gradient-to-r ${indianExperience.gradientClass} bg-clip-text text-transparent`}>
              {indianExperience.institution}
            </h3>
            <div className="flex flex-col sm:flex-row sm:items-center text-sm">
              <p className="flex items-center text-gray-600 dark:text-gray-400 mr-4">
                <FaMapMarkerAlt className="mr-1" />
                {indianExperience.location}
              </p>
              <p className="flex items-center text-gray-500 dark:text-gray-400">
                <FaCalendarAlt className="mr-1" />
                {indianExperience.years}
              </p>
            </div>
          </div>
        </div>
        
        <div className="space-y-4">
          {/* Graduate Courses */}
          <div>
            <h4 className="flex items-center text-lg font-semibold text-gray-800 dark:text-gray-200 mb-2">
              <FaGraduationCap className="mr-2 text-gray-600 dark:text-gray-400" />
              Graduate Courses
            </h4>
            <ul className="space-y-2">
              {indianExperience.graduateCourses.map((course, idx) => (
                <li key={idx} className="bg-gray-50 dark:bg-gray-700/50 rounded-lg p-3">
                  <div className="font-bold text-gray-800 dark:text-gray-200 text-sm">{course.code}</div>
                  <div className="text-gray-600 dark:text-gray-400 text-sm">{course.title}</div>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Undergraduate Courses */}
          <div>
            <h4 className="flex items-center text-lg font-semibold text-gray-800 dark:text-gray-200 mb-2">
              <FaUserGraduate className="mr-2 text-gray-600 dark:text-gray-400" />
              Undergraduate Courses
            </h4>
            <ul className="space-y-2">
              {indianExperience.undergraduateCourses.map((course, idx) => (
                <li key={idx} className="bg-gray-50 dark:bg-gray-700/50 rounded-lg p-3">
                  <div className="font-bold text-gray-800 dark:text-gray-200 text-sm">{course.code}</div>
                  <div className="text-gray-600 dark:text-gray-400 text-sm">{course.title}</div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default TeachingExperienceCard;
