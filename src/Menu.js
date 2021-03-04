import React from "react";
import { Link } from "react-router-dom";

export default function Menu() {
  return (
    <nav role="navigation">
      <div className="nav-wrapper container">
        <a id="logo-container" href="#" className="brand-logo">
          Book Store
        </a>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li>
            <Link to="/">Procurar</Link>
          </li>
          <li>
            <Link to="/favoritos">Favoritos</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
