import React from 'react';
import './Resume.css';
import Resumeimage from '../assets/Images/ResumeSeptember2024.png'
import Certificateimage from '../assets/Images/codeCert.png'

const Resume = () => {
  return (
    <div className="ResumeContainer">
      <h1 className="ResumeTitle">Resume</h1>
      <p className="ResumeContent">My Proffesional Resume</p>
      <p className="ResumeContent">If you have any questions concerning my experience or relevant information feel free to shoot me an email, or simply use the automatic email function, both listed on the 'Contact' page of this site.</p>
      <img src={Resumeimage} alt="Resume" className="resume-image" />
      <p className="CertificateContent">My Coding Bootcamp Certificate</p>
      <p className="CertificateContent">This certificate is a testament to my dedication to learning and mastering the skills needed to be a successful full-stack developer. After completing the program my drive has only grown to become the best version of myself that I can be.</p>
      <img src={Certificateimage} alt="Coding Certificate" className="certificate-image" />
    </div>
  );
};

export default Resume;

