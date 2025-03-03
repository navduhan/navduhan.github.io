'use client';

import { motion } from 'framer-motion';
import { FaGithub, FaDownload, FaBitbucket } from 'react-icons/fa';
import Head from 'next/head';
import Layout from '@/components/Layout';
import AnimatedText from '@/components/AnimatedText';

const SoftwareTools = () => {
  const softwareData = [
    {
      name: "miPyRNA",
      description: "An automated python package for small RNA sequencing data analysis.",
      link: "https://github.com/navduhan/mipyrna",
      icon: <FaGithub className="text-xl" />,
      gradientClass: "from-blue-600 to-cyan-500"
    },
    {
      name: "SNVguru",
      description: "An automated python package for single nucleotide variation (SNV) analysis.",
      link: "https://github.com/usubioinfo/snvguru",
      icon: <FaGithub className="text-xl" />,
      gradientClass: "from-purple-600 to-violet-500"
    },
    {
      name: "pySeqRNA",
      description: "An automated python package for next-generation sequencing data analysis.",
      link: "https://github.com/navduhan/pyseqrna",
      icon: <FaGithub className="text-xl" />,
      gradientClass: "from-emerald-600 to-green-500"
    },
    {
      name: "MINpred",
      description: "A standalone alignment-free deep learning based tool for nitrogen mineralization enzyme classification.",
      link: "https://bioinfo.usu.edu/minpred/download/minpred.tar.gz",
      icon: <FaDownload className="text-xl" />,
      gradientClass: "from-amber-600 to-orange-500"
    },
    {
      name: "deepNEC",
      description: "A standalone alignment-free deep learning based tool for nitrogen metabolism enzyme classification.",
      link: "https://navduhan@bitbucket.org/navduhan/deepnec.git",
      icon: <FaBitbucket className="text-xl" />,
      gradientClass: "from-rose-600 to-pink-500"
    }
  ];

  return ( 
  
  <>
    
 
    <Head>
        <title>Naveen Duhan | Publications</title>
        <meta
          name="description"
          content="Naveen Duhan's Bioinformatician Website"
        />
      </Head>

      <main className="flex w-full flex-col items-center justify-center dark:text-light">
        <Layout className="pt-10">
          <AnimatedText text="Code. Create. Innovate.!" className='text-7xl' />
          
     
      <div className="flex flex-col md:flex-row gap-6 my-10">
        {/* Left side - Software Overview */}
        {/* <div className="md:w-1/3">
          <SoftwareOverview />
        </div>
         */}
        {/* Right side - Software Cards */}
        <div className="md:w-full">
          <div className="grid grid-cols-1 gap-6">
            {softwareData.map((software, index) => (
              <SoftwareCard key={index} software={software} />
            ))}
          </div>
        </div>
      </div>
    
    </Layout>
    </main>
    </>
  );
};

const SoftwareOverview = () => (
  <motion.div
    whileHover={{ scale: 1.02 }}
    whileTap={{ scale: 0.98 }}
    className="bg-white shadow-lg rounded-2xl p-6 border border-gray-200 transition-all duration-300 sticky top-24"
  >
    <h2 className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-blue-600 bg-clip-text text-transparent mb-3">
      Software & Tools
    </h2>
    <p className="text-gray-600 mb-4">
      I've developed several computational tools and software packages to address various challenges in bioinformatics and genomic data analysis.
    </p>
    <p className="text-gray-600">
      These tools are designed to be user-friendly, efficient, and accessible to researchers across disciplines, facilitating advanced analysis without requiring extensive computational expertise.
    </p>
  </motion.div>
);

const SoftwareCard = ({ software }) => (
  <motion.div
    whileHover={{ scale: 1.02 }}
    whileTap={{ scale: 0.98 }}
    className="bg-white shadow-lg rounded-2xl p-6 border border-gray-200 transition-all duration-300"
  >
    <div className="flex justify-between items-start">
      <h3 className={`text-xl font-bold bg-gradient-to-r ${software.gradientClass} bg-clip-text text-transparent mb-2`}>
        {software.name}
      </h3>
      <a 
        href={software.link} 
        target="_blank" 
        rel="noopener noreferrer"
        className={`text-white p-2 rounded-full bg-gradient-to-r ${software.gradientClass} hover:opacity-90 transition-opacity`}
      >
        {software.icon}
      </a>
    </div>
    <p className="text-gray-600">{software.description}</p>
  </motion.div>
);

export default SoftwareTools;
