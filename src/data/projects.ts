import { Project } from '../types';

export const projects: Project[] = [
  {
    id: 'caesar-cipher',
    title: 'Caesar Cipher',
    description: 'A secure text encryption tool implementing the classic Caesar cipher algorithm with modern enhancements.',
    image: 'https://images.pexels.com/photos/1089438/pexels-photo-1089438.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    tags: ['Java', 'Cryptography', 'Security', 'Clean Code'],
    demoPath: '/root/EMPREND/projects/caesar-cipher',
    detailedDescription: 'This Java application provides a modern implementation of the Caesar cipher encryption algorithm. It features a clean, intuitive interface for text encryption and decryption, supports multiple character sets, and includes advanced security features. The project demonstrates clean code principles, robust error handling, and comprehensive unit testing.'
  },
  {
    id: 'ecosystem-simulation',
    title: 'Ecosystem Simulation',
    description: 'An advanced simulation of a natural ecosystem modeling complex interactions between different species.',
    image: 'https://images.pexels.com/photos/957024/forest-trees-perspective-bright-957024.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    tags: ['Java', 'Simulation', 'OOP', 'Data Visualization'],
    demoPath: '/root/EMPREND/projects/ecosystem-simulation',
    detailedDescription: 'The Ecosystem Simulation project models complex interactions between different species in a virtual environment. It implements advanced object-oriented programming concepts, featuring real-time visualization of population dynamics, environmental factors, and species interactions. The simulation includes customizable parameters, detailed statistics tracking, and interactive controls for observing long-term ecosystem evolution.'
  },
  {
    id: 'code-processor',
    title: 'Code Processor',
    description: 'A sophisticated code analysis and processing tool for Python applications with clean code metrics.',
    image: 'https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    tags: ['Python', 'Static Analysis', 'Clean Architecture', 'Metrics'],
    demoPath: '/root/EMPREND/projects/code-processor',
    detailedDescription: 'The Code Processor is a powerful tool for analyzing and processing Python source code. It implements clean architecture principles to provide detailed code metrics, identify potential improvements, and ensure adherence to coding standards. Features include code complexity analysis, dependency mapping, and automated refactoring suggestions, all designed to help developers maintain high-quality, maintainable code.'
  }
];