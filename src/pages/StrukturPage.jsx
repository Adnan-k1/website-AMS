import React from 'react';
import { Link } from 'react-router-dom';
import * as Lucide from 'lucide-react';

const timKepengurusan = {
  pembina: [
    { 
      nama: "Prof. Dr. Ir. H. Sugeng, M.Sc", 
      jabatan: "Dewan Pembina", 
      link: "https://scholar.google.com",
      foto: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=250&auto=format&fit=crop" // Ganti dengan variabel import jika pakai file lokal
    },
    { 
      nama: "Ir. Ahmad Kurniawan", 
      jabatan: "Dewan Penasihat", 
      link: "https://linkedin.com",
      foto: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=250&auto=format&fit=crop"
    }
  ],
  inti: [
    { 
      nama: "Budi Santoso, S.T., M.Env", 
      jabatan: "Ketua Umum", 
      link: "https://wikipedia.org",
      foto: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=250&auto=format&fit=crop"
    },
    { 
      nama: "Siti Rahmawati, M.Si", 
      jabatan: "Sekretaris Jenderal", 
      link: "https://linkedin.com",
      foto: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=250&auto=format&fit=crop"
    },
    { 
      nama: "Dian Pratama, Ak.", 
      jabatan: "Bendahara Umum", 
      link: "https://linkedin.com",
      foto: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=250&auto=format&fit=crop"
    }
  ]
};

export default function StrukturPage() {
  const ArrowLeftIcon = Lucide.ArrowLeft || Lucide.MoveLeft || Lucide.Globe;

  return (
    <section className="py-20 px-6 max-w-6xl mx-auto">

      <div className="mb-10">
        <Link to="/" className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-500 hover:text-emerald-600 transition-colors group">
          <ArrowLeftIcon size={16} className="transition-transform group-hover:-translate-x-1" />
          Kembali ke Beranda
        </Link>
      </div>

      <div className="text-center max-w-2xl mx-auto mb-20">
        <span className="text-[10px] font-extrabold bg-emerald-50 text-emerald-700 px-4 py-1.5 rounded-full uppercase tracking-widest">
          Struktur Organisasi
        </span>
        <h1 className="text-3xl md:text-4xl font-black text-slate-900 mt-4 tracking-tight">
          Sinergi Kolektif AMS
        </h1>
        <p className="text-lg md:text-xl lg:text-2xl font-bold text-slate-700 mt-2">
          "Gerakan yang terstruktur, kredibel dan berdampak nyata"
        </p>
      </div>

      <div className="mb-20">
        <h2 className="text-center text-xs font-bold text-slate-400 uppercase tracking-widest mb-10">
          Dewan Pengarah
        </h2>
        <div className="flex flex-wrap justify-center gap-8">
          {timKepengurusan.pembina.map((tokoh, idx) => (
            <CardTokoh key={idx} tokoh={tokoh} variant="pembina" />
          ))}
        </div>
      </div>

      <div>
        <h2 className="text-center text-xs font-bold text-slate-400 uppercase tracking-widest mb-10">
          Badan Pelaksana Inti
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {timKepengurusan.inti.map((tokoh, idx) => (
            <CardTokoh key={idx} tokoh={tokoh} variant="inti" />
          ))}
        </div>
      </div>

    </section>
  );
}

function CardTokoh({ tokoh, variant }) {
  const LinkedinIcon = Lucide.Linkedin || Lucide.LinkedinIcon || Lucide.Share2;
  const GraduationIcon = Lucide.GraduationCap || Lucide.Award || Lucide.BookOpen;
  const GlobeIcon = Lucide.Globe || Lucide.Browser || Lucide.ExternalLink;

  const dapatkanIkon = (url) => {
    if (url.includes('linkedin')) return <LinkedinIcon size={14} />;
    if (url.includes('scholar')) return <GraduationIcon size={14} />;
    return <GlobeIcon size={14} />;
  };

  return (
    <div className={`bg-white border border-slate-100 rounded-2xl p-6 transition-all duration-300 hover:shadow-xl hover:shadow-slate-200/40 flex flex-col justify-between group ${variant === 'pembina' ? 'w-full sm:w-80' : ''}`}>
      
      <div className="flex items-center gap-4">
        <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-slate-100 bg-slate-50 shrink-0 transition-transform duration-300 group-hover:scale-105 group-hover:border-emerald-100 shadow-sm">
          <img 
            src={tokoh.foto} 
            alt={tokoh.nama} 
            className="w-full h-full object-cover"
            onError={(e) => {
              e.target.src = "https://api.dicebear.com/7.x/initials/svg?seed=" + tokoh.nama;
            }}
          />
        </div>

        <div className="space-y-1">
          <span className="text-[9px] font-black text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded uppercase tracking-wider">
            {tokoh.jabatan}
          </span>
          <h3 className="font-extrabold text-sm md:text-base text-slate-900 tracking-tight leading-tight transition-colors group-hover:text-emerald-600">
            {tokoh.nama}
          </h3>
        </div>
      </div>

      <div className="mt-6 pt-3 border-t border-slate-100/60 flex justify-end">
        <a 
          href={tokoh.link} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="p-2 bg-slate-50 text-slate-400 rounded-xl hover:bg-emerald-600 hover:text-white transition-all duration-300 shadow-sm"
          title="Lihat Profil Riwayat"
        >
          {dapatkanIkon(tokoh.link)}
        </a>
      </div>

    </div>
  );
}