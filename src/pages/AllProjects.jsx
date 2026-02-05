import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaArrowLeft, FaArrowRight, FaCode } from 'react-icons/fa';
import { projectsData } from '../data/projectsData';

const AllProjects = () => {
  return (
    <div className="min-h-screen bg-[#0d1117] text-white p-8 md:p-20">
      
      <Link to="/" className="inline-flex items-center gap-2 text-blue-neon hover:text-white transition-colors mb-12 font-mono">
        <FaArrowLeft /> Voltar para Home
      </Link>

      <h1 className="text-4xl md:text-5xl font-bold mb-4">
        Arquivo de <span className="text-purple-neon">Projetos</span>
      </h1>
      <p className="text-gray-400 mb-16 max-w-2xl">
        Galeria completa de desenvolvimentos, estudos e aplicações.
      </p>

      {/* Grid Galeria */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projectsData.map((project) => (
          <Link to={`/project/${project.id}`} key={project.id}>
            <motion.div
              className="bg-[#161b22] rounded-xl border border-gray-800 overflow-hidden hover:border-purple-neon/50 transition-all cursor-pointer group hover:shadow-2xl hover:shadow-purple-neon/10 flex flex-col h-full"
              whileHover={{ y: -5 }}
            >
              <div className="h-48 relative overflow-hidden bg-gray-900">
                 {project.cover ? (
                    <img src={project.cover} alt={project.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 opacity-80 group-hover:opacity-100"/>
                 ) : (
                    <div className="w-full h-full flex items-center justify-center text-gray-700"><FaCode size={40}/></div>
                 )}
              </div>

              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-purple-neon transition-colors">{project.title}</h3>
                <p className="text-gray-400 text-sm mb-4 line-clamp-3">{project.shortDescription}</p>
                <div className="flex gap-2 mb-4">
                   {project.techs.slice(0, 3).map((T, i) => <T.icon key={i} className={T.color} />)}
                </div>
                <div className="mt-auto pt-4 border-t border-gray-800 text-blue-neon text-xs font-bold uppercase flex items-center justify-between">
                   Acessar Projeto <FaArrowRight />
                </div>
              </div>
            </motion.div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default AllProjects;