import React, { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import { FaSun, FaMoon } from 'react-icons/fa';
import { motion } from 'framer-motion';

const ThemeToggle = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <button
      onClick={toggleTheme}
      className="relative p-2 rounded-lg bg-gray-800 hover:bg-gray-700 transition-colors border border-gray-700 group"
      aria-label="Alternar Tema"
    >
      {/* Ícone Dinâmico com Animação */}
      <motion.div
        key={theme} // A chave muda, disparando a animação
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 20, opacity: 0 }}
        transition={{ duration: 0.2 }}
      >
        {theme === 'dark' ? (
          <FaSun className="text-yellow-400 text-xl" />
        ) : (
          <FaMoon className="text-blue-neon text-xl" />
        )}
      </motion.div>

      {/* Tooltip (Dica ao passar o mouse) */}
      <span className="absolute right-12 top-2 bg-gray-900 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none border border-gray-700">
        Mudar para {theme === 'dark' ? 'Light' : 'Dark'} Mode
      </span>
    </button>
  );
};

export default ThemeToggle;