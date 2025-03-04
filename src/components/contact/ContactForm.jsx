// components/contact/ContactForm.jsx
'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiMail, FiUser, FiMessageSquare, FiCheck, FiLoader, FiEdit3 } from 'react-icons/fi';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import emailjs from '@emailjs/browser';
import { analyticsEvents } from '@/utils/analytics';

// Validation Schema
const schema = yup.object().shape({
  fullName: yup.string().required('Full name is required').min(2, 'Name too short').matches(/^[A-Za-z\s]+$/, 'Only alphabets allowed'),
  email: yup.string().required('Email is required').email('Invalid email format'),
  subject: yup.string().required('Subject is required').min(3, 'Subject too short'),
  message: yup.string().required('Message is required').min(10, 'Message too short').max(500, 'Message too long'),
});

const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const { register, handleSubmit, formState: { errors }, watch, reset } = useForm({
    resolver: yupResolver(schema),
  });

  const messageLength = watch("message")?.length || 0;

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    try {
      // Check if all required environment variables are present
      const requiredEnvVars = [
        'NEXT_PUBLIC_EMAILJS_SERVICE_ID',
        'NEXT_PUBLIC_EMAILJS_TEMPLATE_ID',
        'NEXT_PUBLIC_EMAILJS_PUBLIC_KEY',
        'NEXT_PUBLIC_EMAILJS_RECIPIENT_EMAIL'
      ];

      const missingVars = requiredEnvVars.filter(varName => !process.env[varName]);
      if (missingVars.length > 0) {
        throw new Error(`Missing required environment variables: ${missingVars.join(', ')}`);
      }

      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        {
          byname: data.fullName,
          from_name: data.email,
          to_name: process.env.NEXT_PUBLIC_EMAILJS_RECIPIENT_EMAIL,
          subject: data.subject,
          message_html: data.message,
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
      );

      setIsSuccess(true);
      reset();
      analyticsEvents.sendMessage(); // Track successful message send
      setTimeout(() => setIsSuccess(false), 5000);
    } catch (error) {
      console.error("Email send error:", error);
      // You might want to show an error message to the user here
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.4 }}
      className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 md:p-8 border border-gray-200 dark:border-gray-700 h-full"
    >
      <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-6">
        Send Me a Message
      </h2>

      {isSuccess && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-6 p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-900 rounded-lg text-green-700 dark:text-green-400"
        >
          <div className="flex items-center">
            <FiCheck className="mr-2" />
            <span>Message sent successfully! I'll get back to you soon.</span>
          </div>
        </motion.div>
      )}

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
        {/* Full Name */}
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Full Name</label>
          <div className="flex items-center space-x-2 bg-gray-50 dark:bg-gray-700/50 rounded-lg overflow-hidden border border-gray-200 dark:border-gray-700 focus-within:ring-2 focus-within:ring-blue-500">
            <div className="pl-3">
              <FiUser className="text-gray-400" />
            </div>
            <input
              {...register("fullName")}
              type="text"
              placeholder="Your name"
              className="w-full p-3 bg-transparent focus:outline-none dark:text-white"
            />
          </div>
          {errors.fullName && <p className="text-red-500 text-sm mt-1">{errors.fullName.message}</p>}
        </div>

        {/* Email */}
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Email Address</label>
          <div className="flex items-center space-x-2 bg-gray-50 dark:bg-gray-700/50 rounded-lg overflow-hidden border border-gray-200 dark:border-gray-700 focus-within:ring-2 focus-within:ring-blue-500">
            <div className="pl-3">
              <FiMail className="text-gray-400" />
            </div>
            <input
              {...register("email")}
              type="email"
              placeholder="your.email@example.com"
              className="w-full p-3 bg-transparent focus:outline-none dark:text-white"
            />
          </div>
          {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
        </div>

        {/* Subject */}
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Subject</label>
          <div className="flex items-center space-x-2 bg-gray-50 dark:bg-gray-700/50 rounded-lg overflow-hidden border border-gray-200 dark:border-gray-700 focus-within:ring-2 focus-within:ring-blue-500">
            <div className="pl-3">
              <FiEdit3 className="text-gray-400" />
            </div>
            <input
              {...register("subject")}
              type="text"
              placeholder="What is this regarding?"
              className="w-full p-3 bg-transparent focus:outline-none dark:text-white"
            />
          </div>
          {errors.subject && <p className="text-red-500 text-sm mt-1">{errors.subject.message}</p>}
        </div>

        {/* Message */}
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Message</label>
          <div className="flex bg-gray-50 dark:bg-gray-700/50 rounded-lg overflow-hidden border border-gray-200 dark:border-gray-700 focus-within:ring-2 focus-within:ring-blue-500">
            <div className="pl-3 pt-3">
              <FiMessageSquare className="text-gray-400" />
            </div>
            <div className="flex-1">
              <textarea
                {...register("message")}
                placeholder="Your message here..."
                rows="5"
                className="w-full p-3 bg-transparent focus:outline-none dark:text-white"
              />
            </div>
          </div>
          <div className="flex justify-end text-sm text-gray-500 mt-1">{messageLength}/500</div>
          {errors.message && <p className="text-red-500 text-sm">{errors.message.message}</p>}
        </div>

        {/* Submit Button */}
        <motion.button
          type="submit"
          disabled={isSubmitting}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="w-full py-3 rounded-lg bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold flex items-center justify-center space-x-2 hover:from-blue-700 hover:to-indigo-700 transition-all disabled:opacity-70"
        >
          {isSubmitting ? (
            <>
              <FiLoader className="animate-spin" />
              <span>Sending...</span>
            </>
          ) : (
            <>
              <FiMail />
              <span>Send Message</span>
            </>
          )}
        </motion.button>
      </form>
    </motion.div>
  );
};

export default ContactForm;
