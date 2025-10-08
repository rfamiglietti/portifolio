import React from 'react';
import { motion } from 'framer-motion';
import SectionWrapper from '../components/SectionWrapper';
import { FiMonitor, FiCpu, FiRefreshCw } from 'react-icons/fi';

const services = [
  {
    title: 'Criação de Sites',
    description: 'Desenvolvimento de websites responsivos, modernos e otimizados para SEO. (Landing Pages, Institucionais e Blogs).',
    icon: FiMonitor,
    color: 'text-purple-neon',
  },
  {
    title: 'Automações com IA',
    description: 'Soluções inteligentes para automatizar processos e aumentar produtividade usando modelos de Machine Learning (Python).',
    icon: FiCpu,
    color: 'text-blue-neon',
  },
  {
    title: 'Integrações de API',
    description: 'Conexão entre diferentes sistemas e plataformas através de APIs customizadas, garantindo comunicação fluida e segura.',
    icon: FiRefreshCw,
    color: 'text-purple-neon',
  },
];

const ServiceCard = ({ service, index }) => {
  const { title, description, icon: Icon, color } = service;

  return (
    <motion.div
      className="bg-dark-secondary p-8 rounded-xl shadow-xl border border-transparent transition-all duration-300 hover:border-blue-neon/50 hover:shadow-neon-blue/50"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      whileHover={{ scale: 1.05 }}
    >
      <div className={`p-4 rounded-full w-fit mb-4 bg-dark-primary/50 shadow-lg ${color} border border-blue-neon/30`}>
        <Icon className="text-4xl" />
      </div>
      <h3 className="text-2xl font-bold mb-3 text-white font-display">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </motion.div>
  );
};

const Services = () => {
  return (
    <SectionWrapper id="services" title="Serviços" subtitle="Inovação e Soluções Tecnológicas">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <ServiceCard key={index} service={service} index={index} />
        ))}
      </div>
    </SectionWrapper>
  );
};

export default Services;