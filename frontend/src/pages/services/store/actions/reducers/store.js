// store.js

import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk'; // Middleware untuk async actions
import logger from 'redux-logger'; // Middleware untuk logging actions (opsional)
import healthDataReducer from './healthDataReducer'; // Import reducer
import alertReducer from './alertReducer'; // Import reducer

// Menggabungkan semua reducer
const rootReducer = combineReducers({
  healthData: healthDataReducer,
  alert: alertReducer
  // Tambahkan reducer lain di sini jika ada
});
