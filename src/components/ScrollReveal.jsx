import React from 'react';
import { motion } from 'framer-motion';

export default function ScrollReveal({ children, delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }} // Posisi awal: tersembunyi & agak ke bawah
      whileInView={{ opacity: 1, y: 0 }} // Saat ke-scroll: muncul & naik ke posisi asli
      viewport={{ once: true, margin: "-100px" }} // Animasi terpicu 100px sebelum elemen terlihat, hanya jalan 1x
      transition={{ 
        duration: 0.7, 
        ease: [0.21, 1.02, 0.43, 1.01], // Efek transisi smooth/halus mendayu
        delay: delay 
      }}
    >
      {children}
    </motion.div>
  );
}