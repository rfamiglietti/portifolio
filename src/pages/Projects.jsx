import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaImages, FaTimes, FaGithub, FaExternalLinkAlt, FaCheckCircle, FaCode } from 'react-icons/fa';
import { projectsData } from '../data/projectsData'; 
import SectionWrapper from '../components/SectionWrapper';
import NeonButton from '../components/NeonButton';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const featuredProjects = projectsData.slice(0, 3); 

  return (
    <SectionWrapper id="projects">
      <div className="max-w-6xl mx-auto pb-32">
         
         <div className="mb-16">
          <span className="font-mono text-blue-neon text-lg tracking-wider">
            02. // MEUS PROJETOS
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mt-2">
            O que tenho <span className="text-purple-neon">Construído</span>
          </h2>
         </div>

         {/* GRID NOVO: 2 Colunas para cards maiores */}
         <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-16">
            {featuredProjects.map((project) => (
              <motion.div
                key={project.id}
                layoutId={`card-${project.id}`}
                onClick={() => setSelectedProject(project)}
                className="bg-[#161b22] rounded-xl border border-gray-800 overflow-hidden hover:border-purple-neon/50 transition-all cursor-pointer group hover:shadow-2xl hover:shadow-purple-neon/10 flex flex-col h-full"
                whileHover={{ y: -5 }}
              >
                {/* === ÁREA DA CAPA (IMAGEM) === */}
                <div className="h-56 w-full overflow-hidden relative bg-gray-900 border-b border-gray-800">
                  {project.cover ? (
                    <img 
                      src={project.cover} 
                      alt={project.title} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-90 group-hover:opacity-100"
                    />
                  ) : (
                    // Fallback se não tiver capa
                    <div className="w-full h-full flex items-center justify-center text-gray-700">
                      <FaCode size={50} />
                    </div>
                  )}
                  
                  {/* Overlay Gradiente */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#161b22] to-transparent opacity-60"></div>
                </div>

                {/* === CONTEÚDO DO CARD === */}
                <div className="p-8 flex flex-col flex-grow">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-2xl font-bold text-white group-hover:text-purple-neon transition-colors">
                      {project.title}
                    </h3>
                    <div className="flex gap-2">
                      {project.techs.slice(0, 3).map((Tech, index) => (
                        <div key={index} className="p-2 bg-gray-800 rounded-lg border border-gray-700" title={Tech.name}>
                          <Tech.icon className={`text-lg ${Tech.color}`} />
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Descrição mais longa permitida aqui */}
                  <p className="text-gray-400 text-base mb-6 line-clamp-4 leading-relaxed">
                    {project.shortDescription}
                  </p>

                  <div className="mt-auto pt-6 border-t border-gray-800 flex items-center gap-2 text-blue-neon font-mono text-sm font-bold">
                    <FaImages /> Ver detalhes e galeria &rarr;
                  </div>
                </div>
              </motion.div>
            ))}
         </div>

         <div className="flex justify-center">
            <Link to="/all-projects">
              <NeonButton>
                 Ver Arquivo Completo de Projetos &rarr;
              </NeonButton>
            </Link>
         </div>

         {/* MODAL (Mantido igual) */}
         <AnimatePresence>
          {selectedProject && (
            <>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedProject(null)}
                className="fixed inset-0 bg-black/90 z-[60] backdrop-blur-md"
              />

              <motion.div
                layoutId={`card-${selectedProject.id}`}
                className="fixed inset-0 md:inset-10 z-[70] m-auto max-w-6xl h-fit max-h-[90vh] bg-[#0d1117] border border-gray-700 rounded-xl overflow-y-auto scrollbar-hide shadow-2xl"
              >
                <button 
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-6 right-6 p-2 bg-gray-800 rounded-full text-white hover:bg-red-500 transition-colors z-50 sticky"
                >
                  <FaTimes size={20} />
                </button>

                <div className="p-8 md:p-12">
                  <div className="mb-8 border-b border-gray-800 pb-8">
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                      {selectedProject.title}
                    </h2>
                    <div className="flex flex-wrap gap-3">
                      {selectedProject.techs.map((Tech, idx) => (
                        <span key={idx} className="flex items-center gap-2 px-4 py-2 bg-gray-800 rounded-lg text-sm text-gray-300 border border-gray-700">
                          <Tech.icon className={Tech.color} size={18} /> {Tech.name}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="grid md:grid-cols-3 gap-12 mb-12">
                    <div className="md:col-span-2 space-y-8">
                      <div>
                        <h3 className="text-xl font-bold text-purple-neon mb-4">Sobre o Projeto</h3>
                        <p className="text-gray-300 leading-loose text-lg whitespace-pre-line">
                          {selectedProject.fullDescription}
                        </p>
                      </div>
                      
                      {selectedProject.features && (
                        <div>
                          <h4 className="text-white font-bold mb-4 border-l-4 border-blue-neon pl-4 text-lg">Funcionalidades Principais</h4>
                          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                            {selectedProject.features.map((feat, i) => (
                              <li key={i} className="flex items-start gap-3 text-gray-400">
                                <FaCheckCircle className="mt-1 text-green-500 flex-shrink-0" />
                                {feat}
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>

                    <div className="flex flex-col gap-6">
                      <div className="p-6 bg-[#161b22] rounded-xl border border-gray-800 shadow-lg">
                        <h3 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-6">Links de Acesso</h3>
                        <div className="space-y-4">
                          {selectedProject.github && (
                            <a href={selectedProject.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 p-4 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors text-white border border-gray-700 font-medium">
                              <FaGithub size={20} /> Repositório GitHub
                            </a>
                          )}
                          {selectedProject.demo && (
                            <a href={selectedProject.demo} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 p-4 bg-blue-900/20 hover:bg-blue-900/30 rounded-lg transition-colors text-blue-400 border border-blue-500/30 font-medium">
                              <FaExternalLinkAlt size={18} /> Acessar Deploy
                            </a>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>

                  {selectedProject.images && selectedProject.images.length > 0 && (
                    <div className="border-t border-gray-800 pt-10">
                      <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
                        <FaImages className="text-yellow-500" /> Galeria de Telas
                      </h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {selectedProject.images.map((img, idx) => (
                          <div key={idx} className="group relative aspect-video overflow-hidden rounded-xl border border-gray-700 bg-gray-900 shadow-2xl">
                            <img 
                              src={img} 
                              alt={`Print ${idx + 1}`} 
                              className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                            />
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </div>
    </SectionWrapper>
  );
};

export default Projects;