// src/pages/Home.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedinIn, FaInstagram } from 'react-icons/fa';
import { Link as ScrollLink } from 'react-scroll';
import SectionWrapper from '../components/SectionWrapper';
import NeonButton from '../components/NeonButton';

const Home = () => {
  // Configurações de animação (Mantidas)
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  // Seus links preservados
  const socialLinks = [
    { icon: FaGithub, href: 'https://github.com/rfamiglietti' },
    { icon: FaLinkedinIn, href: 'https://linkedin.com/in/romulopfami' },
    { icon: FaInstagram, href: 'https://www.instagram.com/r_famiglietti' },
  ];

  return (
    <SectionWrapper id="home">
      <div className="flex flex-col lg:flex-row items-center justify-between min-h-[calc(100vh-80px)] pt-20 lg:pt-0">
        
        {/* === COLUNA DA ESQUERDA (Texto) === */}
        <motion.div
          variants={container}
          initial="hidden"
          animate="visible"
          className="lg:w-1/2"
        >
          {/* 1. Saudação estilo comentário de código */}
          <motion.div variants={item} className="mb-2">
             <span style={{ fontFamily: 'JetBrains Mono, monospace', color: '#8b949e', fontSize: '1.1rem' }}>
               // Welcome to my portfolio
             </span>
          </motion.div>

          {/* 2. Nome Principal (Corrigido o erro de H1 dentro de H1) */}
          <motion.h1
            className="text-5xl md:text-7xl font-extrabold mb-4 leading-tight font-display text-white"
            variants={item}
          >
            Rômulo <span className="text-blue-neon">Famiglietti</span>
          </motion.h1>

          {/* 3. Subtítulo estilo Tag HTML (Visual Tech) */}
          <motion.div 
            variants={item} 
            className="mb-6 text-lg md:text-xl font-bold" 
            style={{ fontFamily: 'JetBrains Mono, monospace' }}
          >
             <span className="text-gray-500">&lt;</span>
             <span className="text-purple-neon">Developer </span>
             stack
             <span className="text-blue-neon">=</span>
             <span className="text-green-400">"FullStack"</span>
             <span className="text-gray-500"> /&gt;</span>
          </motion.div>

          {/* 4. Descrição Otimizada (Sem o erro de digitação) */}
          <motion.p className="text-xl text-gray-300 mb-8 max-w-lg" variants={item}>
            Estudante de Engenharia de Software transformando ideias em 
            <strong className="text-white"> código</strong>. Especialista em criar interfaces com 
            <strong className="text-blue-neon"> React</strong> e sistemas robustos com 
            <strong className="text-purple-neon"> Django</strong>.
          </motion.p>

          {/* 5. Botões de Ação (Links preservados) */}
          <motion.div className="flex space-x-4 mb-10" variants={item}>
            <ScrollLink to="projects" smooth={true} duration={500} offset={-80}>
              <NeonButton primary={true}>Ver Projetos</NeonButton>
            </ScrollLink>
            
            {/* Link do PDF preservado exatamente como no seu original */}
            <a href="/cvportifolio.pdf" download>
              <NeonButton primary={false}>Baixar Currículo (PDF)</NeonButton>
            </a>
          </motion.div>

          {/* 6. Redes Sociais */}
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

        {/* === COLUNA DA DIREITA (Imagem) === */}
        <motion.div
          className="lg:w-1/2 mt-12 lg:mt-0 flex justify-center"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <div className="relative w-72 h-72 md:w-96 md:h-96">
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-neon to-purple-neon opacity-50 blur-xl"></div>
            <img
              src="imgperfil2.jpeg" 
              alt="Rômulo Famiglietti"
              className="relative w-full h-full object-cover rounded-full border-4 border-blue-neon/50 shadow-neon-blue transition-shadow duration-500 hover:shadow-neon-purple"
            />
          </div>
        </motion.div>

      </div>
    </SectionWrapper>
  )
};

export default Home;