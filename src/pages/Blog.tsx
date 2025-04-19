import React from 'react';
import { motion } from 'framer-motion';
import Carousel from '../components/shared/Carousel';
import { blogPosts } from '../data/blogsData';
import { Calendar, Clock } from 'lucide-react';

const Blog: React.FC = () => {
  const blogCards = blogPosts.map((post) => (
    <div key={post.id} className="w-full h-full flex items-center justify-center p-4">
      <div className="card w-full max-w-4xl overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="h-64 md:h-full overflow-hidden">
            <img 
              src={post.image} 
              alt={post.title} 
              className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
            />
          </div>
          <div className="p-6 flex flex-col">
            <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400 mb-3">
              <div className="flex items-center">
                <Calendar className="h-4 w-4 mr-1" />
                {post.date}
              </div>
              <div className="flex items-center">
                <Clock className="h-4 w-4 mr-1" />
                {post.readingTime}
              </div>
            </div>
            
            <h3 className="text-2xl font-bold mb-3 text-gray-900 dark:text-white">{post.title}</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6 flex-grow">{post.description}</p>
            
            <a 
              href={post.url}
              className="btn-primary inline-flex items-center justify-center"
            >
              Read More
            </a>
          </div>
        </div>
      </div>
    </div>
  ));

  return (
    <div className="pt-16">
      <section className="section bg-gray-50 dark:bg-gray-900">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-12 text-center"
          >
            <h1 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">My Blog</h1>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-xl mx-auto">
              Thoughts, insights, and experiences from my journey as a software engineer.
            </p>
            <div className="h-1 w-20 bg-primary-500 mx-auto mt-4 rounded-full"></div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="h-[600px] md:h-[500px]"
          >
            <Carousel items={blogCards} />
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Blog;