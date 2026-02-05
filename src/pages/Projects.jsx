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
         <div className="mb-16 select-none relative w-full">
           <Swiper
             modules={[Navigation, Pagination, Autoplay]}
             spaceBetween={20}
             slidesPerView={1}
             navigation={{ clickable: true }}
             pagination={{ clickable: true, dynamicBullets: true }}
             autoplay={{ delay: 6000, disableOnInteraction: false }}
             loop={true}
             breakpoints={{
               0: { slidesPerView: 1, spaceBetween: 10 },
               640: { slidesPerView: 1, spaceBetween: 20 },
               768: { slidesPerView: 2, spaceBetween: 20 },
               1024: { slidesPerView: 2.2, spaceBetween: 30 },
             }}
             className="pb-20 pt-10 px-2"
           >
             {sliderProjects.map((project) => (
               <SwiperSlide key={project.id} className="h-auto">
                 <div className="bg-[#161b22] rounded-xl overflow-hidden border border-gray-800 h-[500px] flex flex-col hover:border-blue-neon/50 transition-all duration-300 group shadow-lg">
                    
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
                         {/* BOTÃO VER DETALHES (Sólido com animação de clique) */}
                         <button className="
                           w-full py-3 rounded-lg font-bold text-sm font-mono tracking-wider transition-all duration-100
                           flex items-center justify-center gap-2
                           bg-gray-800 text-white border border-gray-700
                           
                           /* Hover: Brilho Azul */
                           hover:bg-blue-600 hover:border-blue-500 hover:shadow-lg hover:shadow-blue-900/40
                           
                           /* Active (Clique): Afunda levemente */
                           active:scale-[0.96] active:bg-blue-700
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
      
      {/* === CSS DAS SETAS ESTILO KEYCAP BRANCO (IGUAL À IMAGEM) === */}
      <style>{`
        .swiper-pagination-bullet { 
            background-color: #58a6ff !important; 
            opacity: 0.3; width: 10px; height: 10px; transition: all 0.3s;
        }
        .swiper-pagination-bullet-active { 
            background-color: #bc8cff !important; 
            opacity: 1; width: 20px; border-radius: 5px;
        }

        /* SETAS: Estilo Tecla Mecânica Branca/Preta */
        .swiper-button-next, .swiper-button-prev {
            width: 54px !important;
            height: 54px !important;
            
            /* Fundo Preto */
            background-color: #0d1117 !important;
            
            /* Borda Branca Fina */
            border: 2px solid white !important;
            
            /* Borda Branca Grossa em Baixo (Efeito 3D) */
            border-bottom: 6px solid white !important;
            
            border-radius: 14px !important;
            color: white !important;
            transition: all 0.1s cubic-bezier(0.4, 0, 0.2, 1) !important;
            display: flex !important;
            align-items: center !important;
            justify-content: center !important;
            z-index: 50;
            opacity: 0.8;
        }

        /* Hover: Fica mais brilhante/branco */
        .swiper-button-next:hover, .swiper-button-prev:hover {
            opacity: 1;
            background-color: #161b22 !important;
            transform: translateY(-2px); /* Levanta um pouquinho antes de clicar */
        }

        /* Clique (Active): Afunda */
        .swiper-button-next:active, .swiper-button-prev:active {
            transform: translateY(6px) !important; /* Desce */
            border-bottom-width: 0px !important;   /* Borda grossa some */
            transition: all 0.05s !important;
        }

        /* Ícone da seta */
        .swiper-button-next::after, .swiper-button-prev::after {
            font-size: 22px !important;
            font-weight: bold !important;
        }

        @media (max-width: 640px) {
            .swiper-button-next, .swiper-button-prev { display: none !important; }
        }
      `}</style>
    </SectionWrapper>
  );
};

export default Projects;