import React from 'react';
import './AboutMe.css';
import PortraitImage from '../assets/Images/crest.png'

const AboutMe = () => {
  return (

    <div className="about-me">
       <div className="image-container">
        <img src={PortraitImage} alt="Portrait" className="portrait-image" />
      </div>

      <div className="text-container">
        <h1>About Me</h1>
        <p>Hello and thank you so much for checking out my website! I worked hard both to put this together and to learn how to build it from the ground up. This Website uses React Framework and is hosted through Netlify. In the contact section there is a fully functional messaging system and automated response as well as links to a number of platforms I use regularly.</p>
        <p>Something I have learned over the course of my years on this planet is that I really dont know how to talk about myself. I guess that is an issue for a lot of people huh? How do you prove your worth without bragging? How do you communicate what you stand for and who you are through words on a screen? I guess that is the first thing about me really. I have never really known how to pin myself down.</p>
        <p>But I can tell you that I am a hard worker. I am a creative thinker. I am a problem solver. I am a husband and a father to three wonderful cats. I am a business owner and a student. I am a teacher and a learner. I am a human. I love art and music and Pokémon cards. I want to experience everything the world has to offer and I want to make it a better place for everyone in it.</p>
        <p>Right now as always I am pursuing my creative passion and looking towards the futute at the same time. I have a lot to say and a lot to show the world and If you want to be a part of that then lets get connected! Feel free to send me an email from right here on my site, or follow the links to my social media. I look forward to hearing from you.</p>
      </div>
      
    </div>
  );
};

export default AboutMe;
