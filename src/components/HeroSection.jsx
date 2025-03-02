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

const HeroSection = () => {
  return (
    <>
      <main className="flex flex-col items-center text-dark w-full min-h-screen dark:text-light">
        <Layout className="pt-16">
          <div className="flex flex-col-reverse md:flex-row items-center justify-between w-full">
            {/* Text Section */}
            <div className="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left">
              <AnimatedText
                text="Transforming Data into Discoveries at the Intersection of Biology and Technology!"
                className="!text-4xl md:!text-6xl !leading-tight"
              />
              <p className="my-4 text-base font-medium text-dark/75 dark:text-light/75 ">
                As a skilled bioinformatician, I am passionate about
                transforming complex biological data into meaningful insights
                through computational analysis. Explore my latest projects and
                research articles, showcasing my expertise in data science,
                genomics, and bioinformatics tools.
              </p>
              <div className="flex items-center justify-center md:justify-start mt-4">
                <Link
                  href="/dummy.pdf"
                  target="_blank"
                  className="flex items-center bg-gray-800 text-gray-100 p-2.5 px-6 rounded-lg text-lg 
                  font-semibold hover:bg-gray-100 hover:text-gray-900 border-2 border-solid border-transparent
                  hover:border-gray-900 dark:bg-gray-100 dark:text-gray-900 hover:dark:bg-gray-900 hover:dark:text-gray-100
                  hover:dark:border-gray-100"
                  download={true}
                >
                  Resume <LinkArrow className="w-6 ml-1" />
                </Link>
                <Link
                  href="mailto:naveen.duhan@outlook.com"
                  target="_blank"
                  className="ml-4 text-lg font-medium capitalize text-gray-900 underline dark:text-gray-100"
                >
                  Collaborate
                </Link>
              </div>
            </div>

            {/* Image Section */}
            <div className="w-full md:w-1/2 flex justify-center my-10 md:mt-0">
              <Image
                src="/images/profile/test.png"
                alt="profile"
                width={1000}
                height={1000}
                className="w-full max-w-xs md:max-w-md rounded-full"
                priority
              />
            </div>
          </div>
          <section className="mt-16 w-full">
            <AnimatedText
              text="Awards"
              className="!text-4xl md:!text-6xl !leading-tight"
            />
            <div className="flex flex-col md:flex-row items-center md:items-start mt-8 space-y-4 md:space-y-0 md:space-x-8">
              <div className="w-full ">
                <YouTubeEmbed videoId="VeWw6Rh6coA" />
              </div>
              <div className="w-full md:w-1/2  flex items-center my-15 justify-center">
                <AnimatedText
                  text="Doctoral Researcher of the Year 2022-23"
                  className="text-7xl "
                />
              </div>
            </div>
          </section>

          {/* Bioinformatics Skills Section */}
          <section className="mt-16 w-full">
            <AnimatedText
              text="Skills"
              className="!text-4xl md:!text-6xl !leading-tight"
            />

            <Skills />
          </section>
        </Layout>
      </main>
    </>
  );
};

export default HeroSection;
