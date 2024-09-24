import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light container-fluid">
      <Link className="navbar-brand" to="/">
        <img src={`${process.env.PUBLIC_URL}/votefavicon.png`} alt="Logo" style={{ width: '40px', height: '40px' }} />
        Poll App
      </Link>
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
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link className="nav-link" to="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/poll-results">PollResult</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/add-poll">Add Poll</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
