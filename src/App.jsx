import React, { useEffect } from 'react';
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
  // Intersection Observer scroll trigger to set scene active classes
  useEffect(() => {
    const sections = document.querySelectorAll('section');
    const observerOptions = {
      root: null,
      threshold: 0.1, // trigger early
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

  return (
    <div className="page-wrapper">
      <CustomCursor />
      <Navbar />
      <main style={{ display: 'flex', flexDirection: 'column', gap: '8rem', paddingBottom: '4rem' }}>
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
