'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

const countries = [
  {
    name: 'Europe',
    highlightWord: 'Mountains',
    description: 'Chase the magic of Europe\'s mountains and discover the wonders that lie beyond – vibrant cities, serene lakes, and stories carved in stone and snow.',
    backgroundImage: '/resources/heroSection/europe.jpg',
    highlight: 'Europe\'s'
  },
  {
    name: 'Norway',
    highlightWord: 'Fjords',
    description: 'Experience the breathtaking fjords and northern lights of Norway – where dramatic landscapes meet pristine wilderness.',
    backgroundImage: '/resources/heroSection/norway.jpg',
    highlight: 'Norway'
  },
  {
    name: 'Finland',
    highlightWord: 'Aurora',
    description: 'Discover Finland\'s magical winter wonderland and endless summer nights – a land of pristine nature and unique experiences.',
    backgroundImage: '/resources/heroSection/finland.jpg',
    highlight: 'Finland'
  },
  {
    name: 'Iceland',
    highlightWord: 'Volcanoes',
    description: 'Explore Iceland\'s otherworldly landscapes – from powerful waterfalls to geothermal wonders and the dancing aurora.',
    backgroundImage: '/resources/heroSection/iceland.jpg',
    highlight: 'Iceland'
  },
  {
    name: 'Bali',
    highlightWord: 'Temples',
    description: 'Immerse yourself in Bali\'s tropical paradise – ancient temples, lush rice terraces, and pristine beaches await.',
    backgroundImage: '/resources/heroSection/bali.jpg',
    highlight: 'Bali'
  },
  {
    name: 'Thailand',
    highlightWord: 'Islands',
    description: 'Discover Thailand\'s vibrant culture and stunning landscapes – from bustling cities to tranquil islands and ancient temples.',
    backgroundImage: '/resources/heroSection/thailand.jpg',
    highlight: 'Thailand'
  },
  {
    name: 'Vietnam',
    highlightWord: 'Culture',
    description: 'Journey through Vietnam\'s rich history and natural beauty – from bustling cities to serene countryside and stunning coastlines.',
    backgroundImage: '/resources/heroSection/vietnam.jpg',
    highlight: 'Vietnam'
  },
  {
    name: 'Japan',
    highlightWord: 'Cherry Blossoms',
    description: 'Experience Japan\'s perfect blend of ancient tradition and modern innovation – from cherry blossoms to bustling metropolises.',
    backgroundImage: '/resources/heroSection/japan.jpg',
    highlight: 'Japan'
  },
  {
    name: 'New Zealand',
    highlightWord: 'Adventure',
    description: 'Adventure awaits in New Zealand\'s dramatic landscapes – from snow-capped mountains to pristine beaches and lush forests.',
    backgroundImage: '/resources/heroSection/europe.jpg',
    highlight: 'New Zealand'
  }
];

export default function HeroSection() {
  const [currentCountryIndex, setCurrentCountryIndex] = useState(0);

  const currentCountry = countries[currentCountryIndex];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentCountryIndex((prevIndex) => 
        (prevIndex + 1) % countries.length
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative h-screen overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${currentCountry.backgroundImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        {/* Subtle overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/50"></div>
      </div>

      {/* Navigation Bar */}
      <nav className="relative z-10 mt-6">
        <div className="w-[95%] sm:w-[90%] md:w-[85%] lg:w-[80%] mx-auto bg-white bg-opacity-90 backdrop-blur-sm rounded-full px-3 sm:px-4 py-2">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center">
              <img 
                src="/tripzholidays_icon.svg" 
                alt="Tripz Holidays Logo" 
                className="w-12 h-12"
              />
            </div>

            {/* Right Side Items */}
            <div className="flex items-center space-x-2 sm:space-x-4 lg:space-x-6">
              {/* Navigation Links */}
              <div className="hidden lg:flex items-center space-x-4 xl:space-x-6">
                <a href="#" className="text-gray-700 hover:text-gray-900 font-medium text-sm xl:text-base">Home</a>
                <a href="#" className="text-gray-700 hover:text-gray-900 font-medium text-sm xl:text-base">Destination</a>
                <a href="#" className="text-gray-700 hover:text-gray-900 font-medium text-sm xl:text-base">About</a>
                <a href="#" className="text-gray-700 hover:text-gray-900 font-medium text-sm xl:text-base">Blog</a>
                <a href="#" className="text-gray-700 hover:text-gray-900 font-medium text-sm xl:text-base">Contact</a>
              </div>
              
              {/* WhatsApp Icon */}
              <div className="w-8 h-8 sm:w-10 sm:h-10 bg-green-500 rounded-full flex items-center justify-center">
                <svg className="w-4 h-4 sm:w-5 sm:h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                </svg>
              </div>
              
              {/* Book Now Button */}
              <button className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 sm:px-6 sm:py-3 rounded-full font-medium transition-colors text-sm sm:text-base">
                BOOK NOW
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Content */}
      <div className="relative z-10 flex items-center justify-center h-full pt-16">
        <div className="text-center text-white max-w-4xl mx-auto px-4">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentCountryIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-2xl md:text-3xl font-bold mb-4 leading-tight px-4 whitespace-nowrap">
                Explore The Land of{' '}
                <motion.span 
                  className="text-4xl md:text-5xl text-white"
                  initial={{ scale: 0.8 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  {currentCountry.highlightWord}
                </motion.span>
              </h1>
              
              <motion.p 
                className="text-sm md:text-base mb-8 leading-relaxed text-white min-h-[4rem] flex items-center justify-center px-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <span className="max-w-3xl">
                  {currentCountry.description.split(currentCountry.highlight).map((part, index) => (
                    <span key={index}>
                      {part}
                      {index < currentCountry.description.split(currentCountry.highlight).length - 1 && (
                        <span className="text-white font-semibold">{currentCountry.highlight}</span>
                      )}
                    </span>
                  ))}
                </span>
              </motion.p>
            </motion.div>
          </AnimatePresence>

          <motion.div 
            className="flex items-center justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <motion.button 
              className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-full text-base font-semibold shadow-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.2 }}
            >
              Discover {currentCountry.name}
            </motion.button>
          </motion.div>
        </div>
      </div>

      {/* Pagination Dots */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="flex space-x-1">
          {countries.map((_, index) => (
            <div
              key={index}
              className={`w-1 h-1 rounded-full transition-all duration-300 ${
                index === currentCountryIndex
                  ? 'bg-orange-500'
                  : 'bg-white bg-opacity-50'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
