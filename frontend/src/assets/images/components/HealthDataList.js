import React from 'react';
import PropTypes from 'prop-types';
import HealthDataDetail from './HealthDataDetail';

const HealthDataList = ({ dataList }) => {
  if (!dataList || dataList.length === 0) {
    return <div>No health data available.</div>;
  }

