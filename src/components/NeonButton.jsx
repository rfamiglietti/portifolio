import React from 'react';

const NeonButton = ({ children, primary = true, onClick, className = "" }) => {
  const colorClass = primary 
    ? "text-[#58a6ff] border-[#58a6ff] hover:bg-[#58a6ff]/10" 
    : "text-[#bc8cff] border-[#bc8cff] hover:bg-[#bc8cff]/10";
    
  return (
    <button
      onClick={onClick}
      className={`
        group relative inline-flex items-center justify-center 
        px-8 py-3 font-bold text-lg font-mono tracking-wide
        
        /* === CORPO DA TECLA === */
        bg-[#0d1117] 
        border-2 
        /* Borda de baixo fixa (sem hover effect de subir) */
        border-b-[6px]
        rounded-xl
        
        ${colorClass}
        
        /* === TRANSIÇÕES === */
        transition-all duration-100
        
        /* === ESTADO PRESSIONADO (CLIQUE) === */
        /* Remove a borda de baixo e empurra o botão para baixo */
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