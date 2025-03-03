// src/components/research/CollaborationCTA.jsx
"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { FaHandshake, FaArrowRight } from "react-icons/fa";

const CollaborationCTA = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="w-full"
    >
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-10 shadow-xl text-white relative overflow-hidden">
        {/* Background pattern */}
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-10 left-10 w-40 h-40 rounded-full bg-white opacity-10"></div>
          <div className="absolute bottom-10 right-10 w-60 h-60 rounded-full bg-white opacity-10"></div>
        </div>
        
        <div className="relative z-10">
          <div className="flex items-center mb-6">
            <FaHandshake className="text-4xl mr-4" />
            <h2 className="text-3xl md:text-4xl font-bold">
              Let's Collaborate
            </h2>
          </div>
          
          <p className="text-lg md:text-xl mb-8 max-w-3xl">
            I'm always open to new research collaborations and opportunities to apply computational approaches to solve complex biological problems. Whether you're working on genomics, proteomics, or systems biology, I'd love to discuss how we can work together.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                href="/contact"
                className="flex items-center justify-center bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
              >
                Contact Me <FaArrowRight className="ml-2" />
              </Link>
            </motion.div>
            
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <a
                href="mailto:naveen.duhan@outlook.com"
                className="flex items-center justify-center bg-transparent border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors"
              >
                Email Directly
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default CollaborationCTA;
