import React from 'react';
import logoAMS from '../assets/logo-ams.png';

export default function Footer() {
  return (
    <footer id="footer" className="bg-blue-950 text-white pt-14 pb-6 px-6">
      {/* Grid Utama (4 Kolom Sesuai Format Aslimu) */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 text-xs border-b border-slate-800 pb-10">
        
        {/* KOLOM 1: BRANDING & DESKRIPSI + DERETAN SOSMED BARU */}
        <div className="md:col-span-1">
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
          
          {/* DERETAN IKON MEDIA SOSIAL BARU (Urutan Sesuai Gambar: FB -> IG -> TikTok -> Web -> Mail) */}
          <div className="flex items-center gap-4 text-slate-400">
            
            {/* 1. Facebook (Ikon Huruf f) */}
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" title="Facebook" className="hover:text-white cursor-pointer transition-colors flex items-center justify-center">
              <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
              </svg>
            </a>
            
            {/* 2. Instagram (Ikon Kamera Kotak) */}
            <a href="https://www.instagram.com/ayo.muliakan.sungai/" target="_blank" rel="noopener noreferrer" title="Instagram" className="hover:text-white cursor-pointer transition-colors flex items-center justify-center">
              <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg>
            </a>

            {/* 3. TikTok (Ikon Musik TikTok) */}
            <a href="https://www.tiktok.com/@ayo.muliakan.sungai?_r=1&_t=ZS-96cLkCpCGEW" target="_blank" rel="noopener noreferrer" title="TikTok" className="hover:text-white cursor-pointer transition-colors flex items-center justify-center">
              <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor">
                <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.02 1.63 4.19 1.11 1.25 2.64 2.05 4.29 2.29v3.91c-1.61-.02-3.18-.5-4.51-1.39a8.6 8.6 0 0 1-1.41-1.17v6.78c.02 1.9-.46 3.8-1.47 5.4a8.32 8.32 0 0 1-5.18 3.84c-1.92.44-3.95.21-5.73-.66A8.47 8.47 0 0 1 .43 14.86c-.73-1.85-.75-3.92-.05-5.78a8.38 8.38 0 0 1 4.54-4.83c1.33-.56 2.78-.71 4.2-.45v4.03c-1 .04-2.02.43-2.76 1.13A4.27 4.27 0 0 0 5.1 12.1c-.13 1.25.32 2.5 1.2 3.4.88.9 2.14 1.34 3.39 1.18a4.34 4.34 0 0 0 3.83-4.32V0l-.01.02z"/>
              </svg>
            </a>

          </div>
        </div>
        
        {/* KOLOM 2: ALAMAT SEKRETARIAT RESMI */}
        <div>
          <h4 className="font-bold text-slate-300 mb-3 uppercase tracking-wider text-[11px]">Sekretariat</h4>
          <div className="text-slate-400 text-[11px] space-y-3 leading-relaxed">
            <p>
              Jalan Dharmawangsa XVII Nomor 38c, Kelurahan Cipete Utara, Kecamatan Kebayoran Baru, Jakarta Selatan
            </p>
            <div className="pt-1">
              <span className="text-slate-500 block text-[10px] uppercase font-bold tracking-wider">Email Resmi:</span>
              <a href="mailto:sekretariat@ayomuliakansungai.org" className="text-emerald-400 hover:underline break-all">
                sekretariat@ayomuliakansungai.org
              </a>
            </div>
          </div>
        </div>
        
        {/* KOLOM 3: NAVIGASI */}
        <div className="md:mx-auto">
          <h4 className="font-bold text-slate-300 mb-3 uppercase tracking-wider text-[11px]">Navigasi</h4>
          <ul className="space-y-2 text-slate-400 text-[11px]">
            <li><a href="#about" className="hover:text-white">Tentang AMS</a></li>
            <li><a href="#prinsip" className="hover:text-white">Prinsip</a></li>
            <li><a href="#fungsi" className="hover:text-white">Fungsi Sungai</a></li>
            <li><a href="#struktur" className="hover:text-white">Peta & Struktur</a></li>
          </ul>
        </div>

        {/* KOLOM 4: GERAKAN NASIONAL */}
        <div className="md:ml-auto">
          <h4 className="font-bold text-slate-300 mb-3 uppercase tracking-wider text-[11px]">Gerakan Nasional</h4>
          <ul className="space-y-2 text-slate-400 text-[11px]">
            <li><span className="hover:text-white cursor-pointer">Kontak Kami</span></li>
            <li><span className="hover:text-white cursor-pointer">Kebijakan Privasi</span></li>
            <li><span className="hover:text-white cursor-pointer">Undangan Kolaborasi</span></li>
          </ul>
        </div>

      </div>
      
      {/* COPYRIGHT */}
      <div className="max-w-6xl mx-auto pt-6 text-center text-[10px] text-slate-500">
        © 2026 Ayo Muliakan Sungai (AMS). Muliakan Sungai, Muliakan Negeri.
      </div>
    </footer>
  );
}