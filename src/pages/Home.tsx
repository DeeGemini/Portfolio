import React from 'react';
import Hero from '../components/home/Hero';
import About from '../components/home/About';
import { motion } from 'framer-motion';
import { ArrowDownCircle } from 'lucide-react';

const Home: React.FC = () => {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div>
      <Hero />
      
      <motion.div 
        className="absolute bottom-8 left-1/2 -translate-x-1/2 cursor-pointer"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ 
          opacity: { delay: 1, duration: 1 },
          y: { repeat: Infinity, duration: 1.5 }
        }}
        onClick={scrollToAbout}
      >
        <ArrowDownCircle className="h-10 w-10 text-primary-500 dark:text-primary-400" />
      </motion.div>
      
      <About />
    </div>
  );
};

export default Home;