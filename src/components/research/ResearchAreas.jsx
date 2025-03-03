// src/components/research/ResearchAreas.jsx
"use client";

import React from "react";
import { motion } from "framer-motion";
import { FaDna, FaLaptopCode, FaDatabase, FaNetworkWired } from "react-icons/fa";

const ResearchAreaCard = ({ title, description, icon, gradient, delay }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ duration: 0.5, delay }}
    whileHover={{ y: -5 }}
    className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 border border-gray-200 dark:border-gray-700 h-full"
  >
    <div className={`p-4 rounded-full ${gradient} w-16 h-16 flex items-center justify-center mb-6`}>
      {icon}
    </div>
    
    <h3 className={`text-xl font-bold mb-4 bg-gradient-to-r ${gradient} bg-clip-text text-transparent`}>
      {title}
    </h3>
    
    <p className="text-gray-700 dark:text-gray-300">
      {description}
    </p>
  </motion.div>
);

const ResearchAreas = () => {
  const areas = [
    {
      title: "Multi-omics Data Integration",
      description: "Developing computational methods to integrate and analyze diverse biological data types including genomics, transcriptomics, proteomics, and metabolomics to gain comprehensive insights into biological systems.",
      icon: <FaDna className="text-white text-2xl" />,
      gradient: "from-blue-600 to-cyan-500 bg-gradient-to-r",
      delay: 0.1
    },
    {
      title: "AI in Genomics",
      description: "Applying machine learning and deep learning approaches to analyze genomic data, predict gene function, identify regulatory elements, and understand genetic variations associated with traits and diseases.",
      icon: <FaLaptopCode className="text-white text-2xl" />,
      gradient: "from-purple-600 to-pink-500 bg-gradient-to-r",
      delay: 0.2
    },
    {
      title: "Systems Biology",
      description: "Investigating complex biological systems through computational modeling of metabolic pathways, gene regulatory networks, and protein-protein interactions to understand cellular processes and organism-level phenomena.",
      icon: <FaNetworkWired className="text-white text-2xl" />,
      gradient: "from-emerald-600 to-green-500 bg-gradient-to-r",
      delay: 0.3
    },
    {
      title: "Bioinformatics Tools Development",
      description: "Creating innovative software tools, databases, and web servers to facilitate biological data analysis, visualization, and interpretation for researchers across disciplines.",
      icon: <FaDatabase className="text-white text-2xl" />,
      gradient: "from-amber-600 to-orange-500 bg-gradient-to-r",
      delay: 0.4
    }
  ];

  return (
    <div className="w-full">
      <div className="flex items-center mb-16">
        <FaDna className="text-4xl mr-4 text-blue-500" />
        <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          Research Focus Areas
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {areas.map((area, index) => (
          <ResearchAreaCard
            key={index}
            title={area.title}
            description={area.description}
            icon={area.icon}
            gradient={area.gradient}
            delay={area.delay}
          />
        ))}
      </div>
    </div>
  );
};

export default ResearchAreas;
