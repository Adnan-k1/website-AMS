import React, { useState } from 'react';
import { Droplet, Waves, TreePine, Trophy } from 'lucide-react';

export default function Prinsip() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const dataPrinsip = [
    {
      title: "Sumber Kehidupan",
      desc: "Sungai adalah sumber kehidupan utama yang harus dijaga keberlangsungannya.",
      icon: <Droplet className="w-8 h-8 text-blue-600" />,
      borderColor: "hover:border-blue-500"
    },
    {
      title: "Pelihara Aliran",
      desc: "Bersihkan sungai, hijaukan sempadan, dan pastikan aliran air tetap lancar.",
      icon: <Waves className="w-8 h-8 text-emerald-600" />,
      borderColor: "hover:border-emerald-500"
    },
    {
      title: "Rawat Ekosistem",
      desc: "Menjaga keutuhan ekosistem di seluruh daerah aliran sungai (DAS).",
      icon: <TreePine className="w-8 h-8 text-teal-600" />,
      borderColor: "hover:border-teal-500"
    },
    {
      title: "Muliakan Negeri",
      desc: "Dengan memuliakan sungai, kita menjunjung tinggi martabat bangsa.",
      icon: <Trophy className="w-8 h-8 text-amber-500" />,
      borderColor: "hover:border-amber-500"
    }
  ];

  return (
    <section id="prinsip" className="py-20 bg-white px-4">
      <div className="max-w-6xl mx-auto text-center">
        
        <span className="bg-emerald-50 text-emerald-600 text-sm font-bold tracking-widest uppercase px-5 py-2 rounded-full border border-emerald-100 shadow-sm inline-block">
           Pilar Utama
        </span>
        
        <h2 className="text-3xl md:text-4xl font-extrabold text-blue-950 mt-4 mb-16 tracking-tight">
          Prinsip Dasar AMS
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-start">
          {dataPrinsip.map((item, index) => {
            
            const isCurrentHovered = hoveredIndex === index;
            let cardScaleClass = "scale-100 opacity-100 shadow-md";
            
            if (hoveredIndex !== null) {
              if (isCurrentHovered) {
                cardScaleClass = "scale-105 z-10 shadow-2xl bg-white border-t-4";
              } else {
                cardScaleClass = "scale-95 opacity-40 shadow-sm";
              }
            }

            return (
              <div
                key={index}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                className={`bg-white rounded-xl border border-gray-100 p-8 text-left transition-all duration-300 ease-out cursor-pointer overflow-hidden ${cardScaleClass} ${item.borderColor}`}
              >
                <div className="mb-6 p-3 bg-slate-50 rounded-lg inline-block transition-transform duration-300">
                  {item.icon}
                </div>
                
                <h3 className="text-lg font-bold text-blue-950 tracking-tight transition-colors duration-300">
                  {item.title}
                </h3>
                
                <div 
                  className={`transition-all duration-300 ease-in-out text-sm text-gray-500 leading-relaxed`}
                  style={{
                    maxHeight: isCurrentHovered ? '100px' : '0px',
                    opacity: isCurrentHovered ? 1 : 0,
                    marginTop: isCurrentHovered ? '12px' : '0px'
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