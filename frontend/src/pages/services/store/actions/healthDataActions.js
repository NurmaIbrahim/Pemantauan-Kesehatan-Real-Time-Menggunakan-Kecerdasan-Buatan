// healthDataActions.js

// Tindakan (action types)
export const SET_HEALTH_DATA = 'SET_HEALTH_DATA';
export const UPDATE_HEALTH_DATA = 'UPDATE_HEALTH_DATA';
export const CLEAR_HEALTH_DATA = 'CLEAR_HEALTH_DATA';

// Fungsi tindakan (action creators)
export const setHealthData = (data) => ({
  type: SET_HEALTH_DATA,
  payload: data
});
