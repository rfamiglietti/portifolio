import React, { useState } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import { FiHome, FiUser, FiCode, FiBriefcase, FiMail } from 'react-icons/fi';
import { motion } from 'framer-motion';
import ThemeToggle from './ThemeToggle'; // Mantendo seu componente

const Navbar = () => {
  const [activeNav, setActiveNav] = useState('home');

  const navItems = [
    { id: 'home', icon: FiHome, label: 'Home' },
    { id: 'projects', icon: FiCode, label: 'Projetos' },
    { id: 'about', icon: FiUser, label: 'Sobre' },
    { id: 'services', icon: FiBriefcase, label: 'Serviços' },
    { id: 'contact', icon: FiMail, label: 'Contato' },
  ];

  return (
    <>
      {/* Container Principal da Navbar */}
      <nav className="fixed z-50 
        /* Mobile: Barra fixa no rodapé (App Dock) */
        bottom-0 left-0 w-full h-16 
        /* Desktop: Barra lateral esquerda (VS Code Activity Bar) */
        lg:top-0 lg:w-20 lg:h-screen lg:flex-col
        /* Estilo Visual */
        bg-[#161b22] border-t lg:border-t-0 lg:border-r border-gray-800 
        flex justify-between items-center shadow-2xl"
      >
        
        {/* === LOGO / MARCA (Visível apenas no Desktop, topo da barra) === */}
        <div className="hidden lg:flex w-full h-20 items-center justify-center border-b border-gray-800 mb-2">
           <span className="text-purple-neon font-bold text-xl font-mono">
             {'<R>'}
           </span>
        </div>

        {/* === LINKS DE NAVEGAÇÃO === */}
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
              className="relative group cursor-pointer p-3 lg:w-full flex justify-center"
            >
              {/* Indicador de Ativo (O "Brilho" do VS Code) */}
              {activeNav === item.id && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute 
                    /* Mobile: Linha no topo do ícone */
                    top-0 left-1/2 -translate-x-1/2 w-8 h-1 
                    /* Desktop: Linha na esquerda (Activity Bar) */
                    lg:top-1/2 lg:left-0 lg:-translate-y-1/2 lg:translate-x-0 lg:w-1 lg:h-8
                    bg-blue-neon rounded-full shadow-[0_0_10px_#58a6ff]"
                />
              )}

              {/* Ícone */}
              <div className={`text-2xl transition-all duration-300 ${
                activeNav === item.id ? 'text-blue-neon scale-110' : 'text-gray-500 hover:text-gray-200'
              }`}>
                <item.icon />
              </div>

              {/* Tooltip (Só aparece no hover do Desktop) */}
              <span className="absolute left-16 bg-gray-700 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none hidden lg:block whitespace-nowrap z-50 border border-gray-600">
                {item.label}
              </span>
            </ScrollLink>
          ))}
        </div>

        {/* === CONFIGURAÇÕES (Theme Toggle) === */}
        <div className="hidden lg:flex lg:flex-col lg:mb-6 w-full items-center justify-center border-t border-gray-800 pt-6 mt-auto">
          <ThemeToggle />
        </div>

      </nav>

      {/* Theme Toggle Mobile Flutuante 
         (Como a barra mobile ocupa o espaço embaixo, deixamos o toggle flutuando no topo direito)
      */}
      <div className="fixed top-4 right-4 z-50 lg:hidden">
        <ThemeToggle />
      </div>
    </>
  );
};

export default Navbar;