import React from 'react';
import { Calculator, PhoneCall, Compass, Car, HelpCircle } from 'lucide-react';

const tools = [
  { id: 1, label: "Finance Calculator", icon: <Calculator className="w-6 h-6" /> },
  { id: 2, label: "Contact Call", icon: <PhoneCall className="w-6 h-6" /> },
  { id: 3, label: "Test Drive", icon: <Compass className="w-6 h-6" /> },
  { id: 4, label: "Showroom", icon: <Car className="w-6 h-6" /> },
  { id: 5, label: "Enquire", icon: <HelpCircle className="w-6 h-6" /> },
];

export default function FloatingToolbar() {
  return (
    <div className="fixed right-0 top-1/2 -translate-y-1/2 z-50 bg-white flex flex-col divide-y divide-gray-200 rounded-l-md overflow-hidden hidden md:flex">
      {tools.map((tool) => (
        <a
          key={tool.id}
          href={`#tool-${tool.id}`}
          title={tool.label}
          className="p-3.5 h-14 text-black hover:bg-white hover:text-black transition-all duration-200 flex items-center justify-center group"
        >
          <div className="transform group-hover:scale-110 transition-transform">
            {tool.icon}
          </div>
        </a>
      ))}
    </div>
  );
}