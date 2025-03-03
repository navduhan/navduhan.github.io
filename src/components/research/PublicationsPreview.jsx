// src/components/research/PublicationsPreview.jsx
"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { FaBook, FaArrowRight, FaQuoteLeft } from "react-icons/fa";

const PublicationsPreview = () => {
  // Sample recent publications to show as preview
  const recentPublications = [
    {
      title: "deepNEC: a novel framework for accurate identification and classification of nitrogen metabolism enzymes using deep learning",
      journal: "Briefings in Bioinformatics",
      year: "2023"
    },
    {
      title: "Genome-wide identification and expression analysis of SWEET genes in wheat (Triticum aestivum L.) and their role in host-pathogen interaction",
      journal: "Plant Physiology and Biochemistry",
      year: "2022"
    },
    {
      title: "deepHPI: a deep learning framework for host-pathogen protein-protein interaction prediction using sequence information",
      journal: "Molecular Omics",
      year: "2022"
    }
  ];

  return (
    <div className="w-full">
      <div className="flex items-center mb-16">
        <FaBook className="text-4xl mr-4 text-emerald-500" />
        <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
          Publications
        </h2>
      </div>

      <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 border border-gray-200 dark:border-gray-700">
        <div className="flex flex-col md:flex-row gap-10">
          {/* Left side - Text content */}
          <div className="md:w-1/2">
            <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-6">
              Research Publications
            </h3>
            
            <div className="flex items-start mb-6">
              <FaQuoteLeft className="text-emerald-500 text-xl mr-3 mt-1 flex-shrink-0" />
              <p className="text-gray-700 dark:text-gray-300 text-lg italic">
                My research has been published in various peer-reviewed journals, focusing on bioinformatics, genomics, and computational biology applications.
              </p>
            </div>
            
            <p className="text-gray-700 dark:text-gray-300 mb-8">
              With over 30 publications in international journals, my work has contributed to advancements in areas such as host-pathogen interactions, deep learning applications in biology, and genomic analysis of various organisms.
            </p>
            
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block"
            >
              <Link
                href="/publications"
                className="flex items-center bg-gradient-to-r from-emerald-600 to-teal-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-emerald-700 hover:to-teal-700 transition-all duration-300"
              >
                View All Publications <FaArrowRight className="ml-2" />
              </Link>
            </motion.div>
          </div>
          
          {/* Right side - Recent publications */}
          <div className="md:w-1/2">
            <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200 mb-6">
              Recent Publications
            </h3>
            
            <div className="space-y-6">
              {recentPublications.map((pub, index) => (
                <div 
                  key={index}
                  className="border-l-4 border-emerald-500 pl-4 py-1"
                >
                  <h4 className="font-medium text-gray-800 dark:text-gray-200 mb-1 line-clamp-2">
                    {pub.title}
                  </h4>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    {pub.journal}, {pub.year}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PublicationsPreview;
