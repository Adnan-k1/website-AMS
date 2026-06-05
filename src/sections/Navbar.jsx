import React, { useState } from 'react';
import { Link } from 'react-router-dom'; 
import { Mail, MapPin, ChevronDown } from 'lucide-react';
import logoAMS from '../assets/logo-ams.png';

export default function Navbar() {
  const [isContactOpen, setIsContactOpen] = useState(false);

  return (
    <nav className="bg-white border-b border-gray-100 fixed top-0 left-0 w-full z-50 px-6 py-3">
      <div className="max-w-6xl mx-auto flex items-center justify-between relative">
        
        
        <Link to="/" className="flex items-center gap-2.5 cursor-pointer">
          <img 
            src={logoAMS} 
            alt="Logo Ayo Muliakan Sungai" 
            className="h-9 w-auto object-contain" 
          />
          <div className="flex flex-col justify-center">
            <span className="font-black text-xs text-blue-950 tracking-wide leading-none">Ayo Muliakan Sungai</span>
            <span className="text-[9px] text-emerald-600 font-bold tracking-wider mt-0.5 uppercase">Gerakan Nasional</span>
          </div>
        </Link>

        
        <div className="hidden md:flex items-center gap-6 text-[11px] font-bold text-slate-600 uppercase tracking-wider">
          <a href="/#about" className="hover:text-emerald-600 transition-colors">Tentang AMS</a>
          <a href="/#prinsip" className="hover:text-emerald-600 transition-colors">Prinsip</a>
          <a href="/#fungsi" className="hover:text-emerald-600 transition-colors">Fungsi Sungai</a>
          
          
          <Link 
            to="/struktur" 
            className="bg-slate-100 text-emerald-700 px-3 py-1.5 rounded-md hover:bg-emerald-50 transition-all font-extrabold"
          >
            Struktur Organisasi
          </Link>
        </div>

        
        <div className="relative">
          <button 
            onClick={() => setIsContactOpen(!isContactOpen)}
            className="bg-emerald-600 hover:bg-emerald-700 text-white text-[11px] font-bold uppercase tracking-wider px-4 py-2 rounded-md transition-all duration-300 shadow-sm flex items-center gap-2 active:scale-95"
          >
            Kontak Kami
            <ChevronDown size={14} className={`transition-transform duration-300 ${isContactOpen ? 'rotate-180' : ''}`} />
          </button>

          
          {isContactOpen && (
            <div className="absolute right-0 mt-2 w-80 bg-white border border-gray-100 rounded-xl shadow-xl p-4 z-50 animate-in fade-in slide-in-from-top-2 duration-200">
              <h4 className="font-extrabold text-xs text-blue-950 uppercase tracking-wider mb-3 border-b pb-1.5 border-slate-100">
                Sekretariat AMS
              </h4>
              
              <div className="flex flex-col gap-3.5 text-slate-600 text-xs font-medium">
              
                <a 
                  href="mailto:kontaksekretariat@ayomuliakansungai.com" 
                  className="flex items-start gap-2.5 hover:text-emerald-600 transition-colors group"
                >
                  <Mail size={16} className="text-emerald-600 shrink-0 mt-0.5" />
                  <span className="break-all leading-relaxed group-hover:underline">
                    kontaksekretariat@ayomuliakansungai.com
                  </span>
                </a>

                
                <div className="flex items-start gap-2.5 leading-relaxed">
                  <MapPin size={16} className="text-emerald-600 shrink-0 mt-0.5" />
                  <span>
                    Jalan Dharmawangsa XVII Nomor 38c, Kelurahan Cipete Utara, Kecamatan Kebayoran Baru, Jakarta Selatan
                  </span>
                </div>
              </div>
            </div>
          )}
        </div>

      </div>
    </nav>
  );
}