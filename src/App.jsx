import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import ScrollToTop from './ScrollToTop';

import Navbar from './sections/Navbar';
import Footer from './sections/Footer';
import StrukturPage from './pages/StrukturPage';

// Import sections beranda lama kamu
import Hero from './sections/Hero';
import About from './sections/About';
import Principles from './sections/Principles';
import Foundations from './sections/Foundations';

// 1. PERBAIKAN: Impor section baru (The Voyage) dari folder sections yang sama dengan App.jsx
import VoyageTimeline from './sections/VoyageTimeline'; 

// Import Loading Screen
import LoadingScreen from './components/LoadingScreen'; 

// Komponen Pembungkus Animasi Scroll Reveal
function ScrollReveal({ children, delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }} 
      whileInView={{ opacity: 1, y: 0 }} 
      viewport={{ once: true, amount: 0.15 }} 
      transition={{ 
        duration: 1.2, // Dioptimalkan menjadi 1.2 detik agar lambat namun tetap responsif bagi pengunjung
        ease: [0.21, 1.02, 0.43, 1.01], 
        delay: delay 
      }}
    >
      {children}
    </motion.div>
  );
}

// Komponen HomePage Beranimasi Scroll (Sudah disatukan dengan VoyageTimeline)
function HomePage() {
  return (
    <div className="bg-[#fafafa] min-h-screen">
      {/* 1. Hero Section */}
      <ScrollReveal>
        <Hero />
      </ScrollReveal>

      {/* 2. About Section */}
      <ScrollReveal delay={0.1}>
        <About />
      </ScrollReveal>

      {/* 3. PERBAIKAN: Menambahkan VoyageTimeline secara horizontal di halaman utama */}
      <ScrollReveal delay={0.12}>
        <VoyageTimeline />
      </ScrollReveal>

      {/* 4. Principles Section */}
      <ScrollReveal delay={0.15}>
        <Principles />
      </ScrollReveal>

      {/* 5. Foundations Section */}
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