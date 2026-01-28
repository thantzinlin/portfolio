import { useState } from 'react';
import { motion } from 'framer-motion';
import { projects } from '../data/projects';
import ProjectCard from '../components/ProjectCard';

const Projects = () => {
  const [filter, setFilter] = useState('All');

  const technologies = ['All', ...new Set(projects.map((p) => p.category))];

  const filteredProjects =
    filter === 'All' ? projects : projects.filter((p) => p.category === filter);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <motion.div
      className="min-h-screen bg-gray-100 dark:bg-gray-900 py-12 px-4 sm:px-6 lg:px-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-12"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">My Projects</h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 mt-4">A collection of my work.</p>
        </motion.div>

        <div className="flex justify-center flex-wrap gap-4 mb-8">
          {technologies.map((tech) => (
            <button
              key={tech}
              onClick={() => setFilter(tech)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-300 ${
                filter === tech
                  ? 'bg-gray-900 text-white dark:bg-gray-700'
                  : 'bg-white text-gray-900 dark:bg-gray-800 dark:text-white'
              }`}
            >
              {tech}
            </button>
          ))}
        </div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {filteredProjects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Projects;
