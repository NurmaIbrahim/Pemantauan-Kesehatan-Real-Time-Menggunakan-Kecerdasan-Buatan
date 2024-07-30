import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const Navbar = ({ links }) => {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <Link to="/">BrandName</Link>
      </div>
      <ul className="navbar-links">
        {links.map((link, index) => (
          <li key={index} className="navbar-item">
            <Link to={link.path}>{link.label}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

