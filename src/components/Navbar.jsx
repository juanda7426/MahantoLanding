import React from "react";

const Navbar = ({ scrolled }) => {
  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="container">
        <a href="#" className="logo">
          Don<span>Juan</span>
        </a>
        <ul className="nav-links">
          <li>
            <a href="#menu">Menú</a>
          </li>
          <li>
            <a href="#contacto">Contacto</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
