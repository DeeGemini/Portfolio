import React from 'react';
import { motion } from 'framer-motion';
import { Code, Globe, Database, Brain, Users, GitBranch, BarChart as ChartBar } from 'lucide-react';

const About: React.FC = () => {
  const skillSections = [
    {
      title: "Programming Languages",
      icon: <Code className="h-6 w-6" />,
      skills: ["Python", "TypeScript", "JavaScript", "CSS", "HTML"],
      color: 'bg-blue-500'
    },
    {
      title: "Frameworks",
      icon: <Globe className="h-6 w-6" />,
      skills: ["Next.js", "Vue.js", "React"],
      color: 'bg-green-500'
    },
    {
      title: "Database",
      icon: <Database className="h-6 w-6" />,
      skills: ["MongoDB", "MySQL", "Postman"],
      color: 'bg-purple-500'
    },
    {
      title: "AI Tools",
      icon: <Brain className="h-6 w-6" />,
      skills: ["Copilot", "Codium", "ChatGPT", "Vercel", "Hedra", "Bolt.new", "Nvidia", "Decon", "Townie"],
      color: 'bg-red-500'
    },
    {
      title: "Soft Skills",
      icon: <Users className="h-6 w-6" />,
      skills: ["Problem Solving", "Collaboration"],
      color: 'bg-yellow-500'
    },
    {
      title: "Version Control",
      icon: <GitBranch className="h-6 w-6" />,
      skills: ["Git", "GitHub"],
      color: 'bg-gray-500'
    },
    {
      title: "Analysis",
      icon: <ChartBar className="h-6 w-6" />,
      skills: ["Data Gathering", "Data Analysis"],
      color: 'bg-indigo-500'
    }
  ];

  return (
    <section className="section bg-gray-50 dark:bg-gray-900" id="about">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
            About Me
          </h2>
          <div className="h-1 w-20 bg-primary-500 mx-auto rounded-full mb-8"></div>
          
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="max-w-3xl mx-auto text-center"
          >
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
              I'm Nontuthuzelo Ngwenya, a software engineer based in Durban, South Africa. AI-Augmented Software Engineer and Applied AI Developer
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
              I have a passion for solving real-life problems through code and bringing the solution(s) to life. And enjoy collaborating.
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
              I am a hardworking and dedicated individual who is always looking to grow as a developer.
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-12 leading-relaxed">
              And am always looking to learn new technologies and improve my skills.
            </p>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <h3 className="text-2xl font-bold mb-8 text-gray-900 dark:text-white text-center">My Skills</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillSections.map((section, sectionIndex) => (
              <motion.div
                key={sectionIndex}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.5 + sectionIndex * 0.1 }}
                className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className={`${section.color} w-12 h-12 rounded-lg flex items-center justify-center text-white`}>
                    {section.icon}
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 dark:text-white">{section.title}</h4>
                </div>
                <div className="flex flex-wrap gap-2">
                  {section.skills.map((skill, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded-full text-sm font-medium text-gray-700 dark:text-gray-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;