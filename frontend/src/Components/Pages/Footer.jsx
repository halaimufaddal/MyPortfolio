
import React from "react";
import {
  FaGithub,
  FaLinkedinIn,
  FaInstagram,
  FaEnvelope,
  FaMapMarkerAlt,
  FaArrowRight,
  FaArrowUp,
} from "react-icons/fa";

import "../Css/Footer.css";

// Paste your Instagram profile URL here (e.g. "https://www.instagram.com/yourname/"). Leave empty to hide the icon.
const INSTAGRAM_URL = "";

const quickLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

const year = new Date().getFullYear();

function Footer() {
  return (
    <footer className="portfolio-footer">
      <div className="footer-main">
        {/* Brand */}
        <div className="footer-brand">
          <a href="#home" className="footer-logo">
            Mufaddal.
          </a>

          <p className="footer-role">
            Full Stack Developer&nbsp; | &nbsp;IoT Enthusiast
          </p>

          <p className="footer-tagline">
            Building real-world solutions.
          </p>

          <div className="footer-socials">
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
              aria-label="Email"
              title="Email"
            >
              <FaEnvelope />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <nav className="footer-navigation" aria-label="Footer navigation">
          <h3>Quick Links</h3>

          <ul>
            {quickLinks.map((link) => (
              <li key={link.label}>
                <a href={link.href}>
                  <FaArrowRight aria-hidden="true" />
                  <span>{link.label}</span>
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Contact Information */}
        <div className="footer-contact">
          <h3>Contact Info</h3>

          <div className="footer-contact-item">
            <FaMapMarkerAlt aria-hidden="true" />
            <span>Mundra, Gujarat, India</span>
          </div>

          <a
            className="footer-contact-item"
            href="mailto:halaimufaddal@gmail.com"
          >
            <FaEnvelope aria-hidden="true" />
            <span>halaimufaddal@gmail.com</span>
          </a>

          <div className="footer-contact-item">
            <span className="footer-phone-icon">☎</span>
            <span>+91 7567342733</span>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        <p>
          © {year} Mufaddal Halai. All rights reserved.
        </p>

        <a href="#home" className="back-to-top">
          <FaArrowUp aria-hidden="true" />
          <span>Back to top</span>
        </a>
      </div>
    </footer>
  );
}

export default Footer;
