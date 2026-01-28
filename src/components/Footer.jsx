import { personalDetails } from '../data/info';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  const socialLinks = [
    { name: 'GitHub', icon: <FaGithub />, url: personalDetails.github },
    { name: 'LinkedIn', icon: <FaLinkedin />, url: personalDetails.linkedin },
  ];

  return (
    <footer className="bg-white dark:bg-gray-800 shadow-inner py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <p className="text-gray-600 dark:text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} {personalDetails.name}. All rights reserved.
          </p>
          <div className="flex space-x-4">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
                aria-label={link.name}
              >
                {link.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
