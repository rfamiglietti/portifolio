import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaArrowLeft, FaTimes, FaCheckCircle } from 'react-icons/fa';
import { projectsData } from '../data/projectsData';

const ProjectDetails = () => {
  const { id } = useParams();
  const [project, setProject] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    // Busca o projeto pelo ID na URL
    const found = projectsData.find((p) => p.id === parseInt(id));
    setProject(found);
    window.scrollTo(0, 0); // Rola para o topo ao abrir
  }, [id]);

  if (!project) return <div className="text-white text-center p-20">Carregando projeto...</div>;

  return (
    <div className="min-h-screen bg-[#0d1117] text-white">
      
      {/* === LAYOUT PRINCIPAL (Sidebar + Galeria) === */}
      <div className="flex flex-col lg:flex-row min-h-screen">
        
        {/* === 1. SIDEBAR (Informações Fixas à Esquerda) === */}
        <div className="lg:w-1/3 p-8 lg:p-12 lg:h-screen lg:sticky lg:top-0 bg-[#161b22] border-r border-gray-800 flex flex-col overflow-y-auto scrollbar-hide">
          
          <Link to="/" className="inline-flex items-center gap-2 text-gray-400 hover:text-blue-neon mb-8 transition-colors text-sm font-mono">
            <FaArrowLeft /> Voltar para Home
          </Link>

          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">
              {project.title}
            </h1>

            <div className="flex flex-wrap gap-2 mb-8">
              {project.techs.map((Tech, idx) => (
                <span key={idx} className="px-3 py-1 bg-gray-800 rounded-full text-xs text-blue-300 border border-gray-700 flex items-center gap-2">
                   <Tech.icon /> {Tech.name}
                </span>
              ))}
            </div>

            <div className="space-y-6 text-gray-300 leading-relaxed text-sm md:text-base mb-8">
               <p className="whitespace-pre-line">{project.fullDescription}</p>
            </div>

            {/* Lista de Features */}
            {project.features && (
              <div className="mb-8">
                <h3 className="text-white font-bold mb-3 uppercase text-xs tracking-wider opacity-70">Principais Funcionalidades</h3>
                <ul className="space-y-2">
                  {project.features.map((feat, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-gray-400">
                      <FaCheckCircle className="mt-1 text-purple-neon flex-shrink-0" />
                      {feat}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Botões de Ação (Fim da Sidebar) */}
            <div className="mt-auto pt-6 border-t border-gray-700 flex flex-col gap-3">
               {project.github && (
                 <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 p-3 bg-gray-800 hover:bg-white hover:text-black rounded-lg transition-all border border-gray-600 font-bold">
                   <FaGithub size={20} /> Ver Código
                 </a>
               )}
               {project.demo && (
                 <a href={project.demo} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 p-3 bg-blue-600/20 hover:bg-blue-600 text-blue-400 hover:text-white rounded-lg transition-all border border-blue-500/50 font-bold">
                   <FaExternalLinkAlt size={18} /> Acessar Projeto
                 </a>
               )}
            </div>
          </motion.div>
        </div>

        {/* === 2. GALERIA (Direita com Scroll) === */}
        <div className="lg:w-2/3 p-4 md:p-12 bg-[#0d1117]">
           <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl font-bold mb-8 flex items-center gap-2">
                 <span className="w-2 h-8 bg-purple-neon rounded-full"></span> 
                 Galeria do Projeto
              </h2>
              
              <div className="grid grid-cols-1 gap-8">
                 {project.images && project.images.map((img, idx) => (
                   <motion.div 
                     key={idx}
                     initial={{ opacity: 0, y: 50 }}
                     whileInView={{ opacity: 1, y: 0 }}
                     transition={{ duration: 0.5, delay: idx * 0.1 }}
                     viewport={{ once: true }}
                     className="group relative rounded-xl overflow-hidden border border-gray-800 shadow-2xl bg-[#161b22] cursor-zoom-in"
                     onClick={() => setSelectedImage(img)}
                   >
                      <img 
                        src={img} 
                        alt={`Tela ${idx}`} 
                        className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-[1.02]" 
                      />
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                         <span className="opacity-0 group-hover:opacity-100 bg-black/70 px-4 py-2 rounded-full text-white text-sm backdrop-blur-sm transition-opacity transform translate-y-4 group-hover:translate-y-0">
                            Clique para expandir
                         </span>
                      </div>
                   </motion.div>
                 ))}

                 {(!project.images || project.images.length === 0) && (
                    <div className="h-64 flex items-center justify-center border border-dashed border-gray-700 rounded-xl text-gray-500">
                       Sem imagens disponíveis na galeria.
                    </div>
                 )}
              </div>
           </div>
        </div>

      </div>

      {/* === LIGHTBOX (Modal de Imagem Expandida) === */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-[999] bg-black/95 backdrop-blur-xl flex items-center justify-center p-4 cursor-zoom-out"
          >
            <button className="absolute top-6 right-6 text-white text-4xl hover:text-red-500 transition-colors">
              <FaTimes />
            </button>
            <motion.img 
              src={selectedImage} 
              alt="Zoom" 
              className="max-w-full max-h-[90vh] rounded-lg shadow-2xl border border-gray-800"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
            />
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
};

export default ProjectDetails;