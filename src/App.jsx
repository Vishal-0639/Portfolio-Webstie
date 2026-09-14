import React, { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import Preloader from './components/Preloader';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Education from './components/Education';
import DSA from './components/DSA';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import ThankYou from './components/ThankYou';
import CustomCursor from './components/CustomCursor';
import './App.css';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  // Force scroll to top on initial page load / refresh
  useEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
    window.scrollTo(0, 0);
  }, []);

  // Intersection Observer scroll trigger to set scene active classes
  useEffect(() => {
    const sections = document.querySelectorAll('section');
    const observerOptions = {
      root: null,
      threshold: 0.1,
      rootMargin: "0px 0px -10% 0px"
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('scene-active');
        }
      });
    }, observerOptions);

    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  const handlePreloaderComplete = () => {
    setIsLoading(false);
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  };

  return (
    <div className="page-wrapper">
      {/* Welcome Preloader Screen */}
      <AnimatePresence mode="wait">
        {isLoading && <Preloader onComplete={handlePreloaderComplete} />}
      </AnimatePresence>

      <CustomCursor />
      <Navbar />
      <main style={{ display: 'flex', flexDirection: 'column', gap: '7rem', paddingBottom: '0' }}>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Education />
        <DSA />
        <Certifications />
        <Contact />
        <ThankYou />
      </main>
    </div>
  );
}

export default App;
