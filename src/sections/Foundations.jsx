import React from 'react';
import { foundationsData } from '../data/amsData';

export default function Foundations() {
  return (
    <section id="fungsi" className="py-16 bg-slate-100 px-6">
      <div className="max-w-5xl mx-auto">
        
        <div className="mb-12 bg-white rounded-2xl shadow-xl border border-gray-100 p-6 md:p-8 transform -translate-y-2 transition-all duration-300 hover:shadow-2xl text-left">
          <div>
            <span className="text-[10px] font-bold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full uppercase tracking-wider mb-2 inline-block">
              Fungsi Vital
            </span>
            <h2 className="text-2xl md:text-3xl font-extrabold text-blue-950 tracking-tight">
              Fondasi Peradaban
            </h2>
            <p className="text-xs md:text-sm text-gray-500 mt-1.5 max-w-2xl leading-relaxed">
              Fungsi vital sungai dalam mendukung kehidupan, pelestarian lingkungan, dan kemajuan peradaban bangsa Indonesia.
            </p>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {foundationsData.map((card) => (
            <div 
              key={card.id} 
              className="group relative h-64 rounded-xl overflow-hidden shadow-md cursor-pointer bg-slate-950"
            >
            <div 
                className={`absolute inset-0 bg-cover opacity-60 transition-all duration-700 ease-out group-hover:scale-110 group-hover:opacity-80 group-hover:brightness-110 ${card.bgPos || 'bg-center'}`} 
                style={{ backgroundImage: `url(${card.bgImage})` }}
            ></div>
              
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent transition-all duration-500 group-hover:via-slate-950/20"></div>
              
              <div className="absolute inset-0 p-5 flex flex-col justify-end text-white transform transition-transform duration-500 ease-out translate-y-4 group-hover:translate-y-0">
                
                <span className="text-[10px] font-bold bg-blue-800 group-hover:bg-emerald-600 text-white w-fit px-1.5 py-0.5 rounded mb-1.5 transition-colors duration-300">
                  {card.id}
                </span>
                
                <h3 className="text-[15px] font-bold tracking-wide transition-colors duration-300 group-hover:text-emerald-400">
                  {card.title}
                </h3>
               
                <p className="text-[10px] text-slate-400 group-hover:text-slate-100 opacity-80 group-hover:opacity-100 leading-normal line-clamp-2 mt-1 transition-all duration-500">
                  {card.desc}
                </p>
                
              </div>
            </div>
          ))}
        </div>
        
      </div>
    </section>
  );
}