
import React from 'react';
import { ThemeProvider } from '../contexts/ThemeContext';
import AnimatedBackground from '../components/AnimatedBackground';
import CursorTrail from '../components/CursorTrail';
import Navigation from '../components/Navigation';
import Hero from '../components/Hero';
import About from '../components/About';
import Portfolio from '../components/Portfolio';
import Contact from '../components/Contact';

const Index = () => {
  return (
    <ThemeProvider>
      <div className="relative min-h-screen transition-colors duration-300">
        <AnimatedBackground />
        <CursorTrail />
        <Navigation />
        <main className="relative z-10">
          <Hero />
          <About />
          <Portfolio />
          <Contact />
        </main>
      </div>
    </ThemeProvider>
  );
};

export default Index;
