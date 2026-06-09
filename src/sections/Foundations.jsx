import React, { useState, useRef, useEffect } from 'react';
import { foundationsData } from '../data/amsData';

const getOptimalImage = (url) => {
  if (!url) return '';
  const clean = url.trim();
  if (clean.includes('unsplash.com') || clean.includes('pexels.com')) {
    return `${clean.split('?')[0]}?auto=format,compress&fit=crop&w=800&q=80`;
  }
  return clean;
};

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

function ExpandedPanel({ card, visible }) {
  const imgSrc = getOptimalImage(card.bgImage);
  const imgPosition = getImgObjectPositionClass(card.bgPos);

  return (
    <div
      className="w-full rounded-2xl overflow-hidden border border-slate-700 bg-slate-900 text-white mb-5 relative z-30 will-change-transform"
      style={{
        transition: 'opacity 0.35s ease, transform 0.35s cubic-bezier(0.33,1,0.68,1), max-height 0.4s cubic-bezier(0.33,1,0.68,1)',
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0) scaleY(1)' : 'translateY(-12px) scaleY(0.96)',
        maxHeight: visible ? '500px' : '0px',
        transformOrigin: 'top center',
        boxShadow: '0 30px 60px -15px rgba(0,0,0,0.35)',
        pointerEvents: visible ? 'auto' : 'none',
        overflow: 'hidden',
      }}
    >
      <div className="flex flex-col md:flex-row min-h-[220px] md:h-64">

        <div className="w-full md:w-2/5 h-40 sm:h-48 md:h-full relative overflow-hidden flex-shrink-0">
          <img
            src={imgSrc}
            alt={card?.title}
            className={`w-full h-full object-cover ${imgPosition}`}
            style={{
              transition: 'transform 0.5s ease',
              transform: visible ? 'scale(1)' : 'scale(1.04)',
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-b md:bg-gradient-to-r from-transparent via-transparent to-slate-900 opacity-80" />
        </div>

        <div className="flex-1 p-4 sm:p-6 flex flex-col justify-between">
          <div>
            <span className="text-[10px] font-mono font-bold text-emerald-400 tracking-widest uppercase block mb-2 sm:mb-3">
              FONDASI // {card?.id}
            </span>
            <h3 className="text-base sm:text-lg md:text-xl font-bold text-slate-100 tracking-tight mb-2">
              {card?.title}
            </h3>
            <div className="border-t border-slate-800 pt-3">
              <p className="text-xs sm:text-sm text-slate-300 font-light leading-relaxed max-h-32 md:max-h-40 overflow-y-auto pr-1">
                {card?.desc}
              </p>
            </div>
          </div>
          <p className="text-[10px] text-slate-500 font-mono mt-3 pt-2 border-t border-slate-800/50">
            * Ketuk kartu mana saja untuk menutup atau berpindah detail.
          </p>
        </div>

      </div>
    </div>
  );
}

function NormalCard({ card, isActive, isDimmed, onClick }) {
  const imgSrc = getOptimalImage(card.bgImage);
  const bgPosition = getBgPositionClass(card.bgPos);

  return (
    <div
      onClick={onClick}
      className={`group relative rounded-2xl overflow-hidden cursor-pointer bg-slate-950 border
        h-36 sm:h-44 md:h-48
        ${isActive
          ? 'border-emerald-500 ring-2 ring-emerald-500/20 shadow-xl'
          : 'border-slate-200/10 hover:border-slate-700 hover:shadow-xl'
        }
      `}
      style={{
        transition: 'opacity 0.3s ease, transform 0.3s ease, filter 0.3s ease, box-shadow 0.3s ease',
        opacity: isDimmed ? 0.3 : 1,
        transform: isDimmed ? 'scale(0.98)' : 'scale(1)',
        filter: isDimmed ? 'blur(0.3px)' : 'none',
        willChange: 'transform, opacity',
      }}
    >
      <div
        className={`absolute inset-0 bg-cover opacity-50 group-hover:opacity-65 ${bgPosition}`}
        style={{
          backgroundImage: `url(${imgSrc})`,
          transition: 'transform 0.6s ease, opacity 0.4s ease',
          transform: isActive ? 'scale(1.05)' : 'scale(1)',
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent opacity-90" />

      <div className="absolute inset-0 p-4 sm:p-5 flex flex-col justify-between text-white z-10 select-none">
        <span className="text-[10px] font-mono text-slate-400 tracking-widest">— {card.id}</span>
        <div>
          <h3
            className="font-bold text-sm sm:text-[15px] tracking-tight"
            style={{ transition: 'color 0.2s ease', color: isActive ? '#34d399' : 'white' }}
          >
            {card.title}
          </h3>
          <span
            className="text-[9px] text-slate-400 font-light mt-1 block"
            style={{
              transition: 'opacity 0.25s ease, transform 0.25s ease',
              opacity: isActive ? 1 : 0,
              transform: isActive ? 'translateY(0)' : 'translateY(4px)',
            }}
          >
            Ketuk kartu lain untuk berpindah ↑
          </span>
        </div>
      </div>
    </div>
  );
}

export default function Foundations() {
  const [activeCardId, setActiveCardId] = useState(null);
  const [displayCard, setDisplayCard] = useState(null);
  const [panelVisible, setPanelVisible] = useState(false);
  const panelRef = useRef(null);
  const hideTimer = useRef(null);

  const handleCardClick = (id) => {
    clearTimeout(hideTimer.current);

    if (activeCardId === id) {
      setPanelVisible(false);
      hideTimer.current = setTimeout(() => {
        setActiveCardId(null);
        setDisplayCard(null);
      }, 380);
    } else {
      const card = foundationsData.find((c) => c.id === id);
      setActiveCardId(id);

      if (!panelVisible) {
        setDisplayCard(card);
        requestAnimationFrame(() => requestAnimationFrame(() => setPanelVisible(true)));
      } else {
        setPanelVisible(false);
        hideTimer.current = setTimeout(() => {
          setDisplayCard(card);
          requestAnimationFrame(() => requestAnimationFrame(() => setPanelVisible(true)));
        }, 200);
      }
    }
  };

  useEffect(() => {
    if (panelVisible && panelRef.current && window.innerWidth < 768) {
      setTimeout(() => {
        panelRef.current?.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      }, 60);
    }
  }, [panelVisible, displayCard]);

  useEffect(() => () => clearTimeout(hideTimer.current), []);

  return (
    <section id="fungsi" className="py-16 sm:py-24 bg-slate-50 px-4 sm:px-6 relative overflow-hidden">
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-emerald-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-5xl mx-auto relative z-10">

        <div className="mb-10 sm:mb-16 border-b border-slate-200/60 pb-6 sm:pb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-100 mb-3 sm:mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-[11px] sm:text-[13px] font-semibold text-emerald-700 uppercase tracking-widest">
              Fungsi Vital
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
            Fondasi Peradaban
          </h2>
          <p className="text-xs sm:text-sm text-slate-400 mt-2 max-w-2xl leading-relaxed font-light">
            Fungsi vital sungai dalam mendukung kehidupan, pelestarian lingkungan, dan kemajuan peradaban bangsa Indonesia.
          </p>
        </div>

        <div ref={panelRef}>
          {displayCard && <ExpandedPanel card={displayCard} visible={panelVisible} />}
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-5 md:gap-6">
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
    </section>
  );
}