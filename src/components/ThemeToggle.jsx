// src/components/ThemeToggle.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext'; // 🚨 Caminho Corrigido
import { FiSun, FiMoon } from 'react-icons/fi';

const ThemeToggle = ({ className }) => {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <motion.button
      onClick={toggleTheme}
      className={`relative w-16 h-8 rounded-full p-1 cursor-pointer transition-colors duration-300 shadow-lg ${
        isDark ? 'bg-dark-secondary' : 'bg-gray-300'
      } ${className}`}
      aria-label="Toggle Dark/Light Mode"
      whileTap={{ scale: 0.95 }}
    >
      {/* Container que desliza (Lua/Sol) */}
      <motion.div
        className={`absolute top-1/2 -translate-y-1/2 w-6 h-6 rounded-full flex items-center justify-center text-xl shadow-md ${
          isDark ? 'bg-purple-neon text-dark-primary' : 'bg-white text-yellow-500'
        }`}
        initial={false}
        animate={{ x: isDark ? 'calc(100% + 4px)' : '0' }}
        transition={{ type: 'spring', stiffness: 700, damping: 30 }}
      >
        {isDark ? <FiMoon /> : <FiSun />}
      </motion.div>

      {/* Ícone de fundo (Sol) */}
      <FiSun
        className={`absolute left-1.5 top-1/2 -translate-y-1/2 text-lg transition-opacity duration-300 ${
          isDark ? 'text-gray-500 opacity-50' : 'text-yellow-600 opacity-100'
        }`}
      />

      {/* Ícone de fundo (Lua) */}
      <FiMoon
        className={`absolute right-1.5 top-1/2 -translate-y-1/2 text-lg transition-opacity duration-300 ${
          isDark ? 'text-blue-neon opacity-100' : 'text-gray-400 opacity-0'
        }`}
      />
    </motion.button>
  );
};

export default ThemeToggle;