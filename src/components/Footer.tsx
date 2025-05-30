import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';
import { Link } from 'react-router-dom';
import { SVGProps } from 'react';

const footerLinks = {
  services: [
    { name: 'UI/UX Design', href: '#services' },
    { name: 'Web Development', href: '#services' },
    { name: 'Mobile Apps', href: '#services' },
    { name: 'Marketing Materials', href: '#services' }
  ],
  resources: [
    { name: 'Portfolio', href: 'https://sonu-hansda.netlify.app/' },
    // { name: 'Blog', href: '#' },
    // { name: 'Case Studies', href: '#' }
  ],
  company: [
    { name: 'About Us', href: '/about' },
    { name: 'Contact', href: '/contact' },
    { name: 'Privacy Policy', href: '/privacy' }
  ],
  social: [
    {
      name: 'GitHub',
      href: 'https://www.github.com/Sonu-Hansda',
      icon: (props: SVGProps<SVGSVGElement>) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
        </svg>
      ),
    },
    {
      name: 'LinkedIn',
      href: 'https://www.linkedin.com/in/sonu-hansda',
      icon: (props: SVGProps<SVGSVGElement>) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" />
        </svg>
      ),
    },
  ],
};

export const Footer = () => {
  const { isDarkMode } = useTheme();

  return (
    <footer 
      className={`${
        isDarkMode 
          ? 'bg-gray-900 border-t border-gray-800' 
          : 'bg-white border-t border-gray-100'
      }`}
    >
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="col-span-2 md:col-span-1"
          >
            <h3 
              className={`text-2xl font-bold ${
                isDarkMode ? 'text-indigo-400' : 'text-indigo-600'
              }`}
            >
              MorningDesk
            </h3>
            <p 
              className={`mt-4 text-sm ${
                isDarkMode ? 'text-gray-400' : 'text-gray-600'
              }`}
            >
              Transforming ideas into digital reality through innovative software solutions.
            </p>
          </motion.div>

          {/* Services Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h3 
              className={`text-sm font-semibold tracking-wider uppercase ${
                isDarkMode ? 'text-gray-500' : 'text-gray-400'
              }`}
            >
              Services
            </h3>
            <ul className="mt-4 space-y-2">
              {footerLinks.services.map((item) => (
                <li key={item.name}>
                  <a 
                    href={item.href} 
                    className={`text-base transition-colors ${
                      isDarkMode 
                        ? 'text-gray-300 hover:text-indigo-400' 
                        : 'text-gray-600 hover:text-indigo-600'
                    }`}
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Resources Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 
              className={`text-sm font-semibold tracking-wider uppercase ${
                isDarkMode ? 'text-gray-500' : 'text-gray-400'
              }`}
            >
              Resources
            </h3>
            <ul className="mt-4 space-y-2">
              {footerLinks.resources.map((item) => (
                <li key={item.name}>
                  <a 
                    href={item.href} 
                    className={`text-base transition-colors ${
                      isDarkMode 
                        ? 'text-gray-300 hover:text-indigo-400' 
                        : 'text-gray-600 hover:text-indigo-600'
                    }`}
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Company Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h3 
              className={`text-sm font-semibold tracking-wider uppercase ${
                isDarkMode ? 'text-gray-500' : 'text-gray-400'
              }`}
            >
              Company
            </h3>
            <ul className="mt-4 space-y-2">
              {footerLinks.company.map((item) => (
                <li key={item.name}>
                  <Link 
                    to={item.href}
                    className={`text-base transition-colors ${
                      isDarkMode 
                        ? 'text-gray-300 hover:text-indigo-400' 
                        : 'text-gray-600 hover:text-indigo-600'
                    }`}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Footer Bottom */}
        <div 
          className={`mt-12 pt-8 ${
            isDarkMode 
              ? 'border-t border-gray-800' 
              : 'border-t border-gray-100'
          }`}
        >
          <div className="flex items-center justify-between">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex space-x-6"
            >
              {footerLinks.social.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className={`transition-colors ${
                    isDarkMode 
                      ? 'text-gray-500 hover:text-indigo-400' 
                      : 'text-gray-400 hover:text-indigo-600'
                  }`}
                >
                  <span className="sr-only">{item.name}</span>
                  <item.icon 
                    className={`h-6 w-6 ${
                      isDarkMode ? 'text-gray-400' : ''
                    }`} 
                    aria-hidden="true" 
                  />
                </a>
              ))}
            </motion.div>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className={`text-sm ${
                isDarkMode ? 'text-gray-500' : 'text-gray-400'
              }`}
            >
              &copy; {new Date().getFullYear()} MorningDesk. All rights reserved.
            </motion.p>
          </div>
        </div>
      </div>
    </footer>
  );
};