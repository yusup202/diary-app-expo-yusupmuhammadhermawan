import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';
import DiaryCard from '../components/DiaryCard';

// 1. Memanggil gambar lokal (kucing peci) dari folder assets/moods
const catImage = require('../../assets/moods/happy.jpg'); 

// 2. Data diperbanyak menjadi 5 entri sesuai tugas modul
const diaryEntries = [
  {
    id: 1,
    title: 'Pagi yang Tenang',
    date: '2026-10-11',
    preview: 'Hari ini aku bangun lebih pagi dan berjalan kaki 20 menit. Udara terasa sejuk...',
    moodUri: catImage, // Menggunakan gambar lokal kucing
    moodColor: '#4ade80', // Warna bingkai Hijau
  },
  {
    id: 2,
    title: 'Produktif di Kampus',
    date: '2026-10-10',
    preview: 'Menyelesaikan modul praktikum dan berdiskusi dengan tim. Banyak insight baru...',
    moodUri: 'https://picsum.photos/seed/focus/80',
    moodColor: '#3b82f6', // Warna bingkai Biru
  },
  {
    id: 3,
    title: 'Senja di Taman',
    date: '2026-10-09',
    preview: 'Menikmati senja sambil membaca buku favorit. Warna langit sangat indah...',
    moodUri: 'https://picsum.photos/seed/calm/80',
    moodColor: '#f59e0b', // Warna bingkai Oren
  },
  {
    id: 4,
    title: 'Mengerjakan Tugas Expo',
    date: '2026-10-08',
    preview: 'Menyusun kode React Native, mengatur folder, dan menyelesaikan laporan...',
    moodUri: 'https://picsum.photos/seed/code/80',
    moodColor: '#6366f1', // Warna bingkai Indigo
  },
  {
    id: 5,
    title: 'Jalan-jalan Santai',
    date: '2026-10-07',
    preview: 'Menghabiskan waktu akhir pekan dengan bersantai dan mencari inspirasi baru...',
    moodUri: 'https://picsum.photos/seed/relax/80',
    moodColor: '#ec4899', // Warna bingkai Pink
  },
];

export default function DiaryListScreen() {
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      
      {/* 3. Menambahkan Header yang berisi Teks dan Avatar Pengguna */}
      <View style={styles.headerContainer}>
        <Text style={styles.header}>Buku Harian</Text>
        {/* Menggunakan foto kucing sebagai avatar profil */}
        <Image source={catImage} style={styles.avatar} />
      </View>

      {/* Menampilkan daftar komponen DiaryCard */}
      {diaryEntries.map((entry) => (
        <DiaryCard
          key={entry.id}
          title={entry.title}
          date={entry.date}
          preview={entry.preview}
          moodUri={entry.moodUri}
          moodColor={entry.moodColor} // Mengirim properti warna bingkai
        />
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  content: {
    padding: 16,
  },
  headerContainer: {
    flexDirection: 'row', // Membuat teks dan avatar sejajar kiri-kanan
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: '700',
  },
  avatar: {
    width: 45,
    height: 45,
    borderRadius: 25, // Membuat foto menjadi bulat
    backgroundColor: '#e5e7eb',
  },
});