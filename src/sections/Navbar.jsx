import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Mail, MapPin, ChevronDown, Menu, X } from 'lucide-react';
import logoAMS from '../assets/logo-ams.png';

export default function Navbar() {
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const location = useLocation();
  const contactRef = useRef(null);

  const isStrukturPage = location.pathname === '/struktur';

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (contactRef.current && !contactRef.current.contains(e.target)) {
        setIsContactOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  useEffect(() => {
    setIsMobileOpen(false);
    setIsContactOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    if (isStrukturPage) {
      setActiveSection('struktur');
      return;
    }

    const sections = ['about', 'prinsip', 'fungsi', 'voyage'];

    const handleScroll = () => {
      const scrollPosition = window.scrollY + 160;

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

      if (window.scrollY < 300) setActiveSection('');
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [location.pathname, isStrukturPage]);

  const getMenuClass = (sectionName) => {
    const base = 'px-4 py-2 rounded-md transition-all duration-200 cursor-pointer ';
    return activeSection === sectionName
      ? base + 'bg-emerald-50 text-emerald-700 shadow-sm font-black'
      : base + 'text-slate-600 hover:bg-slate-50 hover:text-emerald-700';
  };

  const getMobileMenuClass = (sectionName) => {
    const base = 'block w-full text-left px-4 py-3 rounded-xl transition-all duration-200 ';
    return activeSection === sectionName
      ? base + 'bg-emerald-50 text-emerald-700 font-black'
      : base + 'text-slate-600 hover:bg-slate-50 hover:text-emerald-700';
  };

  const navLinks = [
    { href: '/#about', label: 'Tentang AMS', section: 'about' },
    { href: '/#prinsip', label: 'Prinsip', section: 'prinsip' },
    { href: '/#fungsi', label: 'Fungsi Sungai', section: 'fungsi' },
    { href: '/#voyage', label: 'Timeline', section: 'voyage' },
  ];

  return (
    <>
      <nav className="bg-white border-b border-gray-100 fixed top-0 left-0 w-full z-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-3 flex items-center justify-between">

          <Link to="/" className="flex items-center gap-2.5 shrink-0">
            <img src={logoAMS} alt="Logo AMS" className="h-8 sm:h-9 w-auto object-contain" />
            <div className="flex flex-col justify-center">
              <span className="font-black text-xs text-blue-950 tracking-wide leading-none">Ayo Muliakan Sungai</span>
              <span className="text-[9px] text-emerald-600 font-bold tracking-wider mt-0.5 uppercase hidden sm:block">Gerakan Nasional</span>
            </div>
          </Link>

          <div className="hidden md:flex items-center gap-1 text-[11px] font-extrabold uppercase tracking-wider">
            {navLinks.map(({ href, label, section }) => (
              <a key={section} href={href} className={getMenuClass(section)}>{label}</a>
            ))}
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
          <div className="flex items-center gap-2">

            <div className="relative" ref={contactRef}>
              <button
                onClick={() => setIsContactOpen(o => !o)}
                className="bg-emerald-600 hover:bg-emerald-700 text-white text-[10px] sm:text-[11px] font-bold uppercase tracking-wider px-3 sm:px-4 py-2 rounded-md transition-all duration-300 shadow-sm flex items-center gap-1.5"
              >
                <span className="hidden xs:inline">Kontak Kami</span>
                <span className="xs:hidden">Kontak</span>
                <ChevronDown size={13} className={`transition-transform duration-300 ${isContactOpen ? 'rotate-180' : ''}`} />
              </button>

              {isContactOpen && (
                <div className="absolute right-0 mt-2 w-72 sm:w-80 bg-white border border-gray-100 rounded-xl shadow-xl p-4 z-50">
                  <h4 className="font-extrabold text-xs text-blue-950 uppercase tracking-wider mb-3 border-b pb-1.5 border-slate-100">
                    Sekretariat AMS
                  </h4>
                  <div className="flex flex-col gap-3.5 text-slate-600 text-xs font-medium">
                    <a href="mailto:sekretariat@ayomuliakansungai.org"
                      className="flex items-start gap-2.5 hover:text-emerald-600 transition-colors group">
                      <Mail size={15} className="text-emerald-600 shrink-0 mt-0.5" />
                      <span className="break-all leading-relaxed group-hover:underline">sekretariat@ayomuliakansungai.org</span>
                    </a>
                    <div className="flex items-start gap-2.5 leading-relaxed">
                      <MapPin size={15} className="text-emerald-600 shrink-0 mt-0.5" />
                      <span>Jalan Dharmawangsa XVII Nomor 38c, Kelurahan Cipete Utara, Kecamatan Kebayoran Baru, Jakarta Selatan</span>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <button
              onClick={() => setIsMobileOpen(o => !o)}
              className="md:hidden p-2 rounded-lg text-slate-500 hover:bg-slate-100 hover:text-slate-800 transition-colors"
              aria-label="Toggle menu"
            >
              {isMobileOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>

        </div>

        {isMobileOpen && (
          <div className="md:hidden border-t border-slate-100 bg-white px-4 py-3 flex flex-col gap-1 text-[11px] font-extrabold uppercase tracking-wider shadow-lg">
            {navLinks.map(({ href, label, section }) => (
              <a
                key={section}
                href={href}
                className={getMobileMenuClass(section)}
                onClick={() => setIsMobileOpen(false)}
              >
                {label}
              </a>
            ))}
            <Link
              to="/struktur"
              className={`block w-full text-left px-4 py-3 rounded-xl transition-all duration-200 mt-1 ${
                isStrukturPage
                  ? 'bg-emerald-600 text-white font-black'
                  : 'bg-slate-100 text-emerald-700 hover:bg-emerald-50'
              }`}
              onClick={() => setIsMobileOpen(false)}
            >
              Struktur Organisasi
            </Link>
          </div>
        )}
      </nav>

      {isMobileOpen && (
        <div
          className="md:hidden fixed inset-0 z-40 bg-black/20 backdrop-blur-[1px]"
          onClick={() => setIsMobileOpen(false)}
        />
      )}
    </>
  );
}