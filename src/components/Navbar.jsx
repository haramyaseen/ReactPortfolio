import { useState } from "react";
import "./Navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <nav className={`navbar ${menuOpen ? "menu-open" : ""}`}>
      <a href="#home" className="logo" onClick={closeMenu}>
        HY<span>.</span>
      </a>

      {/* Desktop Navigation */}
      <div className="nav-links">
        <a href="#about">ABOUT</a>
        <a href="#work">WORK</a>
        <a href="#skills">SKILLS</a>
        <a href="#contact">CONTACT</a>
      </div>

      {/* Desktop Let's Talk */}
      <a href="#contact" className="talk-button">
        LET'S TALK ↗
      </a>

      {/* Mobile Menu Button */}
      <button
        className="menu-toggle"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle navigation menu"
        aria-expanded={menuOpen}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      {/* Mobile Navigation */}
      <div className={`mobile-menu ${menuOpen ? "active" : ""}`}>
        <a href="#about" onClick={closeMenu}>
          ABOUT
        </a>

        <a href="#work" onClick={closeMenu}>
          WORK
        </a>

        <a href="#skills" onClick={closeMenu}>
          SKILLS
        </a>

        <a href="#contact" onClick={closeMenu}>
          CONTACT
        </a>

        <a
          href="#contact"
          className="mobile-talk"
          onClick={closeMenu}
        >
          LET'S TALK ↗
        </a>
      </div>
    </nav>
  );
}

export default Navbar;