// userActions.js

// Tindakan (action types)
export const SET_USER = 'SET_USER';
export const UPDATE_USER = 'UPDATE_USER';
export const LOGOUT_USER = 'LOGOUT_USER';

// Fungsi tindakan (action creators)
export const setUser = (user) => ({
  type: SET_USER,
  payload: user
});
