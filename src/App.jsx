import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import ScrollToTop from './ScrollToTop';

import Navbar from './sections/Navbar';
import Footer from './sections/Footer';
import StrukturPage from './pages/StrukturPage';

import Hero from './sections/Hero';
import About from './sections/About';
import Principles from './sections/Principles';
import Foundations from './sections/Foundations';


import VoyageTimeline from './sections/VoyageTimeline'; 

function ScrollReveal({ children, delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }} 
      whileInView={{ opacity: 1, y: 0 }} 
      viewport={{ once: true, amount: 0.15 }} 
      transition={{ 
        duration: 1.2, 
        ease: [0.21, 1.02, 0.43, 1.01], 
        delay: delay 
      }}
    >
      {children}
    </motion.div>
  );
}

function HomePage() {
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

function AnimatedRoutes() {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<HomePage />} />
        <Route path="/struktur" element={<StrukturPage />} />
      </Routes>
    </AnimatePresence>
  );
}

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    <Router>
      <ScrollToTop />
      <Navbar />
      <main className="min-h-screen bg-[#fafafa]">
        <AnimatedRoutes />
      </main>
      <Footer />
    </Router>
  );
}