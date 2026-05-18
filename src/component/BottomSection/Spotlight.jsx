import React from 'react';

const configs = [
  {
    id: 'gravite',
    name: "GRAVITE CONFIGURATOR",
    image: "https://www-asia.nissan-cdn.net/content/dam/Nissan/in/vehicles/gravite/overview/Configurator.jpg.ximg.l_6_h.smart.jpg"
  },
  {
    id: 'magnite',
    name: "MAGNITE CONFIGURATOR",
    image: "https://www-asia.nissan-cdn.net/content/dam/Nissan/in/Home/shopathome/images/MagniteFinal-min.png.ximg.l_6_h.smart.png"
  }
];

export default function Spotlight() {
  return (
    <section className="max-w-6xl px-6 mx-auto  border-t border-gray-100">
      <div className="text-center mb-4">
        <h2 className="text-2xl font-medium tracking-[0.25em] text-black uppercase">Spotlight</h2>
        <p className="text-[1rem] text-black font-light tracking-wide mt-4">Explore the Nissan Range in the immersive 3D environment</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
        {configs.map((config) => (
          <div key={config.id} className="flex flex-col group">
            <div className="overflow-hidden bg-gray-100 flex justify-center h-76 relative">
              <img 
                src={config.image} 
                alt={config.name} 
                className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-500" 
              />
            </div>
            
            <div className="mt-4 space-y-3">
              <h3 className="text-1xl tracking-[0.25em] font-medium text-black uppercase">{config.name}</h3>
              <a 
                // href={`#configure-${config.id}`} 
                className="inline-block text-[1rem] tracking-wider font-bold text-black uppercase border-b- border-b-black pb-0.5 hover:text-black hover:border-black transition-colors"
              >
                Configure Now
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}