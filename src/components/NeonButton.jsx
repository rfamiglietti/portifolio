import React from 'react';
import { motion } from 'framer-motion';

const NeonButton = ({ children, primary = true, className = '', ...props }) => {
  const neonClass = primary
    ? 'bg-blue-neon text-dark-primary hover:shadow-neon-blue'
    : 'border border-purple-neon text-purple-neon hover:shadow-neon-purple';

  return (
    <motion.button
      className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ease-in-out ${neonClass} ${className}`}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      {...props}
    >
      {children}
    </motion.button>
  );
};

export default NeonButton;