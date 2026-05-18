import React, { useState } from 'react';
import NavItem from './NavItem';
import { Menu, Search, Globe } from 'lucide-react';

const navLinks = [
  { label: 'VEHICLES', hasDropdown: true, dropdownItems: ['SUVs', 'Sedans', 'EVs & Hybrids', 'All Cars'] },
  { label: 'PRICES', hasDropdown: false },
  { label: 'MONTHLY OFFER', hasDropdown: false },
  { label: 'SHOP@HOME', hasDropdown: true, dropdownItems: ['Book Online', 'Finance Calculator', 'Virtual Showroom'] },
  { label: 'EXPERIENCE NISSAN', hasDropdown: true, dropdownItems: ['Our Story', 'Innovation', 'News & Events'] },
  { label: 'OWNERS', hasDropdown: true, dropdownItems: ['Service Booking', 'Warranty', 'Accessories', 'Manuals'] },
];

export default function Navbar() {
  const [activeDropdown, setActiveDropdown] = useState(null);

  return (
    <nav className="absolute top-0 left-0 w-full z-50 bg-gradient-to-b from-black/70 to-transparent text-white px-6 py-2 flex items-center justify-between">
      <div className="flex items-center">
        <a href="/" className="flex flex-col items-center group">
          <div className="w-14 h-14 flex items-center justify-center relative tracking-widest font-bold text-2xl pl-12">
            <span className="bg-transparent px-1 absolute z-10 scale-110 tracking-widest">NISSAN</span>
            {/* <div className="w-16 h-[4px] bg-white absolute top-1/2 -translate-y-1/2"></div> */}
          </div>
        </a>
      </div>


      <div className="hidden lg:flex items-center pl-[38rem] space-x-6 text-xs font-semibold tracking-wider">
        {navLinks.map((link, index) => (
          <NavItem
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
          <Search size={16} />
          <span>SEARCH</span>
        </button>
        <button className="p-1 hover:text-gray-300 transition-colors" aria-label="Toggle Menu">
          <Menu size={24} />
        </button>
      </div>
    </nav>
  );
}