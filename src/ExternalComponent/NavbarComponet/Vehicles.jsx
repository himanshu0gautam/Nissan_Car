import React, { useState } from 'react';
import { X } from 'lucide-react';

const Vehicle = {
  "NISSAN GRAVITE": [
    { name: "ALL-NEW NISSAN GRAVITE", img: "https://www-asia.nissan-cdn.net/content/dam/Nissan/in/vehicles/gravite/overview/320x188-Dealer-Website-Vehicle-Image-25febv1.jpg.ximg.l_3_m.smart.jpg" },
    { name: "GRAVITE CNG", img: "https://www-asia.nissan-cdn.net/content/dam/Nissan/in/vehicles/gravite/overview/320x188-Dealer-Website-Vehicle-Image-25febv1.jpg.ximg.l_3_m.smart.jpg" }
  ],
  "NISSAN MAGNITE": [
    { name: "NEW MAGNITE", img: "https://www-asia.nissan-cdn.net/content/dam/Nissan/in/vehicles/new-magnite/Images/2-Nissan-MC-Image-300x159-v1.jpg.ximg.l_3_m.smart.jpg" },
    { name: "MAGNITE KURO SPECIAL EDITION", img: "https://www-asia.nissan-cdn.net/content/dam/Nissan/in/vehicles/new-kuro/VLP-Banner-300x159.png.ximg.l_3_m.smart.png" }
  ],
  "X-TRAIL": [
    { name: "NISSAN X-TRAIL LUXURY", img: "https://www-asia.nissan-cdn.net/content/dam/Nissan/in/vehicles/x-trail/overview/Nissan%20X-TRAIL%20Side%20Angle.png.ximg.l_3_m.smart.png" }
  ]
};

export default function Vehicles({ onClose }) {
  const [activeTab, setActiveTab] = useState("NISSAN MAGNITE");

  return (
    <div className="absolute h-screen left-0 w-full bg-white text-black shadow-2xl border-t border-gray-100 z-50 transition-all duration-300 animate-fadeIn">
      <div className="w-full mx-auto px-8 py-12 relative">
        
        {/* Right Close Action Corner */}
        <button 
          onClick={onClose}
          className="absolute right-12 top-6 text-gray-400 hover:text-black transition-colors"
          aria-label="Close menu"
        >
          <X size={24} className="stroke-[1.5]" />
        </button>

        {/* Inner Sub-Tabs Strip Navigation */}
        <div className="flex items-center space-x-8 border-b border-gray-100 pb-4">
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
        <div className="flex gap-12 p-8">
          {Vehicle[activeTab].map((car, index) => (
            <a 
              key={index} 
              href={`#${car.name.toLowerCase().replace(/\s+/g, '-')}`}
              className="group flex flex-col items-center text-center space-y-6"
            >
              {/* Image Frame Wrapper */}
              <div className="w-62 overflow-hidden flex items-center justify-center ">
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