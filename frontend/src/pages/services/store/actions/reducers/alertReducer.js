// alertReducer.js

// Tindakan (actions) untuk alert
const SHOW_ALERT = 'SHOW_ALERT';
const HIDE_ALERT = 'HIDE_ALERT';

// Fungsi tindakan (action creators)
export const showAlert = (message, alertType) => ({
  type: SHOW_ALERT,
  payload: { message, alertType }
});

