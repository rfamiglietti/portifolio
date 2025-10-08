import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const containerVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      staggerChildren: 0.3,
    },
  },
};

const SectionWrapper = ({ id, title, subtitle, children }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.section
      id={id}
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      className="py-20 md:py-32 px-5 min-h-screen flex flex-col justify-center"
    >
      <div className="max-w-7xl mx-auto w-full">
        {title && (
          <motion.h2
            className="text-4xl md:text-5xl font-extrabold text-center mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-neon to-purple-neon font-display"
            variants={{ hidden: { opacity: 0, y: -20 }, visible: { opacity: 1, y: 0 } }}
          >
            {title}
          </motion.h2>
        )}
        {subtitle && (
          <motion.p
            className="text-xl text-gray-400 text-center mb-16"
            variants={{ hidden: { opacity: 0, y: -20 }, visible: { opacity: 1, y: 0 } }}
          >
            {subtitle}
          </motion.p>
        )}
        {children}
      </div>
    </motion.section>
  );
};

export default SectionWrapper;