'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function AboutUsSection() {
  return (
    <motion.div
      className="bg-white py-16 px-4 sm:px-6 lg:px-8"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <div className="max-w-6xl mx-auto">
        {/* Title */}
        <motion.h2
          className="text-3xl md:text-4xl lg:text-5xl font-bold mb-12"
          style={{ color: '#FF741F' }}
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          About us
        </motion.h2>

        {/* Content Area */}
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
          {/* Left Column - Text */}
          <motion.div
            className="flex-1 lg:w-2/3"
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <p className="text-gray-800 text-base md:text-lg leading-relaxed">
              At Tripz Holidays, we believe that travel has the power to transform lives, create lasting memories, and connect people across cultures. Founded with a passion for exploration and a commitment to exceptional service, we've been crafting unforgettable journeys for travelers worldwide.
              <br /><br />
              Our team of experienced travel experts works tirelessly to curate unique experiences that go beyond typical tourist destinations. We specialize in creating personalized itineraries that blend adventure, culture, and relaxation, ensuring every trip is tailored to your dreams and preferences.
              <br /><br />
              From the mystical Northern Lights of Scandinavia to the vibrant cultures of Southeast Asia, from the pristine landscapes of New Zealand to the historic charm of Europe, we bring you closer to the world's most incredible destinations. With over 100+ destinations across 25+ countries, we're your gateway to extraordinary adventures.
            </p>
          </motion.div>

          {/* Right Column - Image */}
          <motion.div
            className="flex-1 lg:w-1/3"
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="rounded-lg h-96 lg:h-full min-h-96 overflow-hidden">
              <img
                src="/resources/heroSection/europe.jpg"
                alt="About Us - Travel Experience"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}
