import React from 'react';
import { ChevronDown } from 'lucide-react';

const HeroSection: React.FC = () => {
  return (
    <section 
      id="home" 
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-900 via-indigo-800 to-purple-900 text-white relative"
    >
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      ></div>
      
      <div className="container mx-auto px-4 text-center z-10">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fadeIn">
          <span className="block">Hello, I'm</span>
          <span className="text-indigo-300 block mt-2">Héctor Corbellini</span>
        </h1>
        
        <h2 className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto animate-fadeInDelay">
          AI fullstack developer specialized in Clean Code and Clean Architecture excellence
        </h2>
        
        <div className="flex flex-col sm:flex-row justify-center gap-4 animate-fadeInDelayLong">
          <a 
            href="#projects" 
            className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-lg transition-colors duration-300 font-semibold"
          >
            View My Work
          </a>
          <a 
            href="#contact" 
            className="bg-transparent border-2 border-indigo-400 hover:bg-indigo-400 hover:text-indigo-900 text-white px-6 py-3 rounded-lg transition-all duration-300 font-semibold"
          >
            Contact Me
          </a>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-0 right-0 flex justify-center animate-bounce">
        <a href="#projects" className="text-white">
          <ChevronDown size={32} />
        </a>
      </div>
    </section>
  );
};

export default HeroSection;