import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section
      className="relative min-h-[100svh] sm:min-h-[85vh] flex items-center justify-center bg-cover bg-center pt-16"
      style={{ backgroundImage: "url('https://images.unsplash.com/photo-1564460549828-f0219a31bf90?q=80&w=2070&auto=format&fit=crop')" }}
    >
      <div className="absolute inset-0 bg-slate-950/60" />

      <div className="relative z-10 text-center text-white px-5 sm:px-8 max-w-4xl mx-auto flex flex-col items-center py-16 sm:py-20">

        <span className="text-[10px] sm:text-xs md:text-sm font-black bg-emerald-600 text-white px-4 sm:px-6 py-1.5 sm:py-2 rounded-full uppercase tracking-widest shadow-md">
          Sungai Adalah Nadi Bangsa
        </span>

        <h1 className="mt-5 mb-3 tracking-wide leading-tight flex flex-col items-center gap-1">
          <span className="text-3xl sm:text-5xl md:text-6xl font-black uppercase">
            Ayo Muliakan Sungai
          </span>
          <span className="text-2xl sm:text-4xl md:text-5xl font-black text-emerald-400">
            (AMS)
          </span>
        </h1>

        <p className="text-sm sm:text-base md:text-lg lg:text-xl italic font-medium text-amber-400 mb-8 max-w-xl tracking-wide px-2">
          "Muliakan Sungai, Muliakan Negeri"
        </p>

        <a
          href="#about"
          className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm sm:text-base px-6 py-3 sm:px-8 sm:py-3.5 rounded-full shadow-lg flex items-center gap-3 transition-all duration-300 hover:shadow-emerald-600/30 active:scale-95 group"
        >
          Pelajari Gerakan
          <div className="bg-white/20 rounded-full p-1 transition-transform duration-300 group-hover:translate-x-1">
            <ArrowRight size={15} strokeWidth={3} />
          </div>
        </a>

      </div>
    </section>
  );
}