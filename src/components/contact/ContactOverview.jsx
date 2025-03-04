// components/contact/ContactOverview.jsx
'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FiMapPin, FiMail, FiGlobe } from 'react-icons/fi';
import ContactInfoItem from './ContactInfoItem';

const ContactOverview = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="w-full bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 md:p-8 mb-12 border border-gray-200 dark:border-gray-700"
    >
      <div className="flex flex-col md:flex-row md:items-center">
        <div className="md:w-2/3 pr-0 md:pr-6 mb-6 md:mb-0">
          <h2 className="text-2xl font-bold bg-gradient-to-r from-emerald-600 to-teal-500 bg-clip-text text-transparent mb-4">
            Collaborate with Me
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            As a bioinformatician, I am always eager to collaborate with researchers, scientists, and innovators who are passionate about
            pushing the boundaries of knowledge in biology and data science. Whether you're working on groundbreaking research, developing
            new tools, or need expertise in analyzing large biological datasets, I'm here to help.
          </p>
          <p className="text-gray-600 dark:text-gray-300">
            I specialize in combining computational techniques with biological insights to solve complex problems in genomics,
            proteomics, and other omics fields.
          </p>
        </div>
        
        <div className="md:w-1/3 flex flex-col space-y-4">
          <ContactInfoItem 
            icon={<FiMapPin />} 
            title="Location" 
            content="South Dakota State University, Brookings, SD" 
            gradient="from-blue-600 to-cyan-500"
          />
          <ContactInfoItem 
            icon={<FiMail />} 
            title="Email" 
            content="naveen.duhan@outlook.com" 
            gradient="from-purple-600 to-pink-500"
          />
          <ContactInfoItem 
            icon={<FiGlobe />} 
            title="Website" 
            content="naveenduhan.com" 
            gradient="from-amber-600 to-orange-500"
          />
        </div>
      </div>
    </motion.div>
  );
};

export default ContactOverview;
