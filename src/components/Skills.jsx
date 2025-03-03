// components/Skills.jsx
"use client";

import React from "react";
import { motion } from "framer-motion";
import { FaCode, FaDatabase, FaDna, FaChartBar, FaTools, FaCloud } from "react-icons/fa";
import { SiPython, SiR, SiJavascript, SiReact, SiNextdotjs, SiMongodb, SiPostgresql, SiDocker, SiGit, SiLinux } from "react-icons/si";

const SkillCategory = ({ title, icon, color, children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 border border-gray-200 dark:border-gray-700"
    >
      <div className="flex items-center mb-4">
        <div className={`p-3 rounded-full ${color} text-white mr-4`}>
          {icon}
        </div>
        <h3 className="text-xl font-bold">{title}</h3>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
        {children}
      </div>
    </motion.div>
  );
};

const SkillItem = ({ icon, name, level, color }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="flex flex-col items-center p-3"
    >
      <div className={`text-3xl mb-2 ${color}`}>{icon}</div>
      <h4 className="font-medium text-center">{name}</h4>
      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 mt-2">
        <div
          className={`h-2 rounded-full ${color.replace('text-', 'bg-')}`}
          style={{ width: `${level}%` }}
        ></div>
      </div>
    </motion.div>
  );
};

const Skills = () => {
  return (
    <div className="w-full">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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

        {/* Bioinformatics */}
        <SkillCategory 
          title="Bioinformatics" 
          icon={<FaDna />} 
          color="bg-gradient-to-r from-emerald-500 to-teal-600"
        >
          <SkillItem icon={<FaDna />} name="Genomics" level={95} color="text-emerald-500" />
          <SkillItem icon={<FaDna />} name="Proteomics" level={85} color="text-teal-500" />
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
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="mt-8 bg-white dark:bg-gray-800 rounded-xl p-4 shadow-md border border-gray-200 dark:border-gray-700"
      >
        <h3 className="text-lg font-semibold mb-3 text-center">Proficiency Scale</h3>
        <div className="flex justify-between items-center">
          <div className="flex flex-col items-center">
            <div className="w-16 h-2 bg-gray-300 dark:bg-gray-600 rounded-full">
              <div className="w-1/4 h-2 bg-red-500 rounded-full"></div>
            </div>
            <span className="text-sm mt-1">Beginner</span>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-16 h-2 bg-gray-300 dark:bg-gray-600 rounded-full">
              <div className="w-2/4 h-2 bg-yellow-500 rounded-full"></div>
            </div>
            <span className="text-sm mt-1">Intermediate</span>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-16 h-2 bg-gray-300 dark:bg-gray-600 rounded-full">
              <div className="w-3/4 h-2 bg-blue-500 rounded-full"></div>
            </div>
            <span className="text-sm mt-1">Advanced</span>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-16 h-2 bg-gray-300 dark:bg-gray-600 rounded-full">
              <div className="w-full h-2 bg-green-500 rounded-full"></div>
            </div>
            <span className="text-sm mt-1">Expert</span>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Skills;
