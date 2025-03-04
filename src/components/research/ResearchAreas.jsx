// src/components/research/ResearchAreas.jsx
"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  FaDna, 
  FaLaptopCode, 
  FaDatabase, 
  FaNetworkWired,
  FaMicroscope,
  FaChartLine,
  FaCode,
  FaRobot,
  FaArrowRight,
  FaExternalLinkAlt,
  FaFlask,
  FaBrain,
  FaCogs
} from "react-icons/fa";

const ResearchAreaCard = ({ title, description, icon, gradient, delay, details, impact, technologies }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ y: -5 }}
      className="bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 h-full overflow-hidden"
    >
      <div className="p-8">
        <div className={`p-4 rounded-full ${gradient} w-16 h-16 flex items-center justify-center mb-6 transform hover:scale-110 transition-transform duration-300`}>
          {icon}
        </div>
        
        <h3 className={`text-xl font-bold mb-4 bg-gradient-to-r ${gradient} bg-clip-text text-transparent`}>
          {title}
        </h3>
        
        <p className="text-gray-700 dark:text-gray-300 mb-6">
          {description}
        </p>

        {/* Key Research Areas */}
        <div className="space-y-2 mb-6">
          {details.map((detail, idx) => (
            <div key={idx} className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
              <div className={`w-1.5 h-1.5 rounded-full ${gradient}`} />
              <span>{detail}</span>
            </div>
          ))}
        </div>

        {/* Technologies Used */}
        {technologies && (
          <div className="mb-6">
            <h4 className="text-sm font-semibold text-gray-600 dark:text-gray-400 mb-2">
              Technologies & Tools
            </h4>
            <div className="flex flex-wrap gap-2">
              {technologies.map((tech, idx) => (
                <span key={idx} className="px-2 py-1 text-xs rounded-full bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Expand/Collapse Button */}
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="flex items-center gap-2 text-sm text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
        >
          {isExpanded ? 'Show Less' : 'Learn More'}
          <FaArrowRight className={`transform transition-transform ${isExpanded ? 'rotate-90' : ''}`} size={12} />
        </button>
      </div>

      {/* Expanded Content */}
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="border-t border-gray-200 dark:border-gray-700"
          >
            <div className="p-8">
              <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-4">
                Research Impact & Applications
              </h4>
              <div className="space-y-4">
                {impact.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <div className={`p-1 rounded-full ${gradient} mt-1`}>
                      <FaMicroscope size={12} className="text-white" />
                    </div>
                    <p className="text-gray-600 dark:text-gray-300">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const ResearchAreas = () => {
  const areas = [
    {
      title: "Multi-omics Data Integration",
      description: "Developing cutting-edge computational methods to integrate and analyze diverse biological data types including genomics, transcriptomics, proteomics, and metabolomics. Our research focuses on creating novel algorithms that enable comprehensive understanding of biological systems at multiple levels.",
      icon: <FaDna className="text-white text-2xl" />,
      gradient: "from-blue-600 to-cyan-500 bg-gradient-to-r",
      delay: 0.1,
      details: [
        "Advanced algorithms for multi-omics data fusion",
        "Machine learning approaches for data integration",
        "Statistical methods for cross-platform analysis",
        "Visualization tools for multi-dimensional data"
      ],
      impact: [
        "Improved disease biomarker discovery through integrated analysis",
        "Enhanced understanding of complex biological pathways",
        "Development of personalized medicine approaches",
        "Novel insights into disease mechanisms"
      ],
      technologies: [
        "Python", "R", "TensorFlow", "PyTorch",
        "Next.js", "D3.js", "AWS", "Docker"
      ]
    },
    {
      title: "AI in Genomics",
      description: "Pioneering the application of artificial intelligence and deep learning in genomic research. Our work focuses on developing interpretable AI models that can predict gene function, identify regulatory elements, and understand genetic variations associated with complex traits and diseases.",
      icon: <FaBrain className="text-white text-2xl" />,
      gradient: "from-purple-600 to-pink-500 bg-gradient-to-r",
      delay: 0.2,
      details: [
        "Deep learning models for genomic prediction",
        "Interpretable AI in genomics",
        "AI-driven drug discovery",
        "Genomic variant analysis"
      ],
      impact: [
        "Accelerated drug discovery process",
        "Improved disease risk prediction",
        "Enhanced understanding of genetic regulation",
        "Development of precision medicine tools"
      ],
      technologies: [
        "PyTorch", "TensorFlow", "scikit-learn",
        "CUDA", "AWS", "Google Cloud"
      ]
    },
    {
      title: "Systems Biology",
      description: "Investigating complex biological systems through advanced computational modeling. Our research focuses on understanding cellular processes, metabolic pathways, and gene regulatory networks to unravel the complexity of biological systems.",
      icon: <FaNetworkWired className="text-white text-2xl" />,
      gradient: "from-emerald-600 to-green-500 bg-gradient-to-r",
      delay: 0.3,
      details: [
        "Network analysis of biological systems",
        "Metabolic pathway modeling",
        "Gene regulatory network inference",
        "Systems-level drug target identification"
      ],
      impact: [
        "Identification of novel drug targets",
        "Understanding of disease mechanisms",
        "Optimization of metabolic engineering",
        "Development of therapeutic strategies"
      ],
      technologies: [
        "MATLAB", "Python", "R", "Cytoscape",
        "Docker", "AWS", "MongoDB"
      ]
    },
    {
      title: "Bioinformatics Tools Development",
      description: "Creating innovative software solutions and databases that empower researchers across disciplines. Our focus is on developing user-friendly, scalable, and efficient tools that facilitate biological data analysis and interpretation.",
      icon: <FaCogs className="text-white text-2xl" />,
      gradient: "from-amber-600 to-orange-500 bg-gradient-to-r",
      delay: 0.4,
      details: [
        "Development of analysis pipelines",
        "Creation of specialized databases",
        "Implementation of novel algorithms",
        "User interface design for biologists"
      ],
      impact: [
        "Accelerated research workflows",
        "Improved data accessibility",
        "Enhanced collaboration capabilities",
        "Standardized analysis methods"
      ],
      technologies: [
        "React", "Node.js", "Python", "PostgreSQL",
        "Docker", "AWS", "GraphQL"
      ]
    }
  ];

  return (
    <div className="w-full">
      <div className="flex items-center justify-between mb-16">
        <div className="flex items-center">
          <FaDna className="text-4xl mr-4 text-blue-500" />
          <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Research Focus Areas
          </h2>
        </div>
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <a
            href="/research"
            className="flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300"
          >
            View All Research
            <FaExternalLinkAlt size={12} />
          </a>
        </motion.div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {areas.map((area, index) => (
          <ResearchAreaCard
            key={index}
            {...area}
          />
        ))}
      </div>
    </div>
  );
};

export default ResearchAreas;
