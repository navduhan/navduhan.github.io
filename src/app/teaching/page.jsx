// src/app/teaching/page.jsx
"use client";

import React from "react";
import Head from "next/head";
import Layout from "@/components/Layout";
import { motion } from "framer-motion";
import { FaChalkboardTeacher, FaUniversity, FaGraduationCap, FaUserGraduate, FaChalkboard, FaUsers, FaMicrophone } from "react-icons/fa";
import TeachingExperienceCard from "@/components/teaching/TeachingExperienceCard";
import InvitedTalks from "@/components/teaching/InvitedTalks"; // Using the improved component

const Teaching = () => {
  return (
    <>
      <Head>
        <title>Naveen Duhan | Teaching</title>
        <meta
          name="description"
          content="Naveen Duhan's Teaching Experience and Courses"
        />
      </Head>

      <main className="flex w-full flex-col items-center justify-center dark:text-light">
        <Layout className="pt-10 pb-16">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-6xl font-bold text-center mb-16 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
          >
            Teaching & Mentorship
          </motion.h1>

          {/* Teaching Philosophy Section */}
          <section className="mb-24">
            <TeachingPhilosophy />
          </section>
          
          {/* Teaching Experience Section */}
          <section className="mb-24">
            <TeachingExperience />
          </section>
          
          {/* Invited Talks Section */}
          <section className="mb-16">
            <div className="flex items-center mb-10">
              <FaMicrophone className="text-4xl mr-4 text-emerald-600 dark:text-emerald-400" />
              <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                Invited Talks & Workshops
              </h2>
            </div>
            <InvitedTalks />
          </section>
        </Layout>
      </main>
    </>
  );
};

const TeachingPhilosophy = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full"
    >
      <div className="flex items-center mb-10">
        <FaChalkboardTeacher className="text-4xl mr-4 text-blue-600 dark:text-blue-400" />
        <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          Teaching Philosophy
        </h2>
      </div>
      
      <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 border border-gray-200 dark:border-gray-700">
        <div className="flex flex-col md:flex-row gap-10">
          {/* Left side - Text content */}
          <div className="md:w-2/3">
            <p className="text-gray-700 dark:text-gray-300 text-lg mb-6">
              My teaching philosophy centers on creating an engaging, inclusive learning environment that bridges theoretical concepts with practical applications. I believe in fostering critical thinking and problem-solving skills through interactive teaching methods and real-world examples.
            </p>
            
            <p className="text-gray-700 dark:text-gray-300 text-lg mb-6">
              In bioinformatics education, I emphasize the importance of interdisciplinary approaches, combining biological knowledge with computational skills. My courses are designed to accommodate diverse learning styles and backgrounds, ensuring that students from both biological and computational fields can thrive.
            </p>
            
            <p className="text-gray-700 dark:text-gray-300 text-lg">
              I am committed to continuous improvement in my teaching methods, regularly incorporating student feedback and emerging educational technologies to enhance the learning experience. My ultimate goal is to prepare students for success in their academic and professional careers by equipping them with both technical skills and conceptual understanding.
            </p>
          </div>
          
          {/* Right side - Teaching stats */}
          <div className="md:w-1/3 flex flex-col justify-center">
            <div className="grid grid-cols-2 gap-4">
              <TeachingStat icon={<FaUserGraduate />} number="10+" label="Courses Taught" gradient="from-blue-600 to-cyan-500" />
              <TeachingStat icon={<FaUsers />} number="500+" label="Students Mentored" gradient="from-purple-600 to-pink-500" />
              <TeachingStat icon={<FaUniversity />} number="2" label="Universities" gradient="from-emerald-600 to-green-500" />
              <TeachingStat icon={<FaChalkboard />} number="8+" label="Years Experience" gradient="from-amber-600 to-orange-500" />
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const TeachingStat = ({ icon, number, label, gradient }) => (
  <div className="bg-gray-50 dark:bg-gray-700/50 rounded-xl p-4 flex flex-col items-center text-center">
    <div className={`p-3 rounded-full bg-gradient-to-r ${gradient} text-white mb-3`}>
      {icon}
    </div>
    <div className={`text-2xl font-bold bg-gradient-to-r ${gradient} bg-clip-text text-transparent mb-1`}>
      {number}
    </div>
    <div className="text-sm text-gray-600 dark:text-gray-400">
      {label}
    </div>
  </div>
);

const TeachingExperience = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="w-full"
    >
      <div className="flex items-center mb-10">
        <FaGraduationCap className="text-4xl mr-4 text-purple-600 dark:text-purple-400" />
        <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
          Teaching Experience
        </h2>
      </div>
      
      <div className="flex flex-col md:flex-row gap-8">
        <TeachingExperienceCard />
      </div>
    </motion.div>
  );
};

export default Teaching;
