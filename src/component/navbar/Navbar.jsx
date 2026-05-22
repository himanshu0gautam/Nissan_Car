import React, { useState } from 'react';
import { Menu, Search, Globe } from 'lucide-react';
import Navitem from './Navitem';

const navLinks = [
  { label: 'VEHICLES', hasDropdown: false},
  { label: 'PRICES', hasDropdown: false },
  { label: 'MONTHLY OFFER', hasDropdown: false },
  { label: 'SHOP@HOME', hasDropdown: true, dropdownItems: ['Request a Call back', 'Download Brochure', 'Find a showroom', 'Book a Test Drive', 'configure gravite', 'configure Magnite', 'Exchange Your Car', 'check Your emi', 'book a car', 'nissan merchandise', 'corporate sales'] },
  { label: 'EXPERIENCE NISSAN', hasDropdown: true, dropdownItems: ['Ownership', 'nissan intelligent choice', 'customer service promise', 'maintenance & repair', 'nissan genuine parts', 'nissan warranty', 'nissan india events', 'become a nissan partner'] },
  { label: 'OWNERS', hasDropdown: true, dropdownItems: ['your profile', 'find a workshop', 'book a service', 'pre-paid maintenance plan', ' refer & earn', 'nissan roadside assistance', 'owner manual', 'accessories'] },
];

export default function Navbar() {
  const [activeDropdown, setActiveDropdown] = useState(null);

  return (
    <nav className="absolute top-0 left-0 w-full z-50 bg-gradient-to-b from-black/70 to-transparent text-white px-6 flex items-center justify-between">
      <div className="flex items-center">
        <a href="/" className="flex flex-col items-center group">
          <div className="w-14 h-14 flex items-center justify-center relative tracking-widest font-bold text-2xl pl-12">
            <span className="bg-transparent px-1 absolute z-10 scale-110 tracking-widest">NISSAN</span>
            {/* <div className="w-16 h-[4px] bg-white absolute top-1/2 -translate-y-1/2"></div> */}
          </div>
        </a>
      </div>


      <div className="hidden lg:flex items-center pl-[32rem] space-x-8 text-[0.8rem] font-medium tracking-widest">
        {navLinks.map((link, index) => (
          <Navitem
            key={index}
            label={link.label}
            hasDropdown={link.hasDropdown}
            dropdownItems={link.dropdownItems}
            isOpen={activeDropdown === index}
            onMouseEnter={() => link.hasDropdown && setActiveDropdown(index)}
            onMouseLeave={() => setActiveDropdown(null)}
          />
        ))}
      </div>

      <div className="flex items-center space-x-4 text-xs font-semibold tracking-wider">
        <button className="hidden md:flex items-center space-x-1 hover:text-gray-300 transition-colors">
          {/* <Search size={16} /> */}
          <span>SEARCH</span>
        </button>
        <button className="p-1 hover:text-gray-300 transition-colors" aria-label="Toggle Menu">
          <Menu size={24} />
        </button>
      </div>
    </nav>
  );
}