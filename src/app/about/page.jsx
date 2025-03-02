"use client";
import React, { use, useEffect, useRef } from "react";
import Head from "next/head";
import Image from "next/image";
import AnimatedText from "@/components/AnimatedText";
import Layout from "@/components/Layout";

import { useInView, useMotionValue, useSpring } from "framer-motion";

import Experience from "@/components/Experience";
import Education from "@/components/Education";
import AwardsSection from "@/components/Awards";

const AnimatedNumbers = ({ value }) => {
  const ref = useRef(null);
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { duration: 3000 });
  const isInView = useInView(ref, { once: true });
  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [isInView, value]);

  useEffect(() => {
    springValue.on("change", (latest) => {
      if (ref.current && latest.toFixed(0) <= value) {
        ref.current.textContent = latest.toFixed(0);
      }
    });
  }, [springValue, value]);

  return <span ref={ref}></span>;
};

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
        <Layout className="pt-10">
          <AnimatedText text="Passion Fuels Purpose!" className="mb-16 text-7xl" />

          <div className="grid w-full grid-cols-1 sm:grid-cols-2 md:grid-cols-8 gap-16">
            <div className="col-span-1 sm:col-span-2 md:col-span-3 flex flex-col items-start justify-start">
              <h2 className="mb-4 text-lg font-bold uppercase text-dark/75 dark:text-light">
                About Me
              </h2>
              <p className="font-medium">
                Hi, I’m Naveen Duhan, a Bioinformatician with a passion for
                deciphering complex biological data and transforming it into
                meaningful insights. With years of experience in computational
                biology and data analysis, I am always exploring innovative
                approaches to bridge biology and technology. My expertise lies
                in genomics, data science, and bioinformatics tools, and I am
                committed to leveraging these skills to drive scientific
                discovery and innovation.
              </p>
              <p className="my-4 font-medium">
                I believe bioinformatics is more than just analyzing data—it’s
                about solving biological mysteries and driving scientific
                discoveries through computational methods. I am dedicated to
                pushing the boundaries of what is possible in bioinformatics and
                am excited to collaborate with other researchers and scientists
                to advance our understanding of the natural world.
              </p>
              <p className="font-medium">
                Whether working on genomics, transcriptomics, or other
                biological datasets, I bring my expertise in data science,
                machine learning, and bioinformatics tools to every project. I
                am passionate about using computational methods to uncover
                hidden patterns in biological data and am always looking for new
                ways to apply my skills to real-world problems.
              </p>
            </div>

            {/* Image Section */}
            <div className="col-span-1 sm:col-span-2 md:col-span-3 relative h-max rounded-2xl border-2 border-solid border-dark bg-light p-8">
              <div className="absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark" />
              <Image
                src="/images/profile/nav1.jpg"
                alt="logonav"
                width={500}
                height={500}
                className="w-full h-auto rounded-2xl"
              />
            </div>

            {/* Stats Section */}
            <div className="col-span-1 sm:col-span-2 md:col-span-2 flex flex-col items-center sm:items-end justify-between">
              <div className="flex flex-col items-center sm:items-end justify-center">
                <span className="inline-block text-7xl font-bold">
                  <AnimatedNumbers value={200} />+
                </span>
                <h2 className="text-xl font-medium capitalize text-dark/75 dark:text-light/75">
                  Research Citations
                </h2>
              </div>
              <div className="flex flex-col items-center sm:items-end justify-center">
                <span className="inline-block text-7xl font-bold">
                  <AnimatedNumbers value={15} />+
                </span>
                <h2 className="text-xl font-medium capitalize text-dark/75  dark:text-light/75">
                  Webserver Developed
                </h2>
              </div>
              <div className="flex flex-col items-center sm:items-end justify-center">
                <span className="inline-block text-7xl font-bold">
                  <AnimatedNumbers value={15} />+
                </span>
                <h2 className="text-xl font-medium capitalize text-dark/75  dark:text-light/75">
                  Year of Experience
                </h2>
              </div>
            </div>
          </div>

          <Experience />
          <Education />
          <AwardsSection />
        </Layout>
      </main>
    </>
  );
};

export default About;