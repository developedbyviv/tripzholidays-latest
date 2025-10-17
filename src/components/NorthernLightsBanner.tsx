'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function NorthernLightsBanner() {
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
        
        {/* Promotional Image */}
        <motion.div
          className="relative overflow-hidden rounded-2xl"
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <img
            src="https://images.unsplash.com/photo-1531366936337-7c912a4589a7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
            alt="Northern Lights"
            className="w-full h-96 lg:h-[500px] object-cover rounded-2xl"
          />
        </motion.div>

        {/* Bottom Border Line */}
        <div className="border-t-2 border-black mt-8"></div>
      </div>
    </motion.div>
  );
}
