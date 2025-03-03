// src/components/about/ExperienceSection.jsx
"use client";

import React, { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import { FaBriefcase, FaBuilding, FaMapMarkerAlt, FaClock } from "react-icons/fa";

const ExperienceCard = ({ experience }) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ duration: 0.5, type: "spring" }}
    className="w-full flex flex-col items-center mb-12 last:mb-0"
  >
    <div className="group relative rounded-xl bg-white dark:bg-gray-800 p-8 shadow-lg 
                  transition-all duration-300 ease-in-out hover:shadow-xl
                  border border-blue-200 dark:border-blue-900/30 
                  w-full md:w-[90%] lg:w-[85%] flex flex-col justify-between">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
        <h3 className="font-bold text-xl md:text-2xl bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-2 md:mb-0">
          {experience.title}
        </h3>
        <span className="flex items-center text-sm font-medium text-gray-500 dark:text-gray-400">
          <FaClock className="mr-1" /> {experience.time}
        </span>
      </div>
      
      <div className="flex flex-col sm:flex-row sm:items-center mb-6 text-sm">
        <a
          href={experience.companyLink}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors mr-4 mb-2 sm:mb-0"
        >
          <FaBuilding className="mr-1" /> {experience.company}
        </a>
        <span className="flex items-center text-gray-600 dark:text-gray-400">
          <FaMapMarkerAlt className="mr-1" /> {experience.address}
        </span>
      </div>
      
      <p className="font-medium text-gray-700 dark:text-gray-300 text-sm md:text-base">
        {experience.description}
      </p>
    </div>
  </motion.div>
);

const ExperienceSection = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });

  const experiences = [
    {
      id: 1,
      title: "Research Associate III",
      description:
        "Conducting advanced AI-driven research to enhance computational models for bioinformatics and genomic data analysis. Developing deep learning frameworks for pattern recognition in biological sequences, optimizing machine learning algorithms for high-throughput sequencing data, and integrating multi-omics data to derive novel biological insights. Collaborating with interdisciplinary teams to publish findings in high-impact journals and contribute to grant proposals.",
      company: "South Dakota State University",
      companyLink: "https://www.sdstate.edu",
      time: "Nov 2023 - Present",
      address: "Brookings, SD, USA",
    },
    {
      id: 2,
      title: "Graduate Research Assistant",
      description:
        "Led multiple research projects focusing on deep learning and AI applications for large-scale biological data processing. Designed and implemented neural network architectures to analyze genomic and transcriptomic data, enhancing the accuracy of predictive models. Developed bioinformatics pipelines using Python and R for next-generation sequencing (NGS) analysis. Published peer-reviewed research and presented findings at international conferences.",
      company: "Utah State University",
      companyLink: "https://www.usu.edu",
      time: "Jan 2019 - Nov 2023",
      address: "Logan, UT, USA",
    },
    {
      id: 3,
      title: "Bioinformatician",
      description:
        "Designed and optimized computational workflows for genome analysis, focusing on agricultural research applications. Developed custom Python and Bash scripts for data preprocessing, variant calling, and transcriptomic analysis. Conducted differential gene expression analysis to identify key regulatory genes in crop improvement studies. Provided bioinformatics training to researchers and assisted in publishing results in scientific journals.",
      company: "Punjab Agricultural University",
      companyLink: "https://www.pau.edu",
      time: "Aug 2011 - Dec 2018",
      address: "Ludhiana, Punjab, India",
    },
    {
      id: 4,
      title: "Lecturer Bioinformatics",
      description:
        "Taught undergraduate courses in bioinformatics, computational biology, and biostatistics, covering topics such as sequence alignment, molecular modeling, and systems biology. Developed interactive course materials and guided students in research projects on bioinformatics applications in drug discovery. Organized workshops and seminars on emerging trends in computational biology and genomics.",
      company: "Guru Nanak Girls College",
      companyLink: "https://www.gngc.ac.in",
      time: "Jul 2010 - Aug 2011",
      address: "Ludhiana, Punjab, India",
    },
  ];

  return (
    <div className="w-full">
      <div className="flex items-center mb-16">
        <FaBriefcase className="text-4xl mr-4 text-blue-500" />
        <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
          Professional Experience
        </h2>
      </div>

      <div ref={ref} className="relative w-full mx-auto">
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className="absolute left-0 md:left-9 top-0 w-1 h-full bg-gradient-to-b from-blue-500 to-purple-600 origin-top hidden md:block"
        />

        <div className="flex flex-col">
          {experiences.map((experience) => (
            <ExperienceCard key={experience.id} experience={experience} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExperienceSection;
