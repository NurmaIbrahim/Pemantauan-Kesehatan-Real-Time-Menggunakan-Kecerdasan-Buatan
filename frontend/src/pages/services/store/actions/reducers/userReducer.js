// userReducer.js

// Tindakan (actions) untuk pengguna
const SET_USER = 'SET_USER';
const UPDATE_USER = 'UPDATE_USER';
const LOGOUT_USER = 'LOGOUT_USER';

// Fungsi tindakan (action creators)
export const setUser = (user) => ({
  type: SET_USER,
  payload: user
});
