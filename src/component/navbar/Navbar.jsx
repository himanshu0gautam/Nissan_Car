import React, { useState } from "react";
import { Menu, Search, Globe } from "lucide-react";
import { Link, Links, useNavigate } from "react-router-dom";
import Navitem from "./Navitem";
import SideNavbar from "./SideNavbar";

const navLinks = [
  { label: "VEHICLES", hasDropdown: false },
  { label: "PRICES", hasDropdown: false },
  { label: "MONTHLY OFFER", hasDropdown: false },
  {
    label: "SHOP@HOME",
    hasDropdown: true,
    dropdownItems: [
      "Request a Call back",
      "Find a showroom",
      "Book a Test Drive",
      "configure gravite",
      "configure Magnite",
      "Exchange Your Car",
      "check Your emi",
      "book a car",
      "nissan merchandise",
      "corporate sales",
    ],
  },
  {
    label: "EXPERIENCE NISSAN",
    hasDropdown: true,
    dropdownItems: [
      "Ownership",
      "nissan intelligent choice",
      "customer service promise",
      "maintenance & repair",
      "nissan genuine parts",
      "nissan warranty",
      "nissan india events",
      "become a nissan partner",
    ],
  },
  // {
  //   label: "OWNERS",
  //   hasDropdown: true,
  //   dropdownItems: [
  //     "your profile",
  //     "find a workshop",
  //     "book a service",
  //     "pre-paid maintenance plan",
  //     " refer & earn",
  //     "nissan roadside assistance",
  //     "owner manual",
  //     "accessories",
  //   ],
  // },
];

export default function Navbar({ onVehiclesClick, variant = "dark" }) {
  const isLight = variant === "light";

  const navStyles = isLight
    ? "bg-white text-black "
    : "bg-gradient-to-b from-black/80 via-black/40 to-transparent text-white";
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [NavOpen, setNavOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <nav
      className={`absolute top-0 left-0 w-full z-50 ${navStyles} px-6 flex items-center justify-between`}
    >
      <div className="relative flex items-center">
        <a
          href="/"
          className="flex flex-col items-center group absolute top-8 left-8"
        >
          <div className="w-38 h-32 flex items-center justify-center relative tracking-widest font-bold text-2xl">
            <img
              className="w-full h-full object-cover"
              src="https://www.nissan.in/etc/designs/nissan_next_v4/26.05.30.NISSAN-12/common-assets/img/svg/nissan-next-logo.svg"
              alt="img"
            />
          </div>
        </a>
      </div>

      <div className="hidden lg:flex items-center pl-[35rem] space-x-12 text-[0.850rem] font-medium tracking-widest pt-2">
        {navLinks.map((link, index) => (
          <Navitem
            key={index}
            label={link.label}
            hasDropdown={link.hasDropdown}
            dropdownItems={link.dropdownItems}
            isOpen={activeDropdown === index}
            onClick={() => {
              if (link.label === "VEHICLES") {
                onVehiclesClick();
              } else if (link.label === "PRICES") {
                navigate("/prices");
              } else if (link.label === "MONTHLY OFFER") {
                navigate("/monthly-offer");
              }
              setActiveDropdown(null);
            }}
            onMouseEnter={() => link.hasDropdown && setActiveDropdown(index)}
            onMouseLeave={() => setActiveDropdown(null)}
          />
        ))}
      </div>

      <div className="flex items-center space-x-4 text-[0.850rem] font-semibold tracking-wider pt-2">
        <Link to="/search">
          <button className="hidden md:flex items-center space-x-1 hover:text-gray-300 transition-colors">
            <span>SEARCH</span>
          </button>
        </Link>
        <div
          className="p-1 hover:text-gray-300 transition-colors focus:outline-none relative z-40"
          aria-label="Toggle Menu"
          onClick={() => setNavOpen(true)}
        >
          <Menu size={22} />
        </div>
          <SideNavbar isopen={NavOpen} onClose={() => setNavOpen(false)} />
      </div>
    </nav>
  );
}
