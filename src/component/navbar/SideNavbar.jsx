import React, { useState, useEffect } from "react";
import { X } from "lucide-react";

const SideNavbar = ({ isopen, onClose }) => {
  console.log(isopen, onClose);

  useEffect(() => {
    if (isopen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isopen]);

  if (!isopen) return null;

  return (
    <>
      <div className="fixed inset-0 z-[100] flex justify-end">
        <div
          className="fixed inset-0 bg-black/60 transition-opacity duration-300"
          onClick={onClose}
        />

        <div className="relative w-full max-w-[24rem] h-full bg-white text-black p-4 shadow-2xl flex flex-col justify-between z-10 animate-slideLeft">
          <div>
            <div className="flex items-center justify-end mb-12">
              <button
                onClick={onClose}
                className="text-black hover:text-gray-800 transition-colors p-1"
                aria-label="Close Menu"
              >
                <X size={24} className="stroke-[1.5]" />
              </button>
            </div>

            <nav className="flex flex-col space-y-6 text-[0.750rem] font-normal tracking-[0.25em] pl-8 uppercase">
              <a
                href="/vehicles"
                onClick={onClose}
                className="hover:text-gray-400 transition-colors"
              >
                Your profile
              </a>
              <a
                href="/prices"
                onClick={onClose}
                className="hover:text-gray-400 transition-colors"
              >
                Prices
              </a>
              <a
                href="#offers"
                onClick={onClose}
                className="hover:text-gray-400 transition-colors"
              >
                request a call back
              </a>
              <a
                href="#shop"
                onClick={onClose}
                className="hover:text-gray-400 transition-colors"
              >
                book a car
              </a>
              <a
                href="#shop"
                onClick={onClose}
                className="hover:text-gray-400 transition-colors"
              >
                Shop@Home
              </a>
              <a
                href="#experience"
                onClick={onClose}
                className="hover:text-gray-400 transition-colors"
              >
                Experience Nissan
              </a>
            </nav>
          </div>

          {/* Fine Print Footer inside the Menu panel */}
          <div className="text-[10px] text-zinc-500 tracking-wider">
            © Nissan 2026
          </div>
        </div>
      </div>
    </>
  );
};

export default SideNavbar;
