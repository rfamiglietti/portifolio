import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SectionWrapper from '../components/SectionWrapper';
import NeonButton from '../components/NeonButton';
import { FiSend, FiMessageSquare } from 'react-icons/fi'; // Importando novo ícone do WhatsApp

// 🚨 ENDPOINT DO FORMSUBMIT: Seu email de destino
const FORM_ENDPOINT = "https://formsubmit.co/romulopfami@gmail.com"; 

// 🚨 LINK DO WHATSAPP: Substitua SEU_NUMERO_AQUI pelo seu número no formato internacional.
const WHATSAPP_NUMBER = "5511943421854"; 
const PRE_MESSAGE = "Olá Rômulo! Vi seu portfólio e gostaria de discutir uma oportunidade/projeto. Vamos conversar?";
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(PRE_MESSAGE)}`;

const Contact = () => {
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(null); 

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus(null);

    const form = e.target;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());

    try {
      const response = await fetch(FORM_ENDPOINT, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setStatus('success');
        form.reset();
      } else {
        setStatus('error');
      }

    } catch (error) {
      console.error('Erro de rede ou FormSubmit:', error);
      setStatus('error');
    }
    
    setLoading(false);
    setTimeout(() => setStatus(null), 5000); 
  };

  const WhatsAppCard = () => (
    <motion.div
      className="lg:w-1/3 bg-dark-secondary p-8 rounded-xl shadow-xl border border-blue-neon/30 flex flex-col items-center justify-center mt-8 lg:mt-0 lg:ml-8 h-full"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, delay: 0.2 }}
    >
      <FiMessageSquare className="text-6xl text-green-400 mb-4" />
      <h3 className="text-xl font-bold mb-2 text-white dark:text-gray-200">
        Contato Direto
      </h3>
      <p className="text-center text-gray-500 mb-6 dark:text-gray-400">
        Prefere conversar rapidamente? Me mande um WhatsApp!
      </p>
      
      <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
        <NeonButton primary={true} className="flex items-center space-x-2 bg-green-500 hover:bg-green-600 dark:bg-green-500 dark:hover:bg-green-600">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-whatsapp"><path d="M22 10.24c-0.28-1.58-1.51-3.6-3.23-5.32-1.72-1.72-3.74-2.95-5.32-3.23-1.58-0.28-3.08-0.34-4.52-0.09-1.44 0.25-2.8 0.86-3.87 1.93-1.07 1.07-1.68 2.43-1.93 3.87-0.25 1.44-0.19 2.94 0.09 4.52 0.28 1.58 1.51 3.6 3.23 5.32 1.72 1.72 3.74 2.95 5.32 3.23 1.58 0.28 3.08 0.34 4.52 0.09 1.44-0.25 2.8-0.86 3.87-1.93 1.07-1.07 1.68-2.43 1.93-3.87 0.25-1.44 0.19-2.94-0.09-4.52z" fill="#FFF" stroke="none"/><path d="M12 2C6.48 2 2 6.48 2 12c0 1.5.34 2.92.94 4.2l-1.09 3.99 4.09-1.08c1.28.6 2.68.91 4.06.91 5.52 0 10-4.48 10-10S17.52 2 12 2zm3.33 13.92l-1.64-.78c-.28-.14-.58-.2-.87-.2s-.6.06-.87.2l-1.64.78c-1.12-.53-2.14-1.55-2.67-2.67l.78-1.64c.14-.28.2-.58.2-.87s-.06-.6-.2-.87l-.78-1.64c-.53-1.12-1.55-2.14-2.67-2.67l1.64-.78c.28-.14.58-.2.87-.2s.6.06.87.2l1.64.78c1.12.53 2.14 1.55 2.67 2.67l-.78 1.64c-.14.28-.2.58-.2.87s.06.6.2.87l.78 1.64c.53 1.12 1.55 2.14 2.67 2.67z" fill="#FFF" stroke="none"/></svg>
          <span>Chamar no WhatsApp</span>
        </NeonButton>
      </a>
    </motion.div>
  );

  return (
    <SectionWrapper id="contact" title="Contato" subtitle="Fale Comigo, Crie o Próximo Projeto">
      <div className="flex flex-col lg:flex-row justify-center max-w-7xl mx-auto w-full">
        
        {/* Formulário (Ocupa 2/3 em telas grandes) */}
        <motion.form
          // Define a largura do formulário para telas grandes
          className="w-full lg:w-2/3 max-w-lg bg-white dark:bg-dark-secondary p-8 md:p-10 rounded-xl shadow-xl border border-purple-neon/30"
          action={FORM_ENDPOINT} 
          method="POST"
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* 🚨 AJUSTE DE TEMA AQUI: Cor de fundo do input (branco/escuro) */}
          <div className="mb-6">
            <label htmlFor="user_name" className="block text-gray-700 dark:text-gray-300 mb-2">Nome</label>
            <input type="text" name="name" id="user_name" required className="w-full p-3 bg-gray-100 dark:bg-dark-primary/50 border border-gray-300 dark:border-gray-700 rounded-lg focus:border-blue-neon focus:ring-1 focus:ring-blue-neon transition-all text-gray-900 dark:text-white" />
          </div>

          <div className="mb-6">
            <label htmlFor="user_email" className="block text-gray-700 dark:text-gray-300 mb-2">E-mail</label>
            <input type="email" name="email" id="user_email" required className="w-full p-3 bg-gray-100 dark:bg-dark-primary/50 border border-gray-300 dark:border-gray-700 rounded-lg focus:border-blue-neon focus:ring-1 focus:ring-blue-neon transition-all text-gray-900 dark:text-white" />
          </div>

          <div className="mb-8">
            <label htmlFor="message" className="block text-gray-700 dark:text-gray-300 mb-2">Mensagem</label>
            <textarea name="message" id="message" rows="6" required className="w-full p-3 bg-gray-100 dark:bg-dark-primary/50 border border-gray-300 dark:border-gray-700 rounded-lg focus:border-blue-neon focus:ring-1 focus:ring-blue-neon transition-all resize-none text-gray-900 dark:text-white"></textarea>
          </div>

          <input type="hidden" name="_subject" value="Nova Mensagem do Portfólio @daquebrada.dev" />
          <input type="hidden" name="_captcha" value="false" /> 

          <NeonButton type="submit" primary={true} disabled={loading} className="w-full flex items-center justify-center space-x-2">
            {loading ? (
              <span>Enviando...</span>
            ) : (
              <>
                <FiSend /> <span>Enviar Mensagem</span>
              </>
            )}
          </NeonButton>

          {/* Mensagens de Status */}
          <AnimatePresence>
            {status === 'success' && (
              <motion.p
                className="text-center mt-4 text-lg font-semibold text-green-400 bg-dark-primary p-3 rounded-lg border border-green-400/50"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
              >
                Mensagem enviada com sucesso! 🚀
              </motion.p>
            )}
            {status === 'error' && (
              <motion.p
                className="text-center mt-4 text-lg font-semibold text-red-400 bg-dark-primary p-3 rounded-lg border border-red-400/50"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
              >
                Erro ao enviar. Por favor, tente novamente mais tarde. 😔
              </motion.p>
            )}
          </AnimatePresence>
        </motion.form>
        
        {/* Card de Contato Direto por WhatsApp */}
        <WhatsAppCard />
      </div>
    </SectionWrapper>
  );
};

export default Contact;