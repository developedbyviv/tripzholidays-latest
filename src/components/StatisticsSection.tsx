'use client';

import React from 'react';
import { motion } from 'framer-motion';

const stats = [
  {
    id: 1,
    icon: '/resources/icons/smile.svg',
    number: '1000',
    description: 'Smiling Travelers',
  },
  {
    id: 2,
    icon: '/resources/icons/cup.svg',
    number: '500',
    description: 'Unforgettable Trips Completed',
  },
  {
    id: 3,
    icon: '/resources/icons/cert.svg',
    number: '100+',
    description: 'Passionate Travel Experts',
  },
  {
    id: 4,
    icon: '/resources/icons/route.svg',
    number: '1500+',
    description: 'Incredible Destinations',
  },
  {
    id: 5,
    icon: '/resources/icons/goal.svg',
    title: 'Our Goal',
    description: 'To be Bharat\'s Most Loved Travel Company',
  },
];

export default function StatisticsSection() {
  return (
    <motion.div 
      className="relative bg-gradient-to-r from-orange-500 to-orange-600 py-16 px-4 sm:px-6 lg:px-8 overflow-hidden"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      {/* World Map Background */}
      <motion.div 
        className="absolute inset-0 opacity-40"
        initial={{ scale: 1.1, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 0.4 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <img 
          src="/resources/icons/WORLD MAP.svg" 
          alt="World Map" 
          className="w-full h-full object-cover"
        />
      </motion.div>
      
      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <motion.div 
          className="text-center mb-12"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center justify-center mb-4">
            <motion.div 
              className="w-16 h-px bg-white"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            ></motion.div>
            <motion.span 
              className="mx-4 text-white text-lg font-medium"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
            >
              We craft journeys that
            </motion.span>
            <motion.div 
              className="w-16 h-px bg-white"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            ></motion.div>
          </div>
          <motion.h2 
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-white"
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            viewport={{ once: true }}
          >
            touch hearts and let you celebrate life!
          </motion.h2>
        </motion.div>

        {/* Statistics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {stats.map((stat, index) => (
            <motion.div 
              key={stat.id} 
              className="text-center"
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
              {/* Icon */}
              <motion.div 
                className="flex justify-center mb-4"
                initial={{ scale: 0, rotate: -180 }}
                whileInView={{ scale: 1, rotate: 0 }}
                transition={{ 
                  duration: 0.6, 
                  delay: 0.4 + (index * 0.1),
                  ease: "easeOut"
                }}
                viewport={{ once: true }}
              >
                <img 
                  src={stat.icon} 
                  alt={stat.description} 
                  className="w-12 h-12 text-white"
                />
              </motion.div>
              
              {/* Number/Title */}
              <motion.div 
                className="mb-2"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ 
                  duration: 0.5, 
                  delay: 0.6 + (index * 0.1),
                  ease: "easeOut"
                }}
                viewport={{ once: true }}
              >
                {stat.number ? (
                  <motion.div 
                    className="text-4xl md:text-5xl font-bold text-white"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ 
                      duration: 0.8, 
                      delay: 0.8 + (index * 0.1)
                    }}
                    viewport={{ once: true }}
                  >
                    {stat.number}
                  </motion.div>
                ) : (
                  <div className="text-2xl md:text-3xl font-bold text-white">
                    {stat.title}
                  </div>
                )}
              </motion.div>
              
              {/* Description */}
              <motion.div 
                className="text-white text-sm md:text-base font-medium leading-tight"
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ 
                  duration: 0.6, 
                  delay: 1.0 + (index * 0.1)
                }}
                viewport={{ once: true }}
              >
                {stat.description}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
