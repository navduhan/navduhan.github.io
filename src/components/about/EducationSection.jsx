// src/components/about/EducationSection.jsx
"use client";

import React from "react";
import { motion } from "framer-motion";
import { FaGraduationCap, FaUniversity, FaMapMarkerAlt, FaCalendarAlt } from "react-icons/fa";

const EducationCard = ({ education, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-all duration-300"
  >
    <div className="flex items-start">
      <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-3 rounded-full mr-4">
        <FaGraduationCap className="w-6 h-6" />
      </div>
      <div className="flex-1">
        <h3 className="text-xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-2">
          {education.title}
        </h3>
        
        <div className="flex flex-col sm:flex-row sm:items-center mb-3">
          <a
            href={education.universityUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-blue-600 dark:text-blue-400 hover:underline mr-4 mb-1 sm:mb-0"
          >
            <FaUniversity className="mr-1" />
            {education.university}
          </a>
          
          <span className="flex items-center text-gray-600 dark:text-gray-400 text-sm">
            <FaCalendarAlt className="mr-1" />
            {education.period}
          </span>
        </div>
        
        <p className="flex items-center text-gray-600 dark:text-gray-400 text-sm mb-4">
          <FaMapMarkerAlt className="mr-1" />
          {education.location}
        </p>
        
        <div className="text-gray-700 dark:text-gray-300">
          {education.description}
        </div>
      </div>
    </div>
  </motion.div>
);

const EducationSection = () => {
  const education = [
    {
      id: 1,
      title: "Ph.D. in Plant Sciences (Bioinformatics and Computational Biology)",
      university: "Utah State University",
      universityUrl: "https://www.usu.edu",
      period: "2019 - 2023",
      location: "Logan, UT",
      description:
        "Thesis: Machine learning and Data mining in complex genomics big data: developing efficient tools to advance computational systems biology.",
    },
    {
      id: 2,
      title: "Master of Science in Bioinformatics",
      university: "Punjabi University Patiala",
      universityUrl: "http://www.punjabiuniversity.ac.in",
      period: "2008 - 2010",
      location: "Patiala, India",
      description: "Thesis: In silico prediction of microRNA in Catharanthus roseus and their role in metabolomics.",
    },
    {
      id: 3,
      title: "Bachelor of Science in Biology",
      university: "Kurukshetra University Kurukshetra",
      universityUrl: "https://www.kuk.ac.in",
      period: "2005 - 2008",
      location: "Kurukshetra, India",
      description: "Subjects: Zoology, Botany, Chemistry.",
    },
    {
      id: 4,
      title: "Add-on Certificate Diploma in Bioinformatics",
      university: "Kurukshetra University Kurukshetra",
      universityUrl: "https://www.kuk.ac.in",
      period: "2007 - 2008",
      location: "Kurukshetra, India",
      description: "Specialized in Bioinformatics.",
    },
  ];

  return (
    <div className="my-24 w-full">
      <div className="flex items-center mb-12">
        <FaGraduationCap className="text-4xl mr-4 text-indigo-500" />
        <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
          Education & Training
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {education.map((edu, index) => (
          <EducationCard key={edu.id} education={edu} index={index} />
        ))}
      </div>
    </div>
  );
};

export default EducationSection;
