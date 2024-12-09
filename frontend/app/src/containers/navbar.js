import React from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

export default function Navbar() {
  const path = useLocation().pathname;
  return (
    <>
      <nav className="navbar navbar-expand-md navbar-light bg-secondary sticky-top border-bottom-accent px-3">
        <a className="navbar-brand" href="/">
          SAD
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link
                className={`nav-link ${path === "/" ? "active" : ""}`}
                to="/"
              >
                Home
              </Link>
            </li>
            <li className="nav-item ">
              <Link
                className={`nav-link ${path === "/about" ? "active" : ""}`}
                to="/about"
              >
                About
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}
