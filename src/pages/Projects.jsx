import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SectionWrapper from '../components/SectionWrapper';
import NeonButton from '../components/NeonButton';
import { FiExternalLink, FiGithub, FiX } from 'react-icons/fi';

const projects = [
  // ... (dados dos projetos permanecem os mesmos)
  {
    name: 'Urna Eletrônica (Python)',
    description: 'Simulador de urna eletrônica desenvolvido com Python e interface gráfica (Tkinter). Demonstra lógica de votação e segurança básica.',
    tags: [{ name: 'Python', color: 'text-blue-500' }, { name: 'Tkinter', color: 'text-green-500' }, { name: 'GUI', color: 'text-yellow-500' }],
    image: '/project-urna.jpg', 
    liveLink: '#',
    githubLink: '#',
  },
  {
    name: 'Dream Match (App com IA)',
    description: 'Aplicativo de encontros utilizando inteligência artificial para combinar perfis com base em interesses e padrões de comportamento.',
    tags: [{ name: 'React Native', color: 'text-cyan-400' }, { name: 'Python/Flask', color: 'text-white' }, { name: 'Machine Learning', color: 'text-purple-neon' }],
    image: '/project-ia.jpg', 
    liveLink: '#',
    githubLink: '#',
  },
  {
    name: 'Site Tático (HTML/CSS)',
    description: 'Landing page responsiva para serviço de consultoria com design moderno, animações CSS e foco em performance.',
    tags: [{ name: 'HTML5', color: 'text-orange-500' }, { name: 'CSS3', color: 'text-blue-500' }, { name: 'Responsivo', color: 'text-teal-400' }],
    image: '/project-tatico.jpg',
    liveLink: '#',
    githubLink: '#',
  },
  {
    name: 'Portfólio de Fotografia',
    description: 'Galeria de fotos minimalista e elegante, construída para carregamento rápido e navegação intuitiva em dispositivos móveis.',
    tags: [{ name: 'React', color: 'text-cyan-400' }, { name: 'Tailwind CSS', color: 'text-teal-400' }, { name: 'Framer Motion', color: 'text-pink-500' }],
    image: '/project-foto.jpg',
    liveLink: '#',
    githubLink: '#',
  },
];

// MANTEMOS ProjectCard como motion.div para o efeito HOVER
const ProjectCard = ({ project, onClick }) => (
  <motion.div
    // 🚨 AJUSTE DE TEMA (Card Background): Fundo branco no Light, Fundo escuro no Dark
    className="bg-white dark:bg-dark-secondary rounded-xl overflow-hidden shadow-xl cursor-pointer border border-transparent hover:border-blue-neon/50 transition-all duration-300 hover:shadow-neon-blue/50 dark:hover:shadow-neon-blue/50"
    whileHover={{ scale: 1.03 }} // Mantém o efeito hover com Framer Motion
    initial={{ opacity: 1, y: 0 }} // Desativa a animação de entrada (para renderizar imediatamente)
    onClick={() => onClick(project)}
    transition={{ duration: 0.4 }}
  >
    <img src={project.image || '/project-placeholder.jpg'} alt={project.name} className="w-full h-48 object-cover" /> 
    <div className="p-6">
      <h3 className="text-xl font-bold mb-2 text-blue-neon">{project.name}</h3>
      {/* 🚨 AJUSTE DE TEMA (Descrição): Texto escuro no Light, Texto cinza no Dark */}
      <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">{project.description}</p>
      <div className="flex flex-wrap gap-2">
        {project.tags.map((tag, index) => (
          <span key={index} className={`text-xs font-semibold ${tag.color}`}>
            #{tag.name}
          </span>
        ))}
      </div>
      <p className="text-purple-neon mt-4 font-semibold hover:underline">Ver Detalhes →</p>
    </div>
  </motion.div>
);

// ... (definição do ProjectModal permanece a mesma)

const ProjectModal = ({ project, onClose }) => (
  <motion.div
    // 🚨 AJUSTE DE TEMA AQUI: Fundo semi-transparente do modal
    className="fixed inset-0 bg-gray-200/90 dark:bg-dark-primary/95 backdrop-blur-md z-[60] flex items-center justify-center p-4"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
  >
    <motion.div
      // 🚨 AJUSTE DE TEMA AQUI: Fundo do Modal
      className="bg-white dark:bg-dark-secondary p-8 rounded-xl max-w-3xl w-full max-h-[90vh] overflow-y-auto border border-blue-neon/50 shadow-neon-blue/70 relative"
      initial={{ scale: 0.8 }}
      animate={{ scale: 1 }}
      exit={{ scale: 0.8 }}
      transition={{ type: 'spring', stiffness: 100 }}
    >
      <button
        onClick={onClose}
        className="absolute top-4 right-4 text-3xl text-purple-neon hover:text-blue-neon transition-colors"
      >
        <FiX />
      </button>

      <img src={project.image || '/project-placeholder.jpg'} alt={project.name} className="w-full h-auto rounded-lg mb-6" />

      <h3 className="text-3xl font-bold mb-4 text-blue-neon font-display">{project.name}</h3>
      {/* 🚨 AJUSTE DE TEMA AQUI: Texto escuro no Light, Texto cinza no Dark */}
      <p className="text-gray-700 dark:text-gray-300 mb-6 text-lg">{project.description}</p>

      <h4 className="text-xl font-semibold mb-3 text-purple-neon">Tecnologias Utilizadas:</h4>
      <div className="flex flex-wrap gap-3 mb-8">
        {project.tags.map((tag, index) => (
          <span 
            key={index} 
            // 🚨 AJUSTE DE TEMA AQUI: Fundo de tag (Dark Primary)
            className={`px-3 py-1 rounded-full text-sm font-medium border border-purple-neon/50 ${tag.color} bg-gray-200 dark:bg-dark-primary`}
          >
            {tag.name}
          </span>
        ))}
      </div>

      <div className="flex space-x-4">
        <a href={project.liveLink} target="_blank" rel="noopener noreferrer">
          <NeonButton primary={true} className="flex items-center space-x-2">
            <FiExternalLink /> <span>Ver Projeto Online</span>
          </NeonButton>
        </a>
        <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
          <NeonButton primary={false} className="flex items-center space-x-2">
            <FiGithub /> <span>Código Fonte</span>
          </NeonButton>
        </a>
      </div>
    </motion.div>
  </motion.div>
);

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <SectionWrapper id="projects" title="Projetos" subtitle="O Código em Ação">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          // 🚨 MUDANÇA: Substituímos o motion.div com animações complexas por um div simples.
          // O ProjectCard (que é um motion.div) já tem o efeito hover.
          // Comentamos a motion.div e usamos uma div simples para testar:
          // <motion.div
          //   key={index}
          //   initial={{ opacity: 0, scale: 0.9 }}
          //   animate={{ opacity: 1, scale: 1 }}
          //   transition={{ duration: 0.5, delay: index * 0.1 }}
          // >
          <div key={index}> 
            <ProjectCard project={project} onClick={setSelectedProject} />
          </div>
          // </motion.div>
        ))}
      </div>

      <div className="text-center mt-12">
        <NeonButton primary={false}>Ver Todos os Projetos</NeonButton>
      </div>

      <AnimatePresence>
        {selectedProject && (
          <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
        )}
      </AnimatePresence>
    </SectionWrapper>
  );
};

export default Projects;