'use client';

import React from 'react';
import { motion } from 'framer-motion';

const features = [
  {
    id: 1,
    title: 'All In-House, No Third Parties',
    description: 'Every trip is managed completely by our own team — no middlemen, no confusion, just smooth experiences you can trust.',
    icon: '/resources/icons/third-party 1.svg',
  },
  {
    id: 2,
    title: 'Transparency & Safety First',
    description: 'Stay worry-free with real-time trip monitoring by our ground experts. Every route, stop, and weather update is tracked with care.',
    icon: '/resources/icons/transparency 1.svg',
  },
  {
    id: 3,
    title: 'Like-Minded Travelers, Perfect Trips',
    description: 'We thoughtfully match co-travelers to ensure good vibes, easy bonding, and unforgettable adventures together',
    icon: '/resources/icons/funnel.svg',
  },
  {
    id: 4,
    title: 'Seamless, Hassle-Free Journeys',
    description: 'From comfy stays to expert guides — we handle everything so you can simply relax and enjoy the ride.',
    icon: '/resources/icons/mynaui_badge-solid.svg',
  },
];

export default function WhyTripzSection() {
  return (
    <motion.div 
      className="bg-white py-16 px-4 sm:px-6 lg:px-8"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div 
          className="text-center mb-12"
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <motion.h2 
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900"
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            Why Trip<span className="text-orange-500">z</span> Holidays?
          </motion.h2>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {features.map((feature, index) => (
            <motion.div 
              key={feature.id}
              className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg p-6 text-center relative overflow-hidden"
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ 
                duration: 0.6, 
                delay: 0.2 + (index * 0.1),
                ease: "easeOut"
              }}
              viewport={{ once: true }}
              whileHover={{ 
                scale: 1.05,
                transition: { duration: 0.2 }
              }}
            >
              {/* Bottom Circle Overlay */}
              <div className="absolute -bottom-40 left-1/2 transform -translate-x-1/2 w-64 h-64 bg-white rounded-full opacity-20"></div>
              
              {/* Subtle gradient overlay at bottom */}
              <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-orange-600/20 to-transparent pointer-events-none"></div>
              
              {/* Content */}
              <div className="relative z-10 flex flex-col h-full">
                {/* Title */}
                <motion.h3 
                  className="text-white font-bold text-lg mb-4 leading-tight"
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.4 + (index * 0.1) }}
                  viewport={{ once: true }}
                >
                  {feature.title}
                </motion.h3>
                
                {/* Description */}
                <motion.p 
                  className="text-white text-sm mb-6 leading-relaxed flex-grow"
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.6 + (index * 0.1) }}
                  viewport={{ once: true }}
                >
                  {feature.description}
                </motion.p>
                
                {/* Icon */}
                <motion.div 
                  className="flex justify-center mt-auto"
                  initial={{ scale: 0, rotate: -180 }}
                  whileInView={{ scale: 1, rotate: 0 }}
                  transition={{ 
                    duration: 0.6, 
                    delay: 0.8 + (index * 0.1),
                    ease: "easeOut"
                  }}
                  viewport={{ once: true }}
                >
                  <img 
                    src={feature.icon} 
                    alt={feature.title} 
                    className="w-16 h-16 text-white"
                  />
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
