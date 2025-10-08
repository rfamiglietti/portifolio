import React, { useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SectionWrapper from '../components/SectionWrapper';
import NeonButton from '../components/NeonButton';
import emailjs from '@emailjs/browser';
import { FiSend } from 'react-icons/fi';

const Contact = () => {
  const form = useRef();
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(null); // 'success', 'error', 'idle'

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus(null);

    // As variáveis de ambiente são acessadas via import.meta.env no Vite
    const serviceID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    if (!serviceID || !templateID || !publicKey) {
      console.error("EmailJS environment variables are missing! Check your .env file.");
      setStatus('error');
      setLoading(false);
      return;
    }

    emailjs
      .sendForm(serviceID, templateID, form.current, {
        publicKey: publicKey,
      })
      .then(
        () => {
          setStatus('success');
          form.current.reset(); // Limpa o formulário
          setTimeout(() => setStatus(null), 5000); // Remove o status após 5s
        },
        (error) => {
          console.error('FALHA NO ENVIO...', error.text);
          setStatus('error');
          setTimeout(() => setStatus(null), 5000); 
        },
      )
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <SectionWrapper id="contact" title="Contato" subtitle="Fale Comigo, Crie o Próximo Projeto">
      <div className="flex justify-center">
        <motion.form
          ref={form}
          onSubmit={sendEmail}
          className="w-full max-w-lg bg-dark-secondary p-8 md:p-10 rounded-xl shadow-xl border border-purple-neon/30"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Campos do Formulário */}
          <div className="mb-6">
            <label htmlFor="user_name" className="block text-gray-300 mb-2">Nome</label>
            <input type="text" name="user_name" id="user_name" required className="w-full p-3 bg-dark-primary/50 border border-gray-700 rounded-lg focus:border-blue-neon focus:ring-1 focus:ring-blue-neon transition-all" />
          </div>

          <div className="mb-6">
            <label htmlFor="user_email" className="block text-gray-300 mb-2">E-mail</label>
            <input type="email" name="user_email" id="user_email" required className="w-full p-3 bg-dark-primary/50 border border-gray-700 rounded-lg focus:border-blue-neon focus:ring-1 focus:ring-blue-neon transition-all" />
          </div>

          <div className="mb-8">
            <label htmlFor="message" className="block text-gray-300 mb-2">Mensagem</label>
            <textarea name="message" id="message" rows="6" required className="w-full p-3 bg-dark-primary/50 border border-gray-700 rounded-lg focus:border-blue-neon focus:ring-1 focus:ring-blue-neon transition-all resize-none"></textarea>
          </div>

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
                Erro ao enviar. Tente novamente ou use meu LinkedIn. 😔
              </motion.p>
            )}
          </AnimatePresence>
        </motion.form>
      </div>
    </SectionWrapper>
  );
};

export default Contact;