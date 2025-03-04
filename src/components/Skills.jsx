// components/Skills.jsx
"use client";

import React from "react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { FaCode, FaDatabase, FaDna, FaChartBar, FaTools, FaCloud } from "react-icons/fa";
import { SiPython, SiR, SiJavascript, SiReact, SiNextdotjs, SiMongodb, SiPostgresql, SiDocker, SiGit, SiLinux } from "react-icons/si";

const SkillCategory = ({ title, icon, color, children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-shadow duration-300"
    >
      <div className="flex items-center mb-6">
        <div className={`p-3 rounded-full ${color} text-white mr-4 transform hover:scale-110 transition-transform duration-300`}>
          {icon}
        </div>
        <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300">
          {title}
        </h3>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
        {children}
      </div>
    </motion.div>
  );
};

const ProgressBar = ({ level, color }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  // Define gradient colors based on the skill level
  const gradientColors = {
    'text-emerald-500': ['#34d399', '#059669'], // emerald
    'text-teal-500': ['#2dd4bf', '#0d9488'], // teal
    'text-green-500': ['#4ade80', '#16a34a'], // green
    'text-amber-500': ['#fbbf24', '#d97706'], // amber
    'text-orange-500': ['#f97316', '#ea580c'], // orange
    'text-blue-500': ['#60a5fa', '#2563eb'], // blue
    'text-indigo-500': ['#818cf8', '#4f46e5'], // indigo
    'text-purple-500': ['#a78bfa', '#7c3aed'], // purple
    'text-pink-500': ['#f472b6', '#db2777'], // pink
    'text-cyan-500': ['#22d3ee', '#0891b2'], // cyan
    'text-yellow-500': ['#eab308', '#ca8a04'], // yellow
    'text-gray-700': ['#9ca3af', '#4b5563'], // gray
    'text-red-500': ['#f87171', '#dc2626'], // red
    'text-gray-300': ['#d1d5db', '#6b7280'] // for Next.js
  };

  const [startColor, endColor] = gradientColors[color] || ['#60a5fa', '#2563eb'];

  return (
    <div className="w-full">
      <div className="flex justify-between items-center mb-1">
        <span className="text-sm font-medium">{level}%</span>
      </div>
      <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
        <motion.div
          ref={ref}
          className="h-full rounded-full"
          style={{
            background: `linear-gradient(to right, ${startColor}, ${endColor})`,
          }}
          initial={{ width: 0 }}
          animate={isInView ? { width: `${level}%` } : { width: 0 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        />
      </div>
    </div>
  );
};

const SkillItem = ({ icon, name, level, color }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="flex flex-col items-center p-3 bg-gray-50 dark:bg-gray-700 rounded-xl hover:shadow-md transition-all duration-300"
    >
      <div className={`text-3xl mb-2 ${color} transform hover:scale-110 transition-transform duration-300`}>
        {icon}
      </div>
      <h4 className="font-semibold text-center mb-3 text-sm">{name}</h4>
      <ProgressBar level={level} color={color} />
    </motion.div>
  );
};

const Skills = () => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="w-full max-w-7xl mx-auto px-4"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Bioinformatics */}
        <SkillCategory 
          title="Bioinformatics" 
          icon={<FaDna />} 
          color="bg-gradient-to-r from-emerald-500 to-teal-600"
        >
          <SkillItem icon={<FaDna />} name="Genomics" level={95} color="text-emerald-500" />
          <SkillItem icon={<FaDna />} name="Proteomics" level={90} color="text-teal-500" />
          <SkillItem icon={<FaDna />} name="Metagenomics" level={90} color="text-green-500" />
          <SkillItem icon={<FaDna />} name="NGS Analysis" level={95} color="text-emerald-600" />
          <SkillItem icon={<FaDna />} name="GWAS" level={85} color="text-teal-600" />
          <SkillItem icon={<FaDna />} name="Phylogenetics" level={80} color="text-green-600" />
        </SkillCategory>

        {/* Data Science */}
        <SkillCategory 
          title="Data Science" 
          icon={<FaChartBar />} 
          color="bg-gradient-to-r from-amber-500 to-orange-600"
        >
          <SkillItem icon={<FaChartBar />} name="Machine Learning" level={90} color="text-amber-500" />
          <SkillItem icon={<FaChartBar />} name="Data Visualization" level={95} color="text-orange-500" />
          <SkillItem icon={<FaChartBar />} name="Statistical Analysis" level={90} color="text-amber-600" />
          <SkillItem icon={<FaChartBar />} name="Deep Learning" level={80} color="text-orange-600" />
        </SkillCategory>

        {/* Programming Languages */}
        <SkillCategory 
          title="Programming Languages" 
          icon={<FaCode />} 
          color="bg-gradient-to-r from-blue-500 to-indigo-600"
        >
          <SkillItem icon={<SiPython />} name="Python" level={95} color="text-blue-500" />
          <SkillItem icon={<SiR />} name="R" level={90} color="text-blue-600" />
          <SkillItem icon={<SiJavascript />} name="JavaScript" level={85} color="text-yellow-500" />
        </SkillCategory>

        {/* Web Development */}
        <SkillCategory 
          title="Web Development" 
          icon={<FaTools />} 
          color="bg-gradient-to-r from-purple-500 to-pink-600"
        >
          <SkillItem icon={<SiReact />} name="React" level={85} color="text-cyan-500" />
          <SkillItem icon={<SiNextdotjs />} name="Next.js" level={80} color="text-gray-700 dark:text-gray-300" />
          <SkillItem icon={<FaDatabase />} name="SQL" level={75} color="text-orange-500" />
        </SkillCategory>

        {/* Tools & Technologies */}
        <SkillCategory 
          title="Tools & Technologies" 
          icon={<FaTools />} 
          color="bg-gradient-to-r from-gray-600 to-gray-800"
        >
          <SkillItem icon={<SiDocker />} name="Docker" level={85} color="text-blue-500" />
          <SkillItem icon={<SiGit />} name="Git" level={90} color="text-orange-600" />
          <SkillItem icon={<SiLinux />} name="Linux" level={95} color="text-yellow-600" />
          <SkillItem icon={<SiMongodb />} name="MongoDB" level={80} color="text-green-500" />
          <SkillItem icon={<SiPostgresql />} name="PostgreSQL" level={85} color="text-blue-600" />
        </SkillCategory>

        {/* Cloud & HPC */}
        <SkillCategory 
          title="Cloud & HPC" 
          icon={<FaCloud />} 
          color="bg-gradient-to-r from-blue-400 to-cyan-500"
        >
          <SkillItem icon={<FaCloud />} name="AWS" level={85} color="text-orange-500" />
          <SkillItem icon={<FaCloud />} name="Google Cloud" level={80} color="text-blue-500" />
          <SkillItem icon={<FaCloud />} name="HPC Clusters" level={90} color="text-purple-500" />
          <SkillItem icon={<FaCloud />} name="Parallel Computing" level={85} color="text-cyan-500" />
        </SkillCategory>
      </div>

      {/* Skill Meter Legend */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="mt-12 bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-200 dark:border-gray-700"
      >
        <h3 className="text-xl font-bold mb-6 text-center bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300">
          Proficiency Scale
        </h3>
        <div className="flex justify-between items-center">
          <div className="flex flex-col items-center">
            <ProgressBar level={25} color="text-red-500" />
            <span className="text-sm mt-2 font-medium">Beginner</span>
          </div>
          <div className="flex flex-col items-center">
            <ProgressBar level={50} color="text-yellow-500" />
            <span className="text-sm mt-2 font-medium">Intermediate</span>
          </div>
          <div className="flex flex-col items-center">
            <ProgressBar level={75} color="text-blue-500" />
            <span className="text-sm mt-2 font-medium">Advanced</span>
          </div>
          <div className="flex flex-col items-center">
            <ProgressBar level={100} color="text-green-500" />
            <span className="text-sm mt-2 font-medium">Expert</span>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Skills;
