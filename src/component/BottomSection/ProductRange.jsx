import React from 'react';

const products = [
  {
    id: 1,
    title: "ALL-NEW NISSAN GRAVITE",
    subtitle: "Inspired and Powered by advanced technology...",
    price: "Ex-Showroom Price From INR 5,99,000",
    image: "https://www-asia.nissan-cdn.net/content/dam/Nissan/in/vehicles/gravite/overview/1-Discover-Nissan-Range-500x850--20F.jpg.ximg.l_12_h.smart.jpg",
    ctaText: "Know More"
  },
  {
    id: 2,
    title: "MAGNITE KURO SPECIAL EDITION",
    subtitle: "Crafted for dominance. Impressive dark theme...",
    price: "Ex-Showroom Price From INR 8,78,000",
    image: "https://www-asia.nissan-cdn.net/content/dam/Nissan/in/vehicles/new-kuro/vlp/Desktop-500x850-.jpg.ximg.l_12_h.smart.jpg",
    ctaText: "Know More"
  },
  {
    id: 3,
    title: "NEW NISSAN MAGNITE",
    subtitle: "With bold improvements and advanced features...",
    price: "Ex-Showroom Price From INR 5,49,000",
    image: "https://www-asia.nissan-cdn.net/content/dam/Nissan/in/vehicles/new-kuro/vlp/1-Desktop-500x850.jpg.ximg.l_12_h.smart.jpg",
    ctaText: "Know More"
  }
];

export default function ProductRange() {
  return (
    <section className="py-26 px-4 max-w-7xl mx-auto ">
      <div className="text-center mb-10">
        <h2 className="text-2xl font-bold text-black uppercase ">Discover The Nissan Range</h2>
      </div>

      {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-[0.1rem]"> */}
      <div className="flex justify-center gap-[0.1rem]">
        {products.map((product) => (
          <div key={product.id} className="relative group overflow-hidden h-[660px] bg-black text-white flex flex-col justify-end p-6">
  
            <div className="absolute inset-0 z-0">
              <img 
                src={product.image} 
                alt={product.title} 
                className="w-full h-full object-cover object-center opacity-85 transition-transform duration-700 group-hover:scale-105" 
              />
              
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
            </div>

            {/* Content Layer */}
            {/* <div className="relative z-10 space-y-2"> */}
            <div className="relative z-10 ">
              <h4 className="text-lg font-bold ">{product.title}</h4>
              <p className="text-[1rem] text-white font-light leading-relaxed max-w-xs">{product.subtitle}</p>
              <p className="text-[1rem] text-white tracking-wide font-medium pt-1">{product.price}</p>
              
              <div className="flex leading-2 mt-2">
                <a 
                //   href={`#${product.id}`} 
                  className="inline-block text-[10px] font-bold tracking-widest uppercase border-b-1  border-white pb-1 hover:text-gray-400 hover:border-gray-400 transition-colors"
                >
                  {product.ctaText}
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}