import React, { useState } from 'react';
import { Droplet, Waves, TreePine, Trophy } from 'lucide-react';

export default function Prinsip() {
  const [activeIndex, setActiveIndex] = useState(null);

  const dataPrinsip = [
    {
      title: "Sumber Kehidupan",
      desc: "Sungai adalah sumber kehidupan utama yang harus dijaga keberlangsungannya.",
      icon: <Droplet className="w-6 h-6 sm:w-8 sm:h-8 text-blue-600" />,
      borderColor: "border-blue-500",
      bg: "bg-blue-50",
    },
    {
      title: "Pelihara Aliran",
      desc: "Bersihkan sungai, hijaukan sempadan, dan pastikan aliran air tetap lancar.",
      icon: <Waves className="w-6 h-6 sm:w-8 sm:h-8 text-emerald-600" />,
      borderColor: "border-emerald-500",
      bg: "bg-emerald-50",
    },
    {
      title: "Rawat Ekosistem",
      desc: "Menjaga keutuhan ekosistem di seluruh daerah aliran sungai (DAS).",
      icon: <TreePine className="w-6 h-6 sm:w-8 sm:h-8 text-teal-600" />,
      borderColor: "border-teal-500",
      bg: "bg-teal-50",
    },
    {
      title: "Muliakan Negeri",
      desc: "Dengan memuliakan sungai, kita menjunjung tinggi martabat bangsa.",
      icon: <Trophy className="w-6 h-6 sm:w-8 sm:h-8 text-amber-500" />,
      borderColor: "border-amber-500",
      bg: "bg-amber-50",
    },
  ];

  const handleToggle = (index) => {
    setActiveIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section id="prinsip" className="py-14 sm:py-20 bg-white px-4 sm:px-6">
      <div className="max-w-6xl mx-auto text-center">

        <span className="bg-emerald-50 text-emerald-600 text-[10px] sm:text-sm font-bold tracking-widest uppercase px-4 sm:px-5 py-1.5 sm:py-2 rounded-full border border-emerald-100 shadow-sm inline-block">
          Pilar Utama
        </span>

        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-blue-950 mt-4 mb-10 sm:mb-16 tracking-tight">
          Prinsip Dasar AMS
        </h2>

        <div className="flex flex-col gap-3 sm:hidden">
          {dataPrinsip.map((item, index) => {
            const isActive = activeIndex === index;
            return (
              <button
                key={index}
                onClick={() => handleToggle(index)}
                className={`w-full text-left bg-white rounded-xl border-l-4 ${item.borderColor} border border-gray-100 p-4 shadow-sm transition-all duration-200 ${isActive ? 'shadow-md' : ''}`}
              >
                <div className="flex items-center gap-3">
                  <div className={`p-2 rounded-lg ${item.bg} shrink-0`}>
                    {item.icon}
                  </div>
                  <h3 className="text-sm font-bold text-blue-950 flex-1">{item.title}</h3>
                  <span className={`text-slate-400 text-lg font-light transition-transform duration-200 ${isActive ? 'rotate-45' : ''}`}>+</span>
                </div>
                {isActive && (
                  <p className="text-xs text-gray-500 leading-relaxed mt-3 pl-[52px]">
                    {item.desc}
                  </p>
                )}
              </button>
            );
          })}
        </div>

        <div className="hidden sm:grid sm:grid-cols-2 lg:grid-cols-4 gap-5 items-start">
          {dataPrinsip.map((item, index) => {
            const isHovered = activeIndex === index;
            const isDimmed = activeIndex !== null && !isHovered;

            return (
              <div
                key={index}
                onMouseEnter={() => setActiveIndex(index)}
                onMouseLeave={() => setActiveIndex(null)}
                className={`bg-white rounded-xl border border-gray-100 p-6 sm:p-8 text-left transition-all duration-300 ease-out cursor-pointer
                  ${isHovered ? `scale-105 z-10 shadow-2xl border-t-4 ${item.borderColor}` : 'scale-100 shadow-md'}
                  ${isDimmed ? 'opacity-40 scale-95 shadow-sm' : 'opacity-100'}
                `}
              >
                <div className={`mb-5 p-3 ${item.bg} rounded-lg inline-block`}>
                  {item.icon}
                </div>

                <h3 className="text-base sm:text-lg font-bold text-blue-950 tracking-tight">
                  {item.title}
                </h3>

                <div
                  className="text-xs sm:text-sm text-gray-500 leading-relaxed overflow-hidden transition-all duration-300 ease-in-out"
                  style={{
                    maxHeight: isHovered ? '100px' : '0px',
                    opacity: isHovered ? 1 : 0,
                    marginTop: isHovered ? '10px' : '0px',
                  }}
                >
                  <p>{item.desc}</p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}