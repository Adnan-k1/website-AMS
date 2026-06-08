import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Mail, MapPin, ChevronDown } from 'lucide-react';
import logoAMS from '../assets/logo-ams.png';

export default function Navbar() {
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const location = useLocation();

  const isStrukturPage = location.pathname === '/struktur';

  // Efek pintar untuk mendeteksi posisi scroll user di halaman Beranda
  useEffect(() => {
    // Jika berada di page struktur, kunci active state ke 'struktur'
    if (isStrukturPage) {
      setActiveSection('struktur');
      return;
    }

    // Menambahkan 'voyage' ke dalam daftar pemantauan scroll pintar
    const sections = ['about', 'prinsip', 'fungsi', 'voyage'];
    
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 160; // Offset tinggi navbar

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;

          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            return;
          }
        }
      }
      
      // Jika di paling atas (Hero), matikan semua active state menu beranda
      if (window.scrollY < 300) {
        setActiveSection('');
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Jalankan saat pertama kali dimuat

    return () => window.removeEventListener('scroll', handleScroll);
  }, [location.pathname, isStrukturPage]);

  // Fungsi pembantu untuk menu beranda biasa (Tentang, Prinsip, Fungsi, Voyage)
  const getMenuClass = (sectionName) => {
    const baseClass = "px-4 py-2 rounded-md transition-all duration-200 cursor-pointer ";
    if (activeSection === sectionName) {
      return baseClass + "bg-emerald-50 text-emerald-700 shadow-sm font-black";
    }
    return baseClass + "text-slate-600 hover:bg-slate-50 hover:text-emerald-700";
  };

  return (
    <nav className="bg-white border-b border-gray-100 fixed top-0 left-0 w-full z-50 px-6 py-3">
      <div className="max-w-6xl mx-auto flex items-center justify-between relative">
        
        {/* LOGO & BRANDING AMS */}
        <Link to="/" className="flex items-center gap-2.5 cursor-pointer">
          <img src={logoAMS} alt="Logo" className="h-9 w-auto object-contain" />
          <div className="flex flex-col justify-center">
            <span className="font-black text-xs text-blue-950 tracking-wide leading-none">Ayo Muliakan Sungai</span>
            <span className="text-[9px] text-emerald-600 font-bold tracking-wider mt-0.5 uppercase">Gerakan Nasional</span>
          </div>
        </Link>

        {/* MENU NAVIGASI PINTAR */}
        <div className="hidden md:flex items-center gap-2 text-[11px] font-extrabold uppercase tracking-wider">
          
          <a href="/#about" className={getMenuClass('about')}>
            Tentang AMS
          </a>
          
          <a href="/#prinsip" className={getMenuClass('prinsip')}>
            Prinsip
          </a>
          
          <a href="/#fungsi" className={getMenuClass('fungsi')}>
            Fungsi Sungai
          </a>

          {/* MENAMBAHKAN MENU TIMELINE (THE VOYAGE) */}
          <a href="/#voyage" className={getMenuClass('voyage')}>
            Timeline
          </a>
          
          {/* Tombol Struktur Organisasi */}
          <Link 
            to="/struktur" 
            className={`px-4 py-2 rounded-md transition-all duration-200 ${
              isStrukturPage 
                ? 'bg-emerald-600 text-white shadow-sm font-black' 
                : 'bg-slate-100/80 text-emerald-700 hover:bg-emerald-50'
            }`}
          >
            Struktur Organisasi
          </Link>
          
        </div>

        {/* TOMBOL KONTAK KAMI */}
        <div className="relative">
          <button 
            onClick={() => setIsContactOpen(!isContactOpen)}
            className="bg-emerald-600 hover:bg-emerald-700 text-white text-[11px] font-bold uppercase tracking-wider px-4 py-2 rounded-md transition-all duration-300 shadow-sm flex items-center gap-2"
          >
            Kontak Kami
            <ChevronDown size={14} className={`transition-transform duration-300 ${isContactOpen ? 'rotate-180' : ''}`} />
          </button>

          {/* PANEL SEKRETARIAT */}
          {isContactOpen && (
            <div className="absolute right-0 mt-2 w-80 bg-white border border-gray-100 rounded-xl shadow-xl p-4 z-50">
              <h4 className="font-extrabold text-xs text-blue-950 uppercase tracking-wider mb-3 border-b pb-1.5 border-slate-100">
                Sekretariat AMS
              </h4>
              <div className="flex flex-col gap-3.5 text-slate-600 text-xs font-medium">
                <a href="mailto:sekretariat@gmail.com" className="flex items-start gap-2.5 hover:text-emerald-600 transition-colors group">
                  <Mail size={16} className="text-emerald-600 shrink-0 mt-0.5" />
                  <span className="break-all leading-relaxed group-hover:underline">sekretariat@gmail.com</span>
                </a>
                <div className="flex items-start gap-2.5 leading-relaxed">
                  <MapPin size={16} className="text-emerald-600 shrink-0 mt-0.5" />
                  <span>Jalan Dharmawangsa XVII Nomor 38c, Kelurahan Cipete Utara, Kecamatan Kebayoran Baru, Jakarta Selatan</span>
                </div>
              </div>
            </div>
          )}
        </div>

      </div>
    </nav>
  );
}