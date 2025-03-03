// app/contact/page.jsx
'use client';

import React from 'react';
import Head from 'next/head';
import Layout from '@/components/Layout';
import { motion } from 'framer-motion';
import ContactOverview from '@/components/contact/ContactOverview';
import ContactForm from '@/components/contact/ContactForm';
import ContactInfo from '@/components/contact/ContactInfo';

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
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-5xl font-bold text-center mb-8 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
          >
            Let's Connect and Collaborate
          </motion.h1>
          
          {/* Contact Overview Card */}
          <ContactOverview />

          {/* Contact Form and Additional Info */}
          <div className="flex flex-col md:flex-row w-full gap-6">
            {/* Left Section (Contact Form) */}
            <div className="w-full md:w-2/3">
              <ContactForm />
            </div>

            {/* Right Section (Contact Info) */}
            <div className="w-full md:w-1/3">
              <ContactInfo />
            </div>
          </div>
        </Layout>
      </main>
    </>
  );
}
