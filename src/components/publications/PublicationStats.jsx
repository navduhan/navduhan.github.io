// src/components/publications/PublicationStats.jsx
"use client";

import React from "react";
import { motion } from "framer-motion";
import { FaBook, FaQuoteRight, FaRegNewspaper, FaRegCalendarAlt } from "react-icons/fa";

const PublicationStats = ({ publications }) => {
  // Calculate statistics
  const totalPublications = publications.length;
  
  const totalCitations = publications.reduce((sum, pub) => 
    sum + (pub.citations || 0), 0);
  
  const journalCount = new Set(
    publications.map(pub => pub.journal)
  ).size;
  
  const yearRange = publications.length > 0 
    ? `${Math.min(...publications.map(pub => pub.year))} - ${Math.max(...publications.map(pub => pub.year))}`
    : "N/A";
  
  // Publications by year for chart
  const publicationsByYear = publications.reduce((acc, pub) => {
    acc[pub.year] = (acc[pub.year] || 0) + 1;
    return acc;
  }, {});
  
  const years = Object.keys(publicationsByYear).sort();
  const counts = years.map(year => publicationsByYear[year]);
  
  // Find max count for scaling
  const maxCount = Math.max(...counts, 1);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 border border-gray-200 dark:border-gray-700"
    >
      <div className="flex flex-col md:flex-row">
        {/* Stats Cards */}
        <div className="md:w-2/3 grid grid-cols-2 md:grid-cols-4 gap-4 mb-6 md:mb-0">
          <StatCard 
            icon={<FaBook />} 
            value={totalPublications} 
            label="Publications" 
            gradient="from-blue-600 to-cyan-500" 
          />
          <StatCard 
            icon={<FaQuoteRight />} 
            value={totalCitations} 
            label="Citations" 
            gradient="from-purple-600 to-pink-500" 
          />
          <StatCard 
            icon={<FaRegNewspaper />} 
            value={journalCount} 
            label="Journals" 
            gradient="from-emerald-600 to-green-500" 
          />
          <StatCard 
            icon={<FaRegCalendarAlt />} 
            value={yearRange} 
            label="Year Range" 
            gradient="from-amber-600 to-orange-500" 
            isText={true}
          />
        </div>
        
        {/* Publications by Year Chart */}
        <div className="md:w-1/3 md:pl-6 md:border-l border-gray-200 dark:border-gray-700">
          <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-4">Publications by Year</h3>
          <div className="flex items-end h-32 space-x-2">
            {years.map((year, index) => (
              <div key={year} className="flex flex-col items-center flex-1">
                <div 
                  className="w-full bg-gradient-to-t from-blue-600 to-purple-600 rounded-t-sm" 
                  style={{ height: `${(counts[index] / maxCount) * 100}%` }}
                >
                  <div className="w-full h-full opacity-20 bg-white"></div>
                </div>
                <span className="text-xs text-gray-600 dark:text-gray-400 mt-1">{year}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const StatCard = ({ icon, value, label, gradient, isText = false }) => (
  <div className="bg-gray-50 dark:bg-gray-700/50 rounded-xl p-4 flex flex-col items-center text-center">
    <div className={`p-3 rounded-full bg-gradient-to-r ${gradient} text-white mb-3`}>
      {icon}
    </div>
    <div className={`text-2xl font-bold ${!isText ? `bg-gradient-to-r ${gradient} bg-clip-text text-transparent` : 'text-gray-800 dark:text-gray-200'} mb-1`}>
      {value}
    </div>
    <div className="text-sm text-gray-600 dark:text-gray-400">
      {label}
    </div>
  </div>
);

export default PublicationStats;
