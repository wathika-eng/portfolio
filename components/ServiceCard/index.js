import React from "react";
import { motion } from "framer-motion";
import { 
  FiCode, 
  FiShield, 
  FiHeadphones, 
  FiServer, 
  FiUsers 
} from "react-icons/fi";

const ServiceCard = ({ name, description }) => {
  // Map service names to icons
  const getServiceIcon = (serviceName) => {
    const iconMap = {
      "API Testing": FiShield,
      "API Development & Integration": FiCode,
      "Tech Support": FiHeadphones,
      "Backend Development": FiServer,
      "Training & Mentorship": FiUsers,
    };
    
    return iconMap[serviceName] || FiCode;
  };

  const IconComponent = getServiceIcon(name);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      whileHover={{ y: -5 }}
      className="group bg-white dark:bg-gray-700 p-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-600"
    >
      {/* Icon */}
      <div className="mb-6">
        <div className="w-16 h-16 bg-gray-100 dark:bg-gray-600 rounded-lg flex items-center justify-center group-hover:bg-gray-200 dark:group-hover:bg-gray-500 transition-colors duration-300">
          <IconComponent className="w-8 h-8 text-gray-700 dark:text-gray-300" />
        </div>
      </div>

      {/* Content */}
      <div className="space-y-4">
        <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
          {name || "Service Name"}
        </h3>
        
        <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
          {description || "Service description goes here. This should provide a clear overview of what this service entails and how it benefits clients."}
        </p>
      </div>
    </motion.div>
  );
};

export default ServiceCard;
