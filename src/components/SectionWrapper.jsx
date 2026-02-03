import React from 'react';
import { motion } from 'framer-motion';

const SectionWrapper = ({ children, id }) => {
  return (
    <section 
      id={id} 
      className="relative w-full min-h-screen mx-auto px-4 sm:px-10 py-20 overflow-hidden flex flex-col justify-center"
    >
      {/* O py-20 garante espaço em cima e embaixo para não colar nas bordas */}
      {children}
    </section>
  );
};

export default SectionWrapper;