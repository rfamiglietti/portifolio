import React from 'react';
import { motion } from 'framer-motion';
import { FaLaptopCode, FaServer, FaMicrochip, FaCheckCircle } from 'react-icons/fa';
import SectionWrapper from '../components/SectionWrapper';

const Services = () => {
  // === CONFIGURAÇÃO DOS CARDS DE SERVIÇO ===
  const services = [
    {
      title: "Desenvolvimento Front-end",
      icon: <FaLaptopCode />, 
      color: "text-blue-400",
      description: "Criação de interfaces interativas e responsivas que funcionam em qualquer dispositivo. Foco na experiência do usuário (UX) e performance.",
      deliverables: [
        "Landing Pages de Alta Conversão",
        "Aplicações SPA com React.js",
        "Dashboards Administrativos",
        "Integração com APIs"
      ]
    },
    {
      title: "Desenvolvimento Back-end",
      icon: <FaServer />, 
      color: "text-green-500",
      description: "Construção da lógica do sistema, garantindo segurança e escalabilidade. Desenvolvimento de APIs RESTful robustas para alimentar o Front-end.",
      deliverables: [
        "APIs REST com Django/Python",
        "Modelagem de Banco de Dados (SQL)",
        "Sistemas de Autenticação & Login",
        "Regras de Negócio Complexas"
      ]
    },
    {
      title: "Prototipagem IoT & Hardware",
      icon: <FaMicrochip />, 
      color: "text-purple-neon", // Usando sua cor personalizada
      description: "Conexão entre o mundo físico e digital. Desenvolvimento de soluções de automação utilizando microcontroladores e sensores.",
      deliverables: [
        "Automação com Arduino/ESP32",
        "Leitura de Sensores em Tempo Real",
        "Controle de Dispositivos (Servos/LEDs)",
        "Integração Hardware-Software"
      ]
    }
  ];

  return (
    <SectionWrapper id="services">
      <div className="max-w-6xl mx-auto w-full pb-20">
        
        {/* === CABEÇALHO === */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <span className="font-mono text-blue-neon text-lg tracking-wider">
            03. // MINHAS COMPETÊNCIAS
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mt-2">
            O que posso <span className="text-purple-neon">Entregar</span>
          </h2>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto text-lg">
            Soluções completas para demandas de Freelance ou para integrar squads de desenvolvimento em grandes empresas.
          </p>
        </motion.div>

        {/* === GRID DE CARDS === */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              // Classes de estilo: Fundo escuro, borda sutil, efeito hover neon
              className="bg-[#161b22] rounded-xl border border-gray-800 p-8 hover:border-blue-neon/30 hover:shadow-lg hover:shadow-blue-neon/10 transition-all duration-300 group"
            >
              
              {/* Ícone do Serviço */}
              <div className={`text-5xl mb-6 ${service.color} p-4 bg-gray-900/50 rounded-lg inline-block group-hover:scale-110 transition-transform duration-300`}>
                {service.icon}
              </div>

              {/* Título */}
              <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-blue-neon transition-colors">
                {service.title}
              </h3>

              {/* Descrição Geral */}
              <p className="text-gray-400 leading-relaxed mb-6 border-b border-gray-800 pb-6">
                {service.description}
              </p>

              {/* Lista de Entregáveis (Checklist) */}
              <ul className="space-y-3">
                {service.deliverables.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm text-gray-300">
                    <FaCheckCircle className="mt-1 text-blue-neon/70 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

            </motion.div>
          ))}
        </div>

      </div>
    </SectionWrapper>
  );
};

export default Services;