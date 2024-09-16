import React from 'react';
import "./Footer.css";

const Footer = () => {
  return (
    <div className='Footer'>
      <div className="footertext">
        Get In Touch
      </div>

      <div className="socials">
        <div className="insta">
          <a href="https://www.instagram.com/sauravdutta02?igsh=MThsc2lub2NjZmNrcw==" target="_blank" rel="noopener noreferrer">
            <i className="fa-brands fa-instagram"></i>
          </a>
        </div>
        <div className="linkedin">
          <a href="https://www.linkedin.com/in/saurav-dutta-450355315/" target="_blank" rel="noopener noreferrer">
            <i className="fa-brands fa-linkedin"></i>
          </a>
        </div>
        <div className="github">
          <a href="https://github.com/SauravDutta002" target="_blank" rel="noopener noreferrer">
            <i className="fa-brands fa-github"></i>
          </a>
        </div>
      </div>

      <div className="copyright">
        &copy; {new Date().getFullYear()} Saurav Dutta. All rights reserved.
      </div>
    </div>
  );
};

export default Footer;
