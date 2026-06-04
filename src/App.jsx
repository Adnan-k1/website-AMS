import React from 'react';
import Navbar from './sections/Navbar';
import Hero from './sections/Hero';
import About from './sections/About';
import Principles from './sections/Principles';
import Foundations from './sections/Foundations';
import Structure from './sections/Structure';
import Footer from './sections/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-white font-sans antialiased selection:bg-green-600 selection:text-white scroll-smooth">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Principles />
        <Foundations />
        <Structure />
      </main>
      <Footer />
    </div>
  );
}