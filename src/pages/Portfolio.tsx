import React from 'react';
import { motion } from 'framer-motion';
import Carousel from '../components/shared/Carousel';
import { projects } from '../data/projectsData';
import { ExternalLink, Github } from 'lucide-react';

const Portfolio: React.FC = () => {
  const projectCards = projects.map((project) => (
    <div key={project.id} className="w-full h-full flex items-center justify-center p-4">
      <div className="card w-full max-w-4xl overflow-hidden bg-white dark:bg-gray-800">
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="h-64 md:h-full overflow-hidden">
            <img 
              src={project.image} 
              alt={project.title} 
              className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
            />
          </div>
          <div className="p-6 flex flex-col">
            <h3 className="text-2xl font-bold mb-2 text-gray-900 dark:text-white">{project.title}</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
            
            <div className="mb-6 flex-grow">
              <h4 className="text-sm font-semibold uppercase text-gray-500 dark:text-gray-400 mb-2">Tech Stack</h4>
              <div className="flex flex-wrap gap-2">
                {project.techStack.map((tech, index) => (
                  <span 
                    key={index} 
                    className="px-2 py-1 bg-gray-100 dark:bg-gray-700 rounded-md text-xs font-medium text-gray-700 dark:text-gray-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            
            <div className="flex gap-4">
              <a 
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary flex-1 flex items-center justify-center gap-2"
              >
                <ExternalLink className="h-4 w-4" />
                Live Demo
              </a>
              <a 
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline flex-1 flex items-center justify-center gap-2"
              >
                <Github className="h-4 w-4" />
                GitHub
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  ));

  return (
    <div className="pt-16">
      <section className="section bg-gray-100 dark:bg-gray-900">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-12 text-center"
          >
            <h1 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">My Portfolio</h1>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-xl mx-auto">
              Take a look at some of my recent projects. Each one was carefully crafted to solve real-world problems.
            </p>
            <div className="h-1 w-20 bg-primary-500 mx-auto mt-4 rounded-full"></div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="h-[600px] md:h-[500px]"
          >
            <Carousel items={projectCards} />
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;