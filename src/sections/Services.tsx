import { motion } from 'framer-motion';
import { ServiceCard } from '../components/ServiceCard';
import { services } from '../constant';
import { useTheme } from '../context/ThemeContext';

export const Services = () => {
  const { isDarkMode } = useTheme();

  return (
    <section
      id="services"
      className={`w-full py-20 transition-colors duration-300 ${isDarkMode
          ? 'bg-gray-900 text-gray-100'
          : 'bg-gray-50 text-gray-900'
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2
            className={`text-4xl font-bold mb-4 transition-colors ${isDarkMode
                ? 'text-white'
                : 'text-gray-900'
              }`}
          >
            Our Services
          </h2>
          <p
            className={`text-xl transition-colors ${isDarkMode
                ? 'text-gray-300'
                : 'text-gray-600'
              }`}
          >
            Comprehensive solutions for your digital needs
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={service.title}
              service={service}
              index={index}
              isDarkMode={isDarkMode}
            />
          ))}
        </div>
      </div>
    </section>
  );
};