import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <a href="#home" className="logo">
        HY<span>.</span>
      </a>

      <div className="nav-links">
        <a href="#about">ABOUT</a>
        <a href="#work">WORK</a>
        <a href="#skills">SKILLS</a>
        <a href="#contact">CONTACT</a>
      </div>

      <a href="#contact" className="talk-button">
        LET'S TALK ↗
      </a>
    </nav>
  );
}

export default Navbar;