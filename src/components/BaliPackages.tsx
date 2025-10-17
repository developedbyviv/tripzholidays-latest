'use client';

import React from 'react';
import PackageCard from './PackageCard';

const packages = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&h=1080&fit=crop',
    discount: '20% Off',
    duration: 5,
    nights: 4,
    title: 'Bali Paradise | Ubud, Seminyak & Nusa Penida',
    originalPrice: 'INR 1,45,900',
    discountedPrice: 'INR 1,16,000',
    rating: '4.8',
    reviews: '(156)',
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&h=1080&fit=crop',
    discount: '15% Off',
    duration: 7,
    nights: 6,
    title: 'Complete Bali Experience | Temples, Rice Terraces & Beaches',
    originalPrice: 'INR 1,85,900',
    discountedPrice: 'INR 1,57,000',
    rating: '4.7',
    reviews: '(89)',
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&h=1080&fit=crop',
    discount: '18% Off',
    duration: 9,
    nights: 8,
    title: 'Bali Grand Tour | Culture, Adventure & Relaxation',
    originalPrice: 'INR 2,15,900',
    discountedPrice: 'INR 1,77,000',
    rating: '4.9',
    reviews: '(124)',
  },
];

export default function BaliPackages() {
  const handleViewAll = () => {
    alert('View all Bali packages!');
  };

  const handleViewItinerary = (id: number) => {
    alert(`View itinerary for Bali package ${id}`);
  };

  const handleCall = (id: number) => {
    alert(`Call us for Bali package ${id}\nPhone: +91-9876543210`);
  };

  return (
    <div className="bg-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900">Bali</h2>
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
              tags="Temples Rice Terraces Beaches Culture"
              onViewItinerary={handleViewItinerary}
              onCall={handleCall}
            />
          ))}
        </div>
      </div>
    </div>
  );
}