import React from 'react';

const packages = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&h=1080&fit=crop',
    discount: '40% Off',
    duration: 5,
    nights: 4,
    title: 'Finland Winter Wonderland | Helsinki & Lapland Experience',
    originalPrice: 'INR 1,89,900',
    discountedPrice: 'INR 1,14,000',
    rating: '4.7',
    reviews: '(29)',
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&h=1080&fit=crop',
    discount: '37% Off',
    duration: 7,
    nights: 6,
    title: 'Complete Finland Experience | Helsinki, Lapland & Northern Lights',
    originalPrice: 'INR 2,45,900',
    discountedPrice: 'INR 1,55,000',
    rating: '4.8',
    reviews: '(33)',
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&h=1080&fit=crop',
    discount: '42% Off',
    duration: 9,
    nights: 8,
    title: 'Finland Grand Tour | Helsinki, Lapland, Rovaniemi & Santa Village',
    originalPrice: 'INR 2,89,900',
    discountedPrice: 'INR 1,68,000',
    rating: '4.9',
    reviews: '(27)',
  },
];

export default function FinlandPackages() {
  return (
    <div className="bg-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900">Finland</h2>
          <div className="flex items-center space-x-2 text-black font-medium">
            <span>View all</span>
            <img src="/resources/icons/view all arrow.svg" alt="Arrow" className="w-5 h-5" />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 -gap-1">
          {packages.map((pkg) => (
            <div key={pkg.id} className="bg-white rounded-lg max-w-xs mx-auto">
              <div className="relative mb-3">
                <img
                  src={pkg.image}
                  alt={pkg.title}
                  className="w-full h-56 object-cover rounded-lg"
                />
                <div className="absolute top-1 right-1 bg-orange-500 text-white px-1.5 py-0.5 rounded text-xs font-medium">
                  {pkg.discount}
                </div>
              </div>

              <div className="p-2.5">
                <div className="flex items-center space-x-2 mb-1">
                  <div className="flex items-center space-x-1">
                    <span className="text-gray-700 text-xs font-medium">{pkg.duration}</span>
                    <img src="/resources/icons/day.svg" alt="Day" className="w-3 h-3" />
                  </div>
                  <div className="w-px h-3 bg-gray-300"></div>
                  <div className="flex items-center space-x-1">
                    <span className="text-gray-700 text-xs font-medium">{pkg.nights}</span>
                    <img src="/resources/icons/night.svg" alt="Night" className="w-3 h-3" />
                  </div>
                </div>

                <h3 className="text-xs font-bold text-gray-900 mb-1 line-clamp-2">
                  {pkg.title}
                </h3>

                <div className="mb-1.5">
                  <span className="bg-gradient-to-r from-orange-400 to-orange-600 text-white px-2 py-0.5 rounded text-xs font-medium">
                    Northern Lights Lapland Santa Village Winter
                  </span>
                </div>

                <div className="flex items-center justify-between mb-1.5">
                  <div>
                    <div className="text-gray-500 line-through text-xs">
                      {pkg.originalPrice}
                    </div>
                    <div className="text-sm font-bold text-gray-900">
                      {pkg.discountedPrice}
                    </div>
                  </div>
                  <div className="flex items-center space-x-1">
                    <span className="text-gray-500 text-xs">{pkg.rating}</span>
                    <svg className="w-3 h-3 text-orange-500" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M10 2L12.5 7.5L18 8L14 12L15 18L10 15L5 18L6 12L2 8L7.5 7.5L10 2Z" />
                    </svg>
                    <span className="text-gray-500 text-xs">{pkg.reviews}</span>
                  </div>
                </div>

                <div className="flex items-center space-x-1">
                  <button className="flex-1 bg-orange-500 text-white px-2 py-1 rounded-full text-xs font-medium hover:bg-orange-600 transition-colors duration-300">
                    View itinerary
                  </button>
                  <div className="w-px h-4 bg-gray-300"></div>
                  <button className="w-7 h-7 bg-orange-500 rounded-full flex items-center justify-center hover:bg-orange-600 transition-colors duration-300">
                    <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
