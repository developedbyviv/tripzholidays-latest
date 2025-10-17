'use client';

import { useState } from 'react';

const destinations = [
  {
    name: 'Europe',
    price: '1,49,999',
    image: '/resources/heroSection/europe.jpg'
  },
  {
    name: 'Vietnam',
    price: '59,999',
    image: '/resources/heroSection/vietnam.jpg'
  },
  {
    name: 'Japan',
    price: '1,29,999',
    image: '/resources/heroSection/japan.jpg'
  },
  {
    name: 'Thailand',
    price: '44,999',
    image: '/resources/heroSection/thailand.jpg'
  },
  {
    name: 'Norway',
    price: '1,89,999',
    image: '/resources/heroSection/norway.jpg'
  },
  {
    name: 'Finland',
    price: '1,39,999',
    image: '/resources/heroSection/finland.jpg'
  },
  {
    name: 'Iceland',
    price: '1,99,999',
    image: '/resources/heroSection/iceland.jpg'
  },
  {
    name: 'Bali',
    price: '39,999',
    image: '/resources/heroSection/bali.jpg'
  }
];

export default function DestinationCards() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const scrollLeft = () => {
    setCurrentIndex((prev) => Math.max(0, prev - 1));
  };

  const scrollRight = () => {
    setCurrentIndex((prev) => Math.min(destinations.length - 4, prev + 1));
  };

  return (
    <div className="bg-white py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Cards Container */}
        <div className="relative">
          {/* Scroll Left Button */}
          {currentIndex > 0 && (
            <button
              onClick={scrollLeft}
              className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-shadow"
            >
              <svg className="w-6 h-6 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
          )}

          {/* Cards */}
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-300 ease-in-out"
              style={{ 
                transform: `translateX(-${currentIndex * 12.5}%)`,
                width: '200%'
              }}
            >
              {destinations.map((destination, index) => (
                <div key={index} style={{ width: '12.5%', flexShrink: 0 }}>
                  <div className="relative h-96 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 mx-1">
                    {/* Background Image */}
                    <div 
                      className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                      style={{
                        backgroundImage: `url(${destination.image})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat'
                      }}
                    >
                      {/* Gradient Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                    </div>

                    {/* Content */}
                    <div className="absolute inset-0 flex flex-col justify-end p-6">
                      {/* Price */}
                      <div className="text-white text-sm font-medium mb-2 text-center">
                        Starting RS.{destination.price}/-
                      </div>
                      
                      {/* Country Name */}
                      <div className="text-white text-2xl font-bold mb-4 text-center">
                        {destination.name}
                      </div>
                      
                      {/* Plan a Trip Button */}
                      <button className="bg-white/20 backdrop-blur-sm border border-white/30 rounded-full px-4 py-3 flex items-center justify-center space-x-2 hover:bg-white/30 transition-colors duration-300">
                        <span className="text-white font-medium">Plan a trip</span>
                        <img src="/resources/icons/ICON.svg" alt="Arrow" className="w-6 h-6" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Scroll Right Button */}
          {currentIndex < destinations.length - 4 && (
            <button
              onClick={scrollRight}
              className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-shadow"
            >
              <svg className="w-6 h-6 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          )}
        </div>
      </div>
    </div>
  );
}