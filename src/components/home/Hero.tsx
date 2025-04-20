import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import TypedText from '../shared/TypedText';
import profileImage from '../../assets/images/propic.png';

const Hero: React.FC = () => {
  const typedStrings = [
    "Software Engineer",
    "Frontend Developer",
    "Backend Developer",
    "Wireframe Designer",
    "Applied AI Developer",
    "Mobile Developer",
    "Web Developer",
    "Blogger",
  ];

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-50 to-secondary-50 dark:from-gray-900 dark:to-gray-800 z-0"></div>
      
      {/* Decorative elements */}
      <motion.div 
        className="absolute top-20 left-10 w-64 h-64 bg-accent-300/20 dark:bg-accent-600/10 rounded-full blur-3xl z-0"
        animate={{ 
          x: [0, 30, 0],
          y: [0, 20, 0],
        }}
        transition={{ 
          repeat: Infinity,
          duration: 8,
          ease: "easeInOut"
        }}
      />
      
      <motion.div 
        className="absolute bottom-20 right-10 w-72 h-72 bg-primary-300/20 dark:bg-primary-600/10 rounded-full blur-3xl z-0"
        animate={{ 
          x: [0, -30, 0],
          y: [0, -20, 0],
        }}
        transition={{ 
          repeat: Infinity,
          duration: 10,
          ease: "easeInOut"
        }}
      />
      
      <div className="container-custom relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <motion.div 
            className="flex flex-col max-w-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-4">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-secondary-500">
                Nontuthuzelo Ngwenya
              </span>
            </h1>
            
            <h2 className="text-xl md:text-2xl text-gray-800 dark:text-gray-200 mb-2">
              Software Engineer Graduate
            </h2>
            
            <div className="text-lg md:text-xl text-gray-700 dark:text-gray-300 mb-6">
              I'm a <TypedText strings={typedStrings} className="text-primary-600 dark:text-primary-400 font-medium" />
            </div>
            
            <p className="text-gray-600 dark:text-gray-400 mb-8 leading-relaxed max-w-xl">
              I'm a software engineer based in Durban, South Africa. I am skilled in leveraging applied AI tools like GitHub Copilot, Codium, and Vercel to accelerate development, automate design flows, and enhance code quality across the stack. And very passionate for solving real-life problems through code and bringing the solution(s) to life.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Link to="/portfolio" className="btn-primary">
                View My Work
              </Link>
              <Link to="/contact" className="btn-outline">
                Get In Touch
              </Link>
            </div>
          </motion.div>
          
          <motion.div
            className="relative"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="w-64 h-64 md:w-80 md:h-80 overflow-hidden rounded-full border-4 border-white dark:border-gray-800 shadow-xl">
              <img
                src={profileImage}
                alt="Nontuthuzelo Ngwenya"
                className="w-full h-full object-cover"
              />
            </div>
            
            <motion.div 
              className="absolute -bottom-4 -right-4 bg-white dark:bg-gray-800 rounded-full p-3 shadow-lg"
              animate={{ 
                y: [0, -10, 0],
              }}
              transition={{ 
                repeat: Infinity,
                duration: 3,
                ease: "easeInOut"
              }}
            >
              <div className="bg-gradient-to-r from-primary-500 to-secondary-500 text-white text-sm font-bold px-4 py-2 rounded-full">
                Available for hire!
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;