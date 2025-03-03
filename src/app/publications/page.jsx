// src/app/publications/page.jsx
"use client";

import React, { useState, useEffect } from "react";
import Head from "next/head";
import Layout from "@/components/Layout";
import { motion } from "framer-motion";
import Articles from "@/components/Articles";
import CitationsChart from "@/components/CitationsChart";
import CitationsCard from "@/components/CitationsCard";
import Notation from "@/components/Notation";
import ScholarScrapper from "@/components/ScholarScrapper";
import { FaBookOpen, FaGraduationCap, FaChartLine, FaInfoCircle } from "react-icons/fa";

const Publications = () => {
  const [researchArticles, setResearchArticles] = useState([]);
  const [scholarArticles, setScholarArticles] = useState([]);
  const [citations, setCitations] = useState({});
  const [lastUpdated, setLastUpdated] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [activeTab, setActiveTab] = useState("research"); // "research" or "scholar"

  // Fetch publication data
  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        
        // Fetch publication data from your API
        const response = await fetch('/api/publications');
        const data = await response.json();
        
        setResearchArticles(data.researchArticles || []);
        setScholarArticles(data.scholarArticles || []);
        setCitations(data.citations || {});
        setLastUpdated(data.lastUpdated);
        
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching publication data:", error);
        setIsLoading(false);
        
        // Fallback to empty data
        setResearchArticles([]);
        setScholarArticles([]);
        setCitations({});
      }
    };
    
    fetchData();
  }, []);

  // Handle citation data update
  const handleUpdateCitations = async () => {
    try {
      const response = await fetch('/api/update-citations', {
        method: 'POST',
      });
      
      if (!response.ok) {
        throw new Error('Failed to update citation data');
      }
      
      const data = await response.json();
      
      // Update state with new data
      setResearchArticles(data.researchArticles || []);
      setScholarArticles(data.scholarArticles || []);
      setCitations(data.citations || {});
      setLastUpdated(data.lastUpdated);
      
      return data;
    } catch (error) {
      console.error("Error updating citation data:", error);
      throw error;
    }
  };

  // Get top cited publications
  const getTopCitedPublications = (articles, count = 3) => {
    return [...articles]
      .sort((a, b) => (b.citationCount || 0) - (a.citationCount || 0))
      .slice(0, count);
  };

  return (
    <>
      <Head>
        <title>Naveen Duhan | Publications</title>
        <meta
          name="description"
          content="Naveen Duhan's Research Publications"
        />
      </Head>

      <main className="flex w-full flex-col items-center justify-center dark:text-light">
        <Layout className="pt-10 pb-16">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-6xl font-bold text-center mb-8 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
          >
            Research Publications
          </motion.h1>

          {/* Publication Metrics Dashboard */}
{/* Publication Metrics Dashboard */}
<section className="mb-12">
  <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 overflow-hidden">
    {/* Dashboard Header */}
    <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-5">
      <h2 className="text-2xl font-bold text-white flex items-center">
        <FaChartLine className="mr-2" />
        Publication Metrics Dashboard
      </h2>
    </div>
    
    {/* Dashboard Content */}
    <div className="p-6">
      {/* Three-Component Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Left Column - Citations Chart */}
        <div className="lg:col-span-2">
          <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-200 flex items-center">
            <FaChartLine className="mr-2 text-blue-600 dark:text-blue-400" />
            Citation Trends
          </h3>
          <div className="bg-gray-50 dark:bg-gray-700/50 rounded-xl p-4">
            <CitationsChart citations={citations} />
          </div>
        </div>
        
        {/* Left Column - Top Cited Publications */}
        <div>
          <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-200 flex items-center">
            <FaGraduationCap className="mr-2 text-blue-600 dark:text-blue-400" />
            Most Cited Publications
          </h3>
          <div className="bg-gray-50 dark:bg-gray-700/50 rounded-xl p-4 h-full">
            <CitationsCard 
              citations={scholarArticles.length > 0 ? 
                getTopCitedPublications(scholarArticles) : []} 
            />
          </div>
        </div>
        
        {/* Right Column - Notation Guide */}
        <div>
          <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-200 flex items-center">
            <FaInfoCircle className="mr-2 text-blue-600 dark:text-blue-400" />
            Publication Notation Guide
          </h3>
          <div className="bg-gray-50 dark:bg-gray-700/50 rounded-xl p-4 h-full">
            <Notation />
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

          
          {/* Tab Selection */}
          <section className="mb-8">
            <div className="flex justify-center border-b border-gray-200 dark:border-gray-700">
              <TabButton 
                active={activeTab === "research"} 
                onClick={() => setActiveTab("research")}
                icon={<FaBookOpen className="mr-2" />}
                text="Research Articles"
              />
              <TabButton 
                active={activeTab === "scholar"} 
                onClick={() => setActiveTab("scholar")}
                icon={<FaGraduationCap className="mr-2" />}
                text="Google Scholar"
              />
            </div>
          </section>
          
          {/* Tab Content */}
          <section>
            {isLoading ? (
              <div className="text-center py-12">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500 mx-auto mb-4"></div>
                <p className="text-gray-600 dark:text-gray-400">Loading publications...</p>
              </div>
            ) : (
              <>
                {/* Research Articles Tab */}
                {activeTab === "research" && (
                  <div className="mb-4">
                    <h2 className="text-2xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                      My Research Publications
                    </h2>
                    
                    {/* Featured Publication */}
                    {researchArticles.length > 0 && (
                      <div className="mb-8">
                        <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-200">
                          Featured Publication
                        </h3>
                        <CitationCard citation={researchArticles[0]} />
                      </div>
                    )}
                    
                    {/* All Research Articles */}
                    <Articles articles={researchArticles} />
                  </div>
                )}
                
                {/* Google Scholar Tab */}
                {activeTab === "scholar" && (
                  <div className="mb-4">
                    <h2 className="text-2xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">
                      Cited Publications from Google Scholar 
                    </h2>
                    
                    {/* Scholar Scrapper for updating citation data */}
                    <div className="mb-8">
                      <ScholarScrapper 
                        onUpdate={handleUpdateCitations}
                        lastUpdated={lastUpdated}
                      />
                    </div>
                    
                    {/* All Scholar Articles */}
                    <Articles articles={scholarArticles} />
                  </div>
                )}
              </>
            )}
          </section>
        </Layout>
      </main>
    </>
  );
};

// Tab Button Component
const TabButton = ({ active, onClick, icon, text }) => (
  <button
    onClick={onClick}
    className={`flex items-center py-4 px-6 border-b-2 font-medium text-lg transition-colors ${
      active 
        ? "border-blue-600 text-blue-600 dark:border-blue-400 dark:text-blue-400" 
        : "border-transparent text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
    }`}
  >
    {icon}
    {text}
  </button>
);

export default Publications;
