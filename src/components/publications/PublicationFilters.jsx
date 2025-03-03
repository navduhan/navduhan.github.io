// src/components/publications/PublicationFilters.jsx
"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaFilter, FaSortAmountDown, FaSortAmountUp, FaChevronDown } from "react-icons/fa";

const PublicationFilters = ({ 
  years, 
  categories, 
  selectedYear, 
  selectedCategory, 
  setSelectedYear, 
  setSelectedCategory,
  sortOrder,
  setSortOrder
}) => {
  const [filtersOpen, setFiltersOpen] = useState(false);
  
  return (
    <div className="relative">
      <div className="flex space-x-2">
        {/* Year Dropdown (Always visible) */}
        <div className="relative">
          <select
            value={selectedYear}
            onChange={(e) => setSelectedYear(e.target.value)}
            className="appearance-none pl-4 pr-10 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="All">All Years</option>
            {years.map(year => (
              <option key={year} value={year}>{year}</option>
            ))}
          </select>
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
            <FaChevronDown className="text-gray-400" />
          </div>
        </div>
        
        {/* Sort Order Toggle */}
        <button
          onClick={() => setSortOrder(sortOrder === "newest" ? "oldest" : "newest")}
          className="p-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
          title={sortOrder === "newest" ? "Newest First" : "Oldest First"}
        >
          {sortOrder === "newest" ? <FaSortAmountDown /> : <FaSortAmountUp />}
        </button>
        
        {/* More Filters Button */}
        <button
          onClick={() => setFiltersOpen(!filtersOpen)}
          className="flex items-center space-x-1 p-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
        >
          <FaFilter />
          <span>Filters</span>
        </button>
      </div>
      
      {/* Expanded Filters */}
      {filtersOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2 }}
          className="absolute right-0 mt-2 p-4 bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 z-10 w-64"
        >
          <h4 className="font-medium text-gray-800 dark:text-gray-200 mb-2">Categories</h4>
          <div className="space-y-2 max-h-60 overflow-y-auto">
            <div className="flex items-center">
              <input
                type="radio"
                id="cat-all"
                name="category"
                value="All"
                checked={selectedCategory === "All"}
                onChange={() => setSelectedCategory("All")}
                className="mr-2"
              />
              <label htmlFor="cat-all" className="text-gray-700 dark:text-gray-300">All Categories</label>
            </div>
            
            {categories.map(category => (
              <div key={category} className="flex items-center">
                <input
                  type="radio"
                  id={`cat-${category}`}
                  name="category"
                  value={category}
                  checked={selectedCategory === category}
                  onChange={() => setSelectedCategory(category)}
                  className="mr-2"
                />
                <label htmlFor={`cat-${category}`} className="text-gray-700 dark:text-gray-300">{category}</label>
              </div>
            ))}
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default PublicationFilters;
