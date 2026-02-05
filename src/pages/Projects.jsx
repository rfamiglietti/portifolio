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
             navigation={{ clickable: true }} // Habilita o clique
             pagination={{ clickable: true, dynamicBullets: true }}
             autoplay={{ delay: 6000, disableOnInteraction: false }}
             loop={true} // Loop infinito para navegação contínua
             breakpoints={{
               640: { slidesPerView: 1 },
               768: { slidesPerView: 2 },
               1024: { slidesPerView: 2.2 },
             }}
             className="pb-16" // Espaço extra embaixo para a paginação não colar
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
                         <button className="w-full py-3 rounded-lg bg-gray-800 hover:bg-blue-600 hover:text-white text-blue-neon font-bold text-sm transition-all border border-gray-700 hover:border-blue-500 flex items-center justify-center gap-2">
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
      
      {/* === ESTILOS PERSONALIZADOS DO SWIPER === */}
      <style>{`
        /* Paginação (Bolinhas) */
        .swiper-pagination-bullet { 
            background-color: #58a6ff; 
            opacity: 0.3; 
            width: 10px; 
            height: 10px;
            transition: all 0.3s;
        }
        .swiper-pagination-bullet-active { 
            background-color: #bc8cff; 
            opacity: 1; 
            width: 20px; 
            border-radius: 5px;
        }

        /* Botões de Navegação (Setas) - Estilo Redondo Neon */
        .swiper-button-next, .swiper-button-prev {
            width: 50px;
            height: 50px;
            background-color: rgba(13, 17, 23, 0.8); /* Fundo escuro translúcido */
            backdrop-filter: blur(4px);
            border: 1px solid #30363d;
            border-radius: 50%;
            color: #fff;
            transition: all 0.3s ease;
            z-index: 50;
        }

        /* Tamanho do ícone da seta */
        .swiper-button-next::after, .swiper-button-prev::after {
            font-size: 20px;
            font-weight: bold;
        }

        /* Efeito Hover nos Botões */
        .swiper-button-next:hover, .swiper-button-prev:hover {
            background-color: #1f2937;
            border-color: #58a6ff;
            color: #58a6ff;
            box-shadow: 0 0 15px rgba(88, 166, 255, 0.4);
            transform: scale(1.1);
        }

        /* Ajuste de posição para mobile */
        @media (max-width: 640px) {
            .swiper-button-next, .swiper-button-prev {
                display: none; /* Oculta setas no mobile (usa swipe) */
            }
        }
      `}</style>
    </SectionWrapper>
  );
};

export default Projects;