import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';
import thewhiteloop from '../assets/images/thewhiteloop.jpg';
import mfest from '../assets/images/mfest.png';
import citikeeper from '../assets/images/citikeeper.jpg';

interface Project {
  title: string;
  description: string;
  category: string;
  image: string;
  link?: string;
}

const projects: Project[] = [
  {
    title: 'The WhiteLoop',
    description: 'An AI-powered automation platform designed to streamline operations for real estate agencies, enhancing efficiency in lead management, client communication, and property listings.',
    category: 'Web Development',
    image: thewhiteloop,
    link: 'https://thewhiteloop.com',
  },
  {
    title: 'MFest',
    description: 'A dynamic mobile platform that enables users to share, discover, and redeem exclusive coupons and deals from local businesses and online retailers.',
    category: 'Mobile App',
    image: mfest,
  },
  {
    title: 'Citikeeper',
    description: 'A comprehensive service platform offering on-demand solutions for urban living, connecting users with trusted providers for home services, maintenance, and community support.',
    category: 'App & Web Development',
    image: citikeeper,
     link: 'https://citikeeper.com',
  },
];

export const OurWork = () => {
  const { isDarkMode } = useTheme();

  return (
    <section
      id="our-work"
      className={`w-full py-20 transition-colors duration-300 ${isDarkMode ? 'bg-gray-900 text-gray-100' : 'bg-gray-50 text-gray-900'}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2
            className={`text-4xl font-bold mb-4 transition-colors ${isDarkMode ? 'text-white' : 'text-gray-900'}`}
          >
            Our Work
          </h2>
          <p
            className={`text-xl transition-colors ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}
          >
            Explore some of our recent projects
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105 ${
                isDarkMode ? 'bg-gray-800 text-gray-100' : 'bg-white text-gray-900'
              }`}
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-40 object-cover"
              />
              <div className="p-6">
                <span
                  className={`inline-block px-3 py-1 rounded-full text-sm font-semibold mb-2 ${
                    isDarkMode ? 'bg-blue-900 text-blue-200' : 'bg-blue-100 text-blue-800'
                  }`}
                >
                  {project.category}
                </span>
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className={`mb-4 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  {project.description}
                </p>
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-block mt-2 px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                      isDarkMode
                        ? 'bg-blue-600 hover:bg-blue-700 text-white'
                        : 'bg-blue-500 hover:bg-blue-600 text-white'
                    }`}
                  >
                    View
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};