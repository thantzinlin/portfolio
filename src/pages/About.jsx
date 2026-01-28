import { motion } from 'framer-motion';
import { skills, experiences, education } from '../data/info';
import { FaBriefcase, FaGraduationCap, FaCode, FaDatabase, FaTools } from 'react-icons/fa';
import profileImg from "../assets/profile.jpg";

const About = () => {
  const sectionVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 },
  };

  const renderSkills = (skillSet, Icon) => (
    <motion.div className="mb-8" variants={itemVariants}>
      <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
        <Icon className="mr-3" /> {skillSet.title}
      </h3>
      <div className="flex flex-wrap gap-4">
        {skillSet.skills.map((skill) => (
          <div key={skill.name} className="bg-gray-200 dark:bg-gray-700 rounded-full px-4 py-2 text-sm font-medium text-gray-800 dark:text-gray-200">
            {skill.name}
          </div>
        ))}
      </div>
    </motion.div>
  );

  return (
    <motion.div
      className="min-h-screen bg-gray-100 dark:bg-gray-900 py-12 px-4 sm:px-6 lg:px-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="max-w-4xl mx-auto">
        <motion.div
          className="text-center mb-12"
          variants={sectionVariants}
          initial="hidden"
          animate="visible"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">About Me</h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 mt-4">A brief introduction about my journey and skills.</p>
          <motion.div variants={itemVariants} className="mt-8">
            <img
              src={profileImg}
              alt="Thant Zin Lin"
              className="w-40 h-40 rounded-full mx-auto object-cover border-4 border-gray-300 dark:border-gray-700 shadow-lg"
            />
          </motion.div>
        </motion.div>

        <motion.div
          variants={sectionVariants}
          initial="hidden"
          animate="visible"
        >
          {renderSkills({ title: 'Frontend', skills: skills.frontend }, FaCode)}
          {renderSkills({ title: 'Backend', skills: skills.backend }, FaCode)}
          {renderSkills({ title: 'Database', skills: skills.database }, FaDatabase)}
          {renderSkills({ title: 'Tools', skills: skills.tools }, FaTools)}
        </motion.div>

        <motion.div
          className="mt-16"
          variants={sectionVariants}
          initial="hidden"
          animate="visible"
        >
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">My Journey</h2>
          <div className="relative">
            <div className="border-l-2 border-gray-300 dark:border-gray-700 absolute h-full top-0 left-1/2 -ml-px"></div>
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                className="mb-12 flex justify-center items-center"
                variants={itemVariants}
              >
                <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8' : 'pl-8'}`}>
                  <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md text-left">
                    <div className="flex items-center mb-2">
                        <FaBriefcase className="text-xl mr-2 dark:text-white"/>
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white">{exp.role}</h3>
                    </div>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">{exp.company} | {exp.period}</p>
                    <p className="text-gray-700 dark:text-gray-300">{exp.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
             {education.map((edu, index) => (
              <motion.div
                key={index}
                className="mb-12 flex justify-center items-center"
                variants={itemVariants}
              >
                <div className={`w-1/2 ${index % 2 !== 0 ? 'pr-8' : 'pl-8'}`}>
                  <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md text-left">
                    <div className="flex items-center mb-2">
                        <FaGraduationCap className="text-xl mr-2 dark:text-white"/>
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white">{edu.degree}</h3>
                    </div>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">{edu.institution} | {edu.period}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default About;
