import React from 'react';

const Card = () => {
  return (
    <div className="max-w-sm rounded-2xl overflow-hidden shadow-lg bg-white border border-gray-100 transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
      <div className="relative">
        <img 
          className="w-full h-48 object-cover" 
          src="https://images.unsplash.com/photo-1540206351-d6465b3ac5c1?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
          alt="Sunset in the mountains" 
        />
        <div className="absolute top-0 right-0 m-2 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-lg text-xs font-semibold text-gray-700 shadow-sm">
          Featured
        </div>
      </div>
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2 text-gray-800">Mountain Escape</div>
        <p className="text-gray-600 text-base leading-relaxed">
          Experience the serenity of nature with our exclusive mountain getaway package. Perfect for finding peace and relaxation.
        </p>
      </div>
      <div className="px-6 pt-2 pb-4">
        <span className="inline-block bg-indigo-50 rounded-full px-3 py-1 text-sm font-semibold text-indigo-600 mr-2 mb-2 border border-indigo-100">#photography</span>
        <span className="inline-block bg-teal-50 rounded-full px-3 py-1 text-sm font-semibold text-teal-600 mr-2 mb-2 border border-teal-100">#travel</span>
        <span className="inline-block bg-rose-50 rounded-full px-3 py-1 text-sm font-semibold text-rose-600 mr-2 mb-2 border border-rose-100">#winter</span>
      </div>
      <div className="px-6 pb-6">
        <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2.5 px-4 rounded-xl transition duration-300 transform active:scale-95 shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
          Book Now
        </button>
      </div>
    </div>
  );
};

export default Card;
