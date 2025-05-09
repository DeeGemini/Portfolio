import React from 'react';
import { motion } from 'framer-motion';
import { Download, Briefcase, GraduationCap, Award } from 'lucide-react';
import resumePdf from '../assets/documents/Nontuthuzelo Resume-1.pdf';

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
              A summary of my Academics, Work Experience, and Certifications.
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
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">Jr Technician</h3>
                  <p className="text-primary-600 dark:text-primary-400 font-medium">CCI-United Airlines Campain.</p>
                  <p className="text-gray-500 dark:text-gray-400 text-sm mb-2">February 2022 - August 2022</p>
                  <p className="text-gray-600 dark:text-gray-300">
                    Participated in research projects, gathering data and information which helped identify effective solutions for challanges faced.
                    Collaborated with team members to develop and implement new strategies, and to foster productive environment ensuring everyone's contributions were valued.
                  </p>
                </div>

                {/* Experience Item 2 */}
                <div className="relative pl-8 border-l-2 border-primary-500 dark:border-primary-400">
                  <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-primary-500 dark:bg-primary-400"></div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">Customer Service Representative</h3>
                  <p className="text-primary-600 dark:text-primary-400 font-medium">CCI Call Center</p>
                  <p className="text-gray-500 dark:text-gray-400 text-sm mb-2">June 2020 - April 2021</p>
                  <p className="text-gray-600 dark:text-gray-300">
                    Provided tailored advice and assistance to customers over the phone regarding various services and products.
                    Handled customer inquiries and complaints with professionalism and empathy, ensuring a positive experience.
                    Collaborated with team members to improve service delivery and customer satisfaction.
                    Developed strong communication and problem-solving skills while working in a fast-paced environment.
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
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">Python 3 Developer</h3>
                  <p className="text-secondary-600 dark:text-secondary-400 font-medium">Programming Hub</p>
                  <p className="text-gray-500 dark:text-gray-400 text-sm mb-2">2023</p>
                  <p className="text-gray-600 dark:text-gray-300">
                    Graduated with 3-months Python 3 Certification. Gained proficiency in Python programming, data structures, and algorithms.
                  </p>
                </div>

                {/* Education Item 2 */}
                <div className="relative pl-8 border-l-2 border-secondary-500 dark:border-secondary-400">
                  <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-secondary-500 dark:bg-secondary-400"></div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">Software Engineering</h3>
                  <p className="text-secondary-600 dark:text-secondary-400 font-medium">ALX Africa</p>
                  <p className="text-gray-500 dark:text-gray-400 text-sm mb-2">2023 - 2024</p>
                  <p className="text-gray-600 dark:text-gray-300">
                    Graduated with NQL6. Specialized in software engineering and web development.
                  </p>
                </div>

                {/* Education Item 3 */}
                <div className="relative pl-8 border-l-2 border-secondary-500 dark:border-secondary-400">
                  <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-secondary-500 dark:bg-secondary-400"></div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">AI Starter Kit</h3>
                  <p className="text-secondary-600 dark:text-secondary-400 font-medium">ALX Africa</p>
                  <p className="text-gray-500 dark:text-gray-400 text-sm mb-2">January - March 2025</p>
                  <p className="text-gray-600 dark:text-gray-300">
                    Intensive 3-months AI foundamentals focused variety of AI tools for image, video, wireframe creation and full-stack web applications.
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
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">Python 3 Certification Course</h3>
                <p className="text-accent-600 dark:text-accent-400 font-medium mb-1">Programming Hub</p>
                <p className="text-gray-500 dark:text-gray-400 text-sm">Issued: June 2023</p>
              </div>

              {/* Certification 2 */}
              <div className="card p-6 hover:border-accent-500 hover:border-2 transition-all duration-300">
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">Software Engineering | Backend</h3>
                <p className="text-accent-600 dark:text-accent-400 font-medium mb-1">ALX Africa</p>
                <p className="text-gray-500 dark:text-gray-400 text-sm">Issued: November 2024</p>
              </div>

              {/* Certification 3 */}
              <div className="card p-6 hover:border-accent-500 hover:border-2 transition-all duration-300">
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">AI Starter Kit</h3>
                <p className="text-accent-600 dark:text-accent-400 font-medium mb-1">ALX Africa</p>
                <p className="text-gray-500 dark:text-gray-400 text-sm">Issued: March 2025</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Resume;