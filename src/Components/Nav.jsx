import React from "react";

function Nav() {
  return (
    <div>
      <nav classNameName="d-flex justify-content-between container">
        <a className="nav-link logo" href="index.html">
          <span role="img">🏠</span> HomeSchool
        </a>
        <ul className="d-flex nav">
          <li className="nav-item">
            <a className="nav-link text-dark" href="#">
              About
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-dark" href="#">
              Contact
            </a>
          </li>
          <li className="nav-item ml-5">
            <a className="nav-link orange-link" href="register-teacher.html">
              Become a teacher
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Nav;
