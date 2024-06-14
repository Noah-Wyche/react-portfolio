import React, { useState, useEffect } from 'react';
import './Footer.css';

const Footer = () => {
  const [showFooter, setShowFooter] = useState(false);

  useEffect(() => {
    let timeoutId;

    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const documentHeight = document.body.scrollHeight;
      const scrollTop = window.scrollY || window.pageYOffset || document.documentElement.scrollTop;
      const scrollThreshold = windowHeight * 0.3; // Adjust the factor as needed

      if (scrollTop > scrollThreshold || (windowHeight + scrollTop) >= documentHeight) {
        setShowFooter(true);
        clearTimeout(timeoutId); // Clear previous timeout
      } else {
        setShowFooter(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(timeoutId); // Clear timeout when component unmounts
    };
  }, []);

  return (
    <footer className={`Footer ${showFooter ? 'show' : ''}`}>
      <div className='footerContent'>
        <a>NoahFleetwood</a>
        <a>2024</a>
      </div>
    </footer>
  );
};

export default Footer;

