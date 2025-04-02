"use client";

import React, { useEffect, useState } from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import Work from '@/components/Work';
import Team from '@/components/Team';
import Testimonials from '@/components/Testimonials';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import SectionTransition from '@/components/SectionTransition';

export default function Home() {
  const [currentSection, setCurrentSection] = useState('hero');
  const [transitionPositions, setTransitionPositions] = useState({
    start: { x: 0, y: 0 },
    end: { x: 0, y: 0 }
  });

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'services', 'work', 'team', 'testimonials', 'contact'];
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= scrollPosition && rect.bottom >= scrollPosition) {
            if (currentSection !== section) {
              const startElement = document.getElementById(currentSection);
              if (startElement) {
                const startRect = startElement.getBoundingClientRect();
                const endRect = element.getBoundingClientRect();
                setTransitionPositions({
                  start: {
                    x: startRect.left + startRect.width / 2,
                    y: startRect.top + startRect.height / 2
                  },
                  end: {
                    x: endRect.left + endRect.width / 2,
                    y: endRect.top + endRect.height / 2
                  }
                });
                setTimeout(() => {
                  setCurrentSection(section);
                }, 1000);
              }
            }
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [currentSection]);

  return (
    <main className="relative">
      <Header />
      <SectionTransition
        startPosition={transitionPositions.start}
        endPosition={transitionPositions.end}
      />
      <Hero />
      <Services />
      <Work />
      <Team />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  );
}
