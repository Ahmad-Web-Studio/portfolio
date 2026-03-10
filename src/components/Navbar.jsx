import { useEffect, useState } from "react";

const Navbar = () => {
  const [theme, setTheme] = useState("dark");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    // Load saved theme
    const savedTheme = localStorage.getItem("theme") || "dark";
    setTheme(savedTheme);
    document.body.setAttribute("data-theme", savedTheme);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";

    setTheme(newTheme);
    document.body.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);

    // 🔥 IMPORTANT: notify other components instantly
    window.dispatchEvent(new Event("theme-change"));
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    document.body.classList.toggle("menu-open", !menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
    document.body.classList.remove("menu-open");
  };

  return (
    <nav className="navbar">
      <div className="nav-container">
        {/* Logo */}
        <div className="logo">
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
            <rect
              x="3"
              y="4"
              width="18"
              height="12"
              rx="2"
              stroke="currentColor"
              strokeWidth="2"   
            />
            <path d="M2 18h20" stroke="currentColor" strokeWidth="2" />
            <path d="M9 21h6" stroke="currentColor" strokeWidth="2" />
          </svg>
          <span>WebDev</span>
        </div>

        {/* Nav Links */}
        <ul className={`nav-links ${menuOpen ? "active" : ""}`}>
          <li>
            <a href="#home" onClick={closeMenu}>
              HOME
            </a>
          </li>
          <li>
            <a href="#services" onClick={closeMenu}>
              SERVICES
            </a>
          </li>
          <li>
            <a href="#skills" onClick={closeMenu}>
              SKILLS
            </a>
          </li>
          <li>
            <a href="#projects" onClick={closeMenu}>
              PROJECTS
            </a>
          </li>
          <li>
            <a href="#contact" onClick={closeMenu}>
              CONTACT
            </a>
          </li>
        </ul>

        {/* Right Side */}
        <div className="nav-right">
          {/* Theme Toggle */}
          <button
            className="theme-toggle"
            onClick={toggleTheme}
            aria-label="Toggle theme"
          >
            <i className={`fas ${theme === "dark" ? "fa-sun" : "fa-moon"}`}></i>
          </button>

          {/* Mobile Menu Toggle */}
          <button
            className={`menu-toggle ${menuOpen ? "active" : ""}`}
            onClick={toggleMenu}
            aria-label="Toggle menu"
          > 
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
