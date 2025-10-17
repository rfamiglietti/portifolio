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
    <div className="min-h-screen overflow-x-hidden text-gray-900 dark:text-white">
      {/* Navbar será a Sidebar fixa */}
      <Navbar /> 

      {/* ALTERAÇÃO: Remevido: o padding-top. 
         Adicionado: padding-left (pl-0) que será grande (pl-20) apenas no desktop.
         O padding é adicionado na classe 'lg:pl-[80px]' (ou pl-20) 
         para afastar o conteúdo da Sidebar. */}
      <main className="pl-0 lg:pl-16"> 
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