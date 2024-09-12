import React from 'react';
import './Resume.css';
import Resumeimage from '../assets/Images/ResumeSeptember2024.png'
import Certificateimage from '../assets/Images/codeCert.png'

const Resume = () => {
  return (
    <div className="ResumeContainer">
      <h1 className="ResumeTitle">Resume</h1>
      <p className="ResumeContent">My Proffesional Resume</p>
      <img src={Resumeimage} alt="Resume" className="resume-image" />
      <p className="CertificateContent">My Coding Bootcamp Certificate</p>
      <img src={Certificateimage} alt="Coding Certificate" className="certificate-image" />
    </div>
  );
};

export default Resume;

