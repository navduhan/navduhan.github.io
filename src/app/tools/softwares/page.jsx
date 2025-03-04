'use client';

import { motion } from 'framer-motion';
import { FaGithub, FaDownload, FaBitbucket, FaCode, FaRobot, FaChartLine, FaDatabase, FaMicroscope } from 'react-icons/fa';
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
      gradientClass: "from-blue-600 to-cyan-500",
      category: "RNA Analysis",
      features: ["Small RNA Analysis", "Automated Pipeline", "Statistical Analysis"],
      categoryIcon: <FaMicroscope className="text-2xl" />
    },
    {
      name: "SNVguru",
      description: "An automated python package for single nucleotide variation (SNV) analysis.",
      link: "https://github.com/usubioinfo/snvguru",
      icon: <FaGithub className="text-xl" />,
      gradientClass: "from-purple-600 to-violet-500",
      category: "Variant Analysis",
      features: ["SNV Detection", "Variant Calling", "Annotation"],
      categoryIcon: <FaCode className="text-2xl" />
    },
    {
      name: "pySeqRNA",
      description: "An automated python package for next-generation sequencing data analysis.",
      link: "https://github.com/navduhan/pyseqrna",
      icon: <FaGithub className="text-xl" />,
      gradientClass: "from-emerald-600 to-green-500",
      category: "NGS Analysis",
      features: ["NGS Pipeline", "Quality Control", "Differential Expression"],
      categoryIcon: <FaDatabase className="text-2xl" />
    },
    {
      name: "MINpred",
      description: "A standalone alignment-free deep learning based tool for nitrogen mineralization enzyme classification.",
      link: "https://bioinfo.usu.edu/minpred/download/minpred.tar.gz",
      icon: <FaDownload className="text-xl" />,
      gradientClass: "from-amber-600 to-orange-500",
      category: "Deep Learning",
      features: ["Enzyme Classification", "Deep Learning Model", "Alignment-free"],
      categoryIcon: <FaRobot className="text-2xl" />
    },
    {
      name: "deepNEC",
      description: "A standalone alignment-free deep learning based tool for nitrogen metabolism enzyme classification.",
      link: "https://navduhan@bitbucket.org/navduhan/deepnec.git",
      icon: <FaBitbucket className="text-xl" />,
      gradientClass: "from-rose-600 to-pink-500",
      category: "Deep Learning",
      features: ["Metabolism Analysis", "Deep Learning Model", "Alignment-free"],
      categoryIcon: <FaRobot className="text-2xl" />
    }
  ];

  return ( 
    <>
      <Head>
        <title>Naveen Duhan | Software Tools</title>
        <meta
          name="description"
          content="Naveen Duhan's Bioinformatics Software Tools and Applications"
        />
      </Head>

      <main className="flex w-full flex-col items-center justify-center dark:text-light">
        <Layout className="pt-10">
          <AnimatedText text="Software Tools" className='text-7xl' />
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-xl text-gray-600 dark:text-gray-300 text-center mt-4 mb-12"
          >
            A collection of bioinformatics tools and software packages for genomic data analysis
          </motion.p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {softwareData.map((software, index) => (
              <SoftwareCard key={index} software={software} index={index} />
            ))}
          </div>
        </Layout>
      </main>
    </>
  );
};

const SoftwareCard = ({ software, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    whileHover={{ scale: 1.02 }}
    whileTap={{ scale: 0.98 }}
    className="bg-white dark:bg-gray-800 shadow-lg rounded-2xl p-6 border border-gray-200 dark:border-gray-700 transition-all duration-300"
  >
    <div className="flex items-start justify-between mb-4">
      <div className="flex items-center space-x-3">
        <div className={`p-2 rounded-lg bg-gradient-to-r ${software.gradientClass} text-white`}>
          {software.categoryIcon}
        </div>
        <div>
          <h3 className={`text-xl font-bold bg-gradient-to-r ${software.gradientClass} bg-clip-text text-transparent`}>
            {software.name}
          </h3>
          <span className="text-sm text-gray-500 dark:text-gray-400">{software.category}</span>
        </div>
      </div>
      <a 
        href={software.link} 
        target="_blank" 
        rel="noopener noreferrer"
        className={`text-white p-2 rounded-full bg-gradient-to-r ${software.gradientClass} hover:opacity-90 transition-opacity`}
      >
        {software.icon}
      </a>
    </div>
    
    <p className="text-gray-600 dark:text-gray-300 mb-4">{software.description}</p>
    
    <div className="space-y-2">
      {software.features.map((feature, idx) => (
        <div key={idx} className="flex items-center space-x-2 text-sm text-gray-500 dark:text-gray-400">
          <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${software.gradientClass}`} />
          <span>{feature}</span>
        </div>
      ))}
    </div>
  </motion.div>
);

export default SoftwareTools;
