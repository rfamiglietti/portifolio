import React from 'react';
import { motion } from 'framer-motion';
import { 
  SiHtml5, SiCss3, SiJavascript, SiPython, SiCplusplus, 
  SiArduino, SiGit, SiGithub, SiTailwindcss, SiFigma, 
  SiDjango, SiNodedotjs, 
  SiReact // Removi SiN8n daqui
} from 'react-icons/si';
// Ícones seguros
import { FaDatabase, FaCode } from 'react-icons/fa'; 
import SectionWrapper from '../components/SectionWrapper';

const About = () => {
  
  const skills = [
    {
      category: "Frontend",
      techs: [
        { name: "HTML5", icon: SiHtml5, color: "text-orange-500" },
        { name: "CSS3", icon: SiCss3, color: "text-blue-500" },
        { name: "JavaScript", icon: SiJavascript, color: "text-yellow-400" },
        { name: "React", icon: SiReact, color: "text-blue-400" },
        { name: "Tailwind", icon: SiTailwindcss, color: "text-cyan-400" },
      ]
    },
    {
      category: "Backend & Dados",
      techs: [
        { name: "Python", icon: SiPython, color: "text-blue-300" },
        { name: "Django", icon: SiDjango, color: "text-green-500" },
        { name: "Node.js", icon: SiNodedotjs, color: "text-green-600" },
        { name: "SQL Server", icon: FaDatabase, color: "text-red-500" }, 
        { name: "C++", icon: SiCplusplus, color: "text-blue-600" },
      ]
    },
    {
      category: "Ferramentas & Outros",
      techs: [
        { name: "Git", icon: SiGit, color: "text-orange-600" },
        { name: "GitHub", icon: SiGithub, color: "text-white" },
        { name: "VS Code", icon: FaCode, color: "text-blue-500" },
        { name: "Figma", icon: SiFigma, color: "text-purple-400" },
        // Removi o item do N8N completamente daqui
        { name: "Arduino", icon: SiArduino, color: "text-teal-500" },
      ]
    }
  ];

  return (
    <SectionWrapper id="about" className="py-20">
      <div className="max-w-6xl mx-auto">
        
        <div className="mb-16">
          <span className="font-mono text-blue-neon text-lg tracking-wider">
            01. // SOBRE MIM
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mt-2">
            Quem é <span className="text-purple-neon">Rômulo?</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6 text-gray-300 text-lg leading-relaxed"
          >
            <p>
              Transformo ideias em software, problemas em soluções e complexidade em simplicidade. 
              Acredito que bons sistemas nascem da combinação entre <strong className="text-white">lógica, organização e empatia pelo usuário</strong>.
            </p>
            
            <p>
              Sou Técnico em Desenvolvimento de Sistemas pelo <strong className="text-blue-neon">SENAI Morvan Figueiredo</strong> e graduando em 
              <strong className="text-purple-neon"> Engenharia de Software</strong>, com foco em desenvolvimento web e aplicações full stack.
            </p>

            <p>
              Gosto de tecnologia que funciona, escala e resolve. Meu objetivo é continuar evoluindo tecnicamente enquanto entrego valor real através de código limpo e eficiente.
            </p>
          </motion.div>

          <div className="space-y-8">
            {skills.map((group, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <h3 className="text-white font-bold mb-4 border-l-4 border-blue-neon pl-3 text-lg">
                  {group.category}
                </h3>
                <div className="grid grid-cols-3 sm:grid-cols-4 gap-3">
                  {group.techs.map((tech, i) => (
                    <div 
                      key={i} 
                      className="group flex flex-col items-center justify-center p-3 bg-[#161b22] border border-gray-800 rounded-lg hover:border-purple-neon/50 transition-all hover:-translate-y-1 hover:shadow-lg hover:shadow-purple-neon/10"
                      title={tech.name}
                    >
                      <tech.icon className={`text-3xl ${tech.color} mb-2 group-hover:scale-110 transition-transform`} />
                      <span className="text-xs text-gray-400 group-hover:text-white font-mono text-center">
                        {tech.name}
                      </span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </SectionWrapper>
  );
};

export default About;