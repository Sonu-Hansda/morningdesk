import React, { useState, ChangeEvent, FormEvent } from 'react';
import { useTheme } from '../context/ThemeContext';

interface FormData {
  name: string;
  service: string;
  description: string;
}

const Contact: React.FC = () => {
  const { isDarkMode } = useTheme();
  const [formData, setFormData] = useState<FormData>({
    name: '',
    service: '',
    description: ''
  });

  const services = [
    'Mobile App Development',
    'Web Development',
    'Graphic Design',
    'Others'
  ];

  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const mailtoLink = `mailto:sonukumarhansda61@gmail.com?subject=New Inquiry from ${formData.name}&body=Service: ${formData.service}%0D%0ADescription: ${formData.description}`;
    window.location.href = mailtoLink;
  };

  return (
    <div className={`min-h-screen flex items-center justify-center ${isDarkMode ? 'bg-gray-900' : 'bg-gradient-to-br from-indigo-50 to-white'} p-4`}>
      <div className={`rounded-lg p-6 shadow-lg max-w-md w-full ${isDarkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-900'}`}>
        <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2">Your Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              required
              className={`w-full p-2 border rounded ${isDarkMode ? 'border-gray-600 bg-gray-700 text-white' : 'border-gray-300'}`}
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2">Select Service</label>
            <select
              name="service"
              value={formData.service}
              onChange={handleInputChange}
              required
              className={`w-full p-2 border rounded ${isDarkMode ? 'border-gray-600 bg-gray-700 text-white' : 'border-gray-300'}`}
            >
              <option value="">Choose a service</option>
              {services.map((service, index) => (
                <option key={index} value={service}>{service}</option>
              ))}
            </select>
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2">Description</label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleInputChange}
              required
              className={`w-full p-2 border rounded ${isDarkMode ? 'border-gray-600 bg-gray-700 text-white' : 'border-gray-300'}`}
            />
          </div>
          <div className="flex justify-end">
            <button
              type="submit"
              className={`px-4 py-2 rounded transition ${isDarkMode ? 'bg-indigo-500 hover:bg-indigo-400 text-white' : 'bg-indigo-600 hover:bg-indigo-700 text-white'}`}
            >
              Send
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;