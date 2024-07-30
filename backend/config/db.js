const mongoose = require('mongoose');

// Menghubungkan ke database MongoDB menggunakan URL koneksi
mongoose.connect('mongodb://localhost:27017/nama_database', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});

// Mengecek apakah koneksi berhasil
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'Koneksi MongoDB gagal:'));
db.once('open', function () {
  console.log('Terhubung ke database MongoDB');
});
