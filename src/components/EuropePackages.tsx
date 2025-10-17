'use client';

import React from 'react';
import PackageCard from './PackageCard';

const packages = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&h=1080&fit=crop',
    discount: '20% Off',
    duration: 7,
    nights: 6,
    title: 'European Grand Tour | Paris, Rome & Barcelona',
    originalPrice: 'INR 2,89,900',
    discountedPrice: 'INR 2,31,000',
    rating: '4.8',
    reviews: '(156)',
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&h=1080&fit=crop',
    discount: '15% Off',
    duration: 5,
    nights: 4,
    title: 'Swiss Alps Adventure | Zurich to Interlaken',
    originalPrice: 'INR 2,45,900',
    discountedPrice: 'INR 2,08,000',
    rating: '4.9',
    reviews: '(89)',
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&h=1080&fit=crop',
    discount: '18% Off',
    duration: 8,
    nights: 7,
    title: 'Eastern Europe Explorer | Prague, Budapest & Vienna',
    originalPrice: 'INR 2,65,900',
    discountedPrice: 'INR 2,17,000',
    rating: '4.7',
    reviews: '(124)',
  },
];

export default function EuropePackages() {
  const handleViewAll = () => {
    alert('View all Europe packages!');
  };

  const handleViewItinerary = (id: number) => {
    alert(`View itinerary for Europe package ${id}`);
  };

  const handleCall = (id: number) => {
    alert(`Call us for Europe package ${id}\nPhone: +91-9876543210`);
  };

  return (
    <div className="bg-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900">Europe</h2>
          <button 
            className="flex items-center space-x-2 text-black font-medium hover:text-orange-500 transition-colors duration-300 cursor-pointer transform hover:scale-105 active:scale-95"
            onClick={handleViewAll}
          >
            <span>View all</span>
            <img src="/resources/icons/view all arrow.svg" alt="Arrow" className="w-5 h-5" />
          </button>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 -gap-1">
          {packages.map((pkg) => (
            <PackageCard
              key={pkg.id}
              package={pkg}
              tags="3D Lorem Ipsum design 4D Lorem Ipsum design"
              onViewItinerary={handleViewItinerary}
              onCall={handleCall}
            />
          ))}
        </div>
      </div>
    </div>
  );
}