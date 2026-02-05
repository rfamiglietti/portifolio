import React from 'react';

const NeonButton = ({ children, primary = true, onClick, className = "" }) => {
  // Cores Originais: Azul Neon ou Roxo Neon
  const colorClass = primary 
    ? "text-[#58a6ff] border-[#58a6ff] shadow-[#58a6ff]/20 hover:bg-[#58a6ff]/10" 
    : "text-[#bc8cff] border-[#bc8cff] shadow-[#bc8cff]/20 hover:bg-[#bc8cff]/10";
    
  return (
    <button
      onClick={onClick}
      className={`
        group relative inline-flex items-center justify-center 
        px-8 py-3 font-bold text-lg font-mono tracking-wide
        
        /* === ESTILO ORIGINAL (NEON FLAT) === */
        bg-transparent
        border-2
        rounded-lg
        
        /* Aplica as cores */
        ${colorClass}
        
        /* === ANIMAÇÃO SUAVE === */
        transition-all duration-300 ease-in-out
        
        /* Hover: Brilho intenso + Leve subida */
        hover:shadow-[0_0_20px_currentColor]
        hover:-translate-y-1
        
        /* Active: Clique simples */
        active:scale-95
        active:translate-y-0
        
        ${className}
      `}
    >
      <span className="flex items-center gap-2 relative z-10">
        {children}
      </span>
    </button>
  );
};

export default NeonButton;