import React from 'react';
import { motion } from 'framer-motion';
import logoAMS from '../assets/logo-ams.png';

export default function LoadingScreen() {
  return (
    <div className="fixed inset-0 bg-blue-950 flex flex-col items-center justify-center z-[9999]">
      {/* Animasi Logo Berdenyut Halus */}
      <motion.div
        initial={{ scale: 0.6, opacity: 0 }}
        animate={{ 
          scale: [0.8, 1, 0.8], 
          opacity: 1 
        }}
        transition={{ 
          scale: { repeat: Infinity, duration: 2, ease: "easeInOut" },
          opacity: { duration: 0.5 } 
        }}
        className="flex flex-col items-center gap-4"
      >
        <img 
          src={logoAMS} 
          alt="Logo AMS" 
          className="h-20 w-auto object-contain brightness-110" 
        />
        <div className="text-center">
          <h2 className="text-white font-black text-sm tracking-widest uppercase">Ayo Muliakan Sungai</h2>
          <p className="text-emerald-400 font-bold text-[10px] tracking-wider uppercase mt-1">Gerakan Nasional</p>
        </div>
      </motion.div>
    </div>
  );
}