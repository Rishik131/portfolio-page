// import React from "react";
// import "../styles/Header.css";

// const Header = () => {
//   return (
//     <header className="header">
//       <h2 className="logo">Rishik Kumar</h2>
//       <nav>
//         <a href="#about">About</a>
//         <a href="#skills">Skills</a>
//         <a href="#projects">Projects</a>
//         <a href="#contact">Contact</a>
//       </nav>
//     </header>
//   );
// };

// export default Header;


import React, { useState } from "react";
import "../styles/Header.css";
import { FaBars, FaTimes } from "react-icons/fa";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="header">
      <h2 className="logo">Rishik Kumar</h2>

      <nav className={`nav-links ${isOpen ? "open" : ""}`}>
        <a href="#about" onClick={() => setIsOpen(false)}>About</a>
        <a href="#skills" onClick={() => setIsOpen(false)}>Skills</a>
        <a href="#projects" onClick={() => setIsOpen(false)}>Projects</a>
        <a href="#contact" onClick={() => setIsOpen(false)}>Contact</a>
      </nav>

      <div className="menu-icon" onClick={toggleMenu}>
        {isOpen ? <FaTimes /> : <FaBars />}
      </div>
    </header>
  );
};

export default Header;
