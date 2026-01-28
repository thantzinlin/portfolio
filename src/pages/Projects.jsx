import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { projects } from '../data/projects';
import ProjectCard from '../components/ProjectCard';

const Projects = () => {
  const [filter, setFilter] = useState('all'); // Initialize with normalized 'all'

  const technologies = ['all', ...new Set(projects.flatMap((p) => p.technologies).map(tech => tech.toLowerCase().trim()))];

  const filteredProjects = useMemo(() => {
    if (filter === 'all') {
      return projects;
    }
    const normalizedFilter = filter.toLowerCase().trim();
    return projects.filter((p) => p.technologies.map(tech => tech.toLowerCase().trim()).includes(normalizedFilter));
  }, [filter, projects]);

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
          {technologies.map((tech, index) => (
            <button
              key={`${tech}-${index}`}
              onClick={() => setFilter(tech)} // 'tech' is already normalized here
              aria-pressed={filter === tech}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-300 ${
                filter === tech
                  ? 'bg-gray-900 text-white dark:bg-gray-700'
                  : 'bg-white text-gray-900 dark:bg-gray-800 dark:text-white'
              }`}
            >
              {tech === 'all' ? 'All' : tech} {/* Display 'All' for the button */}
            </button>
          ))}
        </div>

        {filteredProjects.length > 0 ? (
          <div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        ) : (
          <motion.p
            className="text-center text-xl text-gray-600 dark:text-gray-400 mt-16"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            No projects found for the selected filter.
          </motion.p>
        )}
      </div>
    </motion.div>
  );
};

export default Projects;
