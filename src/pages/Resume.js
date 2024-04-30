import React from 'react';
import './Resume.css';
import Resumeimage from '../assets/Images/Resume.png'

const Resume = () => {
  return (
    <div className="ResumeContainer">
      <h1 className="ResumeTitle">Resume</h1>
      <p className="ResumeContent"></p>
      <img src={Resumeimage} alt="Resume" className="resume-image" />
    </div>
  );
};

export default Resume;

