import React from 'react';
import './AboutMe.css';
import PortraitImage from '../assets/Images/Crest.jpeg'

const AboutMe = () => {
  return (

    <div className="about-me">
       <div className="image-container">
        <img src={PortraitImage} alt="Portrait" className="portrait-image" />
      </div>

      <div className="text-container">
        <h1>About Me</h1>
        <p>Hello World, my name is Noah Fleetwood and I finally feel that I have found my calling. For many years I have struggled to find my place in this world that seemed to operate in so many strange and unpredictable ways. Over the years I have found myself to have quite and inquisitive mind and in many ways my hunt for knowledge and experiences never truly ends. I feel proud to be able to put my own designs and ideas into the world through Programming and Web Development.</p>
        <p>I remember very clearly a conversation I was having with a friend on the back porch of a party as we were talking about careers and the struggles we were facing. In that moment something clicked for me, "I should just quit this job and learn how to code" I told him. From there I couldnt let go of the feeling that this was exactly what I needed to do with my life. It felt so right that I just couldnt wait to get started. Thinking back to that day and seeing myself today with everything I have learned and accomplished fills me with pride. I am lucky to be able to pursue what I am passionate about and hopefully make the world just a little bit better along the way.</p>
        <p>Outside of programming I have also had a long list of interests in my endless quest to find fullfillment on our beautiful blue marble. To no ones suprise I love playing video games and have had a passion for them for my whole life. I especially love games with rich and detailed worlds, filled with subtle lore and storytelling through actual gameplay. Some of my all time favorites are Elden Ring, Skyrim, and Assassins Creed Odyssey. Slightly less predictably I am also a huge fan of Dungeons and Dragons and have been a Dungeon Master for various groups and campaigns over the years. When I am not taken in with fantasy worlds, and I suppose often times even when I am, you can find me spending time with my wonderful wife. Its impossible to talk about myself without talking about her and I am incredibly proud of that fact. We currently rent a home together in Cary North Carolina, but we have dreams of travelling all over the world. Together we have sunk hundreds of hours into deep conversation, intense problem solving but also intense play. Without a doubt I wouldnt be where I am without her by my side.</p>
        <p>Proffesionally, my horizons are wide before me. I have ambitions of working in this space for many years and now I just need to find a place to call home. I am always looking for additional opportunities, and if you are intrigued by my designs and want to discuss my services with me further, feel free to fill out a contact request in the "Contact" page of this Website. I look forward to hearing from you, and if I dont see you, good afternoon, good evening and goodnight.</p>
      </div>
    </div>
  );
};

export default AboutMe;
