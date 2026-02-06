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
  
  // Estado para controlar o som do vídeo
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

      <div className="w-full max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between relative z-10 px-4">
        
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
            
            <a href="cvportifolio.pdf" download="Romulo_CV.pdf">
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
          
          className="lg:w-1/2 mt-16 lg:mt-0 flex justify-center lg:justify-end lg:pl-16"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          {/* Aumentei o tamanho de w-96 para w-[450px] (aprox) para ficar maior */}
          <div className="relative w-80 h-80 md:w-[480px] md:h-[480px] group">
            
            {/* Glow de fundo */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-blue-neon to-purple-neon opacity-20 blur-3xl group-hover:opacity-40 transition-opacity duration-500 animate-pulse"></div>
            
            {/* Container Redondo do Vídeo */}
            <div className="relative w-full h-full rounded-full border-4 border-gray-800 group-hover:border-blue-neon transition-colors duration-500 shadow-2xl overflow-hidden bg-black">
              
              {/* VÍDEO TAG */}
              <video
                ref={videoRef}
                autoPlay
                loop
                muted={isMuted} // Começa mudo por obrigação do navegador
                playsInline
                className="w-full h-full object-cover scale-110" // scale-110 remove bordas pretas se houver
              >
                {/* Certifique-se de colocar o arquivo na pasta public/portifolio/pixel-art.mp4 */}
                <source src="/portifolio/public/pixel-art.mp4" type="video/mp4" />
                Seu navegador não suporta vídeos.
              </video>

              {/* Botão de Controle de Som */}
              <button 
                onClick={toggleAudio}
                className="absolute bottom-6 right-6 p-3 rounded-full bg-black/60 text-white hover:bg-blue-neon hover:text-black transition-all border border-white/20 hover:scale-110 z-30"
                title={isMuted ? "Ativar Som" : "Mudo"}
              >
                {isMuted ? <FaVolumeMute size={20} /> : <FaVolumeUp size={20} />}
              </button>

            </div>
          </div>
        </motion.div>

      </div>
    </SectionWrapper>
  );
};

export default Home;