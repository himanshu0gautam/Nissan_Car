import React, { useState } from 'react';
import { X } from 'lucide-react';

const Vehicle = {
  "NISSAN GRAVITE": [
    { name: "ALL-NEW NISSAN GRAVITE", img: "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&q=80&w=400" },
    { name: "GRAVITE CNG", img: "https://images.unsplash.com/photo-1617788138017-80ad40651399?auto=format&fit=crop&q=80&w=400" }
  ],
  "NISSAN MAGNITE": [
    { name: "NEW MAGNITE", img: "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&q=80&w=400" },
    { name: "MAGNITE KURO SPECIAL EDITION", img: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&q=80&w=400" }
  ],
  "X-TRAIL": [
    { name: "NISSAN X-TRAIL LUXURY", img: "https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&q=80&w=400" }
  ]
};

export default function Vehicles({ onClose }) {
  const [activeTab, setActiveTab] = useState("NISSAN MAGNITE");

  return (
    <div className="absolute h-screen left-0 w-full bg-white text-black shadow-2xl border-t border-gray-100 z-50 transition-all duration-300 animate-fadeIn">
      <div className="max-w-7xl mx-auto px-8 py-12 relative">
        
        {/* Right Close Action Corner */}
        <button 
          onClick={onClose}
          className="absolute right-8 top-8 text-gray-400 hover:text-black transition-colors"
          aria-label="Close menu"
        >
          <X size={24} className="stroke-[1.5]" />
        </button>

        {/* Inner Sub-Tabs Strip Navigation */}
        <div className="flex items-center space-x-8 border-b border-gray-100 pb-4 mb-12">
          {Object.keys(Vehicle).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`text-xs font-bold tracking-widest pb-2 uppercase transition-all relative ${
                activeTab === tab 
                  ? "text-black font-extrabold" 
                  : "text-gray-400 hover:text-black"
              }`}
            >
              {tab}
              {activeTab === tab && (
                <div className="absolute bottom-0 left-0 w-full h-[2px] bg-black animate-slideIn" />
              )}
            </button>
          ))}
        </div>

        {/* Dynamic Vehicles Grid Layout Container */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-12">
          {Vehicle[activeTab].map((car, index) => (
            <a 
              key={index} 
              href={`#${car.name.toLowerCase().replace(/\s+/g, '-')}`}
              className="group flex flex-col items-center text-center space-y-6"
            >
              {/* Image Frame Wrapper */}
              <div className="w-full aspect-[16/10] overflow-hidden flex items-center justify-center">
                <img 
                  src={car.img} 
                  alt={car.name} 
                  className="max-h-full max-w-full object-contain mix-blend-multiply transform group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              
              {/* Car Variant Name Typography */}
              <h3 className="text-[11px] font-bold tracking-widest text-zinc-800 uppercase group-hover:text-black transition-colors">
                {car.name}
              </h3>
            </a>
          ))}
        </div>

      </div>
    </div>
  );
}