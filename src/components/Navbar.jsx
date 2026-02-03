import React, { useState } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import { FiHome, FiUser, FiCode, FiBriefcase, FiMail } from 'react-icons/fi';
import { motion } from 'framer-motion';
import ThemeToggle from './ThemeToggle';

const Navbar = () => {
  const [activeNav, setActiveNav] = useState('home');

  const navItems = [
    { id: 'home', icon: FiHome, label: 'Início' },
    { id: 'about', icon: FiUser, label: 'Sobre' },
    { id: 'projects', icon: FiCode, label: 'Projetos' },
    { id: 'services', icon: FiBriefcase, label: 'Serviços' },
    { id: 'contact', icon: FiMail, label: 'Contato' },
  ];

  return (
    <>
      <nav className="fixed z-50 
        bottom-0 left-0 w-full h-16 
        lg:top-0 lg:w-20 lg:h-screen lg:flex-col
        bg-[#161b22] border-t lg:border-t-0 lg:border-r border-gray-800 
        flex justify-between items-center shadow-2xl"
      >
        
        {/* Logo Desktop */}
        <div className="hidden lg:flex w-full h-20 items-center justify-center border-b border-gray-800 mb-2">
           <span className="text-purple-neon font-bold text-xl font-mono">
             {'<R>'}
           </span>
        </div>

        {/* Itens de Navegação */}
        <div className="flex w-full lg:flex-col justify-around lg:justify-start lg:gap-6 lg:mt-4 items-center h-full lg:h-auto">
          {navItems.map((item) => (
            <ScrollLink
              key={item.id}
              to={item.id}
              spy={true}
              smooth={true}
              offset={-50}
              duration={500}
              onSetActive={() => setActiveNav(item.id)}
              className="relative group cursor-pointer p-3 lg:w-full flex items-center justify-center"
            >
              {/* Indicador Ativo (Barra Azul) */}
              {activeNav === item.id && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute 
                    /* Mobile: Topo */
                    top-0 left-1/2 -translate-x-1/2 w-8 h-1 
                    /* Desktop: Esquerda e centralizado verticalmente */
                    lg:top-1/2 lg:left-0 lg:-translate-y-1/2 lg:translate-x-0 lg:w-1 lg:h-8
                    bg-blue-neon rounded-r-full shadow-[0_0_10px_#58a6ff]"
                />
              )}

              {/* CORREÇÃO AQUI: 'leading-none' remove a altura da fonte e 'flex' centraliza o SVG */}
              <div className={`text-2xl leading-none flex items-center justify-center transition-all duration-300 ${
                activeNav === item.id ? 'text-blue-neon scale-110' : 'text-gray-500 hover:text-gray-200'
              }`}>
                <item.icon />
              </div>

              {/* Tooltip */}
              <span className="absolute left-16 bg-gray-700 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none hidden lg:block whitespace-nowrap z-50 border border-gray-600">
                {item.label}
              </span>
            </ScrollLink>
          ))}
        </div>

        {/* Theme Toggle Desktop */}
        <div className="hidden lg:flex lg:flex-col lg:mb-6 w-full items-center justify-center border-t border-gray-800 pt-6 mt-auto">
          <ThemeToggle />
        </div>

      </nav>

      <div className="fixed top-4 right-4 z-50 lg:hidden">
        <ThemeToggle />
      </div>
    </>
  );
};

export default Navbar;