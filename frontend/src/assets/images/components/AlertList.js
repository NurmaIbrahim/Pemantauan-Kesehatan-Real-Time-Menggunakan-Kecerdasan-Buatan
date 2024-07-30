import React, { useState, useEffect } from 'react';

const AlertList = ({ alerts }) => {
  const [visibleAlerts, setVisibleAlerts] = useState(alerts);

  useEffect(() => {
    setVisibleAlerts(alerts);
  }, [alerts]);

  const handleDismiss = (id) => {
    setVisibleAlerts(visibleAlerts.filter(alert => alert.id !== id));
  }
