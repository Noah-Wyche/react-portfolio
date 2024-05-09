import React from 'react';
import './Resume.css';
import Resumeimage from '../assets/Images/Fleetwood-Resume.png'
import Certificateimage from '../assets/Images/codeCert.png'

const Resume = () => {
  return (
    <div className="ResumeContainer">
      <h1 className="ResumeTitle">Resume</h1>
      <p className="ResumeContent"></p>
      <img src={Resumeimage} alt="Resume" className="resume-image" />
      <img src={Certificateimage} alt="Coding Certificate" className="certificate-image" />
    </div>
  );
};

export default Resume;

