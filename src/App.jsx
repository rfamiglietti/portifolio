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
    <div className="min-h-screen transition-colors duration-300 
      bg-gray-50 text-gray-900 
      dark:bg-[#0d1117] dark:text-white
      
      pb-20      /* Mobile: Espaço barra inferior */
      lg:pb-0    /* Desktop: Sem espaço inferior */
      lg:pl-20   /* Desktop: Espaço sidebar */
    ">
      
      <Navbar />

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