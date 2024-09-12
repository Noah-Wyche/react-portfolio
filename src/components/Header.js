import React from 'react';
import './Header.css';

const Header = ({ activeSection, onNavClick }) => {
  return (
    <header>
      <h1 className='Header'>Noah Fleetwood</h1>
      <nav className='navBar'>
        <ul>
          <li className={activeSection === 'portfolio' ? 'active' : ''}>
            <button onClick={() => onNavClick('portfolio')}>Portfolio</button>
          </li>
          <li className={activeSection === 'contact' ? 'active' : ''}>
            <button onClick={() => onNavClick('contact')}>Contact</button>
          </li>
          <li className={activeSection === 'resume' ? 'active' : ''}>
            <button onClick={() => onNavClick('resume')}>Resume</button>
          </li>
        </ul>
      </nav>
    </header>
  );
};


export default Header;