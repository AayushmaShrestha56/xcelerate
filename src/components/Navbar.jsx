import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <header className="custom-navbar">
      <div className="extra-links">
        <NavLink to="/about">About</NavLink>
        <NavLink to="/contact">Contact</NavLink>
        <NavLink to="/login" >Log In</NavLink>
      </div>

      <div className="navbar-container">
        <div className="logo">
          <img src="/loho.jpg" alt="Logo" className="logo-img" />
          <span className="logo-text">
            XCELERATE<br />STATS
          </span>
        </div>

        <nav className="main-menu">
          <NavLink to="/" activeClassName="active">HOME</NavLink>
          <NavLink to="/fan-engagement">FAN ENGAGEMENT</NavLink>
          <NavLink to="/service">SERVICE</NavLink>
          <NavLink to="/performance">TEAM PERFORMANCE</NavLink>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
