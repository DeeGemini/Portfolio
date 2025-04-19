import React from 'react';
import { Linkedin, Twitter, Github, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-50 dark:bg-gray-800">
      <div className="container-custom py-8">
        <div className="flex flex-col items-center justify-center md:flex-row md:justify-between">
          <div className="mb-4 md:mb-0">
            <p className="text-sm text-gray-600 dark:text-gray-400">
              © {new Date().getFullYear()} Nontuthuzelo Ngwenya. All rights reserved.
            </p>
          </div>

          <div className="flex space-x-5">
            <a
              href="https://linkedin.com/in/nontuthuzelo-ngwenya"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-primary-500 dark:text-gray-400 dark:hover:text-primary-400 transition-colors duration-300"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a
              href="https://twitter.com/NicsadyN"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-primary-500 dark:text-gray-400 dark:hover:text-primary-400 transition-colors duration-300"
              aria-label="Twitter"
            >
              <Twitter className="h-5 w-5" />
            </a>
            <a
              href="https://github.com/DeeGemini"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-primary-500 dark:text-gray-400 dark:hover:text-primary-400 transition-colors duration-300"
              aria-label="GitHub"
            >
              <Github className="h-5 w-5" />
            </a>
            <a
              href="mailto:nicsadyngwenya@gmail.com"
              className="text-gray-500 hover:text-primary-500 dark:text-gray-400 dark:hover:text-primary-400 transition-colors duration-300"
              aria-label="Email"
            >
              <Mail className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;