import { useEffect, useState } from "react";

const Hero = () => {
  // Read correct theme on first render
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "dark");

  useEffect(() => {
    const updateTheme = () => {
      setTheme(localStorage.getItem("theme") || "dark");
    };

    window.addEventListener("theme-change", updateTheme);

    return () => {
      window.removeEventListener("theme-change", updateTheme);
    };
  }, []);

  return (
    <section id="home" className="hero">
      <div className="hero-container">
        <div className="hero-content" data-aos="fade-right">
          <h1 data-aos="fade-up">HELLO, I'M <br />AHMAD HASSAN</h1>
          <h2 data-aos="fade-up" data-aos-delay="200">
            FULL STACK DEVELOPER
          </h2>
          <p data-aos="fade-up" data-aos-delay="400">
            I create elegant and functional digital experiences. Specializing in
            modern web technologies, I transform ideas into beautifully crafted
            applications that make an impact.
          </p>

          <div className="hero-buttons">
            <a
              href="/AHMAD-HASSAN-Cv26.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              View Resume
            </a>
            <a href="#contact" className="btn btn-secondary">
              Contact Me
            </a>
          </div>
        </div>

        <div className="hero-image" data-aos="fade-left">
          <img
            src={theme === "light" ? "/lightPerson.png" : "/ahmi.png"}
            alt="Profile"
            className="hero-img"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;