import React from 'react';
import './HomeNavbar.css';
import { Link } from 'react-router-dom';

function HomeNavbar() {
  return (
    <nav className="navbar">
      <ul className="navbar-list">
        <li className="navbar-item">
          <button className="navbar-button"><Link className="nav-link" to="/">Home</Link></button>
        </li>
        <li className="navbar-item">
          <button className="navbar-button"> <Link className="nav-link" to="/blogs">Blogs</Link></button>
        </li>
        <li className="navbar-item">
          <button className="navbar-button"><Link className="nav-link" to="/gallery">Gallery</Link></button>
        </li>
        <li className="navbar-item">
          <button className="navbar-button"><Link className="nav-link" to="/programs">Programs</Link></button>
        </li>
        <li className="navbar-item">
          <button className="navbar-button"><Link className="nav-link" to="/contact">Contact</Link></button>
        </li>
        <li className="navbar-item">
          <button className="navbar-button"><Link className="nav-link" to="/login">Login</Link></button>
        </li>
        <li className="navbar-item">
          <button className="navbar-button" ><Link className="nav-link" to="/createuser">SignUp</Link></button>
        </li>
        
      </ul>
    </nav>
  );
}

export default HomeNavbar;
