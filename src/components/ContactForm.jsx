"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import emailjs from '@emailjs/browser';
import { FiMail, FiUser, FiMessageSquare, FiCheck, FiLoader, FiEdit3 } from "react-icons/fi";

// Validation Schema
const schema = yup.object().shape({
  fullName: yup.string().required("Full name is required").min(2, "Name too short").matches(/^[A-Za-z\s]+$/, "Only alphabets allowed"),
  email: yup.string().required("Email is required").email("Invalid email format"),
  subject: yup.string().required("Subject is required").min(3, "Subject too short"),
  message: yup.string().required("Message is required").min(10, "Message too short").max(500, "Message too long"),
});

const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [modal, setModal] = useState(false);

  const { register, handleSubmit, formState: { errors }, watch, reset } = useForm({
    resolver: yupResolver(schema),
  });

  const messageLength = watch("message")?.length || 0;

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    try {
      await emailjs.send(
        "service_91cyez9",
        "template_r9beced",
        {
          byname: data.fullName,
          from_name: data.email,
          to_name: "duhan27dec@gmail.com",
          subject: data.subject,
          message_html: data.message,
        },
        "user_MLs1uJw23WgWZm9dgXE8c"
      );
      setModal(true);
      reset();
    } catch (error) {
      console.error("Email send error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="p-8 w-full  bg-white border-2 border-sky-300 hover:border-blue-700 rounded-lg shadow-lg"
      >
        <h2 className="text-2xl font-bold mb-4 text-center text-gray-800">
        Interested in collaborating? <br></br>Fill out the form below to start a conversation.
        </h2>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          {/* Full Name */}
          <div>
            <div className="flex items-center space-x-2">
              <FiUser className="text-gray-400" />
              <input
                {...register("fullName")}
                type="text"
                placeholder="Full Name"
                className={`w-full p-2 rounded border ${errors.fullName ? "border-red-500" : "border-gray-300"} focus:ring-2 focus:ring-blue-500`}
              />
            </div>
            {errors.fullName && <p className="text-red-500 text-sm mt-1">{errors.fullName.message}</p>}
          </div>

          {/* Email */}
          <div>
            <div className="flex items-center space-x-2">
              <FiMail className="text-gray-400" />
              <input
                {...register("email")}
                type="email"
                placeholder="Email Address"
                className={`w-full p-2 rounded border ${errors.email ? "border-red-500" : "border-gray-300"} focus:ring-2 focus:ring-blue-500`}
              />
            </div>
            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
          </div>

          {/* Subject */}
          <div>
            <div className="flex items-center space-x-2">
              <FiEdit3 className="text-gray-400" />
              <input
                {...register("subject")}
                type="text"
                placeholder="Subject"
                className={`w-full p-2 rounded border ${errors.subject ? "border-red-500" : "border-gray-300"} focus:ring-2 focus:ring-blue-500`}
              />
            </div>
            {errors.subject && <p className="text-red-500 text-sm mt-1">{errors.subject.message}</p>}
          </div>

          {/* Message */}
          <div>
            <div className="flex items-start space-x-2">
              <FiMessageSquare className="text-gray-400 mt-2" />
              <div className="flex-1">
                <textarea
                  {...register("message")}
                  placeholder="Your Message"
                  rows="4"
                  className={`w-full p-2 rounded border ${errors.message ? "border-red-500" : "border-gray-300"} focus:ring-2 focus:ring-blue-500`}
                />
                <div className="flex justify-end text-sm text-gray-500">{messageLength}/500</div>
              </div>
            </div>
            {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>}
          </div>

          {/* Submit Button */}
          <motion.button
            type="submit"
            disabled={isSubmitting}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className={`w-full py-2 rounded bg-gray-800 text-white font-semibold flex items-center justify-center
                 space-x-2 hover:bg-gray-100 hover:text-gray-900 border-2 border-solid border-transparent
                  hover:border-gray-900 dark:bg-gray-100 dark:text-gray-900 hover:dark:bg-gray-900 hover:dark:text-gray-100
                  hover:dark:border-gray-100" transition-colors ${isSubmitting ? "opacity-75 cursor-not-allowed" : ""}`}
          >
            {isSubmitting ? (
              <>
                <FiLoader className="animate-spin" />
                <span>Sending...</span>
              </>
            ) : (
              <>
                <FiCheck />
                <span>Send Message</span>
              </>
            )}
          </motion.button>
        </form>
      </motion.div>
    </>
  );
};

export default ContactForm;