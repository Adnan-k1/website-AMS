import React from 'react';

const VoyageTimeline = () => {
  const voyageData = [
    {
      title: "AWAL PERJALANAN",
      tagline: "Mengenal dan Peduli",
      quote: "Perubahan besar selalu dimulai dari kepedulian kecil.",
      description: "Mengajak masyarakat mengenal kondisi sungai di sekitar mereka, memahami manfaat sungai bagi kehidupan, serta menumbuhkan rasa memiliki terhadap lingkungan.",
      icon: (props) => (
        <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" {...props}><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>
      )
    },
    {
      title: "MENYATUKAN LANGKAH",
      tagline: "Membangun Komunitas",
      quote: "Ketika banyak orang bergerak bersama, perubahan menjadi mungkin.",
      description: "Menghubungkan individu, komunitas, pelajar, akademisi, pelaku usaha, dan pemerintah dalam semangat menjaga dan memulihkan sungai.",
      icon: (props) => (
        <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" {...props}><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" /></svg>
      )
    },
    {
      title: "AKSI NYATA",
      tagline: "Berbuat untuk Sungai",
      quote: "Bukan hanya berbicara tentang perubahan, tetapi menjadi bagian dari perubahan.",
      description: "Kegiatan bersih sungai, penanaman pohon, edukasi lingkungan, pengurangan sampah, serta aksi-aksi nyata yang dapat dilakukan bersama masyarakat.",
      icon: (props) => (
        <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" {...props}><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" /></svg>
      )
    },
    {
      title: "MENCIPTAKAN DAMPAK",
      tagline: "Menginspirasi Lebih Banyak Orang",
      quote: "Satu aksi baik dapat menggerakkan ribuan langkah berikutnya.",
      description: "Menyebarkan cerita inspiratif, berbagi praktik baik, dan mengajak lebih banyak pihak untuk ikut serta menjaga sungai.",
      icon: (props) => (
        <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" {...props}><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.6 9h16.8M3.6 15h16.8M12 3a15.3 15.3 0 014.5 9l-4.5 9-4.5-9A15.3 15.3 0 0112 3z" /></svg>
      )
    },
    {
      title: "MASA DEPAN BERKELANJUTAN",
      tagline: "Warisan untuk Generasi Mendatang",
      quote: "Sungai yang sehat hari ini adalah kehidupan yang lebih baik untuk esok.",
      description: "Membangun gerakan yang berkelanjutan sehingga manfaatnya dapat dirasakan oleh generasi sekarang maupun generasi mendatang.",
      icon: (props) => (
        <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" {...props}><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707m12.728 0l-.707-.707M6.343 6.343l-.707-.707M14 12a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
      )
    }
  ];

  return (
    <section id="voyage" className="bg-gradient-to-b from-white to-slate-50/50 py-24 px-4 sm:px-6 lg:px-8 text-gray-700 relative overflow-hidden select-none border-t border-gray-100">
      
      {/* Header Section */}
      <div className="max-w-3xl mx-auto text-center mb-24">
        <span className="text-[15px] font-extrabold text-emerald-700 bg-emerald-50 px-4 py-1.5 rounded-full uppercase tracking-widest mb-3 inline-block border border-emerald-100">
             Alur Gerakan
        </span>
        <h2 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tight mb-4">
          Timeline
        </h2>
        <p className="text-sm md:text-base text-gray-500 max-w-xl mx-auto leading-relaxed">
          Tahapan perjalanan kami dalam menjaga, memulihkan, dan mewariskan sungai yang bersih untuk masa depan.
        </p>
        <div className="w-24 h-1 bg-gradient-to-r from-transparent via-emerald-500 to-transparent mx-auto mt-4 rounded-full"></div>
      </div>

      {/* ── TAMPILAN DESKTOP / LAPTOP (Horizontal Flex-Row) ── */}
      {/* h-[620px] memberikan ruang vertikal ekstra agar teks panjang tidak menabrak batas */}
      <div className="hidden lg:block max-w-7xl mx-auto relative px-4 h-[620px]">
        
        {/* Garis Penghubung Tengah */}
        <div className="absolute top-1/2 -translate-y-1/2 left-12 right-12 h-0.5 bg-gradient-to-r from-emerald-100 via-emerald-400 to-emerald-100 z-0"></div>

        <div className="flex justify-between items-start gap-4 relative z-10 h-full">
          {voyageData.map((item, index) => {
            const Icon = item.icon;
            const isEven = index % 2 === 0;

            return (
              <div key={index} className="flex flex-col items-center group w-1/5 h-full relative justify-center">
                
                {/* 1. BLOK KARTU ATAS */}
                {/* Menghapus h kaku, menggunakan h-fit agar tinggi kartu membesar alami sesuai panjang teks */}
                <div className="w-full absolute bottom-[54%] flex items-end justify-center">
                  {isEven && (
                    <div className="bg-white rounded-2xl border border-slate-100 p-5 shadow-lg shadow-slate-100/80 group-hover:shadow-xl group-hover:shadow-emerald-100/50 group-hover:-translate-y-1 transition-all duration-300 relative w-full h-fit">
                      <div className="text-[9px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded w-fit mb-2 uppercase tracking-wider border border-emerald-100">
                        Fase 0{index + 1}
                      </div>
                      <h3 className="text-sm font-bold text-slate-900 mb-1 group-hover:text-emerald-700 transition-colors duration-300">{item.tagline}</h3>
                      <p className="text-[11px] text-gray-400 italic border-l-2 border-emerald-400 pl-2 mb-2">"{item.quote}"</p>
                      <p className="text-[11px] text-gray-500 leading-relaxed">{item.description}</p>
                      
                      {/* Ekor Penunjuk bawah */}
                      <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-white border-r border-b border-slate-100 rotate-45"></div>
                    </div>
                  )}
                </div>

                {/* 2. POROS UTAMA (NODE TIMELINE) */}
                <div className="absolute top-1/2 -translate-y-1/2 flex flex-col items-center justify-center z-20">
                  <div className="absolute w-12 h-12 rounded-full bg-emerald-500/0 group-hover:bg-emerald-500/10 group-hover:animate-ping transition-all duration-300"></div>
                  
                  <div className="w-10 h-10 rounded-full bg-white border-2 border-emerald-500 group-hover:border-slate-900 shadow-md flex items-center justify-center transition-all duration-300 group-hover:scale-110 cursor-pointer">
                    <Icon className="w-4 h-4 text-emerald-600 group-hover:text-slate-900 transition-colors duration-300" />
                  </div>
                  
                  {/* DIUBAH: Judul dibuat selang-seling (isEven ? 'top-12' : 'bottom-12') agar menjauhi deskripsi kartu */}
                  <span className={`absolute whitespace-nowrap text-[9px] font-black tracking-widest text-slate-400 group-hover:text-emerald-600 transition-colors duration-300 uppercase ${
                    isEven ? 'top-12' : 'bottom-12'
                  }`}>
                    {item.title}
                  </span>
                </div>

                {/* 3. BLOK KARTU BAWAH */}
                {/* Menghapus h kaku, menggunakan h-fit agar tinggi kartu membesar alami sesuai panjang teks */}
                <div className="w-full absolute top-[54%] flex items-start justify-center">
                  {!isEven && (
                    <div className="bg-white rounded-2xl border border-slate-100 p-5 shadow-lg shadow-slate-100/80 group-hover:shadow-xl group-hover:shadow-emerald-100/50 group-hover:translate-y-1 transition-all duration-300 relative w-full h-fit">
                      {/* Ekor Penunjuk atas */}
                      <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-white border-l border-t border-slate-100 rotate-45"></div>
                      
                      <div className="text-[9px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded w-fit mb-2 uppercase tracking-wider border border-emerald-100">
                        Fase 0{index + 1}
                      </div>
                      <h3 className="text-sm font-bold text-slate-900 mb-1 group-hover:text-emerald-700 transition-colors duration-300">{item.tagline}</h3>
                      <p className="text-[11px] text-gray-400 italic border-l-2 border-emerald-400 pl-2 mb-2">"{item.quote}"</p>
                      <p className="text-[11px] text-gray-500 leading-relaxed">{item.description}</p>
                    </div>
                  )}
                </div>

              </div>
            );
          })}
        </div>
      </div>

      {/* ── TAMPILAN MOBILE & TABLET (Vertical Timeline Responsive) ── */}
      <div className="block lg:hidden max-w-xl mx-auto relative px-2">
        <div className="absolute top-0 bottom-0 left-[27px] w-0.5 bg-gradient-to-b from-emerald-400 to-emerald-100"></div>

        <div className="space-y-8 relative">
          {voyageData.map((item, index) => {
            const Icon = item.icon;
            return (
              <div key={index} className="flex gap-6 items-start">
                
                {/* Node Bulat Kiri */}
                <div className="relative flex items-center justify-center flex-shrink-0 mt-1">
                  <div className="absolute w-10 h-10 rounded-full bg-emerald-500/10 animate-pulse"></div>
                  <div className="w-10 h-10 rounded-full bg-white border-2 border-emerald-500 shadow-sm flex items-center justify-center z-10">
                    <Icon className="w-4 h-4 text-emerald-600" />
                  </div>
                </div>

                {/* Konten Kartu Kanan */}
                <div className="bg-white rounded-2xl border border-slate-100 p-5 shadow-md flex-1">
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className="text-[9px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded uppercase tracking-wider">
                      Fase 0{index + 1} — {item.title}
                    </span>
                  </div>
                  <h3 className="text-base font-extrabold text-slate-900 mb-1">{item.tagline}</h3>
                  <p className="text-xs text-emerald-700 italic border-l-2 border-emerald-400 pl-2 mb-3 bg-emerald-50/30 py-1">
                    "{item.quote}"
                  </p>
                  <p className="text-xs text-gray-500 leading-relaxed">
                    {item.description}
                  </p>
                </div>

              </div>
            );
          })}
        </div>
      </div>

    </section>
  );
};

export default VoyageTimeline;