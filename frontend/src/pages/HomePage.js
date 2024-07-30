import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div className="home-page">
      <h1>Welcome to Our Application</h1>
      <p>This is the main landing page of the application. From here, you can navigate to various sections of the app using the menu.</p>
      <div className="home-page-links">
        <Link to="/alerts" className="home-page-link">View Alerts</Link>
        <Link to="/users" className="home-page-link">View Users</Link>
        <Link to="/health-data" className="home-page-link">View Health Data</Link>
      </div>
    </div>
  );
};
