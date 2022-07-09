import React from "react";

function Navbar() {
  return (
    <nav
      className="navbar navbar-expand-lg"
      style={{ "background-color": "#4f6d7a" }}
    >
      <div className="container-fluid d-flex justify-content-around">
        <a className="navbar-brand ms-5 text-light " href="#">
          <i className="fas fa-football-ball"></i> Sports
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a
                className="nav-link active text-light"
                aria-current="page"
                href="#"
              >
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-light" href="#">
                About
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-light" href="#">
                Services
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link me-5 text-light" href="#">
                Contact
              </a>
            </li>
            {/* <li className="nav-item">
                <a className="nav-link disabled">Disabled</a>
              </li> */}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
