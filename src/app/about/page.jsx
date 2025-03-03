// src/app/about/page.jsx
"use client";

import React from "react";
import Head from "next/head";
import Layout from "@/components/Layout";
import { motion } from "framer-motion";
import AboutHero from "@/components/about/AboutHero";
import AboutStats from "@/components/about/AboutStats";
import ExperienceSection from "@/components/about/ExperienceSection";
import EducationSection from "@/components/about/EducationSection";
import AwardsSection from "@/components/about/AwardsSection";

const About = () => {
  return (
    <>
      <Head>
        <title>Naveen Duhan | About Page</title>
        <meta
          name="description"
          content="Naveen Duhan's Bioinformatician Website"
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
            Passion Fuels Purpose!
          </motion.h1>

          {/* Hero Section with Bio and Image */}
          <section className="mb-32">
            <AboutHero />
          </section>
          
          {/* Stats Section */}
          <section className="mb-32">
            <AboutStats />
          </section>
          
          {/* Experience Section */}
          <section className="mb-32 pt-8">
            <ExperienceSection />
          </section>
          
          {/* Education Section */}
          <section className="mb-32 pt-8">
            <EducationSection />
          </section>
          
          {/* Awards Section */}
          <section className="mb-16 pt-8">
            <AwardsSection />
          </section>
        </Layout>
      </main>
    </>
  );
};

export default About;
