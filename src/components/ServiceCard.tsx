import { motion } from 'framer-motion';

interface ServiceCardProps {
  service: {
    title: string;
    description: string;
    icon: React.ElementType;
  };
  index: number;
  isDarkMode: boolean;
}

export const ServiceCard = ({ service, index, isDarkMode }: ServiceCardProps) => {
  return (
    <motion.div

    initial={{ opacity: 0, y: 20 }}

    whileInView={{ opacity: 1, y: 0 }}

    transition={{ 

      duration: 0.5, 

      delay: index * 0.1 

    }}

    className={`p-6 rounded-lg shadow-lg transition-all duration-300 ${

      isDarkMode 

        ? 'bg-gray-800 hover:bg-gray-700 text-gray-100' 

        : 'bg-white hover:bg-gray-100 text-gray-900'

    }`}

  >
      <div 
        className={`mb-4 p-3 rounded-full inline-block ${
          isDarkMode 
            ? 'bg-indigo-900/50 text-indigo-400' 
            : 'bg-indigo-100 text-indigo-600'
        }`}
      >
        <service.icon className="h-8 w-8" />
      </div>
      <h3 
        className={`text-xl font-semibold mb-3 transition-colors ${
          isDarkMode ? 'text-white' : 'text-gray-900'
        }`}
      >
        {service.title}
      </h3>
      <p 
        className={`text-base transition-colors ${
          isDarkMode ? 'text-gray-300' : 'text-gray-600'
        }`}
      >
        {service.description}
      </p>
    </motion.div>
  );
};