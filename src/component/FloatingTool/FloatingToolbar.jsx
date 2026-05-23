import React, { useState } from "react";
import { Calculator, PhoneCall, Compass, Car, HelpCircle } from "lucide-react";

const tools = [
  {
    id: 1,
    label: "Finance Calculator",
    icon: <Calculator className="w-6 h-6" />,
    name: "Price",
  },
  {
    id: 2,
    label: "Contact Call",
    icon: <PhoneCall className="w-6 h-6" />,
    name: "Request a Call",
  },
  {
    id: 3,
    label: "Test Drive",
    icon: <Compass className="w-6 h-6" />,
    name: "book a Test Drive",
  },
  {
    id: 4,
    label: "Showroom",
    icon: <Car className="w-6 h-6" />,
    name: "book a car",
  },
  {
    id: 5,
    label: "Enquire",
    icon: <HelpCircle className="w-6 h-6" />,
    name: "book a service",
  },
];

export default function FloatingToolbar() {
  const [opentoolbar, setOpenToolbar] = useState(false);

  return (
    <div
      onMouseEnter={() => {
        setOpenToolbar(true);
      }}
      onMouseLeave={() => {
        setOpenToolbar(false);
      }}
      className="fixed right-0 top-1/2 -translate-y-1/2 z-50 bg-white flex flex-col rounded-l-md shadow-2xl transition-all duration-300 ease-in-out hidden md:flex"
    >
      {tools.map((tool) => (
        <a
          key={tool.id}
          href={`#tool-${tool.id}`}
          title={tool.label}
          className="p-3.5 h-14 text-black hover:bg-white hover:text-black divide-y divide-gray-200 transition-all duration-200 flex items-center justify-between group overflow-hidden"
        >
          <div
            className={`uppercase text-[0.8rem] font-bold transition-all duration-500 whitespace-nowrap text-left ease-in-out
            ${opentoolbar
               ? "max-w-[12vw] opacity-100 mr-4" 
               : "max-w-0 opacity-0 mr-0"
              }`}
          >
            <h2>{tool.name}</h2>
          </div>
          <div className="transform group-hover:scale-110 transition-transform">
            {tool.icon}
          </div>
        </a>
      ))}
    </div>
  );
}
