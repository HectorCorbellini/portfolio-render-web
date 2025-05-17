import React, { useEffect } from 'react';
import Navbar from './components/Layout/Navbar';
import HeroSection from './components/Home/HeroSection';
import ProjectsSection from './components/Projects/ProjectsSection';
import SkillsSection from './components/Skills/SkillsSection';
import AboutSection from './components/About/AboutSection';
import ContactSection from './components/Contact/ContactSection';
import Footer from './components/Layout/Footer';
import './index.css';

function App() {
  useEffect(() => {
    // Update page title
    document.title = 'Héctor Corbellini | Java Developer Portfolio';
    
    // Add animation classes to CSS
    const style = document.createElement('style');
    style.innerHTML = `
      @keyframes fadeIn {
        from { opacity: 0; transform: translateY(20px); }
        to { opacity: 1; transform: translateY(0); }
      }
      
      .animate-fadeIn {
        animation: fadeIn 0.6s ease-out forwards;
      }
      
      .animate-fadeInDelay {
        opacity: 0;
        animation: fadeIn 0.6s ease-out 0.3s forwards;
      }
      
      .animate-fadeInDelayLong {
        opacity: 0;
        animation: fadeIn 0.6s ease-out 0.6s forwards;
      }
    `;
    document.head.appendChild(style);
    
    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const href = this.getAttribute('href');
        if (!href) return;
        
        const targetElement = document.querySelector(href);
        if (!targetElement) return;
        
        window.scrollTo({
          top: targetElement.getBoundingClientRect().top + window.scrollY - 80,
          behavior: 'smooth'
        });
      });
    });
    
    return () => {
      document.head.removeChild(style);
    };
  }, []);
  
  return (
    <div className="min-h-screen bg-white dark:bg-indigo-950 text-gray-900 dark:text-white">
      <Navbar />
      <HeroSection />
      <ProjectsSection />
      <SkillsSection />
      <AboutSection />
      <ContactSection />
      <Footer />
    </div>
  );
}

export default App;