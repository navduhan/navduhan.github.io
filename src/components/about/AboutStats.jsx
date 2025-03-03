// src/components/about/AboutStats.jsx
"use client";

import React, { useEffect, useRef } from "react";
import { motion, useInView, useMotionValue, useSpring } from "framer-motion";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";

const AnimatedNumber = ({ value }) => {
  const ref = useRef(null);
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { duration: 3000 });
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [isInView, value, motionValue]);

  useEffect(() => {
    springValue.on("change", (latest) => {
      if (ref.current && latest.toFixed(0) <= value) {
        ref.current.textContent = latest.toFixed(0);
      }
    });
  }, [springValue, value]);

  return <span ref={ref}>0</span>;
};

const StatCard = ({ value, label, gradient }) => (
  <motion.div
    whileHover={{ y: -5, scale: 1.03 }}
    className={`bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 border border-gray-200 dark:border-gray-700`}
  >
    <div className={`text-5xl md:text-6xl font-bold mb-2 ${gradient}`}>
      <AnimatedNumber value={value} />+
    </div>
    <h3 className="text-lg font-medium text-gray-600 dark:text-gray-400">
      {label}
    </h3>
  </motion.div>
);

const AboutStats = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.3 }}
      className="w-full mb-24"
    >
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-2xl p-8 shadow-lg border border-blue-100 dark:border-blue-900/30">
        <div className="flex items-center mb-6">
          <FaQuoteLeft className="text-blue-500 text-2xl mr-4" />
          <h2 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Impact & Experience
          </h2>
          <FaQuoteRight className="text-purple-500 text-2xl ml-4" />
        </div>
        
        <p className="text-gray-700 dark:text-gray-300 mb-8 text-lg">
          My journey in bioinformatics has led to meaningful contributions across research, tool development, and education. Here's a snapshot of my impact:
        </p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <StatCard 
            value={200} 
            label="Research Citations" 
            gradient="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent" 
          />
          <StatCard 
            value={15} 
            label="Webservers Developed" 
            gradient="bg-gradient-to-r from-emerald-600 to-teal-500 bg-clip-text text-transparent" 
          />
          <StatCard 
            value={15} 
            label="Years of Experience" 
            gradient="bg-gradient-to-r from-amber-600 to-orange-500 bg-clip-text text-transparent" 
          />
        </div>
      </div>
    </motion.div>
  );
};

export default AboutStats;
