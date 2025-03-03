// src/components/teaching/InvitedTalks.jsx
"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  FaMicrophone, 
  FaCalendarAlt, 
  FaMapMarkerAlt, 
  FaUniversity,
  FaChalkboardTeacher
} from "react-icons/fa";

const InvitedTalks = () => {
    const talks = [
        {
          date: "November 22, 2017",
          title: "LaTeX: A Useful Tool for Scientific Writing and Presentations",
          venue: "School of Agricultural Biotechnology, Punjab Agricultural University, Ludhiana"
        },
        {
          date: "November 1, 2017",
          title: "Role of Bioinformatics in Conservation and Use in Plant Breeding",
          venue: "Centre for Advanced Faculty Training in Genetics and Plant Breeding, Punjab Agricultural University, Ludhiana"
        },
        {
          date: "February 3, 2017",
          title: "Open-source computing for young biologists: Overview of Linux Hands-on training on text mining",
          venue: "ICAR-Indian Institute of Maize Research, Ludhiana"
        },
        {
          date: "February 6, 2017",
          title: "Differential Gene Expression Studies Hands-on training of raw data assembly, identification, and annotation of differential genes",
          venue: "ICAR-Indian Institute of Maize Research, Ludhiana"
        },
        {
          date: "August 30, 2016",
          title: "Computational identification of disease responsive microRNAs",
          venue: "Centre for Advanced Faculty Training in Genetics and Plant Breeding, Punjab Agricultural University, Ludhiana"
        },
        {
          date: "August 6-26, 2015",
          title: "Bioinformatics: A step towards innovation in agriculture",
          venue: "Punjab Agricultural University, Ludhiana"
        },
        {
          date: "August 6-26, 2015",
          title: "Genomic data analysis non-coding RNA identification and their target prediction",
          venue: "Centre for Advanced Faculty Training in Genetics and Plant Breeding, Punjab Agricultural University, Ludhiana"
        },
        {
          date: "August 23, 2014",
          title: "Bioinformatics: A step towards innovation",
          venue: "Milk Genomics Workshop, DAV College Karnal, India"
        },
        {
          date: "August 18, 2014",
          title: "In silico gene prediction and annotation",
          venue: "Department of Plant Breeding, Punjab Agricultural University, Ludhiana"
        },
        {
          date: "November 13, 2013",
          title: "Role of miRNAs in Clinical Research",
          venue: "Punjab Agricultural University, Ludhiana"
        },
        {
          date: "November 13, 2013",
          title: "Searching Biological Databases",
          venue: "Workshop of Bioinformatics and Human Genomics, Christian Medical College, Ludhiana"
        },
        {
          date: "October 23, 2013",
          title: "Role of Bioinformatics in Genomics and Primer Designing",
          venue: "University College, Kurukshetra University, Kurukshetra, India"
        },
        {
          date: "September 27, 2013",
          title: "In silico gene prediction and annotation",
          venue: "Department of Plant Breeding, Punjab Agricultural University, Ludhiana"
        },
        {
          date: "March 15, 2013",
          title: "Protein structure and function prediction",
          venue: "Department of Biotechnology, Kumaun University, Nainital, India"
        },
        {
          date: "March 13-14, 2013",
          title: "Open-source for budding Computational Biologist",
          venue: "National Symposium and Workshop on Current Advances in Bioinformatics, Aligarh Muslim University, Aligarh, India"
        },
        {
          date: "March 12, 2013",
          title: "In silico gene prediction and annotation",
          venue: "Department of Plant Breeding, Punjab Agricultural University, Ludhiana"
        }
      ];

  // Function to determine talk category based on title keywords
  const getTalkCategory = (title) => {
    const lowerTitle = title.toLowerCase();
    
    if (lowerTitle.includes("training") || lowerTitle.includes("workshop")) {
      return "Workshop";
    } else if (lowerTitle.includes("latex") || lowerTitle.includes("writing")) {
      return "Technical";
    } else if (lowerTitle.includes("prediction") || lowerTitle.includes("identification")) {
      return "Research";
    } else if (lowerTitle.includes("innovation")) {
      return "Innovation";
    } else {
      return "Lecture";
    }
  };

  // Function to get gradient color based on category
  const getCategoryGradient = (category) => {
    switch (category) {
      case "Workshop":
        return "from-purple-600 to-violet-500";
      case "Technical":
        return "from-blue-600 to-cyan-500";
      case "Research":
        return "from-emerald-600 to-green-500";
      case "Innovation":
        return "from-amber-600 to-orange-500";
      default:
        return "from-gray-600 to-gray-500";
    }
  };

  // Function to get icon based on category
  const getCategoryIcon = (category) => {
    switch (category) {
      case "Workshop":
        return <FaChalkboardTeacher className="text-white" />;
      case "Technical":
        return <FaMicrophone className="text-white" />;
      case "Research":
        return <FaUniversity className="text-white" />;
      case "Innovation":
        return <FaMicrophone className="text-white" />;
      default:
        return <FaMicrophone className="text-white" />;
    }
  };

  return (
    <div className="w-full">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {talks.map((talk, index) => {
          const category = getTalkCategory(talk.title);
          const gradient = getCategoryGradient(category);
          
          return (
            <motion.div
              key={index}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-200 dark:border-gray-700 h-full"
            >
              <div className="flex items-start mb-4">
                <div className={`p-3 rounded-full bg-gradient-to-r ${gradient} text-white mr-4`}>
                  {getCategoryIcon(category)}
                </div>
                <h3 className="text-lg font-bold text-gray-800 dark:text-gray-200">{talk.title}</h3>
              </div>
              
              <div className="ml-12 space-y-4">
                <div className="flex items-center mb-2">
                  <FaCalendarAlt className="mr-2 text-blue-500" />
                  <span className="text-gray-600 dark:text-gray-400">{talk.date}</span>
                </div>
                
                <div className="flex items-start">
                  <FaMapMarkerAlt className="mr-2 text-red-500 mt-1 flex-shrink-0" />
                  <span className="text-gray-600 dark:text-gray-400">{talk.venue}</span>
                </div>
                
                <div className="flex justify-end">
                  <span className={`text-xs font-medium px-3 py-1 rounded-full bg-gradient-to-r ${gradient} text-white`}>
                    {category}
                  </span>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default InvitedTalks;
