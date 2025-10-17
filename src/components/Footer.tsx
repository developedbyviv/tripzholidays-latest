'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function Footer() {
  return (
    <motion.footer
      className="text-white relative pt-20 pb-10 px-4 sm:px-6 lg:px-8"
      style={{ backgroundColor: '#FF741F' }}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      {/* Central Logo */}
      <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 z-10">
        <motion.div
          className="w-32 h-32 rounded-full flex items-center justify-center shadow-lg border-4"
          style={{ backgroundColor: 'white', borderColor: '#FF741F' }}
          initial={{ scale: 0, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <img 
            src="/tripzholidays_icon.svg" 
            alt="Tripz Holidays Logo" 
                className="w-32 h-32"
          />
        </motion.div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Footer Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
          {/* Column 1: About Tripz Holidays */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-bold mb-4">About Tripz Holidays</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-orange-200 transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-orange-200 transition-colors">Tripz Holidays Reviews</a></li>
              <li><a href="#" className="hover:text-orange-200 transition-colors">Term & conditions</a></li>
              <li><a href="#" className="hover:text-orange-200 transition-colors">Copyright policies</a></li>
              <li><a href="#" className="hover:text-orange-200 transition-colors">Privacy Policies</a></li>
              <li><a href="#" className="hover:text-orange-200 transition-colors">Support</a></li>
              <li><a href="#" className="hover:text-orange-200 transition-colors">Blog</a></li>
            </ul>
          </motion.div>

          {/* Column 2: For Brands */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-bold mb-4">For Brands</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-orange-200 transition-colors">Partner with us</a></li>
              <li><a href="#" className="hover:text-orange-200 transition-colors">Destination Marketing</a></li>
              <li><a href="#" className="hover:text-orange-200 transition-colors">Website Promotionals</a></li>
            </ul>
          </motion.div>

          {/* Column 3: For Travellers */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-bold mb-4">For Travellers</h3>
            <p className="text-sm leading-relaxed">
              We're crafting unforgettable travel experiences that will take you to the most beautiful destinations around the world.
            </p>
          </motion.div>

          {/* Column 4: International Trips */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-bold mb-4">International Trips</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-orange-200 transition-colors">Europe</a></li>
              <li><a href="#" className="hover:text-orange-200 transition-colors">Norway</a></li>
              <li><a href="#" className="hover:text-orange-200 transition-colors">Finland</a></li>
              <li><a href="#" className="hover:text-orange-200 transition-colors">Bali</a></li>
              <li><a href="#" className="hover:text-orange-200 transition-colors">Thailand</a></li>
              <li><a href="#" className="hover:text-orange-200 transition-colors">Vietnam</a></li>
              <li><a href="#" className="hover:text-orange-200 transition-colors">Japan</a></li>
              <li><a href="#" className="hover:text-orange-200 transition-colors">New Zealand</a></li>
            </ul>
          </motion.div>
        </div>

        {/* Social Media Icons */}
        <motion.div
          className="flex justify-center space-x-4 mb-8"
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <a href="#" className="w-12 h-12 bg-white border-2 rounded-full flex items-center justify-center hover:bg-orange-100 transition-colors" style={{ borderColor: '#FF741F' }}>
            <img src="/resources/icons/facebook.svg" alt="Facebook" className="w-6 h-6" style={{ filter: 'invert(1)' }} />
          </a>
          <a href="#" className="w-12 h-12 bg-white border-2 rounded-full flex items-center justify-center hover:bg-orange-100 transition-colors" style={{ borderColor: '#FF741F' }}>
            <img src="/resources/icons/x.svg" alt="X" className="w-6 h-6" style={{ filter: 'invert(1)' }} />
          </a>
          <a href="#" className="w-12 h-12 bg-white border-2 rounded-full flex items-center justify-center hover:bg-orange-100 transition-colors" style={{ borderColor: '#FF741F' }}>
            <img src="/resources/icons/insta.svg" alt="Instagram" className="w-6 h-6" style={{ filter: 'invert(1)' }} />
          </a>
          <a href="#" className="w-12 h-12 bg-white border-2 rounded-full flex items-center justify-center hover:bg-orange-100 transition-colors" style={{ borderColor: '#FF741F' }}>
            <img src="/resources/icons/youtube.svg" alt="YouTube" className="w-6 h-6" style={{ filter: 'invert(1)' }} />
          </a>
          <a href="#" className="w-12 h-12 bg-white border-2 rounded-full flex items-center justify-center hover:bg-orange-100 transition-colors" style={{ borderColor: '#FF741F' }}>
            <img src="/resources/icons/linkedin.svg" alt="LinkedIn" className="w-6 h-6" style={{ filter: 'invert(1)' }} />
          </a>
        </motion.div>

        {/* Divider Line */}
        <div className="border-t border-white mb-8"></div>

        {/* Middle Section - Company Info */}
        <motion.div
          className="text-center mb-8"
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-4">TRIPZ HOLIDAYS</h2>
              <p className="text-sm mb-6 max-w-2xl mx-auto">
                We're passionate about creating extraordinary travel experiences that leave lasting memories. 
                From the Northern Lights to tropical beaches, we make your travel dreams come true with 
                personalized itineraries and exceptional service.
              </p>
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-2 sm:space-y-0 sm:space-x-8 text-sm">
            <a href="#" className="hover:text-orange-200 transition-colors">info@tripzholidays.com</a>
            <a href="#" className="hover:text-orange-200 transition-colors">+91 98765 43210</a>
            <a href="#" className="hover:text-orange-200 transition-colors">www.tripzholidays.com</a>
          </div>
        </motion.div>

        {/* Divider Line */}
        <div className="border-t border-white mb-8"></div>

        {/* Bottom Section - Copyright */}
        <motion.div
          className="text-center text-sm pb-8"
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          viewport={{ once: true }}
        >
          <p className="mb-2">© Tripz Holidays, All rights reserved</p>
          <p>Designed and developed by Monkova Technologies</p>
        </motion.div>
      </div>
    </motion.footer>
  );
}
