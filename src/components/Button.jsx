import React from 'react';

export default function Button({ children, variant = 'primary', onClick }) {
  const baseStyle = "px-6 py-2.5 rounded-full font-medium transition-all duration-300 flex items-center gap-2 text-sm";
  const variants = {
    primary: "bg-green-600 hover:bg-green-700 text-white shadow-md hover:shadow-lg",
    secondary: "bg-transparent border border-white hover:bg-white hover:text-blue-950 text-white"
  };

  return (
    <button className={`${baseStyle} ${variants[variant]}`} onClick={onClick}>
      {children}
    </button>
  );
}