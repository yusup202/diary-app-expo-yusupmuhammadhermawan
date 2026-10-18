import React, { useMemo, useState } from 'react';
import { View, Text, StyleSheet, FlatList, useWindowDimensions } from 'react-native';
import DiaryCard from '../components/DiaryCard';
import DiaryDetailModal from '../components/DiaryDetailModal';
import { COLORS, SPACE, TYPO, BREAKPOINTS } from '../styles/tokens';

// Memanggil gambar lokal (kucing peci) dari folder assets/moods
const catImage = require('../../assets/moods/happy.jpg'); 

// Data ditambahkan 'body' dan 'heroUri' untuk keperluan modal
const DATA = [
  {
    id: 1,
    title: 'Pagi yang Tenang',
    date: '2026-10-11',
    preview: 'Hari ini aku bangun lebih pagi dan berjalan kaki 20 menit...',
    body: 'Hari ini aku bangun lebih pagi dan berjalan kaki 20 menit. Udara terasa sejuk dan menyegarkan. Menghirup udara segar di pagi hari membuat pikiranku lebih jernih untuk memulai aktivitas hari ini.',
    moodUri: catImage, 
    heroUri: 'https://picsum.photos/seed/happyhero/800/450',
  },
  {
    id: 2,
    title: 'Produktif di Kampus',
    date: '2026-10-10',
    preview: 'Menyelesaikan modul praktikum dan berdiskusi dengan tim...',
    body: 'Menyelesaikan modul praktikum dan berdiskusi dengan tim. Banyak insight baru yang didapatkan hari ini. Kami berhasil menyelesaikan layout responsif dan berencana melanjutkannya besok.',
    moodUri: 'https://picsum.photos/seed/focus/200',
    heroUri: 'https://picsum.photos/seed/focushero/800/450',
  },
  {
    id: 3,
    title: 'Senja di Taman',
    date: '2026-10-09',
    preview: 'Menikmati senja sambil membaca buku favorit...',
    body: 'Menikmati senja sambil membaca buku favorit. Warna langit sangat indah, perpaduan jingga dan ungu. Momen seperti ini sangat berharga untuk melepas penat setelah seharian coding.',
    moodUri: 'https://picsum.photos/seed/calm/200',
    heroUri: 'https://picsum.photos/seed/calmhero/800/450',
  },
  {
    id: 4,
    title: 'Mengerjakan Tugas Expo',
    date: '2026-10-08',
    preview: 'Menyusun kode React Native, mengatur folder, dan menyelesaikan laporan...',
    body: 'Hari ini fokus menyusun kode React Native, merapikan struktur folder, dan menyelesaikan laporan praktikum. Semua berjalan lancar dan akhirnya berhasil di-push ke GitHub.',
    moodUri: 'https://picsum.photos/seed/code/200',
    heroUri: 'https://picsum.photos/seed/codehero/800/450',
  },
  {
    id: 5,
    title: 'Jalan-jalan Santai',
    date: '2026-10-07',
    preview: 'Menghabiskan waktu akhir pekan dengan bersantai dan mencari inspirasi baru...',
    body: 'Menghabiskan waktu akhir pekan dengan berjalan-jalan santai mencari inspirasi desain UI baru. Bertemu banyak hal menarik yang mungkin bisa diterapkan di project selanjutnya.',
    moodUri: 'https://picsum.photos/seed/relax/200',
    heroUri: 'https://picsum.photos/seed/relaxhero/800/450',
  }
];

export default function DiaryListScreen() {
  // Hook untuk membaca ukuran lebar layar saat ini
  const { width } = useWindowDimensions();
  // Jika lebar layar >= 600px, jadikan 2 kolom
  const twoCols = width >= BREAKPOINTS.tablet;
  
  // State untuk menyimpan data kartu mana yang sedang diklik (untuk modal)
  const [selected, setSelected] = useState(null);

  // Memaksa FlatList me-render ulang jika jumlah kolom berubah
  const keyForCols = useMemo(() => (twoCols ? 'grid2' : 'list1'), [twoCols]);

  const renderItem = ({ item }) => (
    <View style={[styles.itemWrap, twoCols && styles.itemWrap2]}>
      <DiaryCard
        title={item.title}
        date={item.date}
        preview={item.preview}
        moodUri={item.moodUri}
        variant={twoCols ? 'grid' : 'list'}
        onPress={() => setSelected(item)} // Membuka modal saat kartu diklik
      />
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Buku Harian</Text>
      <FlatList
        key={keyForCols}
        data={DATA}
        numColumns={twoCols ? 2 : 1} // Dinamis 1 atau 2 kolom
        keyExtractor={(it) => String(it.id)}
        renderItem={renderItem}
        columnWrapperStyle={twoCols ? { gap: SPACE.m } : undefined}
        contentContainerStyle={{
          padding: SPACE.l,
          gap: SPACE.m,
          paddingTop: SPACE.m,
        }}
        ListEmptyComponent={
          <Text style={styles.empty}>Belum ada entri.</Text>
        }
      />
      
      {/* Menampilkan Modal jika ada entri yang di-klik */}
      <DiaryDetailModal
        visible={!!selected}
        entry={selected}
        onClose={() => setSelected(null)} // Menutup modal
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: COLORS.surface },
  header: {
    fontSize: TYPO.h1,
    fontWeight: '700',
    paddingHorizontal: SPACE.l,
    paddingTop: SPACE.l,
    color: COLORS.text,
  },
  itemWrap: { flex: 1 },
  itemWrap2: { flex: 1 / 2 }, // Mengambil 50% lebar layar untuk 2 kolom
  empty: { textAlign: 'center', color: COLORS.muted, marginTop: 40 },
});