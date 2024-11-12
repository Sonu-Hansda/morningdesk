import React from 'react';
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
    {
        title: 'UI/UX Design',
        description: 'Our UI/UX design services focus on creating user-friendly and visually appealing interfaces.',
        benefits: [
            'Enhanced user satisfaction',
            'Improved usability',
            'Increased user retention',
        ],
        image: 'https://img.freepik.com/free-photo/representations-user-experience-interface-design_23-2150038916.jpg?t=st=1731386003~exp=1731389603~hmac=f4a982052387dc2978efe48681d8ab531ba8eb2478a0e7aa589c7dfb6fb2b7b6&w=1060',
    },
    {
        title: 'Digital Marketing',
        description: 'We help you reach your target audience through effective digital marketing strategies.',
        benefits: [
            'Increased online visibility',
            'Targeted marketing',
            'Measurable results',
        ],
        image: 'https://img.freepik.com/free-photo/marketing-ideas-share-research-planning-concept_53876-127431.jpg?t=st=1731385462~exp=1731389062~hmac=145f088b3e5f607fb09e68a4f44df4c8645333662e5aeaadd7ef8b1c728c2a6d&w=826',
    },
    {
        title: 'E-commerce Solutions',
        description: 'We provide comprehensive e-commerce solutions to help you sell online effectively.',
        benefits: [
            'User -friendly shopping experience',
            'Secure payment gateways',
            'Inventory management',
        ],
        image: 'https://img.freepik.com/free-psd/3d-rendering-ecommerce-background_23-2151386696.jpg?t=st=1731385951~exp=1731389551~hmac=fa2578ae7bdbe47d96b2ce8b0fe45cdd4d888779cdc29e33894d47709788a644&w=1380',
    },
];

export const ServicesPage: React.FC = () => {
    const { isDarkMode } = useTheme();

    return (
        <div className={`min-h-screen py-20 transition-colors duration-300 ${isDarkMode ? 'bg-gray-900 text-gray-100' : 'bg-gray-50 text-gray-900'}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.h2
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className={`text-4xl font-bold text-center mb-8 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}

                >
                    Our Services
                </motion.h2>

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
        </div>
    );
};

export default ServicesPage;