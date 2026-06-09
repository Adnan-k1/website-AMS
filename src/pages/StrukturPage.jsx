import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import * as Lucide from 'lucide-react';
import fotoAHY from '../assets/ahy.jpeg';

const strukturData = {
  founder: {
    nama: "Dr. Agus Harimurti Yudhoyono",
    foto: fotoAHY,
    link: "https://www.google.com/search?q=Dr.+Agus+Harimurti+Yudhoyono&rlz=1C1GCEA_enID1117ID1117&oq=Dr.+Agus+Harimurti+Yudhoyono&gs_lcrp=EgZjaHJvbWUyBggAEEUYOTIKCAEQABgKGBYYHjIHCAIQABjvBTIHCAMQABjvBTIHCAQQABjvBTIHCAUQABjvBdIBBzQ3MWowajmoAgCwAgA&sourceid=chrome&ie=UTF-8"
  },
  majelisPengarah: {
    letua: { nama: "Dr. Iftitah Sulaiman", jabatan: "Ketua Majelis Pengarah", link: "https://www.google.com/search?q=Dr.+Iftitah+Sulaiman&rlz=1C1GCEA_enID1117ID1117&oq=Dr.+Iftitah+Sulaiman&gs_lcrp=EgZjaHJvbWUyBggAEEUYOTIICAEQABgWGB4yCAgCEAAYFhgeMggIAxAAGBYYHjIKCAQQABiABBiiBDIKCAUQABiiBBiJBTIKCAYQABiABBiiBDIKCAcQABiABBiiBNIBBzQ0MWowajmoAgCwAgA&sourceid=chrome&ie=UTF-8" }, // disesuaikan dari kunci asal
    ketua: { nama: "Dr. Iftitah Sulaiman", jabatan: "Ketua Majelis Pengarah", link: "https://www.google.com/search?q=Dr.+Iftitah+Sulaiman&rlz=1C1GCEA_enID1117ID1117&oq=Dr.+Iftitah+Sulaiman&gs_lcrp=EgZjaHJvbWUyBggAEEUYOTIICAEQABgWGB4yCAgCEAAYFhgeMggIAxAAGBYYHjIKCAQQABiABBiiBDIKCAUQABiiBBiJBTIKCAYQABiABBiiBDIKCAcQABiABBiiBNIBBzQ0MWowajmoAgCwAgA&sourceid=chrome&ie=UTF-8" },
    anggota: [
      { nama: "Teuku R. Harsya, MT", link: "https://www.google.com/search?q=Teuku+R.+Harsya%2C+MT&rlz=1C1GCEA_enID1117ID1117&oq=Teuku+R.+Harsya%2C+MT&gs_lcrp=EgZjaHJvbWUqBggAEEUYOzIGCAAQRRg7MgcIARAAGO8FMgcIAhAAGO8FMgoIAxAAGIAEGKIEMgcIBBAAGO8FMgoIBRAAGIAEGKIE0gEIMjI0NmowajmoAgCwAgA&sourceid=chrome&ie=UTF-8" },
      { nama: "Dodi Hanggodo, MPE", link: "https://www.google.com/search?q=Dodi+Hanggodo%2C+MPE&rlz=1C1GCEA_enID1117ID1117&oq=Dodi+Hanggodo%2C+MPE&gs_lcrp=EgZjaHJvbWUqBggAEEUYOzIGCAAQRRg7MggIARAAGA0YHjIKCAIQABgFGA0YHjIKCAMQABiABBiiBDIHCAQQABjvBTIKCAUQABiABBiiBDIHCAYQABjvBTIHCAcQABjvBdIBBzM4MWowajmoAgawAgHxBUlWyNJvL09x&sourceid=chrome&ie=UTF-8" },
      { nama: "Ossy Dermawan, MSc", link: "https://www.google.com/search?q=Ossy+Dermawan%2C+MSc&rlz=1C1GCEA_enID1117ID1117&oq=Ossy+Dermawan%2C+MSc&gs_lcrp=EgZjaHJvbWUqBggAEEUYOzIGCAAQRRg7MgcIARAhGI8CMgcIAhAhGI8C0gEINzQ0NmowajmoAgCwAgA&sourceid=chrome&ie=UTF-8" },
      { nama: "I. B. Putera Partahama, PhD", link: "https://www.google.com/search?q=I.+B.+Putera+Partahama%2C+PhD&rlz=1C1GCEA_enID1117ID1117&oq=I.+B.+Putera+Partahama%2C+PhD&gs_lcrp=EgZjaHJvbWUyBggAEEUYOTIJCAEQIRgKGKABMgcIAhAhGI8C0gEHNjI5ajBqNKgCALACAA&sourceid=chrome&ie=UTF-8" }
    ]
  },
  majelisPakar: {
    ketua: { nama: "Prof. Chay Asdak", jabatan: "Ketua Majelis Pakar", link: "https://www.linkedin.com/in/chay-asdak-69b42328/" },
    anggota: [
      { nama: "Prof. Agus Maryono", link: "https://www.google.com/search?q=Prof.+Agus+Maryono&rlz=1C1GCEA_enID1117ID1117&oq=Prof.+Agus+Maryono&gs_lcrp=EgZjaHJvbWUyBggAEEUYOTIICAEQABgWGB4yCAgCEAAYFhgeMggIAxAAGBYYHjIICAQQABgWGB4yBwgFEAAY7wUyBwgGEAAY7wUyBwgHEAAY7wXSAQc1NzZqMGo0qAIAsAIA&sourceid=chrome&ie=UTF-8" },
      { nama: "Prof. Esti Handayani", link: "https://www.google.com/search?q=Prof.+Esti+Handayani&rlz=1C1GCEA_enID1117ID1117&oq=Prof.+Esti+Handayani&gs_lcrp=EgZjaHJvbWUyBggAEEUYOTIICAEQABgWGB4yCAgCEAAYFhgeMggIAxAAGBYYHjIHCAQQABjvBTIKCAUQABiABBiiBDIKCAYQABiABBiiBNIBCDMzNTlqMGo5qAIAsAIA&sourceid=chrome&ie=UTF-8" },
      { nama: "Dr. Muh. Herjanto", link: "https://www.google.com/search?q=Dr.+Muh.+Herjanto&rlz=1C1GCEA_enID1117ID1117&oq=Dr.+Muh.+Herjanto&gs_lcrp=EgZjaHJvbWUyBggAEEUYOTIHCAEQABjvBTIHCAIQABjvBTIKCAMQABiABBiiBDIHCAQQABjvBTIHCAUQABjvBdIBCDI0MTBqMGo5qAIAsAIA&sourceid=chrome&ie=UTF-8" },
      { nama: "Arie S. Moerwanto, PhD", link: "https://www.google.com/search?q=Arie+S.+Moerwanto%2C+PhD&rlz=1C1GCEA_enID1117ID1117&oq=Arie+S.+Moerwanto%2C+PhD&gs_lcrp=EgZjaHJvbWUyBggAEEUYOTIHCAEQABjvBTIHCAIQABjvBTIHCAMQABjvBTIHCAQQABjvBdIBCDIyNTZqMGo5qAIAsAIA&sourceid=chrome&ie=UTF-8" }
    ]
  },
  pimpinanNasional: {
    ketuaUmum: { nama: "Dr. H. Irwan, S.IP., MP.", jabatan: "Ketua Nasional / Co-Founder", link: "https://www.google.com/search?q=Dr.+H.+Irwan%2C+S.IP.%2C+MP.&rlz=1C1GCEA_enID1117ID1117&oq=Dr.+H.+Irwan%2C+S.IP.%2C+MP.&gs_lcrp=EgZjaHJvbWUyBggAEEUYOTIICAEQABgWGB4yBwgCEAAY7wUyBwgDEAAY7wXSAQc2NzFqMGo5qAIAsAIA&sourceid=chrome&ie=UTF-8" },
    wakil: [
      { nama: "Nazib Faizal, ST., M.Sc", jabatan: "Wakil Ketua Nasional", link: "https://www.google.com/search?q=Nazib+Faizal%2C+ST.%2C+M.Sc&rlz=1C1GCEA_enID1117ID1117&oq=Nazib+Faizal%2C+ST.%2C+M.Sc&gs_lcrp=EgZjaHJvbWUyBggAEEUYOTIKCAEQABgKGBYYHjIKCAIQABiABBiiBDIHCAMQABjvBTIHCAQQABjvBTIHCAUQABjvBdIBBzU5OGowajmoAgCwAgA&sourceid=chrome&ie=UTF-8" },
      { nama: "Jovan Latuconsina, MA", jabatan: "Wakil Ketua Nasional", link: "https://www.google.com/search?q=Jovan+Latuconsina%2C+MA&sca_esv=524e7672773a6e77&rlz=1C1GCEA_enID1117ID1117&sxsrf=ANbL-n7etpaexYzwsYx3M5lrqG6D7CX7Gg%3A1780926723265&ei=A8kmarb4D4mZseMP9uG0aA&biw=851&bih=897&ved=0ahUKEwj2hdiF5feUAxWJTGwGHfYwDQ0Q4dUDCBA&uact=5&oq=Jovan+Latuconsina%2C+MA&gs_lp=Egxnd3Mtd2l6LXNlcnAiFUpvdmFuIExhdHVjb25zaW5hLCBNQTIEECEYFUinElClDVilDXABeACQAQCYAXqgAXqqAQMwLjG4AQPIAQD4AQL4AQGYAgKgApMBwgIHECMYsAMYJ8ICCRAAGB4YsAMYCsICCxAAGIAEGKIEGLADwgIIEAAY7wUYsAOYAwCIBgGQBgaSBwMxLjGgB50BsgcDMC4xuAeFAcIHBzAuMS4wLjHIBwyACAE&sclient=gws-wiz-serp" },
      { nama: "Dr Sigit Raditya", jabatan: "Wakil Ketua Nasional", link: "https://www.google.com/search?q=Sigit+Raditya&rlz=1C1GCEA_enID1117ID1117&oq=Sigit+Raditya&gs_lcrp=EgZjaHJvbWUyDAgAEEUYORjjAhiABDIHCAEQLhiABDIHCAIQABiABDIICAMQABgWGB4yCAgEEAAYFhgeMggIBRAAGBYYHjIICAYQABgWGB4yCAgHEAAYFhgeMggICBAAGBYYHjIICAkQABgWGB7SAQc4OTdqMGo5qAIAsAIA&sourceid=chrome&ie=UTF-8" }
    ],
    inti: [
      { nama: "Iding A. Haidir, D.Phil", jabatan: "Sekretaris Nasional", link: "https://www.google.com/search?q=Iding+A.+Haidir%2C+D.Phil&rlz=1C1GCEA_enID1117ID1117&oq=Iding+A.+Haidir%2C+D.Phil&gs_lcrp=EgZjaHJvbWUyBggAEEUYOTIJCAEQIRgKGKABMgkIAhAhGAoYoAEyCQgDECEYChigATIJCAQQIRgKGKABMgcIBRAhGI8CMgcIBhAhGI8C0gEHNDcxajBqOagCALACAA&sourceid=chrome&ie=UTF-8" },
      { nama: "Bambang Supriyadi, M.Si", jabatan: "Bendahara Nasional", link: "https://www.google.com/search?q=Bambang+Supriyadi%2C+M.Si&rlz=1C1GCEA_enID1117ID1117&oq=Bambang+Supriyadi%2C+M.Si&gs_lcrp=EgZjaHJvbWUyBggAEEUYOTIKCAEQABiABBiiBDIKCAIQABiABBiiBDIKCAMQABiABBiiBDIHCAQQABjvBTIKCAUQABiABBiiBNIBBzQ3NGowajmoAgCwAgA&sourceid=chrome&ie=UTF-8" }
    ],
    direktorat: [
      { nama: "Yudhi Purnomo, M.IPOL", jabatan: "Direktur Aksi Lapangan & Komunitas", link: "https://www.google.com/search?q=Yudhi+Purnomo&sca_esv=524e7672773a6e77&rlz=1C1GCEA_enID1117ID1117&biw=851&bih=897&sxsrf=ANbL-n4KPG6JXv_6Ma140BqzWuoHtVthpQ%3A1780926876546&ei=nMkmaqqJIdeSseMPlOvRyAk&ved=0ahUKEwiqx-PO5feUAxVXSWwGHZR1FJkQ4dUDCBA&uact=5&oq=Yudhi+Purnomo&gs_lp=Egxnd3Mtd2l6LXNlcnAiDVl1ZGhpIFB1cm5vbW8yBxAAGIAEGA0yBxAAGIAEGA0yBxAAGIAEGA0yBxAAGIAEGA0yBxAAGIAEGA0yBxAAGIAEGA0yBxAAGIAEGA0yBxAAGIAEGA0yBxAAGIAEGA0yBxAAGIAEGA1ItTRQxgRYnChwAXgAkAEAmAHdA6AB1wqqAQkyLjMuMC4xLjG4AQPIAQD4AQGYAgSgAtkFwgIGEAAYFhgewgIFEAAY7wXCAggQABiABBiiBJgDAIgGAZIHBzEuMi4wLjGgB5QjsgcHMS4yLjAuMbgH2QXCBwMyLTTIBxWACAE&sclient=gws-wiz-serp" },
      { nama: "Aris Dwi Subiantoro, SHut, MSc", jabatan: "Direktur Advokasi & Kebijakan", link: "https://www.google.com/search?q=Aris+Dwi+Subiantoro%2C+SHut%2C+MSc&rlz=1C1GCEA_enID1117ID1117&oq=Aris+Dwi+Subiantoro%2C+SHut%2C+MSc&gs_lcrp=EgZjaHJvbWUyBggAEEUYOTIHCAEQIRiPAjIHCAIQIRiPAtIBBzM0NWowajmoAgCwAgA&sourceid=chrome&ie=UTF-8" },
      { nama: "Jasmine Doloksaribu, MBA", jabatan: "Direktur Edukasi, Kampanye & Media", link: "https://www.google.com/search?sca_esv=524e7672773a6e77&rlz=1C1GCEA_enID1117ID1117&biw=851&bih=897&sxsrf=ANbL-n6E0FXqXH_-14h4wrAsFsvAuI0eVQ:1780927041262&q=Jasmine+Doloksaribu,+MBA&source=lnms&fbs=ADc_l-bZcMVrGKooVb3efWZDs_TyvVKQEflZjdJMuyb6HqpxqZt2TgWho72k-u1oI0h6hc-nmDWa6TMQn8SZL5dYhMXA-AvWySKy9UndWHIZBzUYPXw3UFNzFjFbuCvpUg8WCOYIZJvUkvl4L6DINlKMQsPdr8qSDjEkDrWPO62rKs2P6YSs3z26HngeteJ-RrAMfKn0d2nn40crvUPO4fm_VBwIWcwOi6IkGoqoEeFtfS373SkAaZw&sa=X&ved=2ahUKEwjr-aid5veUAxX-SGwGHWaOF-AQ0pQJegQICxAB" },
      { nama: "Agassi Revano, BA", jabatan: "Ko-Direktur Kemitraan & CSR", link: "https://www.google.com/search?q=Agassi+Rivano&sca_esv=524e7672773a6e77&rlz=1C1GCEA_enID1117ID1117&sxsrf=ANbL-n5d-YV16D69m4wPWldSRpUxf0eyQQ%3A1780927076040&ei=ZMomauCaAtWRseMPuKrXqAE&biw=851&bih=897&ved=0ahUKEwjg3POt5veUAxXVSGwGHTjVFRUQ4dUDCBA&uact=5&oq=Agassi+Rivano&gs_lp=Egxnd3Mtd2l6LXNlcnAiDUFnYXNzaSBSaXZhbm8yBxAhGAoYoAFItQ9QpwdYpQ1wAXgAkAEAmAF9oAHtAqoBAzMuMbgBA8gBAPgBAZgCBaACiAPCAgsQABiABBiiBBiwA8ICCxAAGIkFGKIEGLADmAMA4gMFEgExIECIBgGQBgSSBwM0LjGgB8IIsgcDMy4xuAeCA8IHBTAuNC4xyAcMgAgB&sclient=gws-wiz-serp" },
      { nama: "Maaike Ira P., S.Hum., M.Si", jabatan: "Ko-Direktur Kemitraan & CSR", link: "https://www.google.com/search?q=Maaike+Ira+P.%2C+S.Hum.%2C+M.Si&rlz=1C1GCEA_enID1117ID1117&oq=Maaike+Ira+P.%2C+S.Hum.%2C+M.Si&gs_lcrp=EgZjaHJvbWUyBggAEEUYOTIHCAEQIRiPAjIHCAIQIRiPAjIHCAMQIRiPAtIBCDIwMDhqMGo5qAIAsAIA&sourceid=chrome&ie=UTF-8" },
      { nama: "Dr. Abdul Kodir", jabatan: "Direktur Data, Riset & Inovasi", link: "#" }
    ]
  },
  
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

        

      </div>
    </section>
  );
}   