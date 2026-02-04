import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaArrowLeft, FaImages, FaTimes, FaGithub, FaExternalLinkAlt, FaCheckCircle } from 'react-icons/fa';
import { projectsData } from '../data/projectsData'; // Importando os dados

const AllProjects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <div className="min-h-screen bg-[#0d1117] text-white p-8 md:p-20">
      
      {/* Botão Voltar */}
      <Link to="/" className="inline-flex items-center gap-2 text-blue-neon hover:text-white transition-colors mb-12 font-mono">
        <FaArrowLeft /> Voltar para Home
      </Link>

      <h1 className="text-4xl md:text-5xl font-bold mb-4">
        Arquivo de <span className="text-purple-neon">Projetos</span>
      </h1>
      <p className="text-gray-400 mb-16 max-w-2xl">
        Uma lista completa de tudo que já desenvolvi, desde experimentos pequenos até sistemas complexos.
      </p>

      {/* Grid Completo */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projectsData.map((project) => (
          <motion.div
            key={project.id}
            layoutId={`card-${project.id}`}
            onClick={() => setSelectedProject(project)}
            className="bg-[#161b22] rounded-xl border border-gray-800 overflow-hidden hover:border-purple-neon/50 transition-all cursor-pointer group hover:shadow-lg hover:shadow-purple-neon/10"
            whileHover={{ y: -5 }}
          >
            <div className="h-3 bg-gray-800 flex items-center px-2 gap-1">
               <div className="w-2 h-2 rounded-full bg-gray-600"></div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
              <p className="text-gray-400 text-sm mb-4 line-clamp-3">{project.shortDescription}</p>
              <div className="flex gap-2 mb-4">
                 {project.techs.slice(0, 3).map((T, i) => <T.icon key={i} className={T.color} />)}
              </div>
              <div className="text-purple-neon text-xs font-mono mt-auto flex items-center gap-2">
                 <FaImages /> Ver detalhes
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* === REUTILIZANDO O MODAL (Mesma lógica do anterior) === */}
      <AnimatePresence>
        {selectedProject && (
           <motion.div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
             <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" onClick={() => setSelectedProject(null)} />
             <motion.div layoutId={`card-${selectedProject.id}`} className="relative bg-[#0d1117] w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-xl border border-gray-700 p-8 shadow-2xl z-50 scrollbar-hide">
                <button onClick={() => setSelectedProject(null)} className="absolute top-4 right-4 p-2 bg-gray-800 rounded-full hover:bg-red-500 text-white"><FaTimes/></button>
                
                <h2 className="text-3xl font-bold mb-4">{selectedProject.title}</h2>
                <p className="text-gray-300 whitespace-pre-line mb-6">{selectedProject.fullDescription}</p>
                
                {/* Links */}
                <div className="flex gap-4 mb-8">
                   {selectedProject.github && <a href={selectedProject.github} target="_blank" className="flex items-center gap-2 text-blue-neon border border-blue-neon px-4 py-2 rounded hover:bg-blue-neon/10"><FaGithub/> GitHub</a>}
                   {selectedProject.demo && <a href={selectedProject.demo} target="_blank" className="flex items-center gap-2 text-green-400 border border-green-400 px-4 py-2 rounded hover:bg-green-400/10"><FaExternalLinkAlt/> Demo</a>}
                </div>

                {/* Galeria Simples no Modal */}
                {selectedProject.images?.length > 0 && (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {selectedProject.images.map((img, idx) => (
                      <img key={idx} src={img} className="rounded-lg border border-gray-700" alt="Print" />
                    ))}
                  </div>
                )}
             </motion.div>
           </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default AllProjects;