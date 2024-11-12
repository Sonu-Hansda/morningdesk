import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';
import { useNavigate } from 'react-router-dom';

export const Hero = () => {
  const { isDarkMode } = useTheme();
  const navigate = useNavigate();
  return (
    <section className={`min-h-screen flex items-center justify-center transition-colors duration-300 ${isDarkMode
      ? 'bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900'
      : 'bg-gradient-to-br from-indigo-50 to-white'
      }`}>
      <div className="mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className={`text-5xl md:text-6xl font-bold mb-6 transition-colors ${isDarkMode ? 'text-white' : 'text-gray-900'
            }`}
        >
          Transform Your Ideas Into Reality
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className={`text-xl mb-8 max-w-2xl mx-auto transition-colors ${isDarkMode ? 'text-gray-300' : 'text-gray-600'
            }`}
        >
          We craft digital solutions that empower businesses and creators.
        </motion.p>

        <motion.button
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => navigate("/contact")}
          className={`px-8 py-3 rounded-full text-lg font-medium transition-all ${isDarkMode
            ? 'bg-indigo-500 hover:bg-indigo-400 text-white shadow-lg shadow-indigo-500/30'
            : 'bg-indigo-600 hover:bg-indigo-700 text-white'
            }`}
        >
          Get Started
        </motion.button>
      </div>
    </section>
  );
};