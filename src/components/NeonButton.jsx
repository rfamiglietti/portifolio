import React from 'react';

const NeonButton = ({ children, primary = true, onClick, className = "" }) => {
  const colorClass = primary 
    ? "text-[#58a6ff] border-[#58a6ff] hover:bg-[#58a6ff]/5" 
    : "text-[#bc8cff] border-[#bc8cff] hover:bg-[#bc8cff]/5";
    
  return (
    <button
      onClick={onClick}
      className={`
        group relative inline-flex items-center justify-center 
        px-8 py-3 font-bold text-lg font-mono tracking-wide
        
        /* === ESTRUTURA === */
        bg-[#0d1117] 
        border-2 
        border-b-[6px] /* A altura da tecla */
        rounded-xl
        
        ${colorClass}
        
        /* === ANIMAÇÃO MECÂNICA === */
        transition-all duration-100 cubic-bezier(0.4, 0, 0.2, 1)
        
        /* Hover: Apenas brilha, não move */
        hover:brightness-125
        
        /* Active (Clique): Afunda fisicamente */
        active:border-b-[0px] 
        active:translate-y-[6px] 
        active:brightness-90
        
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