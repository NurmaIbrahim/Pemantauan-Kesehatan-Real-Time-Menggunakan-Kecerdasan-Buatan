// alertActions.js

// Tindakan (action types)
export const SHOW_ALERT = 'SHOW_ALERT';
export const HIDE_ALERT = 'HIDE_ALERT';

// Fungsi tindakan (action creators)
export const showAlert = (message, alertType) => ({
  type: SHOW_ALERT,
  payload: { message, alertType }
});

