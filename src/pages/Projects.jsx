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
  const sliderProjects = projectsData.slice(0, 5); 

  return (
    <SectionWrapper id="projects">
      <div className="max-w-7xl mx-auto pb-20 relative">
         
         <div className="mb-12">
          <span className="font-mono text-blue-neon text-lg tracking-wider">
            02. // MEUS PROJETOS
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mt-2">
            O que tenho <span className="text-purple-neon">Construído</span>
          </h2>
         </div>

         {/* === CARROSSEL SWIPER === */}
         <div className="mb-16 select-none relative group/slider">
           <Swiper
             modules={[Navigation, Pagination, Autoplay]}
             spaceBetween={30}
             slidesPerView={1}
             navigation={{ clickable: true }}
             pagination={{ clickable: true, dynamicBullets: true }}
             autoplay={{ delay: 6000, disableOnInteraction: false }}
             loop={true}
             breakpoints={{
               640: { slidesPerView: 1 },
               768: { slidesPerView: 2 },
               1024: { slidesPerView: 2.2 },
             }}
             className="pb-20 pt-10 px-4"
           >
             {sliderProjects.map((project) => (
               <SwiperSlide key={project.id}>
                 <div className="bg-[#161b22] rounded-xl overflow-hidden border border-gray-800 h-[480px] flex flex-col hover:border-blue-neon/50 transition-all duration-300 group hover:shadow-[0_0_30px_rgba(88,166,255,0.1)]">
                    
                    {/* Capa */}
                    <div className="h-60 relative overflow-hidden bg-gray-900 border-b border-gray-800">
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

                       <Link to={`/project/${project.id}`} className="mt-auto block">
                         {/* === BOTÃO KEYCAP NO CARD (AZUL) === */}
                         <button className="
                           w-full py-3 rounded-xl font-bold text-sm font-mono tracking-wider transition-all duration-150
                           flex items-center justify-center gap-2
                           
                           /* Estilo Visual */
                           bg-[#0d1117] text-[#58a6ff] 
                           border-2 border-[#58a6ff] border-b-[6px]
                           
                           /* Interações */
                           hover:brightness-125 hover:shadow-[0_0_15px_rgba(88,166,255,0.4)] hover:-translate-y-0.5
                           active:border-b-[0px] active:translate-y-[6px] active:shadow-none
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
      
      {/* Estilos das Setas do Carrossel (Também em formato Keycap) */}
      <style>{`
        .swiper-pagination-bullet { 
            background-color: #58a6ff; 
            opacity: 0.3; width: 10px; height: 10px; transition: all 0.3s;
        }
        .swiper-pagination-bullet-active { 
            background-color: #bc8cff; opacity: 1; width: 20px; border-radius: 5px;
        }

        .swiper-button-next, .swiper-button-prev {
            width: 50px; height: 50px;
            background-color: #21262d;
            border: 1px solid #30363d;
            border-bottom: 5px solid #0d1117;
            border-radius: 12px;
            color: #58a6ff;
            transition: all 0.1s;
            z-index: 50;
            display: flex; align-items: center; justify-content: center;
            box-shadow: 0 10px 20px rgba(0,0,0,0.5);
        }
        .swiper-button-next::after, .swiper-button-prev::after { font-size: 20px; font-weight: bold; }

        .swiper-button-next:active, .swiper-button-prev:active {
            transform: translateY(4px);
            border-bottom-width: 1px;
            box-shadow: none;
        }
        
        .swiper-button-next:hover, .swiper-button-prev:hover {
            background-color: #30363d;
            color: #bc8cff;
        }

        @media (max-width: 640px) { .swiper-button-next, .swiper-button-prev { display: none; } }
      `}</style>
    </SectionWrapper>
  );
};

export default Projects;