"use client";

import React, { useState } from "react";
import Head from "next/head";
import AnimatedText from "@/components/AnimatedText";
import Layout from "@/components/Layout";
import Notation from "@/components/Notation";
import ScholarScraper from "@/components/ScholarScrapper";
import CitationCard from "@/components/CitationsCard";
import Articles from "@/components/Articles";
import CitationsChart from "@/components/CitationsChart";

export default function Publications() {
  // State to manage which tab is active (articles or scholar scraper)
  const [activeTab, setActiveTab] = useState("articles");

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
          <AnimatedText
            text="Discoveries Through Data!"
            className="mb-10 text-7xl"
          />

          {/* Display content based on active tab */}
          {/* Add a container div with padding that prevents touching screen edges */}
          <div className="px-4 sm:px-6 md:px-8 lg:px-10">
            <div
              className="grid grid-cols-12 gap-4 my-10 p-4 border border-sky-300
    hover:border-sky-500 hover:border-2 hover:scale-[1.02] transition-transform duration-300 rounded-2xl"
            >
              {/* For mobile: each item gets full width (12 cols) */}
              {/* For sm-md: 2 items per row (6 cols each) for better use of space */}
              {/* For lg+: original layout (3-3-6 distribution) */}

              {/* Notation Section */}
              <div className="col-span-12 sm:col-span-6 md:col-span-6 lg:col-span-3 flex justify-center items-center mb-4 sm:mb-0">
                <Notation />
              </div>

              {/* Citation Card Section */}
              <div className="col-span-12 sm:col-span-6 md:col-span-6 lg:col-span-3 flex justify-center items-center mb-4 sm:mb-0">
                <CitationCard />
              </div>

              {/* Citations Chart - Ensuring Full Space */}
              <div className="col-span-12 md:col-span-12 lg:col-span-6 flex justify-center items-center">
                <div className="w-full h-full flex-grow">
                  <CitationsChart />
                </div>
              </div>
            </div>
          </div>
          {/* Tab buttons to toggle between Articles and ScholarScraper */}
          <div className="flex my-6 items-center justify-center">
            <button
              className={`px-6 py-2 text-lg rounded-2xl font-medium ${
                activeTab === "articles"
                  ? "bg-purple-600 text-white"
                  : "bg-gray-200 text-gray-800"
              }`}
              onClick={() => setActiveTab("articles")}
            >
              Research Articles
            </button>
            <button
              className={`px-6 py-2 ml-4 text-lg rounded-2xl  font-medium ${
                activeTab === "scholarScraper"
                  ? "bg-purple-600 text-white"
                  : "bg-gray-200 text-gray-800"
              }`}
              onClick={() => setActiveTab("scholarScraper")}
            >
              Cited Articles
            </button>
          </div>

          {/* Conditionally render Articles or Scholar Scraper based on active tab */}
          <div className="w-full mt-10">
            {activeTab === "articles" ? <Articles /> : <ScholarScraper />}
          </div>
        </Layout>
      </main>
    </>
  );
}
