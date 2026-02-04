import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaTimes, FaImages, FaCheckCircle } from 'react-icons/fa';
import { SiDjango, SiPython, SiPostgresql, SiBootstrap, SiReact, SiTailwindcss, SiArduino } from 'react-icons/si';
import SectionWrapper from '../components/SectionWrapper';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  // === DADOS DOS PROJETOS ===
  const projects = [
    {
      id: 1,
      title: "Senai School Manager",
      shortDescription: "Sistema completo de gestão escolar com Django e Supabase.",
      fullDescription: `
        Este projeto foi desenvolvido para resolver a complexidade da gestão acadêmica no SENAI. 
        O objetivo era criar um sistema centralizado onde Secretaria, Coordenação, Professores e Alunos tivessem visões personalizadas.

        Utilizando a robustez do Django no backend e a flexibilidade do Supabase (PostgreSQL), implementei um sistema de controle de acesso (RBAC) rigoroso. 
        
        Principais Desafios Superados:
        1. Modelagem do Banco de Dados para suportar N:N relações (Turmas <-> Professores <-> Alunos).
        2. Geração dinâmica de boletins e diários de classe.
        3. Interface intuitiva para diferentes perfis de usuário.
      `,
      techs: [
        { icon: SiDjango, name: "Django", color: "text-green-600" },
        { icon: SiPython, name: "Python", color: "text-blue-500" },
        { icon: SiPostgresql, name: "Supabase", color: "text-blue-300" },
        { icon: SiBootstrap, name: "Bootstrap", color: "text-purple-500" },
      ],
      features: [
        "Painéis exclusivos para Aluno, Professor e Secretaria",
        "Lançamento de Notas e Frequência em tempo real",
        "Visualização de Boletim e Histórico Escolar",
        "Gestão Financeira básica para Secretaria"
      ],
      // SEUS PRINTS REAIS AQUI
      images: [
        "/prints/senaimenu.jpg",           // Capa
        "/prints/alunoinicio.png",         // Visão do Aluno
        "/prints/alunoboletim.png",        // Boletim
        "/prints/professoraulas.png",      // Visão do Professor
        "/prints/professordiario.png",     // Diário de Classe
        "/prints/secretariapainel.png",    // Painel ADM
        "/prints/secretariaalunos.png",    // Lista de Alunos
        "/prints/cordenacaovisao.png"      // Visão Coordenação
      ],
      github: "https://github.com/rfamiglietti/SENAI-School-Manager",
      demo: null, 
    },
    {
      id: 2,
      title: "Portfolio Pessoal",
      shortDescription: "Site responsivo criado com React, Tailwind e Framer Motion.",
      fullDescription: "Meu cartão de visitas digital. O foco foi criar uma experiência imersiva estilo 'VS Code', com performance alta, animações fluidas e modo Dark nativo.",
      techs: [
        { icon: SiReact, name: "React", color: "text-blue-400" },
        { icon: SiTailwindcss, name: "Tailwind", color: "text-teal-400" },
      ],
      features: ["Design Responsivo", "Galeria de Projetos Interativa", "Formulário AJAX"],
      images: [], 
      github: "https://github.com/rfamiglietti/portfolio",
      demo: "https://rfamiglietti.github.io/portfolio/",
    },
  ];

  return (
    <SectionWrapper id="projects">
      <div className="max-w-6xl mx-auto pb-32">
        
        {/* Cabeçalho */}
        <div className="mb-16">
          <span className="font-mono text-blue-neon text-lg tracking-wider">
            02. // MEUS PROJETOS
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mt-2">
            O que tenho <span className="text-purple-neon">Construído</span>
          </h2>
        </div>

        {/* Grid de Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <motion.div
              key={project.id}
              layoutId={`card-${project.id}`}
              onClick={() => setSelectedProject(project)}
              className="bg-[#161b22] rounded-xl border border-gray-800 overflow-hidden hover:border-blue-neon/50 transition-all cursor-pointer group hover:shadow-lg hover:shadow-blue-neon/10"
              whileHover={{ y: -5 }}
            >
              {/* Barra Superior do Card */}
              <div className="h-3 bg-gray-800 flex items-center px-2 gap-1">
                <div className="w-2 h-2 rounded-full bg-red-500/50"></div>
                <div className="w-2 h-2 rounded-full bg-yellow-500/50"></div>
                <div className="w-2 h-2 rounded-full bg-green-500/50"></div>
              </div>

              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-bold text-white group-hover:text-blue-neon transition-colors">
                    {project.title}
                  </h3>
                  <div className="flex gap-2">
                    {project.techs.map((Tech, index) => (
                      <Tech.icon key={index} className={`text-lg ${Tech.color}`} title={Tech.name} />
                    ))}
                  </div>
                </div>

                <p className="text-gray-400 text-sm mb-6 line-clamp-3">
                  {project.shortDescription}
                </p>

                <div className="flex items-center gap-2 text-blue-neon text-sm font-mono mt-auto">
                  <FaImages /> Ver detalhes e prints
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* === MODAL DE DETALHES === */}
        <AnimatePresence>
          {selectedProject && (
            <>
              {/* Fundo Escuro */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedProject(null)}
                className="fixed inset-0 bg-black/80 z-[60] backdrop-blur-sm"
              />

              {/* Janela do Modal */}
              <motion.div
                layoutId={`card-${selectedProject.id}`}
                className="fixed inset-0 md:inset-10 z-[70] m-auto max-w-5xl h-fit max-h-[90vh] bg-[#0d1117] border border-gray-700 rounded-xl overflow-y-auto scrollbar-hide shadow-2xl"
              >
                
                <button 
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 p-2 bg-gray-800 rounded-full text-white hover:bg-red-500 transition-colors z-50 sticky"
                >
                  <FaTimes />
                </button>

                <div className="p-8 md:p-12">
                  
                  {/* Título */}
                  <div className="mb-8 border-b border-gray-800 pb-6">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                      {selectedProject.title}
                    </h2>
                    <div className="flex flex-wrap gap-3">
                      {selectedProject.techs.map((Tech, idx) => (
                        <span key={idx} className="flex items-center gap-2 px-3 py-1 bg-gray-800 rounded-full text-xs text-gray-300 border border-gray-700">
                          <Tech.icon className={Tech.color} /> {Tech.name}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Conteúdo */}
                  <div className="grid md:grid-cols-3 gap-8 mb-10">
                    <div className="md:col-span-2 space-y-6">
                      <div>
                        <h3 className="text-xl font-bold text-purple-neon mb-3">Visão Geral</h3>
                        <p className="text-gray-300 leading-relaxed whitespace-pre-line text-sm md:text-base">
                          {selectedProject.fullDescription}
                        </p>
                      </div>
                      
                      {selectedProject.features && (
                        <div>
                          <h4 className="text-white font-bold mb-3 border-l-4 border-blue-neon pl-3">Funcionalidades</h4>
                          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                            {selectedProject.features.map((feat, i) => (
                              <li key={i} className="flex items-start gap-2 text-sm text-gray-400">
                                <FaCheckCircle className="mt-1 text-green-500 flex-shrink-0" />
                                {feat}
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>

                    {/* Links Laterais */}
                    <div className="flex flex-col gap-4">
                      <div className="p-4 bg-[#161b22] rounded-lg border border-gray-800">
                        <h3 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-4">Links do Projeto</h3>
                        <div className="space-y-3">
                          {selectedProject.github && (
                            <a href={selectedProject.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 p-3 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors text-white border border-gray-700 text-sm">
                              <FaGithub size={18} /> Repositório GitHub
                            </a>
                          )}
                          {selectedProject.demo && (
                            <a href={selectedProject.demo} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 p-3 bg-blue-900/20 hover:bg-blue-900/30 rounded-lg transition-colors text-blue-400 border border-blue-500/30 text-sm">
                              <FaExternalLinkAlt size={16} /> Acessar Deploy
                            </a>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Galeria */}
                  {selectedProject.images && selectedProject.images.length > 0 && (
                    <div className="border-t border-gray-800 pt-8">
                      <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                        <FaImages className="text-yellow-500" /> Galeria de Telas
                      </h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {selectedProject.images.map((img, idx) => (
                          <div key={idx} className="group relative aspect-video overflow-hidden rounded-lg border border-gray-700 bg-gray-900 shadow-xl">
                            <img 
                              src={img} 
                              alt={`Tela do sistema ${idx + 1}`} 
                              className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                              <span className="text-white text-sm font-mono bg-black/50 px-2 py-1 rounded border border-gray-600">
                                print_screen_{idx + 1}.png
                              </span>
                            </div>
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