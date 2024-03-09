import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import Header from './components/Header';
import Content from './components/Content';
import Footer from './components/Footer';

function App() {
  const [activeSection, setActiveSection] = useState('about');

  const handleNavClick = (section) => {
    setActiveSection(section);
  };

  return (
    <div className="App">
      <Header activeSection={activeSection} onNavClick={handleNavClick} />
      <div className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </div>
      <Content activeSection={activeSection} />
      <Footer />
    </div>
  );
}

export default App;
