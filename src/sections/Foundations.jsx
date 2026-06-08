import React, { useState } from 'react';
import { foundationsData } from '../data/amsData';

// ============================================================
// HELPER — normalisasi URL foto
// ============================================================
const getOptimalImage = (url) => {
  if (!url) return '';
  const clean = url.trim();
  if (clean.includes('unsplash.com') || clean.includes('pexels.com')) {
    return `${clean.split('?')[0]}?auto=format,compress&fit=crop&w=800&q=80`;
  }
  return clean;
};

// Pemetaan posisi yang aman dan kompatibel untuk div (background) maupun img (object)
const getBgPositionClass = (pos) => {
  if (pos === 'bg-bottom' || pos === 'object-bottom') return 'bg-bottom';
  if (pos === 'bg-top' || pos === 'object-top') return 'bg-top';
  return 'bg-center';
};

const getImgObjectPositionClass = (pos) => {
  if (pos === 'bg-bottom' || pos === 'object-bottom') return 'object-bottom';
  if (pos === 'bg-top' || pos === 'object-top') return 'object-top';
  return 'object-center';
};

// ============================================================
// SUB-KOMPONEN: Panel Expanded (muncul DI ATAS grid)
// ============================================================
function ExpandedPanel({ card }) {
  const imgSrc = getOptimalImage(card.bgImage);
  // Menggunakan fungsi pemetaan khusus tag <img>
  const imgPosition = getImgObjectPositionClass(card.bgPos);

  return (
    <div
      className="w-full rounded-2xl overflow-hidden border border-slate-700 bg-slate-900 text-white mb-6 relative z-30"
      style={{
        animation: 'fadeSlideDown 0.3s ease forwards',
        boxShadow: '0 30px 60px -15px rgba(0,0,0,0.4)',
      }}
    >
      <div className="flex flex-col md:flex-row min-h-[260px] md:h-72">

        {/* ── Kiri: Foto ── */}
        <div className="w-full md:w-2/5 h-52 md:h-full relative overflow-hidden flex-shrink-0">
          <img
            src={imgSrc}
            alt={card.title}
            className={`w-full h-full object-cover ${imgPosition}`}
          />
          <div className="absolute inset-0 bg-gradient-to-b md:bg-gradient-to-r from-transparent via-transparent to-slate-900 opacity-80" />
        </div>

        {/* ── Kanan: Konten (Tanpa Tombol X) ── */}
        <div className="flex-1 p-6 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-3">
              <span className="text-[10px] font-mono font-bold text-emerald-400 tracking-widest uppercase">
                FONDASI // {card.id}
              </span>
            </div>

            <h3 className="text-lg md:text-xl font-bold text-slate-100 tracking-tight mb-2">
              {card.title}
            </h3>

            <div className="border-t border-slate-800 pt-3">
              <p className="text-xs md:text-sm text-slate-300 font-light leading-relaxed max-h-36 md:max-h-40 overflow-y-auto pr-1">
                {card.desc}
              </p>
            </div>
          </div>

          <p className="text-[10px] text-slate-500 font-mono mt-3 pt-2 border-t border-slate-800/50">
            * Klik kembali kartu yang aktif atau klik area luar untuk menutup detail ini.
          </p>
        </div>

      </div>
    </div>
  );
}

// ============================================================
// SUB-KOMPONEN: Kartu Normal (di dalam grid)
// ============================================================
function NormalCard({ card, isActive, isDimmed, onClick }) {
  const imgSrc = getOptimalImage(card.bgImage);
  
  // Menggunakan fungsi pemetaan khusus properti CSS Background div
  const bgPosition = getBgPositionClass(card.bgPos);

  return (
    <div
      onClick={onClick}
      className={`group relative rounded-2xl overflow-hidden cursor-pointer bg-slate-950 border transition-all duration-300 ease-in-out h-48 z-30
        ${isActive 
          ? 'border-emerald-500 ring-2 ring-emerald-500/20 shadow-xl' 
          : 'border-slate-200/10'
        }
        ${isDimmed 
          ? 'opacity-30 scale-[0.98] blur-[0.3px] hover:opacity-100 hover:blur-0' 
          : 'hover:-translate-y-1 hover:border-slate-700 hover:shadow-xl'
        }
      `}
    >
      <div
        className={`absolute inset-0 bg-cover transition-transform duration-700 ease-out opacity-50 group-hover:scale-105 group-hover:opacity-65 ${bgPosition}`}
        style={{ backgroundImage: `url(${imgSrc})` }}
      />

      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent opacity-90 group-hover:opacity-95 transition-opacity duration-300" />

      <div className="absolute inset-0 p-5 flex flex-col justify-between text-white z-10 select-none">
        <span className="text-[10px] font-mono text-slate-400 tracking-widest">
          — {card.id}
        </span>
        <div>
          <h3 className={`font-bold text-[15px] tracking-tight transition-colors duration-200
            ${isActive ? 'text-emerald-400' : 'text-white group-hover:text-emerald-400'}
          `}>
            {card.title}
          </h3>
          <span className="text-[9px] text-slate-400 font-light mt-1 block opacity-0 group-hover:opacity-100 transition-all duration-200 translate-y-1 group-hover:translate-y-0">
            {isActive ? 'Klik kembali untuk menutup ↑' : 'Klik untuk melihat detail →'}
          </span>
        </div>
      </div>
    </div>
  );
}

// ============================================================
// KOMPONEN UTAMA: Foundations
// ============================================================
export default function Foundations() {
  const [activeCardId, setActiveCardId] = useState(null);

  const activeCard = activeCardId !== null
    ? foundationsData.find((c) => c.id === activeCardId)
    : null;

  const handleCardClick = (id) => {
    setActiveCardId(activeCardId === id ? null : id);
  };

  return (
    <>
      <style>{`
        @keyframes fadeSlideDown {
          from { opacity: 0; transform: translateY(-10px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>

      <section id="fungsi" className="py-24 bg-slate-50 px-6 relative overflow-hidden">
        {/* Aksen latar belakang */}
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-emerald-500/5 rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-5xl mx-auto relative z-10">

          {/* ── HEADER ── */}
          <div className="mb-16 text-left border-b border-slate-200/60 pb-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-100 mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-[13px] font-semibold text-emerald-700 uppercase tracking-widest">
                Fungsi Vital
              </span>
            </div>
            <h2 className="text-3xl font-bold text-slate-900 tracking-tight">
              Fondasi Peradaban
            </h2>
            <p className="text-xs md:text-sm text-slate-400 mt-2 max-w-2xl leading-relaxed font-light">
              Fungsi vital sungai dalam mendukung kehidupan, pelestarian lingkungan, dan kemajuan peradaban bangsa Indonesia.
            </p>
          </div>

          {/* ── PANEL EXPANDED — muncul di atas grid saat kartu diklik ── */}
          {activeCard && (
            <ExpandedPanel
              card={activeCard}
            />
          )}

          {/* ── GRID KARTU ── */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {foundationsData.map((card) => (
              <NormalCard
                key={card.id}
                card={card}
                isActive={activeCardId === card.id}
                isDimmed={activeCardId !== null && card.id !== activeCardId}
                onClick={() => handleCardClick(card.id)}
              />
            ))}
          </div>

        </div>

        {/* ── INVISIBLE BACKDROP CLOSER ── */}
        {activeCardId && (
          <div 
            className="fixed inset-0 z-20 cursor-zoom-out" 
            onClick={() => setActiveCardId(null)} 
          />
        )}
      </section>
    </>
  );
}