import React from 'react';
import * as Lucide from 'lucide-react';
import logoAMS from '../assets/logo-ams.png';

export default function Footer() {
  const FacebookIcon = Lucide.Facebook || Lucide.FacebookIcon || Lucide.Share2;
  const TwitterIcon = Lucide.Twitter || Lucide.TwitterIcon || Lucide.Globe;
  const InstagramIcon = Lucide.Instagram || Lucide.InstagramIcon || Lucide.Share2;
  const MailIcon = Lucide.Mail || Lucide.MailIcon || Lucide.Inbox;

  return (
    <footer className="bg-blue-950 text-white pt-14 pb-6 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-xs border-b border-slate-800 pb-10">
        
        <div>
          <div className="flex items-center gap-2.5 mb-4">
            <img 
              src={logoAMS} 
              alt="Logo AMS" 
              className="h-8 w-auto object-contain brightness-110 filter" 
            />
            <span className="font-bold text-sm tracking-wide text-white">Ayo Muliakan Sungai</span>
          </div>
          <p className="text-slate-400 leading-relaxed mb-4 text-[11px]">
            Gerakan kolektif untuk memulihkan dan memuliakan sungai-sungai Indonesia sebagai warisan alam untuk generasi mendatang.
          </p>
          
          <div className="flex gap-4 text-slate-400">
            <FacebookIcon size={16} className="hover:text-white cursor-pointer transition-colors" />
            <TwitterIcon size={16} className="hover:text-white cursor-pointer transition-colors" />
            <InstagramIcon size={16} className="hover:text-white cursor-pointer transition-colors" />
            <MailIcon size={16} className="hover:text-white cursor-pointer transition-colors" />
          </div>
        </div>
        
        <div className="md:ml-auto">
          <h4 className="font-bold text-slate-300 mb-3 uppercase tracking-wider text-[11px]">Navigasi</h4>
          <ul className="space-y-2 text-slate-400 text-[11px]">
            <li><a href="#tentang" className="hover:text-white">Tentang AMS</a></li>
            <li><a href="#prinsip" className="hover:text-white">Prinsip</a></li>
            <li><a href="#fungsi" className="hover:text-white">Fungsi Sungai</a></li>
            <li><a href="#struktur" className="hover:text-white">Peta & Struktur</a></li>
          </ul>
        </div>

        <div className="md:ml-auto">
          <h4 className="font-bold text-slate-300 mb-3 uppercase tracking-wider text-[11px]">Gerakan Nasional</h4>
          <ul className="space-y-2 text-slate-400 text-[11px]">
            <li><span className="hover:text-white cursor-pointer">Kontak Kami</span></li>
            <li><span className="hover:text-white cursor-pointer">Kebijakan Privasi</span></li>
            <li><span className="hover:text-white cursor-pointer">Undangan Kolaborasi</span></li>
          </ul>
        </div>

      </div>
      
      <div className="max-w-6xl mx-auto pt-6 text-center text-[10px] text-slate-500">
        © 2026 Ayo Muliakan Sungai (AMS). Muliakan Sungai, Muliakan Negeri.
      </div>
    </footer>
  );
}