import React from 'react';
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';
import { projectsData } from '../data/projectsData';
import SectionWrapper from '../components/SectionWrapper';
import NeonButton from '../components/NeonButton';

// Imports do Swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const Projects = () => {
  // Pega apenas os 5 primeiros para o slider
  const sliderProjects = projectsData.slice(0, 5); 

  return (
    <SectionWrapper id="projects">
      <div className="max-w-7xl mx-auto pb-20">
         
         <div className="mb-12">
          <span className="font-mono text-blue-neon text-lg tracking-wider">
            02. // MEUS PROJETOS
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mt-2">
            O que tenho <span className="text-purple-neon">Construído</span>
          </h2>
         </div>

         {/* === CARROSSEL SWIPER === */}
         <div className="mb-16 select-none">
           <Swiper
             modules={[Navigation, Pagination, Autoplay]}
             spaceBetween={30}
             slidesPerView={1}
             navigation
             pagination={{ clickable: true }}
             autoplay={{ delay: 5000, disableOnInteraction: false }}
             breakpoints={{
               640: { slidesPerView: 1 },
               768: { slidesPerView: 2 },
               1024: { slidesPerView: 2.2 }, // Mostra um pedacinho do próximo para dar ideia de scroll
             }}
             className="pb-12" // Espaço para os dots do pagination
           >
             {sliderProjects.map((project) => (
               <SwiperSlide key={project.id}>
                 <div className="bg-[#161b22] rounded-xl overflow-hidden border border-gray-800 h-[450px] flex flex-col hover:border-blue-neon/50 transition-colors group">
                    
                    {/* Capa */}
                    <div className="h-56 relative overflow-hidden bg-gray-900">
                      {project.cover ? (
                        <img 
                          src={project.cover} 
                          alt={project.title} 
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                      ) : (
                        <div className="w-full h-full bg-gray-800 flex items-center justify-center text-gray-600">No Image</div>
                      )}
                      <div className="absolute inset-0 bg-gradient-to-t from-[#161b22] to-transparent"></div>
                    </div>

                    {/* Conteúdo */}
                    <div className="p-6 flex flex-col flex-grow">
                       <h3 className="text-2xl font-bold text-white mb-2 line-clamp-1">{project.title}</h3>
                       
                       <div className="flex gap-2 mb-4">
                         {project.techs.slice(0, 3).map((T, i) => (
                           <T.icon key={i} className={`text-lg ${T.color}`} />
                         ))}
                       </div>

                       <p className="text-gray-400 text-sm line-clamp-3 mb-6">
                         {project.shortDescription}
                       </p>

                       <Link to={`/project/${project.id}`} className="mt-auto">
                         <button className="text-blue-neon font-bold text-sm flex items-center gap-2 hover:gap-4 transition-all">
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
      
      {/* Estilos manuais para customizar o Swiper (dots e setas) */}
      <style>{`
        .swiper-pagination-bullet { background-color: #58a6ff; opacity: 0.5; }
        .swiper-pagination-bullet-active { background-color: #bc8cff; opacity: 1; }
        .swiper-button-next, .swiper-button-prev { color: #fff; transform: scale(0.7); }
      `}</style>
    </SectionWrapper>
  );
};

export default Projects;