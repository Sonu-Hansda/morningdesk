import { Hero } from '../sections/Hero';
import { Services } from '../sections/Services';
import { useTheme } from '../context/ThemeContext';

export const Home = () => {
  const { isDarkMode } = useTheme();

  return (
    <div 
    className={`min-h-screen mx-auto md:max-w-4xl transition-colors duration-300 ${
      isDarkMode 
        ? 'bg-gray-900 text-gray-100' 
        : 'bg-white text-gray-900'
    }`}
  >
    <Hero />
    <Services />
  </div>
  );
};