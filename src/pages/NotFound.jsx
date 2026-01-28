import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaHome } from 'react-icons/fa';

const NotFound = () => {
  return (
    <motion.div
      className="min-h-screen flex flex-col items-center justify-center bg-gray-100 dark:bg-gray-900 text-center px-4"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.3 }}
    >
      <motion.h1
        className="text-8xl md:text-9xl font-bold text-gray-900 dark:text-white"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        404
      </motion.h1>
      <motion.h2
        className="text-2xl md:text-4xl text-gray-700 dark:text-gray-300 mt-4"
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.5 }}
      >
        Page Not Found
      </motion.h2>
      <motion.p
        className="text-lg text-gray-600 dark:text-gray-400 mt-8 max-w-md"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.5 }}
      >
        Sorry, the page you are looking for does not exist. You can go back to the homepage.
      </motion.p>
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.8, duration: 0.5 }}
      >
        <Link
          to="/"
          className="mt-12 px-8 py-3 bg-gray-900 text-white rounded-full hover:bg-gray-700 dark:bg-gray-700 dark:hover:bg-gray-600 transition-colors duration-300 flex items-center"
        >
          <FaHome className="mr-2" />
          Go to Homepage
        </Link>
      </motion.div>
    </motion.div>
  );
};

export default NotFound;
