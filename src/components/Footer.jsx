import React from "react";

const Footer = () => {
  return (
    <footer>
      <div className="footer-container">
        <div className="footer-section">
          <h3>About</h3>
          <p>
            A passionate developer dedicated to creating exceptional digital experiences that make a difference.
          </p>
          <div className="social-links">
            <a href="https://github.com/Ahmad-Web-Studio" aria-label="GitHub"><i className="fab fa-github"></i></a>
            <a href="#" aria-label="LinkedIn"><i className="fab fa-linkedin"></i></a>
            <a href="#" aria-label="Twitter"><i className="fab fa-twitter"></i></a>
            <a href="#" aria-label="Dribbble"><i className="fab fa-dribbble"></i></a>
          </div>
        </div>
        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul className="footer-links">
            <li><a href="#home">Home</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Contact</h3>
          <p><i className="fas fa-envelope"></i> ahmadhassan.me7@gmail.com</p>
          <p><i className="fas fa-phone"></i> +923469056212</p>
          <p><i className="fas fa-map-marker-alt"></i> Gujrat, Pakistan</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
