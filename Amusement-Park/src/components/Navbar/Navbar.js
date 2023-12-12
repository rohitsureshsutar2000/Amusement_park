import React from 'react'
import {Link } from 'react-router-dom'; 

function Navbar() {
  return (
    <div className="sticky-top">
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark ">
        <a className="navbar-brand" href="#">Amusement Park</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
          <Link to="/">
            <li className="nav-item active">
              <a className="nav-link text-decoration-none" href="#">Home <span className="sr-only">(current)</span></a>
            </li>
            </Link>
            <Link to="/About">
            <li className="nav-item">
              <a className="nav-link text-decoration-none" href="#">About</a>
            </li> 
            </Link>
            <Link to="/offers">
            <li className="nav-item">
              <a className="nav-link text-decoration-none" href="#">Offers</a>
            </li>
            </Link>
            <Link to="/feedback">
            <li className="nav-item">
              <a className="nav-link text-decoration-none" href="#">Feedback</a>
            </li>
            </Link>
            <Link to="/AdminLogin">
            <li className="nav-item">
              <a className="nav-link text-decoration-none" href="#">Admin</a>
            </li>
            </Link>
          </ul>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
