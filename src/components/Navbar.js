import React from "react";
import logo from "../images/logo-sports.png";
import { FaBars } from "react-icons/fa";
const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-center">
        <div className="nav-header">
          <img src={logo} alt="logo sports" className="logo" />
          <button className="btn toggle-btn">
            <FaBars />
          </button>
        </div>
      </div>
      <ul className="navbar-links">
        <li>
          <a className="link-btn" href="#about">
            about
          </a>
        </li>
        <li>
          <a className="link-btn" href="#sports">
            sports
          </a>
        </li>
        <li>
          <a className="link-btn" href="#contact">
            contact
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
