import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import ScrollToTop from './ScrollToTop';

import Navbar from './sections/Navbar';
import Hero from './sections/Hero';
import About from './sections/About';
import Principles from './sections/Principles';
import Foundations from './sections/Foundations';
import Footer from './sections/Footer';
import StrukturPage from './pages/StrukturPage';

function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <Principles />
      <Foundations />
    </>
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