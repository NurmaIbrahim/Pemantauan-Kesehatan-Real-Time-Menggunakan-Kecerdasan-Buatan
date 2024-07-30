import React, { useState } from 'react';
import AlertList from './AlertList';

const AlertPage = () => {
  const [alerts, setAlerts] = useState([
    { id: 1, type: 'success', message: 'This is a success alert!' },
    { id: 2, type: 'danger', message: 'This is a danger alert!' },
    { id: 3, type: 'warning', message: 'This is a warning alert!' },
    { id: 4, type: 'info', message: 'This is an info alert!' },
  ]);

