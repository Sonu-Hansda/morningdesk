import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';
import { useNavigate } from 'react-router-dom';

export const Hero = () => {
  const { isDarkMode } = useTheme();
  const navigate = useNavigate();

  return (
    <section
      className={`min-h-screen flex items-center justify-center overflow-hidden transition-colors duration-500 relative ${
        isDarkMode ? 'bg-gray-900' : 'bg-white'
      }`}
    >
      {/* Background Animation */}
      <div className="absolute inset-0 z-0">
        {isDarkMode ? (
          <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-indigo-950 to-purple-900 opacity-90"></div>
        ) : (
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 to-white"></div>
        )}

        {/* Floating Particles / Dots */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className={`absolute w-2 h-2 rounded-full ${
                isDarkMode ? 'bg-indigo-400' : 'bg-indigo-300'
              }`}
              initial={{
                x: `${Math.random() * 100}%`,
                y: `${Math.random() * 100}%`,
                opacity: Math.random(),
              }}
              animate={{
                y: [0, -20, 0],
                opacity: [0.3, 0.7, 0.3],
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 6 + Math.random() * 4,
                repeat: Infinity,
                ease: 'linear',
              }}
            />
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-6 text-center z-10">
        <motion.h1
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className={`text-5xl md:text-7xl font-extrabold leading-tight mb-6 bg-clip-text text-transparent ${
            isDarkMode
              ? 'bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400'
              : 'bg-gradient-to-r from-indigo-600 to-purple-600'
          }`}
        >
          Transform Your Ideas Into Reality
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className={`text-lg md:text-xl max-w-2xl mx-auto mb-10 transition-colors ${
            isDarkMode ? 'text-gray-300' : 'text-gray-600'
          }`}
        >
          We craft digital solutions that empower businesses and creators through innovation and precision.
        </motion.p>

        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          whileHover={{ scale: 1.05, boxShadow: '0px 0px 20px rgba(124, 58, 237, 0.5)' }}
          whileTap={{ scale: 0.98 }}
          onClick={() => navigate('/contact')}
          className={`px-8 py-4 rounded-full text-lg md:text-xl font-semibold transition-all duration-300 transform ${
            isDarkMode
              ? 'bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-400 hover:to-purple-500 text-white shadow-lg shadow-indigo-500/30'
              : 'bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white shadow-md'
          }`}
        >
          Get Started
        </motion.button>
      </div>
    </section>
  );
};