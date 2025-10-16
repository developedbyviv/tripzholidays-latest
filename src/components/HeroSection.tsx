'use client';

import { useState, useEffect } from 'react';

const countries = [
  {
    name: 'Europe',
    description: 'Chase the magic of Europe\'s mountains and discover the wonders that lie beyond – vibrant cities, serene lakes, and stories carved in stone and snow.',
    backgroundImage: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
    highlight: 'Europe\'s'
  },
  {
    name: 'Norway',
    description: 'Experience the breathtaking fjords and northern lights of Norway – where dramatic landscapes meet pristine wilderness.',
    backgroundImage: 'https://images.unsplash.com/photo-1518684079-3c830dcef090?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
    highlight: 'Norway'
  },
  {
    name: 'Finland',
    description: 'Discover Finland\'s magical winter wonderland and endless summer nights – a land of pristine nature and unique experiences.',
    backgroundImage: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
    highlight: 'Finland'
  },
  {
    name: 'Iceland',
    description: 'Explore Iceland\'s otherworldly landscapes – from powerful waterfalls to geothermal wonders and the dancing aurora.',
    backgroundImage: 'https://images.unsplash.com/photo-1539650116574-75c0c6d73c6e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
    highlight: 'Iceland'
  },
  {
    name: 'Bali',
    description: 'Immerse yourself in Bali\'s tropical paradise – ancient temples, lush rice terraces, and pristine beaches await.',
    backgroundImage: 'https://images.unsplash.com/photo-1537953773345-d172ccf13cf1?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
    highlight: 'Bali'
  },
  {
    name: 'Thailand',
    description: 'Discover Thailand\'s vibrant culture and stunning landscapes – from bustling cities to tranquil islands and ancient temples.',
    backgroundImage: 'https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
    highlight: 'Thailand'
  },
  {
    name: 'Vietnam',
    description: 'Journey through Vietnam\'s rich history and natural beauty – from bustling cities to serene countryside and stunning coastlines.',
    backgroundImage: 'https://images.unsplash.com/photo-1528127269322-539801943592?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
    highlight: 'Vietnam'
  },
  {
    name: 'Japan',
    description: 'Experience Japan\'s perfect blend of ancient tradition and modern innovation – from cherry blossoms to bustling metropolises.',
    backgroundImage: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
    highlight: 'Japan'
  },
  {
    name: 'New Zealand',
    description: 'Adventure awaits in New Zealand\'s dramatic landscapes – from snow-capped mountains to pristine beaches and lush forests.',
    backgroundImage: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
    highlight: 'New Zealand'
  }
];

export default function HeroSection() {
  const [currentCountryIndex, setCurrentCountryIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const currentCountry = countries[currentCountryIndex];

  useEffect(() => {
    const interval = setInterval(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentCountryIndex((prevIndex) => 
          (prevIndex + 1) % countries.length
        );
        setIsTransitioning(false);
      }, 300);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const handleCountrySelect = (index: number) => {
    if (index !== currentCountryIndex) {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentCountryIndex(index);
        setIsTransitioning(false);
      }, 300);
    }
  };

  return (
    <div className="relative h-screen overflow-hidden">
      {/* Background Image */}
      <div 
        className={`absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-500 ${
          isTransitioning ? 'opacity-50' : 'opacity-100'
        }`}
        style={{
          backgroundImage: `url(${currentCountry.backgroundImage})`
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      </div>

      {/* Navigation Bar */}
      <nav className="relative z-10 bg-white bg-opacity-90 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-green-500 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm">🌍</span>
              </div>
              <span className="text-xl font-bold text-gray-900">TRIPZ HOLIDAYS</span>
            </div>

            {/* Navigation Links */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#" className="text-gray-700 hover:text-gray-900 font-medium">Home</a>
              <a href="#" className="text-gray-700 hover:text-gray-900 font-medium">Destination</a>
              <a href="#" className="text-gray-700 hover:text-gray-900 font-medium">About</a>
              <a href="#" className="text-gray-700 hover:text-gray-900 font-medium">Blog</a>
              <a href="#" className="text-gray-700 hover:text-gray-900 font-medium">Contact</a>
            </div>

            {/* Action Items */}
            <div className="flex items-center space-x-4">
              <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center">
                <span className="text-white text-lg">📱</span>
              </div>
              <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-full font-medium transition-colors">
                BOOK NOW
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Content */}
      <div className="relative z-10 flex items-center justify-center h-full pt-16">
        <div className="text-center text-white max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Explore The Land of{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-green-400">
              {currentCountry.name}
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 leading-relaxed">
            {currentCountry.description.split(currentCountry.highlight).map((part, index) => (
              <span key={index}>
                {part}
                {index < currentCountry.description.split(currentCountry.highlight).length - 1 && (
                  <span className="text-blue-300 font-semibold">{currentCountry.highlight}</span>
                )}
              </span>
            ))}
          </p>

          <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-full text-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg">
            Discover {currentCountry.name}
          </button>
        </div>
      </div>

      {/* Country Carousel */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="flex space-x-4 bg-white bg-opacity-20 backdrop-blur-sm rounded-full px-6 py-3">
          {countries.map((country, index) => (
            <button
              key={country.name}
              onClick={() => handleCountrySelect(index)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                index === currentCountryIndex
                  ? 'bg-white text-gray-900 shadow-lg'
                  : 'text-white hover:bg-white hover:bg-opacity-20'
              }`}
            >
              {country.name}
            </button>
          ))}
        </div>
      </div>

      {/* Carousel Indicators */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-10">
        <div className="flex space-x-2">
          {countries.map((_, index) => (
            <button
              key={index}
              onClick={() => handleCountrySelect(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentCountryIndex
                  ? 'bg-white'
                  : 'bg-white bg-opacity-50 hover:bg-opacity-75'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
