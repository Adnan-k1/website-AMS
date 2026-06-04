import React from 'react';
import logoAMS from '../assets/logo-ams.png';

export default function Navbar() {
  return (
    <nav className="bg-white border-b border-gray-100 fixed top-0 left-0 w-full z-50 px-6 py-3">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        
        <div className="flex items-center gap-2.5 cursor-pointer">
          <img 
            src={logoAMS} 
            alt="Logo Ayo Muliakan Sungai" 
            className="h-9 w-auto object-contain" 
          />
          <div className="flex flex-col justify-center">
            <span className="font-black text-xs text-blue-950 tracking-wide leading-none">Ayo Muliakan Sungai</span>
            <span className="text-[9px] text-emerald-600 font-bold tracking-wider mt-0.5 uppercase">Gerakan Nasional</span>
          </div>
        </div>

        
        <div className="hidden md:flex items-center gap-6 text-[11px] font-bold text-slate-600 uppercase tracking-wider">
          <a href="#about" className="hover:text-emerald-600 transition-colors">Tentang AMS</a>
          <a href="#Prinsip" className="hover:text-emerald-600 transition-colors">Prinsip</a>
          <a href="#fungsi" className="hover:text-emerald-600 transition-colors">Fungsi Sungai</a>
          <a href="#struktur" className="hover:text-emerald-600 transition-colors">Struktur</a>
        </div>

        <div className="flex items-center">
          <a 
            href="#footer" 
            className="bg-emerald-600 hover:bg-emerald-700 text-white text-[11px] font-bold uppercase tracking-wider px-4 py-2 rounded-md transition-all duration-300 shadow-sm hover:shadow-md active:scale-95"
          >
            Kontak Kami
          </a>
        </div>

      </div>
    </nav>
  );
}