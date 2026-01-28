import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { personalDetails } from '../data/info';
import { FaArrowRight } from 'react-icons/fa';
import profileImg from "../assets/profile.jpg";


const Home = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <motion.div
      className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900 text-center px-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div
        className="max-w-2xl"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={itemVariants} className="mb-8">
          <img
            src={profileImg}
            alt={personalDetails.name}
            className="w-40 h-40 rounded-full mx-auto object-cover border-4 border-gray-300 dark:border-gray-700 shadow-lg"
          />
        </motion.div>
        <motion.h1
          className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white"
          variants={itemVariants}
        >
          {personalDetails.name}
        </motion.h1>
        <motion.h2
          className="text-2xl md:text-4xl text-gray-700 dark:text-gray-300 mt-4"
          variants={itemVariants}
        >
          {personalDetails.title}
        </motion.h2>
        <motion.p
          className="text-lg text-gray-600 dark:text-gray-400 mt-8"
          variants={itemVariants}
        >
          {personalDetails.bio}
        </motion.p>
        <motion.div
          className="mt-12 flex justify-center space-x-4"
          variants={itemVariants}
        >
          <Link
            to="/projects"
            className="px-8 py-3 bg-gray-900 text-white rounded-full hover:bg-gray-700 dark:bg-gray-700 dark:hover:bg-gray-600 transition-colors duration-300 flex items-center"
          >
            View Projects <FaArrowRight className="ml-2" />
          </Link>
          <Link
            to="/contact"
            className="px-8 py-3 bg-white text-gray-900 rounded-full border border-gray-900 hover:bg-gray-100 dark:bg-gray-800 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 transition-colors duration-300"
          >
            Contact Me
          </Link>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Home;
