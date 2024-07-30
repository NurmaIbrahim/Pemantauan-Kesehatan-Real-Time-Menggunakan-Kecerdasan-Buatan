// userService.js

import axios from 'axios'; // Pastikan axios terpasang dengan `npm install axios`
import { setUser, updateUser, logoutUser } from './userActions';

// Konfigurasi URL API (contoh, sesuaikan dengan endpoint API Anda)
const API_URL = 'https://api.example.com/users';

// Fungsi untuk mengambil data pengguna dari API
export const fetchUserData = (dispatch) => {
  axios.get(`${API_URL}/me`)
    .then(response => {
      // Jika berhasil, dispatch data pengguna ke store
      dispatch(setUser(response.data));
    })
    .catch(error => {
      console.error('Error fetching user data:', error);
      // Anda bisa menambahkan tindakan untuk menangani error di sini
    });
};
