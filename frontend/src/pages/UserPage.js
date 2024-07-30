import React from 'react';
import { useParams, Link } from 'react-router-dom';

const UserPage = ({ users }) => {
  // Mengambil parameter ID dari URL
  const { id } = useParams();
  
  // Mencari pengguna dengan ID yang sesuai
  const user = users.find(user => user.id === parseInt(id));

  if (!user) {
    return (
      <div className="user-page">
        <h1>User Not Found</h1>
        <p>Sorry, the user you are looking for does not exist.</p>
        <Link to="/users" className="user-page-link">Go to User List</Link>
      </div>
    );
  }
