import React from 'react';
import { motion } from 'framer-motion';
import { Download, Briefcase, GraduationCap, Award } from 'lucide-react';
import resumePdf from '../assets/documents/resume.pdf';

const Resume: React.FC = () => {
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
            <h1 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">My Resume</h1>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-xl mx-auto">
              A summary of my education, work experience, and skills.
            </p>
            <div className="h-1 w-20 bg-primary-500 mx-auto mt-4 rounded-full"></div>
          </motion.div>

          <div className="flex justify-center mb-12">
            <motion.a
              href={resumePdf}
              download="Nontuthuzelo_Ngwenya_Resume.pdf"
              className="btn-primary px-6 py-3 text-lg flex items-center gap-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Download className="h-5 w-5" />
              Download Resume
            </motion.a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Experience Section */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-primary-500 p-2 rounded-lg text-white">
                  <Briefcase className="h-6 w-6" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Experience</h2>
              </div>

              <div className="space-y-8">
                {/* Experience Item 1 */}
                <div className="relative pl-8 border-l-2 border-primary-500 dark:border-primary-400">
                  <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-primary-500 dark:bg-primary-400"></div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">Software Engineer Intern</h3>
                  <p className="text-primary-600 dark:text-primary-400 font-medium">Tech Solutions Inc.</p>
                  <p className="text-gray-500 dark:text-gray-400 text-sm mb-2">June 2022 - August 2022</p>
                  <p className="text-gray-600 dark:text-gray-300">
                    Developed and maintained web applications using React and Node.js. Collaborated with senior developers on feature implementation and bug fixes.
                  </p>
                </div>

                {/* Experience Item 2 */}
                <div className="relative pl-8 border-l-2 border-primary-500 dark:border-primary-400">
                  <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-primary-500 dark:bg-primary-400"></div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">Freelance Web Developer</h3>
                  <p className="text-primary-600 dark:text-primary-400 font-medium">Self-employed</p>
                  <p className="text-gray-500 dark:text-gray-400 text-sm mb-2">January 2022 - Present</p>
                  <p className="text-gray-600 dark:text-gray-300">
                    Design and develop responsive websites for small businesses. Implement custom solutions based on client requirements.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Education Section */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-secondary-500 p-2 rounded-lg text-white">
                  <GraduationCap className="h-6 w-6" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Education</h2>
              </div>

              <div className="space-y-8">
                {/* Education Item 1 */}
                <div className="relative pl-8 border-l-2 border-secondary-500 dark:border-secondary-400">
                  <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-secondary-500 dark:bg-secondary-400"></div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">BSc in Computer Science</h3>
                  <p className="text-secondary-600 dark:text-secondary-400 font-medium">University of Durban</p>
                  <p className="text-gray-500 dark:text-gray-400 text-sm mb-2">2019 - 2023</p>
                  <p className="text-gray-600 dark:text-gray-300">
                    Graduated with honors. Specialized in software engineering and web development.
                  </p>
                </div>

                {/* Education Item 2 */}
                <div className="relative pl-8 border-l-2 border-secondary-500 dark:border-secondary-400">
                  <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-secondary-500 dark:bg-secondary-400"></div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">Web Development Bootcamp</h3>
                  <p className="text-secondary-600 dark:text-secondary-400 font-medium">CodeCamp Academy</p>
                  <p className="text-gray-500 dark:text-gray-400 text-sm mb-2">Summer 2022</p>
                  <p className="text-gray-600 dark:text-gray-300">
                    Intensive 12-week bootcamp focused on full-stack web development using MERN stack.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Certifications Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="mt-16"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-accent-500 p-2 rounded-lg text-white">
                <Award className="h-6 w-6" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Certifications</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Certification 1 */}
              <div className="card p-6 hover:border-accent-500 hover:border-2 transition-all duration-300">
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">Front-End Web Development</h3>
                <p className="text-accent-600 dark:text-accent-400 font-medium mb-1">freeCodeCamp</p>
                <p className="text-gray-500 dark:text-gray-400 text-sm">Issued: January 2023</p>
              </div>

              {/* Certification 2 */}
              <div className="card p-6 hover:border-accent-500 hover:border-2 transition-all duration-300">
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">JavaScript Algorithms and Data Structures</h3>
                <p className="text-accent-600 dark:text-accent-400 font-medium mb-1">freeCodeCamp</p>
                <p className="text-gray-500 dark:text-gray-400 text-sm">Issued: March 2023</p>
              </div>

              {/* Certification 3 */}
              <div className="card p-6 hover:border-accent-500 hover:border-2 transition-all duration-300">
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">Responsive Web Design</h3>
                <p className="text-accent-600 dark:text-accent-400 font-medium mb-1">freeCodeCamp</p>
                <p className="text-gray-500 dark:text-gray-400 text-sm">Issued: November 2022</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Resume;