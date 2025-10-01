import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <header className="custom-navbar">
      <div className="extra-links">
        <NavLink to="/SignUp">SignUp</NavLink>
        <NavLink to="/contactus">Contact</NavLink>
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
          <NavLink to="/about">ABOUT</NavLink>
          <NavLink to="/service">SERVICE</NavLink>
          <NavLink to="/team">TEAM PERFORMANCE</NavLink>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
