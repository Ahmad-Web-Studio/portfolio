import { useEffect } from "react";

const Skills = () => {

  useEffect(() => {
    const observerOptions = { threshold: 0.5 };
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const progressBars = entry.target.querySelectorAll('.skill-progress');
          progressBars.forEach(bar => {
            const width = bar.getAttribute('data-width');
            setTimeout(() => bar.style.width = width + '%', 100);
          });
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    const skillsSection = document.querySelector('#skills .skills-grid');
    if (skillsSection) observer.observe(skillsSection);

  }, []);

  const skills = [
    { name: "HTML & CSS", value: 95 },
    { name: "JavaScript", value: 90 },
    { name: "React", value: 88 },
    { name: "Node.js", value: 85 },
    { name: "UI/UX Design", value: 92 },
    { name: "Python", value: 80 },
    { name: "Database Design", value: 87 },
    { name: "Git & DevOps", value: 83 }
  ];

  return (
    <section id="skills">
      <div className="section-container">
        <div className="section-header" data-aos="fade-up">
          <h2>SKILLS</h2>
          <p>Technologies and tools I work with</p>
        </div>

        <div className="skills-grid">
          {[0,1].map(col => (
            <div key={col} data-aos="fade-up" data-aos-delay={col * 200}>
              {skills.slice(col*4, col*4+4).map((skill, i) => (
                <div className="skill-item" key={i} data-aos="fade-up" data-aos-delay={i * 100}>
                  <div className="skill-header">
                    <span className="skill-name">{skill.name}</span>
                    <span className="skill-percentage">{skill.value}%</span>
                  </div>
                  <div className="skill-bar">
                    <div className="skill-progress" data-width={skill.value}></div>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;