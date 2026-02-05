import React from 'react';

const NeonButton = ({ children, primary = true, onClick, className = "" }) => {
  // Configuração das Cores (Texto e Borda combinando)
  // Primary = Azul Neon | Secondary = Roxo Neon
  const colorClass = primary 
    ? "text-[#58a6ff] border-[#58a6ff] hover:shadow-[0_0_20px_rgba(88,166,255,0.4)]" 
    : "text-[#bc8cff] border-[#bc8cff] hover:shadow-[0_0_20px_rgba(188,140,255,0.4)]";
    
  return (
    <button
      onClick={onClick}
      className={`
        group relative inline-flex items-center justify-center 
        px-8 py-3 font-bold text-lg font-mono tracking-wide
        
        /* === ESTILO KEYCAP OUTLINE === */
        bg-[#0d1117]       /* Fundo Preto */
        border-2           /* Borda fina ao redor */
        border-b-[6px]     /* Borda grossa embaixo (Altura 3D) */
        rounded-xl
        
        ${colorClass}      /* Aplica as cores definidas acima */
        
        /* === ANIMAÇÃO E INTERAÇÃO === */
        transition-all duration-100 ease-in-out
        
        /* Hover: Sobe levemente e brilha */
        hover:-translate-y-0.5
        hover:brightness-110
        
        /* Active (Clique): A borda grossa some e o botão desce */
        active:border-b-[0px]
        active:translate-y-[6px]
        active:shadow-none
        
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