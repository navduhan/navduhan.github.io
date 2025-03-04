// src/components/ScholarScrapper.jsx
"use client";

import React, { useEffect, useState } from "react";
import { FaExternalLinkAlt, FaSync, FaQuoteRight, FaCalendarAlt } from "react-icons/fa";
import { motion } from "framer-motion";

const ScholarScraper = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [lastUpdated, setLastUpdated] = useState(null);

  useEffect(() => {
    // Try to get cached data from localStorage
    const cachedArticles = localStorage.getItem('scholarArticles');
    const cachedTimestamp = localStorage.getItem('scholarArticlesTimestamp');
    
    if (cachedArticles && cachedTimestamp) {
      setArticles(JSON.parse(cachedArticles));
      setLastUpdated(new Date(parseInt(cachedTimestamp)));
      setLoading(false);
    } else {
      // If no cached data, fetch it automatically
      fetchScholarData();
    }
  }, []);

  const fetchScholarData = async () => {
    try {
      setLoading(true);
      setError(null);
      
      const response = await fetch("/api/scholar", {
        headers: {
          'Cache-Control': 'no-cache'
        }
      });
      
      if (!response.ok) {
        throw new Error(`API responded with status: ${response.status}`);
      }
      
      const data = await response.json();
      
      if (data.error) {
        throw new Error(data.error);
      }
      
      setArticles(data);
      
      // Cache the results
      const timestamp = Date.now();
      setLastUpdated(new Date(timestamp));
      localStorage.setItem('scholarArticles', JSON.stringify(data));
      localStorage.setItem('scholarArticlesTimestamp', timestamp.toString());
      
    } catch (err) {
      console.error("Error fetching Google Scholar data:", err);
      setError(err.message || "Failed to fetch Google Scholar data");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 overflow-hidden">
      <div className="bg-gradient-to-r from-purple-600 to-indigo-600 p-4">
        <div className="flex justify-between items-center">
          <h3 className="text-xl font-bold text-white flex items-center">
            Google Scholar Articles
          </h3>
          <button
            onClick={fetchScholarData}
            disabled={loading}
            className={`px-3 py-1 rounded-full text-sm flex items-center ${
              loading
                ? "bg-gray-300 text-gray-600 cursor-not-allowed"
                : "bg-white text-purple-600 hover:bg-gray-100"
            }`}
          >
            <FaSync className={`mr-1 ${loading ? "animate-spin" : ""}`} />
            {loading ? "Updating..." : "Refresh"}
          </button>
        </div>
        {lastUpdated && (
          <p className="text-xs text-purple-200 mt-1 flex items-center">
            <FaCalendarAlt className="mr-1" />
            Last updated: {lastUpdated.toLocaleString()}
          </p>
        )}
      </div>

      <div className="p-5">
        {error && (
          <div className="mb-4 p-3 bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400 rounded-lg text-sm">
            {error}
          </div>
        )}

        {loading ? (
          <div className="flex justify-center items-center h-32">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-purple-500"></div>
          </div>
        ) : articles.length === 0 ? (
          <p className="text-center text-gray-500 py-8">No articles found.</p>
        ) : (
          <div className="space-y-4">
            {articles.slice(0, 5).map((article, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors"
              >
                <h4 className="text-lg font-semibold mb-2 text-gray-800 dark:text-gray-200">
                  {article.title}
                </h4>
                <p className="text-sm text-gray-600 dark:text-gray-300 mb-1">
                  {article.author}
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-400 mb-3">
                  {article.journal}
                </p>
                <div className="flex justify-between items-center">
                  <a
                    href={article.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 dark:text-blue-400 hover:underline text-sm flex items-center"
                  >
                    View Article <FaExternalLinkAlt className="ml-1 text-xs" />
                  </a>
                  <span className="text-sm text-gray-600 dark:text-gray-300 flex items-center">
                    <FaQuoteRight className="mr-1 text-xs" />
                    Cited: {article.cited || 0}
                  </span>
                </div>
              </motion.div>
            ))}
            
            {articles.length > 5 && (
              <div className="text-center pt-2">
                <a 
                  href="https://scholar.google.com/citations?user=kvf8JJQAAAAJ&hl=en"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-purple-600 dark:text-purple-400 hover:underline text-sm inline-flex items-center"
                >
                  View all  articles on Google Scholar
                  <FaExternalLinkAlt className="ml-1 text-xs" />
                </a>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default ScholarScraper;
