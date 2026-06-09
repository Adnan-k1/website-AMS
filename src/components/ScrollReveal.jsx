import React from 'react';
import { motion } from 'framer-motion';

export default function ScrollReveal({ children, delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }} 
      whileInView={{ opacity: 1, y: 0 }} 
      viewport={{ once: true, margin: "-100px" }} 
      transition={{ 
        duration: 0.7, 
        ease: [0.21, 1.02, 0.43, 1.01], 
        delay: delay 
      }}
    >
      {children}
    </motion.div>
  );
}