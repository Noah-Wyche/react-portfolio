import React from 'react';

const Content = ({ activeSection }) => {
  return (
    <main>
      {activeSection === 'about' && <AboutMe />}
      {activeSection === 'portfolio' && <Portfolio />}
      {activeSection === 'contact' && <Contact />}
      {activeSection === 'resume' && <Resume />}
    </main>
  );
};

export default Content;