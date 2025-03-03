// components/contact/ContactInfo.jsx
'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FiMapPin, FiMail, FiPhone, FiGlobe, FiLinkedin, FiTwitter, FiGithub } from 'react-icons/fi';

const ContactInfo = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.6 }}
      className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 md:p-8 border border-gray-200 dark:border-gray-700 h-full"
    >
      <h2 className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent mb-6">
        Contact Information
      </h2>
      
      <div className="space-y-6">
        <ContactDetail 
          icon={<FiMapPin />} 
          title="Office Address"
          details={[
            "Department of Plants, Soils and Climate",
            "Utah State University",
            "4820 Old Main Hill",
            "Logan, UT 84322-4820"
          ]}
        />
        
        <ContactDetail 
          icon={<FiMail />} 
          title="Email"
          details={["duhan27dec@gmail.com", "naveen.duhan@usu.edu"]}
        />
        
        <ContactDetail 
          icon={<FiPhone />} 
          title="Phone"
          details={["+1 (435) 797-0000"]}
        />
        
        <ContactDetail 
          icon={<FiGlobe />} 
          title="Website"
          details={["naveenduhan.com"]}
        />
      </div>
      
      <div className="mt-8">
        <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-4">Connect With Me</h3>
        <div className="flex space-x-4">
          <SocialButton icon={<FiLinkedin />} gradient="from-blue-600 to-cyan-500" />
          <SocialButton icon={<FiTwitter />} gradient="from-blue-400 to-blue-600" />
          <SocialButton icon={<FiGithub />} gradient="from-gray-700 to-gray-900" />
        </div>
      </div>
    </motion.div>
  );
};

const ContactDetail = ({ icon, title, details }) => (
  <div className="flex">
    <div className="mt-1 mr-4 text-gray-500 dark:text-gray-400">
      {icon}
    </div>
    <div>
      <h3 className="font-medium text-gray-800 dark:text-gray-200">{title}</h3>
      <div className="mt-1 space-y-1">
        {details.map((detail, index) => (
          <p key={index} className="text-gray-600 dark:text-gray-400">{detail}</p>
        ))}
      </div>
    </div>
  </div>
);

const SocialButton = ({ icon, gradient }) => (
  <motion.a
    href="#"
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.95 }}
    className={`p-3 rounded-full bg-gradient-to-r ${gradient} text-white flex items-center justify-center`}
  >
    {icon}
  </motion.a>
);

export default ContactInfo;
