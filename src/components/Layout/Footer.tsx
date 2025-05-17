import React from 'react';
import { socialLinks } from '../../data/social';
import * as LucideIcons from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-indigo-900 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Héctor Corbellini</h3>
            <p className="mb-4">Advanced Junior AI specialized in Clean Code and Clean Architecture excellence.</p>
            <div className="flex space-x-4">
              {socialLinks.map((link) => {
                const Icon = LucideIcons[link.icon as keyof typeof LucideIcons];
                return (
                  <a 
                    key={link.platform} 
                    href={link.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-indigo-300 hover:text-white transition-colors"
                  >
                    {Icon && <Icon size={20} />}
                  </a>
                );
              })}
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#home" className="hover:text-indigo-300 transition-colors">Home</a></li>
              <li><a href="#projects" className="hover:text-indigo-300 transition-colors">Projects</a></li>
              <li><a href="#skills" className="hover:text-indigo-300 transition-colors">Skills</a></li>
              <li><a href="#about" className="hover:text-indigo-300 transition-colors">About</a></li>
              <li><a href="#contact" className="hover:text-indigo-300 transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Contact</h3>
            <p className="mb-2">Feel free to reach out if you have any questions or would like to work together.</p>
            <a 
              href="#contact" 
              className="inline-block bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded transition-colors mt-2"
            >
              Get in Touch
            </a>
          </div>
        </div>
        
        <div className="border-t border-indigo-800 mt-8 pt-6 text-center">
          <p>&copy; {currentYear} Héctor Corbellini. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;