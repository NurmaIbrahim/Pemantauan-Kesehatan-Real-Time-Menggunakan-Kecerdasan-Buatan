// alertService.js

import { showAlert, hideAlert } from './alertActions';

// Fungsi untuk menampilkan alert dengan jenis dan pesan
export const displayAlert = (dispatch, message, alertType, timeout = 5000) => {
  // Menampilkan alert
  dispatch(showAlert(message, alertType));
  
  // Menyembunyikan alert setelah waktu tertentu
  setTimeout(() => {
    dispatch(hideAlert());
  }, timeout);
};

