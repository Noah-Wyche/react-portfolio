import React from 'react';

const Header = ({ activeSection, onNavClick }) => {
  return (
    <header>
      <nav>
        <ul>
          <li className={activeSection === 'about' ? 'active' : ''} onClick={() => onNavClick('about')}>About Me</li>
          <li className={activeSection === 'portfolio' ? 'active' : ''} onClick={() => onNavClick('portfolio')}>Portfolio</li>
          <li className={activeSection === 'contact' ? 'active' : ''} onClick={() => onNavClick('contact')}>Contact</li>
          <li className={activeSection === 'resume' ? 'active' : ''} onClick={() => onNavClick('resume')}>Resume</li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;