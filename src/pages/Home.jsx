import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedinIn, FaInstagram, FaArrowRight, FaFileDownload, FaVolumeUp, FaVolumeMute } from 'react-icons/fa';
import { Link as ScrollLink } from 'react-scroll';
import SectionWrapper from '../components/SectionWrapper';
import NeonButton from '../components/NeonButton';

const Home = () => {
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [delta, setDelta] = useState(100);
  
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef(null);

  const toRotate = ["Full Stack Developer", "React & Django", "Engenharia de Software"];
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => clearInterval(ticker);
  }, [text, delta]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting 
      ? fullText.substring(0, text.length - 1) 
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setDelta(100);
    }
  };

  const toggleAudio = () => {
    setIsMuted(!isMuted);
    if(videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
    }
  };

  const socialLinks = [
    { icon: FaGithub, href: 'https://github.com/rfamiglietti' },
    { icon: FaLinkedinIn, href: 'https://linkedin.com/in/romulopfami' },
    { icon: FaInstagram, href: 'https://www.instagram.com/r_famiglietti' },
  ];

  const container = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <SectionWrapper id="home" className="min-h-screen flex items-center justify-center pt-0 relative overflow-hidden">
      
      {/* Background Decorativo */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-blue-neon/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[400px] h-[400px] bg-purple-neon/10 rounded-full blur-[100px]" />
      </div>

      {/* Layout Centralizado (max-w-5xl) */}
      <div className="w-full max-w-5xl mx-auto flex flex-col lg:flex-row items-center justify-between relative z-10 px-4">
        
        {/* Lado Esquerdo (Texto) */}
        <motion.div
          variants={container}
          initial="hidden"
          animate="visible"
          className="lg:w-1/2 text-center lg:text-left z-20"
        >
          <motion.div variants={item} className="mb-4 inline-block px-3 py-1 bg-[#161b22] border border-gray-700 rounded-full">
             <span className="font-mono text-gray-400 text-sm">
               // Welcome to my portfolio
             </span>
          </motion.div>

          <motion.h1
            className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight font-display text-white"
            variants={item}
          >
            Rômulo <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-neon to-purple-neon">Famiglietti</span>
          </motion.h1>

          <motion.div variants={item} className="h-8 mb-6 font-mono text-xl md:text-2xl text-gray-300">
            &gt; {text}
            <span className="animate-pulse text-purple-neon">|</span>
          </motion.div>

          <motion.p className="text-lg text-gray-400 mb-8 max-w-xl mx-auto lg:mx-0 leading-relaxed" variants={item}>
            Desenvolvedor em formação em <strong className="text-white">Engenharia de Software</strong>, com foco em desenvolvimento web e construção de aplicações eficientes. 
            Experiência com <strong className="text-blue-neon">Python, React, SQL Server</strong> e outras tecnologias, criando interfaces modernas e sistemas bem estruturados. 
            Busco unir qualidade técnica, boa experiência do usuário e código limpo, com mentalidade prática e foco em resolução de problemas.
          </motion.p>

          <motion.div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-10" variants={item}>
            <ScrollLink to="projects" smooth={true} duration={500} offset={-80}>
              <NeonButton primary={true}>
                <span className="flex items-center gap-2">
                  Ver Projetos <FaArrowRight />
                </span>
              </NeonButton>
            </ScrollLink>
            
            <a href="romulofamiglietti_curriculo.pdf" download="romulofamiglietti_curriculo.pdf">
              <NeonButton primary={false}>
                <span className="flex items-center gap-2">
                  Baixar Currículo <FaFileDownload />
                </span>
              </NeonButton>
            </a>
          </motion.div>

          <motion.div className="flex gap-6 justify-center lg:justify-start" variants={item}>
            {socialLinks.map((link, index) => (
              <motion.a
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl text-gray-400 hover:text-white transition-colors duration-300"
                whileHover={{ scale: 1.2, color: '#58a6ff' }}
                whileTap={{ scale: 0.9 }}
              >
                <link.icon />
              </motion.a>
            ))}
          </motion.div>
        </motion.div>

        {/* Lado Direito (VÍDEO) */}
        <motion.div
          className="lg:w-1/2 mt-16 lg:mt-0 flex justify-center lg:justify-end"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <div className="flex flex-col items-center gap-6 lg:-mt-24">
            
            {/* CONTAINER */}
            <div className="relative w-80 h-64 md:w-80 md:h-80 group">
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-blue-neon to-purple-neon opacity-20 blur-3xl group-hover:opacity-40 transition-opacity duration-500 animate-pulse"></div>
              
              <div className="relative w-full h-full rounded-3xl border-4 border-gray-800 group-hover:border-blue-neon transition-colors duration-500 shadow-2xl overflow-hidden bg-black">
                <video
                  ref={videoRef}
                  autoPlay
                  loop
                  muted={isMuted}
                  playsInline
                  poster="./imgperfil2.jpeg"
                  className="w-full h-full object-cover transform scale-[1.50] -translate-y-12"
                >
                  <source src="./pixel-art.mp4" type="video/mp4" />
                  Seu navegador não suporta vídeos.
                </video>
              </div>
            </div>

            {/* Botão de Som */}
            <button 
              onClick={toggleAudio}
              className="flex items-center gap-3 px-6 py-2 rounded-full bg-[#161b22] border border-gray-700 text-gray-300 hover:border-blue-neon hover:text-blue-neon hover:bg-blue-neon/10 transition-all shadow-lg"
            >
              {isMuted ? <FaVolumeMute size={18} /> : <FaVolumeUp size={18} />}
              <span className="text-sm font-mono font-bold tracking-wide">
                {isMuted ? "ATIVAR SOM" : "MUTAR"}
              </span>
            </button>

          </div>
        </motion.div>

      </div>
    </SectionWrapper>
  );
};

export default Home;