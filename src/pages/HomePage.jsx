import React from 'react';
import { motion } from 'framer-motion';
import Hero from '../sections/Hero';
import About from '../sections/About';
import Principles from '../sections/Principles';
import Foundations from '../sections/Foundations';

import VoyageTimeline from '../sections/VoyageTimeline';

function ScrollReveal({ children, delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }} 
      whileInView={{ opacity: 1, y: 0 }} 
      viewport={{ once: true, amount: 0.15 }} 
      transition={{ 
        duration: 0.8, 
        ease: [0.21, 1.02, 0.43, 1.01], 
        delay: delay 
      }}
    >
      {children}
    </motion.div>
  );
}

export default function HomePage() {
  return (
    <div className="bg-[#fafafa] min-h-screen">
      
      <ScrollReveal>
        <Hero />
      </ScrollReveal>

      <ScrollReveal delay={0.1}>
        <About />
      </ScrollReveal>

      <ScrollReveal delay={0.12}>
        <VoyageTimeline />
      </ScrollReveal>

      <ScrollReveal delay={0.15}>
        <Principles />
      </ScrollReveal>

      <ScrollReveal delay={0.2}>
        <Foundations />
      </ScrollReveal>

    </div>
  );
}