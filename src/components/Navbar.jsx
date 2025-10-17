import React, { useState } from 'react';
import { Link as ScrollLink, scroller } from 'react-scroll';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMenu, FiX, FiHome, FiUser, FiCode, FiBriefcase, FiMail } from 'react-icons/fi';
import ThemeToggle from './ThemeToggle';

// 🚨 NOVO ÍCONES PARA SIDEBAR
const navItems = [
  { name: 'Home', target: 'home', icon: FiHome },
  { name: 'Sobre', target: 'about', icon: FiUser },
  { name: 'Projetos', target: 'projects', icon: FiCode },
  { name: 'Serviços', target: 'services', icon: FiBriefcase },
  { name: 'Contato', target: 'contact', icon: FiMail },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('home');

  const scrollTo = (target) => {
    scroller.scrollTo(target, {
      duration: 800,
      delay: 0,
      smooth: 'easeInOutQuart',
      offset: 0, // Offset pode ser 0 ou pequeno agora
    });
    setActiveLink(target);
    setIsOpen(false);
  };

  const linkClasses = (target) =>
    `flex items-center space-x-3 py-3 px-4 rounded-lg transition-all duration-300 ${
      activeLink === target 
        ? 'bg-blue-neon/20 text-blue-neon font-bold shadow-lg shadow-blue-neon/30' 
        : 'text-gray-400 hover:text-white hover:bg-dark-secondary/50'
    }`;

  // 🚨 SIDEBAR DESKTOP (Fixa na lateral esquerda)
  const SidebarDesktop = () => (
    <div className="fixed top-0 left-0 h-full w-20 bg-dark-primary z-50 border-r border-purple-neon/20 hidden lg:flex flex-col items-center justify-between py-6">
      
      {/* Logo/Marca */}
      <ScrollLink
        to="home"
        smooth={true}
        duration={500}
        onClick={() => setActiveLink('home')}
        className="text-xl font-display font-bold cursor-pointer text-purple-neon hover:text-blue-neon transition-colors duration-300 mb-8"
      >
        @
      </ScrollLink>
      
      {/* Links Principais */}
      <nav className="flex flex-col space-y-4 flex-grow items-center">
        {navItems.map((item) => (
          <ScrollLink
            key={item.name}
            to={item.target}
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
            onSetActive={() => setActiveLink(item.target)}
            className={`cursor-pointer w-14 h-14 flex items-center justify-center text-2xl ${linkClasses(item.target)}`}
          >
            <item.icon />
          </ScrollLink>
        ))}
      </nav>

      {/* Theme Toggle no Rodapé da Sidebar */}
      <div className="mt-8">
        <ThemeToggle />
      </div>

    </div>
  );

  // 🚨 NAVBAR MOBILE (Continua no topo, mas com hambúrguer)
  const NavbarMobile = () => (
    <header className="fixed top-0 left-0 w-full h-20 bg-dark-primary/95 backdrop-blur-sm z-50 shadow-md border-b border-blue-neon/20 lg:hidden">
      <div className="max-w-7xl mx-auto px-5 h-full flex justify-between items-center">
        <ScrollLink
          to="home"
          smooth={true}
          duration={500}
          onClick={() => setActiveLink('home')}
          className="text-2xl font-display font-bold cursor-pointer text-purple-neon"
        >
          @daquebrada.dev
        </ScrollLink>

        <div className="flex items-center space-x-4">
          <ThemeToggle />

          <button
            className="text-2xl text-blue-neon z-50"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </div>
    </header>
  );

  // 🚨 MENU LATERAL MOBILE (Abre do lado esquerdo quando hambúrguer é clicado)
  const MobileMenuOverlay = () => (
    <motion.div
      initial={{ x: '-100%' }}
      animate={{ x: 0 }}
      exit={{ x: '-100%' }}
      transition={{ duration: 0.3 }}
      className="fixed inset-0 w-64 bg-dark-primary shadow-xl z-50 pt-20 flex flex-col items-start p-6"
    >
      <nav className="w-full flex flex-col space-y-2">
        {navItems.map((item) => (
          <ScrollLink
            key={item.name}
            to={item.target}
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
            onSetActive={() => setActiveLink(item.target)}
            className={`cursor-pointer w-full ${linkClasses(item.target)}`}
            onClick={() => scrollTo(item.target)}
          >
            <item.icon className="text-xl" />
            <span>{item.name}</span>
          </ScrollLink>
        ))}
      </nav>
    </motion.div>
  );

  return (
    <>
      <SidebarDesktop />
      <NavbarMobile />
      <AnimatePresence>{isOpen && <MobileMenuOverlay />}</AnimatePresence>
    </>
  );
};

export default Navbar;