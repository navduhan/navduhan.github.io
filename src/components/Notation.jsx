// src/components/Notation.jsx
"use client";

import React from "react";
import { motion } from "framer-motion";
import { FaInfoCircle, FaStar, FaUserEdit, FaUsers, FaQuoteRight, FaExternalLinkAlt, FaRegFilePdf, FaGraduationCap, FaGraduationCap as FaGrad, FaUserGraduate } from "react-icons/fa";

const Notation = () => {
  // Original notation options
  const notations = [
    {
      key: "equal",
      label: <span className="text-lg font-bold">$</span>,
      description: "Denotes equal contributions",
      icon: <FaUsers className="text-green-500" />
    },
    {
      key: "undergrad",
      label: (
        <span className="text-lg font-bold">
          <u>U</u>
        </span>
      ),
      description: "Undergraduate student mentored",
      icon: <FaUserGraduate className="text-blue-500" />
    },
    {
      key: "grad",
      label: (
        <span className="text-lg font-bold">
          <u>
            <i>U</i>
          </u>
        </span>
      ),
      description: "Graduate student mentored",
      icon: <FaGrad className="text-purple-500" />
    },
    {
      key: "collab",
      label: (
        <span className="text-lg font-bold">
          <sup>^</sup>
        </span>
      ),
      description: "Student of a collaborator mentored by Dr. Duhan",
      icon: <FaUsers className="text-amber-500" />
    },
    {
      key: "correspond",
      label: <span className="text-lg font-bold">*</span>,
      description: "Corresponding author",
      icon: <FaStar className="text-red-500" />
    },
  ];

  return (
    <div className="space-y-6">
      {/* Original Notations */}
      <div className="space-y-4">
        <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-200 flex items-center">
          <FaInfoCircle className="mr-2 text-blue-500" />
          Publication Notations
        </h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {notations.map((notation) => (
            <NotationItem 
              key={notation.key}
              icon={notation.icon}
              symbol={notation.label}
              title={notation.description}
              description=""
            />
          ))}
        </div>
      </div>

      {/* Author Indicators */}
      {/* <div className="space-y-4">
        <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-200 flex items-center">
          <FaUserEdit className="mr-2 text-blue-500" />
          Author Indicators
        </h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <NotationItem 
            icon={<FaUserEdit className="text-blue-500" />}
            symbol={<span className="font-bold text-blue-600 dark:text-blue-400">Duhan N</span>}
            title="Highlighted Name"
            description="Your name is highlighted in blue in the author list."
          />
        </div>
      </div> */}

      {/* Publication Metrics */}
      <div className="space-y-4">
        <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-200 flex items-center">
          <FaChartLine className="mr-2 text-purple-500" />
          Publication Metrics
        </h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <NotationItem 
            icon={<FaQuoteRight className="text-amber-500" />}
            title="Citation Count"
            description="Number of times the publication has been cited."
          />
          <NotationItem 
            icon={<FaStar className="text-yellow-500" />}
            title="Impact Factor"
            description="Journal's impact factor (when available)."
          />
        </div>
      </div>

      {/* Available Actions */}
      <div className="space-y-4">
        <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-200 flex items-center">
          <FaExternalLinkAlt className="mr-2 text-green-500" />
          Available Actions
        </h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <NotationItem 
            icon={<FaExternalLinkAlt className="text-blue-500" />}
            title="View Publication"
            description="Opens the publication in its original source."
          />
          <NotationItem 
            icon={<FaRegFilePdf className="text-red-500" />}
            title="Download PDF"
            description="Downloads the publication PDF when available."
          />
          <NotationItem 
            icon={<FaQuoteRight className="text-gray-500" />}
            title="Copy Citation"
            description="Copies the formatted citation to clipboard."
          />
          <NotationItem 
            icon={<FaGraduationCap className="text-purple-500" />}
            title="Google Scholar"
            description="View publication on Google Scholar."
          />
        </div>
      </div>

      {/* Data Source Note */}
      <div className="mt-6 pt-4 border-t border-gray-200 dark:border-gray-700">
        <p className="text-sm text-gray-500 dark:text-gray-400 flex items-center">
          <FaInfoCircle className="mr-2" />
          Citation data is sourced from Google Scholar and may not reflect all citations. 
          Last updated: {new Date().toLocaleDateString()}
        </p>
      </div>
    </div>
  );
};

const NotationItem = ({ icon, symbol, title, description, iconClass = "" }) => (
  <motion.div 
    whileHover={{ scale: 1.02 }}
    className="flex items-start p-3 bg-gray-50 dark:bg-gray-700/50 rounded-lg border border-gray-100 dark:border-gray-700 hover:shadow-md transition-all duration-300"
  >
    <div className={`mt-1 mr-3 ${iconClass} flex items-center`}>
      {icon}
      {symbol && <span className="ml-1">{symbol}</span>}
    </div>
    <div>
      <h3 className="font-semibold text-gray-800 dark:text-gray-200 mb-1">{title}</h3>
      {description && <p className="text-sm text-gray-600 dark:text-gray-400">{description}</p>}
    </div>
  </motion.div>
);

// Add this import at the top
import { FaChartLine } from "react-icons/fa";

export default Notation;
