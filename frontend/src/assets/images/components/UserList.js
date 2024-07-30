import React from 'react';
import PropTypes from 'prop-types';

const UserList = ({ users }) => {
  if (!users || users.length === 0) {
    return <div>No users available.</div>;
  }
