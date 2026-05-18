import React, { useState } from 'react';
import Button from '../Ui/Button';

const thumbnails = [
  { id: 1, img: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&q=80&w=300', alt: 'Gravite Side View' },
  { id: 2, img: 'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&q=80&w=300', alt: 'Gravite Front Road' },
  { id: 3, img: 'https://images.unsplash.com/photo-1617788138017-80ad40651399?auto=format&fit=crop&q=80&w=300', alt: 'Magnite Luxury' },
  { id: 4, img: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&q=80&w=300', alt: 'Nissan Grill Detail' },
  { id: 5, img: 'https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&q=80&w=300', alt: 'Nissan Global Lineup' },
];

export default function HeroSection() {
  const [activeThumb, setActiveThumb] = useState(1);

  return (
    <section className="relative w-full h-[90vh] bg-slate-900 overflow-hidden flex flex-col justify-between">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://www-asia.nissan-cdn.net/content/dam/Nissan/in/vehicles/gravite/overview/100220_Nissan-April-GNG-Pace-Banner-3000x130004M.jpg.ximg.full.hero.jpg" 
          alt="All-New Nissan Gravite CNG Banner" 
          className="w-full h-full object-cover object-center brightness-95"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-black/20" />
      </div>

      <div className="relative z-10 flex-1 flex flex-col justify-center items-start  lg:px-12 text-white max-w-2xl mt-16">
        <h1 className="text-2xl md:text-5xl lg:text-6xl font-light tracking-tight leading-none mb-2">
          ALL-NEW NISSAN <br />
          <span className="font-bold tracking-wide">GRAVITE CNG</span>
        </h1>
        <p className="text-sm md:text-base font-medium tracking-widest text-gray-200 mb-8 uppercase">
          The New Class of Togetherness
        </p>

        <div className="flex flex-col gap-2 space-y-4 sm:space-y-0 sm:space-x-4 w-full sm:w-auto">
          <Button variant="primary">Know More</Button>
          <Button variant="secondary">Request a Call Back</Button>
        </div>

      </div>

      {/* Multi-feature Gallery Thumbnail Selection Bar */}
      {/* <div className="relative z-10 w-full grid grid-cols-5 h-20 md:h-28 bg-black/40 backdrop-blur-sm border-t border-white/10">
        {thumbnails.map((thumb) => (
          <button
            key={thumb.id}
            onClick={() => setActiveThumb(thumb.id)}
            className={`relative group overflow-hidden focus:outline-none transition-all duration-300 ${
              activeThumb === thumb.id ? 'border-t-4 border-white' : 'opacity-60 hover:opacity-100'
            }`}
          >
            <img 
              src={thumb.img} 
              alt={thumb.alt} 
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
            />
            <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors" />
          </button>
        ))}
      </div> */}
    </section>
  );
}