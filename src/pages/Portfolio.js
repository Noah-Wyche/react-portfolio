import React, { useState } from 'react';
import './Portfolio.css';

import legoLabImage from '../assets/Images/legoLab.png';
import savorOfTheDayImage from '../assets/Images/savorOfTheDay.png';
import weatherDashboardImage from '../assets/Images/weatherDashboard.png';
import infoSymbolImage from '../assets/Images/infoSymbol2.png';
import closeSymbolImage from '../assets/Images/closeSymbol.png';
import CommonRoomImage from '../assets/Images/CommonRoom.png';

const Portfolio = () => {
  /* Project Setup */
  const projects = [
    {
      id: 1,
      title: 'The Common Room',
      image: CommonRoomImage,
      link: 'https://thecommonroomghc.com/',
      description: 'The Common Room is my current project and the thing I am most happy to show off. It is my own storefront I am running along with my wife. We sell sticker, handmade clothing, trading cards, and more! The site is built with Shopify and is fully functional.'
    },
    {
      id: 2,
      title: 'LegoLab',
      image: legoLabImage,
      link: 'https://legolab-nfzw.onrender.com/',
      description: 'LegoLab is a full stack E-commerce site I worked on with a team of developers during a bootcamp I attended. Users can browse Lego sets that have been added to our database, add items to their cart and even create an account for consistent shopping. The site is built with React, Node.js, Express, and MongoDB. While not fully functional, our databse is fully connected and users are able to browse to their hearts content.'
    },
    {
      id: 3,
      title: 'Savor of the Day',
      image: savorOfTheDayImage,
      link: 'https://noah-wyche.github.io/Savor-of-the-Day/index.html',
      description: 'Ever wish you could just type in a couple random ingredients you have in your kitchen and get a recipe? Well, now you can! This app helps with finding new recipes, keeping track of old ones, and even has space to make a grocery list.'
    },
    {
      id: 4,
      title: 'Weather Dashboard',
      image: weatherDashboardImage,
      link: 'https://noah-wyche.github.io/Weather-Dashboard/',
      description: 'A five day weather forecast for any city in the world. Try it out! Simply enter the name of a city and click the search button. The current weather and a five day forecast will be displayed.'
    },
  ];

  const [selectedProject, setSelectedProject] = useState(null);
  const [infoBoxOpen, setInfoBoxOpen] = useState(null);
  const [moreInfoButtonsVisible, setMoreInfoButtonsVisible] = useState(Array(projects.length).fill(true));

  const handleButtonClick = (projectId, event) => {
    setSelectedProject(prevSelectedProject =>
      prevSelectedProject === projectId ? null : projectId
    );
    const projectImage = event.target.previousElementSibling;
    projectImage.classList.toggle('Highlighted');
    setInfoBoxOpen(prevInfoBoxOpen =>
      prevInfoBoxOpen === projectId ? null : projectId
    );
    updateMoreInfoButtonsVisibility(projectId);
  };

  const handleCloseButtonClick = () => {
    setSelectedProject(null);
    setInfoBoxOpen(null);
    updateMoreInfoButtonsVisibility(null);
  };

  const updateMoreInfoButtonsVisibility = (projectId) => {
    setMoreInfoButtonsVisible(prevState => {
      const newState = [...prevState];
      newState.fill(true); // Reset visibility for all buttons
      if (projectId !== null) {
        newState[projectId - 1] = false; // Hide the "More Info" button for the clicked project
      }
      return newState;
    });
  };

  return (
    <div className="PortfolioContainer">
      <h1 className="PortfolioTitle">Portfolio</h1>
      <div className="ProjectsContainer">
        {projects.map(project => (
          <div
            key={project.id}
            className={`ProjectBox ${selectedProject === project.id ? 'ProjectBoxClicked' : ''}`}
          >
            <h3 className="ProjectTitle">{project.title}</h3>
            <div className="ProjectContent">
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                <img src={project.image} alt={project.title} className="ProjectImage" />
              </a>
              {moreInfoButtonsVisible[project.id - 1] && (
                <img
                  src={infoSymbolImage} 
                  alt="More Info"
                  className={`InfoButton ${selectedProject === project.id ? 'InfoButtonClicked' : ''}`}
                  onClick={(event) => handleButtonClick(project.id, event)}
                />
              )}
            </div>
            {selectedProject === project.id && (
              <div className={`InfoBox ${infoBoxOpen === project.id ? 'visible' : ''}`}>
                <p>{project.description}</p>
                <img
                  src={closeSymbolImage}
                  alt="Close Info"
                  className={`CloseButton ${infoBoxOpen === project.id ? 'CloseButtonVisible' : ''}`}
                  onClick={handleCloseButtonClick}
                />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
