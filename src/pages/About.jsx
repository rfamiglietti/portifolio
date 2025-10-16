import React from 'react';
import { motion } from 'framer-motion';
import SectionWrapper from '../components/SectionWrapper';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaPython } from 'react-icons/fa';
import { SiTailwindcss, SiFramer } from 'react-icons/si';

const skills = [
  { name: 'HTML/CSS', icon: FaHtml5, color: 'text-orange-500' },
  { name: 'JavaScript', icon: FaJs, color: 'text-yellow-400' },
  { name: 'React', icon: FaReact, color: 'text-cyan-400' },
  { name: 'Python', icon: FaPython, color: 'text-blue-600' },
  { name: 'Tailwind CSS', icon: SiTailwindcss, color: 'text-teal-400' },
  { name: 'Framer Motion', icon: SiFramer, color: 'text-pink-500' },
];

const SkillCard = ({ name, Icon, color }) => (
  <motion.div
    className="bg-dark-secondary p-4 rounded-lg text-center cursor-pointer border border-transparent hover:border-blue-neon/50 shadow-lg transition-all duration-300 hover:shadow-neon-blue/50"
    whileHover={{ scale: 1.05 }}
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.4 }}
  >
    <Icon className={`text-4xl mx-auto mb-2 ${color}`} />
    <p className="text-sm font-semibold text-gray-200">{name}</p>
  </motion.div>
);

const About = () => {
  return (
    <SectionWrapper id="about" title="Sobre Mim" subtitle="Trajetória, Paixão e Propósito">
      <div className="flex flex-col lg:flex-row gap-12 items-center">
        {/* Imagem Estilizada (Use uma imagem em public/) */}
        <motion.div
          className="lg:w-1/3 flex-shrink-0"
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <div className="p-4 border-2 border-purple-neon rounded-xl shadow-neon-purple/50 bg-dark-secondary">
            <img
              src="perfil.jpeg" 
              alt="Romulo"
              className="w-full h-auto rounded-lg"
            />
          </div>
        </motion.div>

        {/* Texto e Habilidades */}
        <motion.div
          className="lg:w-2/3"
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <p className="text-lg text-gray-300 mb-6 leading-relaxed">
            Sou um entusiasta da tecnologia nascido e criado na periferia, transformando desafios em oportunidades através do código. Atualmente cursando Engenharia de Software e formado como Técnico em Desenvolvimento de Sistemas, meu objetivo é democratizar o acesso à tecnologia de qualidade e mostrar o talento que emerge da comunidade.
          </p>
          <p className="text-lg text-gray-300 mb-8 leading-relaxed">
            Acredito que a inovação tecnológica deve ser acessível a todos, e é por isso que trago a essência **da quebrada** para cada linha de código que escrevo: **autenticidade, resiliência e foco no resultado**.
          </p>

          <h3 className="text-2xl font-bold mb-6 text-purple-neon">Minhas Habilidades</h3>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {skills.map((skill, index) => (
              <SkillCard key={index} name={skill.name} Icon={skill.icon} color={skill.color} />
            ))}
          </div>
        </motion.div>
      </div>
    </SectionWrapper>
  );
};

export default About;