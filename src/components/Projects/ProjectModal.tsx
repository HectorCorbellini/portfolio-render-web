import React, { useEffect, useRef, useState } from 'react';
import { Project } from '../../types';
import { X, ExternalLink, Play, FileText } from 'lucide-react';

interface ProjectModalProps {
  project: Project;
  isOpen: boolean;
  onClose: () => void;
  onLaunchDemo: (path: string) => void;
}

const ProjectModal: React.FC<ProjectModalProps> = ({ project, isOpen, onClose, onLaunchDemo }) => {
  const [showDescription, setShowDescription] = useState(false);
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    const handleClickOutside = (event: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
        onClose();
      }
    };

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('keydown', handleEscape);
    }

    return () => {
      document.body.style.overflow = 'unset';
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleEscape);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center p-4 overflow-y-auto">
      <div 
        ref={modalRef}
        className="bg-white dark:bg-indigo-950 rounded-lg shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-y-auto animate-fadeIn"
      >
        <div className="relative h-64 md:h-80 overflow-hidden">
          <img 
            src={project.image} 
            alt={project.title} 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70"></div>
          
          <button 
            onClick={onClose} 
            className="absolute top-4 right-4 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 transition-all"
            aria-label="Close modal"
          >
            <X size={20} />
          </button>
          
          <div className="absolute bottom-0 left-0 p-6">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">{project.title}</h2>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag, index) => (
                <span 
                  key={index} 
                  className="bg-indigo-600 text-white text-xs px-2 py-1 rounded"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
        
        <div className="p-6">
          {showDescription ? (
            <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg mb-6 animate-fade-in">
              <h3 className="text-xl font-semibold mb-3 text-gray-800 dark:text-white">About This Project</h3>
              <p className="text-gray-700 dark:text-gray-300">{project.detailedDescription}</p>
              <div className="mt-4 flex justify-end">
                <button 
                  onClick={() => setShowDescription(false)}
                  className="text-indigo-600 hover:text-indigo-800 dark:hover:text-indigo-400 text-sm font-medium"
                >
                  Close Description
                </button>
              </div>
            </div>
          ) : (
            <div className="prose dark:prose-invert max-w-none">
              <p className="text-gray-700 dark:text-gray-300 mb-6">{project.description}</p>
            </div>
          )}
          
          <div className="flex flex-col sm:flex-row gap-4 mt-6">
            <button 
              onClick={() => onLaunchDemo(project.demoPath)}
              className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-lg transition-colors flex items-center justify-center"
            >
              <Play size={18} className="mr-2" />
              Launch Demo
            </button>
            <button 
              onClick={() => setShowDescription(!showDescription)}
              className="bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-3 rounded-lg transition-colors flex items-center justify-center"
            >
              <FileText size={18} className="mr-2" />
              Description
            </button>
            <button 
              className="border-2 border-indigo-600 text-indigo-600 hover:bg-indigo-50 dark:hover:bg-indigo-900 px-6 py-3 rounded-lg transition-colors flex items-center justify-center"
              onClick={onClose}
            >
              <ExternalLink size={18} className="mr-2" />
              View More Projects
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;