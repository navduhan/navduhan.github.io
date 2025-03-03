// src/components/research/ResearchProjects.jsx
"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaProjectDiagram, FaExternalLinkAlt, FaGithub } from "react-icons/fa";

const ProjectCard = ({ project }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5 }}
      className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden border border-gray-200 dark:border-gray-700"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative h-48 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center transition-transform duration-500"
          style={{ 
            backgroundImage: `url(${project.image})`,
            transform: isHovered ? 'scale(1.05)' : 'scale(1)'
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
        <div className="absolute bottom-0 left-0 p-4">
          <h3 className="text-xl font-bold text-white mb-1">{project.title}</h3>
          <p className="text-gray-300 text-sm">{project.category}</p>
        </div>
      </div>
      
      <div className="p-6">
        <p className="text-gray-700 dark:text-gray-300 mb-4">
          {project.description}
        </p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map((tech, index) => (
            <span 
              key={index}
              className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 rounded-full text-xs font-medium"
            >
              {tech}
            </span>
          ))}
        </div>
        
        <div className="flex justify-between items-center">
          <span className="text-sm text-gray-500 dark:text-gray-400">
            {project.year}
          </span>
          
          <div className="flex space-x-3">
            {project.github && (
              <a 
                href={project.github} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                <FaGithub className="text-xl" />
              </a>
            )}
            {project.link && (
              <a 
                href={project.link} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                <FaExternalLinkAlt className="text-lg" />
              </a>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const ResearchProjects = () => {
  const projects = [
    {
      title: "deepNEC",
      category: "Deep Learning",
      description: "A deep learning framework for predicting nitrogen metabolism enzymes from protein sequences, achieving over 95% accuracy in enzyme classification.",
      technologies: ["Python", "TensorFlow", "Keras", "Bioinformatics"],
      year: "2022",
      image: "/images/research/project1.jpg",
      github: "https://github.com/navduhan/deepnec",
      link: "http://bioinfo.usu.edu/deepNEC/"
    },
    {
      title: "pySeqRNA",
      category: "RNA-Seq Analysis",
      description: "A comprehensive Python package for RNA-Seq data analysis, including quality control, alignment, quantification, and differential expression analysis.",
      technologies: ["Python", "RNA-Seq", "NGS", "Bioconductor"],
      year: "2021",
      image: "/images/research/project2.jpg",
      github: "https://github.com/navduhan/pyseqrna",
      link: "http://bioinfo.usu.edu/pyseqrna/"
    },
    {
      title: "HuCoPIA",
      category: "Host-Pathogen Interactions",
      description: "An atlas of human-coronavirus protein interactions, providing insights into viral infection mechanisms and potential therapeutic targets.",
      technologies: ["Proteomics", "Network Analysis", "Database"],
      year: "2020",
      image: "/images/research/project3.jpg",
      github: null,
      link: "http://bioinfo.usu.edu/hucopia/"
    },
    {
      title: "miPyRNA",
      category: "Small RNA Analysis",
      description: "A Python package for small RNA sequencing data analysis, focusing on microRNA identification, quantification, and target prediction.",
      technologies: ["Python", "Small RNA-Seq", "miRNA", "NGS"],
      year: "2023",
      image: "/images/research/project4.jpg",
      github: "https://github.com/navduhan/mipyrna",
      link: null
    }
  ];

  return (
    <div className="w-full">
      <div className="flex items-center mb-16">
        <FaProjectDiagram className="text-4xl mr-4 text-purple-500" />
        <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
          Featured Research Projects
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </div>
  );
};

export default ResearchProjects;
