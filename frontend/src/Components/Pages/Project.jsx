import React, { useState } from "react";
import { FaArrowRight, FaArrowUp } from "react-icons/fa";

import "../Css/Project.css";

// To show images/links on a card, add any of these to a project:
//   image: "/images/your-screenshot.png"  (put the file in frontend/public/images/)
//   github: "https://github.com/..."      live: "https://..."
const projects = [
  {
    id: 1,
    title: "College Management System",
    category: "Full Stack",
    technologies: ["React", "Node.js", "MongoDB"],
    description:
      "A college management platform for organizing student profiles, attendance, academic results, and schedules.",
  },
  {
    id: 2,
    title: "E-Commerce Website",
    category: "Full Stack",
    technologies: ["Django", "MySQL"],
    description:
      "An online shopping application featuring product listings, a shopping cart, checkout, and order management.",
  },
  {
    id: 3,
    title: "Expense Tracker",
    category: "Full Stack",
    technologies: ["React", "Node.js", "MongoDB"],
    description:
      "A personal finance application for recording income and expenses, viewing transactions, and tracking spending.",
  },
  {
    id: 4,
    title: "Smart Door Lock (IoT)",
    category: "IoT",
    technologies: ["NodeMCU", "Servo", "Blynk"],
    description:
      "An IoT-based door locking prototype that uses a microcontroller and servo motor for remote access control.",
  },
  {
    id: 5,
    title: "Weather App",
    category: "Web Apps",
    technologies: ["React", "OpenWeather API"],
    description:
      "A weather application that retrieves current weather information for a selected city using a weather API.",
  },
  {
    id: 6,
    title: "Todo App",
    category: "Web Apps",
    technologies: ["MERN Stack"],
    description:
      "A task management application for creating, updating, completing, and deleting everyday tasks.",
  },
];

const filters = ["All", "Web Apps", "Full Stack", "IoT"];

function Projects() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [expandedProject, setExpandedProject] = useState(null);

  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter((project) => project.category === activeFilter);

  function toggleDescription(projectId) {
    setExpandedProject((currentId) =>
      currentId === projectId ? null : projectId
    );
  }

  return (
    <section className="projects-section" id="projects">
      <header className="projects-header">
        <h2>My Projects</h2>
        <p>Some of the projects I've built to learn and solve real problems.</p>
      </header>

      <div className="project-filters" aria-label="Filter projects">
        {filters.map((filter) => (
          <button
            type="button"
            key={filter}
            className={`filter-btn ${
              activeFilter === filter ? "active" : ""
            }`}
            aria-pressed={activeFilter === filter}
            onClick={() => {
              setActiveFilter(filter);
              setExpandedProject(null);
            }}
          >
            {filter}
          </button>
        ))}
      </div>

      <div className="projects-grid">
        {filteredProjects.map((project) => {
          const isExpanded = expandedProject === project.id;

          return (
            <article
              className={`project-card ${isExpanded ? "expanded" : ""}`}
              key={project.id}
            >
              {project.image ? (
                <img
                  className="project-image"
                  src={project.image}
                  alt={`${project.title} preview`}
                  loading="lazy"
                />
              ) : (
                <div className="project-image project-image-placeholder" aria-hidden="true">
                  <span>{project.title.split(" ").map((w) => w[0]).slice(0, 2).join("")}</span>
                </div>
              )}

              <div className="project-content">
                <h3>{project.title}</h3>

                <div className="project-bottom">
                  <div className="project-tech">
                    {project.technologies.map((tech, index) => (
                      <React.Fragment key={tech}>
                        {index > 0 && (
                          <span className="tech-separator">·</span>
                        )}
                        <span>{tech}</span>
                      </React.Fragment>
                    ))}
                  </div>

                  <button
                    type="button"
                    className="project-toggle"
                    aria-label={
                      isExpanded
                        ? `Hide ${project.title} description`
                        : `Show ${project.title} description`
                    }
                    aria-expanded={isExpanded}
                    onClick={() => toggleDescription(project.id)}
                  >
                    {isExpanded ? <FaArrowUp /> : <FaArrowRight />}
                  </button>
                </div>

                {isExpanded && (
                  <div className="project-description">
                    <p>{project.description}</p>

                    {(project.github || project.live) && (
                      <div className="project-links">
                        {project.github && (
                          <a href={project.github} target="_blank" rel="noopener noreferrer">
                            GitHub
                          </a>
                        )}
                        {project.live && (
                          <a href={project.live} target="_blank" rel="noopener noreferrer">
                            Live Demo
                          </a>
                        )}
                      </div>
                    )}
                  </div>
                )}
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}

export default Projects;
