import React from 'react';
import { FaFacebook } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";

// const actionItems = [
//   { id: 1, label: "Book A Test Drive", icon: <CompassIcon className="w-8 h-8 stroke-[1.5]" /> },
//   { id: 2, label: "Download Brochure", icon: <DownloadCloud className="w-8 h-8 stroke-[1.5]" /> },
//   { id: 3, label: "Find A Dealer", icon: <MapPinCheck className="w-8 h-8 stroke-[1.5]" /> },
//   { id: 4, label: "Book A Service", icon: <WrenchIcon className="w-8 h-8 stroke-[1.5]" /> },
// ];

const footerLinks = [
  {
    title: "SHOPPING TOOLS",
    items: ["Download Brochure", "Book A Car", "Request A Call Back", "Corporate Sales", "Nissan Dealer Locator", "Configure Gravite", "Configure Magnite"]
  },
  {
    title: "OWNER SERVICES",
    items: ["NISSAN ONE", "Nissan Advance Technology", "Nissan Quality", "Nissan Connect", "Book A Service", "Pre-paid Maintenance Plan", "Accessories", "Nissan Merchandise"]
  },
  {
    title: "CORPORATE",
    items: ["Experience Nissan", "Nissan Intelligent Mobility", "Corporate Social Responsibility", "Latest News", "Careers", "Contact Us", "Annual Return Extract for Nissan India", "Become A Nissan Partner"]
  }
];

export default function Footer() {
  return (
    <footer className="w-full bg-white text-black border-t border-gray-100 mt-18">
      
      {/* <div className="py-16 px-4 max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-light tracking-wide mb-12">
          What would you like to do?
        </h2>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4">
          {actionItems.map((item) => (
            <a 
              key={item.id} 
              href={`#${item.label.toLowerCase().replace(/\s+/g, '-')}`}
              className="flex flex-col items-center group space-y-4"
            >
              <div className="text-black transition-transform duration-300 group-hover:-translate-y-1">
                {item.icon}
              </div>
              <span className="text-xs font-bold tracking-widest uppercase transition-colors group-hover:text-gray-600">
                {item.label}
              </span>
            </a>
          ))}
        </div>
      </div> */}

      {/* 2. Deep Industrial Footer Columns */}
      <div className="bg-black text-white pt-16 pb-12 px-6 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-6 border-b border-zinc-800 pb-16">
          
          {/* Main Informational Columns */}
          {footerLinks.map((column, index) => (
            <div key={index} className="space-y-4">
              <h4 className="text-1xl font-bold text-white uppercase">
                {column.title}
              </h4>
              <ul className="space-y-2.5">
                {column.items.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a 
                      href={`#${link.toLowerCase().replace(/\s+/g, '-')}`}
                      className="text-[0.8rem] text-zinc-200 font-light tracking-wide hover:text-white transition-colors duration-200"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div className="space-y-4">
            <h4 className="text-xs font-bold tracking-[0.2em] text-white uppercase">
              NISSAN SOCIAL
            </h4>
            <div className="flex items-center space-x-4 text-zinc-400">
              <a href="#facebook" className="hover:text-white transition-colors" aria-label="Facebook">
                <FaFacebook className="w-5 h-5 fill-current stroke-none" />
              </a>
              <a href="#twitter" className="hover:text-white transition-colors" aria-label="X (Twitter)">
                <FaSquareXTwitter className="w-5 h-5 fill-current stroke-none" />
              </a>
              <a href="#instagram" className="hover:text-white transition-colors" aria-label="Instagram">
                <FaSquareInstagram className="w-5 h-5 fill-current stroke-none" />
              </a>
              <a href="#youtube" className="hover:text-white transition-colors" aria-label="YouTube">
                <FaYoutube className="w-5 h-5 fill-current stroke-none" />
              </a>
            </div>
          </div>

        </div>

        <div className="max-w-7xl mx-auto pt-8 flex flex-col md:flex-row justify-between items-start md:items-center text-[0.8rem] text-zinc-200 font-light tracking-wider gap-4">
          <div className="flex flex-wrap">
            <a href="#global-site" className="hover:text-zinc-300 transition-colors">Global Site</a>
            <a href="#site-map" className="hover:text-zinc-300 transition-colors">Site Map</a>
            <a href="#newsroom" className="hover:text-zinc-300 transition-colors">Newsroom</a>
          </div>
          
          <div className="flex flex-col md:flex-row items-start md:items-center gap-y-2 md:gap-x-6 w-full md:w-auto md:justify-end">
            <div className="flex gap-x-6">
              <a href="#privacy-policy" className="hover:text-zinc-300 transition-colors">Privacy Policy</a>
              <a href="#copyright-disclaimer" className="hover:text-zinc-300 transition-colors">Copyright & Disclaimer</a>
            </div>
            <span className="text-zinc-400 font-normal pt-2 md:pt-0">
              © Nissan 2026
            </span>
          </div>
        </div>
      </div>

    </footer>
  );
}