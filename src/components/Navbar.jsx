import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import useDarkMode from '../hooks/useDarkMode';
import { SunIcon, MoonIcon, MenuIcon, XIcon } from '@heroicons/react/solid';

const Navbar = () => {
  const [colorTheme, setTheme] = useDarkMode();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navLinks = [
    { title: 'Home', path: '/' },
    { title: 'About', path: '/about' },
    { title: 'Projects', path: '/projects' },
    { title: 'Contact', path: '/contact' },
  ];

  const linkVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <nav className="bg-white dark:bg-gray-800 shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <NavLink to="/" className="text-2xl font-bold text-gray-900 dark:text-white">
              Thant Zin Lin
            </NavLink>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.title}
                  variants={linkVariants}
                  initial="hidden"
                  animate="visible"
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  <NavLink
                    to={link.path}
                    className={({ isActive }) =>
                      `px-3 py-2 rounded-md text-sm font-medium ${
                        isActive
                          ? 'text-white bg-gray-900 dark:bg-gray-700'
                          : 'text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                      }`
                    }
                  >
                    {link.title}
                  </NavLink>
                </motion.div>
              ))}
            </div>
          </div>
          <div className="flex items-center">
            <button
              onClick={() => setTheme(colorTheme)}
              className="p-2 rounded-full text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"
              aria-label="Toggle dark mode"
            >
              {colorTheme === 'light' ? (
                <MoonIcon className="h-6 w-6" />
              ) : (
                <SunIcon className="h-6 w-6" />
              )}
            </button>
            <div className="-mr-2 flex md:hidden">
              <button
                onClick={toggleMenu}
                type="button"
                className="bg-gray-200 dark:bg-gray-700 inline-flex items-center justify-center p-2 rounded-md text-gray-700 dark:text-gray-300 hover:text-white hover:bg-gray-300 dark:hover:bg-gray-600"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                {isOpen ? (
                  <XIcon className="block h-6 w-6" />
                ) : (
                  <MenuIcon className="block h-6 w-6" />
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
      <motion.div
        className={`${isOpen ? 'block' : 'hidden'} md:hidden`}
        id="mobile-menu"
        initial={{ height: 0 }}
        animate={{ height: isOpen ? 'auto' : 0 }}
        transition={{ duration: 0.3 }}
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          {navLinks.map((link) => (
            <NavLink
              key={link.title}
              to={link.path}
              className={({ isActive }) =>
                `block px-3 py-2 rounded-md text-base font-medium ${
                  isActive
                    ? 'text-white bg-gray-900 dark:bg-gray-700'
                    : 'text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                }`
              }
              onClick={() => setIsOpen(false)}
            >
              {link.title}
            </NavLink>
          ))}
        </div>
      </motion.div>
    </nav>
  );
};

export default Navbar;
