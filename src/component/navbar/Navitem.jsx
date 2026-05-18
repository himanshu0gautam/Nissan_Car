import React from 'react';
import { ChevronDown } from 'lucide-react';

export default function NavItem({ label, hasDropdown, dropdownItems, isOpen, onMouseEnter, onMouseLeave }) {
  return (
    <div 
      className="relative py-2 cursor-pointer"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <button className="flex items-center space-x-1 uppercase hover:text-gray-300 transition-colors focus:outline-none">
        <span>{label}</span>
        {hasDropdown && <ChevronDown size={14} className={`transform transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />}
      </button>

      {/* Production Dropdown Feature */}
      {hasDropdown && isOpen && (
        <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-48 bg-white/95 backdrop-blur-md text-black rounded shadow-xl border border-gray-100 overflow-hidden animate-fadeIn">
          <ul className="py-2">
            {dropdownItems.map((item, index) => (
              <li key={index}>
                <a 
                  href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
                  className="block px-4 py-2.5 text-xs font-medium text-gray-700 hover:bg-gray-100 hover:text-black transition-colors"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}