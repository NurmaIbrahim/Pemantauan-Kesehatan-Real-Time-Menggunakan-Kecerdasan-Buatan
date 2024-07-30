import React from 'react';
import PropTypes from 'prop-types';

const HealthDataDetail = ({ data }) => {
  if (!data) {
    return <div>Loading...</div>;
  }
