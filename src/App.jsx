// src/App.jsx
import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Services from './pages/Services';
import Contact from './pages/Contact';

function App() {
  return (
    <div className="bg-[#0d1117] min-h-screen text-white 
      pb-20      /* Mobile: Espaço para a barra inferior */
      lg:pb-0    /* Desktop: Remove espaço inferior */
      lg:pl-20   /* Desktop: Empurra o site 80px para a direita (tamanho da Sidebar) */
    ">
      
      {/* ADICIONADO: O Componente Navbar precisa estar aqui */}
      <Navbar />

      {/* Removi o pl-16 extra para o conteúdo ficar alinhado corretamente */}
      <main className="w-full"> 
        <Home />
        <About />
        <Projects />
        <Services />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

export default App;