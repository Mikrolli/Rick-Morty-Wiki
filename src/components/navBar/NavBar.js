import React from 'react';
import { NavLink, Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav class="navbar navbar-expand-lg bg-light">
      <div class="container">
      <Link className="fs-3 fw-bold ubuntu navbar-brand">
        Rick & Morty <span className="text-primary">WiKi</span>
      </Link>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <NavLink to='/' class="nav-link">
                Characters
                </NavLink>
            </li>
            <li class="nav-item">
              <NavLink to='/episodes' class="nav-link">
                Episodes
                </NavLink>
            </li>
            <li class="nav-item">
              <NavLink to='/location' class="nav-link">
                Location
                </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;