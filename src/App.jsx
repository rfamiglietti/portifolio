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
    // VOLTAMOS AO BG-DARK FIXO E TEXTO BRANCO
    <div className="bg-[#0d1117] min-h-screen text-white 
      pb-20      /* Mobile */
      lg:pb-0    /* Desktop */
      lg:pl-20   /* Sidebar */
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