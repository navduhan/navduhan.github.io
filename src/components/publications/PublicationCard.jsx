// src/components/publications/PublicationCard.jsx
"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaExternalLinkAlt, FaQuoteRight, FaRegFilePdf, FaChevronDown, FaChevronUp, FaRegCopy } from "react-icons/fa";
import { parseLatex } from "@/utils/bibParser";

const PublicationCard = ({ publication }) => {
  const [expanded, setExpanded] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleCitationCopy = () => {
    // Generate citation in APA format
    const citation = `${publication.authors}. (${publication.year}). ${publication.title}. ${publication.journal}${publication.volume ? `, ${publication.volume}` : ''}${publication.pages ? `, ${publication.pages}` : ''}.${publication.doi ? ` https://doi.org/${publication.doi}` : ''}`;
    
    navigator.clipboard.writeText(citation);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // Format authors to highlight your name
  const formatAuthors = (authors) => {
    return authors.split(', ').map((author, index, array) => {
      const isYou = author.includes("Duhan N");
      return (
        <React.Fragment key={index}>
          <span className={isYou ? "font-bold text-blue-600 dark:text-blue-400" : ""}>
            {author}
          </span>
          {index < array.length - 1 ? ', ' : ''}
        </React.Fragment>
      );
    });
  };

  // Parse title with LaTeX formatting
  const parsedTitle = parseLatex(publication.title);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-shadow duration-300"
    >
      {/* Publication Year Badge */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-1 text-sm font-bold">
        {publication.year}
      </div>
      
      <div className="p-5">
        {/* Title and Actions */}
        <div className="flex justify-between items-start mb-3">
          <h3 
            className="text-xl font-bold text-gray-800 dark:text-gray-200 pr-4"
            dangerouslySetInnerHTML={{ __html: parsedTitle }}
          />
          
          <div className="flex space-x-2 flex-shrink-0">
            {publication.doi && (
              <a
                href={`https://doi.org/${publication.doi}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors"
                title="View DOI"
              >
                <FaExternalLinkAlt />
              </a>
            )}
            {publication.pdf && (
              <a
                href={publication.pdf}
                target="_blank"
                rel="noopener noreferrer"
                className="text-red-600 dark:text-red-400 hover:text-red-800 dark:hover:text-red-300 transition-colors"
                title="Download PDF"
              >
                <FaRegFilePdf />
              </a>
            )}
          </div>
        </div>
        
        {/* Authors */}
        <p className="text-gray-600 dark:text-gray-400 mb-3">
          {formatAuthors(publication.authors)}
        </p>
        
        {/* Journal Info */}
        <div className="flex flex-wrap items-center mb-3 text-sm">
          <span className="font-medium text-gray-700 dark:text-gray-300 mr-2">
            {publication.journal}
          </span>
          {publication.volume && (
            <span className="text-gray-600 dark:text-gray-400 mr-2">
              {publication.volume}
            </span>
          )}
          {publication.pages && (
            <span className="text-gray-600 dark:text-gray-400 mr-2">
              {publication.pages}
            </span>
          )}
          {publication.impact && (
            <span className="ml-auto bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 px-2 py-0.5 rounded-full text-xs">
              IF: {publication.impact}
            </span>
          )}
        </div>
        
        {/* Categories */}
        {publication.categories && publication.categories.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-3">
            {publication.categories.map((category, idx) => (
              <span
                key={idx}
                className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-xs"
              >
                {category}
              </span>
            ))}
          </div>
        )}
        
        {/* Abstract (Expandable) */}
        {publication.abstract && (
          <div className="mt-3">
            <button
              onClick={() => setExpanded(!expanded)}
              className="flex items-center text-sm text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300"
            >
              {expanded ? (
                <>
                  <FaChevronUp className="mr-1" /> Hide Abstract
                </>
              ) : (
                <>
                  <FaChevronDown className="mr-1" /> Show Abstract
                </>
              )}
            </button>
            
            {expanded && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                transition={{ duration: 0.3 }}
                className="mt-3 text-sm text-gray-600 dark:text-gray-400 bg-gray-50 dark:bg-gray-700/50 p-3 rounded-lg"
                dangerouslySetInnerHTML={{ __html: parseLatex(publication.abstract) }}
              />
            )}
          </div>
        )}
        
        {/* Citation Button */}
        <div className="mt-4 flex justify-end">
          <motion.button
            onClick={handleCitationCopy}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center text-sm text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400"
          >
            <FaQuoteRight className="mr-1" />
            <FaRegCopy className="mr-1" />
            {copied ? "Copied!" : "Copy Citation"}
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
};

export default PublicationCard;
