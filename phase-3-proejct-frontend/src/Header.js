import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <header>
      <h3>Logo</h3>
      <nav>
        <ul>
          <li><Link to="/locations">Locations</Link></li>
          <li><Link to="/register">Register</Link></li>
          <li><Link to="/appointments">Check Appointment</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;