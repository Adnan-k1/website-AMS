import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import * as Lucide from 'lucide-react';
import fotoAHY from '../assets/ahy.jpeg';

const strukturData = {
  founder: {
    nama: "Dr. Agus Harimurti Yudhoyono",
    foto: fotoAHY,
    link: "#"
  },
  majelisPengarah: {
    letua: { nama: "Dr. Iftitah Sulaiman", jabatan: "Ketua Majelis Pengarah", link: "#" }, // disesuaikan dari kunci asal
    ketua: { nama: "Dr. Iftitah Sulaiman", jabatan: "Ketua Majelis Pengarah", link: "#" },
    anggota: [
      { nama: "Teuku R. Harsya, MT", link: "#" },
      { nama: "Dodi Hanggodo, MPE", link: "#" },
      { nama: "Ossy Dermawan, MSc", link: "#" },
      { nama: "I. B. Putera Partahama, PhD", link: "#" }
    ]
  },
  majelisPakar: {
    ketua: { nama: "Prof. Chay Asdak", jabatan: "Ketua Majelis Pakar", link: "#" },
    anggota: [
      { nama: "Prof. Agus Maryono", link: "#" },
      { nama: "Prof. Esti Handayani", link: "#" },
      { nama: "Dr. Muh. Herjanto", link: "#" },
      { nama: "Arie S. Moerwanto, PhD", link: "#" }
    ]
  },
  pimpinanNasional: {
    ketuaUmum: { nama: "Dr. H. Irwan, S.IP., MP.", jabatan: "Ketua Nasional / Co-Founder", link: "#" },
    wakil: [
      { nama: "Nazib Faizal, ST., M.Sc", jabatan: "Wakil Ketua Nasional", link: "#" },
      { nama: "Jovan Latuconsina, MA", jabatan: "Wakil Ketua Nasional", link: "#" },
      { nama: "Sigit Raditya", jabatan: "Wakil Ketua Nasional", link: "#" }
    ],
    inti: [
      { nama: "Iding A. Haidir, D.Phil", jabatan: "Sekretaris Nasional", link: "#" },
      { nama: "Bambang Supriyadi, M.Si", jabatan: "Bendahara Nasional", link: "#" }
    ],
    direktorat: [
      { nama: "Yudhi Purnomo, M.IPOL", jabatan: "Direktur Aksi Lapangan & Komunitas", link: "#" },
      { nama: "Aris Dwi Subiantoro, SHut, MSc", jabatan: "Direktur Advokasi & Kebijakan", link: "#" },
      { nama: "Jasmine Doloksaribu, MBA", jabatan: "Direktur Edukasi, Kampanye & Media", link: "#" },
      { nama: "Agassi Rivano, BA", jabatan: "Ko-Direktur Kemitraan & CSR", link: "#" },
      { nama: "Maaike Ira P., S.Hum., M.Si", jabatan: "Ko-Direktur Kemitraan & CSR", link: "#" },
      { nama: "Dr. Abdul Kodir", jabatan: "Direktur Data, Riset & Inovasi", link: "#" }
    ]
  },
  pengurusNasionalLengkap: [
    { nama: "Andi Saputra, S.H.", jabatan: "Deputi Hukum & Organisasi" },
    { nama: "Rizky Amelia, M.Si", jabatan: "Hubungan Antar Lembaga" },
    { nama: "Fahmi Idris, B.Eng", jabatan: "Teknologi & Sistem Informasi" }
  ],
  relawanWilayah: [
    { nama: "Wilayah Ciliwung Raya", jabatan: "Koordinator DKI Jakarta & Sekitarnya" },
    { nama: "Wilayah Sungai Mahakam", jabatan: "Koordinator Kalimantan Timur" },
    { nama: "Wilayah Sungai Bengawan Solo", jabatan: "Koordinator Jawa Tengah & Jatim" }
  ]
};

function Connector({ color = 'bg-slate-300' }) {
  return <div className={`w-px h-8 ${color} mx-auto`} />;
}

export default function StrukturPage() {
  const ArrowLeftIcon = Lucide.ArrowLeft;
  const UsersIcon = Lucide.Users;
  const MapIcon = Lucide.MapPin;
  const [filterBawah, setFilterBawah] = useState('nasional');

  return (
    <section className="py-16 px-4 max-w-6xl mx-auto bg-slate-50/50 min-h-screen">
      
      {/* ── TOMBOL KEMBALI ── */}
      <div className="mb-8 max-w-5xl mx-auto">
        <Link to="/" className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-400 hover:text-emerald-600 transition-colors group">
          <ArrowLeftIcon size={14} className="transition-transform group-hover:-translate-x-1" />
          Kembali ke Beranda
        </Link>
      </div>

      {/* ── JUDUL HALAMAN ── */}
      <div className="text-center max-w-2xl mx-auto mb-12">
        <h1 className="text-2xl md:text-3xl font-black text-slate-900 tracking-tight">Struktur & Kepemimpinan</h1>
        <p className="text-xs md:text-sm text-slate-400 font-medium mt-2 uppercase tracking-wider">
          Gerakan yang terstruktur, kredibel, dan berdampak nyata.
        </p>
      </div>

      {/* ── ALUR STRUKTUR ATAS ── */}
      <div className="flex flex-col items-center">

        {/* LAYOUT DESKTOP (3 Kolom Sejajar: Pengarah | Founder | Pakar) */}
        <div className="hidden md:grid md:grid-cols-[1fr_auto_1fr] w-full max-w-5xl items-start">

          {/* Kiri: Majelis Pengarah */}
          <div className="flex flex-col items-center pt-12 pr-6">
            <a href={strukturData.majelisPengarah.ketua.link} target="_blank" rel="noopener noreferrer"
              className="bg-white border border-emerald-200 rounded-xl p-4 text-center shadow-sm w-full max-w-xs flex flex-col items-center justify-center min-h-[88px] hover:border-emerald-400 transition-all group">
              <div className="w-8 h-8 rounded-lg bg-emerald-50 flex items-center justify-center text-emerald-600 mb-2">
                <Lucide.Building2 size={16} />
              </div>
              <h4 className="font-extrabold text-xs text-slate-800 group-hover:text-emerald-600">{strukturData.majelisPengarah.ketua.nama}</h4>
              <span className="text-[9px] text-emerald-600 font-bold uppercase tracking-wider mt-1">{strukturData.majelisPengarah.ketua.jabatan}</span>
            </a>
            <div className="w-px h-5 bg-slate-200 mx-auto" />
            <div className="bg-white border border-slate-100 rounded-xl p-4 w-full max-w-xs space-y-2 shadow-sm">
              <span className="text-[9px] font-bold text-slate-400 uppercase tracking-widest block text-center mb-1">Anggota Majelis Pengarah</span>
              {strukturData.majelisPengarah.anggota.map((item, i) => (
                <a key={i} href={item.link} target="_blank" rel="noopener noreferrer"
                  className="block text-[11px] text-slate-600 font-semibold py-1 border-b border-slate-50 last:border-0 text-center hover:text-emerald-600 hover:underline">
                  {item.nama}
                </a>
              ))}
            </div>
          </div>

          {/* Tengah: Founder (Ukuran Diperbesar) */}
          <div className="flex flex-col items-center">
            <a 
              href={strukturData.founder.link} 
              target="_blank" 
              rel="noopener noreferrer"
              className="block bg-white p-2 rounded-2xl border-2 border-red-500 shadow-xl shadow-red-100/40 group transition-all duration-300 hover:-translate-y-1"
            >
              <div className="relative h-52 w-60 rounded-xl overflow-hidden bg-slate-100">
                <img 
                  src={strukturData.founder.foto} 
                  alt={strukturData.founder.nama} 
                  className="w-full h-full object-cover object-top filter contrast-105" 
                />
                <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/80 via-black/40 to-transparent p-4 text-left">
                  <span className="text-[8px] font-black uppercase bg-red-600 text-white px-2 py-0.5 rounded tracking-widest">
                    Founder
                  </span>
                  <h3 className="text-white font-extrabold text-base tracking-tight mt-1 group-hover:underline">
                    {strukturData.founder.nama}
                  </h3>
                </div>
              </div>
            </a>
            {/* Garis panjang penyambung ke bawah */}
            <div className="w-px bg-gradient-to-b from-red-300 to-blue-300 flex-1 min-h-[220px]" />
          </div>

          {/* Kanan: Majelis Pakar */}
          <div className="flex flex-col items-center pt-12 pl-6">
            <a href={strukturData.majelisPakar.ketua.link} target="_blank" rel="noopener noreferrer"
              className="bg-white border border-blue-200 rounded-xl p-4 text-center shadow-sm w-full max-w-xs flex flex-col items-center justify-center min-h-[88px] hover:border-blue-400 transition-all group">
              <div className="w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center text-blue-600 mb-2">
                <Lucide.GraduationCap size={16} />
              </div>
              <h4 className="font-extrabold text-xs text-slate-800 group-hover:text-blue-600">{strukturData.majelisPakar.ketua.nama}</h4>
              <span className="text-[9px] text-blue-600 font-bold uppercase tracking-wider mt-1">{strukturData.majelisPakar.ketua.jabatan}</span>
            </a>
            <div className="w-px h-5 bg-slate-200 mx-auto" />
            <div className="bg-white border border-slate-100 rounded-xl p-4 w-full max-w-xs space-y-2 shadow-sm">
              <span className="text-[9px] font-bold text-slate-400 uppercase tracking-widest block text-center mb-1">Anggota Majelis Pakar</span>
              {strukturData.majelisPakar.anggota.map((item, i) => (
                <a key={i} href={item.link} target="_blank" rel="noopener noreferrer"
                  className="block text-[11px] text-slate-600 font-semibold py-1 border-b border-slate-50 last:border-0 text-center hover:text-blue-600 hover:underline">
                  {item.nama}
                </a>
              ))}
            </div>
          </div>

        </div>

        {/* LAYOUT MOBILE (Vertikal Stack) */}
        <div className="md:hidden flex flex-col items-center gap-5 mb-8 w-full max-w-xs">
          {/* Founder Mobile - Ikut disesuaikan ukurannya agar besar & tegas */}
          <a href={strukturData.founder.link} target="_blank" rel="noopener noreferrer"
            className="block bg-white p-2 rounded-2xl border-2 border-red-500 shadow-xl w-full">
            <div className="relative h-52 rounded-xl overflow-hidden bg-slate-100">
              <img src={strukturData.founder.foto} alt={strukturData.founder.nama} className="w-full h-full object-cover object-top" />
              <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/80 to-transparent p-4 text-left">
                <span className="text-[8px] font-black uppercase bg-red-600 text-white px-2 py-0.5 rounded tracking-widest">Founder</span>
                <h3 className="text-white font-extrabold text-base tracking-tight mt-1">{strukturData.founder.nama}</h3>
              </div>
            </div>
          </a>
          
          {/* Majelis Pengarah Mobile */}
          <div className="bg-emerald-50/40 border border-emerald-100 rounded-2xl p-4 w-full flex flex-col items-center">
            <h4 className="font-extrabold text-xs text-slate-800">{strukturData.majelisPengarah.ketua.nama}</h4>
            <span className="text-[9px] text-emerald-600 font-bold uppercase tracking-wider mb-2">{strukturData.majelisPengarah.ketua.jabatan}</span>
            {strukturData.majelisPengarah.anggota.map((a, i) => (
              <span key={i} className="text-[11px] text-slate-600 py-0.5">{a.nama}</span>
            ))}
          </div>
          
          {/* Majelis Pakar Mobile */}
          <div className="bg-blue-50/40 border border-blue-100 rounded-2xl p-4 w-full flex flex-col items-center">
            <h4 className="font-extrabold text-xs text-slate-800">{strukturData.majelisPakar.ketua.nama}</h4>
            <span className="text-[9px] text-blue-600 font-bold uppercase tracking-wider mb-2">{strukturData.majelisPakar.ketua.jabatan}</span>
            {strukturData.majelisPakar.anggota.map((a, i) => (
              <span key={i} className="text-[11px] text-slate-600 py-0.5">{a.nama}</span>
            ))}
          </div>
        </div>

        {/* ── KETUA NASIONAL ── */}
        <div className="z-10 w-full max-w-sm text-center mb-0">
          <a href={strukturData.pimpinanNasional.ketuaUmum.link} target="_blank" rel="noopener noreferrer"
            className="block bg-blue-950 text-white rounded-2xl p-6 shadow-xl border border-blue-900 group transition-all duration-300 hover:scale-[1.02] hover:bg-blue-900">
            <h3 className="font-black text-base md:text-lg tracking-wide group-hover:underline">{strukturData.pimpinanNasional.ketuaUmum.nama}</h3>
            <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest mt-1">{strukturData.pimpinanNasional.ketuaUmum.jabatan}</p>
            <div className="flex justify-center gap-2 mt-3">
              <span className="text-[8px] font-extrabold bg-red-600 text-white px-2 py-0.5 rounded uppercase">Ketua Nasional</span>
              <span className="text-[8px] font-extrabold bg-slate-800 text-slate-300 px-2 py-0.5 rounded uppercase">Co-Founder</span>
            </div>
          </a>
        </div>

        <Connector color="bg-slate-300" />

        {/* ── WAKIL KETUA NASIONAL ── */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full max-w-4xl z-10">
          {strukturData.pimpinanNasional.wakil.map((wk, i) => (
            <a key={i} href={wk.link} target="_blank" rel="noopener noreferrer"
              className="bg-white border border-slate-200/60 rounded-xl p-4 text-center shadow-sm block hover:border-blue-400 transition-colors group">
              <h4 className="font-extrabold text-xs text-blue-950 group-hover:underline">{wk.nama}</h4>
              <p className="text-[9px] text-slate-400 font-bold uppercase tracking-wider mt-0.5">{wk.jabatan}</p>
            </a>
          ))}
        </div>

        <Connector color="bg-slate-300" />

        {/* ── SEKRETARIS & BENDAHARA ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full max-w-2xl z-10">
          {strukturData.pimpinanNasional.inti.map((it, i) => (
            <a key={i} href={it.link} target="_blank" rel="noopener noreferrer"
              className="bg-white border border-slate-200/60 rounded-xl p-4 text-center shadow-sm block hover:border-blue-400 transition-colors group">
              <h4 className="font-extrabold text-xs text-blue-950 group-hover:underline">{it.nama}</h4>
              <p className="text-[9px] text-slate-400 font-bold uppercase tracking-wider mt-0.5">{it.jabatan}</p>
            </a>
          ))}
        </div>

        <Connector color="bg-slate-300" />

        {/* ── JAJARAN DIREKTUR ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 w-full max-w-4xl z-10">
          {strukturData.pimpinanNasional.direktorat.map((dir, i) => (
            <a key={i} href={dir.link} target="_blank" rel="noopener noreferrer"
              className="bg-white border border-slate-100 rounded-xl p-4 flex flex-col justify-center text-center shadow-sm hover:border-emerald-200 transition-colors group">
              <h4 className="font-extrabold text-xs text-slate-800 group-hover:text-emerald-600 group-hover:underline">{dir.nama}</h4>
              <p className="text-[9px] text-slate-400 font-medium leading-tight mt-1">{dir.jabatan}</p>
            </a>
          ))}
        </div>

        <Connector color="bg-slate-300" />

        {/* ── FILTER DETAIL TABEL PENGURUS & RELAWAN ── */}
        <div className="w-full max-w-4xl bg-white border border-slate-100 rounded-2xl p-6 text-center shadow-sm z-10">
          <p className="text-[11px] md:text-xs text-slate-500 font-semibold leading-relaxed mb-4">
            Serta didukung oleh seluruh jajaran Pengurus Nasional dan Relawan di Seluruh Wilayah Sungai Indonesia.
          </p>
          <div className="flex flex-wrap justify-center gap-3 mb-6">
            <button onClick={() => setFilterBawah('nasional')}
              className={`inline-flex items-center gap-1.5 font-bold text-[10px] uppercase tracking-wider px-4 py-2 rounded-lg border transition-all ${filterBawah === 'nasional' ? 'bg-blue-950 text-white border-blue-950 shadow-sm' : 'bg-slate-50 text-slate-600 border-slate-200 hover:bg-slate-100'}`}>
              <UsersIcon size={12} /> Pengurus Nasional
            </button>
            <button onClick={() => setFilterBawah('wilayah')}
              className={`inline-flex items-center gap-1.5 font-bold text-[10px] uppercase tracking-wider px-4 py-2 rounded-lg border transition-all ${filterBawah === 'wilayah' ? 'bg-emerald-600 text-white border-emerald-600 shadow-sm' : 'bg-slate-50 text-slate-600 border-slate-200 hover:bg-slate-100'}`}>
              <MapIcon size={12} /> Relawan Wilayah
            </button>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 bg-slate-50 p-4 rounded-xl border border-slate-100">
            {filterBawah === 'nasional'
              ? strukturData.pengurusNasionalLengkap.map((ps, idx) => (
                  <div key={idx} className="bg-white p-3 rounded-lg border border-slate-200/60 text-left shadow-sm">
                    <h5 className="font-bold text-xs text-slate-800">={ps.nama}</h5>
                    <p className="text-[9px] text-slate-400 uppercase tracking-wide mt-0.5">{ps.jabatan}</p>
                  </div>
                ))
              : strukturData.relawanWilayah.map((rl, idx) => (
                  <div key={idx} className="bg-white p-3 rounded-lg border border-slate-200/60 text-left shadow-sm">
                    <h5 className="font-bold text-xs text-emerald-700">{rl.nama}</h5>
                    <p className="text-[9px] text-slate-400 mt-0.5">{rl.jabatan}</p>
                  </div>
                ))
            }
          </div>
        </div>

      </div>
    </section>
  );
}   