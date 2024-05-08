import './App.css';
import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// Import pages
import AboutMe from './pages/AboutMe';
import Contact from './pages/Contact';
import Portfolio from './pages/Portfolio';
import Resume from './pages/Resume';

function App() {
  // Set 'portfolio' as the default active section
  const [activeSection, setActiveSection] = useState('portfolio'); // Changed the initial state to 'portfolio'

  const handleNavClick = (section) => {
    setActiveSection(section);
  };

  return (
    <div className="App">
      <Header activeSection={activeSection} onNavClick={handleNavClick} />
     
      {/* Render pages based on active section */}
      {activeSection === 'about' && <AboutMe />}
      {activeSection === 'portfolio' && <Portfolio />}
      {activeSection === 'contact' && <Contact />}
      {activeSection === 'resume' && <Resume />}
      <Footer />
      <ToastContainer />
    </div>
  );
}

export default App;