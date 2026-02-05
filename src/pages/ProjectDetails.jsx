import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaArrowLeft, FaTimes, FaCheckCircle, FaImages } from 'react-icons/fa';
import { projectsData } from '../data/projectsData';

const ProjectDetails = () => {
  const { id } = useParams();
  const [project, setProject] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    const found = projectsData.find((p) => p.id === parseInt(id));
    setProject(found);
    window.scrollTo(0, 0);
  }, [id]);

  if (!project) return <div className="text-white text-center p-20">Carregando projeto...</div>;

  // Classe utilitária para os botões Keycap
  const keycapBtnClass = `
    flex items-center justify-center gap-2 p-3 rounded-xl font-bold text-sm transition-all duration-100
    border border-b-[5px] active:border-b-[2px] active:translate-y-[3px]
  `;

  return (
    <div className="min-h-screen bg-[#0d1117] text-white w-full">
      
      <div className="flex flex-col lg:flex-row w-full min-h-screen">
        
        {/* SIDEBAR */}
        <div className="lg:w-[400px] xl:w-[450px] flex-shrink-0 p-8 lg:p-10 lg:h-screen lg:sticky lg:top-0 bg-[#161b22] border-r border-gray-800 flex flex-col overflow-y-auto scrollbar-hide z-20 shadow-2xl">
          
          <Link to="/" className="inline-flex items-center gap-2 text-gray-400 hover:text-blue-neon mb-8 transition-colors text-sm font-mono group">
            <FaArrowLeft className="group-hover:-translate-x-1 transition-transform"/> Voltar para Home
          </Link>

          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>
            <h1 className="text-3xl md:text-4xl font-bold mb-6 text-white leading-tight">{project.title}</h1>

            <div className="flex flex-wrap gap-2 mb-8">
              {project.techs.map((Tech, idx) => (
                <span key={idx} className="px-3 py-1 bg-[#0d1117] rounded-md text-xs text-blue-300 border border-gray-700 flex items-center gap-2 font-mono">
                   <Tech.icon /> {Tech.name}
                </span>
              ))}
            </div>

            <div className="space-y-6 text-gray-300 leading-relaxed text-sm mb-8">
               <p className="whitespace-pre-line">{project.fullDescription}</p>
            </div>

            {project.features && (
              <div className="mb-8 p-4 bg-[#0d1117]/50 rounded-lg border border-gray-800">
                <h3 className="text-blue-neon font-bold mb-3 uppercase text-xs tracking-wider">Funcionalidades</h3>
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

            {/* === BOTÕES KEYCAP DA SIDEBAR === */}
            <div className="mt-auto pt-6 border-t border-gray-700 flex flex-col gap-4">
               {project.github && (
                 <a href={project.github} target="_blank" rel="noopener noreferrer" 
                    className={`${keycapBtnClass} bg-[#21262d] text-white border-[#30363d] border-b-black hover:bg-[#30363d]`}>
                   <FaGithub size={18} /> Ver Código Fonte
                 </a>
               )}
               {project.demo && (
                 <a href={project.demo} target="_blank" rel="noopener noreferrer" 
                    className={`${keycapBtnClass} bg-blue-600 text-white border-blue-500 border-b-blue-900 hover:bg-blue-500`}>
                   <FaExternalLinkAlt size={16} /> Acessar Projeto Online
                 </a>
               )}
            </div>
          </motion.div>
        </div>

        {/* GALERIA */}
        <div className="flex-1 bg-[#0d1117] w-full">
           <div className="p-4 md:p-12 max-w-6xl mx-auto">
              <h2 className="text-2xl font-bold mb-8 flex items-center gap-3 text-white">
                 <span className="w-1 h-8 bg-purple-neon rounded-full shadow-[0_0_10px_#bc8cff]"></span> 
                 Galeria de Telas
              </h2>
              
              <div className="grid grid-cols-1 gap-12">
                 {project.images && project.images.map((img, idx) => (
                   <motion.div 
                     key={idx}
                     initial={{ opacity: 0, y: 30 }}
                     whileInView={{ opacity: 1, y: 0 }}
                     transition={{ duration: 0.5, delay: 0.1 }}
                     viewport={{ once: true, margin: "-50px" }}
                     className="group relative rounded-xl overflow-hidden border border-gray-800 shadow-2xl bg-[#161b22] cursor-zoom-in"
                     onClick={() => setSelectedImage(img)}
                   >
                      <div className="h-8 bg-[#161b22] border-b border-gray-800 flex items-center px-4 gap-2">
                        <div className="w-3 h-3 rounded-full bg-red-500/20"></div>
                        <div className="w-3 h-3 rounded-full bg-yellow-500/20"></div>
                        <div className="w-3 h-3 rounded-full bg-green-500/20"></div>
                        <span className="ml-auto text-xs text-gray-600 font-mono">screenshot_{idx + 1}.png</span>
                      </div>
                      <img src={img} alt={`Tela ${idx}`} className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-[1.01]" />
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors flex items-center justify-center pointer-events-none">
                         <span className="opacity-0 group-hover:opacity-100 bg-black/80 text-white px-6 py-2 rounded-full text-sm backdrop-blur-md border border-gray-600 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                            Ampliar Imagem
                         </span>
                      </div>
                   </motion.div>
                 ))}
                 {(!project.images || project.images.length === 0) && (
                    <div className="h-64 flex flex-col items-center justify-center border border-dashed border-gray-800 rounded-xl text-gray-600 bg-[#161b22]/50">
                       <FaImages size={30} className="mb-4 opacity-50"/> <p>Galeria indisponível.</p>
                    </div>
                 )}
              </div>
           </div>
        </div>

      </div>

      <AnimatePresence>
        {selectedImage && (
          <motion.div 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-md flex items-center justify-center p-4 md:p-10 cursor-zoom-out"
          >
            <button className="absolute top-6 right-6 text-gray-400 hover:text-white transition-colors p-2 bg-gray-800 rounded-full">
              <FaTimes size={24} />
            </button>
            <motion.img 
              src={selectedImage} alt="Zoom" 
              className="max-w-full max-h-full rounded shadow-2xl border border-gray-800"
              initial={{ scale: 0.9 }} animate={{ scale: 1 }}
              onClick={(e) => e.stopPropagation()} 
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ProjectDetails;