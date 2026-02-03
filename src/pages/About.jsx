import React from 'react';
import { motion } from 'framer-motion';
import { FaHtml5, FaJs, FaReact, FaPython, FaGitAlt } from 'react-icons/fa';
import { SiTailwindcss, SiDjango, SiPostgresql, SiArduino } from 'react-icons/si';
import SectionWrapper from '../components/SectionWrapper';

const About = () => {
  // Configuração de animação para os cards
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  // Lista de Skills Atualizada (Incluindo seu Back-end!)
  const skills = [
    { name: 'React', icon: FaReact, color: 'text-blue-400' },
    { name: 'JavaScript', icon: FaJs, color: 'text-yellow-400' },
    { name: 'Tailwind', icon: SiTailwindcss, color: 'text-teal-400' },
    { name: 'Python', icon: FaPython, color: 'text-blue-500' },
    { name: 'Django', icon: SiDjango, color: 'text-green-600' },     // Adicionado: Seu forte no back
    { name: 'PostgreSQL', icon: SiPostgresql, color: 'text-blue-300' }, // Adicionado: Banco de dados
    { name: 'Git/GitHub', icon: FaGitAlt, color: 'text-red-500' },      // Essencial
    { name: 'Arduino', icon: SiArduino, color: 'text-teal-600' },       // Seu diferencial de IoT
  ];

  return (
    <SectionWrapper id="about">
      <div className="flex flex-col lg:flex-row gap-16 items-center max-w-6xl mx-auto pb-32">
        
        {/* === LADO ESQUERDO: FOTO === */}
        <motion.div
          className="lg:w-1/3 flex-shrink-0 relative group"
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {/* Efeito de borda neon atrás da foto */}
          <div className="absolute inset-0 bg-gradient-to-tr from-blue-neon to-purple-neon rounded-xl blur-lg opacity-40 group-hover:opacity-60 transition-opacity duration-500"></div>
          
          <div className="relative p-2 bg-[#161b22] border border-gray-700 rounded-xl">
            <img
              src="romulodev.jpg" 
              alt="Rômulo Dev"
              className="w-full h-auto rounded-lg grayscale group-hover:grayscale-0 transition-all duration-500"
            />
            {/* Legenda estilo VS Code */}
            <div className="absolute bottom-4 left-4 right-4 bg-black/80 backdrop-blur-sm p-2 rounded border border-gray-700">
               <div className="text-xs text-gray-400 font-mono flex items-center gap-2">
                 <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                 Dev.js
               </div>
            </div>
          </div>
        </motion.div>

        {/* === LADO DIREITO: TEXTO E SKILLS === */}
        <motion.div
          className="lg:w-2/3"
          initial={{ x: 50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {/* Cabeçalho estilo código */}
          <div className="mb-6 font-mono text-blue-neon text-sm tracking-widest">
            01. // QUEM SOU EU
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Da <span className="text-purple-neon">Quebrada</span> para o Mundo Tech
          </h2>

          <div className="space-y-4 text-gray-300 text-lg leading-relaxed">
            <p>
              Sou um entusiasta da tecnologia nascido e criado na periferia, transformando desafios em oportunidades através do código.
            </p>
            <p>
              Formado como <strong className="text-white">Técnico em Desenvolvimento de Sistemas</strong> pelo <span className="text-blue-neon font-mono text-base bg-blue-900/20 px-1 rounded">SENAI Morvan Figueiredo</span> e graduando em Engenharia de Software, meu objetivo é democratizar o acesso à tecnologia de qualidade.
            </p>
            <p className="border-l-4 border-purple-neon pl-4 italic text-gray-400 bg-[#161b22] p-4 rounded-r-lg my-6">
              "Trago a essência da quebrada para cada linha de código: <strong className="text-white">autenticidade, resiliência e foco no resultado</strong>."
            </p>
          </div>

          {/* Grid de Skills */}
          <div className="mt-8">
            <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
              <span className="text-purple-neon">#</span> Tech Stack
            </h3>
            
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {skills.map((skill, index) => (
                <motion.div
                  key={index}
                  variants={cardVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -5, borderColor: '#58a6ff' }}
                  className="bg-[#161b22] p-4 rounded-lg border border-gray-800 flex flex-col items-center justify-center gap-2 hover:shadow-lg hover:shadow-blue-neon/20 transition-all cursor-default"
                >
                  <skill.icon className={`text-3xl ${skill.color}`} />
                  <span className="text-sm font-mono text-gray-400">{skill.name}</span>
                </motion.div>
              ))}
            </div>
          </div>

        </motion.div>
      </div>
    </SectionWrapper>
  );
};

export default About;