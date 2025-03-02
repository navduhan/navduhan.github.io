"use client"
import React from "react";
import Head from "next/head";
import Layout from "@/components/Layout";
import ContactForm from "@/components/ContactForm";
import AnimatedText from "@/components/AnimatedText";



export default function Contact() {
  return (
    <>
      <Head>
        <title>Naveen Duhan | Contact Page</title>
        <meta
          name="description"
          content="Naveen Duhan's Bioinformatician Website"
        />
      </Head>

      <main className="flex w-full flex-col items-center justify-center dark:text-light">
        <Layout className="pt-6">
        <AnimatedText text="Together, We Can Solve the Complex Problems of Tomorrow!" className="mb-16 text-5xl" />
          <div className="flex w-full max-w-7xl space-x-8">
            {/* Left Section (Collaboration Text) */}
            <div className="w-full md:w-1/2">
              <section className="max-w-4xl mx-auto p-6 rounded-lg ">
                <h2 className="text-2xl font-bold text-center text-gray-800 dark:text-gray-100 mb-6">
                  Collaborate with Me
                </h2>
                <p className="text-left text-gray-600 dark:text-gray-200 mb-6">
                  As a bioinformatician, I am always eager to collaborate with
                  researchers, scientists, and innovators who are passionate about
                  pushing the boundaries of knowledge in biology and data science.
                  Whether you’re working on groundbreaking research, developing
                  new tools, or need expertise in analyzing large biological
                  datasets, I’m here to help.
                </p>
                <p className="text-left text-gray-600  dark:text-gray-200 mb-6">
                  I specialize in combining computational techniques with
                  biological insights to solve complex problems in genomics,
                  proteomics, and other omics fields. My areas of expertise
                  include data analysis, algorithm development, and workflow
                  optimization, and I use cutting-edge technologies to transform
                  data into meaningful results.
                </p>
                <p className="text-left text-gray-600  dark:text-gray-200 mb-6">
                  If you have a project, an idea for collaboration, or if you
                  simply want to exchange ideas, please don’t hesitate to reach
                  out. Together, we can make a significant impact in the world of
                  bioinformatics and beyond!
                </p>
                <p className="text-left text-gray-600  dark:text-gray-200">
                  Feel free to get in touch with me via the contact form or
                  directly through email, and let’s explore the possibilities.
                </p>
              </section>
            </div>

            {/* Right Section (Contact Form) */}
            <div className="w-full md:w-1/2">
              <ContactForm />
            </div>
          </div>
        </Layout>
      </main>
    </>
  );
}