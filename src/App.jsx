import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Services from './pages/Services';
import Contact from './pages/Contact';
import AllProjects from './pages/AllProjects';
import ProjectDetails from './pages/ProjectDetails'; // IMPORTAR AQUI

// Layout padrão para a Home
const LandingPage = () => (
  <>
    <Navbar />
    <main className="w-full">
      <Home />
      <About />
      <Projects />
      <Services />
      <Contact />
    </main>
    <Footer />
  </>
);

function App() {
  return (
    <Router>
      <div className="bg-[#0d1117] min-h-screen text-white pb-20 lg:pb-0 lg:pl-20">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/all-projects" element={<AllProjects />} />
          <Route path="/project/:id" element={<ProjectDetails />} /> 
        </Routes>
      </div>
    </Router>
  );
}

export default App;