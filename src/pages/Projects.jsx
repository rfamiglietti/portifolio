import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaPython, FaReact } from 'react-icons/fa';
import { SiDjango, SiArduino, SiPostgresql, SiTailwindcss, SiVite } from 'react-icons/si';
import SectionWrapper from '../components/SectionWrapper';

const Projects = () => {
  // Dados dos Projetos (Fácil de editar depois)
  const projects = [
    {
      id: 1,
      title: "SENAI School Manager",
      category: "Back-end & Sistema",
      description: "Sistema completo de gestão escolar desenvolvido com Django. Gerencia alunos, turmas, notas e gera relatórios automáticos em PDF. Foco em modelagem de dados relacional e arquitetura robusta.",
      techs: [
        { name: "Django", icon: SiDjango, color: "text-green-600" },
        { name: "Python", icon: FaPython, color: "text-blue-500" },
        { name: "PostgreSQL", icon: SiPostgresql, color: "text-blue-300" }
      ],
      github: "https://github.com/rfamiglietti", // Coloque o link real depois
      demo: null, // Back-end geralmente não tem demo visual fácil, ok deixar null
      image: "project-school.jpg", // Nome do arquivo na pasta public
      featured: true
    },
    {
      id: 2,
      title: "Smart Parking IoT",
      category: "Hardware & Automação",
      description: "Solução de estacionamento inteligente. Utiliza sensores ultrassônicos e Arduino para monitorar vagas em tempo real, controlando cancelas via servomotores e exibindo status em display LCD.",
      techs: [
        { name: "Arduino", icon: SiArduino, color: "text-teal-600" },
        { name: "C++", icon: null, color: "text-blue-400" }, 
        { name: "Sensores", icon: null, color: "text-yellow-400" }
      ],
      github: "https://github.com/rfamiglietti",
      demo: null,
      image: "project-arduino.jpg",
      featured: true
    },
    {
      id: 3,
      title: "Portfólio Dev Interativo",
      category: "Front-end & UX",
      description: "Uma aplicação SPA (Single Page Application) moderna para apresentar projetos. Focada em performance, animações fluidas com Framer Motion e design responsivo estilo 'Dark Mode'.",
      techs: [
        { name: "React", icon: FaReact, color: "text-blue-400" },
        { name: "Tailwind", icon: SiTailwindcss, color: "text-teal-400" },
        { name: "Vite", icon: SiVite, color: "text-purple-500" }
      ],
      github: "https://github.com/rfamiglietti/portfolio",
      demo: "https://rfamiglietti.github.io/portfolio/",
      image: "project-portfolio.jpg",
      featured: false
    }
  ];

  return (
    <SectionWrapper id="projects">
      <div className="max-w-6xl mx-auto w-full pb-20">
        
        {/* Cabeçalho */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <span className="font-mono text-blue-neon text-lg tracking-wider">02. // O QUE JÁ CONSTRUÍ</span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mt-2">
            Meus <span className="text-purple-neon">Projetos</span>
          </h2>
        </motion.div>

        {/* Grid de Projetos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group bg-[#161b22] rounded-xl border border-gray-800 overflow-hidden hover:border-blue-neon/50 hover:shadow-lg hover:shadow-blue-neon/10 transition-all duration-300 flex flex-col h-full"
            >
              
              {/* Área da Imagem (Janela do Sistema) */}
              <div className="h-48 overflow-hidden relative bg-gray-900 border-b border-gray-800 group">
                {/* Overlay colorido no hover */}
                <div className="absolute inset-0 bg-blue-900/20 group-hover:bg-transparent transition-colors z-10"></div>
                
                {/* Se a imagem não existir, mostra um gradiente estiloso */}
                <div className="w-full h-full bg-gradient-to-br from-gray-800 to-black flex items-center justify-center text-gray-700 font-mono text-xs">
                  {/* Aqui viria a tag <img src={project.image} ... /> se você tiver prints */}
                  <span className="text-gray-500">Preview: {project.title}</span> 
                </div>
              </div>

              {/* Conteúdo do Card */}
              <div className="p-6 flex flex-col flex-grow">
                
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <span className="text-xs font-mono text-blue-neon mb-1 block">{project.category}</span>
                    <h3 className="text-xl font-bold text-white group-hover:text-purple-neon transition-colors">
                      {project.title}
                    </h3>
                  </div>
                  
                  {/* Links (GitHub / Demo) */}
                  <div className="flex gap-3">
                    {project.github && (
                      <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors" title="Ver Código">
                        <FaGithub size={20} />
                      </a>
                    )}
                    {project.demo && (
                      <a href={project.demo} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-neon transition-colors" title="Ver Demo Online">
                        <FaExternalLinkAlt size={18} />
                      </a>
                    )}
                  </div>
                </div>

                <p className="text-gray-400 text-sm mb-6 flex-grow leading-relaxed">
                  {project.description}
                </p>

                {/* Tecnologias */}
                <div className="flex flex-wrap gap-3 mt-auto pt-4 border-t border-gray-800/50">
                  {project.techs.map((tech, i) => (
                    <div key={i} className="flex items-center gap-1.5 text-xs text-gray-300 bg-gray-800/50 px-2 py-1 rounded border border-gray-700">
                      {tech.icon && <tech.icon className={`${tech.color}`} />}
                      <span>{tech.name}</span>
                    </div>
                  ))}
                </div>

              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </SectionWrapper>
  );
};

export default Projects;