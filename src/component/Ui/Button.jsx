import React from 'react';

export default function Button({ children, variant = 'primary', onClick, className = '' }) {
  const baseStyles = "text-sm font-bold tracking-widest uppercase rounded-full border-2 transition-all duration-300 text-center";
  
  const variants = {
    primary: "py-3 min-w-[100px] bg-white text-black border-white hover:bg-zinc-500 hover:text-white",
    secondary: "bg-black/30 text-white border-white backdrop-blur-sm px-8 py-3 min-w-[200px]"
  };

  return (
    <button 
      onClick={onClick} 
      className={`${baseStyles} ${variants[variant]} ${className}`}
    >
      {children}
    </button>
  );
}