import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section 
      className="relative h-[80vh] flex items-center justify-center bg-cover bg-center mt-12" 
      style={{ backgroundImage: "url('https://images.unsplash.com/photo-1564460549828-f0219a31bf90?q=80&w=2070&auto=format&fit=crop')" }}
    >
      <div className="absolute inset-0 bg-slate-950/60"></div>
      
      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto flex flex-col items-center">
        
        <span className="text-sm md:text-base font-black bg-emerald-600 text-white px-6 py-2 rounded-full uppercase tracking-widest shadow-md">
            Sungai Adalah Nadi Bangsa
        </span>
        
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mt-5 mb-3 tracking-wide leading-tight flex flex-col items-center">
          <span>
            <span className="uppercase">AYO</span> muliakan sungai
          </span>
          <span className="text-4xl md:text-5xl lg:text-6xl font-black mt-5 mb-3 tracking-wide leading-tight flex flex-col items-center">
            (AMS)
          </span>
        </h1>
        
        <p className="text-base md:text-lg lg:text-xl italic font-medium text-amber-400 mb-8 max-w-2xl tracking-wide">
          "Muliakan Sungai, Muliakan Negeri"
        </p>
        
        <div className="flex justify-center">
          <button className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm md:text-base px-6 py-3 md:px-8 md:py-3.5 rounded-full shadow-lg flex items-center gap-3 transition-all duration-300 hover:shadow-emerald-600/20 active:scale-95 group">
            Pelajari Gerakan 
            <div className="bg-white/20 rounded-full p-1 transition-transform duration-300 group-hover:translate-x-1">
              <ArrowRight size={16} strokeWidth={3} />
            </div>
          </button>
        </div>

      </div>
    </section>
  );
}