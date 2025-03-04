'use client';

import { motion } from 'framer-motion';
import { FaGlobe, FaDatabase, FaUsers, FaExternalLinkAlt, FaSearch, FaDna, FaVirus } from 'react-icons/fa';
import Head from 'next/head';
import Layout from '@/components/Layout';
import AnimatedText from '@/components/AnimatedText';
import { useState } from 'react';

// Component renamed to Page for Next.js App Router convention
export default function Page() {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterType, setFilterType] = useState('all');
  const [sortBy, setSortBy] = useState('name');
  
  const webserverData = [
    {
      name: "HPInet",
      description: "A Cereal crops and pathogen protein-protein interaction database.",
      link: "http://bioinfo.usu.edu/hpinet/",
      users: 20,
      gradientClass: "from-blue-600 to-cyan-500",
      type: "database",
      tags: ["host-pathogen", "protein-interaction", "cereal-crops"]
    },
    {
      name: "HuPoxNET",
      description: "A database for Human-Monkeypox virus interactome.",
      link: "http://bioinfo.usu.edu/hupoxnet/",
      users: 20,
      gradientClass: "from-purple-600 to-violet-500",
      type: "database",
      tags: ["host-pathogen", "virus", "interactome"]
    },
    {
      name: "myDockDB",
      description: "A Multiple Myeloma Proteins and Natural Compounds Docking WEB-resource.",
      link: "http://bioinfo.usu.edu/myDockDB/",
      users: 20,
      gradientClass: "from-emerald-600 to-green-500",
      type: "database",
      tags: ["docking", "multiple-myeloma", "natural-compounds"]
    },
    {
      name: "pySeqRNA",
      description: "Complete documentation website for pySeqRNA package.",
      link: "http://bioinfo.usu.edu/pyseqrna/",
      users: 112,
      gradientClass: "from-amber-600 to-orange-500",
      type: "webserver",
      tags: ["RNA-seq", "documentation", "genomics"]
    },
    {
      name: "ranchSATdb",
      description: "A database of ranch animals microsatellite markers.",
      link: "http://bioinfo.usu.edu/ranchSATdb/",
      users: 30,
      gradientClass: "from-rose-600 to-pink-500",
      type: "database",
      tags: ["microsatellite", "ranch-animals", "genomics"]
    },
    {
      name: "TritiKBdb",
      description: "A Host-Pathogen interaction database for understanding Karnal Bunt disease infection mechanisms in Wheat.",
      link: "http://bioinfo.usu.edu/tritikbdb/",
      users: 540,
      gradientClass: "from-indigo-600 to-blue-500",
      type: "database",
      tags: ["host-pathogen", "wheat", "disease"]
    },
    {
      name: "HuCoPIA",
      description: "An Atlas of Human vs. SARS-CoV-2 interactome and the comparative analysis with other Coronaviridae family viruses.",
      link: "http://bioinfo.usu.edu/hucopia/",
      users: 60,
      gradientClass: "from-teal-600 to-green-500",
      type: "database",
      tags: ["host-pathogen", "COVID-19", "interactome"]
    },
    {
      name: "deepNEC",
      description: "An integrated web server platform for the prediction of nitrogen metabolism-related enzymes using deep learning.",
      link: "http://bioinfo.usu.edu/deepNEC/",
      users: 700,
      gradientClass: "from-blue-600 to-indigo-500",
      type: "webserver",
      tags: ["deep-learning", "enzymes", "metabolism"]
    },
    {
      name: "deepHPI",
      description: "A Deep Learning framework for the prediction of host-pathogen protein interactions and visualization.",
      link: "http://bioinfo.usu.edu/deepHPI/",
      users: 1030,
      gradientClass: "from-purple-600 to-pink-500",
      type: "webserver",
      tags: ["deep-learning", "host-pathogen", "protein-interaction"]
    },
    {
      name: "GreeningDB",
      description: "A database of host-pathogen interactions and studying comparatomics of citrus and citrus greening disease (HLB).",
      link: "http://bioinfo.usu.edu/GreeningDB/",
      users: 828,
      gradientClass: "from-green-600 to-teal-500",
      type: "database",
      tags: ["host-pathogen", "citrus", "disease"]
    },
    {
      name: "covidTracker",
      description: "A COVID-19 disease infection statistics tracker.",
      link: "http://bioinfo.usu.edu/covidTracker/",
      users: 8200,
      gradientClass: "from-red-600 to-orange-500",
      type: "webserver",
      tags: ["COVID-19", "disease-tracking", "statistics"]
    },
    {
      name: "legumeSSRdb",
      description: "A Legume species microsatellite markers database.",
      link: "http://bioinfo.usu.edu/legumeSSRdb/",
      users: 712,
      gradientClass: "from-amber-600 to-yellow-500",
      type: "database",
      tags: ["microsatellite", "legume", "genomics"]
    },
    {
      name: "citSATdb",
      description: "A Citrus species microsatellite markers database.",
      link: "http://bioinfo.usu.edu/citSATdb/",
      users: 530,
      gradientClass: "from-lime-600 to-green-500",
      type: "database",
      tags: ["microsatellite", "citrus", "genomics"]
    },
    {
      name: "PRGminer",
      description: "Deep learning based PR-genes prediction",
      link: "http://bioinfo.usu.edu/prgminer/",
      users: 530,
      gradientClass: "from-lime-600 to-green-500",
      type: "webserver",
      tags: ["plant resistance gene", "R-gene", "genomics"]
    }
  ];

  // Filter and sort the webserver data
  const filteredWebservers = webserverData
    .filter(webserver => {
      const matchesSearch = 
        webserver.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
        webserver.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        webserver.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
      
      const matchesType = filterType === 'all' || webserver.type === filterType;
      
      return matchesSearch && matchesType;
    })
    .sort((a, b) => {
      if (sortBy === 'name') {
        return a.name.localeCompare(b.name);
      } else if (sortBy === 'users') {
        return b.users - a.users;
      } else if (sortBy === 'type') {
        return a.type.localeCompare(b.type);
      }
      return 0;
    });

  // Calculate statistics
  const totalUsers = webserverData.reduce((sum, item) => sum + item.users, 0);
  const databaseCount = webserverData.filter(item => item.type === 'database').length;
  const webserverCount = webserverData.filter(item => item.type === 'webserver').length;
  
  // Extract unique tags for filtering
  const allTags = [...new Set(webserverData.flatMap(item => item.tags))];

  return (
    <>
      <Head>
        <title>Naveen Duhan | Webservers & Databases</title>
        <meta
          name="description"
          content="Explore Naveen Duhan's collection of bioinformatics webservers and databases for research in genomics, host-pathogen interactions, and more."
        />
      </Head>

      <main className="flex w-full flex-col items-center justify-center dark:text-light">
        <Layout className="pt-10">
          <AnimatedText text="Optimized for Performance, Built for Reliability!" className='text-6xl' />
          
          <div className="flex flex-col gap-6 my-10">
            {/* Overview section */}
            <WebserverOverview 
              totalResources={webserverData.length}
              totalUsers={totalUsers}
              databaseCount={databaseCount}
              webserverCount={webserverCount}
            />
            
            {/* Search and filter controls */}
            <div className="bg-white dark:bg-gray-800 shadow-md rounded-xl p-6 mb-4">
              <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
                <div className="relative w-full md:w-1/2">
                  <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search webservers and databases..."
                    className="pl-10 pr-4 py-2 w-full border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>
                
                <div className="flex flex-wrap gap-3 w-full md:w-auto">
                  <select
                    className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
                    value={filterType}
                    onChange={(e) => setFilterType(e.target.value)}
                  >
                    <option value="all">All Types</option>
                    <option value="database">Databases</option>
                    <option value="webserver">Webservers</option>
                  </select>
                  
                  <select
                    className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                  >
                    <option value="name">Sort by Name</option>
                    <option value="users">Sort by Users</option>
                    <option value="type">Sort by Type</option>
                  </select>
                </div>
              </div>
              
              {/* Tags filter */}
              <div className="mt-4 flex flex-wrap gap-2">
                {allTags.map((tag, index) => (
                  <button
                    key={index}
                    onClick={() => setSearchTerm(tag)}
                    className={`px-3 py-1 text-xs rounded-full transition-all ${
                      searchTerm === tag 
                        ? 'bg-blue-500 text-white' 
                        : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
                    }`}
                  >
                    #{tag}
                  </button>
                ))}
              </div>
            </div>
            
            {/* Results count */}
            <div className="text-gray-600 dark:text-gray-400 mb-2">
              Showing {filteredWebservers.length} of {webserverData.length} resources
            </div>
            
            {/* Webserver Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredWebservers.length > 0 ? (
                filteredWebservers.map((webserver, index) => (
                  <WebserverCard key={index} webserver={webserver} />
                ))
              ) : (
                <div className="col-span-full text-center py-10 text-gray-500 dark:text-gray-400">
                  No resources match your search criteria. Try adjusting your filters.
                </div>
              )}
            </div>
          </div>
        </Layout>
      </main>
    </>
  );
}

const WebserverOverview = ({ totalResources, totalUsers, databaseCount, webserverCount }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    whileHover={{ scale: 1.01 }}
    whileTap={{ scale: 0.99 }}
    className="bg-white dark:bg-gray-800 shadow-lg rounded-2xl p-8 border border-gray-200 dark:border-gray-700 transition-all duration-300"
  >
    <div className="flex flex-col md:flex-row md:items-center">
      <div className="md:w-2/3 pr-6">
        <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
          Webservers & Databases
        </h2>
        <p className="text-gray-600 dark:text-gray-300 mb-4 text-lg">
          I've developed numerous webservers and databases to provide researchers with accessible tools for analyzing complex biological data.
        </p>
        <p className="text-gray-600 dark:text-gray-300 text-lg">
          These resources have been accessed by thousands of users worldwide, supporting research in areas such as host-pathogen interactions, genomics, and disease tracking.
        </p>
      </div>
      
      <div className="md:w-1/3 mt-6 md:mt-0 flex justify-center">
        <div className="flex items-center justify-center space-x-10">
          <div className="text-center">
            <div className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
              {totalResources}
            </div>
            <div className="text-lg text-gray-500 dark:text-gray-400 mt-2">Resources</div>
          </div>
          <div className="text-center">
            <div className="text-5xl font-bold bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">
              {totalUsers.toLocaleString()}+
            </div>
            <div className="text-lg text-gray-500 dark:text-gray-400 mt-2">Users</div>
          </div>
        </div>
      </div>
    </div>
    
    <div className="mt-8 flex flex-wrap justify-center gap-4">
      <CategoryBadge label="Databases" count={databaseCount} color="from-blue-600 to-cyan-500" icon={<FaDatabase className="mr-1" />} />
      <CategoryBadge label="Webservers" count={webserverCount} color="from-purple-600 to-pink-500" icon={<FaGlobe className="mr-1" />} />
      <CategoryBadge label="Host-Pathogen" count="6" color="from-emerald-600 to-green-500" icon={<FaVirus className="mr-1" />} />
      <CategoryBadge label="Genomics" count="5" color="from-amber-600 to-orange-500" icon={<FaDna className="mr-1" />} />
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

const WebserverCard = ({ webserver }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <motion.div
      whileHover={{ scale: 1.02, y: -5 }}
      whileTap={{ scale: 0.98 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl rounded-2xl p-6 border border-gray-200 dark:border-gray-700 transition-all duration-300 h-full flex flex-col justify-between"
    >
      <div>
        <div className="flex items-center justify-between mb-4">
          <h3 className={`text-xl font-bold bg-gradient-to-r ${webserver.gradientClass} bg-clip-text text-transparent`}>
            {webserver.name}
          </h3>
          <span className={`px-3 py-1 rounded-full text-xs font-medium ${
            webserver.type === "database" 
              ? "bg-blue-100 text-blue-600 dark:bg-blue-900 dark:text-blue-300" 
              : "bg-green-100 text-green-600 dark:bg-green-900 dark:text-green-300"
          }`}>
            {webserver.type}
          </span>
        </div>
        <p className="text-gray-600 dark:text-gray-300 mb-4">{webserver.description}</p>
        
        {/* Tags */}
        <div className="flex flex-wrap gap-2 mt-3">
          {webserver.tags.map((tag, idx) => (
            <span key={idx} className="text-xs px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 rounded-md">
              #{tag}
            </span>
          ))}
        </div>
      </div>
      
      <div className="flex items-center justify-between mt-4">
        <div className="flex items-center text-gray-500 dark:text-gray-400 text-sm">
          <FaUsers className="mr-1" />
          <span>{webserver.users.toLocaleString()}+ users</span>
        </div>
        
        <motion.a 
          href={webserver.link} 
          target="_blank" 
          rel="noopener noreferrer"
          className={`flex items-center gap-2 text-white px-3 py-2 rounded-lg bg-gradient-to-r ${webserver.gradientClass} hover:opacity-90 transition-all`}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {isHovered ? (
            <>
              <span className="text-sm font-medium">Visit</span>
              <FaExternalLinkAlt className="text-sm" />
            </>
          ) : (
            <FaGlobe className="text-xl" />
          )}
        </motion.a>
      </div>
    </motion.div>
  );
};
