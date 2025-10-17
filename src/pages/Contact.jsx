import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SectionWrapper from '../components/SectionWrapper';
import NeonButton from '../components/NeonButton';
import { FiSend } from 'react-icons/fi';

const Contact = () => {
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(null); // 'success', 'error', 'idle'

  // ENDPOINT DO FORMSUBMIT
  const FORM_ENDPOINT = "https://formsubmit.co/romulopfami@gmail.com"; 

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus(null);

    const form = e.target;
    const formData = new FormData(form);
    
    // Converte FormData para objeto JSON para facilitar o envio via fetch
    const data = Object.fromEntries(formData.entries());

    try {
      //  ENVIO COM FETCH:  fetch para controlar o feedback do usuário
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
    setTimeout(() => setStatus(null), 5000); // Remove o status após 5s
  };

  return (
    <SectionWrapper id="contact" title="Contato" subtitle="Fale Comigo, Crie o Próximo Projeto">
      <div className="flex justify-center">
        <motion.form
          // MUDANÇA: Action e Method são definidos no código, mas mantidos no formulário para consistência
          onSubmit={handleSubmit}
          className="w-full max-w-lg bg-dark-secondary p-8 md:p-10 rounded-xl shadow-xl border border-purple-neon/30"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Campos do Formulário */}
          <div className="mb-6">
            <label htmlFor="user_name" className="block text-gray-300 mb-2">Nome</label>
            {/* 🚨 FormSubmit usa 'name' e 'email' como padrão */}
            <input type="text" name="name" id="user_name" required className="w-full p-3 bg-dark-primary/50 border border-gray-700 rounded-lg focus:border-blue-neon focus:ring-1 focus:ring-blue-neon transition-all" />
          </div>

          <div className="mb-6">
            <label htmlFor="user_email" className="block text-gray-300 mb-2">E-mail</label>
            <input type="email" name="email" id="user_email" required className="w-full p-3 bg-dark-primary/50 border border-gray-700 rounded-lg focus:border-blue-neon focus:ring-1 focus:ring-blue-neon transition-all" />
          </div>

          <div className="mb-8">
            <label htmlFor="message" className="block text-gray-300 mb-2">Mensagem</label>
            <textarea name="message" id="message" rows="6" required className="w-full p-3 bg-dark-primary/50 border border-gray-700 rounded-lg focus:border-blue-neon focus:ring-1 focus:ring-blue-neon transition-all resize-none"></textarea>
          </div>
          
          {/* Campos Ocultos para FormSubmit (Assunto e desativação do Captcha) */}
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

          {/* Mensagens de Status (usando o estado do React) */}
          <AnimatePresence>
            {/* ... (Mensagens de sucesso/erro permanecem as mesmas) */}
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
      </div>
    </SectionWrapper>
  );
};

export default Contact;