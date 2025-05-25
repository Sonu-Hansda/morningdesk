import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';


interface ServiceDetail {
  title: string;
  description: string;
  benefits: string[];
  image: string;
}

const ServiceDetails: ServiceDetail[] = [
  {
    title: 'Mobile App Development',
    description: 'We create high-quality mobile applications for both iOS and Android platforms.',
    benefits: [
      'Increased customer engagement',
      'Accessibility on-the-go',
      'Enhanced user experience',
    ],
    image: 'https://img.freepik.com/free-vector/travel-app-screens-interface-design_23-2148602411.jpg?t=st=1731385577~exp=1731389177~hmac=92ced6d94e340713f76bcbca3a14ea5d19616fa41af70a2691a94086317f537d&w=1380',
  },
  {
    title: 'Web Development',
    description: 'Our web development services ensure your online presence is robust and effective.',
    benefits: [
      'Responsive design',
      'SEO-friendly',
      'Scalable solutions',
    ],
    image: 'https://img.freepik.com/free-vector/www-concept-illustration_114360-2143.jpg?t=st=1731385228~exp=1731388828~hmac=f65a30eea75d6137db9d9cb0c42388e88a6f1d6d317cf44b533a3adc0976c22a&w=826',
  },
  {
    title: 'Graphic Design',
    description: 'We provide creative graphic design solutions that enhance your brand identity.',
    benefits: [
      'Improved brand recognition',
      'Professional appearance',
      'Effective communication',
    ],
    image: 'https://img.freepik.com/free-vector/flat-world-graphics-day-illustration_23-2148880103.jpg?t=st=1731385631~exp=1731389231~hmac=c925e4ac9b35812cd80a153bc95b860fc41a2cb3cd305084637619690f3fead3&w=826',
  },
];

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
          {ServiceDetails.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className={`rounded-lg shadow-lg p-6 transition-transform ${isDarkMode ? 'bg-gray-800 text-gray-100' : 'bg-white text-gray-900'}`}

            >
              <img src={service.image} alt={service.title} className="w-full h-32 object-cover rounded-md mb-4" />
              <h3 className="text-2xl font-semibold mb-2">{service.title}</h3>
              <p className="mb-4">{service.description}</p>
              <h4 className="font-bold mb-2">Benefits:</h4>
              <ul className="list-disc list-inside mb-4">

                {service.benefits.map((benefit, idx) => (

                  <li key={idx}>{benefit}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};