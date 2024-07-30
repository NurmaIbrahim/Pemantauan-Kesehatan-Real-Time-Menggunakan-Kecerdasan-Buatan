// Contoh implementasi User.js untuk merepresentasikan informasi pengguna

// Definisikan kelas User
class User {
  constructor(id, username, email, fullName, birthdate) {
    this.id = id; // ID unik untuk setiap pengguna
    this.username = username; // Nama pengguna (username)
    this.email = email; // Alamat email pengguna
    this.fullName = fullName; // Nama lengkap pengguna
    this.birthdate = birthdate; // Tanggal lahir pengguna
    this.createdAt = new Date(); // Waktu pembuatan akun, diset otomatis saat objek dibuat
  }
