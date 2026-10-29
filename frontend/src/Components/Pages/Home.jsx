
import React from "react";
import {
  FaGithub,
  FaLinkedinIn,
  FaInstagram,
  FaEnvelope,
} from "react-icons/fa";

import "../Css/Home.css";

// Paste your Instagram profile URL here. Leave empty to hide the icon.
const INSTAGRAM_URL = "";

function Home() {
  return (
    <section className="home" id="home">
      {/* Developer background image */}
      <div className="hero-visual" aria-hidden="true"></div>

      {/* Introduction */}
      <div className="intro">
        <p className="greeting">Hey, I'm</p>

        <h1>
          Mufaddal <span>Halai</span>
        </h1>

        <h3>
          Full Stack Developer <span>|</span> IoT Enthusiast
        </h3>

        <p className="description">
          I build modern web applications and explore
          real-world tech solutions.
        </p>

        {/* Action buttons */}
        <div className="btns">
          <a href="#projects" className="btn primary-btn">
            View My Work <span className="arrow">→</span>
          </a>

          <a href="#contact" className="btn secondary-btn">
            Contact Me
          </a>
        </div>

        {/* Social media links */}
        <div className="links">
          <a
            href="https://github.com/halaimufaddal"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            title="GitHub"
          >
            <FaGithub />
          </a>

          <a
            href="https://www.linkedin.com/in/mufaddal-halai-729b812a0/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            title="LinkedIn"
          >
            <FaLinkedinIn />
          </a>

          {INSTAGRAM_URL && (
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              title="Instagram"
            >
              <FaInstagram />
            </a>
          )}

          <a
            href="mailto:halaimufaddal@gmail.com"
            aria-label="Send email"
            title="Email"
          >
            <FaEnvelope />
          </a>
        </div>

        {/* Scroll indicator */}
        {/* <a href="#about" className="scroll-down">
          <span className="mouse">
            <span className="mouse-dot"></span>
          </span>
          <span>Scroll Down</span>
        </a> */}
      </div>
    </section>
  );
}

export default Home;
