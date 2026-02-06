import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaEnvelope, FaLinkedin, FaPaperPlane, FaWhatsapp, FaCheckCircle, FaSpinner, FaExclamationCircle } from 'react-icons/fa';
import SectionWrapper from '../components/SectionWrapper';
import NeonButton from '../components/NeonButton';

const Contact = () => {
  // Estados para controlar o envio do formulário
  const [status, setStatus] = useState(null); // null | 'sending' | 'success' | 'error'

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const whatsappNumber = "5511943421854"; 
  const whatsappMessage = encodeURIComponent("Olá Rômulo! Vi seu portfólio e gostaria de conversar sobre uma oportunidade.");
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  // Função que envia os dados sem recarregar a página
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');

    const formData = new FormData(e.target);

    try {
      const response = await fetch("https://formsubmit.co/ajax/romulofamii@gmail.com", {
        method: "POST",
        body: formData,
        headers: { 
            'Accept': 'application/json'
        }
      });

      if (response.ok) {
        setStatus('success');
        e.target.reset(); // Limpa os campos
        // Opcional: Voltar ao estado normal após 5 segundos
        setTimeout(() => setStatus(null), 5000);
      } else {
        setStatus('error');
      }
    } catch (error) {
      console.error("Erro no envio:", error);
      setStatus('error');
    }
  };

  return (
    <SectionWrapper id="contact">
      <div className="max-w-5xl mx-auto w-full pb-32">

        {/* === CABEÇALHO === */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="mb-16 text-center lg:text-left"
        >
          <span className="font-mono text-blue-neon text-lg tracking-wider">
            04. // VAMOS CONVERSAR?
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mt-2">
            Entre em <span className="text-purple-neon">Contato</span>
          </h2>
          <p className="text-gray-400 mt-4 max-w-xl text-lg">
            Estou disponível para novas oportunidades. 
            Mande uma mensagem e vamos construir algo incrível juntos.
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-12">
          
          {/* === COLUNA DA ESQUERDA: CANAIS (Mantida igual) === */}
          <motion.div 
            className="lg:w-1/3 space-y-6"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <a 
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#161b22] p-6 rounded-xl border border-gray-800 hover:border-green-500 transition-all group block cursor-pointer shadow-lg hover:shadow-green-500/20"
            >
              <div className="flex items-center gap-4">
                <div className="p-3 bg-green-900/20 rounded-lg text-green-500 group-hover:text-white transition-colors">
                  <FaWhatsapp size={24} />
                </div>
                <div>
                  <h4 className="text-gray-400 text-sm font-mono mb-1">WhatsApp Rápido</h4>
                  <span className="text-white font-bold group-hover:text-green-400 transition-colors">
                    Iniciar Conversa &rarr;
                  </span>
                </div>
              </div>
            </a>

            <div className="bg-[#161b22] p-6 rounded-xl border border-gray-800 hover:border-blue-neon/50 transition-colors group">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-blue-900/20 rounded-lg text-blue-neon group-hover:text-white transition-colors">
                  <FaLinkedin size={24} />
                </div>
                <div>
                  <h4 className="text-gray-400 text-sm font-mono">LinkedIn</h4>
                  <a href="https://linkedin.com/in/romulopfami" target="_blank" rel="noopener noreferrer" className="text-white font-bold hover:text-blue-neon transition-colors">
                    in/romulopfami
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-[#161b22] p-6 rounded-xl border border-gray-800 hover:border-purple-neon/50 transition-colors group">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-purple-900/20 rounded-lg text-purple-neon group-hover:text-white transition-colors">
                  <FaEnvelope size={24} />
                </div>
                <div>
                  <h4 className="text-gray-400 text-sm font-mono">E-mail</h4>
                  <a href="mailto:romulopfami@gmail.com" className="text-white font-bold hover:text-purple-neon transition-colors">
                    romulopfami@gmail.com
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* === COLUNA DA DIREITA: FORMULÁRIO COM FEEDBACK === */}
          <motion.div 
            className="lg:w-2/3"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <form 
              onSubmit={handleSubmit}
              className="bg-[#161b22] p-8 rounded-xl border border-gray-800 shadow-xl relative overflow-hidden"
            >
              
              {/* Campos do Formulário */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="flex flex-col gap-2">
                  <label htmlFor="name" className="text-sm font-mono text-gray-400">
                    <span className="text-purple-neon">const</span> nome =
                  </label>
                  <input 
                    type="text" 
                    name="name"
                    required
                    disabled={status === 'sending' || status === 'success'}
                    placeholder='"Seu Nome"'
                    className="bg-[#0d1117] border border-gray-700 rounded p-3 text-white focus:border-blue-neon focus:outline-none focus:ring-1 focus:ring-blue-neon transition-all font-mono disabled:opacity-50"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="email" className="text-sm font-mono text-gray-400">
                    <span className="text-purple-neon">const</span> email =
                  </label>
                  <input 
                    type="email" 
                    name="email"
                    required
                    disabled={status === 'sending' || status === 'success'}
                    placeholder='"seu@email.com"'
                    className="bg-[#0d1117] border border-gray-700 rounded p-3 text-white focus:border-blue-neon focus:outline-none focus:ring-1 focus:ring-blue-neon transition-all font-mono disabled:opacity-50"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-2 mb-8">
                <label htmlFor="message" className="text-sm font-mono text-gray-400">
                  <span className="text-purple-neon">const</span> mensagem =
                </label>
                <textarea 
                  name="message"
                  required
                  disabled={status === 'sending' || status === 'success'}
                  rows="5" 
                  placeholder='"Escreva sua mensagem aqui..."'
                  className="bg-[#0d1117] border border-gray-700 rounded p-3 text-white focus:border-blue-neon focus:outline-none focus:ring-1 focus:ring-blue-neon transition-all font-mono resize-none disabled:opacity-50"
                ></textarea>
              </div>

              {/* Botão com estados dinâmicos */}
              <button 
                type="submit" 
                disabled={status === 'sending' || status === 'success'}
                className="w-full md:w-auto"
              >
                <NeonButton primary={true}>
                  <span className="flex items-center gap-2">
                    {status === 'sending' ? (
                      <>Enviando... <FaSpinner className="animate-spin" /></>
                    ) : status === 'success' ? (
                      <>Enviado! <FaCheckCircle /></>
                    ) : (
                      <>Enviar Mensagem <FaPaperPlane className="text-sm" /></>
                    )}
                  </span>
                </NeonButton>
              </button>

              {/* Mensagem de Feedback (Sucesso/Erro) */}
              <AnimatePresence>
                {status === 'success' && (
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="mt-4 p-4 bg-green-500/10 border border-green-500/50 rounded-lg text-green-400 flex items-center gap-3"
                  >
                    <FaCheckCircle className="text-xl" />
                    <div>
                      <p className="font-bold">Mensagem enviada com sucesso!</p>
                      <p className="text-sm opacity-80">Responderei o mais breve possível.</p>
                    </div>
                  </motion.div>
                )}

                {status === 'error' && (
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="mt-4 p-4 bg-red-500/10 border border-red-500/50 rounded-lg text-red-400 flex items-center gap-3"
                  >
                    <FaExclamationCircle className="text-xl" />
                    <div>
                      <p className="font-bold">Houve um erro ao enviar.</p>
                      <p className="text-sm opacity-80">Por favor, tente novamente ou me chame no WhatsApp.</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

            </form>
          </motion.div>

        </div>
      </div>
    </SectionWrapper>
  );
};

export default Contact;