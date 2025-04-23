// Fungsi untuk menentukan kategori berdasarkan usia
function tentukanKategori(usia) {
  if (usia >= 0 && usia <= 12) {
      return "Anak-anak";
  } else if (usia >= 13 && usia <= 17) {
      return "Remaja";
  } else if (usia >= 18 && usia <= 59) {
      return "Dewasa";
  } else if (usia >= 60) {
      return "Lansia";
  } else {
      return "Usia tidak valid";
  }
}

// Array input usia beberapa orang
let daftarUsia = [10, 6, 15, 25, 40, 33, 70];

// Objek untuk menyimpan jumlah per kategori
let jumlahKategori = {
  "Anak-anak": 0,
  "Remaja": 0,
  "Dewasa": 0,
  "Lansia": 0
};

// Loop untuk klasifikasi dan menghitung jumlah
for (let i = 0; i < daftarUsia.length; i++) {
  let kategori = tentukanKategori(daftarUsia[i]);
  if (jumlahKategori.hasOwnProperty(kategori)) {
      jumlahKategori[kategori]++;
  }
}

// Menampilkan hasil
console.log(`Anak-anak: ${jumlahKategori["Anak-anak"]} orang`);
console.log(`Remaja: ${jumlahKategori["Remaja"]} orang`);
console.log(`Dewasa: ${jumlahKategori["Dewasa"]} orang`);
console.log(`Lansia: ${jumlahKategori["Lansia"]} orang`);
