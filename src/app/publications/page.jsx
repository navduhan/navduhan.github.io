// src/app/publications/page.jsx
"use client";

import React, { useState, useEffect } from "react";
import Head from "next/head";
import Layout from "@/components/Layout";
import { motion, AnimatePresence } from "framer-motion";
import Articles from "@/components/Articles";
import CitationsChart from "@/components/CitationsChart";
import Notation from "@/components/Notation";
import ScholarScrapper from "@/components/ScholarScrapper";
import { 
  FaBookOpen, 
  FaGraduationCap, 
  FaChartLine, 
  FaInfoCircle, 
  FaQuoteRight,
  FaUniversity,
  FaChartBar,
  FaSync,
  FaArrowUp,
  FaCalendarAlt,
  FaAward,
  FaFilter,
  FaSearch
} from "react-icons/fa";

// Enhanced ScholarMetrics component with improved error handling and caching
const ScholarMetrics = () => {
  const [metrics, setMetrics] = useState(null);
  const [isUpdating, setIsUpdating] = useState(false);
  const [lastUpdated, setLastUpdated] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Try to get cached metrics from localStorage
    const cachedMetrics = localStorage.getItem('scholarMetrics');
    const cachedTimestamp = localStorage.getItem('scholarMetricsTimestamp');
    
    if (cachedMetrics && cachedTimestamp) {
      setMetrics(JSON.parse(cachedMetrics));
      setLastUpdated(new Date(parseInt(cachedTimestamp)));
    } else {
      // If no cached data, fetch it automatically
      handleUpdate();
    }
  }, []);

  const handleUpdate = async () => {
    try {
      setIsUpdating(true);
      setError(null);
      
      const response = await fetch('/api/citations', {
        method: 'GET',
        headers: {
          'Cache-Control': 'no-cache'
        }
      });
      
      if (!response.ok) {
        throw new Error('Failed to update citation data');
      }
      
      const data = await response.json();
      
      // Update state with new data
      const newMetrics = {
        citations: data.citations || {
          all: 0,
          since2020: 0
        },
        hIndex: data.hIndex || {
          all: 0,
          since2020: 0
        },
        i10Index: data.i10Index || {
          all: 0,
          since2020: 0
        },
        yearWiseCitations: data.yearWiseCitations || {}
      };
      
      setMetrics(newMetrics);
      
      const timestamp = Date.now();
      setLastUpdated(new Date(timestamp));
      
      // Cache the results
      localStorage.setItem('scholarMetrics', JSON.stringify(newMetrics));
      localStorage.setItem('scholarMetricsTimestamp', timestamp.toString());
      
    } catch (err) {
      console.error("Error updating metrics:", err);
      setError("Failed to update metrics. Please try again.");
    } finally {
      setIsUpdating(false);
    }
  };

  // If we have metrics data
  if (metrics) {
    const citationsChange = calculateChange(metrics.citations.all, metrics.citations.since2020);
    const hIndexChange = calculateChange(metrics.hIndex.all, metrics.hIndex.since2020);
    const i10IndexChange = calculateChange(metrics.i10Index.all, metrics.i10Index.since2020);

    return (
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 overflow-hidden">
        <div className="bg-gradient-to-r from-purple-600 to-indigo-600 p-4">
          <div className="flex justify-between items-center">
            <h3 className="text-xl font-bold text-white flex items-center">
              <FaUniversity className="mr-2" />
              Google Scholar Metrics
            </h3>
            <button
              onClick={handleUpdate}
              disabled={isUpdating}
              className={`px-3 py-1 rounded-full text-sm flex items-center ${
                isUpdating
                  ? "bg-gray-300 text-gray-600 cursor-not-allowed"
                  : "bg-white text-purple-600 hover:bg-gray-100"
              }`}
            >
              <FaSync className={`mr-1 ${isUpdating ? "animate-spin" : ""}`} />
              {isUpdating ? "Updating..." : "Update"}
            </button>
          </div>
          {lastUpdated && (
            <p className="text-xs text-purple-200 mt-1 flex items-center">
              <FaCalendarAlt className="mr-1" />
              Last updated: {lastUpdated.toLocaleString()}
            </p>
          )}
        </div>

        <div className="p-5">
          {error && (
            <div className="mb-4 p-3 bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400 rounded-lg text-sm">
              {error}
            </div>
          )}

          <table className="min-w-full border-collapse">
            <thead>
              <tr className="bg-gray-100 dark:bg-gray-700">
                <th className="p-2 text-left font-medium text-gray-600 dark:text-gray-300 rounded-tl-md">Metric</th>
                <th className="p-2 text-center font-medium text-gray-600 dark:text-gray-300">All Time</th>
                <th className="p-2 text-center font-medium text-gray-600 dark:text-gray-300 rounded-tr-md">Since 2020</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors">
                <td className="p-2 text-gray-700 dark:text-gray-300 font-medium">Citations</td>
                <td className="p-2 text-gray-700 dark:text-gray-300 text-center font-semibold">{metrics.citations.all}</td>
                <td className="p-2 text-gray-700 dark:text-gray-300 text-center font-semibold">{metrics.citations.since2020}</td>
              </tr>
              <tr className="border-t border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors">
                <td className="p-2 text-gray-700 dark:text-gray-300 font-medium">h-index</td>
                <td className="p-2 text-gray-700 dark:text-gray-300 text-center font-semibold">{metrics.hIndex.all}</td>
                <td className="p-2 text-gray-700 dark:text-gray-300 text-center font-semibold">{metrics.hIndex.since2020}</td>
              </tr>
              <tr className="border-t border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors">
                <td className="p-2 text-gray-700 dark:text-gray-300 font-medium">i10-index</td>
                <td className="p-2 text-gray-700 dark:text-gray-300 text-center font-semibold">{metrics.i10Index.all}</td>
                <td className="p-2 text-gray-700 dark:text-gray-300 text-center font-semibold">{metrics.i10Index.since2020}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }

  // Initial loading state or when no metrics are available
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 overflow-hidden">
      <div className="bg-gradient-to-r from-purple-600 to-indigo-600 p-4">
        <h3 className="text-xl font-bold text-white flex items-center">
          <FaUniversity className="mr-2" />
          Google Scholar Metrics
        </h3>
      </div>

      <div className="p-5">
        <div className="text-center py-6">
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            No citation metrics available. Update to fetch the latest data from Google Scholar.
          </p>
          <button
            onClick={handleUpdate}
            disabled={isUpdating}
            className={`px-4 py-2 rounded-md text-white flex items-center mx-auto ${
              isUpdating
                ? "bg-gray-500 cursor-not-allowed"
                : "bg-purple-600 hover:bg-purple-700"
            }`}
          >
            <FaSync className={`mr-2 ${isUpdating ? "animate-spin" : ""}`} />
            {isUpdating ? "Updating..." : "Update Citation Metrics"}
          </button>
          {error && (
            <div className="mt-4 p-3 bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400 rounded-lg text-sm">
              {error}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

// Helper component for metric cards
const MetricCard = ({ title, value, recentValue, change, icon, tooltip }) => {
  return (
    <div className="bg-gray-50 dark:bg-gray-700/50 rounded-lg p-3 relative group">
      {tooltip && (
        <div className="absolute invisible group-hover:visible bg-gray-800 text-white text-xs rounded p-2 -top-10 left-0 right-0 mx-auto w-48 z-10">
          {tooltip}
          <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-gray-800 rotate-45"></div>
        </div>
      )}
      
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center">
          {icon}
          <h4 className="ml-2 font-medium text-gray-700 dark:text-gray-300">{title}</h4>
        </div>
        {change && (
          <div className={`text-xs px-2 py-0.5 rounded-full flex items-center ${
            change.isPositive 
              ? 'bg-green-100 dark:bg-green-900/20 text-green-700 dark:text-green-400' 
              : 'bg-red-100 dark:bg-red-900/20 text-red-700 dark:text-red-400'
          }`}>
            {change.isPositive ? <FaArrowUp className="mr-1" /> : <FaArrowUp className="mr-1 transform rotate-180" />}
            {change.value}%
          </div>
        )}
      </div>
      
      <div className="flex items-end">
        <div className="text-2xl font-bold text-gray-800 dark:text-gray-200">{value}</div>
        {recentValue && (
          <div className="ml-2 text-sm text-gray-500 dark:text-gray-400">
            ({recentValue} since 2020)
          </div>
        )}
      </div>
    </div>
  );
};

// Calculate percentage change
const calculateChange = (all, recent) => {
  if (!all || !recent) return { value: 0, isPositive: true };
  
  const allNum = parseInt(all, 10);
  const recentNum = parseInt(recent, 10);
  
  if (allNum === 0) return { value: 0, isPositive: true };
  
  const percentChange = Math.round((recentNum / allNum) * 100);
  return { 
    value: percentChange,
    isPositive: percentChange >= 50 // Consider >= 50% as positive trend
  };
};

const Publications = () => {
  const [activeTab, setActiveTab] = useState("research"); // "research" or "scholar"
  const [showMetrics, setShowMetrics] = useState(true);
  const [citationData, setCitationData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  // Fetch citation data once on component mount
  useEffect(() => {
    const fetchCitationData = async () => {
      try {
        setIsLoading(true);
        const response = await fetch('/api/citations');
        if (!response.ok) {
          throw new Error('Failed to fetch citation data');
        }
        const data = await response.json();
        setCitationData(data);
      } catch (error) {
        console.error('Error fetching citation data:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchCitationData();
  }, []);

  // Calculate changes for the metrics cards if data is available
  const citationsChange = citationData ? calculateChange(citationData.citations?.all, citationData.citations?.since2020) : null;
  const hIndexChange = citationData ? calculateChange(citationData.hIndex?.all, citationData.hIndex?.since2020) : null;
  const i10IndexChange = citationData ? calculateChange(citationData.i10Index?.all, citationData.i10Index?.since2020) : null;

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
                {/* Metrics Cards - Added at the top */}
                {!isLoading && citationData && (
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                    <MetricCard 
                      title="Citations" 
                      value={citationData.citations?.all || 0}
                      recentValue={citationData.citations?.since2020 || 0}
                      change={citationsChange}
                      icon={<FaQuoteRight className="text-blue-500" />}
                    />
                    
                    <MetricCard 
                      title="h-index" 
                      value={citationData.hIndex?.all || 0}
                      recentValue={citationData.hIndex?.since2020 || 0}
                      change={hIndexChange}
                      icon={<FaChartBar className="text-purple-500" />}
                      tooltip="h-index is the largest number h such that h publications have at least h citations each"
                    />
                    
                    <MetricCard 
                      title="i10-index" 
                      value={citationData.i10Index?.all || 0}
                      recentValue={citationData.i10Index?.since2020 || 0}
                      change={i10IndexChange}
                      icon={<FaAward className="text-green-500" />}
                      tooltip="i10-index is the number of publications with at least 10 citations"
                    />
                  </div>
                )}
                
                {isLoading && (
                  <div className="flex justify-center items-center h-32">
                    <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
                  </div>
                )}
                
                {/* Citations Chart */}
                <div className="mb-8">
                  <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-200 flex items-center">
                    <FaChartLine className="mr-2 text-blue-600 dark:text-blue-400" />
                    Citation Trends
                  </h3>
                  <div className="bg-gray-50 dark:bg-gray-700/50 rounded-xl p-4">
                    <CitationsChart citations={citationData} />
                  </div>
                </div>
                
                {/* Publication Notation Guide - Below Chart */}
                <div>
                  <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-200 flex items-center">
                    <FaInfoCircle className="mr-2 text-blue-600 dark:text-blue-400" />
                    Publication Notation Guide
                  </h3>
                  <div className="bg-gray-50 dark:bg-gray-700/50 rounded-xl p-4">
                    <Notation />
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
            <AnimatePresence mode="wait">
              {/* Research Articles Tab */}
              {activeTab === "research" && (
                <motion.div
                  key="research"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                  className="mb-4"
                >
                  <h2 className="text-2xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                    My Research Publications
                  </h2>
                  
                  {/* Research Articles */}
                  <Articles />
                </motion.div>
              )}
              
              {/* Google Scholar Tab */}
              {activeTab === "scholar" && (
                <motion.div
                  key="scholar"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                  className="mb-4"
                >
                  <h2 className="text-2xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">
                    Google Scholar Publications
                  </h2>
                  
                  {/* Scholar Metrics */}
                  <div className="mb-8">
                    {/* <div className="flex items-center justify-between mb-4">
                      <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 flex items-center">
                        <FaChartBar className="mr-2 text-purple-600 dark:text-purple-400" />
                        Citation Metrics
                      </h3>
                      <button
                        onClick={() => setShowMetrics(!showMetrics)}
                        className="text-sm text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 flex items-center"
                      >
                        {showMetrics ? "Hide" : "Show"} Metrics
                      </button>
                    </div> */}
                    
                    <AnimatePresence>
                      {showMetrics && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          <ScholarScrapper />
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                  
                 
                </motion.div>
              )}
            </AnimatePresence>
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
