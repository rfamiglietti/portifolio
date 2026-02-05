import React from 'react';
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';
import { projectsData } from '../data/projectsData';
import SectionWrapper from '../components/SectionWrapper';
import NeonButton from '../components/NeonButton';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const Projects = () => {
  const sliderProjects = projectsData.slice(0, 5); 

  return (
    <SectionWrapper id="projects">
      <div className="max-w-7xl mx-auto pb-20 relative w-full">
         
         <div className="mb-12">
          <span className="font-mono text-blue-neon text-lg tracking-wider">
            02. // MEUS PROJETOS
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mt-2">
            O que tenho <span className="text-purple-neon">Construído</span>
          </h2>
         </div>

         {/* === CARROSSEL SWIPER === */}
         <div className="mb-16 select-none relative w-full px-8 md:px-12">
           <Swiper
             modules={[Navigation, Pagination, Autoplay]}
             spaceBetween={30}
             slidesPerView={1}
             navigation={{ clickable: true }}
             pagination={{ clickable: true, dynamicBullets: true }}
             autoplay={{ delay: 6000, disableOnInteraction: false }}
             loop={true}
             breakpoints={{
               0: { slidesPerView: 1, spaceBetween: 20 },
               768: { slidesPerView: 2, spaceBetween: 30 },
               1024: { slidesPerView: 2.2, spaceBetween: 40 },
             }}
             className="pb-16 pt-4"
           >
             {sliderProjects.map((project) => (
               <SwiperSlide key={project.id} className="h-auto">
                 <div className="bg-[#161b22] rounded-xl overflow-hidden border border-gray-800 h-[500px] flex flex-col hover:border-blue-neon/50 transition-all duration-300 group shadow-lg hover:shadow-blue-neon/10">
                    
                    {/* Capa */}
                    <div className="h-56 relative overflow-hidden bg-gray-900 border-b border-gray-800 shrink-0">
                      {project.cover ? (
                        <img 
                          src={project.cover} 
                          alt={project.title} 
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-90 group-hover:opacity-100"
                        />
                      ) : (
                        <div className="w-full h-full bg-gray-800 flex items-center justify-center text-gray-600">No Image</div>
                      )}
                      <div className="absolute inset-0 bg-gradient-to-t from-[#161b22] to-transparent opacity-80"></div>
                    </div>

                    {/* Conteúdo */}
                    <div className="p-6 flex flex-col flex-grow relative">
                       <h3 className="text-2xl font-bold text-white mb-3 line-clamp-1 group-hover:text-blue-neon transition-colors">{project.title}</h3>
                       
                       <div className="flex gap-2 mb-4">
                         {project.techs.slice(0, 3).map((T, i) => (
                           <T.icon key={i} className={`text-xl ${T.color}`} />
                         ))}
                       </div>

                       <p className="text-gray-400 text-sm line-clamp-3 mb-6 leading-relaxed">
                         {project.shortDescription}
                       </p>

                       <Link to={`/project/${project.id}`} className="mt-auto block w-full">
                         {/* BOTÃO ORIGINAL (Estilo Link/Botão Simples) */}
                         <button className="
                           w-full py-3 rounded-lg font-bold text-sm font-mono tracking-wider transition-all duration-300
                           flex items-center justify-center gap-2
                           text-blue-neon border border-blue-neon/30 bg-blue-neon/5
                           hover:bg-blue-neon hover:text-[#0d1117] hover:shadow-[0_0_15px_#58a6ff]
                         ">
                           VER DETALHES <FaArrowRight />
                         </button>
                       </Link>
                    </div>
                 </div>
               </SwiperSlide>
             ))}
           </Swiper>
         </div>

         {/* Botão Ver Todos */}
         <div className="flex justify-center">
            <Link to="/all-projects">
              <NeonButton>
                 Acessar Arquivo Completo &rarr;
              </NeonButton>
            </Link>
         </div>

      </div>
      
      {/* === ESTILO DAS SETAS E PAGINAÇÃO === */}
      <style>{`
        /* Paginação (Bolinhas) */
        .swiper-pagination-bullet { 
            background-color: #58a6ff !important; 
            opacity: 0.3; width: 8px; height: 8px; transition: all 0.3s;
        }
        .swiper-pagination-bullet-active { 
            background-color: #bc8cff !important; 
            opacity: 1; width: 24px; border-radius: 4px;
        }

        /* SETAS DO CARROSSEL (Limpas e Afiadas) */
        .swiper-button-next, .swiper-button-prev {
            color: #58a6ff !important; /* Cor Azul Neon */
            background: rgba(13, 17, 23, 0.8) !important; /* Fundo escuro semi-transparente */
            width: 45px !important;
            height: 45px !important;
            border-radius: 50% !important; /* Redondo */
            border: 1px solid rgba(88, 166, 255, 0.3) !important;
            backdrop-filter: blur(4px);
            transition: all 0.3s ease !important;
        }
        
        /* Ícone da seta (Tamanho) */
        .swiper-button-next::after, .swiper-button-prev::after {
            font-size: 18px !important;
            font-weight: 900 !important;
        }

        /* Hover nas Setas */
        .swiper-button-next:hover, .swiper-button-prev:hover {
            color: #fff !important;
            background: #58a6ff !important; /* Fica azul sólido ao passar o mouse */
            box-shadow: 0 0 15px rgba(88, 166, 255, 0.6) !important;
            transform: scale(1.1);
            border-color: #58a6ff !important;
        }

        /* Oculta no mobile */
        @media (max-width: 640px) {
            .swiper-button-next, .swiper-button-prev { display: none !important; }
        }
      `}</style>
    </SectionWrapper>
  );
};

export default Projects;