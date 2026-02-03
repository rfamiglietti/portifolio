import React from 'react';
import { FaGithub, FaLinkedinIn, FaInstagram, FaCodeBranch, FaExclamationTriangle, FaCheckCircle, FaReact } from 'react-icons/fa';

const Footer = () => {
  const socialLinks = [
    { icon: FaGithub, href: 'https://github.com/rfamiglietti' },
    { icon: FaLinkedinIn, href: 'https://linkedin.com/in/romulopfami' },
    { icon: FaInstagram, href: 'https://www.instagram.com/r_famiglietti' },
  ];

  return (
    <footer className="w-full bg-[#0d1117] border-t border-gray-800 flex flex-col mt-16">
      
      {/* === PARTE SUPERIOR: SEUS LINKS E NOME === */}
      <div className="w-full max-w-7xl mx-auto px-6 py-8 flex flex-col md:flex-row justify-between items-center gap-6">
        
        {/* Links Sociais (Mantendo sua lógica de map) */}
        <div className="flex gap-6">
          {socialLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-blue-neon text-2xl transition-colors duration-300 hover:scale-110 transform"
            >
              <link.icon />
            </a>
          ))}
        </div>

        {/* Seus Créditos (Mantendo seu texto exato) */}
        <div className="flex flex-col items-center md:items-end">
          <p className="text-sm text-gray-500">
            &copy; {new Date().getFullYear()} Todos os direitos reservados.
          </p>
          <p className="text-sm text-purple-neon mt-1">
            Feito por <span className="font-bold text-blue-neon">Rômulo Pereira Famiglietti</span> 💻
          </p>
        </div>
      </div>

      {/* === BARRA DE STATUS ESTILO VS CODE (O Toque Especial) === */}
      <div className="w-full bg-[#161b22] border-t border-gray-800 py-1 px-4 flex justify-between items-center text-[10px] md:text-xs text-gray-500 font-mono select-none">
        
        {/* Lado Esquerdo: Branch e Status */}
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-1 hover:text-white cursor-pointer transition-colors">
            <FaCodeBranch className="text-blue-neon" />
            <span>main*</span>
          </div>
          <div className="hidden sm:flex items-center gap-2 hover:text-white cursor-pointer transition-colors">
            <FaExclamationTriangle />
            <span>0 errors</span>
            <span>0 warnings</span>
          </div>
        </div>

        {/* Lado Direito: Linguagem e Formato */}
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2 hover:text-white cursor-pointer transition-colors">
             <FaReact className="text-blue-400 animate-spin-slow" />
             <span className="hidden sm:inline">Powered by React</span>
          </div>
          <div className="hidden sm:flex items-center gap-1 hover:text-white cursor-pointer transition-colors">
            <FaCheckCircle className="text-green-500" />
            <span>Prettier</span>
          </div>
          <div className="hover:text-white cursor-pointer transition-colors">
            UTF-8
          </div>
          <div className="hover:text-white cursor-pointer transition-colors">
            JavaScript JSX
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;