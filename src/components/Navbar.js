import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <a href="#home">GS</a>
      </div>
      <div className="navbar-links">
        <a href="#home">Home</a>
        <a href="#experience">Experience</a>
        <a href="#education">Education</a>
        <a href="#contact">Contact</a>
      </div>
    </nav>
  );
}

export default Navbar;