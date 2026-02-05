import React from 'react';

const NeonButton = ({ children, primary = true, onClick, className = "" }) => {
  // Cores baseadas no seu tema
  const textColor = primary ? "text-[#58a6ff]" : "text-gray-200";
  const hoverColor = primary ? "group-hover:text-[#bc8cff]" : "group-hover:text-white";
  
  return (
    <button
      onClick={onClick}
      className={`
        group relative inline-flex items-center justify-center 
        px-8 py-3 font-bold text-lg font-mono tracking-wide
        
        /* === CORPO DA TECLA === */
        bg-[#21262d] 
        text-white
        border border-[#30363d] 
        
        /* === EFEITO 3D (Borda Grossa Embaixo) === */
        border-b-[6px] border-b-[#0d1117] 
        rounded-xl
        
        /* === TRANSIÇÕES === */
        transition-all duration-100 ease-in-out
        
        /* === ESTADO PRESSIONADO (ACTIVE) === */
        /* A tecla desce, a borda grossa some e a sombra diminui */
        active:border-b-[2px] 
        active:translate-y-[4px] 
        active:shadow-none
        
        /* === ESTADO HOVER === */
        hover:bg-[#30363d]
        shadow-lg shadow-black/40
        
        ${className}
      `}
    >
      <span className={`flex items-center gap-2 transition-colors ${textColor} ${hoverColor}`}>
        {children}
      </span>
    </button>
  );
};

export default NeonButton;