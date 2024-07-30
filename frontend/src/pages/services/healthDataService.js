// healthDataService.js

import axios from 'axios'; // Pastikan axios terpasang dengan `npm install axios`
import { setHealthData, updateHealthData, clearHealthData } from './healthDataActions';

// Konfigurasi URL API (contoh, sesuaikan dengan endpoint API Anda)
const API_URL = 'https://api.example.com/healthdata';

// Fungsi untuk mengambil data kesehatan dari API
export const fetchHealthData = (dispatch) => {
  axios.get(`${API_URL}/current`)
    .then(response => {
      // Jika berhasil, dispatch data ke store
      dispatch(setHealthData(response.data));
    })
    .catch(error => {
      console.error('Error fetching health data:', error);
      // Anda bisa menambahkan tindakan untuk menangani error di sini
    });
};
