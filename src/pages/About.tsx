import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';

const About: React.FC = () => {
  const { isDarkMode } = useTheme();

  return (
    <div className={`min-h-screen md:max-w-4xl mx-auto py-20 transition-colors duration-300 ${isDarkMode ? 'bg-gray-900 text-gray-100' : 'bg-gray-50 text-gray-900'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className={`text-4xl font-bold text-center mb-8 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}
        >
          About Us
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-12"
        >
          <p className="text-lg mb-4">
            At MorningDesk, we are dedicated to providing innovative solutions that empower businesses to thrive in the digital age. Our team of experienced professionals is committed to delivering high-quality services tailored to meet the unique needs of our clients.
          </p>
          <p className="text-lg mb-4">
            With a focus on technology and creativity, we strive to bridge the gap between ideas and execution. Our expertise spans across various domains, including mobile app development, web development, graphic design, and digital marketing.
          </p>
        </motion.div>

        <motion.h3
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className={`text-3xl font-semibold text-center mb-6 ${isDarkMode ? 'text-gray-300' : 'text-gray-800'}`}
        >
          Our Vision
        </motion.h3>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-lg mb-8 text-center"
        >
          Our vision is to be a leading provider of digital solutions that not only meet the expectations of our clients but also exceed them. We aim to foster innovation, creativity, and collaboration, ensuring that our clients achieve their business goals effectively and efficiently.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className={`rounded-lg shadow-lg p-6 transition-transform ${isDarkMode ? 'bg-gray-800 text-gray-100' : 'bg-white text-gray-900'}`}
          >
            <img src="https://img.freepik.com/free-vector/connecting-teams-concept-landing-page_23-2148292731.jpg?t=st=1731386343~exp=1731389943~hmac=9b76f47c3f3567332b378e1bc91be1e55a020037599fa421111c00d0ef0d9e7c&w=1380" alt="Our Team" className="w-full h-32 object-cover rounded-md mb-4" />
            <h4 className="text-xl font-semibold mb-2">Our Team</h4>
            <p>We have a diverse team of experts who are passionate about technology and design.</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 1 }}
            className={`rounded-lg shadow-lg p-6 transition-transform ${isDarkMode ? 'bg-gray-800 text-gray-100' : 'bg-white text-gray-900'}`}
          >
            <img src="https://img.freepik.com/free-vector/organizing-projects-concept-illustration_114360-542.jpg?t=st=1731386375~exp=1731389975~hmac=d50ac08013f598b5fefa7d5cab8378c049c86b1f41ff9ccef53aea64eb34c5ce&w=826" alt="Our Projects" className="w-full h-32 object-cover rounded-md mb-4" />
            <h4 className="text-xl font-semibold mb-2">Our Projects</h4>
            <p>Explore our portfolio to see the innovative solutions we have delivered.</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 1.2 }}
            className={`rounded-lg shadow-lg p-6 transition-transform ${isDarkMode ? 'bg-gray-800 text-gray-100' : 'bg-white text-gray-900'}`}
          >
            <img src="https://img.freepik.com/free-vector/paper-style-core-values-background_23-2149079276.jpg?t=st=1731386169~exp=1731389769~hmac=cf3f5b07d16c91335868cfcd51da2216ee36c156edfef044e44c910703f5834c&w=1380" alt="Our Values" className="w-full h-32 object-cover rounded-md mb-4" />
            <h4 className="text-xl font-semibold mb-2">Our Values</h4>
            <p>We believe in integrity, innovation, and excellence in everything we do.</p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;