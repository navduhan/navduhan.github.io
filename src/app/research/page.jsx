// src/app/research/page.jsx
"use client";

import React from "react";
import Head from "next/head";
import Layout from "@/components/Layout";
import { motion } from "framer-motion";
import ResearchHero from "@/components/research/ResearchHero";
import ResearchAreas from "@/components/research/ResearchAreas";
import ResearchProjects from "@/components/research/ResearchProjects";
import PublicationsPreview from "@/components/research/PublicationsPreview";
import CollaborationCTA from "@/components/research/CollaborationCTA";

const Research = () => {
  return (
    <>
      <Head>
        <title>Naveen Duhan | Research</title>
        <meta
          name="description"
          content="Naveen Duhan's Bioinformatics Research"
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
            Research & Innovation
          </motion.h1>

          {/* Hero Section with Research Overview */}
          <section className="mb-32">
            <ResearchHero />
          </section>
          
          {/* Research Areas */}
          <section className="mb-32 pt-8">
            <ResearchAreas />
          </section>
          
          {/* Research Projects */}
          <section className="mb-32 pt-8">
            <ResearchProjects />
          </section>
          
          {/* Publications Preview with Link */}
          <section className="mb-32 pt-8">
            <PublicationsPreview />
          </section>
          
          {/* Collaboration CTA */}
          <section className="mb-16 pt-8">
            <CollaborationCTA />
          </section>
        </Layout>
      </main>
    </>
  );
};

export default Research;
