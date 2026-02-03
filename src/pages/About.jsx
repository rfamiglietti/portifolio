import React from 'react';
import { motion } from 'framer-motion';
import { FaHtml5, FaJs, FaReact, FaPython, FaGitAlt } from 'react-icons/fa';
import { SiTailwindcss, SiDjango, SiPostgresql, SiArduino } from 'react-icons/si';
import SectionWrapper from '../components/SectionWrapper';

const About = () => {
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const skills = [
    { name: 'React', icon: FaReact, color: 'text-blue-400' },
    { name: 'JavaScript', icon: FaJs, color: 'text-yellow-400' },
    { name: 'Tailwind', icon: SiTailwindcss, color: 'text-teal-400' },
    { name: 'Python', icon: FaPython, color: 'text-blue-500' },
    { name: 'Django', icon: SiDjango, color: 'text-green-600' },
    { name: 'PostgreSQL', icon: SiPostgresql, color: 'text-blue-300' },
    { name: 'Git/GitHub', icon: FaGitAlt, color: 'text-red-500' },
    { name: 'Arduino', icon: SiArduino, color: 'text-teal-600' },
  ];

  return (
    <SectionWrapper id="about">
      <div className="flex flex-col lg:flex-row gap-16 items-center max-w-6xl mx-auto pb-32">
        
        {/* === FOTO === */}
        <motion.div
          className="lg:w-1/3 flex-shrink-0 relative group"
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="absolute inset-0 bg-gradient-to-tr from-blue-neon to-purple-neon rounded-xl blur-lg opacity-40 group-hover:opacity-60 transition-opacity duration-500"></div>
          
          <div className="relative p-2 bg-[#161b22] border border-gray-700 rounded-xl">
            <img
              src="romulodev.jpg" 
              alt="Rômulo Dev"
              className="w-full h-auto rounded-lg grayscale group-hover:grayscale-0 transition-all duration-500"
            />
            <div className="absolute bottom-4 left-4 right-4 bg-black/80 backdrop-blur-sm p-2 rounded border border-gray-700">
               <div className="text-xs text-gray-400 font-mono flex items-center gap-2">
                 <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                 Dev.js
               </div>
            </div>
          </div>
        </motion.div>

        {/* === TEXTO E SKILLS === */}
        <motion.div
          className="lg:w-2/3"
          initial={{ x: 50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="mb-6 font-mono text-blue-neon text-sm tracking-widest">
            01. // QUEM SOU EU
          </div>
          
          {/* VOLTAMOS PARA TEXT-WHITE FIXO */}
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Código com <span className="text-purple-neon">Propósito</span>
          </h2>

          <div className="space-y-4 text-gray-300 text-lg leading-relaxed">
            <p>
              Transformo ideias em software, desafios em soluções e complexidade em clareza. Vejo o código não apenas como instrução para máquinas, mas como uma ponte entre problemas reais e experiências digitais bem construídas.
            </p>
            <p>
              Sou <strong className="text-white">Técnico em Desenvolvimento de Sistemas</strong> pelo SENAI Morvan Figueiredo e graduando em <strong className="text-white">Engenharia de Software</strong>, sempre em busca de evoluir tecnicamente e criar soluções que façam sentido — para quem usa e para quem constrói.
            </p>
            <p>
              Gosto de tecnologia que funciona, escala e resolve. <span className="text-gray-500 line-through decoration-purple-neon">O resto é ruído.</span>
            </p>

            <div className="border-l-4 border-purple-neon pl-4 italic text-white bg-[#161b22] p-4 rounded-r-lg my-6 font-medium shadow-lg shadow-purple-neon/5">
              "Construir bem hoje para sustentar o amanhã."
            </div>
          </div>

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