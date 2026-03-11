import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Projects = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  const projects = [
    {
      icon: "fa-laptop-code",
      title: "Interprise Website",
      desc: "VisionBird Technology",
      link: "https://visionbirdsite.netlify.app/",
    },
    {
      icon: "fa-mobile-screen",
      title: "Portfolio Website",
      desc: "Cross-platform mobile app...",
      link: "https://ahmadhassan-web.netlify.app/",
    },
    {
      icon: "fa-chart-pie",
      title: "E-commerece Website",
      desc: "Dawacare Pharmacy",
      link: "https://dawacare.netlify.app/",
    },
    {
      icon: "fa-blog",
      title: "Content Management System",
      desc: "Custom CMS with rich text editor...",
      link: "#",
    },
  ];

  return (
    <section id="projects">
      <div className="section-container">
        <div className="section-header" data-aos="fade-up">
          <h2>Projects</h2>
          <p>Some of my recent work</p>
        </div>

        <div className="projects-grid">
          {projects.map((project, i) => (
            <div
              className="project-card"
              key={i}
              data-aos="zoom-in"
              data-aos-delay={i * 200}
            >
              <div className="project-image">
                <i className={`fas ${project.icon}`}></i>
              </div>

              <div className="project-info">
                <h3>{project.title}</h3>
                <p>{project.desc}</p>

                <a
                  href={project.link}
                  className="project-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Project <i className="fas fa-arrow-right"></i>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
