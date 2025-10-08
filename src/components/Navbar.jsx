import React, { useState } from 'react';
import { Link as ScrollLink, scroller } from 'react-scroll';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMenu, FiX } from 'react-icons/fi';

const navItems = [
  { name: 'Home', target: 'home' },
  { name: 'Sobre', target: 'about' },
  { name: 'Projetos', target: 'projects' },
  { name: 'Serviços', target: 'services' },
  { name: 'Contato', target: 'contact' },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('home');

  const scrollTo = (target) => {
    scroller.scrollTo(target, {
      duration: 800,
      delay: 0,
      smooth: 'easeInOutQuart',
      offset: -80,
    });
    setActiveLink(target);
    setIsOpen(false);
  };

  const linkClasses = (target) =>
    `cursor-pointer transition-colors duration-300 hover:text-blue-neon ${
      activeLink === target ? 'text-blue-neon border-b-2 border-blue-neon font-bold' : 'text-white'
    }`;

  const MobileMenu = () => (
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
      transition={{ duration: 0.2 }}
      className="absolute top-full left-0 w-full bg-dark-secondary shadow-lg z-40 p-4 lg:hidden"
    >
      {navItems.map((item) => (
        <ScrollLink
          key={item.name}
          to={item.target}
          spy={true}
          smooth={true}
          offset={-80}
          duration={500}
          onSetActive={() => setActiveLink(item.target)}
          className="block py-2 text-center text-lg hover:text-purple-neon transition-colors duration-300"
          onClick={() => scrollTo(item.target)}
        >
          {item.name}
        </ScrollLink>
      ))}
    </motion.div>
  );

  return (
    <header className="fixed top-0 left-0 w-full bg-dark-primary/95 backdrop-blur-sm z-50 shadow-md border-b border-blue-neon/20">
      <div className="max-w-7xl mx-auto px-5 h-20 flex justify-between items-center">
        <ScrollLink
          to="home"
          smooth={true}
          duration={500}
          onClick={() => setActiveLink('home')}
          className="text-2xl font-display font-bold cursor-pointer text-purple-neon hover:text-blue-neon transition-colors duration-300"
        >
          @daquebrada.dev
        </ScrollLink>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex space-x-8">
          {navItems.map((item) => (
            <ScrollLink
              key={item.name}
              to={item.target}
              spy={true}
              smooth={true}
              offset={-80}
              duration={500}
              onSetActive={() => setActiveLink(item.target)}
              className={linkClasses(item.target)}
            >
              {item.name}
            </ScrollLink>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden text-2xl text-blue-neon z-50"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>
      <AnimatePresence>{isOpen && <MobileMenu />}</AnimatePresence>
    </header>
  );
};

export default Navbar;