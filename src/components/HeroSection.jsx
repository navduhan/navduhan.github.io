"use client";

import React from "react";
import Link from "next/link";
import AnimatedText from "./AnimatedText";
import Layout from "./Layout";
import { LinkArrow } from "./Icons";
import Image from "next/image";
import { motion } from "framer-motion";
import Skills from "./Skills";
import YouTubeEmbed from "./YoutubeEmbed";
import { FaAward, FaFileDownload, FaHandshake, FaLaptopCode } from "react-icons/fa";

const HeroSection = () => {
  return (
    <>
      <main className="flex flex-col items-center text-dark w-full min-h-screen dark:text-light">
        <Layout className="pt-16">
          {/* Hero Section */}
          <div className="flex flex-col-reverse md:flex-row items-center justify-between w-full">
            {/* Text Section */}
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left"
            >
              <h1 className="text-4xl md:text-6xl font-bold leading-tight bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-6">
                Transforming Data into Discoveries
              </h1>
              <p className="my-4 text-base md:text-lg font-medium text-gray-600 dark:text-gray-300 max-w-md">
                As a skilled bioinformatician, I am passionate about
                transforming complex biological data into meaningful insights
                through computational analysis. Explore my latest projects and
                research articles, showcasing my expertise in data science,
                genomics, and bioinformatics tools.
              </p>
              <div className="flex items-center justify-center md:justify-start mt-6 space-x-4">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link
                    href="/dummy.pdf"
                    target="_blank"
                    className="flex items-center bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-3 px-6 rounded-lg text-lg 
                    font-semibold hover:from-blue-700 hover:to-indigo-700 transition-all duration-300"
                    download={true}
                  >
                    <FaFileDownload className="mr-2" /> Resume
                  </Link>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link
                    href="mailto:naveen.duhan@outlook.com"
                    target="_blank"
                    className="flex items-center bg-white dark:bg-gray-800 text-gray-800 dark:text-white p-3 px-6 rounded-lg text-lg 
                    font-semibold border-2 border-gray-300 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700 transition-all duration-300"
                  >
                    <FaHandshake className="mr-2" /> Collaborate
                  </Link>
                </motion.div>
              </div>
            </motion.div>

            {/* Image Section */}
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="w-full md:w-1/2 flex justify-center my-10 md:mt-0"
            >
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full blur-xl opacity-20 animate-pulse"></div>
                <Image
                  src="/images/profile/test.png"
                  alt="profile"
                  width={400}
                  height={400}
                  className="w-full max-w-xs md:max-w-md rounded-full relative z-10 border-4 border-white dark:border-gray-800 shadow-xl"
                  priority
                />
              </div>
            </motion.div>
          </div>

          {/* Awards Section */}
          <motion.section 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-24 w-full"
          >
            <div className="flex items-center mb-8">
              <FaAward className="text-4xl mr-4 text-amber-500" />
              <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-amber-500 to-orange-500 bg-clip-text text-transparent">
                Awards & Recognition
              </h2>
            </div>
            
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6 md:p-8 border border-gray-200 dark:border-gray-700">
              <div className="flex flex-col md:flex-row items-center md:items-start space-y-8 md:space-y-0 md:space-x-8">
                <div className="w-full md:w-1/2 overflow-hidden rounded-xl shadow-lg">
                  <YouTubeEmbed videoId="VeWw6Rh6coA" />
                </div>
                <div className="w-full md:w-1/2 flex flex-col justify-center">
                  <h3 className="text-2xl md:text-3xl font-bold mb-4 bg-gradient-to-r from-amber-500 to-orange-500 bg-clip-text text-transparent">
                    Doctoral Researcher of the Year 2022-23
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-6">
                    Recognized for outstanding contributions to bioinformatics research and innovative computational approaches to solving complex biological problems.
                  </p>
                  <div className="flex items-center space-x-2 text-amber-500">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <svg key={star} className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                      </svg>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.section>

          {/* Bioinformatics Skills Section */}
          <motion.section 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-24 w-full"
          >
            <div className="flex items-center mb-8">
              <FaLaptopCode className="text-4xl mr-4 text-emerald-500" />
              <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-emerald-500 to-teal-500 bg-clip-text text-transparent">
                Technical Expertise
              </h2>
            </div>
            
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="text-gray-600 dark:text-gray-300 mb-8 max-w-3xl"
            >
              With over 15 years of experience in bioinformatics and computational biology, I've developed expertise across multiple domains. My technical skills span from programming languages and data science to specialized bioinformatics tools and cloud computing.
            </motion.p>
            
            <Skills />
          </motion.section>
        </Layout>
      </main>
    </>
  );
};

export default HeroSection;
