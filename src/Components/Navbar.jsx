import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';
import logo from './Images/logo.png';

const Navbar = () => {
  const location = useLocation();

  return (
    <nav className="navbar">
      <img src={logo} alt="Logo" />
      <ul className="navbar-nav">
        <li className={`nav-item ${location.pathname === '/' ? 'selected' : ''}`}>
          <Link to="/" className="nav-link">Home</Link>
          <div className='underline'></div>
        </li>
        <li className={`nav-item ${location.pathname === '/shop' ? 'selected' : ''}`}>
          <Link to="/shop" className="nav-link">Shop</Link>
          <div className='underline'></div>
        </li>
        <li className={`nav-item ${location.pathname === '/about' ? 'selected' : ''}`}>
          <Link to="/about" className="nav-link">About</Link>
          <div className='underline'></div>
        </li>
        <li className={`nav-item ${location.pathname === '/contact' ? 'selected' : ''}`}>
          <Link to="/contact" className="nav-link">SignIn</Link>
          <div className='underline'></div>
        </li>
      </ul>
      <h2>E.com</h2>
    </nav>
  );
};

export default Navbar;
