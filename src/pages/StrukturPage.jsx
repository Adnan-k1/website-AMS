import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import * as Lucide from 'lucide-react';
import fotoAHY from '../assets/ahy.jpeg';

const strukturData = {
  founder: {
    nama: "Dr. Agus Harimurti Yudhoyono",
    foto: fotoAHY,
    link: "https://www.google.com/search?q=Dr.+Agus+Harimurti+Yudhoyono"
  },
  majelisPengarah: {
    ketua: { nama: "Dr. Iftitah Sulaiman", jabatan: "Ketua Majelis Pengarah", link: "https://www.google.com/search?q=Dr.+Iftitah+Sulaiman" },
    anggota: [
      { nama: "Teuku R. Harsya, MT", link: "https://www.google.com/search?q=Teuku+R.+Harsya%2C+MT" },
      { nama: "Dodi Hanggodo, MPE", link: "https://www.google.com/search?q=Dodi+Hanggodo%2C+MPE" },
      { nama: "Ossy Dermawan, MSc", link: "https://www.google.com/search?q=Ossy+Dermawan%2C+MSc" },
      { nama: "I. B. Putera Partahama, PhD", link: "https://www.google.com/search?q=I.+B.+Putera+Partahama%2C+PhD" }
    ]
  },
  majelisPakar: {
    ketua: { nama: "Prof. Chay Asdak", jabatan: "Ketua Majelis Pakar", link: "https://www.linkedin.com/in/chay-asdak-69b42328/" },
    anggota: [
      { nama: "Prof. Agus Maryono", link: "https://www.google.com/search?q=Prof.+Agus+Maryono" },
      { nama: "Prof. Esti Handayani", link: "https://www.google.com/search?q=Prof.+Esti+Handayani" },
      { nama: "Dr. Muh. Herjanto", link: "https://www.google.com/search?q=Dr.+Muh.+Herjanto" },
      { nama: "Arie S. Moerwanto, PhD", link: "https://www.google.com/search?q=Arie+S.+Moerwanto%2C+PhD" }
    ]
  },
  pimpinanNasional: {
    ketuaUmum: { nama: "Dr. H. Irwan, S.IP., MP.", jabatan: "Ketua Nasional / Co-Founder", link: "https://www.google.com/search?q=Dr.+H.+Irwan%2C+S.IP.%2C+MP." },
    wakil: [
      { nama: "Nazib Faizal, ST., M.Sc", jabatan: "Wakil Ketua Nasional", link: "https://www.google.com/search?q=Nazib+Faizal%2C+ST.%2C+M.Sc" },
      { nama: "Jovan Latuconsina, MA", jabatan: "Wakil Ketua Nasional", link: "https://www.google.com/search?q=Jovan+Latuconsina%2C+MA" },
      { nama: "Dr Sigit Raditya", jabatan: "Wakil Ketua Nasional", link: "https://www.google.com/search?q=Sigit+Raditya" }
    ],
    inti: [
      { nama: "Iding A. Haidir, D.Phil", jabatan: "Sekretaris Nasional", link: "https://www.google.com/search?q=Iding+A.+Haidir%2C+D.Phil" },
      { nama: "Bambang Supriyadi, M.Si", jabatan: "Bendahara Nasional", link: "https://www.google.com/search?q=Bambang+Supriyadi%2C+M.Si" }
    ],
    direktorat: [
      { nama: "Yudhi Purnomo, M.IPOL", jabatan: "Direktur Aksi Lapangan & Komunitas", link: "https://www.google.com/search?q=Yudhi+Purnomo" },
      { nama: "Aris Dwi Subiantoro, SHut, MSc", jabatan: "Direktur Advokasi & Kebijakan", link: "https://www.google.com/search?q=Aris+Dwi+Subiantoro" },
      { nama: "Jasmine Doloksaribu, MBA", jabatan: "Direktur Edukasi, Kampanye & Media", link: "#" },
      { nama: "Agassi Revano, BA", jabatan: "Ko-Direktur Kemitraan & CSR", link: "https://www.google.com/search?q=Agassi+Rivano" },
      { nama: "Maaike Ira P., S.Hum., M.Si", jabatan: "Ko-Direktur Kemitraan & CSR", link: "https://www.google.com/search?q=Maaike+Ira+P.%2C+S.Hum.%2C+M.Si" },
      { nama: "Dr. Abdul Kodir", jabatan: "Direktur Data, Riset & Inovasi", link: "#" }
    ]
  },
};

function Connector({ fromColor = '#cbd5e1', toColor = '#cbd5e1', height = 'h-8' }) {
  return (
    <div className={`w-px ${height} mx-auto`}
      style={{ background: `linear-gradient(to bottom, ${fromColor}, ${toColor})` }} />
  );
}

function Badge({ label, color = 'emerald' }) {
  const map = {
    emerald: 'bg-emerald-600 text-white',
    blue: 'bg-blue-600 text-white',
    red: 'bg-red-600 text-white',
    slate: 'bg-slate-700 text-slate-300',
  };
  return (
    <span className={`inline-block text-[8px] font-black uppercase tracking-widest px-2 py-0.5 rounded ${map[color]}`}>
      {label}
    </span>
  );
}

function MajelisCard({ data, accent = 'emerald', icon: Icon }) {
  const [open, setOpen] = useState(false);
  const colors = {
    emerald: {
      border: 'border-emerald-200 hover:border-emerald-400',
      icon: 'bg-emerald-50 text-emerald-600',
      label: 'text-emerald-600',
      anggota: 'hover:text-emerald-600',
      badge: 'emerald',
    },
    blue: {
      border: 'border-blue-200 hover:border-blue-400',
      icon: 'bg-blue-50 text-blue-600',
      label: 'text-blue-600',
      anggota: 'hover:text-blue-600',
      badge: 'blue',
    },
  };
  const c = colors[accent];

  return (
    <div className={`bg-white border rounded-2xl shadow-sm overflow-hidden transition-all ${c.border}`}>
      <a href={data.ketua.link} target="_blank" rel="noopener noreferrer"
        className="flex items-center gap-3 p-4 group">
        <div className={`w-9 h-9 shrink-0 rounded-xl flex items-center justify-center ${c.icon}`}>
          <Icon size={18} />
        </div>
        <div className="min-w-0">
          <p className={`text-[9px] font-black uppercase tracking-wider ${c.label}`}>{data.ketua.jabatan}</p>
          <h4 className="font-extrabold text-xs text-slate-800 group-hover:underline leading-tight mt-0.5 break-words">
            {data.ketua.nama}
          </h4>
        </div>
      </a>

      <button
        onClick={() => setOpen(o => !o)}
        className="w-full flex items-center justify-between px-4 py-2.5 border-t border-slate-100 bg-slate-50/60 text-[9px] font-bold text-slate-400 uppercase tracking-widest hover:bg-slate-100 transition-colors"
        aria-expanded={open}
      >
        <span>Anggota ({data.anggota.length})</span>
        <Lucide.ChevronDown size={12} className={`transition-transform ${open ? 'rotate-180' : ''}`} />
      </button>

      {open && (
        <div className="divide-y divide-slate-50">
          {data.anggota.map((item, i) => (
            <a key={i} href={item.link} target="_blank" rel="noopener noreferrer"
              className={`block px-4 py-2.5 text-[11px] text-slate-600 font-semibold ${c.anggota} hover:bg-slate-50 transition-colors`}>
              {item.nama}
            </a>
          ))}
        </div>
      )}
    </div>
  );
}

export default function StrukturPage() {
  return (
    <section className="py-12 md:py-20 px-4 md:px-6 max-w-5xl mx-auto min-h-screen">

      <div className="mb-8">
        <Link to="/" className="inline-flex items-center gap-1.5 text-[10px] md:text-xs font-bold uppercase tracking-wider text-slate-400 hover:text-emerald-600 transition-colors group">
          <Lucide.ArrowLeft size={12} className="transition-transform group-hover:-translate-x-1" />
          Kembali ke Beranda
        </Link>
      </div>

      <div className="text-center mb-12 md:mb-16">
        <h1 className="text-2xl md:text-4xl font-black text-slate-900 tracking-tight">Struktur & Kepemimpinan</h1>
        <p className="text-[10px] md:text-xs text-slate-400 font-bold mt-2 uppercase tracking-widest">
          Gerakan yang terstruktur, kredibel, dan berdampak nyata.
        </p>
      </div>

      <div className="flex flex-col items-center gap-0">

        <div className="w-full">

          <div className="flex flex-col items-center md:hidden gap-4 w-full max-w-sm mx-auto">

            <a href={strukturData.founder.link} target="_blank" rel="noopener noreferrer"
              className="block w-full bg-white p-2 rounded-2xl border-2 border-red-500 shadow-xl shadow-red-100/30 active:scale-95 transition-transform">
              <div className="relative h-52 rounded-xl overflow-hidden bg-slate-100">
                <img src={strukturData.founder.foto} alt={strukturData.founder.nama}
                  className="w-full h-full object-cover object-top" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute bottom-0 left-0 p-4">
                  <Badge label="Founder" color="red" />
                  <h3 className="text-white font-extrabold text-sm tracking-tight mt-1 leading-snug">
                    {strukturData.founder.nama}
                  </h3>
                </div>
              </div>
            </a>

            <Connector fromColor="#ef4444" toColor="#10b981" height="h-6" />

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 w-full">
              <MajelisCard data={strukturData.majelisPengarah} accent="emerald" icon={Lucide.Building2} />
              <MajelisCard data={strukturData.majelisPakar} accent="blue" icon={Lucide.GraduationCap} />
            </div>
          </div>

          <div className="hidden md:grid grid-cols-[1fr_220px_1fr] gap-6 items-start w-full">

            <div className="flex flex-col gap-0 pt-10">
              <MajelisCard data={strukturData.majelisPengarah} accent="emerald" icon={Lucide.Building2} />
            </div>

            <div className="flex flex-col items-center">
              <a href={strukturData.founder.link} target="_blank" rel="noopener noreferrer"
                className="block w-full bg-white p-2 rounded-2xl border-2 border-red-500 shadow-xl shadow-red-100/40 group transition-all hover:-translate-y-1 duration-300">
                <div className="relative h-56 rounded-xl overflow-hidden bg-slate-100">
                  <img src={strukturData.founder.foto} alt={strukturData.founder.nama}
                    className="w-full h-full object-cover object-top contrast-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  <div className="absolute bottom-0 left-0 p-4">
                    <Badge label="Founder" color="red" />
                    <h3 className="text-white font-extrabold text-sm tracking-tight mt-1 leading-snug group-hover:underline">
                      {strukturData.founder.nama}
                    </h3>
                  </div>
                </div>
              </a>
              <div className="w-px flex-1 min-h-[2rem]"
                style={{ background: 'linear-gradient(to bottom, #ef4444, #3b82f6)' }} />
            </div>

            <div className="flex flex-col gap-0 pt-10">
              <MajelisCard data={strukturData.majelisPakar} accent="blue" icon={Lucide.GraduationCap} />
            </div>
          </div>
        </div>

        <div className="md:hidden">
          <Connector fromColor="#3b82f6" toColor="#1e3a8a" height="h-8" />
        </div>
        <div className="hidden md:block">
          <Connector fromColor="#3b82f6" toColor="#1e3a8a" height="h-2" />
        </div>

        <div className="w-full max-w-sm">
          <a href={strukturData.pimpinanNasional.ketuaUmum.link} target="_blank" rel="noopener noreferrer"
            className="block bg-blue-950 text-white rounded-2xl p-5 md:p-6 shadow-2xl shadow-blue-900/30 border border-blue-900/60 group transition-all hover:bg-blue-900 active:scale-[0.98]">
            <h3 className="font-black text-base md:text-xl tracking-wide group-hover:underline leading-tight">
              {strukturData.pimpinanNasional.ketuaUmum.nama}
            </h3>
            <p className="text-[9px] md:text-[10px] text-blue-300 font-bold uppercase tracking-widest mt-1.5">
              {strukturData.pimpinanNasional.ketuaUmum.jabatan}
            </p>
            <div className="flex flex-wrap gap-1.5 mt-3">
              <Badge label="Ketua Nasional" color="red" />
              <Badge label="Co-Founder" color="slate" />
            </div>
          </a>
        </div>

        <Connector fromColor="#1e3a8a" toColor="#475569" height="h-8" />

        <div className="w-full max-w-4xl">
          <p className="text-center text-[9px] font-black uppercase tracking-widest text-slate-400 mb-3">Wakil Ketua Nasional</p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {strukturData.pimpinanNasional.wakil.map((wk, i) => (
              <a key={i} href={wk.link} target="_blank" rel="noopener noreferrer"
                className="bg-white border border-slate-200 rounded-xl p-4 text-center shadow-sm hover:border-blue-400 hover:shadow-md transition-all group">
                <h4 className="font-extrabold text-xs text-blue-950 group-hover:underline leading-snug break-words">{wk.nama}</h4>
                <p className="text-[9px] text-slate-400 font-bold uppercase tracking-wider mt-1.5">{wk.jabatan}</p>
              </a>
            ))}
          </div>
        </div>

        <Connector fromColor="#475569" toColor="#64748b" height="h-8" />

        <div className="w-full max-w-2xl">
          <p className="text-center text-[9px] font-black uppercase tracking-widest text-slate-400 mb-3">Sekretariat & Keuangan</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {strukturData.pimpinanNasional.inti.map((it, i) => (
              <a key={i} href={it.link} target="_blank" rel="noopener noreferrer"
                className="bg-white border border-slate-200 rounded-xl p-4 text-center shadow-sm hover:border-blue-400 hover:shadow-md transition-all group">
                <h4 className="font-extrabold text-xs text-blue-950 group-hover:underline leading-snug break-words">{it.nama}</h4>
                <p className="text-[9px] text-slate-400 font-bold uppercase tracking-wider mt-1.5">{it.jabatan}</p>
              </a>
            ))}
          </div>
        </div>

        <Connector fromColor="#64748b" toColor="#10b981" height="h-8" />

        <div className="w-full max-w-4xl">
          <p className="text-center text-[9px] font-black uppercase tracking-widest text-slate-400 mb-3">Jajaran Direktur</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {strukturData.pimpinanNasional.direktorat.map((dir, i) => (
              <a key={i} href={dir.link} target="_blank" rel="noopener noreferrer"
                className="bg-white border border-slate-100 rounded-xl p-4 flex flex-col justify-center shadow-sm hover:border-emerald-300 hover:shadow-md transition-all group">
                <div className="w-7 h-7 rounded-lg bg-emerald-50 flex items-center justify-center text-emerald-500 mb-2.5">
                  <Lucide.Briefcase size={14} />
                </div>
                <h4 className="font-extrabold text-xs text-slate-800 group-hover:text-emerald-600 group-hover:underline leading-snug break-words">
                  {dir.nama}
                </h4>
                <p className="text-[9px] text-slate-400 font-medium leading-tight mt-1">{dir.jabatan}</p>
              </a>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}