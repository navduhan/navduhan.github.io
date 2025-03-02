"use client";

import React, { useEffect, useState } from "react";
import { FaExternalLinkAlt } from "react-icons/fa";
import { motion } from "framer-motion"; // Importing motion from Framer Motion

const ScholarScraper = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchScholarData = async () => {
      try {
        const response = await fetch("/api/scholar");
        const data = await response.json();
        setArticles(data);
      } catch (error) {
        console.error("Error fetching Google Scholar data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchScholarData();
  }, []);

  return (
    <div className="max-w-7xl mx-auto p-6">
      <h2 className="text-3xl font-bold text-center mb-6 bg-gradient-to-r from-purple-600 to-blue-500 text-transparent bg-clip-text">
        Google Scholar Articles
      </h2>

      {loading ? (
        <p className="text-center text-gray-500">Fetching articles...</p>
      ) : articles.length === 0 ? (
        <p className="text-center text-gray-500">No articles found.</p>
      ) : (
        <div className="relative w-full md:w-[90%] mx-auto">
          {/* Scroll Progress Indicator */}
          <motion.div
            className="absolute -left-4 md:-left-9 top-0 w-[4px] h-full bg-sky-500 origin-top dark:bg-purple-400"
            style={{ scaleY: 1 }} // Optional scroll animation if needed
          />

          <div className="space-y-6">
            {articles.map((article, index) => (
              <motion.div
                key={index}
                initial={{ y: 50, opacity: 0 }} // Initial animation (invisible and moved down)
                whileInView={{ y: 0, opacity: 1 }} // Animated state (visible and in place)
                transition={{ duration: 0.5, type: "spring" }} // Duration and animation type
                className="w-full flex flex-col items-center justify-between"
              >
                <div className="p-4 border border-sky-300 rounded-lg shadow-lg bg-gray-50 dark:bg-gray-800 transition-transform duration-300 ease-in-out
                 transform hover:scale-105 hover:bg-gray-100 dark:hover:bg-gray-700 w-full max-w-7xl mx-auto">
                  {/* Ensure consistent height for all cards */}
                  <div className="h-full flex flex-col justify-between">
                    <h3 className="text-lg font-semibold mb-2 text-purple-600 dark:text-purple-400">
                      {article.title}
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      {article.author}
                    </p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">
                      {article.journal}
                    </p>
                    <div className="mt-4 flex justify-between items-center">
                      <a
                        href={article.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-500 hover:underline flex items-center"
                      >
                        View Article <FaExternalLinkAlt className="ml-1" />
                      </a>
                      <span className="text-sm text-gray-500">
                        Cited: {article.cited}
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ScholarScraper;
