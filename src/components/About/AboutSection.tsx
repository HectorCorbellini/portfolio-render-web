import React from 'react';
import { Briefcase, Code, Database, Cpu } from 'lucide-react';

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-indigo-50 dark:bg-indigo-950">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-4">
            About Me
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Get to know more about my background, expertise, and approach to software development.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-center">
          <div className="lg:col-span-2">
            <div className="relative">
              <div className="w-full h-full absolute -top-4 -left-4 border-2 border-indigo-500 rounded-lg"></div>
              <img 
                src="/files/yoFoto2020ago~2.png" 
                alt="Héctor Corbellini" 
                className="w-full rounded-lg relative z-10 shadow-lg"
              />
            </div>
          </div>
          
          <div className="lg:col-span-3">
            <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">
              Héctor Corbellini
            </h3>
            <p className="text-indigo-600 dark:text-indigo-400 text-lg mb-6">
              AI fullstack developer specialized in Clean Code and Clean Architecture excellence
            </p>
            
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              With foundation in Java development and a passion for creating efficient, 
              maintainable software solutions, I specialize in building robust applications in any language that follow 
              clean architecture principles. My approach combines technical expertise with a deep understanding 
              of business requirements to deliver high-quality software that exceeds expectations.
            </p>
            
            <p className="text-gray-600 dark:text-gray-300 mb-8">
              I'm committed to continuous learning and staying current with emerging technologies 
              and best practices in software development. My goal is to create solutions that not only 
              solve complex problems but are also elegant, efficient, and easy to maintain.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="flex items-start">
                <div className="bg-indigo-600 p-3 rounded-lg mr-4">
                  <Code className="text-white" size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-gray-800 dark:text-white mb-1">Clean Code</h4>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">Writing readable, maintainable code that follows best practices</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-indigo-600 p-3 rounded-lg mr-4">
                  <Briefcase className="text-white" size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-gray-800 dark:text-white mb-1">Clean Architecture</h4>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">Designing systems with clear separation of concerns</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-indigo-600 p-3 rounded-lg mr-4">
                  <Database className="text-white" size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-gray-800 dark:text-white mb-1">Database Design</h4>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">Creating efficient, scalable data structures</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-indigo-600 p-3 rounded-lg mr-4">
                  <Cpu className="text-white" size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-gray-800 dark:text-white mb-1">AI Excellence</h4>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">Leveraging AI techniques to build exact solutions</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;