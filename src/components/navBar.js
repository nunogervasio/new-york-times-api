import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-md navbar-light bg-light mb-5">
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav mx-auto">
          <li className="nav-item mx-5">
            <NavLink className="nav-link" to="/world">
              World
            </NavLink>
          </li>
          <li className="nav-item  mx-5">
            <NavLink className="nav-link" to="/technology">
              Technology
            </NavLink>
          </li>
          <li className="nav-item  mx-5">
            <NavLink className="nav-link" to="/arts">
              Arts
            </NavLink>
          </li>
          <li className="nav-item  mx-5">
            <NavLink className="nav-link" to="/science">
              Science
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
