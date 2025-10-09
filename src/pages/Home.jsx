import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedinIn, FaInstagram } from 'react-icons/fa';
import { Link as ScrollLink } from 'react-scroll';
import SectionWrapper from '../components/SectionWrapper';
import NeonButton from '../components/NeonButton';

const Home = () => {
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  // ATUALIZE COM SEUS LINKS
  const socialLinks = [
    { icon: FaGithub, href: 'https://github.com/RomuloPF' },
    { icon: FaLinkedinIn, href: 'https://linkedin.com/in/RomuloPF' },
    { icon: FaInstagram, href: 'https://www.instagram.com/daquebrada.dev' },
  ];

  return (
    <SectionWrapper id="home">
      <div className="flex flex-col lg:flex-row items-center justify-between min-h-[calc(100vh-80px)] pt-20 lg:pt-0">
        <motion.div
          variants={container}
          initial="hidden"
          animate="visible"
          className="lg:w-1/2"
        >
          <motion.h1
            className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight font-display"
            variants={item}
          >
            Transformando <span className="text-blue-neon">código</span> em{' '}
            <span className="text-purple-neon">revolução digital</span>
          </motion.h1>

          <motion.p className="text-xl text-gray-300 mb-8" variants={item}>
            Olá, eu sou **Romulo Pereira Famiglietti**! Estudante de Engenharia de Software
            trazendo inovação tecnológica direto da quebrada.
          </motion.p>

          <motion.div className="flex space-x-4 mb-10" variants={item}>
            <ScrollLink to="projects" smooth={true} duration={500} offset={-80}>
              <NeonButton primary={true}>Ver Projetos</NeonButton>
            </ScrollLink>
            <a href="/cv-romulo.pdf" download>
              <NeonButton primary={false}>Baixar Currículo (PDF)</NeonButton>
            </a>
          </motion.div>

          <motion.div className="flex space-x-6" variants={item}>
            {socialLinks.map((link, index) => (
              <motion.a
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-3xl text-gray-400 hover:text-purple-neon transition-colors duration-300"
                whileHover={{ scale: 1.2, color: '#9333ea' }}
                whileTap={{ scale: 0.9 }}
              >
                <link.icon />
              </motion.a>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          className="lg:w-1/2 mt-12 lg:mt-0 flex justify-center"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          {/* Imagem estilizada com um círculo neon e gradiente futurista */}
          <div className="relative w-72 h-72 md:w-96 md:h-96">
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-neon to-purple-neon opacity-50 blur-xl"></div>
            <img
              src="imgperfil2.jpeg" 
              alt="perfil.jpeg"
              className="relative w-full h-full object-cover rounded-full border-4 border-blue-neon/50 shadow-neon-blue transition-shadow duration-500 hover:shadow-neon-purple"
            />
          </div>
        </motion.div>
      </div>
    </SectionWrapper>
  )
};

export default Home;