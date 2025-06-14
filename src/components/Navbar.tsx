import React, { useState } from 'react';
import './Navbar.css';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="navbar">
      <div className="logo">Lorem Ipsum</div>
      <div className={`nav-links ${isOpen ? 'open' : ''}`}>
        <a href="#about">About</a>
        <a href="#shop">Shop</a>
        <a href="#project">Project</a>
        <a href="#contact">Contact Us</a>
      </div>
      <div className="hamburger" onClick={toggleMenu}>
        ☰
      </div>
    </nav>
  );
};

export default Navbar;
