import React from "react";
import {
  FaGraduationCap,
  FaMapMarkerAlt,
  FaUserGraduate,
} from "react-icons/fa";

import "../Css/About.css";

function About() {
  return (
    <>
      <section className="about-container" id="about">
        <div className="image_section">
          <img
            src="/profile.jpg"
            alt="Mufaddal Halai"
            onError={(e) => {
              // Falls back to a placeholder until you add public/profile.jpg
              e.currentTarget.onerror = null;
              e.currentTarget.src = "/profile-placeholder.svg";
            }}
          />
        </div>

        <div className="my_desc">
          <h2>About Me</h2>

          <p className="about-intro">
            I'm Mufaddal Halai, a final year B.Tech student in
            Computer Science & Engineering (IoT) at GCET Anand.
            I'm passionate about building real-world web applications,
            learning new technologies and solving problems.
          </p>

          <div className="cards">
            <div className="info-card">
              <FaGraduationCap className="info-icon education-icon" />
              <h5>Education</h5>
              <p>B.Tech CSE (IoT)</p>
              <p>GCET, Anand</p>
              <p>2023 - 2027</p>
            </div>

            <div className="info-card">
              <FaMapMarkerAlt className="info-icon location-icon" />
              <h5>Location</h5>
              <p>Mundra, Kutch</p>
              <p>Gujarat, India</p>
            </div>

            <div className="info-card">
              <FaUserGraduate className="info-icon cgpa-icon" />
              <h5>Current CGPA</h5>
              <p>8.48</p>
              <p>Semester 7</p>
            </div>
          </div>
        </div>
      </section>

      <section className="works">
        <h2>What I Do</h2>

        <div className="work-list">
          <div className="work-item">MERN Stack Applications</div>
          <div className="work-item">IoT Projects</div>
          <div className="work-item">Problem Solving</div>
        </div>
      </section>
    </>
  );
}

export default About;
