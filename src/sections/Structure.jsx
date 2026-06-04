import React from 'react';
import fotoAHY from '../assets/ahy.jpeg';

export default function Structure() {
  return (
    <section id="struktur" className="py-20 bg-white px-4">
      <div className="max-w-6xl mx-auto text-center">
        
        <div className="mb-14">
          <h2 className="text-3xl font-bold text-blue-950 tracking-tight">Struktur & Kepemimpinan</h2>
          <p className="text-sm text-gray-500 mt-1">Gerakan yang terstruktur, kredibel dan berdampak nyata</p>
        </div>
        
        <div className="relative flex flex-col items-center w-full select-none max-w-4xl mx-auto">
          
          <div className="flex flex-col items-center z-10 relative">
            <div className="w-36 h-44 bg-slate-200 rounded-2xl overflow-hidden border-4 border-[#13322b] shadow-md">
              <img 
                src={fotoAHY} 
                alt="Dr. Agus Harimurti Yudhoyono" 
                className="w-full h-full object-cover object-top"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.parentNode.innerHTML = '<span class="text-xs text-gray-400 font-bold p-4 block text-center mt-12">Dr. Agus Harimurti Yudhoyono</span>';
                }}
              />
            </div>
            
            <div className="mt-4 bg-[#f4f7fa] border border-blue-900 rounded-md px-10 py-3 shadow-sm w-72">
              <h4 className="font-bold text-[14px] text-blue-950">Dr. Agus Harimurti Yudhoyono</h4>
              <p className="text-[11px] text-emerald-700 font-bold uppercase tracking-wider mt-0.5">Founder AMS</p>
            </div>
          </div>

          <div className="relative w-full flex flex-col items-center h-40">
            
            <div className="w-[1.5px] bg-gray-400 h-full absolute top-0 left-1/2 -translate-x-1/2 z-0"></div>

            <div className="hidden md:block absolute left-0 top-2 -translate-y-1/2 pr-4 z-10">
              <div className="bg-[#f4f7fa] border border-slate-200 rounded-md px-6 py-5 text-center w-72 min-h-[76px] flex flex-col justify-center shadow-sm">
                <h5 className="font-bold text-[13px] text-blue-950">Dr. Iftitah Sulaiman</h5>
                <p className="text-[10px] text-emerald-700 font-bold uppercase tracking-wider mt-1">Ketua Majelis Pengarah</p>
              </div>
            </div>

            <div className="hidden md:block absolute right-0 top-2 -translate-y-1/2 pl-4 z-10">
              <div className="bg-[#f4f7fa] border border-slate-200 rounded-md px-6 py-5 text-center w-72 min-h-[76px] flex flex-col justify-center shadow-sm">
                <h5 className="font-bold text-[13px] text-blue-950">Prof. Chay Asdak</h5>
                <p className="text-[10px] text-emerald-700 font-bold uppercase tracking-wider mt-1">Ketua Majelis Pakar</p>
              </div>
            </div>

          </div>

          <div className="flex flex-col gap-4 my-4 md:hidden z-10">
            <div className="bg-[#f4f7fa] border border-slate-200 rounded-md px-6 py-5 text-center w-72">
              <h5 className="font-bold text-[13px] text-blue-950">Dr. Iftitah Sulaiman</h5>
              <p className="text-[10px] text-emerald-700 font-bold uppercase tracking-wider mt-1">Ketua Majelis Pengarah</p>
            </div>
            <div className="bg-[#f4f7fa] border border-slate-200 rounded-md px-6 py-5 text-center w-72">
              <h5 className="font-bold text-[13px] text-blue-950">Prof. Chay Asdak</h5>
              <p className="text-[10px] text-emerald-700 font-bold uppercase tracking-wider mt-1">Ketua Majelis Pakar</p>
            </div>
          </div>

          <div className="flex flex-col items-center w-full max-w-[320px] z-10 -mt-20">
            <div className="bg-[#0b1f48] text-white px-8 py-5 rounded-md w-full shadow-lg text-center min-h-[78px] flex flex-col justify-center">
              <h5 className="font-bold text-[13px] tracking-wide">Dr. H. Irwan, S.I.P., M.P.</h5>
              <p className="text-[10px] text-emerald-400 font-bold uppercase tracking-widest mt-1">Ketua Nasional / Co-Founder</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}