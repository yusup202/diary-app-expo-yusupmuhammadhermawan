# Diary App - Tugas Praktikum 3

**Nama:** Yusuf Muhammad Hermawan
**NIM:** 2440511001

### Langkah Menjalankan Proyek
1. Pastikan Node.js sudah terinstal di komputer.
2. Buka terminal di dalam folder proyek ini.
3. Ketik perintah `npm install` untuk mengunduh semua dependensi (`node_modules`).
4. Ketik perintah `npx expo start` untuk menjalankan server.
5. Tekan tombol `w` di terminal untuk membuka via browser (web), atau buka aplikasi Expo Go di HP lalu scan QR Code.

### Fitur yang Diselesaikan (Praktikum 3)
- Menerapkan *Design Tokens* (`tokens.js`) dan *StyleSheet* secara terpusat.
- Membuat daftar responsif menggunakan `FlatList`.
- Menambahkan interaksi `Pressable` pada kartu *diary*.
- Menambahkan `DiaryDetailModal` (pop-up) yang terbuka saat kartu ditekan.
- Memastikan aksesibilitas dasar seperti `accessibilityLabel` dan target sentuh.

### Penjelasan Breakpoint 600px
Aplikasi ini menggunakan *hook* `useWindowDimensions` dari React Native untuk mengecek ukuran layar. 
- Jika lebar layar **kurang dari 600px** (layar sempit/ponsel), aplikasi menginstruksikan `FlatList` untuk merender daftar dalam **1 kolom** (`numColumns={1}`).
- Jika lebar layar **>= 600px** (jendela dilebarkan/tablet), aplikasi merender ulang tampilan menjadi **2 kolom** (`numColumns={2}`) secara otomatis untuk memaksimalkan ruang layar yang luas.