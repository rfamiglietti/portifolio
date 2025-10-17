// src/context/ThemeContext.jsx
import React, { createContext, useContext, useState, useEffect } from 'react';

// 1. Criação do Contexto
const ThemeContext = createContext();

// 2. Criação do Provedor (Provider)
export const ThemeProvider = ({ children }) => {
  // Inicializa o tema lendo o localStorage ou definindo 'dark' como padrão
  const [theme, setTheme] = useState(() => {
    if (typeof window !== 'undefined') {
      const storedTheme = localStorage.getItem('theme');
      if (storedTheme) return storedTheme;
      return 'dark'; // Padrão para portfólio neon
    }
    return 'dark';
  });

  // Efeito para aplicar a classe Tailwind 'dark' ao <html>
  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
      root.style.backgroundColor = '#0a0b1f'; // Cor de fundo escuro
    } else {
      root.classList.remove('dark');
      root.style.backgroundColor = '#f3f4f6'; // Cor de fundo claro (Tailwind gray-100)
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  // Função para alternar o tema
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// 3. Hook Customizado
export const useTheme = () => useContext(ThemeContext);