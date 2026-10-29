
import React from "react";

import {
  SiHtml5,
  SiCss,
  SiJavascript,
  SiReact,
  SiTailwindcss,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiMysql,
  SiGit,
  SiGithub,
  SiFigma,
  SiArduino,
  SiEspressif,
} from "react-icons/si";

import {
  FaCode,
  FaLaptopCode,
  FaPaperPlane,
} from "react-icons/fa";



import "../Css/Skills.css";

const skillGroups = [
  {
    title: "Frontend",
    className: "frontend",
    skills: [
      { name: "HTML", icon: SiHtml5, color: "#ff5733" },
      { name: "CSS", icon: SiCss, color: "#1685f8" },
      { name: "JavaScript", icon: SiJavascript, color: "#f7df1e" },
      { name: "React", icon: SiReact, color: "#00d8ff" },
      { name: "Tailwind CSS", icon: SiTailwindcss, color: "#38bdf8" },
    ],
  },
  {
    title: "Backend",
    className: "backend",
    skills: [
      { name: "Node.js", icon: SiNodedotjs, color: "#68a063" },
      { name: "Express.js", icon: SiExpress, color: "#d6dce5" },
      { name: "MongoDB", icon: SiMongodb, color: "#47a248" },
      { name: "MySQL", icon: SiMysql, color: "#00758f" },
    ],
  },
  {
    title: "Tools & Others",
    className: "tools",
    skills: [
      { name: "Git", icon: SiGit, color: "#f05032" },
      { name: "GitHub", icon: SiGithub, color: "#f1f5f9" },
      { name: "VS Code", icon: FaLaptopCode, color: "#1685f8" },
      { name: "Postman", icon: FaPaperPlane, color: "#ff6c37" },
      { name: "Figma", icon: SiFigma, color: "#f24e1e" },
    ],
  },
  {
    title: "IoT & Embedded",
    className: "iot",
    skills: [
      { name: "Arduino", icon: SiArduino, color: "#00979d" },
      { name: "NodeMCU", icon: SiEspressif, color: "#d6dce5" },
      { name: "ESP32", icon: SiEspressif, color: "#d6dce5" },
      { name: "Embedded C", icon: FaCode, color: "#38bdf8" },
    ],
  },
];

function Skills() {
  return (
    <section className="skills-section" id="skills">
      <header className="skills-header">
        <h2>My Skills</h2>
        <p>Technologies and tools I work with</p>
      </header>

      <div className="skills-grid">
        {skillGroups.map((group) => (
          <div
            className={`skill-category ${group.className}`}
            key={group.title}
          >
            <h3>{group.title}</h3>

            <div className="skill-items">
              {group.skills.map((skill) => {
                const Icon = skill.icon;

                return (
                  <div className="skill-item" key={skill.name}>
                    <Icon
                      className="skill-icon"
                      style={{ color: skill.color }}
                      aria-hidden="true"
                    />

                    <span>{skill.name}</span>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
