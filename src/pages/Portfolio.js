import React from 'react';
import './Portfolio.css';

import legoLabImage from '../assets/Images/legoLab.png';
import savorOfTheDayImage from '../assets/Images/savorOfTheDay.png';
import weatherDashboardImage from '../assets/Images/weatherDashboard.png';

const Portfolio = () => {
  // Project data
  const projects = [
    {
      id: 1,
      title: 'LegoLab',
      image: legoLabImage,
      link: 'https://legolab-nfzw.onrender.com/',
    },
    {
      id: 2,
      title: 'Savor of the Day',
      image: savorOfTheDayImage,
      link: 'https://noah-wyche.github.io/Savor-of-the-Day/index.html',
    },
    {
      id: 3,
      title: 'Weather Dashboard',
      image: weatherDashboardImage,
      link: 'https://noah-wyche.github.io/Weather-Dashboard/',
    },
  ];

  return (
    <div className="PortfolioContainer">
      <h1 className="PortfolioTitle">Portfolio</h1>
      <div className="ProjectsContainer">
        {projects.map((project) => (
          <div key={project.id} className="ProjectBox">
            <h3 className="ProjectTitle">{project.title}</h3> {/* Move the title above the link */}
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              <img src={project.image} alt={project.title} className="ProjectImage" />
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
