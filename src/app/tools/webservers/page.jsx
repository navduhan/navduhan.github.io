'use client';

import { motion } from 'framer-motion';
import { FaGlobe, FaDatabase, FaUsers } from 'react-icons/fa';
import Head from 'next/head';
import Layout from '@/components/Layout';
import AnimatedText from '@/components/AnimatedText';

const WebserverDatabases = () => {
  const webserverData = [
    {
      name: "HPInet",
      description: "A Cereal crops and pathogen protein-protein interaction database.",
      link: "http://bioinfo.usu.edu/hpinet/",
      users: 20,
      gradientClass: "from-blue-600 to-cyan-500",
      type: "database"
    },
    {
      name: "HuPoxNET",
      description: "A database for Human-Monkeypox virus interactome.",
      link: "http://bioinfo.usu.edu/hupoxnet/",
      users: 20,
      gradientClass: "from-purple-600 to-violet-500",
      type: "database"
    },
    {
      name: "myDockDB",
      description: "A Multiple Myeloma Proteins and Natural Compounds Docking WEB-resource.",
      link: "http://bioinfo.usu.edu/myDockDB/",
      users: 20,
      gradientClass: "from-emerald-600 to-green-500",
      type: "database"
    },
    {
      name: "pySeqRNA",
      description: "Complete documentation website for pySeqRNA package.",
      link: "http://bioinfo.usu.edu/pyseqrna/",
      users: 112,
      gradientClass: "from-amber-600 to-orange-500",
      type: "webserver"
    },
    {
      name: "ranchSATdb",
      description: "A database of ranch animals microsatellite markers.",
      link: "http://bioinfo.usu.edu/ranchSATdb/",
      users: 30,
      gradientClass: "from-rose-600 to-pink-500",
      type: "database"
    },
    {
      name: "TritiKBdb",
      description: "A Host-Pathogen interaction database for understanding Karnal Bunt disease infection mechanisms in Wheat.",
      link: "http://bioinfo.usu.edu/tritikbdb/",
      users: 540,
      gradientClass: "from-indigo-600 to-blue-500",
      type: "database"
    },
    {
      name: "HuCoPIA",
      description: "An Atlas of Human vs. SARS-CoV-2 interactome and the comparative analysis with other Coronaviridae family viruses.",
      link: "http://bioinfo.usu.edu/hucopia/",
      users: 60,
      gradientClass: "from-teal-600 to-green-500",
      type: "database"
    },
    {
      name: "deepNEC",
      description: "An integrated web server platform for the prediction of nitrogen metabolism-related enzymes using deep learning.",
      link: "http://bioinfo.usu.edu/deepNEC/",
      users: 700,
      gradientClass: "from-blue-600 to-indigo-500",
      type: "webserver"
    },
    {
      name: "deepHPI",
      description: "A Deep Learning framework for the prediction of host-pathogen protein interactions and visualization.",
      link: "http://bioinfo.usu.edu/deepHPI/",
      users: 1030,
      gradientClass: "from-purple-600 to-pink-500",
      type: "webserver"
    },
    {
      name: "GreeningDB",
      description: "A database of host-pathogen interactions and studying comparatomics of citrus and citrus greening disease (HLB).",
      link: "http://bioinfo.usu.edu/GreeningDB/",
      users: 828,
      gradientClass: "from-green-600 to-teal-500",
      type: "database"
    },
    {
      name: "covidTracker",
      description: "A COVID-19 disease infection statistics tracker.",
      link: "http://bioinfo.usu.edu/covidTracker/",
      users: 8200,
      gradientClass: "from-red-600 to-orange-500",
      type: "webserver"
    },
    {
      name: "legumeSSRdb",
      description: "A Legume species microsatellite markers database.",
      link: "http://bioinfo.usu.edu/legumeSSRdb/",
      users: 712,
      gradientClass: "from-amber-600 to-yellow-500",
      type: "database"
    },
    {
      name: "citSATdb",
      description: "A Citrus species microsatellite markers database.",
      link: "http://bioinfo.usu.edu/citSATdb/",
      users: 530,
      gradientClass: "from-lime-600 to-green-500",
      type: "database"
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
          <AnimatedText text="Optimized for Performance, Built for Reliability!" className='text-6xl' />
      <div className="flex flex-col md:flex-row gap-6 my-10">
      {/* Full-width WebserverOverview at the top */}
      <WebserverOverview />
      
      {/* Webserver Cards below */}
      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
        {webserverData.map((webserver, index) => (
          <WebserverCard key={index} webserver={webserver} />
        ))}
      </div>
      </div>
      </Layout>
      </main>
      </>
    
  );
};

const WebserverOverview = () => (
  <motion.div
    whileHover={{ scale: 1.01 }}
    whileTap={{ scale: 0.99 }}
    className="bg-white shadow-lg rounded-2xl p-8 border border-gray-200 transition-all duration-300"
  >
    <div className="flex flex-col md:flex-row md:items-center">
      <div className="md:w-2/3 pr-6">
        <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
          Webservers & Databases
        </h2>
        <p className="text-gray-600 mb-4 text-lg">
          I've developed numerous webservers and databases to provide researchers with accessible tools for analyzing complex biological data.
        </p>
        <p className="text-gray-600 text-lg">
          These resources have been accessed by thousands of users worldwide, supporting research in areas such as host-pathogen interactions, genomics, and disease tracking.
        </p>
      </div>
      
      <div className="md:w-1/3 mt-6 md:mt-0 flex justify-center">
        <div className="flex items-center justify-center space-x-10">
          <div className="text-center">
            <div className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">13</div>
            <div className="text-lg text-gray-500 mt-2">Resources</div>
          </div>
          <div className="text-center">
            <div className="text-5xl font-bold bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">12K+</div>
            <div className="text-lg text-gray-500 mt-2">Users</div>
          </div>
        </div>
      </div>
    </div>
    
    <div className="mt-8 flex flex-wrap justify-center gap-4">
      <CategoryBadge label="Databases" count="9" color="from-blue-600 to-cyan-500" icon={<FaDatabase className="mr-1" />} />
      <CategoryBadge label="Webservers" count="4" color="from-purple-600 to-pink-500" icon={<FaGlobe className="mr-1" />} />
      <CategoryBadge label="Host-Pathogen" count="6" color="from-emerald-600 to-green-500" />
      <CategoryBadge label="Genomics" count="5" color="from-amber-600 to-orange-500" />
      <CategoryBadge label="Disease Tracking" count="2" color="from-red-600 to-rose-500" />
    </div>
  </motion.div>
);

const CategoryBadge = ({ label, count, color, icon }) => (
  <div className={`bg-gradient-to-r ${color} text-white px-4 py-2 rounded-full flex items-center text-sm font-medium`}>
    {icon}
    {label} <span className="ml-1 bg-white bg-opacity-30 px-2 py-0.5 rounded-full text-xs">{count}</span>
  </div>
);

const WebserverCard = ({ webserver }) => (
  <motion.div
    whileHover={{ scale: 1.03 }}
    whileTap={{ scale: 0.98 }}
    className="bg-white shadow-lg rounded-2xl p-6 border border-gray-200 transition-all duration-300 h-full"
  >
    <div className="flex justify-between items-start">
      <div>
        <div className="flex items-center space-x-2">
          <h3 className={`text-xl font-bold bg-gradient-to-r ${webserver.gradientClass} bg-clip-text text-transparent`}>
            {webserver.name}
          </h3>
          {webserver.type === "database" ? (
            <FaDatabase className={`text-sm bg-gradient-to-r ${webserver.gradientClass} bg-clip-text text-transparent`} />
          ) : (
            <FaGlobe className={`text-sm bg-gradient-to-r ${webserver.gradientClass} bg-clip-text text-transparent`} />
          )}
        </div>
        <p className="text-gray-600 mt-2">{webserver.description}</p>
      </div>
      <div className="flex flex-col items-end">
        <a 
          href={webserver.link} 
          target="_blank" 
          rel="noopener noreferrer"
          className={`text-white p-2 rounded-full bg-gradient-to-r ${webserver.gradientClass} hover:opacity-90 transition-opacity`}
        >
          <FaGlobe className="text-xl" />
        </a>
        <div className="flex items-center mt-2 text-gray-500 text-sm">
          <FaUsers className="mr-1" />
          <span>{webserver.users.toLocaleString()}+ users</span>
        </div>
      </div>
    </div>
  </motion.div>
);

export default WebserverDatabases;
