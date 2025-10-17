'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function ValuePropositionsSection() {
  return (
    <motion.div
      className="bg-white py-16 px-4 sm:px-6 lg:px-8"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <div className="max-w-6xl mx-auto">
        {/* Top Border Line */}
        <div className="border-t-2 border-black mb-8"></div>
        
        {/* Value Propositions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* 100+ Destinations */}
          <motion.div
            className="text-center md:text-left"
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl md:text-2xl font-bold text-black mb-3">
              100+ Destinations
            </h3>
            <p className="text-black text-sm md:text-base leading-relaxed">
              Discover the world, one dream escape at a time.
            </p>
          </motion.div>

          {/* Vertical Separator */}
          <div className="hidden md:block absolute left-1/3 top-0 bottom-0 w-0.5 bg-black"></div>
          <div className="hidden md:block absolute right-1/3 top-0 bottom-0 w-0.5 bg-black"></div>

          {/* Affordable Adventures */}
          <motion.div
            className="text-center md:text-left"
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl md:text-2xl font-bold text-black mb-3">
              Affordable Adventures
            </h3>
            <p className="text-black text-sm md:text-base leading-relaxed">
              Experience the world without breaking your budget.
            </p>
          </motion.div>

          {/* Safe & Trusted Travel */}
          <motion.div
            className="text-center md:text-left"
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl md:text-2xl font-bold text-black mb-3">
              Safe & Trusted Travel
            </h3>
            <p className="text-black text-sm md:text-base leading-relaxed">
              Book with confidence and explore with peace of mind.
            </p>
          </motion.div>
        </div>

        {/* Bottom Border Line */}
        <div className="border-t-2 border-black mt-8"></div>
      </div>
    </motion.div>
  );
}
