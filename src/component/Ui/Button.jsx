import React from 'react';

export default function Button({ children, variant = 'primary', onClick, className = '' }) {
  const baseStyles = "px-8 py-3 text-sm font-bold tracking-widest uppercase rounded-full border-2 transition-all duration-300 text-center min-w-[200px]";
  
  const variants = {
    primary: "bg-white text-black border-white hover:bg-zinc-500 hover:text-white",
    secondary: "bg-black/30 text-white border-white backdrop-blur-sm"
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