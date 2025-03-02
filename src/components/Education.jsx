'use client';
import React from "react";
import { FaGraduationCap, FaUniversity, FaMapMarkerAlt } from "react-icons/fa";
import { motion } from "framer-motion";

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
    description: (
      <>
        Thesis: In silico prediction of microRNA in <i>Catharanthus roseus</i> and their role in metabolomics.
      </>
    ),
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

const EducationTimeline = () => {
  return (
    <>
      <h2 className="font-bold md:text-8xl mb-32 w-full text-center text-black dark:text-white text-6xl xs:text-4xl md:mb-16">
        Education
      </h2>

      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="relative wrap">
          <div className="absolute h-full border-2 border-gradient-to-b from-green-400 to-blue-500 left-1/2 transform -translate-x-1/2"></div>

          {education.map((edu, index) => (
            <motion.div
              key={edu.id}
              initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
              transition={{ duration: 1, type: "spring", stiffness: 100 }}
              className={`mb-12 flex justify-between items-center w-full ${
                index % 2 === 0 ? "flex-row-reverse" : "flex-row"
              } relative`}
            >
              <div className="order-1 w-5/12"></div>
              <div className="z-20 flex items-center order-1 bg-gradient-to-r from-green-500 to-blue-600 shadow-xl w-10 h-10 rounded-full transition-transform duration-300 hover:scale-110">
                <h1 className="mx-auto text-white font-semibold text-lg">
                  <FaGraduationCap className="w-5 h-5" />
                </h1>
              </div>
              <div
                className="order-1 w-5/12 px-6 py-4 rounded-xl shadow-lg bg-white border border-blue-500 
                hover:border-gradient-to-r from-green-400 to-blue-500 transform transition-all duration-300 hover:scale-105 hover:shadow-2xl"
              >
                <h3 className="font-bold text-2xl mb-2 bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
                  {edu.title}
                </h3>
                <a
                  href={edu.universityUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-green-600 hover:text-blue-600 transition-colors duration-300 mb-2 font-medium"
                >
                  <FaUniversity className="mr-2" />
                  {edu.university}
                </a>
                <p className="text-sm font-medium text-gray-600 mb-2 italic">{edu.period}</p>
                <p className="flex items-center text-sm text-gray-600 mb-4 font-medium">
                  <FaMapMarkerAlt className="mr-2 text-blue-500" />
                  {edu.location}
                </p>
                <p className="text-gray-700 text-sm leading-relaxed tracking-wide">
                  {edu.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </>
  );
};

export default EducationTimeline;